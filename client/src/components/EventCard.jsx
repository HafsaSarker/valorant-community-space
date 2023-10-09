import { renderLocation } from "../utils/location";

function EventCard(props) {
  const { name, location, date, time, image, daysleft } = props.event;

  const locationUI = renderLocation(location);

  return (
    <div className="border-2 rounded-xl border-red-400 w-96 flex flex-col items-center">
      <h1 className="font-bold text-black text-xl py-1">{name}</h1>
      <img className="h-48 w-96 object-cover" src={image} />
      <h3 className="w-full text-lg bg-red-300 font-semibold py-1">
        {locationUI}
      </h3>
      <h3 className="text-sm py-1 bg-gray-900 text-red-400 px-4 my-1 rounded-full">
        {date}, {time}
      </h3>
      <h3 className="text-sm pb-1">{daysleft}</h3>
    </div>
  );
}

export default EventCard;
