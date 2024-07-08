import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LittleSheep Minecraft Wiki",
  description: "LittleSheep Minecraft Wiki",

  head: [
    // 字体导入相应链接
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Bold.min.css",
        rel: "stylesheet",
        crossorigin: "anonymous"
      },
    ],
  ],

  theme,
});
