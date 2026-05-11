# IME Guard: Fix my Typing

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

这是一款专为 Safari 浏览器设计的扩展功能，主要用来解决在使用输入法（如简体中文、日语、韩语等）选字时，按下 `Enter` 键会被某些网站（如 Facebook、Gemini、Slack、Discord 等）误判为发送消息的问题。

## 🌟 功能特色

- **自定义白名单**：你可以自由添加会发生这个问题的网站域名（例如 `facebook.com` 或 `gemini.google.com`）。
- **支持通配符**：可以输入 `*.facebook.com` 来涵盖所有子域名。
- **智能拦截**：只有在输入法“选字中”按下 `Enter` 时才会被拦截，平时的 `Enter` 键依然可以正常发送消息。
- **深色模式界面**：提供极具现代感的设置界面，保护眼睛并提升使用体验。
- **多语言支持**：自动根据系统和浏览器语言切换（支持英文、日文、韩文、繁体中文和简体中文）。

## 🚀 安装方式

目前此扩展功能尚未发布至 Mac App Store，您可以透过 Xcode 自行编译与安装：

1. 确保您的 Mac 上已经安装了 [Xcode](https://developer.apple.com/xcode/)。
2. 将此项目克隆 (Clone) 到您的本地电脑。
3. 打开终端 (Terminal)，切换到项目目录。
4. 运行以下命令将其转换为 Safari 扩展项目：
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode 会自动打开转换后的项目。点击左上角的 **Run** 按钮 (或按下 `Cmd + R`) 编译并运行。
6. 打开 Safari，前往 **设置 (Settings) > 扩展 (Extensions)**，勾选“**IME Guard: Fix my Typing**”来启用它。
7. （可选）如果扩展功能没有显示，您可能需要先在 Safari 的**高级 (Advanced)** 设置中开启**显示“开发”菜单 (Show Develop menu in menu bar)**，然后在“开发”菜单中勾选 **允许未签名的扩展 (Allow Unsigned Extensions)**。

## 💡 使用说明

1. 当你浏览到会发生“按 Enter 提早发送”问题的网站时（例如 Facebook）。
2. 点击 Safari 工具栏上的“IME Guard: Fix my Typing”图标。
3. 点击“**保护此网站**”。图标会显示绿色的 **ON** 状态。
4. 之后在该网站使用输入法选字时，按下 `Enter` 就只会确认文字，不会再把半成品的句子发送出去了！

你也可以点击弹出窗口右上角的“设置”按钮，进入管理页面来手动添加或移除要保护的域名。

## 🛠 技术细节

- 采用 **Manifest V3** 标准。
- 通过在 `document_start` 阶段注入 `Capture Phase` (捕获阶段) 的 Event Listener，确保在 React 等前端框架拦截 `keydown` 事件之前，就先将 IME 的 Enter 键挡下 (`e.stopImmediatePropagation()`)。

## 📄 授权条款

MIT License

## ☕️ 支持与联系

如果你觉得这个工具有帮助，欢迎在 [Ko-fi 请我喝杯咖啡](https://ko-fi.com/mickhuang)！
或者可以到 [www.mickhuang.com](https://www.mickhuang.com) 跟我联系。
