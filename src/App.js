import React from 'react';
import './App.css';
import Home from './screens/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/login';
import Signup from './screens/signup';
import UserBlogs from './screens/userBlogs';
import CreateBlog from './screens/createBlog';



function App() {
  return (
  
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/my-blogs" element={<UserBlogs />} />
            <Route exact path="/create-blog" element={<CreateBlog />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
 
  );
}

export default App;
