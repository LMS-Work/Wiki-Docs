import { defineUserConfig } from "vuepress";
import baseConfig from "./config.js";

export default defineUserConfig({
  ...baseConfig,
  base: "/Wiki-Docs/",
}); 