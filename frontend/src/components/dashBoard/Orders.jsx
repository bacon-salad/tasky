import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, head, body, taskMaster, completed, dateGiven) {
  return { id, head, body, taskMaster, completed, dateGiven };
}

const rows = [
  createData(0, 'code drills', 'do 2 code drills', 'Dr. stanton', 'yes', '8-1-2019'),
  createData(1, 'homework', 'homework for 1 hour', 'Dr. fonze', 'yes', '8-1-2019'),
  createData(2, 'personal website', 'work on a personal project for 1 hour', 'Dr. pepper', 'no', '8-1-2019'),
  createData(3, 'code drills', '2 code drills', 'Dr. pepper', 'yes', '8-1-2019'),
  createData(4, 'video', 'watch 1 hour of coding videos', 'Dr. Drey', 'no', '7-25-2019'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tasks</Title>
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
      <div classbody={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          see more tasks
        </Link>
      </div>
    </React.Fragment>
  );
}