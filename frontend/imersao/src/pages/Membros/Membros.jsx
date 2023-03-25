import React from "react";
import "./membros.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Membros = () => {
  const rows = [
    {
      name: "abcd",
      position: "davsav",
      time: 2,
      city: "VR",
    },
    {
      name: "abcd",
      position: "davsav",
      time: 2,
      city: "VR",
    },
    {
      name: "abcd",
      position: "davsav",
      time: 2,
      city: "VR",
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Membros</h1>

      <TableContainer sx={{ border:'1px solid #FFA700',width:'62vw', p:'10px' }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="table-header" >
              <TableCell>Nome</TableCell>
              <TableCell align="right">Cargo</TableCell>
              <TableCell align="right">Tempo de Cp2</TableCell>
              <TableCell align="right">Cidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body" >
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
