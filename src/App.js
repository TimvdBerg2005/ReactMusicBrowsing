import TopArea from "./components/TopArea";
import Music from "./components/Music";

function App() {
  return (
    <>
      <div>
        <TopArea />
      </div>
      <div className="flex h-screen bg-black">
        <Music />
      </div>
    </>
  );
}

export default App;
