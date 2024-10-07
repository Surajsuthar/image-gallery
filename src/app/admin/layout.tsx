import {Navbar} from "@/components/Navbar"
import Heading from "./_component/heading"

const AdminLayout = ({children} : { children: React.ReactNode }) =>{
    return(
        <div className="min-h-screen">
            <div className="fixed h-full flex flex-col w-[70px] inset-y-0 z-50">
                <Navbar/>
            </div>
            <main className="pl-[70px] h-full">
                <div className="flex flex-col-reverse h-[100px] border-b z-50 w-full fixed">
                    <Heading/>
                </div>
                <div className="pt-[100px] min-h-screen">
                    {children}
                </div>
            </main> 
        </div>
    )
}

export default AdminLayout