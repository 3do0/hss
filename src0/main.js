import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);

// Global event handling for sitemap
window.addEventListener("show-sitemap-internal", () => {
  app._instance.ctx.showSitemap();
});

const appInstance = app.mount("#app");

// Make showSitemap available globally
window.addEventListener("show-sitemap-internal", () => {
  if (appInstance.showSitemap) {
    appInstance.showSitemap();
  }
});

// Optimized section-based reveal
(function initSectionReveal() {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const getChildren = (container) => {
    const sel = [
      "h1, h2, h3, h4, h5, p, ul, ol, li, figure, img, blockquote",
      "[class*=card], [class*=item], [class*=feature], [class*=service], [class*=step], [class*=stat]",
      "[class*=logo], [class*=partner], [class*=badge], [class*=cta], button, a.button, a.btn, .btn",
      "[data-reveal]",
    ].join(",");
    return Array.from(container.querySelectorAll(sel))
      .filter((el) => !el.closest(".navbar, .nav-menu, .mobile-overlay"))
      .filter((el) => el.offsetParent !== null);
  };

  const chooseVariant = (el, i) => {
    const explicit = el.getAttribute("data-reveal");
    if (explicit) return explicit;
    const variants = ["up", "right", "fade", "left", "zoom"];
    return variants[i % variants.length];
  };

  const sections = Array.from(
    document.querySelectorAll(
      [
        "section",
        "main > div[id]",
        "[class*=Section]",
        "[id][class*='section']",
      ].join(", ")
    )
  );
  if (sections.length === 0) return;

  const prepared = new WeakSet();
  sections.forEach((s) => {
    getChildren(s).forEach((el, i) => {
      if (prepared.has(el)) return;
      el.classList.add("reveal", `reveal-${chooseVariant(el, i)}`);
      prepared.add(el);
    });
  });

  // Optimized intersection observer
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const kids = getChildren(e.target);
        kids.forEach((el, i) => {
          if (el.classList.contains("is-visible")) return;
          const delay = Math.min(i * 30, 150); // Reduced delay for faster reveals
          el.style.transitionDelay = `${delay}ms`;
          requestAnimationFrame(() => el.classList.add("is-visible"));
        });
        io.unobserve(e.target);
      });
    },
    { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.1 } // Earlier trigger
  );

  sections.forEach((s) => io.observe(s));
})();
