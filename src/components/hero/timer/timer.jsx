import React from 'react';
import './timer.css'; // Ensure your CSS file path is correct

function Timer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const hackathonDate = new Date('2025-02-22T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-wrapper">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="timer-card">
          <div className="timer-value">
            <span>{value}</span>
          </div>
          <span className="timer-label">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export default Timer;
