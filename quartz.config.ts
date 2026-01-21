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

    // Base URL correto para GitHub Pages do repo Site-ibracon
    baseUrl: "https://ricardos2.github.io/Site-ibracon",

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
        // Paleta Capuccino
        lightMode: {
          light: "#f6f0eb", // bege claro
          lightgray: "#e0d6c3", // bege médio
          gray: "#cbb8a9", // marrom suave
          darkgray: "#9a8174", // marrom médio
          dark: "#5c4431", // marrom escuro
          secondary: "#8b6d5c", // marrom acobreado
          tertiary: "#d9c4b0", // creme
          highlight: "rgba(200, 170, 140, 0.2)",
          textHighlight: "#fff8dc88",
        },
        darkMode: {
          light: "#2c1f1a",
          lightgray: "#4b3a34",
          gray: "#6b5044",
          darkgray: "#8c705d",
          dark: "#a68970",
          secondary: "#c1a183",
          tertiary: "#d9c4b0",
          highlight: "rgba(200, 170, 140, 0.2)",
          textHighlight: "#f5e4d088",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
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

    filters: [
      Plugin.RemoveDrafts(), // frontmatter: draft: true
    ],

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
      Plugin.CustomOgImages(), // desative se não quiser OG images pesados
    ],
  },
}

export default config
