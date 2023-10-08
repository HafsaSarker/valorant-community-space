import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/locations/:location",
      element: <Location />,
    },
  ]);
  return (
    <div className="h-full w-full backdrop-blur bg-black bg-opacity-60 bg-center bg-[url('/background.png')] bg-no-repeat">
      <Header />
      {element}
    </div>
  );
}

export default App;
