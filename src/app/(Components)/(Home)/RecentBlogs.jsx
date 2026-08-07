"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedContent from "@/app/(Components)/AnimatedContent";
import { getBlogPosts, getFeaturedImage, stripHtml } from "@/app/lib/wordpress";
import "@/app/(Css)/Blogs/Blogs.css";

const RecentBlogs = ({ desktopPadding, mobilePadding }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then((all) => setPosts(all.slice(0, 3)));
  }, []);

  if (posts.length === 0) return null;

  const sectionStyle = {};
  if (desktopPadding) sectionStyle["--d-pad"] = desktopPadding;
  if (mobilePadding) sectionStyle["--m-pad"] = mobilePadding;

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
      <section className="blogs-list-section" style={Object.keys(sectionStyle).length > 0 ? sectionStyle : undefined}>
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
    </AnimatedContent>
  );
};

export default RecentBlogs;
