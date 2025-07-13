import { skillsIcons } from "../Content/Data"

const Skills = () => {
  return (
    <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-300 text-center underline" >Skills</h1>

        <div className="flex flex-wrap justify-around gap-5 lg:gap-10 mt-10 ">
            {skillsIcons.map((item, index)=>(
                <img className="w-20 lg:w-25 " key={index} src={item.src} alt={item.alt} />
            ))}
        </div>
    </div>
  )
}

export default Skills