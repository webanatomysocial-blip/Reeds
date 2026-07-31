"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InnerBanner from "../../(Components)/InnerBanner";
import { getBlogPostBySlug, getFeaturedImage, stripHtml } from "../../lib/wordpress";
import "../../(Css)/Blogs/Blogs.css";

function BlogPostContent() {
  const slug = useSearchParams().get("slug");
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    if (!slug) return;
    getBlogPostBySlug(slug).then(setPost);
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

  return (
    <>
      <InnerBanner bgImage={image} eyebrowText="Blog" title={title} />
      <section className="blog-post-section">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
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
