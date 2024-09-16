import SparklesText from "@/components/magicui/sparkles-text";
import Safari from "@/components/magicui/safari";
import Image from "next/image";

const ThemeInfoSecond = () =>{
    return(
        <div className="flex mt-3 justify-around p-2">
            <div className="relative">
                <Safari url="/website1.png" className="h-[400px] w-[550px] z-0" />
                <Image src="/website1.png" alt="not found" width={200} height={100}
                className=" absolute top-[80px] left-[180px]"
                />
            </div>
            <div className="grid grid-rows-2 content-center">
             <div className="row-span-1 p-3">
                <SparklesText text="Heloo mere dosto" className="text-[3.5rem]"/>
             </div>
            </div>
        </div>
    )
}

export default ThemeInfoSecond