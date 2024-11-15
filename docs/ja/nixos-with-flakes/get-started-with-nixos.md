# NixOS 入門

Nix言語の基本を勉強したら、いよいよNixOSのシステムの設定をはじめましょう。
デフォルトの設定ファイルは`/etc/nixos/configuration.nix`に置かれています。
このファイルにはタイムゾーンや言語、キーボード配列、ネットワーク、ユーザー、ファイルシステム、
起動オプションといった全ての宣言的な設定が含まれています。

再現性に配慮してシステムの状態を変更するには(Nixを使う以上それが推奨されています)、
`/etc/nixos/configuration.nix`ファイルを編集した後に`sudo nixos-rebuild switch`コマンド
で設定を適用する必要があります。このコマンドは変更された設定ファイルを元に新たなシステム環境を生成し、
それをデフォルトとして設定した後に以前の設定をブートメニューに追加します。
新しい環境での起動に失敗した際には、このメニューから古い環境にロールバックできます。

`/etc/nixos/configuration.nix`はNixOSを設定するための古い手法です。この方法ではデータソースを
`nix-channel`に依存するためバージョンの固定を行う方法が存在せず、確実にシステムを再現するのが難しくなります。
よりベターな方法はFlakesを利用することです。Flakesは確実な再現性と柔軟な設定の管理を提供してくれます。

このセクションでははじめにNixOSをこの古い手法(`/etc/nixos/configuration.nix`)で管理する方法を学びます。
その後、より高度な機能であるFlakesに足を踏み入れることにしましょう。

## `/etc/nixos/configuration.nix`を用いてシステムを設定する

`/etc/nixos/configuration.nix`はNixOSの設定を行うための、デフォルトの古典的な方法です。
Flakesと比較するといくつかの機能が不足していますが、
システムを構成するうえで未だ広く使用されており幅広い柔軟性を提供しています。

この方法による設定方法を説明するために、SSH接続を有効化して`ryan`というユーザーが追加されたシステムを
考えてみましょう。以下の内容を`/etc/nixos/configuration.nix`に追加することでこれらの設定を行えます:

```nix{14-38}
# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).
{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  # Omit previous configuration settings...

  # Add user 'ryan'
  users.users.ryan = {
    isNormalUser = true;
    description = "ryan";
    extraGroups = [ "networkmanager" "wheel" ];
    openssh.authorizedKeys.keys = [
        # Replace with your own public key
        "ssh-ed25519 <some-public-key> ryan@ryan-pc"
    ];
    packages = with pkgs; [
      firefox
    #  thunderbird
    ];
  };

  # Enable the OpenSSH daemon.
  services.openssh = {
    enable = true;
    settings = {
      X11Forwarding = true;
      PermitRootLogin = "no"; # disable root login
      PasswordAuthentication = false; # disable password login
    };
    openFirewall = true;
  };

  # Omit the rest of the configuration...
}
```

この設定では、opensshサービスを有効化し'ryan'ユーザーに公開鍵を追加しました。
その後、SSHでのパスワードでのログインを無効化しました。

変更された設定をデプロイするには、`sudo nixos-rebuild switch`を実行します。
このコマンドは変更を適用して新たなシステム環境を構築し、デフォルトに設定します。
これで、構成されたSSH鍵で認証してSSHを用いてシステムにログインできます。

> You can always try to add `--show-trace --print-build-logs --verbose` to the
> `nixos-rebuild` command to get the detailed error message if you encounter any errors
> during the deployment.

システムへの再現性のある変更を適用するには、`/etc/nixos/configuration.nix`を編集し、
`sudo nixos-rebuild switch`でそれらをデプロイするということを覚えておいてください。

構成に関するオプションとドキュメントを探すには:

- Googleのような検索エンジンを使って `Chrome NixOS`のようなキーワードでChromeについて
  NixOSに関連した情報を検索できます。殆どの場合がNixOS WikiやNixpkgsのソースコード等が
  検索結果の最上位に表示されます。
- 特定のキーワードを検索するには[NixOS Options Search](https://search.nixos.org/options)が便利です。
- NixOSのマニュアルの[Configuration section](https://nixos.org/manual/nixos/unstable/index.html#ch-configuration)でシステムレベルの構成のドキュメントを参照してください。
- GitHubで[nixpkgs](https://github.com/NixOS/nixpkgs)のソースコードを直に検索する。

## 参考文献

- [Overview of the NixOS Linux distribution](https://wiki.nixos.org/wiki/Overview_of_the_NixOS_Linux_distribution)
