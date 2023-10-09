import { useParams } from "react-router-dom";
import { renderLocation } from "../utils/location";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

function Location() {
  const [events, setEvents] = useState([]);
  let { location } = useParams();
  const locationUI = renderLocation(location);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`http://localhost:3001/events/${location}`);

      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col bg-red-100 min-h-full items-center">
      <div className="w-full py-6 bg-gray-800 flex flex-row justify-center items-center gap-4">
        <img
          className="h-36 w-72 object-cover rounded-xl"
          src="https://estnn.com/wp-content/uploads/2023/08/valorantsunsetmap-560x315.jpeg"
        />
        <div>
          <h1 className="font-bold text-red-400 text-2xl">{locationUI}</h1>
          <p className="text-white">Lorem ipsum dolor sit amet </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-center mt-10 gap-6 pb-10">
        {events && events.length > 1 ? (
          events.map((item) => <EventCard key={item.name} event={item} />)
        ) : (
          <h1>No Current Events :(</h1>
        )}
      </div>
    </div>
  );
}

export default Location;
