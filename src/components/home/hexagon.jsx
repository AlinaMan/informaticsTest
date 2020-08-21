import React from 'react';

export default ({ idx, data, active, y, onClickItem }) => {
  const { place, date, time } = data;

  return (
    <div 
      className={`pos-${active}`} 
      style={{ transform: `translateY(${y}%) rotate(-45deg) scale(${1 - active / 5})` }}
    >
      <div className={`hexagon`} onClick={() => onClickItem(idx)}>
        {active === 0 ? (
          <>
            <h3>{place}</h3>
            <h2>{date}</h2>
            <span>{time}</span>
            <button>Купить билет</button>
          </>
        ) : date.split(' ').map(item => <span>{item}</span>)}
      </div>
    </div>
  );
};