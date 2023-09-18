import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Newsletter from "../components/newsletter";
import axios from "axios";
import BlogCard from "../components/blogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  // Function to fetch all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/all-blogs");
      if (data?.success) {
         // Reverse the order of blogs
         const reversedBlogs = data.blogs.reverse();
         setBlogs(reversedBlogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              key={blog._id} 
              title={blog.title}
              content={blog.content}
              image={blog.image}
              author={blog.author}
              date={blog.date}
              _id={blog._id} // Pass the _id to the BlogCard component
            />
          ))}
      </div>

      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
