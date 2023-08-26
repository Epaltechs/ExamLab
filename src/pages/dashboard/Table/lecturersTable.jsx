import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import open from "../../../assets/icons/open.svg";
import Paper from "@mui/material/Paper";
import delet from "../../../assets/icons/delet.svg";
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
  // tableRow: {
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "grey",
  //   borderWidth: "1px",
  //   paddingTop: "50px",
  //   paddingBottom: "50px",
  //   height: "80px",
  //   "&:hover": {
  //     backgroundColor: "#7EA5FF",
  //   },
  // },
}));

export default function LecturersTable({ data }) {
  const classes = useStyles();

  function createData(name, staffID, email, level, department, course, link) {
    return { name, staffID, email, level, department, course, link };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.name,
      row.staffID,
      row.email,
      row.level,
      row.department,
      row.course,
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
              <StyledTableCell align="left">ACTIONS</StyledTableCell>
              <StyledTableCell align="left">STAFF ID</StyledTableCell>
              <StyledTableCell align="left">EMAIL ADDRESS</StyledTableCell>
              <StyledTableCell align="left">LEVEL</StyledTableCell>
              <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
              <StyledTableCell align="left">COURSE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.staffID} classes={classes.tableRow}>
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
                  <img
                    src={open}
                    height="20"
                    width="20"
                    style={{
                      color: "black",
                      opacity: 1,
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    onClick={() => showLink(row)}
                    alt="openIcon"
                  />
                  <img
                    src={delet}
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
                  {row.staffID}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.email}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color: `${
                      row.level === "Junior Lecturer" ||
                      row.level === "Senior Lecturer"
                        ? "#F59E0B"
                        : row.level === "Lecturer 2"
                        ? "#22C55E"
                        : row.level === "Associate Professor"
                        ? "#B45309"
                        : "#F87171"
                    }`,
                  }}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

LecturersTable.propType = {
  data: PropTypes.exact({
    name: PropTypes.string,
    staffID: PropTypes.string,
    email: PropTypes.string,
    level: PropTypes.string,
    course: PropTypes.string,
    department: PropTypes.string,
    type: PropTypes.string,
  }),
};
