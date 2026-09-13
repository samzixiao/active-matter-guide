# Active Matter 新站候选筛选记录

日期：2026-09-14

## 结论

选择 `Active Matter`，新站 slug 为 `active-matter-guide`。

理由：SteamDB Upcoming 页面显示其临近 2026-09-15 发布，约 36,807 个关注、7 日新增约 1,740；官方站点和 Steam 社区在发布前仍有持续更新。现有 Vercel 项目列表没有 Active Matter，因此不会覆盖已有项目。

## 候选对比

| 候选 | 新鲜度/需求信号 | 可做长尾 | 已有 Vercel 重复 | 决定 |
|---|---|---|---|---|
| Active Matter | SteamDB 约 36,807 关注，7 日新增约 1,740；9 月 15 日发布 | 首局、撤离、装备、地图、Shelter、更新 | 未发现 | 采用 |
| Dimraeth | SteamDB 约 20,908 关注，7 日新增约 11,636；9 月 15 日 Early Access | 角色、职业、建造、合作 | 未发现 | 放弃：搜索结果已有多个同主题 Wiki，重复风险偏高 |
| Aniimo | SteamDB 约 63,469 关注；9 月 16 日发布 | 生物、地图、平台、首发 FAQ | 未发现 | 观察：品牌热度高，但已出现多个独立攻略站 |
| WARDOGS | SteamDB/SteamDB Curator 显示发布后高热 | 武器、地图、FOB、经济 | 未发现 | 放弃：已有多个成熟攻略与工具站 |
| The Guild 1 Remake: Europa 1410 | SteamDB 约 31,302 关注；9 月 17 日 Early Access | 职业、生产、政治、继承 | 未发现 | 观察：已有 Wiki 和官方系列内容，需更强差异化 |

## 已上线 Vercel 重复排除

已读取当前 Vercel 项目列表并核对首页标题/规范链接。已有项目包括：

- `image-tools-site-sigma.vercel.app`（明确排除，不修改）
- `game-sites.vercel.app`（Elderfield）
- `he-who-watches-hq.vercel.app`
- `rogue-blight-hq.vercel.app`
- `forsworn-hq.vercel.app`
- `minecraft-guide.vercel.app`
- 以及 Midjourney、Fall 2026、Google Pics、Cursor、Matter Pairing、iPhone/Android、Gmail、Zod 等非 Active Matter 站点

未发现 `active-matter-guide` 项目或 Active Matter 首页内容。

## 方法边界

Google 下拉关键词通过命令行建议接口采集。Google Trends 和 Similarweb 的数值接口未在本次 CLI 环境中获得可审计的公开结果，因此没有伪造 KD、搜索量或趋势指数；站点应在 GSC 有展示后再决定是否扩展或购买自定义域。
