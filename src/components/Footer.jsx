import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-blue text-white flex flex-col gap-4 justify-center items-center p-4">
            {/* Logo */}
            <h1 className="text-[30px] font-bold">
                <span className="text-primary">Event</span>Hive
            </h1>
            
            {/* Newsletter Subscription */}
            <form className="flex gap-4 w-full max-w-md">
                <input 
                    className="bg-white p-3 text-gray-700 rounded-md outline-none flex-1 text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary" 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email" 
                />
                <button 
                    type="submit" 
                    className="text-sm px-6 py-3 bg-primary text-white rounded-md hover:bg-[#85F4FF] hover:text-primary transition-colors duration-200 whitespace-nowrap font-medium"
                >
                    Subscribe
                </button>
            </form>
            
            {/* Navigation Links */}
            <div className="flex gap-8 text-sm font-light flex-wrap justify-center">
                <span className="hover:text-primary cursor-pointer transition-colors duration-200">Home</span>
                <span className="hover:text-primary cursor-pointer transition-colors duration-200">About</span>
                <span className="hover:text-primary cursor-pointer transition-colors duration-200">Services</span>
                <span className="hover:text-primary cursor-pointer transition-colors duration-200">Get in touch</span>
                <span className="hover:text-primary cursor-pointer transition-colors duration-200">FAQ's</span>
            </div>
            
            {/* Horizontal Rule */}
            <hr className="w-full border-t border-white/30 my-4" />
            
            {/* Language & Social Media Row */}
            <div className="flex justify-between  w-full ">
                {/* Language Selector */}
                <div className="flex gap-4">
                    <button className="text-sm bg-primary p-1  hover:text-primary transition-colors duration-200 px-2 py-1 hover:bg-white/10 rounded">
                        English
                    </button>
                    <button className="text-sm hover:text-primary transition-colors duration-200 px-2 py-1 hover:bg-white/10 rounded">
                        French
                    </button>
                    <button className="text-sm hover:text-primary transition-colors duration-200 px-2 py-1 hover:bg-white/10 rounded">
                        Hindi
                    </button>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <button className="p-2 hover:bg-white/10 rounded-full hover:text-primary transition-all duration-200">
                        <Linkedin size={20} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full hover:text-primary transition-all duration-200">
                        <Instagram size={20} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full hover:text-primary transition-all duration-200">
                        <Facebook size={20} />
                    </button>
                </div>
                 <p className="text-xs text-white/70 text-center mt-4">
                Non Copyrighted © 2023 Upload by rich technologies
            </p>
            </div>
            
           
        </footer>
    );
}