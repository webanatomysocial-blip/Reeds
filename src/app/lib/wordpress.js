const WP_BASE_URL = "https://reeds.mosol9.in/wp-json/wp/v2";
export const BLOG_CATEGORY_ID = 2;

export function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getBlogPosts() {
  const res = await fetch(
    `${WP_BASE_URL}/posts?category=${BLOG_CATEGORY_ID}&_embed&per_page=100`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      }
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getBlogPostBySlug(slug) {
  const res = await fetch(
    `${WP_BASE_URL}/posts?category=${BLOG_CATEGORY_ID}&slug=${slug}&_embed`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      }
    }
  );
  if (!res.ok) return null;
  const posts = await res.json();
  return posts[0] ?? null;
}

export function getFeaturedImage(post) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "/assets/Home_Assets/HomeBannner.avif"
  );
}
