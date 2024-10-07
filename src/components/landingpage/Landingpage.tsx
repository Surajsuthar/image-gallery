import Hero from "./Hero";
import ThemeInfo from "./ThemeInfo";
import ThemeInfoSecond from "./ThemeInfoSecond";


const LandingPage = () => {
    return (
        <div className="flex flex-col gap-2 min-h-screen w-full p-2">
            <section className="h-[600px] ">
                <Hero />
            </section>
            <section className="m-[30px]">
                <ThemeInfo/>
                <ThemeInfoSecond/>
            </section>
        </div>
    );
};

export default LandingPage;
