import { defineConfig } from "vitepress"

export const ja = defineConfig({
  lang: "ja-JP",
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
})
