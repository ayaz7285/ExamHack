import React, { Component } from 'react'
import {Navigate,Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import axios from 'axios'

export class Profile extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token",token)
        let loggedIn = true
        let name = token
        if(token === null)
        {
            alert("Login to see your profile")
            loggedIn=false
        }
        this.state = {
             loggedIn,
             name,
             user:{},
             pp:"http://localhost:8080/user.png",
             image:null,
        }
    }
    
    setImage = (event)=>{
        this.setState({image:event.target.files[0]})
        console.log(event.target.files[0])
    }

    upload = ()=>{
        var fd = new FormData()
        fd.append("name",this.state.name)
        fd.append("pp",this.state.image)
        axios.post("http://localhost:8080/uploadImage",fd)
        .then(res=>console.log(res.data))
    }

    componentDidMount()
    {
        axios.get(`http://localhost:8080/profile/${this.state.name}`) 
        .then(res=>{
            console.log("response data",res.data);
            this.setState({user: res.data});
            this.setState({friends: res.data.friends});
            this.setState({pp:res.data.image})
            console.log("friends",this.state.friends)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        if(this.state.loggedIn == false){
            return <Navigate to = "/login"></Navigate>
        }
        const {user} = this.state
        const {friends} = this.state
        return (
            <div style={{padding:"10px"}}>
                <Paper elevation={5} sx={{width:"80%",margin:"auto",padding:"20px"}}>
                <img src={this.state.pp} style={{height:"30%",width:"30%",borderRadius:"50%"}}/>
                <div style={{width:"fit-content",height:"fit-content",margin:"auto",padding:"4px",border:"1px solid gray",display:"flex"}}>
                    <input type="file" id="image" style={{marginTop:"3px",display:"none"}} onChange={this.setImage}/> 
                    <Button style={{marginRight:"10px"}}><label for="image"> Select Profile Pic </label></Button> 
                    <Button variant="outlined" onClick={this.upload} >Upload</Button>
                </div>
                <h1 style={{fontFamily:'Pacifico',margin:"5px",fontSize:"50px"}}>Your Profile</h1>
                <Paper elevation={4} sx={{width:"60%",textAlign:"justify",margin:"auto",padding:"15px",fontSize:"20px"}}>
                <div><b>Name: </b>{user.name}</div>
                <div><b>Email: </b>{user.email}</div>
                <div><b>Contact No.: </b>{user.contact}</div>
                <div><b>Department: </b>{user.branch}</div>
                <div><b>Year: </b>{user.year}</div>
                </Paper>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/userposts">Your Posts</Link> </Button>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/addpost">Create New Post</Link> </Button>
                </Paper>
            </div>
        )
    }
}

export default Profile