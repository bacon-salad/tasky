import React from 'react';
import Title from './Title';
import Active from './axioscalls/ActiveTasks.jsx'

// Generate Sales Data


export default function Chart() {
  return (
    <React.Fragment>
      <Title>Active Tasks</Title>
      <Active/>
    </React.Fragment>
  );
}