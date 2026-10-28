/*
 * works.js：入口頁的成果卡片清單（只放資料，不放版面）
 *
 * 新增成果：複製下面任何一筆 { ... }，貼在最後一筆後面，只改內容。
 * 注意：每一筆結尾要有逗號；文字要放在半形雙引號 "" 裡面。
 *
 * 欄位說明：
 *   icon   卡片左上角的 emoji
 *   badge  右上角的小標籤（簡短）
 *   title  卡片標題
 *   desc   一兩句說明
 *   tags   底部左側的簡短重點，用 • 分隔
 *   cta    底部右側的按鈕文字，例如「開啟工具」「探索指南」
 *   url    成果的公開網址，必須以 https:// 開頭
 *   theme  配色，可用：blue、amber、emerald、violet
 *
 * 還沒有網址的成果，先不要放進來。
 * 網址不是 https:// 開頭的項目，網頁會自動略過，不會顯示。
 */
window.WORKS = [
  {
    icon: "📱",
    badge: "課堂學生專用",
    title: "iPad 程式碼極速預覽神器",
    desc: "在 Google Canvas 寫完程式，一鍵貼上即玩！免手指拉放大鏡反白，解決學生 iPad 複製卡死的課堂救星。",
    tags: "貼上即玩 • 音效全螢幕支援",
    cta: "開啟工具",
    url: "https://andytsai600-rgb.github.io/ipad-preview/",
    theme: "blue"
  },
  {
    icon: "🚀",
    badge: "教師算力外掛",
    title: "Google Colab 算力百寶箱",
    desc: "告別 Token 焦慮！借 Google 雲端免費 GPU 算力，1 小時研習錄音 3 分鐘轉字幕，輕鬆做 3Blue1Brown 級數學動畫。",
    tags: "0 Token 成本 • 免費雲端 GPU",
    cta: "探索指南",
    url: "https://andytsai600-rgb.github.io/colab-portal/",
    theme: "amber"
  }
];
