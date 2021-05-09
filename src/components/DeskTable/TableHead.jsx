import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function TableHeadComponent() {
  return (
    <TableHead>
    <TableRow>
      <TableCell/>
      <TableCell>Desk Number</TableCell>
      <TableCell>future info</TableCell>
    </TableRow>
  </TableHead>
  )
}

export default TableHeadComponent
