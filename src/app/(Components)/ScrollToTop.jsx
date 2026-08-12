"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToHash } from "../lib/scroll";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();
  const initialLoad = useRef(true);

  // Keep GSAP's ScrollTrigger in sync with Lenis's smoothed scroll position.
  // Without this, ScrollTrigger reads native scroll timing that lags behind
  // Lenis's rAF-driven scroll, which is what shows up as scroll "sticking".
  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    return () => lenis.off("scroll", ScrollTrigger.update);
  }, [lenis]);

  // Disable native scroll restoration to prevent conflicts with Lenis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (!lenis) return;

    // On navigation to a new route without a hash, reset scroll position
    if (!initialLoad.current && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }

    // On initial load without a hash, also ensure we start at the top
    if (initialLoad.current) {
      initialLoad.current = false;
      if (!window.location.hash) {
        lenis.scrollTo(0, { immediate: true });
        return;
      }
    }

    const run = () => scrollToHash(lenis, window.location.hash);

    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run, { once: true });
    }
    const raf = requestAnimationFrame(run);

    return () => {
      window.removeEventListener("load", run);
      cancelAnimationFrame(raf);
    };
  }, [pathname, lenis]);

  return null;
}
