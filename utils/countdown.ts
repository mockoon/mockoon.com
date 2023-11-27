import { useEffect, useState } from 'react';

const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const countdownDays = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const countdownMinutes = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60)
  );
  const countdownSeconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [countdownDays, countdownHours, countdownMinutes, countdownSeconds];
};

export { useCountdown };
