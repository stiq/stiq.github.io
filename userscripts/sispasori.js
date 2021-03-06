// ==UserScript==
// @name         sispasori
// @namespace    https://stiq.github.io/
// @version      2.0.0
// @description  when you touch ic card with pasori, it fixes display information.
// @author       stiq
// @match        https://attendance.moneyforward.com/time_recorder_mode/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @include      https://use.fontawesome.com/releases/v5.12.1/css/all.css
// @downloadURL    https://stiq.github.io/userscripts/sispasori.js
// @updateURL    https://stiq.github.io/userscripts/sispasori.js
// ==/UserScript==

(function() {
  'use strict';
  // css読み込み => 不要になった
  // $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://stiq.github.io/userscripts/sispasori.css') );

  // ICカードがタッチされたときの通知を処理
  // var observer = new MutationObserver(function(mutations) {
  //   if($('.attendance-notification').hasClass('is-warning')) {
  //     $('.is-warning').delay(3000).fadeOut("slow");
  //   }
  // });
  // var targetOneBrother = document.querySelector('.time-recoder-mode-container');
  // var target = targetOneBrother.previousElementSibling;
  // observer.observe(target, {
  //   attributes: true,
  //   childList: true,
  //   characterData: true
  // });

  // 時刻表示を監視して、打刻種類を指定時間で自動切り替え
  var observerTimeRecoder = new MutationObserver(function(mutations) {
    // 現在の時刻
    var nowRecoderTime = $('.time-info').text().trim();
    // 退勤をクリック
    var clockOutTimes = ['16:00:00', '17:00:00', '18:00:00'];
    if(clockOutTimes.indexOf(nowRecoderTime)>=0){
      $('.attendance-card-time-stamp-clock-out')[0].click();
    }
    // 出勤をクリック
    var clockInTimes = ['6:00:00', '9:00:00', '10:00:00'];
    if(clockInTimes.indexOf(nowRecoderTime)>=0){
      $('.attendance-card-time-stamp-clock-in')[0].click();
    }
  });
  var targetTimeRecoder = document.querySelector('.ic-stamp-container');
  observerTimeRecoder.observe(targetTimeRecoder, {
    attributes: false,
    childList: false,
    characterData: true,
    subtree: true
  });

  // 休憩打刻を非表示
  // $('a[data-event_name="start_break"]').hide();
  // $('a[data-event_name="end_break"]').hide();

  // 画面右下にボタンを表示させる
  // $(document.body).append('<button id="page-reload-button" class="page-buttons"><i class="fas fa-redo-alt"></i></button>');
  // $(document.body).append('<button id="page-page-up-button" class="page-buttons"><i class="far fa-arrow-alt-circle-up"></i></button>');
  // $(document.body).append('<button id="page-page-down-button" class="page-buttons"><i class="far fa-arrow-alt-circle-down"></i></button>');
  // $('#page-reload-button').css('z-index', 999);
  // $('#page-page-up-button').css('z-index', 999);
  // $('#page-page-down-button').css('z-index', 999);
  // $('#page-reload-button').click(function(){
  //   window.location.reload(true);
  // });
  // $('#page-page-up-button').click(function(){
  //   $("html, body").animate({ scrollTop: $(window).scrollTop() - (window.innerHeight-200) }, 800);
  // });
  // $('#page-page-down-button').click(function(){
  //   $("html, body").animate({ scrollTop: $(window).scrollTop() + (window.innerHeight-200) }, 800);
  // });

})();
