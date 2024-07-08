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
  sidebar,

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
