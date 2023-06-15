import React from "react";
import { useEffect } from "react";
import ProfileImg from "./ProfileImg.jsx";
import Image from "next/image";
import BioTemp from "./BioTemp";
import Socialpg from "./Socialpg";
import { saveAs } from "file-saver"; // Import the file-saver library

const Template = ({
    fname,
    type,
    border,
    lname,
    btntext,
    profileImg,
    designation,
    bio,
    company,
    website,
    mobile,
    gradient1,
    gradient2,
    text1,
    text2,
    text3,
    btn,
    loop,
    gmail,
    instaLink,
    watspLink,
    linkedLink,
    profile,
    faceLink,
    gmailLink,
}) => {
    const downloadVCard = () => {
        // Create a vCard string from the contact data
        const vCard = `BEGIN:VCARD
FN:${fname} ${lname}
TEL;TYPE=CELL:${mobile}
EMAIL;: ${gmail}
URL:${website}
END:VCARD`;
console.log(gradient2)
        console.log("imghello" + profileImg)
        // Convert the vCard string to a Blob object
        const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });

        // Save the Blob as a file using the file-saver library
        saveAs(blob, "hello.vcf");
    };
    console.log(instaLink);

    const fullName = fname || lname ? `${fname} ${lname}` : "Andrew Darren";

    return (
        <div className="flex justify-center  mx-auto max-w-[375px] h-auto">
            <div
                className={`relative mx-auto h-[820px] max-w-[375px]  border-black border-[10px] rounded-[30px] pt-[161px]`}
                style={{backgroundImage:`url(${gradient1})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',}}
            >
                <Image src="/assets/images/templateimg/Button.png" height={80} width={10} className="absolute top-48 -right-3.5"/>
                <Image src="/assets/images/templateimg/PowerButoon.png" height={40} width={10} className="absolute top-28 -left-3.5" />
                <Image src="/assets/images/templateimg/VolumeButton.png" height={60} width={10} className="absolute top-44 -left-3.5" />
                <Image src="/assets/images/templateimg/VolumeButton.png" height={60} width={10} className="absolute top-64 -left-3.5" />
                <div
                    className={`${gradient2} relative  max-w-[375px] mx-auto h-full  rounded-[20px] `}
                >
                    <div className="-top-[79px] inset-0 mx-auto absolute h-[100px] w-[100px] ">
                        <ProfileImg profileImg={profileImg} />
                    </div>

                    <div className="flex justify-center pt-[40px] font-semibold text-[20px] tracking-[-0.5px] ">
                        <input
                            className={`text-center bg-transparent ${text1} `}
                            type="text"
                            value={lname !== undefined ? `${fname} ${lname}` : fname || "Andrew Darren"}
                            placeholder={lname !== undefined ? '' : fname || "Andrew Darren"}

                        //   value={inputValue}
                        //   onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-center mt-[11px] font-semibold text-[16px]">
                        <input
                            className={`text-center bg-transparent ${text2} text-[#7D9695] `}
                            type="text"
                            placeholder="Design Lead"
                            value={designation}
                        //   onChange={handleChange}
                        />
                    </div>
                    <div>
                        <BioTemp
                            bio={bio}
                            border={border}
                            text1={text1}
                            text2={text2}
                            company={company}
                            mobile={mobile}
                            website={website}
                        />
                    </div>

                    <div className="">
                        <Socialpg
                            text1={text1}
                            type={type}
                            instaLink={instaLink}
                            watspLink={watspLink}
                            linkedLink={linkedLink}
                            faceLink={faceLink}
                            gmailLink={gmailLink}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className={`${btn} border-2 mx-6 text-[20px] ${btntext}  font-extrabold h-[50px] w-[304px] rounded-[14px] mt-7`}
                            onClick={downloadVCard}
                        >
                            SAVE CONTACT
                        </button>
                    </div>

                    <div
                        className={`text-[10px] flex justify-center items-center mt-7 pb-7  ${text1}`}
                    >
                        <p> made with love by</p>
                        <img
                            className="h-[12px] w-[27px] ml-1"
                            src="/assets/images/display/loops.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template;