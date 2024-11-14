![](/nixos-and-flakes-book.webp)

# Nix & NixOSへの入門

Nixはユーザーが望むシステムの状態を設定ファイル(declarative configuration)
で定義できる宣言的なパッケージマネージャーであり、Nixはその宣言された設定を達成する義務があります。

> In simple terms, "declarative configuration" means that users only need to declare the
> desired outcome. For instance, if you declare that you want to replace the i3 window
> manager with sway, Nix will assist you in achieving that goal. You don't have to worry
> about the underlying details, such as which packages sway requires for installation,
> which i3-related packages need to be uninstalled, or the necessary adjustments to system
> configuration and environment variables for sway. Nix automatically handles these
> details for the user (provided that the Nix packages related to sway and i3 are properly
> designed).

Linuxディストリビューションの1種であるNixOSはNixパッケージマネージャーを中心として構築されており、
"OSをコードとして(OS as Code)" 記述することができます。
宣言的なNixの設定ファイルを使用して、OSの状態全体を宣言します。

オペレーティングシステムは様々なソフトウェアのパッケージや設定ファイル、テキストやバイナリデータ
で構成されており、それらが統合されてシステムの状態を表しています。宣言的な設定では、これらのうち静的な部分のみ管理できます。

PostgreSQLやMySQL、MongoDBのような動的なデータは宣言的設定では効果的に管理できません。
(デプロイの度にPostgreSQLから設定で宣言されてないデータを削除するのは現実的ではありません)
したがって、**NixOSは主に、システム設定の静的な部分を管理することに焦点を当てています**。
ホームディレクトリのデータを含む動的なデータは、前の世代にロールバックしても影響を受けません。

それでもシステムを完全に再現することはできませんが、非常に重要である`/home`ディレクトリには
[Dotfiles](https://wiki.archlinux.org/title/Dotfiles)をはじめとする多くの重要なファイルがあります。
[home-manager](https://github.com/nix-community/home-manager)と呼ばれる重要なコミュニティプロジェクトは
ホームディレクトリ内のユーザーレベルのパッケージと設定ファイルを管理するために設計されています。

宣言性と再現性といったのNixの機能により、Nixはデスクトップ環境の管理に限らず、
開発環境やコンパイル環境、クラウド上の仮想マシン、コンテナイメージの構築など様々なことに活用できます。
[NixOps](https://github.com/NixOS/nixops) (公式プロジェクト) や [colmena](https://github.com/zhaofengli/colmena)
(コミュニティプロジェクト)はどちらもNixをベースとした管理ツールです。

## Why NixOS?

私が最初にNixパッケージマネージャーについて知ったのは7年前でした。
システムを記述するためにNix言語を使い、NixOSはその仕組みをベースに構築され、任意の以前の環境にロールバックできました
(もちろん、残念ながらNixで宣言された設定に限りますが)。
印象的な思想でしたが、新しい言語を勉強したりパッケージのインストールのためにコードを書くのが面倒だったため、
当時の私はそこまで深く追求することはありませんでした。

転機が訪れたのはEndeavourOSでいくつかの環境依存の問題に遭遇したときでした。
それらを解決するのに多くの体力を消費し、とうとう疲れ切ってしまいました。
十分に考え抜いた結果、EndeavourOSにはバージョン管理とロールバックのための方法が存在しないため、
問題が発生したときにシステムを復元できないことがわかりました。

そして私はついにNixOSへの切り替えを決意しました。

嬉しいことに、NixOSは期待していた以上の働きをしてくれました。
最も驚くべきことは、自分のi3環境と全ての共通して使っているパッケージを、新規にインストールしたNixOSで
たった1つのコマンド`sudo nixos-rebuild switch --flake .`を実行するだけで復元できることです。
これまでのものと比較すると、まさに魔法でした。

The rollback capability and reproducibility of NixOS has instilled a great deal of
confidence in me—I no longer fear breaking the system. I've even ventured into
experimenting with new things on NixOS, such as the hyprland compositor. Previously, on
EndeavourOS, I wouldn't have dared to tinker with such novel compositors, as any system
mishaps would have entailed significant manual troubleshooting using various workarounds.

As I get more and more involved with NixOS and Nix, I find it also very suitable for
synchronously managing the configuration of multiple hosts. Currently my personal
[nix-config](https://github.com/ryan4yin/nix-config) synchronously manages the
configuration of many hosts:

- デスクトップ
  - 1 Macbook Pro 2020 (Intel amd64).
  - 1 Macbook Pro 2022 (M2 aarch64).
  - 1 NixOS desktop PC (amd64).
- サーバー
  - 3 NixOS virtual machines (amd64).
  - Several development boards for aarch64 and riscv64.

The development environment of three desktop computers is managed by Home Manager, the
main configuration is completely shared, and the configuration modified on any host can be
seamlessly synchronized to other hosts through Git.

Nix almost completely shielded me from the differences between OS and architecture at the
bottom of the three machines, and the experience was very smooth!
