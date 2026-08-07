"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import InnerBanner from "../../(Components)/InnerBanner";
import { getBlogPosts, getBlogPostBySlug, getFeaturedImage, stripHtml } from "../../lib/wordpress";
import "../../(Css)/Blogs/Blogs.css";

function BlogPostContent() {
  const slug = useSearchParams().get("slug");
  const [post, setPost] = useState(undefined);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;
    getBlogPostBySlug(slug).then(setPost);
    getBlogPosts().then((posts) =>
      setRecentPosts(posts.filter((p) => p.slug !== slug).slice(0, 5))
    );
  }, [slug]);

  if (post === undefined) return null;

  if (post === null) {
    return (
      <section className="blog-post-section">
        <p>Post not found.</p>
      </section>
    );
  }

  const title = stripHtml(post.title.rendered);
  const image = getFeaturedImage(post);
  const postDate = new Date(post.date).toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <>
      <InnerBanner bgImage={image} title={title} meta={postDate} />
      <section className="blog-post-section">
        <div className="blog-post-layout">
          <aside className="blog-post-sidebar">
            <h3 className="trusted-supporters-subtitle" style={{color:"#4caf50",textTransform:"capitalize"}}>Recent posts</h3>
            {recentPosts.map((p) => (
              <Link key={p.id} href={`/blogs/post/?slug=${p.slug}`}>
                {stripHtml(p.title.rendered)}
              </Link>
            ))}
          </aside>
          <div className="blog-post-main">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPostPage() {
  return (
    <Suspense fallback={null}>
      <BlogPostContent />
    </Suspense>
  );
}
