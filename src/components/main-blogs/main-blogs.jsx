import React, { useState } from "react";
import { DummyBlogs } from "../../data";
import BlogPiece from "./blogpiece";
import "./main-blogs.css";

export default function MainBlogs() {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState(DummyBlogs);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredBlogs = DummyBlogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchTerm);
    });
    setBlogs(filteredBlogs);
  };

  return (
    <div className="blogs">
      <div className="search">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-input"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <h1 className="blogs-main-title">Courses Blogs</h1>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogPiece
              key={index}
              Image={blog.Image}
              category={blog.category}
              title={blog.title}
              description={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
}