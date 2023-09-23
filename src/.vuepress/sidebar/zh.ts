import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/use/": "structure",
  "/config/": "structure",
  "/guide/": "structure",
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
