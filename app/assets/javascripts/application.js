// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() { 
  
  // Setup the player to autoplay the next track
  var a = audiojs.createAll({
    trackEnded: function() {
      var next = $('ol li.playing').next();
      if (!next.length) next = $('ol li').first();
      next.addClass('playing').siblings().removeClass('playing');
      audio.load($('a', next).attr('data-src'));
      audio.play();
    }
  });
  
  // Load in the first track
  var audio = a[0];
      first = $('ol a').attr('data-src');
  $('ol li').first().addClass('playing');
  audio.load(first);

  // Load in a track on click
  $('ol li').click(function(e) {
    e.preventDefault();
    $(this).addClass('playing').siblings().removeClass('playing');
    audio.load($('a', this).attr('data-src'));
    audio.play();
  });

});