import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { itemID, userName, userContactNumber, userCustomMessage, formattedDateTime, reminderPlatform, enableReminder, disableReminder } = req.body;
        const objectLength = Object.keys(req.body).length;

        if (objectLength === 2 && disableReminder === false) {
            const getSendRemidnerBooleanValue = await setRemainderModel.findOneAndUpdate({ _id: itemID });
            const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { sendReminder: !getSendRemidnerBooleanValue.sendReminder }, { new: true });
            return res.json({
                success: true,
                updatedReminder: updatedReminder
            });
        }

        if (objectLength === 4 && userName.length !== 0 && userContactNumber.length !== 0) {
            const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber }, { new: true });
            return res.json({
                success: true,
                updatedReminder: updatedReminder
            });
        } else if (objectLength === 7 && userCustomMessage.length !== 0 && formattedDateTime.length !== 0 && reminderPlatform.length !== 0) {

            const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber, customMessage: userCustomMessage, customDate: formattedDateTime, reminderPlatform: reminderPlatform, sendReminder: enableReminder }, { new: true });

            // Finding Time Difference Between Date Selected By User, & Current Date
            const timestamp1 = new Date(formattedDateTime);
            const timestamp2 = new Date();

            const difference = timestamp1 - timestamp2;

            // Converting The Time Difference To Milliseconds
            const milliseconds = Math.abs(difference);

            // ! console.log(updatedReminder);
            const message = {
                to: updatedReminder.userEmail,
                from: process.env.SENDGRID_EMAIL_ID,
                subject: 'Reminder Updated',
                text: 'Your reminder has been updated successfully.',
                html: `You have a meeting with ${userName} On ${formattedDateTime}. Their phone number is ${userContactNumber}. ${userCustomMessage}`
            };

            if (milliseconds > 0) {
                setTimeout(async () => {
                    const checkReminder = await setRemainderModel.findOne({ _id: itemID }).select('sendReminder');

                    if (checkReminder === null) {
                        return false;
                    }
                    if (checkReminder.sendReminder === false) {
                        return;
                    }

                    // Code To Send The Reminder To The User
                    try {
                        const expireTheReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { expired: true }, { new: true });
                        await sgMail.send(message);
                        console.log('Notification email sent successfully');
                    } catch (error) {
                        console.error('Error sending notification email:', error);
                    }
                }, milliseconds);
            } else {
                // console.log('Selected date is in the past. No notification will be sent.');
            }
            return res.json({
                success: true,
                // updatedReminder: updatedReminder
            });
        }
    }
}