import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [
    [
      "link",
      {
        type: "text/css",
        rel: "stylesheet",
        href: "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
        media: "all"
      }
    ],
    [
      "link",
      {
        href: "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "https://assest.cdn.littlesheep.cc/misans@3.1.1/lib/misans-400-normal.min.css",
        rel: "stylesheet",
      },
    ],
    // [
    //   "script",
    //   {
    //     type: "text/javascript",
    //     charset: "UTF-8",
    //     src: "/global.js",
    //     async: true,
    //   },
    // ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "LMS Wiki",
      description: "LMS服务器的使用与命令文档",
    },
    "/en/": {
      lang: "zh-CN",
      title: "LMS Wiki",
      description: "LMS服务器的使用与命令文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
