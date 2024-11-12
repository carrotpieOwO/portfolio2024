'use client'

import { useEffect, useState } from "react";

const sections = ['home', 'about', 'projects', 'contact'];

const capitalizeFirstLetter = (str: string) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
} 
export default function Nav () {
    const [activeSection, setActiveSection] = useState(sections[0]);
    
    useEffect(() => {
        const handleScroll = () => {
          
          const scrollPosition = window.scrollY;
        
            for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (section && section.offsetTop <= scrollPosition + 100) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <nav className=" border-gray-200 dark:bg-gray-900 fixed w-full z-20">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HA0</span>
                </a>
                <div className={`sm:block sm:w-auto`} id="navbar-default">
                    <ul className="font-medium flex p-0 flex-row sm:space-x-8 ">
                        {
                            sections.map(section => <li key={section} >
                                <a href={`#${section}`} className={`block py-2 px-3 ${ section === activeSection ? "text-pink-700" : "text-gray-600"} p-0`} aria-current="page">
                                    {capitalizeFirstLetter(section)}
                                </a>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}