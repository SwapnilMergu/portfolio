(() => {
  const NAME = "SWAPNIL SHARAD MERGU";
  const html = document.documentElement;
  const loader = document.getElementById("loader");
  const loaderName = document.getElementById("loader-name");
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("nav-links");
  const burger = document.getElementById("nav-burger");
  const themeToggle = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("year");

  /* ---------- Loader ---------- */
  if (loaderName) {
    [...NAME].forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.animationDelay = `${i * 0.04}s`;
      loaderName.appendChild(span);
    });
  }

  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("is-done"), 2200);
  });

  /* ---------- Theme ---------- */
  const stored = localStorage.getItem("theme");
  if (stored === "light") {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }

  themeToggle?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* ---------- Nav ---------- */
  const closeMenu = () => {
    navLinks?.classList.remove("is-open");
    burger?.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  };

  burger?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const onScroll = () => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Active section highlight */
  const sections = [...document.querySelectorAll("main section[id]")];
  const linkMap = new Map(
    [...(navLinks?.querySelectorAll("a") || [])].map((a) => [
      a.getAttribute("href")?.slice(1),
      a,
    ])
  );

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        linkMap.forEach((el, key) => {
          el.classList.toggle("is-active", key === id);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- Experience tabs ---------- */
  const tabs = document.querySelectorAll(".exp-tab");
  const panels = document.querySelectorAll(".exp-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = tab.dataset.exp;
      tabs.forEach((t) => {
        const active = t.dataset.exp === idx;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach((panel) => {
        const active = panel.dataset.panel === idx;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Stat counters ---------- */
  const counters = document.querySelectorAll(".stat-value[data-count]");
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => countObserver.observe(el));

  /* ---------- Footer year ---------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
