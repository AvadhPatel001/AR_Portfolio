import { testimonials } from "../Content/Data";

const Testimonials = () => {
    return (
        <div id="testimonials">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-300 text-center underline" >Testimonials</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mt-10">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-neutral-800 border-2 border-neutral-700 rounded-xl p-4">
                        <p className="text-md text-neutral-400 indent-10 text-justify">&quot;{item.discription}&quot;</p>

                        <div className="mt-5">
                            <h1 className="text-xl text-neutral-300">{item.Owner_Name}</h1>
                            <h1 className="text-md text-neutral-400 italic">{item.Company_Name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials