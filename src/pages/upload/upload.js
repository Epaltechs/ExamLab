import React from "react";
import style from "./upload.module.css";
import SearchBar from "../../components/searchbar";

const Upload = () => {
  return (
    <div className={style.mainContent}>
      <div className={style.subContent}>
        <div className={style.uploadbox}>
          <p className={style.uploadText}> Upload Exam Questions</p>
          <div className={style.innerBox}>
            <p className={style.innertext}>Upload file</p>
            <div className={style.upload}>
              <div className={style.innerUpload}>
                <div className={style.uploadImg}>
                  <img src="./Icon.png" alt="" />
                </div>
                <div className={style.innerText}>
                  <p className={style.fileText1}>
                    Upload a file or drag and drop
                  </p>
                  <p className={style.fileText2}>XLS up to 5MB</p>
                </div>
              </div>
            </div>
            <p className={style.downloadText}>
              {/* eslint-disable-next-line */}
              Don't have templates? Click <a href=""> Here </a> to download
            </p>
          </div>

          <div className={style.inputDiv}>
            <form action="">
              <div className={style.inputs}>
                <div className={style.dept}>
                  <input
                    type="text"
                    className={style.level}
                    placeholder="Select Department and level"
                  />

                  <input type="text" placeholder="Select Course" />
                </div>
              </div>
              <div className={style.inputs}>
                <input type="text" placeholder="Prerequisite Course" />
              </div>
              <div className={style.inputs}>
                <input type="text" placeholder="Course Code" />
              </div>

              <div className={style.input}>
                <div className={style.inputbutton}>
                  <button className={style.btn1}> Save </button>
                  <button className={style.btn2}> Save & Upload </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* side bar start here  */}

        <div className={style.mainSearch}>
          <div className={style.sideBar}>
            <div className={style.searchBar}>
              {/* search component */}
              <SearchBar />
            </div>

            <div className={style.Textbox}>
              <p className={style.ExamText}>Upcoming Examination</p>
            </div>

            <div className={style.examBox}>
              <div className={style.examDate}>
                <p> 15 March </p>
                <p> ooo </p>
              </div>

              <div className={style.examTime}>
                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub}>
                    <p className={style.courseCode}>CHM212</p>
                    <p className={style.courseTitle}>Analytical Chemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub1}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* sub 2 */}
            <div className={style.examBox}>
              <div className={style.examDate}>
                <p> 16 March </p>
                <p> ooo </p>
              </div>

              <div className={style.examTime}>
                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub}>
                    <p className={style.courseCode}>CHM212</p>
                    <p className={style.courseTitle}>Analytical Chemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub1}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* sub 3 */}

            <div className={style.examBox}>
              <div className={style.examDate}>
                <p> 18 March </p>
                <p> ooo </p>
              </div>

              <div className={style.examTime}>
                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub}>
                    <p className={style.courseCode}>CHM212</p>
                    <p className={style.courseTitle}>Analytical Chemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub1}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub2}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* sub 4 */}

            <div className={style.examBox}>
              <div className={style.examDate}>
                <p> 20 March </p>
                <p> ooo </p>
              </div>

              <div className={style.examTime}>
                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub}>
                    <p className={style.courseCode}>CHM212</p>
                    <p className={style.courseTitle}>Analytical Chemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub1}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub2}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>

                <div className={style.innerExam}>
                  <div className={style.time}>
                    <p> 09:00 </p>
                  </div>
                  <div className={style.examSub3}>
                    <p className={style.courseCode}>BCH312</p>
                    <p className={style.courseTitle}>Clinical Biochemistry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
