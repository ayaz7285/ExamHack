import * as React from 'react';
import axios from 'axios'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button'
import { Component } from 'react'

class AddPost extends Component {
    constructor(props) {
        super(props)
        
        const token = localStorage.getItem("token")

        this.state = {
            author:token,
            title:"",
            courseName:"",
            branch:"",
            year:"",
            type:"",
            resume:null,
            successmessage: "",
            errorMessage: ""
        }
    }
    
    enterCourseName = (event) =>{
        this.setState({
            courseName:event.target.value
        })
    }

    enterTitle = (event) =>{
        this.setState({
            title:event.target.value
        })
    }

    enterBranch = (event) =>{
        this.setState({
            branch:event.target.value
        })
    }

    enterYear = (event) =>{
        this.setState({
            year:event.target.value
        })
    }

    enterType = (event) =>{
        this.setState({
            type:event.target.value
        })
    }

    setResume = (event)=>{
        this.setState({resume:event.target.files[0]})
        console.log(event.target.files[0])
    }
    
    upload = ()=>{
        var fd = new FormData()
        fd.append("title",this.state.title)
        fd.append("courseName",this.state.courseName)
        fd.append("branch",this.state.branch)
        fd.append("year",this.state.year)
        fd.append("type",this.state.type)
        fd.append("author",this.state.author)
        fd.append("resume",this.state.resume)
        console.log(fd);
        axios.post("http://localhost:8080/addpost",fd)
        .then(res=>console.log(res.data))
    }

    handleSubmit=(event)=>{
                // alert(`form submitted by ${this.state.username}`)
                console.log("username",this.state.username)
                event.preventDefault()
            }


    render() {
        if(this.state.loggedIn == false){
            return <Navigate to = "/login"></Navigate>
        }
        return (
            <div>
                <Paper style={{width:"60%",margin:"100px auto",padding:"10px"}} elevation={5}>
                    <h1>Upload Material</h1>
                    <div style={{marginBottom:"20px"}}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" sx={{width:"90%",margin:"auto"}}
                        value={this.state.title} onChange={this.enterTitle}/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <TextField id="outlined-basic" label="Course Name" variant="outlined" sx={{width:"90%",margin:"auto"}}
                        value={this.state.courseName} onChange={this.enterCourseName}/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <TextField id="outlined-basic" label="Department" variant="outlined" sx={{width:"90%",margin:"auto"}}
                        value={this.state.branch} onChange={this.enterBranch}/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <TextField id="outlined-basic" label="Year" variant="outlined" sx={{width:"90%",margin:"auto"}} 
                        value={this.state.year} onChange={this.enterYear}/>
                    </div>
                    <FormControl fullWidth sx={{width:"90%",margin:"auto",textAlign:"left"}}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.type}
                            label="Age"
                            onChange={this.enterType}
                            
                        >
                        <MenuItem value="Quiz">Quiz</MenuItem>
                        <MenuItem value="Notes">Notes</MenuItem>
                        <MenuItem value="Papers">Papers</MenuItem>
                        </Select>
                    </FormControl>
                <div style={{display:"flex",width:"fit-content",border:"1px solid gray",margin:"10px auto",padding:"5px"}}>
                    <input type="file" id="resume" style={{display:"none"}} onChange={this.setResume}/>
                    <Button style={{marginRight:"5px"}}><label for="resume">Select File</label></Button> 
                    <Button variant="outlined" onClick={this.upload} >Upload</Button>
                </div>
                </Paper>
            </div>
        )
    }
}

export default AddPost