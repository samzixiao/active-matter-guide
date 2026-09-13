# Active Matter Field Guide — Static Site

Active Matter launch guide site. Based on **Astro** (Vite-powered), with zero runtime JS on the content pages.

> 这是一个"换游戏就上站"的模板：改 `src/config/site.config.mjs` 一个文件，整个站的站名、配色、SEO、游戏信息全部跟着变。

---

## 1. 本地预览

需要 Node.js 18+。

```bash
cd D:\007\game-guide-site
npm install
npm run dev      # http://localhost:4321
```

构建生产版本：

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览 dist
```

---

## 2. 换游戏：只改一个文件

打开 `src/config/site.config.mjs`，按字段改：

| 字段 | 改什么 | 示例 |
|---|---|---|
| `siteName` | 站点名（品牌词） | `Hollow Knight Silksong Guide` |
| `siteTagline` | 一句话副标题 | `Your daily companion through Pharloom.` |
| `siteDescription` | 首页 meta description | 写 140~160 字符、含主关键词 |
| `gameName` | 游戏官方名 | `Hollow Knight: Silksong` |
| `gameShortName` | 缩写（≤6 字符） | `Silksong` |
| `gameGenre` | 类型 | `Metroidvania` |
| `gameDeveloper` | 开发商 | `Team Cherry` |
| `gameSteamUrl` | Steam 链接 | `https://store.steampowered.com/app/...` |
| `domain` / `canonicalBase` | 你的域名 | `silksongguidehub.com` |
| `theme.hue` | 主色色相（HSL） | 蓝 `210` / 紫 `268` / 橙 `30` / 绿 `140` |
| `theme.accentHue` | 强调色色相 | `340` 等 |

改完保存，刷新浏览器，整个站的配色、Logo 字母、SEO、JSON-LD 全部跟着变。

---

## 3. 加 / 改攻略文章

所有文章以 **Markdown** 文件存在 `src/content/guides/`。

文件命名：`kebab-case.md`

Frontmatter 模板：

```markdown
---
title: "完整的文章标题（用于 H1 和 SEO）"
description: "150~160 字符描述，用于 meta 和卡片"
category: "Beginner"        # 或 Tier List / Boss / Farming / Co-op
date: "2026-08-25"          # ISO 日期
readingMinutes: 7
keywords: ["主关键词 1", "主关键词 2"]
---

正文用标准 Markdown：## / ### / - / **加粗** / `code` / > 引用 / 表格
```

**加完一篇只需**：
1. 在 `src/content/guides/` 新建 `.md` 文件
2. **同时** 在以下两个文件里 import 它（参考现有 5 篇的写法）：
   - `src/pages/index.astro`
   - `src/pages/guides/index.astro`
   - `src/pages/guides/[slug].astro`

> 这三个文件用最简单的方式（`?raw` import）读取 Markdown，零依赖、可读性高。
> 如果文章数量超过 30 篇，建议迁移到 Astro Content Collections（更优雅，但需要小重构）。

---

## 4. SEO / 搜索引擎收录

页面已自带：
- `<title>` / `<meta description>` / `<link rel="canonical">`
- Open Graph + Twitter Card
- JSON-LD：`WebSite`、`VideoGame`、`Article` 三种 schema

上线后必做：
1. 把 `siteConfig.canonicalBase` 改成真实域名
2. 部署后到 [Google Search Console](https://search.google.com/search-console) 提交 sitemap
3. 建议加 sitemap：在 `astro.config.mjs` 里装 `@astrojs/sitemap`，加 `integrations: [sitemap()]`
4. 建议加 robots.txt：在 `public/robots.txt` 放 `Sitemap: https://yourdomain.com/sitemap-index.xml`

---

## 5. 接 Adsterra 广告

模板已经埋好 4 个广告位（Header / InContent / Sidebar / Footer）。

1. 注册 [Adsterra](https://www.adsterra.com/)，进入后台 → **Display Ads → Create Ad**
2. 选 **Banner** 类型，拿到每个广告位的 `data-key`
3. 改 `src/config/site.config.mjs`：

```js
ads: {
  enabled: true,
  headerBannerKey: 'YOUR_KEY_HERE',
  inContentBannerKey: 'YOUR_KEY_HERE',
  sidebarBannerKey: '',
  footerBannerKey: 'YOUR_KEY_HERE',
},
```

4. 把 `src/components/AdSlot.astro` 里的占位 `<ins>` 替换为 Adsterra 提供的 script 代码（通常是一段 `<script async src="...">`）

> ⚠️ 珂米的提醒：上线后**等 1-2 天**再接广告，避免影响 Google 排名。

---

## 6. 部署

`npm run build` 输出在 `dist/`，**纯静态文件**，可部署到：

- **Cloudflare Pages**（推荐，国内可访问，CDN 全球，免费）
- **Netlify**
- **Vercel**
- **GitHub Pages**（把 dist 推到 gh-pages 分支）

### Cloudflare Pages 一键部署

1. 把 `game-guide-site` 推到一个新的 GitHub 仓库
2. Cloudflare Dashboard → Pages → Connect to Git → 选仓库
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: 20（Pages 默认就是 18+，保险起见在 `package.json` 加 `"engines": {"node": ">=20"}`）
6. 添加自定义域名 → 等 DNS 生效

---

## 7. 目录结构

```
game-guide-site/
├── astro.config.mjs          # Astro 配置
├── package.json              # 依赖
├── tsconfig.json
├── public/                   # 静态资源（favicon 可放这里，但模板已经用 data URI）
├── src/
│   ├── config/
│   │   └── site.config.mjs   # ⭐ 站点所有可变信息（换游戏改这里）
│   ├── content/
│   │   └── guides/           # 所有攻略 markdown
│   ├── layouts/
│   │   └── BaseLayout.astro  # 全局布局（head + Header + Footer）
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── GuideCard.astro
│   │   └── AdSlot.astro      # 广告位组件
│   ├── pages/
│   │   ├── index.astro       # 首页
│   │   ├── about.astro
│   │   ├── tier-list.astro
│   │   ├── privacy.astro
│   │   ├── contact.astro
│   │   └── guides/
│   │       ├── index.astro   # 攻略列表
│   │       └── [slug].astro  # 攻略详情（动态路由）
│   └── styles/
│       └── global.css        # 全部样式
└── README.md
```

---

## 8. 设计风格

- **暗色游戏风**：每换游戏只改 `theme.hue`，整站配色自动重新计算
- **无 JavaScript 依赖**：Astro 默认零运行时，页面像静态 HTML 一样快
- **玻璃态 Header + 渐变 Hero**：现代游戏媒体的主流风格
- **卡片网格**：响应式 `auto-fill minmax(280px, 1fr)`，移动端自动单列
- **TOC-ready**：详情页 `prose` 类，后续可加目录侧栏

---

## 9. 你接下来要做的（珂米式节奏）

1. ✅ 今天：本模板已就绪，`npm install && npm run dev` 跑起来
2. **Day 2**：去 SteamDB 选 3 个候选游戏，把其中一个改成你的目标
3. **Day 3**：买一个便宜域名（Cloudflare Registrar）
4. **Day 4**：把 `site.config.mjs` 改成你的游戏，写 5 篇真实攻略
5. **Day 5**：推 GitHub → 部署到 Cloudflare Pages
6. **Day 6**：Google Search Console 提交
7. **Day 7**：等 1-2 天后接 Adsterra
