import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubContent = styled.div`
  display: flex;
  @media (max-width: 1000px) {
  }
`;
export const UploadBox = styled.div`
  width: 1000px;
  padding: 15px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const UploadText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01px;
  color: #000000;
`;
export const InnerBox = styled.div`
  padding: 15px;
  /* margin-top: 80px; */
`;
export const InnerText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #171717;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
`;
export const Upload = styled.div`
  border: 2px solid #cdd5df;
  border-style: dashed;
  border-radius: 7px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 90px;
  padding-bottom: 70px;
  @media (max-width: 1000px) {
    border: 2px solid #cdd5df;
    border-style: dashed;
    border-radius: 7px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-top: 40px;
    padding-bottom: 30px;
  }
`;
export const InnerUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UploadImg = styled.div``;
// export const InnerText = styled.div`

// `
export const FileText1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #404040;
`;
export const FileText2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #737373;
`;
export const DownloadText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #444444;
  & a {
    text-decoration: none;
    color: #f97316;
  }
`;
export const InputDiv = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;
export const Inputs = styled.div`
  margin-top: 30px;
  & input {
    width: 100%;
    border: 1px solid #cdd5df;
    border-radius: 10px;
    padding: 13px;
  }
`;
export const Dept = styled.div`
  display: flex;
  justify-content: space-between;
  & input {
    margin-right: 10px;
  }
`;
export const Level = styled.div``;
// export const Inputs = styled.div`

// `
// export const Inputs = styled.div`

// `
export const Input = styled.div`
  & button {
    width: 100%;
    border: 1px solid #f97316;
    border-radius: 10px;
    padding: 13px;
    background-color: none;
    cursor: pointer;
  }
`;
export const InputButton = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Btn2 = styled.button`
  margin-left: 10px;
  background: #f58634;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* or 160% */

  text-align: center;

  color: #ffffff;
`;
export const Btn1 = styled.button`
  background: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #f58634;
`;
