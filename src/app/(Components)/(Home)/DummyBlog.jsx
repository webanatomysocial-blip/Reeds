"use client";
import React from 'react';
import '@/app/(Css)/(Home)/DummyBlog.css';
import AnimatedContent from '@/app/(Components)/AnimatedContent';

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
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
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
    </AnimatedContent>
  );
};

export default DummyBlog;
