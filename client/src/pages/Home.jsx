function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center mx-6">
        <div className="z-10 relative top-64 inset-32">
          <button>
            <img src="/icon.png" className="w-7" />
          </button>
        </div>
        <div className="z-10 relative top-96 -inset-0">
          <button>
            <img src="/icon.png" className="w-7" />
          </button>
        </div>
        <div className="z-10 relative -bottom-96 left-64">
          <button>
            <img src="/icon.png" className="w-7" />
          </button>
        </div>
        <div className="z-10 relative top-96 right-96">
          <button>
            <img src="/icon.png" className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
