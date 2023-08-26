import React from "react";
import imageRight from "../../src/assets/intersect2.png";

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="container_two">
          <div className="image-container">
            <img
              src={imageRight}
              alt=""
              className="about-image"
              height="500px"
            />
          </div>
          <div className="right_content">
            <h3 style={{ fontSize: "25px" }} className="aboutUs">
              About Us
            </h3>
            <p className="right_lower_content">
              Examlab is a cloud-based software for creating, delivering, and
              grading exams. It is widely used in academic institutions,
              professional organizations, and licensing bodies to administer
              high-stakes exams and assessments. Examlab is a digital assessment
              platform that helps institutions achieve higher levels of course,
              program, and student success. Exams are taken without an internet
              connection, ensuring a reliable and secure test experience.
              ExamSoft makes it simple to create, administer, and grade exams,
              and generate detailed performance reports — all to provide
              educators with a complete and accurate view of student learning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
