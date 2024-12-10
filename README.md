# JavaScript 題目篇 - 新手 JS 地下城

## Journal

- 想要熟練的唯一方法，就是大量的練習。
- 所以這個地方就用來紀錄練習以及解題的過程，讓自己可以累積更多的經驗
- 這次使用之前一直想嘗試的新東西，譬如使用 `display:grid` 來當成主要的排版方式，以及使用 SCSS 來撰寫 style，然後使用 vite 當成打包工具

### 241208
- HTML 以及 CSS 都跟原本的架構相同，只不過改用 Svelte 來實作
- `{#each}` 的邏輯完成，但是現在卡在要如何讓樣式跟設計稿一樣
- 試了不少的方式，最終還是用 `display: flex` 做出來差不多的效果，但是還有地方需要微調，但大的架構應該不會再有什麼很大的變動
- 結果還是用了一個最簡單的 `space-between` 就解決了排版問題

### 241209：九九乘法表的邏輯是什麼？
- 這個可以好好的紀錄一下，為何程式碼最終會是現在這個樣子
- 首先重構做了這幾件事情：
    1. 一個是將原本重複 9 次的 `card-body` 縮減到一次，
    2. 原本的 card-title 使用 `arr.slice(1)` 來產生，`slice()` 的用途是**指定陣列裡面開始處理的位置**，由於裡面寫了 1，所以會從 2 開始處理（因為 0 被跳過）
    3. 增加一個**函式表達式**用來產生 `card-content` 的內容，
    4. 2 跟 3 都搭配 `{#each}` 來產生出重複使用的內容
- 我也是後來才發現原來 `{#each}` 裡面還可以再包 `{#each}`

### 241210

- 終於完成了第一個卡片的裝飾
- 本來的想法是用 `board` 來做，但是沒有辦法只出現上下，所以作罷
- 還是用純手工來做，之前是我想太多了...
- 順便用了之前看到的[使用 emoji 來當網站 Favicon](https://css-tricks.com/emoji-as-a-favicon/)