import { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from "@mui/material/Button";
import logo from "../assets/examLab.png";

const TestNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleShow = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <div className="navContent">
        <div className="container">
          <div className="bar">
            {navbar ? (
              <Button onClick={handleShow}>
                <DoubleArrowIcon className="icon" />
              </Button>
            ) : (
              <Button onClick={handleShow}>
                <TableRowsIcon className="icon" />
              </Button>
            )}
          </div>
        </div>

        <div className="logoArea">
          <img src={logo} alt="logo" width="163" height="54" className="logo" />
        </div>
        <div className="navArea" style={{ left: navbar ? "0" : "" }}>
          <ul>
            <li>
              <Link to="/home" onClick={() => setNavbar(!navbar)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={() => setNavbar(!navbar)}>
                Support
              </Link>
            </li>
            <li>
              <Link to="/affiliates" onClick={() => setNavbar(!navbar)}>
                Affiliate
              </Link>
            </li>
            <li>
              <Link to="/vendor" onClick={() => setNavbar(!navbar)}>
                Vendors
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setNavbar(!navbar)}>
                FAQs
              </Link>
            </li>
          </ul>
          <button className="button1" type="submit">
            <Link to="/signin">Login</Link>
          </button>
          <button className="button2" type="submit">
            <Link to="/affiliateSignup">Get Started </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
