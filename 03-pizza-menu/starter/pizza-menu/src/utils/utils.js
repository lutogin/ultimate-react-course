export function getRemainingTime(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);

  const milliseconds = target - now;
  if (milliseconds <= 0) {
    return "00:00:00";
  }

  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = seconds.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}
