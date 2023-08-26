import React from "react";
import { useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import style from '../../AdminDashboard/upload/upload.module.css'
import SearchBar from '../../../components/searchbar';


const Sidebar = () => {
    const [navbar, setNavbar] = useState(false);
  
    const handleShow =()=>{
      setNavbar(!navbar)

    }
    return ( 
        <>
                        {/* side bar start here  */}

                        <div className={style.mainSearch}>
                    <div className={style.bar}>
                    
                        {navbar ? (
                            <Button onClick={handleShow} >
                                    <ArrowRightAltIcon className={style.icon}  />
                
                            </Button >
                                ) : (
                            <Button onClick={handleShow} >
                                    <TableRowsIcon className={style.icon}  />
                
                            </Button >
                        )}
            
                    </div>

                    <div className={style.sideBar} style={{ display: navbar ? 'flex': ''}}>
                        <div className={style.searchBar}>
                            
                            {/* search component */}
                            <SearchBar />
                            <div className={style.bar}>
                    
                        {navbar ? (
                            <Button onClick={handleShow} >
                                    <ArrowRightAltIcon className={style.icon}  />
                
                            </Button >
                                ) : (
                            <Button onClick={handleShow} >
                                    <TableRowsIcon className={style.icon}  />
                
                            </Button >
                        )}
            
                    </div>

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

                {/* sidebar ends here */}
        </>
     );
}
 
export default Sidebar;