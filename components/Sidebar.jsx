"use client"
import React, { useState } from 'react'
import { Nav } from './ui/nav'
import {
    ChevronRight,
    LayoutDashboard,
    ListOrdered,
    Settings,
    UsersRound,
} from "lucide-react"
import { Button } from './ui/button'
import {
    useWindowWidth,
} from '@react-hook/window-size'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const screenWidth = useWindowWidth()
    const mobileScreen = screenWidth < 768

    return (
        <div className='relative min-w-[40px] md:min-w-[80px] border-r md:px-6 pb-10 pt-[14rem]'>
            {!mobileScreen && (
                <div className='absolute right-[-30px] top-7' onClick={() => setIsCollapsed(!isCollapsed)}>
                    <Button variant="secondary" className="rounded-full p-2 h-16 w-16">
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileScreen ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ListOrdered,
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                    },
                ]}
            />
        </div>
    )
}

export default Sidebar