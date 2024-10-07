import Image from "next/image"
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";

const ThemeInfo = () =>{
    return(
        <div className="flex mt-3 justify-around p-2">
            <div className="grid grid-rows-2 content-center">
             <div className="row-span-1 p-3">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-[3.5rem] font-semibold">
                    Hello, Artist<span className="text-[#5046e6]">.</span>
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className="mt-[.5rem] text-[2.5rem]">
                    Showcase your{" "}
                    <span className="text-[#5046e6]">Art Portfolio</span>
                  </h2>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <Button className="mt-[1.6rem] bg-[#5046e6] rounded-xl">Sign up</Button>
                </BoxReveal>
             </div>
            </div>
            <div className="">
              <Image src="/website.png" alt="not found" width={400} height={400} />
            </div>
        </div>
    )
}

export default ThemeInfo