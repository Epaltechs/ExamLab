import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useLocation} from 'react-router-dom';
import DefaultButton from "../../Buttons/DefaultButton";
// import User from '/public/User.svg'

function DefaultNav() {
  const [activeItem, setActiveItem ] = useState({
    dashboard: false,
    course: false,
    result: false,
    exam: false,
    settings: false
  })
  const [activePage, setActivePage] = useState('')

  const location = useLocation();
  const viewProfile = () => {};

  const setActive = (item) => {
    const items = {
      dashboard: false,
      course: false,
      result: false,
      exam: false,
      settings: false
    }
    setActiveItem({
      ...items, ...item
    })
  }

  useEffect(() => {
    const locationArray = location.pathname.split('/')
    setActivePage(locationArray[locationArray.length - 1])
  },[location])
  return (
    <NavContainer>
      <LogoContainer>
        <LogoImg src="/logoSvg.svg" />
      </LogoContainer>

      <ContentArea>
        <TabContainer>
          <ListContainer>
            <ListItem onMouseEnter={() => setActive({ dashboard: true})} onMouseLeave={() => setActive({dashboard : false})}>
              <NavLink>
                <IconImg  src={ activeItem.dashboard ? "/home-dash.svg" : "/dash.svg" }  />
                Dashboard
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink onClick={() => { 
                const data = { ...activeItem}
                data[activePage] = true;
                setActive({...data}) 
                }} onMouseEnter={() => setActive({ course: true})} onMouseLeave={() => setActive({course : false})}>
                <IconImg src={activeItem.course ? "/book.svg" : "/booka.svg" } />
                Courses
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink onMouseEnter={() => setActive({ result: true})} onMouseLeave={() => setActive({result : false})}>
                <IconImg src={ activeItem.result ? "/presention-chart.svg" : "/presention.svg"} />
                Result
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink onMouseEnter={() => setActive({ exam: true})} onMouseLeave={() => setActive({exam : false})}>
                <IconImg src={ activeItem.exam ? '/ExamOrange.svg' : "/exam.svg"}  />
                Exam
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink onClick={() => { 
                const data = { ...activeItem}
                data[activePage] = true;
                setActive({...data}) 
                }}
                onMouseEnter={() => setActive({ settings: true})} onMouseLeave={() => setActive({settings : false})}>
                <IconImg src={ activeItem.settings ? '/settingsOrange.svg' : "/setting.svg"} />
                Settings
              </NavLink>
            </ListItem>
          </ListContainer>
        </TabContainer>

        <ColumnStartContainer>
          <UserContainer>
            <IconImg style={{ paddingLeft: 5 }} src={process.env.PUBLIC_URL + '/User.svg'} />
            <UserHeaderOne>Prof. Adekunle</UserHeaderOne>
            <UserDetails>
              Professor <br />
              Dept. of Computer Science
            </UserDetails>
            <DefaultButton text="View Profile" actionFunc={viewProfile} />
          </UserContainer>
        </ColumnStartContainer>
      </ContentArea>
    </NavContainer>
  );
}

export default DefaultNav;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0px;
  padding-top: 50px;
  width: 300px;
  min-height: 900px;
  height: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 0.8;
  height: auto;
`;

const LogoImg = styled.img`
  width: 148.19px;
  height: 35px;
  scale: 1.25;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ListContainer = styled.ul`
  list-style: none;
  list-style-type: none;
  margin-top: 50px;
  padding: 0px;
`;

const ListItem = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 160% */
  text-align: left;
  letter-spacing: 0.02em;
  margin-top: 20px;
  padding: 7px 15px 7px 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #f97316;
    border-left: 3px solid #f97316;
  }
`;

const NavLink = styled.a`
  color: #a6a6a6;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    color: inherit;
  }
`;

const IconImg = styled.img`
  padding-right: 15px;
  color: inherit;
  scale: 1.20;
  &:hover,
  &:focus {
    color: inherit;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
`;
const ColumnStartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserHeaderOne = styled.h5`
  padding-top: 15px;
  color: #54565a;
`;

const UserDetails = styled.p`
  color: #a6a6a6;
  padding-top: 25px;
  font-size: 12px;
`;
