"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    LayoutDashboard,
    Settings2Icon,
    Video,
    Videotape,
    WalletCards,
} from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const MenuOption = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace',
    },
    {
        title: 'Create Ad',
        icon: Video,
        path: '/workspace/Create-ads',
    },
    {
        title: 'My Videos',
        icon: Videotape,
        path: '/workspace/my-videos',
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing',
    },
    {
        title: 'Setting',
        icon: Settings2Icon,
        path: '/workspace/settings',
    },
]

const AppSidebar = () => {
    const path = usePathname()
    return (
        <Sidebar>
            <SidebarHeader className="flex items-center">
                <Image src={'/logo.svg'} alt="logo" width={150} height={200} />
            </SidebarHeader>
            <hr />
            <SidebarContent>
                <SidebarGroup>
                    <Button className="w-full">+ Create New Ad Video</Button>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex gap-[40px]">
                            {MenuOption.map((menu, index) => {
                                const Icon = menu.icon;
                                return (
                                    <SidebarMenuItem key={index} className="flex ">
                                        <SidebarMenuButton asChild className="p-5 " >
                                            <Link href={menu.path} className={`flex items-center gap-5 text-[17px] ${path == menu.path && "text-blue-500 bg-gray-300"}`}>
                                                <Icon className="h-[40px] w-[40px]" />
                                                <span>{menu.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar
