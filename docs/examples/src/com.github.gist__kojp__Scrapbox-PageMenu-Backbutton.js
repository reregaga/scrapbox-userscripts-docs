/*
Source:
https://gist.github.com/kojp/b8e4b0775955045e04e3070945eaaba5

Note:

    Scrapboxのページ右上にある「PageMenu」に、前のページへ戻るボタンを設置する。使い方の説明は [https://bit.ly/3g3MN6R](https://bit.ly/3g3MN6R) にあります。
  
*/

code:script.js
  scrapbox.PageMenu.addMenu({
      title: '戻る', // titleは変更可能。
      image:'', // 'と'の間にアイコンのURLを記入する。空のままでは動作しない。
      onClick: () => {
      	window.history.back(); // backをforwardに変えると「進む」ボタンになる。
      }
  })
