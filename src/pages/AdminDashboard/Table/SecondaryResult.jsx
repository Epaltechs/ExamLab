import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import open from "../../../assets/icons/views.png";
import Paper from "@mui/material/Paper";
import delet from "../../../assets/icons/save.png";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#6B7280",
    fontStyle: "bolder",
    fontWeight: 600,
    border: 0,
    fontSize: '11px',
    fontFamily: 'Inter',
    lineHeight: '13px',
    letterSpacing: '0.5px',

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
  //   backgroundColor: '#FFFFFF',
  //   borderColor: 'grey',
  //   borderWidth: '1px',
  //   paddingTop: '50px',
  //   paddingBottom: '50px',
  //   height: '80px',
  //     "&:hover": {
  //       backgroundColor: '#7EA5FF'
  //     }
  //   }
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     backgroundColor: '#FFFFFF',
//     borderColor: 'grey',
//     borderWidth: '1px',
//     paddingTop: '50px',
//     paddingBottom: '50px',
//     minHeight: '60px'
// }));

export default function SecondaryData({ data }) {
  const classes = useStyles();

  function createData(subject, term, mark) {
    return { subject, term, mark };
  }

  let rowData = data.map((row, index) =>
    createData(
      row.subject,
      row.term,
      row.mark,
     
    )
  );

  const rows = [...rowData];

  const showLink = (row) => {};

  return (
    <>
      <TableContainer component={Paper} sx={{ border: 0, boxShadow: "none" }}>
        <Table
          sx={{  border: 0, boxShadow: "none" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow style={{ borderBottom: '1px solid rgba(84, 86, 90, 0.1)'}}>
              <StyledTableCell align="left">SUBJECTS</StyledTableCell>
              <StyledTableCell align="left">TERM </StyledTableCell>
              <StyledTableCell align="left">MARK </StyledTableCell>
              <StyledTableCell align="left">ACTIONS</StyledTableCell>
             </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.matricNumber} classes={classes.tableRow}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#525252',
                    
                  }}
                  
                >
                  {row.subject} <br /> {row.type}
                </StyledTableCell>

                            <StyledTableCell
                  align="left"
                  style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#525252',
                    
                  }}
                >
                  {row.term}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color: `${
                      row.mark < "45"
                        ? "#F59E0B"
                        : "#22C55E"
                    }`,
                  }}
                >
                  {row.mark}
                </StyledTableCell>

                <StyledTableCell
                  align="left"
                  style={{ color: "black", opacity: 0.85, paddingRight: 5 }}
                >
                  <img
                    src={open}
                    height="26px"
                    width="26px"
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
                    height="26px"
                    width="26px"
                    style={{ color: "black", opacity: 1, cursor: "pointer" }}
                    alt="deleteIcon"
                  />
                </StyledTableCell>

                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

SecondaryData.propType = {
  data: PropTypes.exact({
    subject: PropTypes.string,
    term: PropTypes.string,
    mark: PropTypes.string,
    
  }),
};
