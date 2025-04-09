import React from 'react';

const colors = {
  1: '#ffadad',
  2: '#a0c4ff',
  3: '#bdb2ff',
  4: '#caffbf',
  5: '#ffd6a5',
};

const sizes = {
  1: '30vmin',
  2: '36vmin',
  3: '48vmin',
  4: '54vmin',
  5: '60vmin',
};

const durations = {
  1: '200s, 4s',
  2: '220s, 5s',
  3: '270s, 6s',
  4: '210s, 7s',
  5: '250s, 8s',
};

function OrbitCircle({ index }) {
  return (
    <div
      className={`orbit-circle orbit-circle${index}`}
      style={{
        width: sizes[index],
        height: sizes[index],
        borderColor: colors[index],
        animationDuration: durations[index],
      }}
    />
  );
}

export default OrbitCircle;
