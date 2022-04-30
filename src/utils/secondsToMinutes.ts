import zeroLeft from "./zeroLeft";

const secondsToMinutes = (seconds: number): string => {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);

  return `${min}:${sec}`;
};

export default secondsToMinutes;
