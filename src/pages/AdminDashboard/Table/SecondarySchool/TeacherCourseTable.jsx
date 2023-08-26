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
    paddingRight: 0,
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
    lineHeight: "0px",
    borderStyle: "none",
    border: 0,
    borderBottom: 0,
    height: "70px",
    boxShadow: "0px 0px ",
    paddingRight: 100,
    "@media (max-width: 950px)": {
      fontSize: 10,
    },
  },
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

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     backgroundColor: '#FFFFFF',
//     borderColor: 'grey',
//     borderWidth: '1px',
//     paddingTop: '50px',
//     paddingBottom: '50px',
//     minHeight: '60px'
// }));

export default function TeacherCourseTable({ data }) {
  const classes = useStyles();

  function createData(
    name,
    studentId,
    classData,
    department,
    course,
    cgpa,
    link
  ) {
    return { name, studentId, classData, department, course, cgpa, link };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.name,
      row.studentId,
      row.classData,
      row.department,
      row.course,
      row.cgpa,
      row.link
    )
  );

  const rows = [...rowData];

  const showLink = (row) => {};

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ border: 0, boxShadow: "none", paddingRight: "" }}
      >
        <Table
          sx={{ border: 0, boxShadow: "none" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">NAME </StyledTableCell>
              <StyledTableCell align="left">STUDENT ID</StyledTableCell>
              <StyledTableCell align="left">CLASS</StyledTableCell>
              <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
              <StyledTableCell align="left">COURSE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.studentId} classes={classes.tableRow}>
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
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.studentId}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color: "#22C55E",
                  }}
                >
                  {row.classData}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

TeacherCourseTable.propType = {
  data: PropTypes.exact({
    name: PropTypes.string,
    studentId: PropTypes.string,
    classData: PropTypes.string,
    department: PropTypes.string,
    course: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
  }),
};
