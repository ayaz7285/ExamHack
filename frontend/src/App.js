import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Branch from './components/Branch';
import AddPost from './components/AddPost';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Profile from './components/Profile';
import UserPosts from './components/UserPosts';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/branch/:name" element={<Branch/>}/>
       <Route exact path="/addpost" element={<AddPost/>}/>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/logout" element={<Logout/>}/>
       <Route exact path="/register" element={<Register/>}/>
       <Route exact path="/profile" element={<Profile/>}/>
       <Route exact path="/userposts" element={<UserPosts/>}/>
       <Route exact path="/posts/:name" element={<Course/>}/>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
