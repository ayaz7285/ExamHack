import React, { Component } from 'react'
import axios from 'axios'
import Like from '@mui/icons-material/ThumbUpAltOutlined';
import Dislike from '@mui/icons-material/ThumbDownAltOutlined';
import Delete from '@mui/icons-material/DeleteOutlineOutlined';
import { Paper } from '@mui/material';

export class UserPosts extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("token")
        this.state = {
             list:[],
             name:token
        }
    }
    
    componentDidMount()
    {
        axios.get(`http://localhost:8080/userPosts/${this.state.name}`) 
        .then(res=>{
            console.log("response data",res.data);
            this.setState({list: res.data});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    setId(id,event){
        console.log(id)
        const JSON = {
            id:id
        };
        axios
        .post('http://localhost:8080/delete', JSON)
        .then(response => {
            console.log("Data from backend", response.data);
        })
    }


    render() {
        const {list} = this.state
        return (
            <div>
               <h1 style={{padding:"30px",fontSize:"50px"}}>Your Posts</h1>
               <div>
                   <h1>Quizzes</h1>
                    {list.map((post) => {
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
                             <div style={{margin:"5px"}}> <a href={post.link} style={{textDecoration:"none"}}> View </a> </div>
                             <Like style={{margin:"5px"}}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                             <Dislike style={{margin:"5px"}}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                             <button style={{border:"none"}} onClick={(event)=> this.setId(post._id,event)} > <Delete style={{margin:"5px"}}/> </button>
                         </div>
                     </Paper>); 
                    })}
               </div>
               <div>
                   <h1>Class Notes</h1>
                    {list.map((post) => {
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
                             <div style={{margin:"5px"}}> <a href={post.link} style={{textDecoration:"none"}}> View </a> </div>
                             <Like style={{margin:"5px"}}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                             <Dislike style={{margin:"5px"}}/>
                             <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                             <button style={{border:"none"}} onClick={(event)=> this.setId(post._id,event)} > <Delete style={{margin:"5px"}}/> </button>
                         </div>
                     </Paper>); 
                    })}
               </div>
               <div>
                   <h1>Previous Year Question Papers</h1>
                    {list.map((post) => {
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
                                <div style={{margin:"5px"}}> <a href={post.link} style={{textDecoration:"none"}}> View </a> </div>
                                <Like style={{margin:"5px"}}/>
                                <div style={{width:"10px",margin:"5px"}}>{post.likes}</div>
                                <Dislike style={{margin:"5px"}}/>
                                <div style={{width:"10px",margin:"5px"}}>{post.dislikes}</div>
                                <button style={{border:"none"}} onClick={(event)=> this.setId(post._id,event)} > <Delete style={{margin:"5px"}}/> </button>
                            </div>
                        </Paper>); 
                    })}
               </div>
            </div>
        )
    }
}

export default UserPosts