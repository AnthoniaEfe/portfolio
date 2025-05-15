// hooks/useAnchorScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function useAnchorScroll() {
  useEffect(() => {
    const getSamePageAnchor = (link) => {
      const { protocol, host, pathname, search, hash } = link;
      if (
        protocol !== window.location.protocol ||
        host !== window.location.host ||
        pathname !== window.location.pathname ||
        search !== window.location.search
      ) {
        return false;
      }
      return hash;
    };

    const scrollToHash = (hash, e) => {
      const elem = hash ? document.querySelector(hash) : null;
      if (elem) {
        if (e) e.preventDefault();
        gsap.to(window, { duration: 2, scrollTo: elem });
      }
    };

    // Add event listener to all anchor tags
    const links = document.querySelectorAll("a[href]");
    const handleClick = (e) => {
      const hash = getSamePageAnchor(e.currentTarget);
      if (hash) {
        scrollToHash(hash, e);
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Scroll on page load if there's a hash
    scrollToHash(window.location.hash);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);
}
