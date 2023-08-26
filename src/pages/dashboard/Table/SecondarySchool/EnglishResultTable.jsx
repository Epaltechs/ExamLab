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

export default function EnglishResultTable({ data }) {
  const classes = useStyles();

  function createData(name, studentId, classData, mark, grade, position, link) {
    return {
      name,
      studentId,
      classData,
      mark,
      grade,
      position,
      link,
    };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.name,
      row.studentId,
      row.classData,
      row.mark,
      row.grade,
      row.position,
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
              <StyledTableCell align="left">STUDENT ID</StyledTableCell>
              <StyledTableCell align="left">CLASS</StyledTableCell>
              <StyledTableCell align="left">MARK</StyledTableCell>
              <StyledTableCell align="left">GRADE</StyledTableCell>
              <StyledTableCell align="left">POSITION</StyledTableCell>
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
                  style={{ color: "black", opacity: 0.85, paddingRight: 5 }}
                >
                  {row.studentId}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.classData}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color: "black",
                    opacity: 0.75,
                    color: `${
                      row.mark === "32" ||
                      row.mark === "28" ||
                      row.mark === "20" ||
                      row.mark === "18"
                        ? "#F59E0B"
                        : "#22C55E"
                    }`,
                  }}
                >
                  {row.mark}
                </StyledTableCell>

                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.grade}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.75 }}
                >
                  {row.position}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

EnglishResultTable.propType = {
  data: PropTypes.exact({
    name: PropTypes.string,
    studentId: PropTypes.string,
    classData: PropTypes.string,
    mark: PropTypes.string,
    grade: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }),
};
