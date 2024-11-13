# 高度なトピック

一度NixOSに慣れてしまえば、さらなるトピックを探してより深いNixエコシステムの世界に飛び込むことができます。これらは知識を更に高めるのに有益ないくつかの情報とコミュニティプロジェクトです:

## コミュニティ

- [Nix Official - Community](https://nixos.org/community/): Nix コミュニティやフォーラム、リアルタイムのチャット、meetups、RFCの情報が公開されています。
- [Nix Channel Status](https://status.nixos.org/): The build status of each Nix channel.
- [nix-community/NUR](https://github.com/nix-community/NUR): Nixpkgsには非常に多くのパッケージが含まれていますが、レビューの速度やライセンスの問題等によって含まれていないパッケージもあります。NUR is a decentralized Nix package repository
  where anyone can create their own Nix repository and add it to NUR for others to use. If
  you want to use a package that is not in Nixpkgs, you can try to find it here. If you
  want to share your own Nix package with others, you can create and share your own Nix
  repository according to the README of NUR.

## ドキュメントとビデオ

- [Eelco Dolstra - The Purely Functional Software Deployment Model - 2006](https://edolstra.github.io/pubs/phd-thesis.pdf):
  Eelco Dolstra's seminal PhD thesis about the Nix package manager,
- [Nix Reference Manual](https://nixos.org/manual/nix/stable/package-management/profiles.html):
  A comprehensive guide to the Nix package manager, covering its design and usage from the
  command line.
- [nixpkgs Manual](https://nixos.org/manual/nixpkgs/unstable/): The manual for nixpkgs,
  which introduces its parameters, explains how to use, modify, and package Nix packages.
- [NixOS Manual](https://nixos.org/manual/nixos/unstable/): A user manual for NixOS,
  providing configuration instructions for system-level components such as Wayland/X11 and
  GPU.
- [nix-pills](https://nixos.org/guides/nix-pills): "Nix Pills" is a series of guides that
  provide an in-depth explanation of building software packages with Nix. It offers clear
  and understandable explanations.
- [nixos-in-production](https://github.com/Gabriella439/nixos-in-production): This is a
  work-in-progress book hosted on LeanPub about introducing and maintaining NixOS in a
  production environment.

And there are many official videos on the
[NixOS Foundation](https://www.youtube.com/@NixOS-Foundation) and
[NixCon](https://www.youtube.com/@NixCon) channels on YouTube. Here are a few videos that
are highly recommended:

- [Summer of Nix 2022 — Public Lecture Series](https://www.youtube.com/playlist?list=PLt4-_lkyRrOMWyp5G-m_d1wtTcbBaOxZk):
  A series of public lectures hosted by the NixOS Foundation, presented by core members of
  the Nix community such as Eelco Dolstra and Armijn Hemel. The content covers the
  development history of Nix, the history of NixOS, and the future of Nix, among other
  topics.
- [Summer of Nix 2023 — Nix Developer Dialogues](https://www.youtube.com/playlist?list=PLt4-_lkyRrOPcBuz_tjm6ZQb-6rJjU3cf):
  A series of dialogues between core members of the Nix community in 2023. The content
  includes the evolution and architectural challenges of Nixpkgs, exploration of Nix's
  module system, discussion of the Nix ecosystem, AI applications in Nixpkgs, and the
  application of Nix in the commercial field and open source economics.

## 高度なテクニックとコミュニティプロジェクト

Once you are comfortable with Flakes, you can explore more advanced techniques and
community projects. Here are some popular ones to try out:

- [flake-parts](https://github.com/hercules-ci/flake-parts): Simplifies the writing and maintenance of configurations using the Module module system.
- [flake-utils-plus](https://github.com/gytis-ivaskevicius/flake-utils-plus): Flakeの設定を強化し追加の高度な機能を提供してくれるサードパーティ製のパッケージ

There are many other valuable community projects worth exploring. Here are a few examples:

- [nix-output-monitor](https://github.com/maralorn/nix-output-monitor): Beautifully
  displays the build progress of Nix packages, with additional information such as build
  time and build log.
- [agenix](https://github.com/ryantm/agenix): A tool for secrets management.
- [colmena](https://github.com/zhaofengli/colmena): Tools for NixOS deployment.
- [nixos-generators](https://github.com/nix-community/nixos-generators): A tool to
  generate ISO/qcow2/... from NixOS configurations.
- [lanzaboote](https://github.com/nix-community/lanzaboote): Enables secure boot for
  NixOS.
- [impermanence](https://github.com/nix-community/impermanence): Helps make NixOS
  stateless and improves system reproducibility.
- [devbox](https://github.com/jetpack-io/devbox): Lightweight, repeatable dev environments
  without container woes, internally powered by nix, similar to earthly.
- [nixpak](https://github.com/nixpak/nixpak): A tool to sandbox all sorts of Nix-packaged
  applications, including graphical ones.
- [nixpacks](https://github.com/railwayapp/nixpacks): Nixpacks takes a source directory
  and produces an OCI compliant image that can be deployed anywhere, similar to
  buildpacks.
- ...

これらのプロジェクトはNixOSでの体験を強化してくれる機能的なツールを提供してくれます。

[awesome-nix](https://github.com/nix-community/awesome-nix)で追加の情報を確認できます。
