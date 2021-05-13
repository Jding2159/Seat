import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function TableHeadComponent() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>Desk Number</TableCell>
        <TableCell>future info</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadComponent;
