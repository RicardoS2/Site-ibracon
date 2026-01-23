import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz v4 Configuration — links, assets e callouts OK
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Clube da Pesquisa",
    pageTitleSuffix: " · Conhecimento Técnico",

    enableSPA: true,
    enablePopovers: true,

    // ⚠️ obrigatório no v4
    analytics: {
      provider: "plausible",
    },

    locale: "pt-BR",

    // 🔑 GitHub Pages (repo)
    baseUrl: "RicardoS2.github.io/Site-ibracon",
    // 🔥 nada privado
    ignorePatterns: [],

    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },

      // 🔑 obrigatório no v4
      colors: {
        lightMode: {
          light: "#fafafa",
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

      // 🔑 callouts, embeds, canvas, kanban
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: true,
      }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),

      Plugin.TableOfContents({
        maxDepth: 4,
      }),

      // 🔥 ESSENCIAL p/ PDFs e assets em subpath
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
      }),

      Plugin.Description(),

      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],

    filters: [Plugin.RemoveDrafts()],

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

      // 🖼️ imagens, PDFs, anexos
      Plugin.Assets(),

      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
