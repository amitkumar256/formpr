import First from "@/components/First";
import { useSession, signIn, getSession, signOut } from "next-auth/react"
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import React from "react";
import HomeComp from "@/components/HomeComp";

export default function Home() {
    // const { data: session } = useSession()
    // const hasFetchedUserProfileRef = useRef(false);

    // const getUserProfile = async () => {
    //     let postdata = {
    //         email: session.user.email
    //     }
    //     const response = await axios.post('api/userprofile', postdata);
    //     console.log(response)
    // }
    // useEffect(() => {
    //     console.log('Session object:', session);
    //     if (session && session.user && !hasFetchedUserProfileRef.current) {
    //         getUserProfile();
    //         hasFetchedUserProfileRef.current = true;
    //         console.log("useEffect Runned");
    //     }
    // }, [session]);

    return (
        <div>
            <HomeComp />
        </div>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    console.log(session, "session")
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,

        },
    };
}