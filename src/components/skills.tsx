import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
export function Skills() {
    return (
        <div className="text-foreground w-full flex flex-col items-center justify-center mt-10 landscape:mt-8 lg:mb-10">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl" data-aos="fade-up" data-aos-delay="100">EXPERIÊNCIA COM</h1>
            <div className="grid grid-cols-5 gap-3 md:gap-8 lg:gap-12 mt-5 md:mt-7 lg:mt-10"  data-aos="fade-up" data-aos-delay="200">
                <FaHtml5 size={35} className="text-orange-500 md:scale-125 lg:scale-150"  data-aos="fade-up" data-aos-delay="200"/>
                <IoLogoCss3 size={35} className="text-blue-500 md:scale-125 lg:scale-150"  data-aos="fade-up" data-aos-delay="200"/>
                <IoLogoJavascript size={35} className="text-yellow-500 md:scale-125 lg:scale-150" data-aos="fade-up" data-aos-delay="200"/>   
                <BsTypescript size={32} className="text-blue-600 md:scale-125 lg:scale-150" data-aos="fade-up" data-aos-delay="200"/>
                <FaReact size={35} className="text-blue-400 md:scale-125 lg:scale-150" data-aos="fade-up" data-aos-delay="200"/>
                <FaNodeJs size={35} className="text-green-500 md:scale-125 lg:scale-150"  data-aos="fade-down" data-aos-delay="300"/>
                <RiNextjsFill size={35} className="text-gray-500 md:scale-125 lg:scale-150" data-aos="fade-down" data-aos-delay="300"/>
                <SiTailwindcss size={35} className="text-teal-400 md:scale-125 lg:scale-150" data-aos="fade-down" data-aos-delay="300"/>
                <SiFastify size={35} className="text-white md:scale-125 lg:scale-150"  data-aos="fade-down" data-aos-delay="300"/>
                <TbBrandRedux size={35} className="text-purple-500 md:scale-125 lg:scale-150"  data-aos="fade-down" data-aos-delay="300"/>
            </div>
        </div>
    );
}