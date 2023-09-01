const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Fred_example",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "I do love to share my happiness and passion. Thank you all. 😎",
    email: "fred_example@yzpocket.com",
    linkedin: "inyong-kim-525545284",
    github: "yzpocket",
    instagram: "Fred_example",
  },
  projects: [
    {
      name: `Zero-G Revolution`,
      href: "https://store.steampowered.com/app/1504630/ZeroG_Revolution/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Rummage wise ideas from my pocket",
    description: "Welcome to blog.yzpocket!",
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
