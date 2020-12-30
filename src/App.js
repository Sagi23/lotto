import "./App.css";
import Lotto from "./Lotto";

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto name="Mini" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
