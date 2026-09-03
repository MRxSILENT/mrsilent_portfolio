const STORAGE_KEY = "social-tree-profile-v1";
const THEME_KEY = "social-tree-theme-v1";

const defaultData = {
  name: "Silent Gamer",
  handle: "@silentgamer",
  bio: "Creator • Minecraft • Technology\\nBuilding things that make the internet more fun.",
  email: "hello@example.com",
  avatar: "SG",
  featured: {
    icon: "▶",
    eyebrow: "FEATURED",
    title: "Watch my latest video",
    description: "New builds, tutorials and behind-the-scenes content.",
    url: "https://youtube.com/"
  },
  socials: [
    { icon: "github", label: "GitHub", url: "https://github.com/", short: "GH" },
    { icon: "youtube", label: "YouTube", url: "https://youtube.com/", short: "YT" },
    { icon: "discord", label: "Discord", url: "https://discord.com/", short: "DC" },
    { icon: "twitter", label: "X / Twitter", url: "https://x.com/", short: "X" },
    { icon: "instagram", label: "Instagram", url: "https://instagram.com/", short: "IG" }
  ],
  links: [
    { icon: "▶", title: "YouTube Channel", subtitle: "Videos • Tutorials • Shorts", url: "https://youtube.com/" },
    { icon: "✦", title: "My Minecraft Server", subtitle: "Join the community", url: "https://example.com/" },
    { icon: "◈", title: "Download Area", subtitle: "Mods • Packs • Tools", url: "https://example.com/" },
    { icon: "◎", title: "Discord Community", subtitle: "Chat with the community", url: "https://discord.com/" },
    { icon: "◒", title: "Latest Project", subtitle: "See what I'm building", url: "https://example.com/" },
    { icon: "↗", title: "My Website", subtitle: "Everything in one place", url: "https://example.com/" },
    { icon: "✉", title: "Contact Me", subtitle: "Business & collaboration", url: "mailto:hello@example.com" }
  ]
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...clone(defaultData), ...JSON.parse(raw) } : clone(defaultData);
  } catch {
    return clone(defaultData);
  }
}

let data = loadData();

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const socialSvg = {
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .6a11.4 11.4 0 0 0-3.61 22.21c.57.1.78-.25.78-.55v-2.16c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.26-5.19-5.62 0-1.24.45-2.25 1.18-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.92 10.92 0 0 1 5.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.81 1.18 3.05 0 4.37-2.66 5.32-5.2 5.61.41.36.78 1.08.78 2.18v3.23c0 .3.21.65.79.54A11.4 11.4 0 0 0 12 .6Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3.01 3.01 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.01 3.01 0 0 0 2.12-2.13A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.55 15.58V8.42L15.9 12l-6.35 3.58Z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.54 5.26A17.8 17.8 0 0 0 15.2 3.9l-.53 1.08a16.3 16.3 0 0 0-5.34 0L8.8 3.9a17.9 17.9 0 0 0-4.34 1.36C1.7 9.4 1 13.44 1.35 17.42a17.92 17.92 0 0 0 5.34 2.7l1.31-1.78c-.72-.27-1.4-.6-2.04-.98l.5-.39c3.93 1.83 8.14 1.83 12.02 0l.51.39c-.64.38-1.32.71-2.04.98l1.31 1.78a17.92 17.92 0 0 0 5.34-2.7c.4-4.6-.68-8.6-4.06-12.16ZM8.8 15.1c-1.2 0-2.19-1.1-2.19-2.45s.97-2.45 2.19-2.45 2.19 1.1 2.19 2.45S10.01 15.1 8.8 15.1Zm6.4 0c-1.2 0-2.19-1.1-2.19-2.45s.97-2.45 2.19-2.45 2.19 1.1 2.19 2.45-1 2.45-2.19 2.45Z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.24 2H21.7l-7.55 8.64L23 22h-6.83l-5.35-6.99L4.7 22H1.23l7.98-9.13L1 2h7l4.84 6.4L18.24 2Zm-1.2 17.84h1.9L7.05 4.05H5.01l12.03 15.79Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 2h9.8A5.1 5.1 0 0 1 22 7.1v9.8a5.1 5.1 0 0 1-5.1 5.1H7.1A5.1 5.1 0 0 1 2 16.9V7.1A5.1 5.1 0 0 1 7.1 2Zm-.2 2A2.9 2.9 0 0 0 4 6.9v10.2A2.9 2.9 0 0 0 6.9 20h10.2a2.9 2.9 0 0 0 2.9-2.9V6.9A2.9 2.9 0 0 0 17.1 4H6.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.4-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>`
};

function safeUrl(url) {
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.protocol === "http:" || parsed.protocol === "https:" || parsed.protocol === "mailto:") return parsed.href;
  } catch {}
  return "#";
}

function render() {
  $("#displayName").textContent = data.name;
  $("#displayHandle").textContent = data.handle || "";
  $("#displayBio").innerHTML = String(data.bio || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  $("#avatar").textContent = (data.avatar || data.name.slice(0,2)).toUpperCase();
  $("#footerName").textContent = data.name;
  $("#year").textContent = new Date().getFullYear();
  $("#contactBtn").href = `mailto:${encodeURIComponent(data.email || "hello@example.com")}`;
  $("#linkCount").textContent = data.links.length;

  $("#socialRow").innerHTML = data.socials.map(s => `
    <a class="social-link" href="${safeUrl(s.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(s.label)}" title="${escapeHtml(s.label)}">
      ${socialSvg[s.icon] || `<span>${escapeHtml(s.short || "↗")}</span>`}
    </a>
  `).join("");

  $("#linksList").innerHTML = data.links.map((link, i) => `
    <a class="link-card" href="${safeUrl(link.url)}" target="_blank" rel="noopener" data-index="${i}">
      <div class="link-icon">${escapeHtml(link.icon || "↗")}</div>
      <div class="link-copy">
        <strong>${escapeHtml(link.title)}</strong>
        <span>${escapeHtml(link.subtitle || "")}</span>
      </div>
      <div class="link-arrow">↗</div>
    </a>
  `).join("");

  $("#featuredIcon").textContent = data.featured.icon || "▶";
  $("#featuredEyebrow").textContent = data.featured.eyebrow || "FEATURED";
  $("#featuredTitle").textContent = data.featured.title;
  $("#featuredDescription").textContent = data.featured.description;
  $("#featuredLink").href = safeUrl(data.featured.url);

  attachLinkAnalytics();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[ch]));
}

function attachLinkAnalytics() {
  $$(".link-card").forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      data.links[index].clicks = (data.links[index].clicks || 0) + 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
  });
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2100);
}

async function shareProfile() {
  const url = window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title: `${data.name} — Social Tree`, text: data.bio.replace(/\n/g, " "), url });
      return;
    } catch {}
  }
  await navigator.clipboard?.writeText(url);
  toast("Profile link copied");
}

async function copyProfileUrl() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast("Profile link copied");
  } catch {
    toast("Copy is unavailable in this browser");
  }
}


$("#themeBtn").addEventListener("click", () => {
  const isLight = document.documentElement.classList.toggle("light");
  localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  $("#themeIcon").textContent = isLight ? "☀" : "☾";
});

if (localStorage.getItem(THEME_KEY) === "light") {
  document.documentElement.classList.add("light");
  $("#themeIcon").textContent = "☀";
}

$("#shareBtn").addEventListener("click", shareProfile);
$("#copyBtn").addEventListener("click", copyProfileUrl);

render();
