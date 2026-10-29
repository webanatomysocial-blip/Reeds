export function getHeaderOffset() {
  if (typeof document === "undefined") return 0;
  const header = document.querySelector(".header-section");
  if (!header) return 0;
  const style = window.getComputedStyle(header);
  if (style.position === "fixed" || style.position === "sticky") {
    return header.getBoundingClientRect().height;
  }
  return 0;
}

export function scrollToHash(lenis, hash) {
  const target = hash && document.querySelector(hash);

  if (!target) {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    return;
  }

  const offset = getHeaderOffset();
  if (lenis) {
    lenis.scrollTo(target, { offset: -offset });
  } else {
    window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - offset);
  }
}
