// 2b
import Exercise from "./exercise/Exercise";


function App() {
  // 2c
  return (
    <div>
    <Exercise />
    {/* 3a + 3d */}
    <Exercise good="Great" bad="Not Great" />
    </div>
  );
}

export default App;
