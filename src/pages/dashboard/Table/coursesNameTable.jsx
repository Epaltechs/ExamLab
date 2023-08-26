import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#6B7280",
    fontStyle: "bolder",
    fontWeight: 600,
    border: 0,
    borderBottom: 0,
    "@media (max-width: 780px)": {
      fontSize: 10,
      fontWeight: 500,
      fontStyle: "bold",
      border: 0,
      borderBottom: 0,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#6B7280",
    opacity: 0.7,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: "12px",
    lineHeight: "5px",
    borderStyle: "none",
    border: 0,
    borderBottom: 0,
    height: "50px",
    boxShadow: "0px 0px ",
    "@media (max-width: 950px)": {
      fontSize: 10,
    },
  },
  [`&.${tableCellClasses.body.TableRow}`]: {},
  [`&.${tableCellClasses.body.TableRow}`]: {
    opacity: 1,
    color: "black",
  },
}));

const useStyles = makeStyles((theme) => ({
  tableRow: {
    backgroundColor: "#FFFFFF",
    borderColor: "grey",
    borderWidth: "1px",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "80px",
    "&:hover": {
      backgroundColor: "#7EA5FF",
    },
  },
 
}));


export default function CourseNameTable({ data }) {
  const classes = useStyles();

  function createData(name, matricNumber, level, department, course, status, link) {
    return { name, matricNumber, level, department, course, status, link };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.name,
      row.matricNumber,
      row.level,
      row.department,
      row.course,
      row.status,
      row.link
    )
  );

  const rows = [...rowData];

  const showLink = (row) => {};

  return (
    <>
    <TableContainer component={Paper} sx={{ border: 0, boxShadow: "none" }}>
    <Table
      sx={{ minWidth: 1000, border: 0, boxShadow: "none" }}
      aria-label="customized table"
        >
          <TableHead>
            <TableRow>
            <StyledTableCell align="left">NAME </StyledTableCell>
            <StyledTableCell align="left">MATRIC NUMBER</StyledTableCell>
            <StyledTableCell align="left">LEVEL</StyledTableCell>
            <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
            <StyledTableCell align="left">COURSE</StyledTableCell>
            <StyledTableCell align="left">STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.matricNumber} classes={classes.tableRow}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  color: "#374151",
                  fontWeight: 600,
                  fontSize: "14px",
                  opacity: 1,
                  }}
                >
                  {row.name} <br /> {row.type}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.85, paddingRight: 5 }}
                >

                {row.matricNumber}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                {row.level}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                {row.department}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}                         
                >
                {row.course}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.status}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                  onClick={() => showLink(row)}
                    alt="openIcon"
                >
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

CourseNameTable.propType = {
  data: PropTypes.exact({
    name: PropTypes.string,
    matricNumber: PropTypes.string,
    email: PropTypes.string,
    level: PropTypes.string,
    course: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
  }),
};
