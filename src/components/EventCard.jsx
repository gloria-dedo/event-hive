import eventCardImage from "../assets/images/eventImage1.svg";

export default function EventCard(){
    return(
        <div className="bg-bgGray shadow-sm px-5 py-6 rounded-md">
            <img src={eventCardImage} alt="Event card" />
            <h1 className="text-body-text font-medium">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
        </div>
    )
}