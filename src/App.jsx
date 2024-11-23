import "./App.css";

function App() {
  return (
    <div className="grid h-screen grid-cols-tpl1440 gap-[20px] border-2 border-red-500 bg-[#1e1e1e] font-black text-white underline">
      <div className="col-span-12 col-start-2 flex h-full p-10 justify-center border border-black">
        <div className="border-2 h-fit border-red-500 bg-white text-black w-[700px]">
          <div className="border-2 border-yellow-500 p-[10px]">
            <select className="w-[200px] px-2 py-2 rounded-md outline-none">
              <option value="" disabled selected hidden>Choose a Building</option>
              <option value="">Building 1</option>
              <option value="">Building 2</option>
              <option value="">Building 3</option>
              <option value="">Building 4</option>
            </select>

          </div>
          <div className="border-2 border-blue-500">
            wing section
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
