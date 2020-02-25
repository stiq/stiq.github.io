// ==UserScript==
// @name         sispasori
// @namespace    https://stiq.github.io/
// @version      0.1.2
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
  // css読み込み
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://stiq.github.io/userscripts/sispasori.css') );

  // ICカードがタッチされたときの通知を処理
  var observer = new MutationObserver(function(mutations) {
    if($('.attendance-notification').hasClass('is-warning')) {
      $('.is-warning').delay(3000).fadeOut("slow");
    }
  });
  var targetOneBrother = document.querySelector('.attendance-main-contents-inner');
  var target = targetOneBrother.previousElementSibling;
  observer.observe(target, {
    attributes: true,
    childList: true,
    characterData: true
  });

  // 休憩打刻を非表示
  $('a[data-event_name="start_break"]').hide();
  $('a[data-event_name="end_break"]').hide();

  // 画面右下にボタンを表示させる
  $(document.body).append('<button id="page-reload-button" class="page-buttons"><i class="fas fa-redo-alt"></i></button>');
  $(document.body).append('<button id="page-page-up-button" class="page-buttons"><i class="far fa-arrow-alt-circle-up"></i></button>');
  $(document.body).append('<button id="page-page-down-button" class="page-buttons"><i class="far fa-arrow-alt-circle-down"></i></button>');
  $('#page-reload-button').css('z-index', 999);
  $('#page-page-up-button').css('z-index', 999);
  $('#page-page-down-button').css('z-index', 999);
  $('#page-reload-button').click(function(){
    window.location.reload(true);
  });
  $('#page-page-up-button').click(function(){
    $("html, body").animate({ scrollTop: $(window).scrollTop() - (window.innerHeight-200) }, 800);
  });
  $('#page-page-down-button').click(function(){
    $("html, body").animate({ scrollTop: $(window).scrollTop() + (window.innerHeight-200) }, 800);
  });

})();
