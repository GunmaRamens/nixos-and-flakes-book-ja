import { createRequire } from "module"
import { generateSitemap as sitemap } from "sitemap-ts"
import { PageData, defineConfig } from "vitepress"

const require = createRequire(import.meta.url)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // remove trailing `.html`
  // https://vitepress.dev/guide/routing#generating-clean-url
  cleanUrls: true,
  // Whether to get the last updated timestamp for each page using Git.
  lastUpdated: true,

  // SEO Improvement - sitemap.xml & robots.txt
  buildEnd: async ({ outDir }) => {
    sitemap({
      hostname: "https://nixos-and-flakes.thiscute.world/",
      outDir: outDir,
      generateRobotsTxt: true,
    })
  },

  // SEO Improvement - JSON-LD
  transformPageData(pageData) {
    return {
      frontmatter: {
        ...pageData.frontmatter,
        head: [["script", { type: "application/ld+json" }, getJSONLD(pageData)]],
      },
    }
  },

  head: [
    ["link", { rel: "icon", href: "/favicon-32x32.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:site_name", content: "NixOS & Flakes Book" }],
    [
      "meta",
      {
        name: "og:image",
        content: "https://nixos-and-flakes.thiscute.world/nixos-and-flakes-book.webp",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://nixos-and-flakes.thiscute.world/nixos-and-flakes-book.webp",
      },
    ],

    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-N90909Y4XL",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N90909Y4XL');`,
    ],
  ],

  // markdown options
  markdown: {
    lineNumbers: true,

    config: (md) => {
      // add support for footnote
      md.use(require("markdown-it-footnote"))
      md.use(require("@searking/markdown-it-cjk-breaks"))
    },
  },

  themeConfig: {
    footer: {
      message:
        'Licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank">CC BY-SA 4.0</a>',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/ryan4yin" target="_blank">Ryan Yin</a>',
    },

    search: {
      provider: "local",
      // for debugging
      // options: {
      //   /**
      //    * @param {string} src
      //    * @param {import('vitepress').MarkdownEnv} env
      //    * @param {import('markdown-it')} md
      //    */
      //   _render(src, env, md) {
      //     console.log("start...")
      //     console.log("src", src)
      //     let out = md.render(src, env)
      //     console.log("success...")
      //     return out
      //   },
      // },

      // provider: 'algolia',
      // options: {
      //   appId: '747LJ10EI7',
      //   apiKey: '658db5f2bf056f83458cacf5dd58ec80',
      //   indexName: 'nixos-and-flakes-book'
      // }
    },

    editLink: {
      pattern: "https://github.com/ryan4yin/nixos-and-flakes-book/edit/main/docs/:path",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ryan4yin/nixos-and-flakes-book",
      },
    ],
  },

  locales: {
    root: themeConfigEnglish(),
    zh: themeConfigChinese(),
    ja: themeConfigJapanese(),
  },
})

function themeConfigEnglish() {
  return {
    label: "English",
    lang: "en",
    link: "/",
    title: "NixOS & Flakes Book",
    description: "An unofficial and opinionated book for beginners",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Preface", link: "/preface.md" },
        { text: "Get Started", link: "/introduction/index.md" },
        { text: "Best Practices", link: "/best-practices/intro.md" },
      ],

      sidebar: [
        {
          text: "Preface",
          items: [{ text: "Preface", link: "/preface.md" }],
        },
        {
          text: "Get Started",
          items: [
            { text: "Introduction", link: "/introduction/index.md" },
            {
              text: "Advantages and Disadvantages",
              link: "/introduction/advantages-and-disadvantages.md",
            },
            {
              text: "Installation",
              link: "/introduction/installation.md",
            },
          ],
        },
        {
          text: "The Nix Language",
          items: [{ text: "Basics", link: "/the-nix-language/index.md" }],
        },
        {
          text: "NixOS with Flakes",
          items: [
            {
              text: "Get Started with NixOS",
              link: "/nixos-with-flakes/get-started-with-nixos.md",
            },
            {
              text: "Introduction to Flakes",
              link: "/nixos-with-flakes/introduction-to-flakes.md",
            },
            {
              text: "NixOS with Flakes Enabled",
              link: "/nixos-with-flakes/nixos-with-flakes-enabled.md",
            },
            {
              text: "NixOS's flake.nix Explained",
              link: "/nixos-with-flakes/nixos-flake-configuration-explained.md",
            },
            {
              text: "The combination ability of Flakes and Nixpkgs module system",
              link: "/nixos-with-flakes/nixos-flake-and-module-system.md",
            },
            {
              text: "Getting Started with Home Manager",
              link: "/nixos-with-flakes/start-using-home-manager.md",
            },
            {
              text: "Modularize the Configuration",
              link: "/nixos-with-flakes/modularize-the-configuration.md",
            },
            {
              text: "Updating the System",
              link: "/nixos-with-flakes/update-the-system.md",
            },
            {
              text: "Downgrading or Upgrading Packages",
              link: "/nixos-with-flakes/downgrade-or-upgrade-packages.md",
            },
            {
              text: "Other useful Tips",
              link: "/nixos-with-flakes/other-useful-tips.md",
            },
          ],
        },
        {
          text: "Nixpkgs's Advanced Usage",
          items: [
            { text: "Introduction", link: "/nixpkgs/intro.md" },
            { text: "callPackage", link: "/nixpkgs/callpackage.md" },
            { text: "Overriding", link: "/nixpkgs/overriding.md" },
            { text: "Overlays", link: "/nixpkgs/overlays.md" },
            {
              text: "Multiple Nixpkgs Instances",
              link: "/nixpkgs/multiple-nixpkgs.md",
            },
          ],
        },
        {
          text: "Nix Store & Binary Cache",
          items: [
            { text: "Introduction", link: "/nix-store/intro.md" },
            {
              text: "Add Binary Cache Servers",
              link: "/nix-store/add-binary-cache-servers.md",
            },
            {
              text: "Host Your Own Binary Cache Server",
              link: "/nix-store/host-your-own-binary-cache-server.md",
            },
          ],
        },
        {
          text: "Best Practices",
          items: [
            { text: "Introduction", link: "/best-practices/intro.md" },
            {
              text: "Run downloaded binaries on NixOS",
              link: "/best-practices/run-downloaded-binaries-on-nixos.md",
            },
            {
              text: "Simplify NixOS-related Commands",
              link: "/best-practices/simplify-nixos-related-commands.md",
            },
            {
              text: "Accelerating Dotfiles Debugging",
              link: "/best-practices/accelerating-dotfiles-debugging.md",
            },
            {
              text: "Custom NIX_PATH and Flake Registry",
              link: "/best-practices/nix-path-and-flake-registry.md",
            },
            {
              text: "Remote Deployment",
              link: "/best-practices/remote-deployment.md",
            },
            {
              text: "Debugging Derivations and Nix Expressions",
              link: "/best-practices/debugging.md",
            },
          ],
        },

        {
          text: "Other Usage of Flakes",
          items: [
            { text: "Introduction", link: "/other-usage-of-flakes/intro.md" },
            {
              text: "Flake Inputs",
              link: "/other-usage-of-flakes/inputs.md",
            },
            {
              text: "Flake Outputs",
              link: "/other-usage-of-flakes/outputs.md",
            },
            {
              text: "The New CLI",
              link: "/other-usage-of-flakes/the-new-cli.md",
            },
            {
              text: "Module System & Custom Options",
              link: "/other-usage-of-flakes/module-system.md",
            },
            {
              text: "[WIP]Testing",
              link: "/other-usage-of-flakes/testing.md",
            },
          ],
        },
        {
          text: "Dev Environments on NixOS",
          items: [
            {
              text: "nix shell, nix develop & pkgs.runCommand",
              link: "/development/intro.md",
            },
            {
              text: "Dev Environments",
              link: "/development/dev-environments.md",
            },
            {
              text: "[WIP]Packaging 101",
              link: "/development/packaging-101.md",
            },
            {
              text: "Cross-platform Compilation",
              link: "/development/cross-platform-compilation.md",
            },
            {
              text: "Distributed Building",
              link: "/development/distributed-building.md",
            },
            {
              text: "[WIP]Kernel Development",
              link: "/development/kernel-development.md",
            },
          ],
        },
        {
          text: "Advanced Topics",
          items: [{ text: "Advanced Topics", link: "/advanced-topics/index.md" }],
        },
        {
          text: "Frequently Asked Questions",
          items: [{ text: "Frequently Asked Questions", link: "/faq/index.md" }],
        },
      ],
    },
  }
}

function themeConfigChinese() {
  return {
    label: "简体中文",
    lang: "zh-CN",
    link: "/zh/",
    title: "NixOS 与 Flakes",
    description: "一份非官方的新手指南",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "首页", link: "/zh/" },
        { text: "前言", link: "/zh/preface.md" },
        { text: "开始使用", link: "/zh/introduction/index.md" },
        { text: "最佳实践", link: "/zh/best-practices/intro.md" },
      ],

      sidebar: [
        {
          text: "前言",
          items: [{ text: "前言", link: "/zh/preface.md" }],
        },
        {
          text: "开始使用",
          items: [
            { text: "简介", link: "/zh/introduction/index.md" },
            {
              text: "优缺点",
              link: "/zh/introduction/advantages-and-disadvantages.md",
            },
            {
              text: "安装",
              link: "/zh/introduction/installation.md",
            },
          ],
        },
        {
          text: "Nix 语言",
          items: [{ text: "快速入门", link: "/zh/the-nix-language/index.md" }],
        },

        {
          text: "NixOS 与 Flakes",
          items: [
            {
              text: "开始使用 NixOS",
              link: "/zh/nixos-with-flakes/get-started-with-nixos.md",
            },
            {
              text: "Flakes 简介",
              link: "/zh/nixos-with-flakes/introduction-to-flakes.md",
            },
            {
              text: "使用 Flakes 管理 NixOS",
              link: "/zh/nixos-with-flakes/nixos-with-flakes-enabled.md",
            },
            {
              text: "NixOS 的 flake.nix 内容详解",
              link: "/zh/nixos-with-flakes/nixos-flake-configuration-explained.md",
            },
            {
              text: "Flakes 的组合能力与 Nixpkgs 模块系统",
              link: "/zh/nixos-with-flakes/nixos-flake-and-module-system.md",
            },
            {
              text: "安装使用 Home Manager",
              link: "/zh/nixos-with-flakes/start-using-home-manager.md",
            },
            {
              text: "模块化系统配置",
              link: "/zh/nixos-with-flakes/modularize-the-configuration.md",
            },
            {
              text: "更新系统",
              link: "/zh/nixos-with-flakes/update-the-system.md",
            },
            {
              text: "降级或升级软件包",
              link: "/zh/nixos-with-flakes/downgrade-or-upgrade-packages.md",
            },
            {
              text: "其他杂七杂八的内容",
              link: "/zh/nixos-with-flakes/other-useful-tips.md",
            },
          ],
        },
        {
          text: "Nixpkgs 高级用法",
          items: [
            { text: "简介", link: "/zh/nixpkgs/intro.md" },
            { text: "callPackage", link: "/zh/nixpkgs/callpackage.md" },
            { text: "Overriding", link: "/zh/nixpkgs/overriding.md" },
            { text: "Overlays", link: "/zh/nixpkgs/overlays.md" },
            {
              text: "多 Nixpkgs 实例的妙用",
              link: "/zh/nixpkgs/multiple-nixpkgs.md",
            },
          ],
        },
        {
          text: "Nix Store 与二进制缓存",
          items: [
            { text: "简介", link: "/zh/nix-store/intro.md" },
            {
              text: "添加二进制缓存服务器",
              link: "/zh/nix-store/add-binary-cache-servers.md",
            },
            {
              text: "搭建你自己的缓存服务器",
              link: "/zh/nix-store/host-your-own-binary-cache-server.md",
            },
          ],
        },
        {
          text: "NixOS 最佳实践",
          items: [
            { text: "简介", link: "/zh/best-practices/intro.md" },
            {
              text: "运行非 NixOS 的二进制文件",
              link: "/zh/best-practices/run-downloaded-binaries-on-nixos.md",
            },
            {
              text: "简化常用的 NixOS 相关命令",
              link: "/zh/best-practices/simplify-nixos-related-commands.md",
            },
            {
              text: "加速 Dotfiles 的调试",
              link: "/zh/best-practices/accelerating-dotfiles-debugging.md",
            },
            {
              text: "自定义 NIX_PATH 与 Flake Registry",
              link: "/zh/best-practices/nix-path-and-flake-registry.md",
            },
            {
              text: "远程部署 NixOS 配置",
              link: "/zh/best-practices/remote-deployment.md",
            },
            {
              text: "调试 Nix 软件包与 Nix 表达式",
              link: "/zh/best-practices/debugging.md",
            },
          ],
        },
        {
          text: "Flakes 的其他玩法",
          items: [
            { text: "简介", link: "/zh/other-usage-of-flakes/intro.md" },
            {
              text: "Flake Inputs",
              link: "/zh/other-usage-of-flakes/inputs.md",
            },
            {
              text: "Flake Outputs",
              link: "/zh/other-usage-of-flakes/outputs.md",
            },
            {
              text: "新一代 Nix 命令行工具的使用",
              link: "/zh/other-usage-of-flakes/the-new-cli.md",
            },
            {
              text: "模块系统与自定义 options",
              link: "/zh/other-usage-of-flakes/module-system.md",
            },
            {
              text: "[WIP]Testing",
              link: "/zh/other-usage-of-flakes/testing.md",
            },
          ],
        },
        {
          text: "在 NixOS 上进行开发工作",
          items: [
            {
              text: "nix shell, nix develop & pkgs.runCommand",
              link: "/zh/development/intro.md",
            },
            {
              text: "各语言的开发环境",
              link: "/zh/development/dev-environments.md",
            },
            {
              text: "[WIP]软件打包",
              link: "/zh/development/packaging-101.md",
            },
            {
              text: "跨平台编译",
              link: "/zh/development/cross-platform-compilation.md",
            },
            {
              text: "分布式构建",
              link: "/zh/development/distributed-building.md",
            },
            {
              text: "[WIP]内核开发",
              link: "/zh/development/kernel-development.md",
            },
          ],
        },
        {
          text: "其他进阶话题",
          items: [{ text: "其他进阶话题", link: "/zh/advanced-topics/index.md" }],
        },
        {
          text: "常见问题 FAQ",
          items: [{ text: "常见问题 FAQ", link: "/zh/faq/index.md" }],
        },
      ],
    },
  }
}

function themeConfigJapanese() {
  return {
    label: "日本語",
    lang: "ja-JP",
    link: "/ja",
    title: "NixOS & Flakes Book",
    description: "初心者のためのこだわりのある(非公式な)Nix本",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "トップ", link: "/ja" },
        { text: "まえがき", link: "/ja/preface.md" },
        { text: "入門", link: "/ja/introduction/index.md" },
        { text: "ベストプラクティス", link: "/ja/best-practices/intro.md" },
      ],

      sidebar: [
        {
          text: "まえがき",
          items: [{ text: "まえがき", link: "/ja/preface.md" }],
        },
        {
          text: "入門",
          items: [
            { text: "入門", link: "/ja/introduction/index.md" },
            {
              text: "メリットとデメリット",
              link: "/ja/introduction/advantages-and-disadvantages.md",
            },
            {
              text: "インストール",
              link: "/ja/introduction/installation.md",
            },
          ],
        },
        {
          text: "Nix 言語",
          items: [{ text: "基本の'き'", link: "/ja/the-nix-language/index.md" }],
        },
        {
          text: "NixOS と Flakes",
          items: [
            {
              text: "NixOS 入門",
              link: "/ja/nixos-with-flakes/get-started-with-nixos.md",
            },
            {
              text: "Flakes 入門",
              link: "/ja/nixos-with-flakes/introduction-to-flakes.md",
            },
            {
              text: "NixOS で Flakes を有効にする",
              link: "/ja/nixos-with-flakes/nixos-with-flakes-enabled.md",
            },
            {
              text: "flake.nix について知る",
              link: "/ja/nixos-with-flakes/nixos-flake-configuration-explained.md",
            },
            {
              text: "Flakes と Nixpkgs モジュールシステムを組み合わせる",
              link: "/ja/nixos-with-flakes/nixos-flake-and-module-system.md",
            },
            {
              text: "Home Manager 入門",
              link: "/ja/nixos-with-flakes/start-using-home-manager.md",
            },
            {
              text: "設定のモジュール化",
              link: "/ja/nixos-with-flakes/modularize-the-configuration.md",
            },
            {
              text: "システムのアップデート",
              link: "/ja/nixos-with-flakes/update-the-system.md",
            },
            {
              text: "パッケージのアップ(ダウン)グレード",
              link: "/ja/nixos-with-flakes/downgrade-or-upgrade-packages.md",
            },
            {
              text: "その他のヒント",
              link: "/ja/nixos-with-flakes/other-useful-tips.md",
            },
          ],
        },
        {
          text: "Nixpkgs の発展的な使い方",
          items: [
            { text: "入門", link: "/ja/nixpkgs/intro.md" },
            { text: "callPackage", link: "/ja/nixpkgs/callpackage.md" },
            { text: "Override", link: "/ja/nixpkgs/overriding.md" },
            { text: "Overlays", link: "/ja/nixpkgs/overlays.md" },
            {
              text: "複数の Nixpkgs インスタンス",
              link: "/ja/nixpkgs/multiple-nixpkgs.md",
            },
          ],
        },
        {
          text: "Nix Store とバイナリキャッシュ",
          items: [
            { text: "入門", link: "/nix-store/intro.md" },
            {
              text: "バイナリキャッシュサーバの追加",
              link: "/ja/nix-store/add-binary-cache-servers.md",
            },
            {
              text: "バイナリキャッシュサーバをホスティングする",
              link: "/ja/nix-store/host-your-own-binary-cache-server.md",
            },
          ],
        },
        {
          text: "ベストプラクティス",
          items: [
            { text: "入門", link: "/best-practices/intro.md" },
            {
              text: "ダウンロードしたバイナリを NixOS で実行する",
              link: "/ja/best-practices/run-downloaded-binaries-on-nixos.md",
            },
            {
              text: "NixOS に関連するコマンドを簡潔にする",
              link: "/ja/best-practices/simplify-nixos-related-commands.md",
            },
            {
              text: "Dotfiles のデバッグを効率化する",
              link: "/ja/best-practices/accelerating-dotfiles-debugging.md",
            },
            {
              text: "NIX_PATH と Flake レジストリのカスタム",
              link: "/ja/best-practices/nix-path-and-flake-registry.md",
            },
            {
              text: "リモートデプロイ",
              link: "/ja/best-practices/remote-deployment.md",
            },
            {
              text: "Derivations と Nix 式のデバッグ",
              link: "/ja/best-practices/debugging.md",
            },
          ],
        },

        {
          text: "Flakes のその他の使い方",
          items: [
            { text: "入門", link: "/other-usage-of-flakes/intro.md" },
            {
              text: "Flake Inputs",
              link: "/ja/other-usage-of-flakes/inputs.md",
            },
            {
              text: "Flake Outputs",
              link: "/ja/other-usage-of-flakes/outputs.md",
            },
            {
              text: "最新版の CLI",
              link: "/ja/other-usage-of-flakes/the-new-cli.md",
            },
            {
              text: "モジュールシステム & カスタムオプション",
              link: "/ja/other-usage-of-flakes/module-system.md",
            },
            {
              text: "[WIP]テスト",
              link: "/ja/other-usage-of-flakes/testing.md",
            },
          ],
        },
        {
          text: "NixOS における開発環境",
          items: [
            {
              text: "nix shell, nix develop と pkgs.runCommand",
              link: "/ja/development/intro.md",
            },
            {
              text: "開発環境",
              link: "/ja/development/dev-environments.md",
            },
            {
              text: "[WIP]Packaging 101",
              link: "/ja/development/packaging-101.md",
            },
            {
              text: "クロスプラットフォームコンパイル",
              link: "/ja/development/cross-platform-compilation.md",
            },
            {
              text: "分散ビルド",
              link: "/ja/development/distributed-building.md",
            },
            {
              text: "[WIP]カーネル開発",
              link: "/ja/development/kernel-development.md",
            },
          ],
        },
        {
          text: "高度なトピック",
          items: [{ text: "高度なトピック", link: "/ja/advanced-topics/index.md" }],
        },
        {
          text: "よくある質問",
          items: [{ text: "よくある質問", link: "/ja/faq/index.md" }],
        },
      ],
    },
  }
}

function getJSONLD(pageData: PageData) {
  if (pageData.relativePath === "index.md") {
    return `{
  "@context":"http://schema.org",
  "@type":"WebSite",
  "url":"https:\/\/nixos-and-flakes.thiscute.world\/",
  "inLanguage":"en",
  "description":"An unofficial and opinionated book for beginners",
  "name":"${pageData.title}"
}`
  } else if (pageData.relativePath === "zh/index.md") {
    return `{
  "@context":"http://schema.org",
  "@type":"WebSite",
  "url":"https:\/\/nixos-and-flakes.thiscute.world\/zh\/",
  "inLanguage":"zh-CN",
  "description":"一份非官方的新手指南",
  "name":"${pageData.title}"
}`
  } else {
    let lang = pageData.relativePath.startsWith("zh/") ? "zh-CN" : "en"
    let url = `https:\/\/nixos-and-flakes.thiscute.world\/${pageData.relativePath
      .replace(/\.md$/, "")
      .replace(/\/index\$/, "/")}`
    return `{
  "@context":"http://schema.org",
  "@type":"TechArticle",
  "headline":"${pageData.title} | NixOS & Flakes Book",
  "inLanguage":"${lang}",
  "mainEntityOfPage":{
     "@type":"WebPage",
     "@id":"${url}"
  },
  "keywords":"NixOS, Nix, Flakes, Linux, Tutorial",
  "url":"${url}"
}`
  }
}
