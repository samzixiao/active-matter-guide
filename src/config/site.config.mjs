// 站点配置 —— 改这个文件即可换游戏、换站名、换主题色
// 不需要懂代码：把下面的字符串改成你自己的内容就行

export const siteConfig = {
  // 站点基础信息
  siteName: 'Active Matter Field Guide',
  siteTagline: 'A practical raid and extraction guide for the fractured multiverse.',
  siteDescription:
    'Active Matter Field Guide covers first raids, extraction decisions, starter loadouts, shelter upgrades, maps, and patch changes from official sources.',

  // 当前在建的游戏（用于内容生成、SEO、Schema）
  gameName: 'Active Matter',
  gameShortName: 'Active Matter',
  gameGenre: 'Extraction Shooter',
  gamePlatforms: ['Steam', 'PlayStation 5', 'Xbox Series X|S'],
  gameDeveloper: 'Matter Team',
  gameReleaseDate: '2026-09-15',
  gameSteamUrl: 'https://store.steampowered.com/app/2887580/Active_Matter/',

  // 域名（部署前改成真实域名）
  domain: 'active-matter-guide.vercel.app',
  canonicalBase: 'https://active-matter-guide.vercel.app',

  // 主题色（HSL），用于自动配色。每换一个游戏改这两个值就行
  theme: {
    hue: 210,        // 主色色相：紫=268、蓝=210、青=180、绿=140、橙=30
    accentHue: 174,  // 强调色色相
  },

  // 导航
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Tier List', href: '/tier-list' },
    { label: 'About', href: '/about' },
  ],

  // Adsterra 广告位（先去 Adsterra 后台拿 key，再填到下面；上线初期可以留空，广告位是空 div）
  ads: {
    enabled: false,
    headerBannerKey: '',
    inContentBannerKey: '',
    sidebarBannerKey: '',
    footerBannerKey: '',
  },

  // 站点底部
  footer: {
    copyrightYear: 2026,
    disclaimer:
      'Active Matter Field Guide is an unofficial fan site. All trademarks and game content belong to their respective owners.',
  },

  // 社交/外链（可选）
  social: {
    twitter: '',
    youtube: '',
    discord: '',
  },
};

// 导出工具函数：根据 hue 生成配色
export function buildPalette(hue, accentHue) {
  return {
    bg: `hsl(${hue} 35% 8%)`,
    bgElev: `hsl(${hue} 30% 12%)`,
    bgCard: `hsl(${hue} 28% 14%)`,
    border: `hsl(${hue} 25% 22%)`,
    text: `hsl(${hue} 20% 96%)`,
    textMuted: `hsl(${hue} 18% 70%)`,
    primary: `hsl(${accentHue} 80% 62%)`,
    primarySoft: `hsl(${accentHue} 70% 22%)`,
    accent: `hsl(${accentHue} 90% 70%)`,
    gradient: `linear-gradient(135deg, hsl(${hue} 55% 18%) 0%, hsl(${accentHue} 60% 32%) 100%)`,
    glow: `0 0 40px hsl(${accentHue} 80% 50% / 0.35)`,
  };
}
