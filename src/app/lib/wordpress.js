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

const categoryIdCache = {};

async function getCategoryIdBySlug(slug) {
  if (categoryIdCache[slug]) return categoryIdCache[slug];
  const res = await fetch(`${WP_BASE_URL}/categories?slug=${slug}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
  });
  if (!res.ok) return null;
  const categories = await res.json();
  const id = categories[0]?.id ?? null;
  categoryIdCache[slug] = id;
  return id;
}

// Not every post gets tagged into the "Blog" category on the WP side, so
// "blog posts" means "everything that isn't a Story" rather than a strict
// category match — this keeps both sections populated regardless of how a
// given post was categorized.
export async function getBlogPosts() {
  const storiesId = await getCategoryIdBySlug("stories");
  const excludeParam = storiesId ? `&categories_exclude=${storiesId}` : "";
  const res = await fetch(
    `${WP_BASE_URL}/posts?_embed&per_page=100${excludeParam}`,
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
    `${WP_BASE_URL}/posts?slug=${slug}&_embed`,
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

export async function getStoryPosts() {
  const categoryId = await getCategoryIdBySlug("stories");
  if (!categoryId) return [];
  const res = await fetch(
    `${WP_BASE_URL}/posts?categories=${categoryId}&_embed&per_page=100`,
    {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getStoryPostBySlug(slug) {
  const categoryId = await getCategoryIdBySlug("stories");
  if (!categoryId) return null;
  const res = await fetch(
    `${WP_BASE_URL}/posts?categories=${categoryId}&slug=${slug}&_embed`,
    {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
    }
  );
  if (!res.ok) return null;
  const posts = await res.json();
  return posts[0] ?? null;
}

// A story post is written as alternating image/text blocks. Each image
// starts a new slide; every block of text before the next image belongs
// to that slide (a heading becomes the slide title, the rest its body).
export function parseStorySlides(html = "") {
  if (typeof window === "undefined" || !html) return [];

  const doc = new DOMParser().parseFromString(html, "text/html");
  const slides = [];
  let current = null;

  for (const node of doc.body.children) {
    const img = node.querySelector?.("img") ?? (node.tagName === "IMG" ? node : null);

    if (img) {
      current = { image: img.getAttribute("src"), title: "", texts: [] };
      slides.push(current);
      continue;
    }

    if (!current) continue;

    const heading = node.querySelector?.("h1,h2,h3,h4,h5,h6") ?? (/^H[1-6]$/.test(node.tagName) ? node : null);
    if (heading && !current.title) {
      current.title = stripHtml(heading.innerHTML);
      continue;
    }

    const text = stripHtml(node.innerHTML ?? node.textContent);
    if (text) current.texts.push(text);
  }

  return slides.map((s) => ({
    image: s.image,
    title: s.title,
    text: s.texts.join(" "),
  }));
}
