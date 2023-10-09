import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

function AllEvents() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:3001/events");

      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-full flex flex-col justify-center bg-red-100 ">
      <div className="flex justify-center gap-3 mt-5">
        <select
          className="outline-2 outline-offset-1 outline-red-400 w-56 h-8"
          name="locations"
        >
          <option value="defendersidespawn">Defender Side Spawn</option>
          <option value="midcourtyard">Mid Courtyard</option>
          <option value="bsite">B Site</option>
          <option value="lobbya">Lobby A</option>
        </select>
        <button className="bg-gray-900 font-semibold text-red-400 py-1 px-3 rounded-lg">
          Show All Events
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-center mt-5 gap-6">
        {events && events.length > 1 ? (
          events.map((item) => <EventCard key={item.id} event={item} />)
        ) : (
          <h1>No Current Events :(</h1>
        )}
      </div>
    </div>
  );
}

export default AllEvents;
