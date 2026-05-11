# IME Guard: Fix my Typing

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

A Safari extension designed to fix a common WebKit bug where pressing the `Enter` key during Input Method Editor (IME) composition prematurely submits messages on sites like Facebook, Gemini, Slack, and Discord.

If you type in Japanese, Korean, Chinese, or any language that relies on an IME, you may have encountered the frustrating issue where confirming your character selection with `Enter` accidentally sends a half-finished message. This extension fixes that!

## 🌟 Features

- **Custom Whitelist**: Add domains where this issue occurs (e.g., `facebook.com` or `gemini.google.com`).
- **Wildcard Support**: Use `*.facebook.com` to cover all subdomains.
- **Smart Interception**: The `Enter` key is only intercepted while you are actively composing text with an IME. Regular `Enter` presses still work perfectly.
- **Premium Dark Mode UI**: A sleek, modern configuration interface.
- **Multi-language Support**: Automatically detects and matches your system language (Supports English, Japanese, Korean, Traditional Chinese, and Simplified Chinese).

## 🚀 Installation

This extension is not yet available on the Mac App Store. You can compile and install it yourself using Xcode:

1. Ensure you have [Xcode](https://developer.apple.com/xcode/) installed on your Mac.
2. Clone this repository to your local machine.
3. Open Terminal and navigate to the project directory.
4. Run the following command to convert it into a Safari Extension project:
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode will automatically open the converted project. Click the **Run** button in the top left (or press `Cmd + R`) to build and run it.
6. Open Safari, go to **Settings > Extensions**, and check the box for **IME Guard: Fix my Typing** to enable it.
7. (Optional) If the extension does not appear, you may need to enable the **Develop** menu in Safari's **Advanced** settings, then check **Allow Unsigned Extensions** in the Develop menu.

## 💡 How to Use

1. When you visit a website with the "premature enter" issue (like Facebook).
2. Click the **IME Guard: Fix my Typing** icon in your Safari toolbar.
3. Click **Protect Current Site**. The icon badge will display a green **ON**.
4. You can now use your IME to type and press `Enter` to confirm characters. The message will no longer be sent prematurely!

You can also click the "Settings" button in the popup to manually manage your list of protected domains.

## 🛠 Technical Details

- Built using **Manifest V3**.
- Injects a `Capture Phase` event listener during `document_start` to ensure the IME's Enter key is intercepted (`e.stopImmediatePropagation()`) before frontend frameworks like React can capture the `keydown` event.

## 📄 License

MIT License

## ☕️ Support & Contact

If you find this tool helpful, you can [buy me a coffee on Ko-fi](https://ko-fi.com/mickhuang)!
Feel free to contact me at [www.mickhuang.com](https://www.mickhuang.com).
