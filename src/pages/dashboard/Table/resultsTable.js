import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import eyeicon from "../../../assets/icons/eyeIcon.svg";
import icon from "../../../assets/icons/icon.svg"
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


export default function ResultsTable({ data }) {
  const classes = useStyles();

  function createData(courseName, courseCode, level, students, department, unit, link) {
    return { courseName, courseCode, level, students, department, unit, link };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.courseName,
      row.courseCode,
      row.level,
      row.students,
      row.department,
      row.unit,
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
              <StyledTableCell align="left">COURSE NAME </StyledTableCell>
              <StyledTableCell align="left">ACTIONS</StyledTableCell>
              <StyledTableCell align="left">COURSE CODE</StyledTableCell>
              <StyledTableCell align="left">LEVEL</StyledTableCell>
              <StyledTableCell align="left">STUDENTS</StyledTableCell>
              <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
              <StyledTableCell align="left">UNIT</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.courseCode} classes={classes.tableRow}>
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
                 {row.courseName} <br /> {row.type}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.85, paddingRight: 5 }}
                ><img
                    src={eyeicon}
                    height="20"
                    width="20"
                    style={{
                      color: "black",
                      opacity: 1,
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() => showLink(row)}
                    alt="eyeIcon"
                  />
                  <img
                    src={icon}
                    height="20"
                    width="20"
                    style={{ color: "black", opacity: 1, cursor: "pointer" }}
                    alt="downloadIcon"
                  />                                   
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                {row.courseCode}
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
                {row.students}
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
                {row.unit}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

ResultsTable.propType = {
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
