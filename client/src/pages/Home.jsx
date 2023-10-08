import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center mx-6">
        <div className="z-10 relative top-64 inset-32">
          <button>
            <Link
              className="flex flex-col items-center"
              to={`/locations/sidespawn`}
            >
              <img src="/icon.png" className="w-7" />
              <span className="h-20 pt-7 text-yellow-400 text-md font-semibold -m-8 opacity-0 hover:opacity-100">
                Defender Side Spawn
              </span>
            </Link>
          </button>
        </div>
        <div className="z-10 relative top-96 -inset-0">
          <button>
            <Link
              className="flex flex-col items-center"
              to={`/locations/midcourtyard`}
            >
              <img src="/icon.png" className="w-7" />
              <span className="h-20 pt-7 text-yellow-400 text-md font-semibold -m-8 opacity-0 hover:opacity-100">
                Mid Courtyard
              </span>
            </Link>
          </button>
        </div>
        <div className="z-10 relative mt-36 -bottom-96 left-56">
          <button>
            <Link
              className="flex flex-col items-center"
              to={`/locations/alobby`}
            >
              <img src="/icon.png" className="w-7" />
              <span className="h-20 pt-7 text-yellow-400 text-md font-semibold -m-8 opacity-0 hover:opacity-100">
                A Lobby
              </span>
            </Link>
          </button>
        </div>
        <div className="z-10 relative top-96 right-96">
          <button>
            <Link
              className="flex flex-col items-center"
              to={`/locations/bsite`}
            >
              <img src="/icon.png" className="w-7" />
              <span className="h-20 pt-7 text-yellow-400 text-md font-semibold -m-8 opacity-0 hover:opacity-100">
                B Site
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
