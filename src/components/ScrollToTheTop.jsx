import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";

const ScrollToTheTop = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const ScrollToTheBottom = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  useEffect(() => {
    //
    if (showBelow) {
      window.addEventListener("scroll", ScrollToTheBottom);
      return () => {
        window.removeEventListener("scroll", ScrollToTheBottom);
      };
    }
  }, []);
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-top">
      <IconButton onClick={handleClick} className="scroll-top">
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
};

export default ScrollToTheTop;
