# IME Guard: Fix my Typing

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

IME Guard: Fix my Typing は、日本語などの入力メソッド（IME）を使用して文字を変換し、`Enter` キーで確定しようとした際に、Facebook、Gemini、Slack、Discord などのサイトで意図せずメッセージが送信されてしまう WebKit（Safari）特有の不具合を防ぐ Safari 拡張機能です。

## 🌟 主な機能

- **カスタムホワイトリスト**: この問題が発生するサイト（例：`facebook.com`、`gemini.google.com`）を自由に追加できます。
- **ワイルドカード対応**: `*.facebook.com` のように指定することで、すべてのサブドメインを対象にできます。
- **スマートなブロック**: IMEでの「変換中」に押された `Enter` キーのみをブロックします。通常の `Enter` キーによる送信は妨げません。
- **ダークモード対応UI**: 目に優しく、洗練されたモダンな設定画面を提供します。
- **多言語対応**: システムと言語設定に合わせて自動で切り替わります（英語、日本語、韓国語、繁体字中国語、簡体字中国語に対応）。

## 🚀 インストール方法

現在、この拡張機能は Mac App Store には公開されていません。以下の手順で Xcode を使用してご自身でビルド・インストールしてください：

1. Mac に [Xcode](https://developer.apple.com/xcode/) がインストールされていることを確認します。
2. このリポジトリをローカルにクローン（Clone）します。
3. ターミナル（Terminal）を開き、プロジェクトのディレクトリに移動します。
4. 以下のコマンドを実行して、Safari 拡張機能プロジェクトに変換します：
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode が自動的に開きます。左上の **Run** ボタンをクリック（または `Cmd + R`）してビルドし、実行します。
6. Safari を開き、**設定 (Settings) > 拡張機能 (Extensions)** に移動し、「**IME Guard: Fix my Typing**」のチェックボックスをオンにして有効にします。
7. （オプション）拡張機能が表示されない場合は、Safari の **詳細 (Advanced)** 設定で **「開発」メニューを表示 (Show Develop menu in menu bar)** をオンにし、「開発」メニューから **署名されていない拡張機能を許可 (Allow Unsigned Extensions)** にチェックを入れる必要があります。

## 💡 使い方

1. 「変換中の Enter で送信されてしまう」問題が発生するサイト（例：Facebook）にアクセスします。
2. Safari のツールバーにある **IME Guard: Fix my Typing** のアイコンをクリックします。
3. **「このサイトを保護」** をクリックします。アイコンに緑色の **ON** バッジが表示されます。
4. 以降、そのサイトで IME を使用して文字変換を確定する際に `Enter` を押しても、メッセージが意図せず送信されることはありません！

ポップアップの右上にある「設定」ボタンをクリックして、保護するドメインのリストを手動で管理することも可能です。

## 🛠 技術的な詳細

- **Manifest V3** に準拠しています。
- `document_start` のタイミングで `Capture Phase` にイベントリスナーを挿入し、React などのフロントエンドフレームワークが `keydown` イベントを捕捉する前に、IME の Enter キーの伝播を停止（`e.stopImmediatePropagation()`）します。

## 📄 ライセンス

MIT License

## ☕️ サポート＆お問い合わせ

このツールが役に立ったと思ったら、[Ko-fiでコーヒーをごちそう](https://ko-fi.com/mickhuang)してください！
または、[www.mickhuang.com](https://www.mickhuang.com) からお気軽にご連絡ください。
