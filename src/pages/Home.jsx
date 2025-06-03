import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

export default function Home (){
    return(
        <>
        <Navbar/>
        <section className="bg-[url(./assets/images/heroBg.svg)] h-[596px] w-[95%] mx-auto bg-cover relative rounded-md">
            <h1 className="text-big-heading text-white font-bold w-[30%] mx-auto text-center pt-40">MADE FOR THOSE WHO DO</h1>

             <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex justify-between rounded-md absolute -bottom-12 left-[5%]">
            <div className="flex flex-col w-[30%]">
                <label  htmlFor="type" className="text-white">Looking for</label>
                <select name="type" id="type" className="bg-white outline-none p-2 rounded-md">
                    <option value="" disabled className="text-nav">Choose event type</option>
                    <option value="drama">Drama</option>
                    <option value="tech">Tech</option>
                </select>
            </div>
            <div className="flex flex-col w-[30%]">
                <label  htmlFor="location" className="text-white">Location</label>
                <select name="location" id="type" className="bg-white outline-none p-2 rounded-md">
                    <option value="" disabled className="text-nav">Choose Location</option>
                    <option value="accra">Accra</option>
                    <option value="kumasi">Kumasi</option>
                </select>
            </div>
            <div className="flex flex-col w-[30%]">
                <label  htmlFor="type" className="text-white">When</label>
                <input type="datetime-local" name="when" id="" className="bg-white outline-none p-2 rounded-md" />
            </div>

            <div className="bg-primary text-white size-[60px] flex justify-center items-center text-center rounded-md">
                <Search/>
            </div>
        </form>
        </section>
        <section className="flex flex-col max-w-6xl w-full mx-auto pt-40">
            <div>
                <h1>Upcoming <span>Events</span></h1>
            </div>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    [1,2,3,4,5,6].map(n => <EventCard key={n}/>)
                }
            </div>
            
        </section>
        <section className="h-[500px]">

        </section>
       
        <Footer/>
        </>
    );

}