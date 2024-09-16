import { AnimatedText } from "./AnimatedLine";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <AnimatedText />
            <div className="flex flex-col w-[1000px] text-center  dark:text-white">
                <h1 className="font-extrabold text-[50px]">
                    Showcase Your Creative Masterpieces
                    <div className=" border bg-white dark:bg-black" />
                </h1>
                <p className="font-medium text-[20px]">
                    A platform where artists can create stunning portfolios to showcase 
                    their artwork.
                    
                </p>
            </div>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    );
};

export default Hero;
