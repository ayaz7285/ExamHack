import React from 'react';
import url1 from '../images/bg.png'
import url2 from '../images/y.png'
import eee from '../images/eee.jpg'
import ece from '../images/ece.jpg'
import chem from '../images/chem.png'
import cse from '../images/cse.jpg'
import mech from '../images/mech.jpg'
import civil from '../images/civil.jpg'
import mnc from '../images/mnc.jpg'
import meta from '../images/meta.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function Home() {
  return <div style={{marginBottom:"200px"}}>
      <img src = {url1} style={{height:"92vh",width:"100%"}}/>
      <div style={{display:"flex",padding:"20px",height:"70vh"}} className='reveal'>
          <div style={{width:"60%",height:"50vh",paddingTop:"100px",paddingLeft:"20px"}}>
             <div style={{textAlign:"justify",fontSize:"45px"}}>Over 200+ course materials for 100+ courses</div>
             <p style={{textAlign:"justify",fontSize:"25px"}}>
                 Is your exam time approaching? And you want quick revision.
                 We provide syllabus, quizes, class notes and previous year papers.
                 You can also help others by sharing your course materials on this website.
             </p>
          </div>
          <div>
             <img src={url2} style={{height:"100%",paddingLeft:"10px"}}/>
          </div>
      </div>
      <h2 style={{fontSize:"40px",marginTop:"200px"}} className='reveal'>We Provide</h2>
      <div style={{display:"flex",justifyContent:"space-around",width:"75%",textAlign:"justify",margin:"30px auto"}} className='reveal'>
        <div style={{border:"1px solid green",padding:"10px",width:"20%",height:"200px"}} className='change-bgcolor'>
            <div style={{fontSize:"25px",paddingLeft:"20px"}}>Syllabus</div>
            <ul style={{fontSize:"20px"}}>
                <li>Detailed Syllabus</li>
                <li>Professor Alloted</li>
                <li>Credits Distribution</li>
                <li>Reference Books</li>
            </ul>
        </div>
        <div style={{border:"1px solid green",padding:"10px",width:"20%",height:"200px"}} className='change-bgcolor'>
            <div style={{fontSize:"25px",paddingLeft:"20px"}}>Quizes</div>
            <ul style={{fontSize:"20px"}}>
                <li>Previous Year Quizes</li>
                <li>Answer Keys</li>
                <li>Quiz Weightage</li>
                <li>Marking Scheme</li>
            </ul>
        </div>
        <div style={{border:"1px solid green",padding:"10px",width:"20%",height:"200px"}} className='change-bgcolor'>
            <div style={{fontSize:"25px",paddingLeft:"20px"}}>Class Notes</div>
            <ul style={{fontSize:"20px"}}>
                <li>Detailed Notes</li>
                <li>Topper Verified</li>
                <li>Highlighted Points</li>
                <li>Solved Examples</li>
            </ul>
        </div>
        <div style={{border:"1px solid green",padding:"10px",width:"20%",height:"200px"}} className='change-bgcolor'>
            <div style={{fontSize:"25px",paddingLeft:"20px"}}>Papers</div>
            <ul style={{fontSize:"20px"}}>
                <li>Last 5 year papers</li>
                <li>Solutions available</li>
                <li>Marking Scheme</li>
                <li>Reference Books</li>
            </ul>
        </div>
      </div>
      <h2 style={{fontSize:"40px",marginTop:"250px"}} className='reveal'> Departments </h2>
      <div style={{display:"flex",width:"85%",margin:"auto",justifyContent:"space-around"}} className='reveal'>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={cse}
            alt="cse"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <Link to="/branch/Computer Science Engineering" style={{textDecoration:'none',color:"black"}}> Computer Science Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={ece}
            alt="ece"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Electronics Engineering" style={{textDecoration:'none',color:"black"}}> Electronics Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={eee}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Electrical Engineering" style={{textDecoration:'none',color:"black"}}> Electrical Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={chem}
            alt="chem"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Chemical Engineering" style={{textDecoration:'none',color:"black"}}> Chemical Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      
      </div>
      <div style={{display:"flex",width:"85%",margin:"auto",justifyContent:"space-around"}} className='reveal'>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={mech}
            alt="mech"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Mechanical Engineering" style={{textDecoration:'none',color:"black"}}> Mechanical Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={civil}
            alt="civil"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Civil Engineering" style={{textDecoration:'none',color:"black"}}> Civil Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={mnc}
            alt="mnc"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Mathematics and Computing" style={{textDecoration:'none',color:"black"}}> Mathematics and Computing</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 ,width:"30%",margin:"10px"}} elevation={5} className="zoom-in">
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={meta}
            alt="meta"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to="/branch/Metallurgical Engineering" style={{textDecoration:'none',color:"black"}}> Metallurgical Engineering</Link>
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      
      </div>
    </div>;
}

export default Home;
