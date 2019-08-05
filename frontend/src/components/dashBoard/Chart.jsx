import React from 'react';

import Title from './Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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