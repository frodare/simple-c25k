import WorkoutTimeline from "./WorkoutTimeline"
import ButtonPause from "./ButtonPause"
import useClock from "../hooks/useClock"
import CurrentInterval from "./CurrentInterval";
import ButtonNextWorkout from "./ButtonNextWorkout";
import ButtonNextInterval from "./ButtonNextInterval";
import CurrentWorkout from "./CurrentWorkout";
import useHandleCompletion from "../hooks/useHandleCompletion";

function App() {
  useClock();
  useHandleCompletion();
  return (
    <div className="bg-cover h-screen" style={{ backgroundImage: "url('background.jpg')" }}>
      <CurrentWorkout />
      <div className="flex content-center h-12">
        <ButtonNextWorkout step={-1} />
        <ButtonNextWorkout step={1} />
      </div>
      <CurrentInterval />
      <div className="h-20">
        <WorkoutTimeline />
      </div>
      <div className="flex content-center fixed bottom-0 w-full">
        <ButtonNextInterval step={-1} />
        <ButtonPause />
        <ButtonNextInterval step={1} />
      </div>
    </div >
  )
}

export default App
