# IME Guard: Fix my Typing

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

IME Guard: Fix my Typing는 한국어 등 입력기(IME)를 사용하여 문자를 입력하거나 조합할 때 `Enter` 키를 누르면 Facebook, Gemini, Slack, Discord 등에서 메시지가 의도치 않게 전송되어 버리는 WebKit(Safari) 특유의 버그를 방지하는 Safari 확장 프로그램입니다.

## 🌟 주요 기능

- **사용자 지정 허용 목록(Whitelist)**: 이 문제가 발생하는 웹사이트(예: `facebook.com` 또는 `gemini.google.com`)를 자유롭게 추가할 수 있습니다.
- **와일드카드 지원**: `*.facebook.com`과 같이 입력하여 모든 하위 도메인을 포함시킬 수 있습니다.
- **스마트 차단**: IME "조합 중"에 눌린 `Enter` 키만 차단합니다. 평소의 `Enter` 키를 통한 전송은 방해하지 않습니다.
- **다크 모드 UI**: 눈에 편안하고 세련된 모던 설정 화면을 제공합니다.
- **다국어 지원**: 시스템 및 브라우저 언어에 따라 자동으로 전환됩니다 (영어, 일본어, 한국어, 번체 중국어, 간체 중국어 지원).

## 🚀 설치 방법

현재 이 확장 프로그램은 Mac App Store에 등록되어 있지 않습니다. 아래 절차에 따라 Xcode를 사용하여 직접 빌드 및 설치해야 합니다.

1. Mac에 [Xcode](https://developer.apple.com/xcode/)가 설치되어 있는지 확인합니다.
2. 이 저장소를 로컬 컴퓨터로 클론(Clone)합니다.
3. 터미널(Terminal)을 열고 프로젝트 디렉토리로 이동합니다.
4. 다음 명령을 실행하여 Safari 확장 프로그램 프로젝트로 변환합니다.
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode가 자동으로 열립니다. 왼쪽 상단의 **Run** 버튼(또는 `Cmd + R`)을 클릭하여 빌드하고 실행합니다.
6. Safari를 열고 **설정 (Settings) > 확장 프로그램 (Extensions)** 으로 이동하여 "**IME Guard: Fix my Typing**" 체크박스를 선택하여 활성화합니다.
7. (선택 사항) 확장 프로그램이 표시되지 않는 경우 Safari의 **고급 (Advanced)** 설정에서 **메뉴 막대에서 개발자용 메뉴 보기 (Show Develop menu in menu bar)** 를 켠 다음 "개발자용" 메뉴에서 **서명되지 않은 확장 프로그램 허용 (Allow Unsigned Extensions)** 을 체크해야 할 수 있습니다.

## 💡 사용 방법

1. "조합 중 Enter 전송" 문제가 발생하는 사이트(예: Facebook)에 접속합니다.
2. Safari 도구 막대에서 **IME Guard: Fix my Typing** 아이콘을 클릭합니다.
3. "**이 사이트 보호**"를 클릭합니다. 아이콘에 녹색 **ON** 배지가 표시됩니다.
4. 이후 해당 사이트에서 IME를 사용하여 글자를 조합하고 `Enter`를 눌러도 메시지가 의도치 않게 전송되지 않습니다!

팝업 우측 상단의 "설정" 버튼을 클릭하여 보호할 도메인 목록을 수동으로 관리할 수도 있습니다.

## 🛠 기술 세부 정보

- **Manifest V3** 표준을 따릅니다.
- `document_start` 단계에서 `Capture Phase`에 이벤트 리스너를 주입하여 React 등 프론트엔드 프레임워크가 `keydown` 이벤트를 가로채기 전에 IME의 Enter 키 전파를 중단(`e.stopImmediatePropagation()`)합니다.

## 📄 라이선스

MIT License

## ☕️ 지원 및 연락처

이 도구가 유용했다면 [Ko-fi에서 커피를 사주세요](https://ko-fi.com/mickhuang)!
또는 [www.mickhuang.com](https://www.mickhuang.com) 으로 편하게 연락주세요。
