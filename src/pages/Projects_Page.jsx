import { ArrowUpRight } from "lucide-react";
import Footer from "../Components/Footer"
import GoUpBtn from "../Components/GoUpBtn"
import { projects } from "../Content/Data";

const Projects = () => {
  return (
    <>
      <div className="px-10 lg:px-20 py-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-300 text-center underline mt-10" >Projects</h1>
        <p className="text-lg text-neutral-300 text-center mt-5">&quot;Selected work that highlight my development and design skills&quot;</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 mt-10">
          {projects.map((item, index) => (
            <div key={index} className="bg-neutral-800 border-2 border-neutral-700 rounded-xl">
              <div className="overflow-hidden mx-2 mt-2  rounded-t-xl">
                <img className="w-full h-110 sm:h-90 object-cover object-top transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50" src={item.src} alt="Kalrav Interior" />
              </div>
              <div className="p-4 space-y-2">
                <h1 className="text-md sm:text-lg lg:text-xl text-neutral-300">{item.type}</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-200">{item.title}</h1>
                <p className="text-md text-justify text-neutral-400 mt-3">&quot;{item.discription}&quot;</p>
                <a className="border-2 border-neutral-500 flex justify-center items-center w-fit px-3 py-1 mt-3 gap-2 text-lg rounded-xl text-neutral-200 hover:bg-neutral-500 active:scale-95" href={item.hraf} target="_blank">Open<ArrowUpRight /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GoUpBtn />
    </>
  )
}

export default Projects