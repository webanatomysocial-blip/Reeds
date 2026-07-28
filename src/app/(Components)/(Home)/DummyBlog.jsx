"use client";
import React from 'react';
import '@/app/(Css)/(Home)/DummyBlog.css';

const blogData = [
  {
    title: "Impact in Action: Strengthening WASH Practices in a Government Rural School in Telangana",
    date: null,
    image: "/assets/Home_Assets/HomeBannner.avif"
  },
  {
    title: "Reflections on My Journey with REEDS",
    date: "Sep 19, 2025",
    image: "/assets/Home_Assets/HomeBannner.avif"
  },
  {
    title: "A Decade of Rural Impact",
    date: "Apr 7, 2025",
    image: "/assets/Home_Assets/HomeBannner.avif"
  }
];

const DummyBlog = () => {
  return (
    <section className="dummy-blog-section">
      <div className="dummy-blog-grid">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-container">
              <div 
                className="blog-image" 
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              {blog.date && <p className="blog-date">{blog.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DummyBlog;
