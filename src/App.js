import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Content from "./components/Content";
import Login from "./pages/login/Login";
import TutorLogin from "./pages/login/Login";
import AddNewStudents from "./pages/dashboard/Student/AddNewStudents";
import Dashboard from "./pages/dashboard";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import DefaultNav from "./components/Dashboard/Nav/DefaultNav";
import Student from "./pages/dashboard/Student/student";
import Lecturer from "./pages/dashboard/Lecturer/lecturer";
import Courses from "./pages/dashboard/Lecturer/Courses";
import CourseName from "./pages/dashboard/Lecturer/CourseName";
import Results from "./pages/dashboard/Lecturer/results";
import ResultSheet from "./pages/dashboard/Lecturer/resultSheet";
import Result from "./pages/dashboard/Student/resultTable";
import TestOne from "./pages/dashboard/Student/examTestOne";
import TestFour from "./pages/dashboard/Student/examTestFour";
import TestThree from "./pages/dashboard/Student/examTestThree";
import TestTwo from "./pages/dashboard/Student/examTestTwo";


const theme = {
  dark: {
    primary: "#000",
    text: "#FFF",
    buttonPrimary: "#F97316",
  },
  light: {
    primary: "#fff",
    text: "#000",
    buttonPrimary: "#F97316",
    deleteBtn: "#F53434",
  },
  fontFamily: "Inter",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0px;
    padding: 0px;
  }
  button {
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.light.buttonPrimary}
  }
`;

function App() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const getSideBar = () => {
    if (location.pathname.includes("/dashboard")) return <DefaultNav />;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerMain>
        {/* dashboard sidebar */}
        {/* {getHeader()} */}
        {getSideBar()}

        <Routes>

          <Route
            path="/login"
            element={
              !(<Login />) ? (
                <Content navbar={navbar} setNavbar={setNavbar} />
              ) : (
                <Login />
              )
            }
          ></Route>

          <Route
            path="/dashboard/lecturerDashboard/lecturer/login/dashboard/lecturerDashboard/lecturer/login"
            element={!(<TutorLogin />) ? <Content /> : <TutorLogin />}
          ></Route>

          {/* student modules start here */}

          <Route
            path="/dashboard/student/result"
            element={!(<Result />) ? <Content /> : <Result />}
          ></Route>

          <Route
            path="/dashboard/student/test1"
            element={!(<TestOne />) ? <Content /> : <TestOne />}
          ></Route>

          <Route
            path="/dashboard/student/test2"
            element={!(<TestTwo />) ? <Content /> : <TestTwo />}
          ></Route>

          <Route
            path="/dashboard/student/test3"
            element={!(<TestThree />) ? <Content /> : <TestThree />}
          ></Route>

          <Route
            path="/dashboard/student/test4"
            element={!(<TestFour />) ? <Content /> : <TestFour />}
          ></Route>


            {/* Student Modules Ends Here */}

          <Route
            path="/dashboard"
            element={!(<Dashboard />) ? <Content /> : <Dashboard />}
          ></Route>

          <Route
            path="/dashboard/newstudents"
            element={!(<AddNewStudents />) ? <Content /> : <AddNewStudents />}
          ></Route>
         

          <Route
            path="/dashboard/admin/lecturer"
            element={!(<Dashboard />) ? <Content /> : <Lecturer />}
          ></Route>

          <Route
          path="/dashboard/courses"
          element={!(<Courses />) ? <Content /> : <Courses />}
          ></Route>

          <Route
          path="/dashboard/courses/coursename"
          element={!(<Courses />) ? <Content /> : <CourseName />}
          ></Route>

          <Route
          path="/dashboard/results"
          element={!(<Results />) ? <Content /> : <Results />}
          ></Route>

          <Route
          path="/dashboard/results/resultsheet"
          element={!(<ResultSheet />) ? <Content /> : <ResultSheet />}
          ></Route>

          <Route 
            path="/dashboard/admin/student"
            element={!(<Dashboard />) ? <Content /> : <Student />}
          ></Route>

          <Route 
            path="/dashboard/admin/lecturer"
            element={!(<Dashboard />) ? <Content /> : <Lecturer />}>
          </Route>

          <Route 
            path="/"
            element={
              !(<Content />) ? (
                <Content navbar={navbar} setNavbar={setNavbar} />
              ) : (
                <Content navbar={navbar} setNavbar={setNavbar} />
              )
            }
          ></Route>
        </Routes>

        {/* {getFooter()} */}
      </ContainerMain>
    </ThemeProvider>
  );
}

export default App;


const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  overflow: none;
`;
