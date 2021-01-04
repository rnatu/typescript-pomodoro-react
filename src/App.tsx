import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={2}
        shortRestTime={3}
        longRestTime={9}
        cycles={4}
      />
    </div>
  );
}

export default App;
