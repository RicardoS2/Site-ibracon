import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz Configuration
 * Docs: https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Instituto Brasileiro de Concreto",
    pageTitleSuffix: " · Conhecimento Técnico",
    enableSPA: true,
    enablePopovers: true,

    locale: "pt-BR",

    baseUrl: "ricardos2.github.io/Site-ibracon",

    ignorePatterns: ["private", "templates", ".obsidian", "**/*.canvas", "**/*.excalidraw"],

    defaultDateType: "modified",

    analytics: {
      provider: "plausible",
      // Só funciona se você realmente usar Plausible
      // domain: "site-ibracon.org"
    },

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },

      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
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

      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),

      Plugin.TableOfContents({
        maxDepth: 4,
      }),

      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),

      Plugin.Description(),

      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],

    filters: [
      Plugin.RemoveDrafts(), // frontmatter: draft: true
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),

      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),

      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),

      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),

      // Ativar só se quiser OG images (pesado)
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
