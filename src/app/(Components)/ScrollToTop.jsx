"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { scrollToHash } from "../lib/scroll";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();
  const initialLoad = useRef(true);

  useEffect(() => {
    if (!lenis) return;

    if (initialLoad.current) {
      initialLoad.current = false;
      if (!window.location.hash) return; // Let browser handle normal scroll restoration
    }

    const run = () => scrollToHash(lenis, window.location.hash);

    // Images (e.g. Awards) still loading can shift layout after the initial
    // scroll, so re-run once everything has finished loading.
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
