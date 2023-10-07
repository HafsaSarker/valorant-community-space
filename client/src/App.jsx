import Header from "./components/Header";

function App() {
  return (
    // <div className="h-full w-full backdrop-blur bg-black bg-opacity-60 flex flex-col justify-center items-center">
    //   <div className="sticky inset-x-0 top-0 left-0">
    //     <img className="w-7" src="/icon.png" />
    //   </div>
    //   <img className="rounded-lg" src="/background.png" />
    // </div>

    <div className="h-full w-full backdrop-blur bg-black bg-opacity-60 bg-center bg-[url('/background.png')] bg-no-repeat">
      <Header />

      <div className="flex justify-center">
        <div className="flex justify-center mx-6">
          <div className="z-10 relative top-72 inset-28">
            <button>
              <img src="/icon.png" className="w-7" />
            </button>
          </div>
          <div className="z-10 relative top-96 -inset-2">
            <button>
              <img src="/icon.png" className="w-7" />
            </button>
          </div>
          <div className="z-10 relative -bottom-96 left-64">
            <button>
              <img src="/icon.png" className="w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
