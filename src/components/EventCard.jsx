// import eventCardImage from "../assets/images/eventImage1.svg";

export default function EventCard({event}){
    return(
        <div className="bg-bgGray shadow-sm px-5 py-2 rounded-md ">
            <img src={event.image} alt="Event card" className="w-[200px] h-[200px]" />
            <h1 className="text-body-text font-medium">{event.title}</h1>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
        </div>
    )
}