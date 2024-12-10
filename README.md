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
<<<<<<< HEAD
- 順便用了之前看到的[使用 emoji 來當網站 Favicon](https://css-tricks.com/emoji-as-a-favicon/)
=======
- 順便用了之前看到的[使用 emoji 來當網站 Favicon](https://css-tricks.com/emoji-as-a-favicon/)
- Main 改成了 Nav，首頁就是九九乘法表

#### 關於 route
- 想把首頁改成完成的列表，所以會處理到 route 的東西，所以來記錄一下截止目前為止 Svelte 的 route 要如何設定
- 目前 Svelte 沒有內建 route 管理，但是 SvelteKit 裡面有（使用 `+page`)
- 如果不用 SvelteKit 的話，那就要使用 [svelte-routing](https://github.com/jpcutshall/svelte5-router) 這個套件來處理
- 當然用純的也可以，只是需要做的前置作業就會比較多一點
  - 建立要使用的 `.html` 檔案，譬如要連結到 `A.html` 就建立一個對應的，放的位置無所謂，但我自己會放到 pages
  - 在 `A.html` 裡面加入要使用的 Svelte component
  - 在 `index.html` 裡面建立 `<a>` 到 `A.html`
  - main.js 也會需要做對應的修改，比較簡單的方式是將會使用的到的 component 都 import 到這個檔案，然後根據不同的頁面寫不同的參數
  - 或是用一個簡單的判斷也可以
  - 不過後來想想，比較符合 Svelte 的做法應該是寫一個 component，放入 index.html 裡面的內容，然後用這個 component 來處理
- 後來選擇的處理方式比較土炮一點，就是不同的 html 搭配一個 js，可能之後會再用 SvelteKit 設定 route，但現在就先不花太多時間在這個上面了
- 主要是當時想的方法行不通，主要是 Svelte 的架構，由於一個 html 一定會使用一個 js 來引入，所以如果有第二個 html 就一定需要一個對應的 js，除非是使用套件或是改用 SvelteKit，不然這應該是目前唯一解
>>>>>>> dev
