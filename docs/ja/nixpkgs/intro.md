# Nixpkgs の発展的な使い方

`callPackage`, `Overriding`, `Overlays` は Nix パッケージのビルド方法をカスタムするために
Nix を使用する際に時々使われる手法です。

多くのプログラムには設定するべき多くのビルドパラメータがあります。しかし、他のユーザは異な
るビルドパラメータを使用したいということがあるかもしれません。

この点で、`Overriding` と `Overlays` が重宝されています。ここで私が今までに遭遇した例につ
いて少し説明します。

1. [`fcitx5-rime.nix`](https://github.com/NixOS/nixpkgs/blob/e4246ae1e7f78b7087dce9c9da10d28d3725025f/pkgs/tools/inputmethods/fcitx5/fcitx5-rime.nix):
   標準では、`fcitx5-rime` は `rime-data` を `rimeDataPkgs` の値として使用します。です
   が、`override` によってこのパラメータをカスタマイズすることができます。
2. [`vscode/with-extensions.nix`](https://github.com/NixOS/nixpkgs/blob/nixos-23.05/pkgs/applications/editors/vscode/with-extensions.nix):
   この VS Code パッケージは、 `vscodeExtensions` の値を書き換えることでカスタマイズするこ
   とができます。これによって、カスタムプラグインを VS Code にインストールすることができま
   す。
   - [`nix-vscode-extensions`](https://github.com/nix-community/nix-vscode-extensions): こ
     れは `vscodeExtensions` を上書きすることによって実装された vscode のプラグインマネー
     ジャです。
3. [`firefox/common.nix`](https://github.com/NixOS/nixpkgs/blob/416ffcd08f1f16211130cd9571f74322e98ecef6/pkgs/applications/networking/browsers/firefox/common.nix):
   Firefox にも同様に多くのカスタマイズ可能なパラメータがあります。
4. ...

要するに、`callPackage`, `Overriding`, `Overlays` によって、Nix パッケージのビルドパラメー
タのカスタマイズをすることができます。
