import { defineConfig } from "vitepress"

export const ja = defineConfig({
  lang: "ja-JP",
  description: "初心者のためのこだわりのある(非公式な)Nix本",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "トップ", link: "/" },
      { text: "まえがき", link: "/preface.md" },
      { text: "入門", link: "/introduction/index.md" },
      { text: "ベストプラクティス", link: "/best-practices/intro.md" },
    ],

    sidebar: [
      {
        text: "まえがき",
        items: [{ text: "まえがき", link: "/preface.md" }],
      },
      {
        text: "入門",
        items: [
          { text: "入門", link: "/introduction/index.md" },
          {
            text: "メリットとデメリット",
            link: "/introduction/advantages-and-disadvantages.md",
          },
          {
            text: "インストール",
            link: "/introduction/installation.md",
          },
        ],
      },
      {
        text: "Nix 言語",
        items: [{ text: "基本の'き'", link: "/the-nix-language/index.md" }],
      },
      {
        text: "NixOS と Flakes",
        items: [
          {
            text: "NixOS 入門",
            link: "/nixos-with-flakes/get-started-with-nixos.md",
          },
          {
            text: "Flakes 入門",
            link: "/nixos-with-flakes/introduction-to-flakes.md",
          },
          {
            text: "NixOS で Flakes を有効にする",
            link: "/nixos-with-flakes/nixos-with-flakes-enabled.md",
          },
          {
            text: "flake.nix について知る",
            link: "/nixos-with-flakes/nixos-flake-configuration-explained.md",
          },
          {
            text: "Flakes と Nixpkgs モジュールシステムを組み合わせる",
            link: "/nixos-with-flakes/nixos-flake-and-module-system.md",
          },
          {
            text: "Home Manager 入門",
            link: "/nixos-with-flakes/start-using-home-manager.md",
          },
          {
            text: "設定のモジュール化",
            link: "/nixos-with-flakes/modularize-the-configuration.md",
          },
          {
            text: "システムのアップデート",
            link: "/nixos-with-flakes/update-the-system.md",
          },
          {
            text: "パッケージのアップ(ダウン)グレード",
            link: "/nixos-with-flakes/downgrade-or-upgrade-packages.md",
          },
          {
            text: "その他のヒント",
            link: "/nixos-with-flakes/other-useful-tips.md",
          },
        ],
      },
      {
        text: "Nixpkgs の発展的な使い方",
        items: [
          { text: "入門", link: "/nixpkgs/intro.md" },
          { text: "callPackage", link: "/nixpkgs/callpackage.md" },
          { text: "Override", link: "/nixpkgs/overriding.md" },
          { text: "Overlays", link: "/nixpkgs/overlays.md" },
          {
            text: "複数の Nixpkgs インスタンス",
            link: "/nixpkgs/multiple-nixpkgs.md",
          },
        ],
      },
      {
        text: "Nix Store とバイナリキャッシュ",
        items: [
          { text: "入門", link: "/nix-store/intro.md" },
          {
            text: "バイナリキャッシュサーバの追加",
            link: "/nix-store/add-binary-cache-servers.md",
          },
          {
            text: "バイナリキャッシュサーバをホスティングする",
            link: "/nix-store/host-your-own-binary-cache-server.md",
          },
        ],
      },
      {
        text: "ベストプラクティス",
        items: [
          { text: "入門", link: "/best-practices/intro.md" },
          {
            text: "ダウンロードしたバイナリを NixOS で実行する",
            link: "/best-practices/run-downloaded-binaries-on-nixos.md",
          },
          {
            text: "NixOS に関連するコマンドを簡潔にする",
            link: "/best-practices/simplify-nixos-related-commands.md",
          },
          {
            text: "Dotfiles のデバッグを効率化する",
            link: "/best-practices/accelerating-dotfiles-debugging.md",
          },
          {
            text: "NIX_PATH と Flake レジストリのカスタム",
            link: "/best-practices/nix-path-and-flake-registry.md",
          },
          {
            text: "リモートデプロイ",
            link: "/best-practices/remote-deployment.md",
          },
          {
            text: "Derivations と Nix 式のデバッグ",
            link: "/best-practices/debugging.md",
          },
        ],
      },

      {
        text: "Flakes のその他の使い方",
        items: [
          { text: "入門", link: "/other-usage-of-flakes/intro.md" },
          {
            text: "Flake Inputs",
            link: "/other-usage-of-flakes/inputs.md",
          },
          {
            text: "Flake Outputs",
            link: "/other-usage-of-flakes/outputs.md",
          },
          {
            text: "最新版の CLI",
            link: "/other-usage-of-flakes/the-new-cli.md",
          },
          {
            text: "モジュールシステム & カスタムオプション",
            link: "/other-usage-of-flakes/module-system.md",
          },
          {
            text: "[WIP]テスト",
            link: "/other-usage-of-flakes/testing.md",
          },
        ],
      },
      {
        text: "NixOS における開発環境",
        items: [
          {
            text: "nix shell, nix develop と pkgs.runCommand",
            link: "/development/intro.md",
          },
          {
            text: "開発環境",
            link: "/development/dev-environments.md",
          },
          {
            text: "[WIP]Packaging 101",
            link: "/development/packaging-101.md",
          },
          {
            text: "クロスプラットフォームコンパイル",
            link: "/development/cross-platform-compilation.md",
          },
          {
            text: "分散ビルド",
            link: "/development/distributed-building.md",
          },
          {
            text: "[WIP]カーネル開発",
            link: "/development/kernel-development.md",
          },
        ],
      },
      {
        text: "高度なトピック",
        items: [{ text: "高度なトピック", link: "/advanced-topics/index.md" }],
      },
      {
        text: "よくある質問",
        items: [{ text: "よくある質問", link: "/faq/index.md" }],
      },
    ],
  },
})
