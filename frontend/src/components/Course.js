import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Like from '@mui/icons-material/ThumbUpAltOutlined';
import Dislike from '@mui/icons-material/ThumbDownAltOutlined';
import { Paper } from '@mui/material';

function Course() {
    const { name } = useParams()
    const [course, setCourse] = useState({})
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getData()
    },{})
    useEffect(()=>{
        getPosts()
    },{})
    const getData = ()=>
    {
        axios.get(`http://localhost:8080/info/${name}`) 
        .then(res=>{
            console.log("response data",res.data);
            const data = res.data
            setCourse(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const getPosts = ()=>
    {
        axios.get(`http://localhost:8080/posts/${name}`) 
        .then(res=>{
            console.log("response data",res.data);
            const data = res.data
            setPosts(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }


    function updateLike(id){
        let name = localStorage.getItem("token")
        if(name)
        {
            let likes=1
            let dislikes=0
            const JSON = {
                id:id,
                likes:likes,
                dislikes:dislikes
            }
            axios
            .post('http://localhost:8080/like_dislike', JSON)
            .then(response => {
                console.log("Likes Updated", response.data);
            })
        }else{
            alert("Login to like the post")
        }
    }
    function updateDislike(id){
        let name = localStorage.getItem("token")
        if(name)
        {
            let likes=0
            let dislikes=1
            const JSON = {
                id:id,
                likes:likes,
                dislikes:dislikes
            }
            axios
            .post('http://localhost:8080/like_dislike', JSON)
            .then(response => {
                console.log("Likes Updated", response.data);
            })
        }else{
            alert("Login to dislike the post")
        }
    }

    
    return (
            <div>
                <div style={{fontSize:"50px",marginTop:"50px",marginBottom:"80px",fontWeight:"bold"}}>{name}</div>
                
                <div style={{width:"fit-content",fontSize:"25px",textAlign:"left",margin:"auto"}}>
                    <div> <b>Department: </b>  {course.branch}</div>
                    <div> <b>Year: </b> {course.year}</div>
                    <div> <b>Semester: </b> {course.sem}</div>
                    <div> <b>Syllabus: </b>  <a href={course.syllabus} target="_blank"> Click Here </a> </div>
                </div>



                <h1 style={{padding:"30px",fontSize:"50px"}}>Course Materials</h1>
               <div>
                   <h1>Quizzes</h1>
                    {posts.map((post) => {
                         if(post.type==="Quiz")
                         return (<Paper style={{margin:"10px auto",fontSize:"20px",width:"75%",padding:'10px',textAlign:"left"}} elevation={4}>
                         <div style={{fontSize:"30px",margin:"10px",fontWeight:"bold"}}>
                             {post.title}
                         </div>   
                         <div style={{fontSize:"20px",margin:"10px"}}>
                            <b>Course Name: </b>  {post.courseName}
                         </div>  
                         <div style={{fontSize:"20px",margin:"10px"}}>
                             <b>Department: </b>{post.branch}
                         </div>  
                         <div style={{fontSize:"20px",margin:"10px"}}>
                             <b>Uploaded By: </b>{post.author}
                         </div>  
                         <hr style={{marginTop:"40px",marginBotton:"15px"}} ></hr>
                         <div style={{display:"flex",margin:"10px"}}>
                             <div style={{margin:"5px"}}> <a href={post.link} target="_blank" style={{textDecoration:"none"}}> View </a> </div>
                             <Like style={{margin:"5px"}} onClick={(event) => updateLike(post._id)}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                             <Dislike style={{margin:"5px"}} onClick={(event) => updateDislike(post._id)}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                         </div>
                     </Paper>); 
                    })}
               </div>
               <div>
                   <h1>Class Notes</h1>
                    {posts.map((post) => {
                         if(post.type==="Notes")
                         return (<Paper style={{margin:"10px auto",fontSize:"20px",width:"75%",padding:'10px',textAlign:"left"}} elevation={4}>
                         <div style={{fontSize:"30px",margin:"10px",fontWeight:"bold"}}>
                             {post.title}
                         </div>   
                         <div style={{fontSize:"20px",margin:"10px"}}>
                            <b>Course Name: </b>  {post.courseName}
                         </div>  
                         <div style={{fontSize:"20px",margin:"10px"}}>
                             <b>Department: </b>{post.branch}
                         </div>  
                         <div style={{fontSize:"20px",margin:"10px"}}>
                             <b>Uploaded By: </b>{post.author}
                         </div>  
                         <hr style={{marginTop:"40px",marginBotton:"15px"}} ></hr>
                         <div style={{display:"flex",margin:"10px"}}>
                             <div style={{margin:"5px"}}> <a href={post.link} target="_blank" style={{textDecoration:"none"}}> View </a> </div>
                             <Like style={{margin:"5px"}} onClick={(event) => updateLike(post._id)}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                             <Dislike style={{margin:"5px"}} onClick={(event) => updateDislike(post._id)}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                         </div>
                     </Paper>); 
                    })}
               </div>
               <div>
                   <h1>Previous Year Question Papers</h1>
                    {posts.map((post) => {
                         if(post.type==="Papers")
                        return (<Paper style={{margin:"10px auto",fontSize:"20px",width:"75%",padding:'10px',textAlign:"left"}} elevation={4}>
                            <div style={{fontSize:"30px",margin:"10px",fontWeight:"bold"}}>
                                {post.title}
                            </div>   
                            <div style={{fontSize:"20px",margin:"10px"}}>
                               <b>Course Name: </b>  {post.courseName}
                            </div>  
                            <div style={{fontSize:"20px",margin:"10px"}}>
                                <b>Department: </b>{post.branch}
                            </div>  
                            <div style={{fontSize:"20px",margin:"10px"}}>
                                <b>Uploaded By: </b>{post.author}
                            </div>  
                            <hr style={{marginTop:"40px",marginBotton:"15px"}} ></hr>
                            <div style={{display:"flex",margin:"10px"}}>
                                <div style={{margin:"5px"}}> <a href={post.link} target="_blank" style={{textDecoration:"none"}}> View </a> </div>
                                <Like style={{margin:"5px"}} onClick={(event) => updateLike(post._id)}/>
                                <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                                <Dislike style={{margin:"5px"}} onClick={(event) => updateDislike(post._id)}/>
                                <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                            </div>
                        </Paper>); 
                    })}
               </div>



            </div>
    )
}

export default Course