import Logo from "@/app/admin/_component/logo"
import SidebarRoute from "@/app/admin/_component/sidebaroute"

export function Navbar() {
  return (
    <nav className="h-full flex flex-col gap-y-4 shadow-sm border-r bg-black">
        <div className="p-4">
            <Logo/>
        </div>
        <div className="w-full flex flex-col gap-4 px-1">
            <SidebarRoute/>
        </div>
    </nav>
  )
}
