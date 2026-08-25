"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiFacebook, FiLinkedin, FiUser, FiBriefcase, FiCheckCircle, FiMail } from "react-icons/fi";
import InnerBanner from "../../(Components)/InnerBanner";
import { getBlogPosts, getBlogPostBySlug, getFeaturedImage, stripHtml, parseBlogByline } from "../../lib/wordpress";
import "../../(Css)/Blogs/Blogs.css";

gsap.registerPlugin(ScrollTrigger);

function BlogPostContent() {
  const slug = useSearchParams().get("slug");
  const [post, setPost] = useState(undefined);
  const [recentPosts, setRecentPosts] = useState([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (!slug) return;
    getBlogPostBySlug(slug).then(setPost);
    getBlogPosts().then((posts) =>
      setRecentPosts(posts.filter((p) => p.slug !== slug).slice(0, 4))
    );
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const tween = gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [post]);

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
  });
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const { meta: authorMeta, bodyHtml } = parseBlogByline(post.content.rendered);

  return (
    <>
      <InnerBanner bgImage={image} title={title}  />

      <div className="blog-sticky-header">
        <div className="blog-sticky-header-content">
          <span className="blog-sticky-header-title">{title}</span>
          <div className="blog-sticky-header-actions">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="blog-sticky-share-link"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="blog-sticky-share-link"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="blog-scroll-progress-bar" ref={progressBarRef}></div>
      </div>

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
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
            {authorMeta && (
              <div className="blog-author-block">
                {authorMeta.quote && <h2 className="blog-author-quote">{authorMeta.quote}</h2>}
                <ul className="blog-author-meta-list">
                  {authorMeta.author && (
                    <li>
                      <FiUser className="blog-author-meta-icon" />
                      <span className="blog-author-meta-label">Author:</span>
                      <span className="blog-author-meta-value">{authorMeta.author}</span>
                    </li>
                  )}
                  {authorMeta.workingAs && (
                    <li>
                      <FiBriefcase className="blog-author-meta-icon" />
                      <span className="blog-author-meta-label">Working As:</span>
                      <span className="blog-author-meta-value">{authorMeta.workingAs}</span>
                    </li>
                  )}
                  {authorMeta.publishedOn && (
                    <li>
                      <FiCheckCircle className="blog-author-meta-icon" />
                      <span className="blog-author-meta-label">Published On:</span>
                      <span className="blog-author-meta-value">{authorMeta.publishedOn}</span>
                    </li>
                  )}
                  {authorMeta.shareEmail && (
                    <li>
                      <FiMail className="blog-author-meta-icon" />
                      <span className="blog-author-meta-label">Share your view at:</span>
                      <a href={`mailto:${authorMeta.shareEmail}`} className="blog-author-meta-value blog-author-meta-link">
                        {authorMeta.shareEmail}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
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
