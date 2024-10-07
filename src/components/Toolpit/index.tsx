import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface TooltipProps {
  icon : LucideIcon,
  label : string,
  href : string
}


const  TooltipDemo = ({
  icon : Icon,
  label,
  href
}: TooltipProps)  => {
  const pathName = usePathname()
  const router = useRouter()

  const isActive =( pathName=='/admin' && href==='/admin')|| pathName===href || pathName===`${href}/`

  const onclick = () => {
    router.push(href)
  }
  return (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger 
        asChild>
          <div 
          onClick={onclick}
          className={cn( "flex h-9 w-full items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer",
            isActive ? "bg-black" : "")}>
            <Icon className="h-5 w-5"/>
          </div>  
        </TooltipTrigger>
        <TooltipContent sideOffset={15} side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipDemo;
