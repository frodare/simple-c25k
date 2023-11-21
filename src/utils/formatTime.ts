const formatTime = (time: number): string => {
  if (time < 0) return '--:--';
  const rounded = Math.floor(time / 1000);
  const seconds = rounded % 60;
  const minutes = Math.floor(rounded / 60);
  return minutes + ':' + seconds.toString().padStart(2, '0');
};

export default formatTime;
