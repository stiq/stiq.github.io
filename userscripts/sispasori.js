// ==UserScript==
// @name         sispasori
// @namespace    https://stiq.github.io/
// @version      0.1
// @description  when you touch ic card with pasori, it fixes display information.
// @author       stiq
// @match        https://attendance.moneyforward.com/time_recorder_mode/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @include      https://use.fontawesome.com/releases/v5.12.1/css/all.css
// ==/UserScript==

(function() {
    // 'use strict';

  var observer = new MutationObserver(function(mutations) {
    console.log("change!!!!");
    if($('.attendance-notification').hasClass('is-warning')) {
      console.log("hide");
      $('.is-warning').delay(3000).fadeOut("slow");
    }
    alert('Attributes changed!');
  });
  var targetOneBrother = document.querySelector('.attendance-main-contents-inner');
  var target = targetOneBrother.previousElementSibling;

  observer.observe(target, {
    attributes: true,
    childList: true,
    characterData: true
  });

  console.log(targetOneBrother);
  console.log(target);

    $('a[data-event_name="start_break"]').hide();
    $('a[data-event_name="end_break"]').hide();

   $(document.body).append('<button id="page-reload-button" style="position:fixed;top:70%;right:0%;height:5%;width:5%;"><i class="fas fa-redo-alt"></i></button>');
   $(document.body).append('<button id="page-page-up-button" style="position:fixed;top:80%;right:0%;height:5%;width:5%;"><i class="far fa-arrow-alt-circle-up"></i></button>');
   $(document.body).append('<button id="page-page-down-button" style="position:fixed;top:90%;right:0%;height:5%;width:5%;"><i class="far fa-arrow-alt-circle-down"></i></button>');
   $('#page-reload-button').css('z-index', 999);
   $('#page-page-up-button').css('z-index', 999);
   $('#page-page-down-button').css('z-index', 999);

   console.log($(document).height());
   console.log($(window).height());
   console.log($("body").height());
   console.log($(document).innerHeight());
   console.log($(window).innerHeight());
   console.log(window.innerHeight);
   console.log(document.innerHeight);

  $('#page-reload-button').click(function(){
    window.location.reload(true);
  });
  $('#page-page-up-button').click(function(){
    console.log('down');
    console.log($(window).scrollTop());
    $("html, body").animate({ scrollTop: $(window).scrollTop() - (window.innerHeight-100) }, 800);
  });
  $('#page-page-down-button').click(function(){
    console.log('down');
    console.log($(window).scrollTop());
    $("html, body").animate({ scrollTop: $(window).scrollTop() + (window.innerHeight-100) }, 800);
  });

})();
