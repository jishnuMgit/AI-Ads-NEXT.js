"use client"
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import React, { useEffect, useState } from "react";
import AppSidebar from "./_components/AppSidebar";

function WorkspaceProvider({ children }) {
    const newUserMustation = useMutation(api.users.CreateUser);
    const { user } = useUser();
    const [userDeatiles, setUserdetailes] = useState();
    // console.log('users', user);

    useEffect(() => {
        user && CreatenewUser()
    }, [user])

    const CreatenewUser = async () => {
        const result = await newUserMustation({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            picture: user?.imageUrl
        })
        console.log("all result", result);
        setUserdetailes(result)

    }
    return (

        <UserDetailContext.Provider value={{ userDeatiles, setUserdetailes }}>
            <SidebarProvider>
                <AppSidebar />
                <div>
                    <SidebarTrigger />
                    {children}
                </div>

            </SidebarProvider>

        </UserDetailContext.Provider>

    )
}

export default WorkspaceProvider