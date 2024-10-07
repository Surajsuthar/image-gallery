"use client"
import { Label } from "@/components/ui/label"
import { usePathname } from "next/navigation"

export default function Heading(){
    const route = usePathname()
    const path = route==="/admin" ? "Admin" : "Account"

    return(
        <div className="flex">
            <Label
            className="font-extrabold text-4xl ml-8 mb-2"
            >
                {path}
            </Label>
        </div>
    )
}