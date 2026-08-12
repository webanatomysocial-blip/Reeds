"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InnerBanner from "../(Components)/InnerBanner";
import { getStoryPosts, getFeaturedImage, stripHtml } from "../lib/wordpress";
import "../(Css)/Stories/Stories.css";

export default function StoriesPage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getStoryPosts().then(setPosts);
  }, []);

  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/REEDS-Secretary-meeting-with-Shri-Pranab-Kumar-Mukherjee-.jpeg"
        eyebrowText="Stories"
        title="Stories from the Field"
        desc="Real moments from the REEDS community, told one story at a time."
      />

      <section className="stories-list-section">
        <div className="stories-list-grid">
          {posts?.map((post) => (
            <Link href={`/stories/post/?slug=${post.slug}`} className="stories-list-card" key={post.id}>
              <div
                className="stories-list-image"
                style={{ backgroundImage: `url(${getFeaturedImage(post)})` }}
              />
              <div className="stories-list-overlay" />
              <h3 className="stories-list-title">{stripHtml(post.title.rendered)}</h3>
            </Link>
          ))}
        </div>
        {posts?.length === 0 && <p className="stories-list-empty">No stories yet.</p>}
      </section>
    </>
  );
}
