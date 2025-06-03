export default function Navbar(){
    return (
        <nav className="flex justify-between">
            {/* Logo */}
            <h1 className="text-[30px] font-bold">
                <span className="text-primary">Event</span>Hive
            </h1>
            <div>
                <button 
                    type="submit" 
                    className="text-sm px-6 py-3  text-black rounded-md hover:bg-[#85F4FF] hover:text-primary transition-colors duration-200 whitespace-nowrap font-medium"
                >
                    Login
                </button>
                 <button 
                    type="submit" 
                    className="text-sm px-6 py-3 bg-primary text-white rounded-md hover:bg-[#85F4FF] hover:text-primary transition-colors duration-200 whitespace-nowrap font-medium"
                >
                    Signup
                </button>
            </div>
        </nav>
    )
};