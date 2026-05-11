# IME Guard: Fix my Typing (IME Guard: Fix my Typing)

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

這是一款專為 Safari 瀏覽器設計的擴充功能，主要用來解決在使用繁體中文等輸入法（IME）選字時，按下 `Enter` 鍵會被某些網站（如 Facebook、Gemini 等）誤判為送出訊息的問題。

## 🌟 功能特色

- **自訂白名單**：你可以自由新增會發生這個問題的網站網域（例如 `facebook.com` 或 `gemini.google.com`）。
- **支援萬用字元**：可以輸入 `*.facebook.com` 來涵蓋所有子網域。
- **智慧攔截**：只有在輸入法「選字中」按下 `Enter` 時才會被攔截，平時的 `Enter` 鍵依然可以正常送出訊息。
- **深色模式介面**：提供極具現代感的設定介面，保護眼睛並提升使用體驗。

## 🚀 安裝方式

目前此擴充功能尚未發布至 Mac App Store，您可以透過 Xcode 自行編譯與安裝：

1. 確保您的 Mac 上已經安裝了 [Xcode](https://developer.apple.com/xcode/)。
2. 將此專案複製 (Clone) 到您的本地電腦。
3. 開啟終端機 (Terminal)，切換到專案目錄。
4. 執行以下指令將其轉換為 Safari 擴充功能專案：
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode 會自動開啟轉換後的專案。點擊左上角的 **Run** 按鈕 (或按下 `Cmd + R`) 編譯並執行。
6. 開啟 Safari，前往 **設定 (Settings) > 擴充功能 (Extensions)**，勾選「**IME Guard: Fix my Typing**」來啟用它。
7. （可選）如果擴充功能沒有顯示，您可能需要先在 Safari 的**進階 (Advanced)** 設定中開啟**顯示「開發」選單 (Show Develop menu in menu bar)**，然後在「開發」選單中勾選 **允許未簽署的擴充功能 (Allow Unsigned Extensions)**。

## 💡 使用說明

1. 當你瀏覽到會發生「按 Enter 提早送出」問題的網站時（例如 Facebook）。
2. 點擊 Safari 工具列上的「IME Guard: Fix my Typing」圖示。
3. 點擊「**保護此網站**」。圖示會顯示綠色的 **ON** 狀態。
4. 之後在該網站使用輸入法選字時，按下 `Enter` 就只會確認文字，不會再把半成品的句子發送出去了！

你也可以點擊彈出視窗右上角的「設定」按鈕，進入管理頁面來手動新增或移除要保護的網域。

## 🛠 技術細節

- 採用 **Manifest V3** 標準。
- 透過在 `document_start` 階段注入 `Capture Phase` (捕獲階段) 的 Event Listener，確保在 React 等前端框架攔截 `keydown` 事件之前，就先將 IME 的 Enter 鍵擋下 (`e.stopImmediatePropagation()`)。

## 📄 授權條款

MIT License

## ☕️ 支持與聯繫

如果你覺得這個工具有幫助，歡迎在 [Ko-fi 請我喝杯咖啡](https://ko-fi.com/mickhuang)！
或者可以到 [www.mickhuang.com](https://www.mickhuang.com) 跟我聯繫。
