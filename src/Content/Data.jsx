import { Instagram, Github, Linkedin } from "lucide-react";

// skills icons
import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css.png";
import js from "../assets/Icons/js.png";
import react from "../assets/Icons/react.png";
import tailwind from "../assets/Icons/tailwind css.png";
import figma from "../assets/Icons/figma.png";
import photoshop from "../assets/Icons/photoshop.png";

// project images
import kalrav_new from "../assets/AR/Kalrav Interior/New/Kalrav-Interior-new.png";

import kalrav_old from "../assets/AR/Kalrav Interior/Old/Kalrav-Interior-old.png";

import virtualR from "../assets/AR/VirtualR/VirtualR.png";
import virtualR_pdf from "../assets/AR/VirtualR/VirtualR.pdf";

import rteAssist from "../assets/AR/RTE Assist/Home_after_login.png";
import rteAssist_All from "../assets/AR/RTE Assist/RTE Assist.png";

import logo_RK from "../assets/AR/RK Wedding/logo/RK Weddings.jpg";
import logo_Adarsh from "../assets/AR/Logo/Adarsh/Adarsh.jpg";

import RK_Wedding_pdf from "../assets/AR/RK Wedding/Pages/RK_wedding_1.1.pdf"
import RK_Wedding from "../assets/AR/RK Wedding/Pages/page1.jpg";




export const NavLinks = [
    { path: "/", name: "Home" },
    { to: "#about", name: "About" },
    { path: "/projects", name: "Projects" },
    { to: "#testimonials", name: "Testimonials" },
    { to: "#contact", name: "Contact" },
];

export const icons = [
    {
        href: "https://www.instagram.com/avadh__patel__001/?utm_source=qr&igsh=OXFrbHNibWh6dWYy#",
        icon: <div className="bg-neutral-600 p-3 rounded-full text-neutral-300 hover:scale-110 transition-all duration-200 ease-in-out hover:rotate-[360deg]">
            <Instagram className="w-5 h-5" />
        </div>
    },
    {
        href: "https://github.com/AvadhPatel001",
        icon: <div className="bg-neutral-600 p-3 rounded-full text-neutral-300 hover:scale-110 transition-all duration-200 ease-in-out hover:rotate-[360deg]">
            <Github className="w-5 h-5" />
        </div>
    },
    {
        href: "https://www.linkedin.com/in/avadh-rangani-27434a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: <div className="bg-neutral-600 p-3 rounded-full text-neutral-300 hover:scale-110 transition-all duration-200 ease-in-out hover:rotate-[360deg]">
            <Linkedin className="w-5 h-5" />
        </div>
    },
];

export const skillsIcons = [
    {
        src: figma,
        alt: "Figma"
    },
    {
        src: photoshop,
        alt: "Photoshop"
    },
    {
        src: react,
        alt: "React.js"
    },
    {
        src: tailwind,
        alt: "Tailwind CSS"
    },
    {
        src: html,
        alt: "HTML"
    },
    {
        src: css,
        alt: "CSS"
    },
    {
        src: js,
        alt: "JavaScript"
    },
];

export const projects = [
    {
        title: "Kalrav Interior",
        src: kalrav_new,
        hraf: "https://kalravinterior.netlify.app/",
        type: "website Development",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "Kalrav Interior",
        src: kalrav_old,
        hraf: "https://kalravinterior.in/",
        type: "website Development",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "VirtualR",
        src: virtualR,
        hraf: virtualR_pdf,
        type: "website Development",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "RTE Assist",
        src: rteAssist,
        hraf: rteAssist_All,
        type: "Application Design",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "RK Weddings",
        src: logo_RK,
        hraf: logo_RK,
        type: "Logo Design",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "Adarsh Enterprise",
        src: logo_Adarsh,
        hraf: logo_Adarsh,
        type: "Logo Design",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },
    {
        title: "RK Weddings",
        src: RK_Wedding,
        hraf: RK_Wedding_pdf,
        type: "Company Profile Design",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis amet quas nesciunt ducimus."
    },

];

export const testimonials = [
    {
        Owner_Name: "Asit S.",
        Company_Name: "Kalrav Interior",
        hraf: "https://kalravinterior.netlify.app/",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam, praesentium quas doloribus quam dicta porro fugiat est necessitatibus!"
    },
    {
        Owner_Name: "Khushal R.",
        Company_Name: "RK Weddings",
        hraf: RK_Wedding_pdf,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam, praesentium quas doloribus quam dicta porro fugiat est necessitatibus!"
    },
    {
        Owner_Name: "Jay S.",
        Company_Name: "Adarsh Enterprise",
        hraf: logo_Adarsh,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam, praesentium quas doloribus quam dicta porro fugiat est necessitatibus!"
    }
];