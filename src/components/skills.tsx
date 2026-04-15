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
        <div className="text-foreground w-full flex flex-col items-center justify-center mt-10">
            <h1 className="font-bold text-xl">EXPERIÊNCIA COM</h1>

            <div className="grid grid-cols-5 gap-3 mt-5">
                <FaHtml5 size={35} className="text-orange-500"/>
                <IoLogoCss3 size={35} className="text-blue-500"/>
                <IoLogoJavascript size={35} className="text-yellow-500"/>   
                <BsTypescript size={32} className="text-blue-600"/>
                <FaReact size={35} className="text-blue-400"/>
                <FaNodeJs size={35} className="text-green-500"/>
                <RiNextjsFill size={35} className="text-gray-500"/>
                <SiTailwindcss size={35} className="text-teal-400"/>
                <SiFastify size={35} className="text-white"/>
                <TbBrandRedux size={35} className="text-purple-500"/>
            </div>
        </div>
    );
}