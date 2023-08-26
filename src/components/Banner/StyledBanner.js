import styled from "styled-components";

export const Box = styled.div`
  padding-top: 10rem;
  padding-bottom: 6rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 5rem;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 42px;
  line-height: 50.54px;
  text-align: center;
  @media (min-width: 1440px) {
    font-weight: 500;
    font-size: 42px;
    line-height: 50.83px;
    text-align: left;
  }
`;
export const TextBox = styled.div`
  padding: 0px;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    padding: 0px;
  }
`;
export const FirstParagraph = styled.p`
  font-size: 16px;
  color: #434343;
  line-height: 30px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1440px) {
    font-size: 16px;
    color: #434343;
    line-height: 30px;
    text-align: left;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 375px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    gap: 0.5rem;
  }
`;
export const SolidButton = styled.button`
  width: 158px;
  height: 42px;
  border-radius: 30px;
  color: #ffff;
  font-size: 14px;
  line-height: 16.94px;
  border: none;
  cursor: pointer;
`;
export const OutlineButtonFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;
export const OutlineButton = styled.button`
  width: 158px;
  height: 42px;
  border-radius: 30px;
  color: #000;
  font-size: 14px;
  line-height: 16.94px;
  background-color: #ffff;
  font-family: "Inter", sans-serif;
  border: 1px solid #000000;
  cursor: pointer;
`;
export const FloatingButtonsContainer = styled.div`
  position: relative;
`;
export const Image = styled.img`
  width: 250px;

  @media (min-width: 1024px) {
    width: 508px;
    height: 581px;
  }
`;

export const FirstFloatingButton = styled.button`
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  border-radius: 15px;
  position: absolute;
  font-size: 16px;
  line-height: 16px;
  top: 10%;
  left: 90%;
  transform: translate(-50%, -50%);
  border: none;

  border-radius: 15px;
  width: 100px;
  height: 64px;
  font-size: 11px;
  &:hover {
    color: #f97316;
  }
  @media (min-width: 1440px) {
    width: 190px;
    height: 64px;
    font-size: 16px;
    top: 10%;
    left: 95%;
  }
`;

export const MiddleFloatingButton = styled.button`
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  background-color: #ffff;
  color: rgb(0, 0, 0, 0.5);
  line-height: 16px;
  position: absolute;
  font-family: "Inter", sans-serif;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  border: none;

  border-radius: 15px;
  color: #000;
  width: 100px;
  height: 64px;
  font-size: 11px;
  &:hover {
    color: #f97316;
  }
  @media (min-width: 1440px) {
    width: 190px;
    height: 64px;
    font-size: 16px;
    left: 5%;
    top: 80%;
  }
`;

export const LastFloatingButton = styled.button`
  cursor: pointer;
  font-family: "Inter", sans-serif;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  font-weight: 500;

  padding: 10px;
  position: absolute;
  top: 90%;
  left: 90%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 15px;
  width: 100px;
  height: 64px;
  font-size: 11px;
  &:hover {
    color: #f97316;
  }
  @media (min-width: 1440px) {
    width: 190px;
    height: 64px;
    font-size: 16px;
    top: 90%;
    left: 95%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-top: 3rem;
  }
`;
export const LogoImage = styled.img`
  width: 25px;

  @media (min-width: 1024px) {
    width: 50px;
  }
`;
