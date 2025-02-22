import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: process.env.GITHUB_ACTIONS ? "/Wiki-Docs/" : "/",

  lang: "zh-CN",
  title: "LittleSheep Minecraft Wiki",
  description: "LittleSheep Minecraft Wiki",

  head: [
    // 字体导入相应链接
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/gh/znc15/harmonyfont/font.css",
        rel: "stylesheet",
        crossorigin: "anonymous"
      },
    ],
  ],

  theme,
});
