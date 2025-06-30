$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
    $('#header').toggleClass('open');
  });

  // メニューが表示されている時にマスクをクリックした場合
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  /*=================================================
  スムーススクロール + メニュー自動閉じ（fadeOut風）
  ===================================================*/
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;

    // スクロール
    $("html, body").animate({scrollTop: position}, 600, "swing");

    // メニューが開いていたら、閉じる処理（フェード風）
    if ($('#header').hasClass('open')) {
      // フェードアウトのようにCSSで徐々にopacityを下げたい場合
      $('#header').fadeTo(300, 0, function() {
        $(this).removeClass('open').css('opacity', 1); // 元に戻す
      });
    }

    return false;
  });
});
