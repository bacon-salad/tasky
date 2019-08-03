import React from 'react';

import Title from './Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Sales Data
function createData(id, head, body, taskMaster, completed, dateGiven) {
    return { id, head, body, taskMaster, completed, dateGiven };
  }
  
  const rows = [
    createData(0, 'code drills', 'do 2 code drills', 'Dr. stanton', 'not yet', '8-1-2019'),
    createData(1, 'homework', 'homework for 1 hour', 'Dr. fonze', 'not yet', '8-1-2019'),
    createData(2, 'personal website', 'work on a personal project for 1 hour', 'Dr. pepper', 'not yet', '8-1-2019'),
    createData(3, 'code drills', '2 code drills', 'Dr. pepper', 'not yet', '8-1-2019'),
    createData(4, 'video', 'watch 1 hour of coding videos', 'Dr. Drey', 'not yet', '7-25-2019'),
  ];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Active Tasks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Completed?</TableCell>
            <TableCell align="right">Date Given</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.head}</TableCell>
              <TableCell>{row.body}</TableCell>
              <TableCell>{row.taskMaster}</TableCell>
              <TableCell>{row.completed}</TableCell>
              <TableCell align="right">{row.dateGiven}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}