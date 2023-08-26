import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import more from "./../assets/more.png";
import rectangle from "./../assets/Rectangle 2047.png";
import rectangleGreen from "./../assets/RectangleGreen.png";
import rectangleYellow from "./../assets/rectangleYellow.png";
import rectangleLemon from "./../assets/RectangleLemon.png";
import CircleIcon from "@mui/icons-material/Circle";

export const pricingData = [
  {
    id: 1,
    title: "Basic",
    price: 5000,
    paymentRange: "/Weekly",
    features: [
      {
        id: 1,
        icon: <CheckIcon className="check-icon" />,
        text: "Access up to 5 courses in month",
      },
      {
        id: 2,
        icon: <CheckIcon className="check-icon icon-align" />,
        text: "Daily assignment and answer",
      },
      {
        id: 3,
        icon: <CheckIcon className="check-icon" />,
        text: "Group discussion with Instructor",
      },
      {
        id: 4,
        icon: <CloseIcon className="close-icon icon-align-two" />,
        text: "All course feature available",
      },
      {
        id: 5,
        icon: <CloseIcon className="close-icon" />,
        text: "Weekly reward for improvements",
      },
      {
        id: 6,
        icon: <CloseIcon className="close-icon" />,
        text: "1 on 1 discussion with Instructor",
      },
    ],
    button: "Get Started",
  },

  {
    id: 2,
    title: "Standard",
    price: 50000,
    paymentRange: "/Monthly",
    features: [
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Access up to 5 courses in month",
      },
      {
        icon: <CheckIcon className="check-icon icon-align" />,
        text: "Daily assignment and answer",
      },
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Group discussion with Instructor",
      },
      {
        icon: <CheckIcon className="check-icon icon-align-two" />,
        text: "All course feature available",
      },
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Weekly reward for improvements",
      },
      {
        icon: <CloseIcon className="close-icon" />,
        text: "1 on 1 discussion with Instructor",
      },
    ],
    button: "Get Started",
  },

  {
    id: 3,
    title: "Premium",
    price: 200000,
    paymentRange: "/Yearly",
    features: [
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Access up to 5 courses in month",
      },
      {
        icon: <CheckIcon className="check-icon icon-align" />,
        text: "Daily assignment and answer",
      },
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Group discussion with Instructor",
      },
      {
        icon: <CheckIcon className="check-icon icon-align-two" />,
        text: "All course feature available",
      },
      {
        icon: <CheckIcon className="check-icon" />,
        text: "Weekly reward for improvements",
      },
      {
        icon: <CheckIcon className="check-icon" />,
        text: "1 on 1 discussion with Instructor",
      },
    ],
    button: "Get Started",
  },
];

export const studentExamData = [
  {
    id: 1,
    headings: [{ id: 1, date: "15 March", icon: more }],
    bodyTop: [
      {
        id: 1,
        time: "09:00",
        icon: rectangle,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyBottom: [
      {
        id: 1,
        time: "12:00",
        icon: rectangleGreen,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
  },
  {
    id: 2,
    headings: [{ id: 2, date: "16 March", icon: more }],
    bodyTop: [
      {
        id: 2,
        time: "08:00",
        icon: rectangle,
        courseCode: "CSC 204",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyBottom: [
      {
        id: 2,
        time: "09:00",
        icon: rectangleGreen,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
  },
  {
    id: 3,
    headings: [{ id: 3, date: "18 March", icon: more }],
    bodyTop: [
      {
        id: 3,
        time: "09:00",
        icon: rectangle,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyBottom: [
      {
        id: 3,
        time: "09:00",
        icon: rectangleGreen,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyLast: [
      {
        id: 3,
        time: "09:00",
        icon: rectangleYellow,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
  },
  {
    id: 4,
    headings: [{ id: 4, date: "20 March", icon: more }],
    bodyTop: [
      {
        id: 4,
        time: "09:00",
        icon: rectangle,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyBottom: [
      {
        id: 4,
        time: "09:00",
        icon: rectangleGreen,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyLast: [
      {
        id: 4,
        time: "09:00",
        icon: rectangleYellow,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
    bodyFourth: [
      {
        id: 4,
        time: "09:00",
        icon: rectangleLemon,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
  },
  {
    id: 5,
    headings: [{ id: 5, date: "22 March", icon: more }],
    bodyTop: [
      {
        id: 5,
        time: "09:00",
        icon: rectangle,
        courseCode: "CHM 212",
        courseTitle: "Analytical Chemistry",
      },
    ],
  },
];

export const examinationData = [
  {
    id: 1,
    question: "Question 1",
    icon: (
      <CircleIcon variant="green" style={{ width: "12px", color: "#22C55E" }} />
    ),
  },
  {
    id: 2,
    question: "Question 2",
    icon: (
      <CircleIcon variant="green" style={{ width: "12px", color: "#22C55E" }} />
    ),
  },
  {
    id: 3,
    question: "Question 3",
    icon: (
      <CircleIcon variant="green" style={{ width: "12px", color: "#22C55E" }} />
    ),
  },
  {
    id: 4,
    question: "Question 4",
    icon: (
      <CircleIcon variant="green" style={{ width: "12px", color: "#22C55E" }} />
    ),
  },
  {
    id: 5,
    question: "Question 5",
    icon: (
      <CircleIcon variant="green" style={{ width: "12px", color: "#22C55E" }} />
    ),
  },
  {
    id: 6,
    question: "Question 6",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 7,
    question: "Question 7",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 8,
    question: "Question 8",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 9,
    question: "Question 9",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 10,
    question: "Question 10",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 11,
    question: "Question 11",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 12,
    question: "Question 12",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 13,
    question: "Question 13",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
  {
    id: 14,
    question: "Question 14",
    icon: <CircleIcon style={{ width: "12px" }} />,
  },
];
