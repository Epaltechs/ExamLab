import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import modalIcon from "../../../assets/personnel.svg";
import alertIcon from "../../../assets/alert.png";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 668,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
};

const AddNewStudents = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    //
  };

  return (
    <div>
      <div className="modal-container">
        <MainButton className="modal-header-button" onClick={handleOpen}>
          Add New Students
        </MainButton>

        <Modal
          keepMounted
          open={open}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style} className="modal">
            <HeadingContainer className="heading-container">
              <div className="heading-text" type="">
                Add New Students
              </div>
              <CloseIconButton onClick={handleClose} className="heading-icon">
                <CloseIcon />
              </CloseIconButton>
            </HeadingContainer>
            <CenterImageContainer
              className="first-section-container"
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              <CenterImage
                className="modal-icon"
                src={modalIcon}
                alt="modal-icon"
                height="50px"
              />
            </CenterImageContainer>
            <AllInputsContainer className="all-input-container">
              <UpperInputContainer
                className="upper-input-container"
                id="keep-mounted-modal-description"
              >
                <div className="right-input">
                  <label htmlFor="firstName">First Name </label>
                  <br />
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="right-input input-group"
                  />
                </div>
                <div className="left-input">
                  <label htmlFor="lastName">Last Name </label>
                  <br />
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="left-input input-group"
                  />
                </div>
              </UpperInputContainer>
              <UpperInputContainer
                className="upper-input-container"
                id="keep-mounted-modal-description"
              >
                <div className="right-input">
                  <label htmlFor="id">Matric Number </label>
                  <br />
                  <Input
                    type="text"
                    id="id"
                    name="id"
                    className="right-input input-group"
                  />
                </div>
                <div className="left-input">
                  <label htmlFor="email">Email Address </label>
                  <br />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="left-input input-group"
                  />
                </div>
              </UpperInputContainer>
              <UpperInputContainer
                className="upper-input-container"
                id="keep-mounted-modal-description"
              >
                <DeptWrapper className="right-input wrapper">
                  <label htmlFor="">Department</label>
                  <br />
                  <Select
                    name="dept"
                    id="dept"
                    className="right-input input-group"
                  >
                    <Option value="">Mathematical Science</Option>
                    <Option value="">Engineering</Option>
                    <Option value="">Chemical Science</Option>
                    <Option value="">Biological Science</Option>
                  </Select>
                  <br />
                </DeptWrapper>
                <div className="left-input">
                  <label htmlFor="">Course</label>
                  <br />
                  <Select
                    name="dept"
                    id="dept"
                    className="right-input input-group"
                  >
                    <Option value="">Computer Science</Option>
                    <Option value="">Select Department</Option>
                    <Option value="">Select Department</Option>
                  </Select>
                  <br />
                </div>
              </UpperInputContainer>
              <UpperInputContainer
                className="upper-input-container"
                id="keep-mounted-modal-description"
              >
                <div className="right-input">
                  <label htmlFor="firstName">Age </label>
                  <br />
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    className="right-input input-group"
                  />
                </div>
                <div className="left-input">
                  <label htmlFor="lastName">Phone </label>
                  <br />
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="left-input input-group"
                  />
                </div>
              </UpperInputContainer>
            </AllInputsContainer>

            <section className="note">
              <NoteContainer className="note-container">
                <div className="right-note">
                  <AlertNote className="alert-note">
                    <div>
                      <img src={alertIcon} alt="" className="note-img" />
                    </div>
                    <NoteText>
                      <h5 className="note-text">Note</h5>
                    </NoteText>
                  </AlertNote>
                  <MatricTag className="matric">
                    Matric Number will Generate Automatically
                  </MatricTag>
                </div>
                <NoteCloseIcon className="note-icon">
                  <CloseIcon />
                </NoteCloseIcon>
              </NoteContainer>
            </section>

            <section className="button-section">
              <div></div>
              <ButtonContainer className="buttons-container">
                <CancelButton className="cancel-button" onClick={handleClose}>
                  Cancel
                </CancelButton>
                <ProceedButton className="proceed-button" onClick={handleClick}>
                  Proceed
                </ProceedButton>
              </ButtonContainer>
            </section>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddNewStudents;

const MainButton = styled.button`
  border: 1px solid #f97316;
  border-radius: 25px;
  padding: 10px 10px;
  cursor: pointer;
  color: #ffffff;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 12px 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #262626;
  font-family: Inter, sans-serif;
  font-weight: 600;
  /* margin-top: -10px; */
  @media (max-width: 768px) {
    padding: 12px 120px;
    margin-top: -12px;
  }
  @media (max-width: 1280px) and (min-width: 769px) {
    padding: 12px 20px;
    margin-top: -18px;
  }
`;

const CenterImageContainer = styled.div`
  margin-top: 20px;
`;

const CloseIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CenterImage = styled.img`
  display: block;
  margin: auto;
  border-radius: 50%;
  background-color: #ccc;
  width: 50px;
  height: 50px;
`;

const AllInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const DeptWrapper = styled.div`
  /* position: relative;
  font-family: Arial;
  width: 100%; */
`;

const Select = styled.select`
  /* display: none; */
  height: 40px;
  width: 185px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
`;

const Option = styled.option`
  font-family: Inter, sans-serif;
  font-weight: 500;
  margin: 10px 0;
  padding: 10px 0;
  background-color: #fafafa;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f97316;
  border-radius: 6px;
  margin: 70px 50px;
  padding: 20px 50px;
  background: rgba(249, 115, 22, 0.05);
  @media (max-width: 768px) {
    display: none;
  }
`;

const AlertNote = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NoteText = styled.div`
  padding-left: 11px;
  color: #f97316;
`;

const MatricTag = styled.h5`
  padding-left: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #f97316;
`;

const NoteCloseIcon = styled.div`
  color: #f97316;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 82px;
  width: 100%;
  margin-top: -30px;
  background: rgba(249, 115, 22, 0.15);
  @media (max-width: 768px) {
    height: 60px;
    /* margin-top: -150px; */
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
    padding: 10px;
  }
  @media (max-width: 1280px) and (min-width: 769px) {
    margin-top: 75px;
  }
`;

const CancelButton = styled.button`
  height: 30px;
  margin-right: 10px;
  border: 1px solid #fff4ed;
  border-radius: 4px;
  background: #fff4ed;
  padding: 3px 10px;
  color: #f97316;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 10px;
    padding: 10px;
  }
`;

const ProceedButton = styled.button`
  height: 30px;
  margin-right: 55px;
  border: 1px solid#F97316;
  border-radius: 4px;
  background: rgba(249, 115, 22, 0.15);
  padding: 3px 10px;
  color: #f97316;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
  }
`;