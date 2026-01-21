import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz Configuration
 * Docs: https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Clube da Pesquisa",
    pageTitleSuffix: " · Conhecimento Técnico",
    enableSPA: true,
    enablePopovers: true,

    locale: "pt-BR",

    baseUrl: "https://ricardos2.github.io/site-ibracon",

    ignorePatterns: ["private", "templates", ".obsidian", "**/*.canvas", "**/*.excalidraw"],

    defaultDateType: "modified",

    analytics: {
      provider: "plausible",
      // domain: "site-ibracon.org"
    },

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Arial",
        body: "Arial",
        code: "IBM Plex Mono",
      },

      colors: {
        lightMode: {
          light: "#f4ece3",
          lightgray: "#e0d4c3",
          gray: "#b8a98f",
          darkgray: "#6b5e4f",
          dark: "#3e3528",
          secondary: "#c49e73",
          tertiary: "#b0936f",
          highlight: "rgba(196, 158, 115, 0.15)",
          textHighlight: "#fff3e088",
        },
        darkMode: {
          light: "#3e3528",
          lightgray: "#6b5e4f",
          gray: "#b8a98f",
          darkgray: "#e0d4c3",
          dark: "#f4ece3",
          secondary: "#c49e73",
          tertiary: "#b0936f",
          highlight: "rgba(196, 158, 115, 0.15)",
          textHighlight: "#fff3e088",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),

      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),

      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),

      Plugin.TableOfContents({ maxDepth: 4 }),

      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),

      Plugin.Description(),

      Plugin.Latex({ renderEngine: "katex" }),
    ],

    filters: [Plugin.RemoveDrafts()],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),

      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),

      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),

      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),

      Plugin.CustomOgImages(),
    ],
  },
}

export default config
