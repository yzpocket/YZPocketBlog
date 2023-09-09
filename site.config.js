const CONFIG = {
  // profile setting (required)
  profile: {
    name: "citeFred",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "I do love to share my happiness and passion. Thank you all. 😎",
    email: "citefred@yzpocket.com",
    linkedin: "inyong-kim-525545284",
    github: "yzpocket",
    instagram: "citeFred",
  },
  projects: [
    {
      name: `VR Advanture, STEAM - Zero-G Revolution by UE4`,
      href: "https://store.steampowered.com/app/1504630/ZeroG_Revolution/",
    },
    {
      name: `Education Content, Port safety training VR by UE4`,
      href: "https://www.youtube.com/watch?v=I2-QLdMu-08",
    },
    {
      name: `Mentoring, XR Ludaga - VR, AR SEOUL EXPO `,
      href: "https://www.youtube.com/watch?v=8OTrWyAKC50",
    },
    {
      name: `Botanical garden, Exhibits VR Exterior Perspective by UE4`,
      href: "https://www.youtube.com/watch?v=2ZW_R4Ujiqk",
    },
    {
      name: `Botanical garden, Exhibits VR Interior Perspective by UE4`,
      href: "https://www.youtube.com/watch?v=V9UnJyD4a9I",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Rummage wise ideas from my pocket",
    description: "Welcome to citeFred's Dev-blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://ohnyong.notion.site/8fa039d4c55549469fd3a28745ca46c6?v=85a4677e03504c1ba5bf51551c0d610e&pvs=4",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yzpocket/yzpocketblog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
