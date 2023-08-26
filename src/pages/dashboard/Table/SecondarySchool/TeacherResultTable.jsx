import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import view from "../../../../assets/icons/save.png";
import download from "../../../../assets/icons/views.png";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import styledComponent from "styled-components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#6B7280",
    fontStyle: "bolder",
    fontWeight: 600,
    border: 0,
    borderBottom: "1px solid #FCFBFB",
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
    lineHeight: "20px",
    borderStyle: "none",
    border: 0,
    borderBottom: 0,
    paddingRight: 100,
    height: "70px",
    boxShadow: "0px 0px ",
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

const DefaultRow = styledComponent.tr`
`;

export default function TeacherResult({ data }) {
  const classes = useStyles();

  function createData(subject, nameOfTeacher, students, unit, status, link) {
    return {
      subject,
      nameOfTeacher,
      students,
      unit,
      status,
      link,
    };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.subject,
      row.nameOfTeacher,
      row.students,
      row.unit,
      row.status,
      row.link
    )
  );

  const rows = [...rowData];

  const showLink = (row) => {};

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          border: 0,
          boxShadow: "none",
        }}
      >
        <Table
          sx={{ border: 0, boxShadow: "none" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">SUBJECT </StyledTableCell>
              <StyledTableCell align="left">ACTIONS</StyledTableCell>
              <StyledTableCell align="left">NAME OF LECTURER</StyledTableCell>
              <StyledTableCell align="left">STUDENTS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.students} classes={classes.tableRow}>
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
                  {row.subject} <br /> {row.type}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.85, marginRight: 30 }}
                >
                  <img
                    src={view}
                    height="26px"
                    width="26px"
                    style={{
                      color: "black",
                      opacity: 1,
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    onClick={() => showLink(row)}
                    alt="openIcon"
                  />
                  <img
                    src={download}
                    height="26px"
                    width="26px"
                    style={{ color: "black", opacity: 1, cursor: "pointer" }}
                    alt="deleteIcon"
                  />
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color: "black",
                    opacity: 0.75,
                  }}
                >
                  <DefaultRow nameOfTeacher={row.nameOfTeacher}>
                    {row.nameOfTeacher}
                  </DefaultRow>
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.students}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

TeacherResult.propType = {
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
