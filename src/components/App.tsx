import useClock from "../hooks/useClock";
import useHandleCompletion from "../hooks/useHandleCompletion";
import useNotifyIntervalChanges from "../hooks/useNotifyIntervalChanges";
import useWakeLock from "../hooks/useWakeLock";
import ButtonNextInterval from "./ButtonNextInterval";
import ButtonNextWorkout from "./ButtonNextWorkout";
import ButtonPause from "./ButtonPause";
import CurrentInterval from "./CurrentInterval";
import CurrentWorkout from "./CurrentWorkout";
import LockButton from "./LockButton";
import WorkoutTimeline from "./WorkoutTimeline";

function App() {
  useClock();
  useHandleCompletion();
  useNotifyIntervalChanges();
  useWakeLock();
  return (
    <div className="bg-cover h-screen bg-center" style={{ backgroundImage: "url('background.jpg')" }}>
      <div className="flex content-center h-12">
        <ButtonNextWorkout step={-1} />
        <ButtonNextWorkout step={1} />
      </div>
      <CurrentWorkout />
      <div className="h-12">
        <WorkoutTimeline />
      </div>
      <CurrentInterval />
      <LockButton />
      <div className="flex content-center fixed bottom-0 w-full">
        <ButtonNextInterval step={-1} />
        <ButtonPause />
        <ButtonNextInterval step={1} />
      </div>
    </div >
  )
}

export default App
