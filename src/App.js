import "./App.css";
import FindDiff from "./pages/FindDiff";
import ImgPuzzle from "./pages/ImgPuzzle";
import Iot1 from "./pages/Iot1";
import MemoryGame from "./pages/Mem";
import PuzzleSolver from "./pages/NewGame";
import BetterAimGame from "./pages/NewGame2";
import PacManGame from "./pages/PacMan";
import PathFinderComponent from "./pages/PathFinderComponent";
import RaceGame from "./pages/RaceGame";

function App() {
  return (
    <div>
      {/* <FindDiff/> */}
      {/* <RaceGame/> */}
      {/* <Iot1/> */}
      {/* <ImgPuzzle/> */}
      <PacManGame />

      {/* <PuzzleSolver/> */}
      {/* <BetterAimGame/> */}
      {/* <PathFinderComponent/> */}
      {/* <MemoryGame/> */}
    </div>
  );
}

export default App;
