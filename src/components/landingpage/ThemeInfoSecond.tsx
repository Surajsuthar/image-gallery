import SparklesText from "@/components/magicui/sparkles-text";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";

const ThemeInfoSecond = () =>{
    return(
        <div className="flex mt-3 justify-around p-2">
            <div className="relative h-[220px] w-[220px] ">
                <Image src="/website1.png" alt="not found" width={200} height={100}
                className="top-[80px] left-[180px] z-10"
                />
                <BorderBeam />
            </div>
            <div className="grid grid-rows-2 content-center">
             <div className="row-span-1 p-3">
                <SparklesText text="Show your artwork with us" className="text-[3.5rem]"/>
                <p className="text-[20px] font-medium">Create coustom theme to showcase arts</p>
             </div>
            </div>
        </div>
    )
}

export default ThemeInfoSecond