import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/blogCard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



export default function UserBlogs() {
  const [blogs, setBlogs] = useState([]);
  // get user blogs
  const getUserBlogs = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:4000/api/user-blog/${userId}`);
  
      const { success, message, userBlog } = response.data;
  
      if (success) {
        // Handle successful response
        setBlogs(userBlog.blogs);
        console.log(userBlog.blogs);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs)
  return (
    <div>
      <div><Navbar /></div>
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            content={blog.content}
            image={blog.image}
            author={blog.author}
            date={blog.date}
          />
        ))}
    </div>
  
    </div>
  );
}
