import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://wiki.tcbmc.cc",

  author: {
    name: "LittleSheep Minecraft Team",
    url: "https://www.tcbmc.cc",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://i1.mcobj.com/imgb/u15prb/20240708_668bbc15a046d.webp",

  repo: "LMS-Work/Wiki-Docs",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar: {
    "/help/": [
      {
        text: "帮助中心",
        icon: "book",
        prefix: "/help/",
        children: [
          "",
          {
            text: "加入服务器",
            icon: "user-plus",
            prefix: "join/",
            collapsible: true,
            children: ["1", "2", "3", "4", "5", "6", "QA"],
          },  
          {
            text: "游戏指南",
            icon: "gamepad",
            prefix: "game/",
            collapsible: true,
            children: [
              {
                text: "服务器",
                icon: "server",
                prefix: "fwq/",
                collapsible: true,
                children: ["1", "2", "3"],
              },
              {
                text: "建筑",
                icon: "building",
                prefix: "jianzu/",
                collapsible: true,
                children: ["1", "2", "3", "4"],
              },
              {
                text: "玩法",
                icon: "dice",
                prefix: "pt/",
                collapsible: true,
                children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
              },
            ],
          },
          {
            text: "游戏设置",
            icon: "gear",
            prefix: "setting/",
            collapsible: true,
            children: ["1"],
          },
        ],
      },
    ],
    "/404.html": [],
  },

  // 页脚
  footer: '使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题',
  displayFooter: true,

  // 多语言配置
  metaLocales: {
    editLink: "有想法和建议? 在 GitHub 上编辑此页",
  },
  
  // 在这里配置主题提供的插件
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "LMS-Work/Wiki-Comment",
      repoId: "R_kgDOMTeI7Q",
      category: "Q&A",
      categoryId: "DIC_kwDOMTeI7c4CgpOB",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
