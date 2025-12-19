import React from 'react';

import CalendarIcon from '../../public/Calendar.svg';
import CalendarIcon2 from '../../public/Calendar-2.svg';

const EmptyState = ({ type, message }) => {
  return (
    <div className="empty-state">
      {type === 'futuros' ? (
        <img src={CalendarIcon} alt="Calendar" className="empty-illustration" width={400} height={300} />
      ) : (
        <img src={CalendarIcon2} alt="Calendar-2" className="empty-illustration" width={400} height={300} />
      )}
      <p className="empty-text">{message}</p>
    </div>
  );
};

export default EmptyState;