import React from 'react';
import url from "../images/footer.png"
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'


function Footer() {
  return <div style={{backgroundImage:`url(${url})`,height:"50vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div style={{display:"flex",color:"white",textAlign:"justify",margin:"30px auto",padding:"20px"}}>
          <div style={{width:"60%"}}>
            <div style={{fontSize:"40px",paddingLeft:"100px"}}>ExamHack</div>
            <p style={{fontSize:"20px",paddingLeft:"100px"}}>
                A MERN Stack website made for helping students prepare for their semester exams.
                Here we provide syllabus, quizzes, class notes and previous year questions
                for all courses for all branches.
                You can also register and upload materials on this website.
                This webiste has all courses for departments in 
                Indian Institute of Technology (BHU) Varanasi.
            </p>
          </div>
          <div style={{width:"30%",paddingLeft:"100px"}}> 
                <div style={{fontSize:"40px",marginBottom:"10px"}}>Contacts</div>
                <a href="https://www.instagram.com/" target="_blank" style={{textDecoration:"none",margin:"2px"}}><AiFillInstagram style={{width:"30px",height:"30px",color:"white"}}></AiFillInstagram></a>
                <a href="https://www.facebook.com/" target="_blank" style={{textDecoration:"none",margin:"2px"}}> <AiFillFacebook style={{width:"30px",height:"30px",color:"white"}}></AiFillFacebook></a>
                <a href="https://www.linkedin.com/in/ayaz-sarwar-68397a1b4/" target="_blank" style={{textDecoration:"none",margin:"2px"}}> <AiFillLinkedin style={{width:"30px",height:"30px",color:"white"}}></AiFillLinkedin></a>
                <a href="mailto:ayaz.3.sarwarchem@gmail.com" target="_blank" style={{textDecoration:"none",margin:"2px"}}> <AiFillMail style={{width:"30px",height:"30px",color:"white"}}></AiFillMail></a>
          </div>
      </div>
      <hr style={{color:"white",width:"90%",marginTop:"50px"}}></hr>
      <div style={{color:"white",fontSize:"18px"}}>Created by Ayaz Sarwar using MERN Stack Technology</div>
  </div>;
}

export default Footer;
