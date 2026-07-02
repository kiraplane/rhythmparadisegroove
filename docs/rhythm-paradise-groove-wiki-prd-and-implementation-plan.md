# Rhythm Paradise Groove Wiki PRD 与实现计划

目标站点：Rhythm Paradise Groove Wiki  
目标域名：www.rhythmparadisegroove.wiki  
主要关键词：`rhythm paradise groove`、`rhythm paradise groove wiki`  
别名关键词：`rhythm heaven groove`、`rhythm heaven groove guide`

## 1. 需求摘要

将当前模板改造成只服务 Rhythm Paradise Groove 的英文攻略站。站点以欧洲/PAL 标题 `Rhythm Paradise Groove` 为主，兼顾北美标题 `Rhythm Heaven Groove`。由于这是 Nintendo Switch 节奏小游戏合集，不是 Roblox/抽卡/养成游戏，首发不做 `codes`、`tier list`、`cards`、`reroll` 等模板页。

## 2. 游戏判断

Rhythm Paradise Groove 是 Nintendo Switch 节奏小游戏合集，核心是听节拍、识别 cue、按正确时机完成短关卡。官方 Nintendo UK 页面确认：

| 项目 | 结论 |
| --- | --- |
| 欧洲名 | Rhythm Paradise Groove |
| 北美名 | Rhythm Heaven Groove |
| 平台 | Nintendo Switch，可在 Nintendo Switch 2 游玩 |
| 发售日 | 2026-07-02 |
| 内容 | 80+ solo rhythm games，30+ multiplayer rhythm games |
| 模式 | Beatspell、Drum Lessons、Rhythm Toy Box、Cafe、Museum |
| 重要功能 | Free demo、demo save transfer、TV timing adjustment、accessibility |

## 3. 关键词矩阵

| keyword | intent | route | priority | status | evidence | notes |
| --- | --- | --- | --- | --- | --- | --- |
| rhythm paradise groove | head term | `/` | P0 | keep | 用户需求、Nintendo UK | 首页 H1 使用 Rhythm Paradise Groove Wiki |
| rhythm paradise groove wiki | wiki hub | `/` + `/guides` | P0 | keep | 用户需求、Google Suggest | 首页做强 hub，guide index 承接 |
| rhythm heaven groove | alias | `/guides/rhythm-heaven-vs-paradise-name` | P0 | keep | Nintendo of America、竞品 | 北美标题必须自然承接 |
| rhythm paradise groove guide | guide index | `/guides` | P0 | keep | 普通 SERP / YouTube | 聚合所有攻略页 |
| rhythm paradise groove perfect | Perfect intent | `/guides/perfect-solo-minigames` | P0 | keep | Gamereactor Perfect guide | 首发核心攻略 |
| rhythm paradise groove minigames | minigame list | `/minigames` | P0 | keep | Nintendo 80+ solo games、竞品 | 不先做 80 个薄页 |
| rhythm paradise groove demo | demo | `/demo` + guide | P0 | keep | Nintendo UK、Suggest | demo + save transfer |
| rhythm paradise groove calibration | setup | `/setup` + guide | P0 | keep | 官方 TV timing、review/YouTube | TV lag 是真实玩家问题 |
| rhythm paradise groove beatspell | mode | `/guides/beatspell-guide` | P0 | keep | 官方 mode、Gamereactor、YouTube | 独立 mode 页面 |
| rhythm paradise groove walkthrough | walkthrough | `/walkthrough` + guide | P1 | keep | YouTube walkthrough demand | 首发 route-first |
| rhythm paradise groove multiplayer | local party | `/guides/multiplayer-party-guide` | P1 | keep | Nintendo 30+ multiplayer | 重点讲设置公平性 |
| rhythm paradise groove release date | release | `/release` | P1 | keep | Nintendo UK | 发售/平台/容量/digital |
| rhythm paradise groove switch 2 | platform | `/release` | P1 | keep | Nintendo UK | 不拆薄页 |
| rhythm paradise groove physical | buying | `/release` | P2 | watch | Suggest | 未做未确认购买页 |
| rhythm paradise groove codes | wrong template intent | redirect/none | P2 | ignore | 游戏类型不支持 | 不做 fake codes |
| rhythm paradise groove tier list | wrong template intent | redirect/none | P2 | ignore | 游戏类型不支持 | 不做 fake tier list |

## 4. 竞品与参考

| Source | URL | 可借鉴 | 改进方向 |
| --- | --- | --- | --- |
| Nintendo UK official | https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Rhythm-Paradise-Groove-2786371.html | 官方事实、视觉风格、demo、modes | 所有事实以官方为基线 |
| rhythmheavengroove.com | https://rhythmheavengroove.com/ | 北美词覆盖、release/demo/platform/modes 基础页 | 我们用欧洲主词，并做更深 Perfect/setup/Beatspell |
| Gamereactor Perfect guide | https://www.gamereactor.eu/rhythm-paradise-groove-guide-how-to-perfect-all-30-base-solo-mini-games-1741843/ | Perfect 搜索意图真实 | 不复制正文，做自己的 cue/practice 逻辑 |
| Gamereactor Beatspell guide | https://www.gamereactor.eu/rhythm-paradise-groove-guide-what-is-beatspell-and-tips-and-tricks-to-conquer-it-1742433/ | Beatspell 是独立高意图页 | 用 Nintendo/YouTube 交叉 |
| Kingshot guide project | /Users/he/Documents/AI/vibe coding/kingshot/kingshotguide | YouTube 嵌入和长文 guide 结构 | 本站采用 metadata-driven video/source 方式 |

## 5. 首发页面

| route | 页面 |
| --- | --- |
| `/` | homepage hub |
| `/guides` | guide index |
| `/minigames` | minigames hub |
| `/walkthrough` | walkthrough hub |
| `/demo` | demo hub |
| `/setup` | timing setup hub |
| `/modes` | modes hub |
| `/release` | release / Switch info |
| `/links` | official links |
| `/disclaimer` | disclaimer |
| `/guides/beginner-guide` | beginner guide |
| `/guides/perfect-solo-minigames` | Perfect solo minigames |
| `/guides/tv-calibration-input-lag` | TV calibration / input lag |
| `/guides/demo-save-transfer` | demo / save transfer |
| `/guides/beatspell-guide` | Beatspell guide |
| `/guides/multiplayer-party-guide` | multiplayer / party |
| `/guides/full-walkthrough-route` | walkthrough route |
| `/guides/rhythm-heaven-vs-paradise-name` | name / region alias |

## 6. 实现范围

- 新数据层：`src/data/rhythmparadisegroove/`
- 新组件层：`src/components/rhythmparadisegroove/`
- 新 route group：`src/app/[locale]/(rhythmparadisegroove)/`
- 删除旧 `codes/cards/packs/mutations/download/discord/updates` 页面
- 更新 navbar/footer/messages/routes/sitemap/manifest/canonical/middleware
- 生成新本地视觉资产：`public/rhythmparadisegroove/hero.png`、`og-image.png`、`icon.png`、站点 favicon/logo
- `wrangler.jsonc` worker 名称设为 `rhythmparadisegroove`，自定义域名为 `rhythmparadisegroove.wiki`
- 外部发布检查发现 `kiraplane/feedthepit` GitHub 仓库和 Cloudflare `feedthepit` Worker 已被 Feed The Pit 站点使用，因此本项目采用不覆盖旧站的 `rhythmparadisegroove` 仓库/Worker 命名。

## 7. 后续扩展

首发不要强行生成 80+ 薄小游戏页面。上线后根据 GSC：

- P0：有展现的具体 minigame Perfect / walkthrough 单页
- P1：Beatspell deeper guide、Drum Lessons、Toy Box、Cafe/Museum
- P1：Spanish/French/Portuguese/Korean 本地化入口
- P2：购买/physical/preorder 相关页，前提是有可靠来源与搜索量
