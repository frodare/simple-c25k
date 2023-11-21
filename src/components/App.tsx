import WorkoutTimeline from "./WorkoutTimeline"
import PauseButton from "./PauseButton"
import useClock from "../hooks/useClock"
import CurrentInterval from "./CurrentInterval";
import NextWorkoutButton from "./NextWorkoutButton";
import NextIntervalButton from "./NextIntervalButton";

function App() {
  useClock();
  return (
    <>
      <CurrentInterval />
      <div className="h-20">
        <WorkoutTimeline />
        <PauseButton />
        <NextWorkoutButton step={-1} />
        <NextWorkoutButton step={1} />
        <div>
          <NextIntervalButton step={-1} />
          <NextIntervalButton step={1} />
        </div>
      </div>
    </>
  )
}

export default App
