import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Profile() {
    const { name } = useParams()
    const [branch, setBranch] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = ()=>
    {
        axios.get(`http://localhost:8080/courses/${name}`) 
        .then(res=>{
            console.log("response data",res.data);
            const data = res.data
            setBranch(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
            <div>
                <div style={{fontSize:"50px",marginTop:"50px",marginBottom:"80px"}}>{name}</div>
                <div style={{fontSize:"40px",marginBottom:"40px"}}>Courses</div>
                <div style={{display:'flex',width:"85%",justifyContent:"space-around",margin:"auto",textAlign:"left"}}>
                <div style={{border:"1px solid black",borderRadius:"5px",padding:"10px",width:"20%"}} className='change-bgcolor'>
                        <div style={{fontSize:"30px",paddingLeft:"35px",marginBottom:"20px",fontWeight:"bold"}}>First Year</div>
                        <div style={{fontSize:"22px",paddingLeft:"35px"}}>First Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="First Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                        <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                        <div style={{fontSize:"22px",paddingLeft:"35px",paddingTop:"30px"}}>Sixth Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Second Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                    </div>
                    <div style={{border:"1px solid black",borderRadius:"5px",padding:"10px",width:"20%"}} className='change-bgcolor'>
                        <div style={{fontSize:"30px",paddingLeft:"35px",marginBottom:"20px",fontWeight:"bold"}}>Second Year</div>
                        <div style={{fontSize:"22px",paddingLeft:"35px"}}>Third Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Third Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                        <div style={{fontSize:"22px",paddingLeft:"35px",paddingTop:"30px"}}>Fourth Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Fourth Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                    </div>
                    <div style={{border:"1px solid black",borderRadius:"5px",padding:"10px",width:"20%"}} className='change-bgcolor'>
                        <div style={{fontSize:"30px",paddingLeft:"35px",marginBottom:"20px",fontWeight:"bold"}}>Third Year</div>
                        <div style={{fontSize:"22px",paddingLeft:"35px"}}>Fifth Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Fifth Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                        <div style={{fontSize:"22px",paddingLeft:"35px",paddingTop:"30px"}}>Sixth Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Sixth Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                    </div>
                    <div style={{border:"1px solid black",borderRadius:"5px",padding:"10px",width:"20%"}} className='change-bgcolor'>
                        <div style={{fontSize:"30px",paddingLeft:"35px",marginBottom:"20px",fontWeight:"bold"}}>Fourth Year</div>
                        <div style={{fontSize:"22px",paddingLeft:"35px"}}>Seventh Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Seventh Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none",color:"black"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                        <div style={{fontSize:"22px",paddingLeft:"35px",paddingTop:"30px"}}>Eighth Semester</div>
                        {branch.map((course) => {
                            if(course.sem==="Eighth Sem")
                            return (<div style={{marginLeft:"4px",fontSize:"20px"}}>
                                <ul>
                                    <li>
                                    <Link to = {`/posts/${course.courseName}`} style={{textDecoration:"none"}}>{course.courseName}</Link>
                                    </li>
                                </ul>
                            </div>); 
                        })}
                    </div>
                </div>
                
            </div>
    )
}

export default Profile