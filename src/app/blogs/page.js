"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InnerBanner from "../(Components)/InnerBanner";
import { getBlogPosts, getFeaturedImage, stripHtml } from "../lib/wordpress";
import "../(Css)/Blogs/Blogs.css";

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/REEDS-Secretary-meeting-with-Shri-Pranab-Kumar-Mukherjee-.jpeg"
        eyebrowText="News & Blog"
        title="Stories from the Field"
        desc="Updates, reflections, and impact stories from the REEDS community."
      />

      <section className="blogs-list-section">
        <div className="blogs-list-grid">
          {posts.map((post) => (
            <Link href={`/blogs/post/?slug=${post.slug}`} className="blog-card" key={post.id}>
              <div className="blog-image-container">
                <div
                  className="blog-image"
                  style={{ backgroundImage: `url(${getFeaturedImage(post)})` }}
                ></div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{stripHtml(post.title.rendered)}</h3>
                <p className="blog-excerpt">{stripHtml(post.excerpt.rendered)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
