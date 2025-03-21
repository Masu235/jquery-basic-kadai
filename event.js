// HTMLの読み込みが完了したとき
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// スクロールしたとき
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
