"use client"

import { Home, User } from "lucide-react"
import TooltipDemo from "@/components/Toolpit"

const allRoute = [
    {
        icon : Home,
        label : "Home",
        href : "/admin"
    },
    {
        icon : User,
        label : "Account",
        href : "/admin/account"
    }
]

export default function SidebarRoute() {
    return(
        <div className="flex flex-col m-1 p-1 bg-muted/80 items-center gap-1 rounded-md">
            {allRoute.map((route) =>{
                return (
                    <TooltipDemo
                    key={route.href}
                    icon = {route.icon}
                    label={route.label}
                    href={route.href}
                    />
                )
            })}
        </div>
    )
}