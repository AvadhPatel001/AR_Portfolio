import { NavLinks, icons } from "../Content/Data";

const Footer = ( {navigate} ) => {
    return (
        <footer id="contact" className="bg-black py-5 mt-20">

            {/* logo */}
            <a href="#">
                <h1 className="text-6xl lg:text-7xl text-center">AR</h1>
            </a>

            {/* navbar items */}
            <ul className="flex gap-5 sm:gap-10 lg:gap-15 justify-center items-center mt-5">
                {NavLinks.map((item, index) => (
                    <li key={index} className="hover:scale-110 transition-all duration-100">
                        <a onClick={()=>navigate(item.title)} className="text-md text-neutral-400 hover: hover:text-orange-500" href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>

            {/* icons */}
            <div className="flex gap-10 justify-center mt-5">
                {icons.map((item, index) => (
                    <a key={index} href={item.href}>{item.icon}</a>
                ))}
            </div>

            {/* Contact Info */}
            <div className="flex justify-center items-center gap-5 mt-5">
                <h1 className="text-neutral-400">avadhpatel743@gmail.com</h1>
                <h1 className="text-neutral-400">+91 8200538255</h1>
            </div>

            {/* copyright */}
            <div className="text-center pb-5 mt-7 ">
                <hr className="text-neutral-700 mb-3 w-7/9 mx-auto" />
                <p className="text-sm text-center text-neutral-400">Designed by Avadh Rangani |<span className="text-neutral-600"> UI/UX Designer & Web Developer</span></p>
            </div>
        </footer>
    )
}

export default Footer