const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(fileUpload());

app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/ExamHack",{
    useNewURLParser:true,
    useUnifiedTopology:true
},()=>{console.log("connected to db")});

////////////////////////////////////////////////// USER API //////////////////////////////////////////////////////////////

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:String,
    branch:String,
    year:String,
    image:String
  })
  
  const User = mongoose.model("User",userSchema);

  app.post("/login",(req,res)=>{
    const {email,password} = req.body
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login sucees",user:user})
            }else{
                res.send({message:"Wrong credentials"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
  })
  
  app.post("/register",(req,res)=>{
    const {name,email,password,contact,branch,year} = req.body
    const image = "http://localhost:8080/user.png";
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exists"})
        }else{
            const user = new User({name,email,password,contact,branch,year,image})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"register success",user:user})
                }
            })
        }
    })
  })
  
//get user profile info
app.get("/profile/:name",(req,res)=>{
    const name = req.params.name
    User.findOne({name:name},(err,profile)=>{
        if(profile){
            res.send(profile)
        }else{
            res.send(err)
        }
    })
  })

//Uploading Profile Pic
app.post("/uploadImage",(req,res)=>{
    const image = req.files.pp
    console.log("user",req.body.name)
    const name = req.body.name;
    image.mv('public/'+image.name, function(err) {
    if (err)
      return res.status(500).send(err);
  
    console.log("image successfully uploaded",image)
  
    User.findOne({name:name},(err,user)=>{
        if(user){
            user.image = "http://localhost:8080/" + image.name
            user.save(err=>{
                    res.send({message:"profile pic updated",user:user})
            })
        }else{
            res.send("user not found, unable to upload profile pic")
        }
        })
  
    });
  
  })


////////////////////////////////////////////////////  COURSES API  /////////////////////////////////////////
const courseSchema = new mongoose.Schema({
    courseName:String,
    branch:String,
    year:String,
    sem:String,
    syllabus:String
  })
  
const Course = mongoose.model("Course",courseSchema);

//get courses
app.get("/courses/:branch",(req,res)=>{
    const branch = req.params.branch
    Course.find({branch:branch},(err,course)=>{
        if(course){
            res.send(course)
        }else{
            res.send(err)
        }
    })
  })

//get course info
app.get("/info/:name",(req,res)=>{
    const name = req.params.name
    Course.findOne({courseName:name},(err,course)=>{
        if(course){
            res.send(course)
        }else{
            res.send(err)
        }
    })
})

///////////////////////////////////////////////////// POST API  /////////////////////////////////
const postSchema = new mongoose.Schema({
    title:String,
    courseName:String,
    branch:String,
    year:String,
    type:String,
    link:String,
    author:String,
    likes:Number,
    dislikes:Number
  })
  
const Post = mongoose.model("Post",postSchema);

//get posts
app.get("/posts/:courseName",(req,res)=>{
    const courseName = req.params.courseName
    Post.find({courseName:courseName},(err,post)=>{
        if(post){
            res.send(post)
        }else{
            res.send(err)
        }
    })
})

//User Posts
app.get("/userPosts/:name",(req,res)=>{
    const name = req.params.name
    Post.find({author:name},(err,post)=>{
        if(post){
            res.send(post)
        }else{
            res.send(err)
        }
    })
})

//deleting post
app.post("/delete",(req,res)=>{
    const {id} = req.body
    console.log(req.body)
    Post.findOne({_id:id},(err,post)=>{
        if(post)
        {
            post.delete()
            res.send("Post deleted")
        }else{
            res.send("Post not found")
        }
    })
  })

//Uploading Post
app.post("/addPost",(req,res)=>{
    const resume = req.files.resume
    console.log("post",req.body)
    const {title,courseName,branch,year,type,author} = req.body
    resume.mv('public/'+resume.name, function(err) {
        if (err)
        return res.status(500).send(err);
    
        console.log("file successfully uploaded",resume)
    
        const link = "http://localhost:8080/" + resume.name;
        var likes = 0;
        var dislikes = 0;
        const post = new Post({title,courseName,branch,year,type,link,author,likes,dislikes})
        post.save(err=>{
            if(err){
                res.send(err)
            }else{
                res.send({message:"register success",post:post})
            }
        })

    });
  
  
})

//update like dislike
app.post("/like_dislike",(req,res)=>{
    const {id,author,likes,dislikes} = req.body
    console.log("likes/dislikes",req.body)
    Post.findOne({_id:id},(err,post)=>{
        if(post && author !==post.author ){     //the second conditon ensures that the user who posted, doesnot likes/dislikes his own post. That means a user can only like others posts not his own.
            post.likes+=Number(likes)
            post.dislikes+=Number(dislikes)
            post.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:`likes dislikes added`,post:post})
                }
            })
        }else{
            res.send("post not found, unable to update likes/dislikes")
        }
    })
})



app.listen(8080);
console.log('server running on port 8080');
