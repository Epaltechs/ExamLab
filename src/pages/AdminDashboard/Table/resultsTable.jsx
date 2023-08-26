import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import view from "../../.././assets/view.svg";
import download from "../../.././assets/download.svg";
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

const StatusContainer = styledComponent.div`
  border-radius: 25px;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.status === "Pending"
      ? "#FFF5E3"
      : props.status === "Rejected"
      ? "#FEE9E9"
      : "#DEF5E3"};
  width: 90px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) =>
    props.status === "Pending"
      ? "#F59E0B"
      : props.status === "Rejected"
      ? "#EF4444"
      : "#22C55E"};
`;

export default function ResultsTable({ data }) {
  const classes = useStyles();

  function createData(
    courseCode,
    courseTitle,
    nameOfLecturer,
    students,
    unit,
    status,
    link
  ) {
    return {
      courseCode,
      courseTitle,
      nameOfLecturer,
      students,
      unit,
      status,
      link,
    };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.courseCode,
      row.courseTitle,
      row.nameOfLecturer,
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
      <TableContainer component={Paper} sx={{ border: 0, boxShadow: "none" }}>
        <Table
          sx={{ minWidth: 1000, border: 0, boxShadow: "none" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">COURSE CODE </StyledTableCell>
              <StyledTableCell align="left">ACTIONS</StyledTableCell>
              <StyledTableCell align="left">COURSE TITLE</StyledTableCell>
              <StyledTableCell align="left">NAME OF LECTURER</StyledTableCell>
              <StyledTableCell align="left">STUDENTS</StyledTableCell>
              <StyledTableCell align="left">UNIT</StyledTableCell>
              <StyledTableCell align="left">STATUS</StyledTableCell>
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
                  {row.courseCode} <br /> {row.type}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.85, paddingRight: 5 }}
                >
                  <img
                    src={view}
                    height="20"
                    width="20"
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
                    height="20"
                    width="20"
                    style={{ color: "black", opacity: 1, cursor: "pointer" }}
                    alt="deleteIcon"
                  />
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.courseTitle}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.nameOfLecturer}
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
                  {row.unit}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StatusContainer status={row.status}>
                    {row.status}
                  </StatusContainer>
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
