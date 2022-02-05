import React, { Component } from 'react'
import Paper from '@mui/material/Paper'
import url from '../images/logout.png'
export class Logout extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.removeItem("token")
    }
    
    render() {
        return (
            <div>
                <Paper elevation={5} sx={{width:"80%",height:"82vh",padding:"30px",margin:"30px auto",display:"flex"}}>
                    <img src={url}></img>
                    <div>
                    <h1 style={{fontSize:"70px",marginTop:"100px",fontFamily:'Pacifico'}}>You have been Logged out</h1>
                    <h2 style={{margin:"20px",fontFamily:"cursive"}}>Please Login to continue</h2>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Logout