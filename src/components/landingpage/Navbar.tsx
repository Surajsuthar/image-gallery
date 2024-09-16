import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwith";

const Navbar = () => {
    return (
        <div className="m-auto mt-2 min-h-[55px] w-[90%] flex justify-between p-1 ">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex gap-2 font-medium"> 
                <Button variant="secondary" className=" rounded-[20px] hover:bg-slate-600">About</Button>
                <Button variant="secondary" className=" rounded-[20px] hover:bg-slate-600">Login</Button>
                <Button><ThemeSwitcher/></Button>
            </div>
        </div>
    );
};

export default Navbar;


