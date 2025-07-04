import React from 'react';
import scheduleData from '../data/schedule';

const Schedule = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {scheduleData.map((match) => (
          <li key={match.id}>
            <h2>{match.date}</h2>
            <p>{match.opponent}</p>
            <p>{match.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;