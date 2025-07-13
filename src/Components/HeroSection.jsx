import { icons } from "../Content/Data";
import Resume from "../assets/Resume_Avadh-2.pdf";
import FrontCharacter from "../assets/img1.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="space-y-10 flex flex-col justify-center items-center lg:justify-start lg:items-start">

{/* Introduction */}
                <div className="space-y-5">
                    <h1 className="text-md sm:text-lg lg:text-xl text-neutral-400 text-center lg:text-left">Hii I am</h1>
                    
                    <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-neutral-300 text-center lg:text-left">Avadh Rangani</h1>
                   
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-tl from-orange-700 to-orange-400 text-transparent bg-clip-text text-center lg:text-left">UI/UX Designer & <br />Frontend Developer</h1>
                </div>

{/* Icons */}
                <div className="flex gap-10 justify-center lg:justify-start">
                    {icons.map((item, index)=>(
                        <a key={index} href={item.href}>{item.icon}</a>
                    ))}
                </div>

{/* Resume btn */}
                <a className="py-3 w-60 text-center text-lg rounded-xl border-2 text-neutral-300 border-neutral-700 transition-all duration-200 ease-in-out hover:bg-neutral-700 active:scale-95" href={Resume} target="_blank" >Download Resume</a>
            </div>

{/* Character img */}
            <div className="mt-10 lg:mt-0">
                <img className="w-60 sm:w-80 lg:w-100" src={FrontCharacter} alt="IMG OF CHARACTER" />
            </div>
        </div>
    )
}

export default HeroSection