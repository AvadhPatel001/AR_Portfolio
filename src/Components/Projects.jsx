import { ArrowUpRight, ArrowRight } from "lucide-react";
import kalrav_new from "../assets/AR/Kalrav Interior/New/Kalrav-Interior-new.png";
import rteAssist from "../assets/AR/RTE Assist/Home_after_login.png";
import rteAssist_All from "../assets/AR/RTE Assist/RTE Assist.png";
import { useNavigate } from "react-router-dom";


const Projects = () => {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/projects");
    };

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-300 text-center underline" >Portfolio</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 mt-10">
                {/* Project 1 */}
                <div className="bg-neutral-800 border-2 border-neutral-700 rounded-xl">
                    <div className="overflow-hidden mx-2 mt-2  rounded-t-xl">
                        <img className="w-full h-110 sm:h-90 object-cover object-top transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50" src={kalrav_new} alt="Kalrav Interior" />
                    </div>
                    <div className="p-4 space-y-2">
                        <h1 className="text-md sm:text-lg lg:text-xl text-neutral-300">Website Development</h1>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-200">Kalrav Interior</h1>
                        <p className="text-md text-justify text-neutral-400 mt-3">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus.&quot;</p>
                        <a className="border-2 border-neutral-500 flex justify-center items-center w-fit px-3 py-1 mt-3 gap-2 text-lg rounded-xl text-neutral-200 hover:bg-neutral-500 active:scale-95" href="https://kalravinterior.netlify.app/" target="_blank">Open<ArrowUpRight /></a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-neutral-800 border-2 border-neutral-700 rounded-xl">
                    <div className="overflow-hidden mx-2 mt-2  rounded-t-xl">
                        <img className="w-full h-110 sm:h-90 object-cover object-top transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50" src={rteAssist} alt="RTE Assist" />
                    </div>
                    <div className="p-4 space-y-2">
                        <h1 className="text-md sm:text-lg lg:text-xl text-neutral-300">Application Design</h1>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-200">RTE Assist</h1>
                        <p className="text-md text-justify text-neutral-400 mt-3">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus.&quot;</p>
                        <a className="border-2 border-neutral-500 flex justify-center items-center w-fit px-3 py-1 mt-3 gap-2 text-lg rounded-xl text-neutral-200 hover:bg-neutral-500 active:scale-95" href={rteAssist_All} target="_blank">Open<ArrowUpRight /></a>
                    </div>
                </div>
            </div>

            <a onClick={goToAbout} className="flex text-lg items-center justify-center gap-2 border-2 border-neutral-500 w-fit px-10 py-2 mt-10 rounded-xl mx-auto hover:bg-neutral-500 text-neutral-200" href="#">Show More <ArrowRight /></a>

        </div>
    )
}

export default Projects