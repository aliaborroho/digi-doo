import Ember from 'ember';

export default Ember.Route.extend({
'use strict':

function parallax() {
  var mainLayers = document.getElementsByClassName('js-parallax-bgLayer');

  if (mainLayers.length <= 1) {

    return;
  }

  var data = {
    scrollYPosition: 0,
    halfWindowHeight: window.innerHeight * 0.5,
    ticking: false
  };

  function onScroll() {
    data.scrollYPosition = window.pageYOffset;
    data.translationY = data.scrollYPosition / 2;
    requestTick();
  }

  function requestTick() {
    if (!data.ticking) {
      requestAnimationFrame(update);
    }
    data.ticking = true;
  }

  //-- Animation callback
  function update() {
    var layer = null;
    var layerTop = [];
    var layerOffset = 0;

    //-- First loop will do all the reflows
    //-- Chose a for loop because of better performance
    for (var i = 0; i < mainLayers.length; i++) {
      layer = mainLayers[i];
      layerTop[i] = layer.offsetTop;
    }

    //-- Second loop goes through the layers
    //-- and translates the bg layer
    for (var i = 0; i < mainLayers.length; i++) {
      var conditionOne = data.scrollYPosition > layerTop[i] - data.halfWindowHeight;
      var conditionTwo = data.scrollYPosition < data.halfWindowHeight * 2 * (i + 1);
      layer = mainLayers[i];

      if (conditionOne && conditionTwo) {
        layer.style.transform = 'translate3d(0px, ' + data.translationY + 'px, 0px)';
      }
    }
    data.ticking = false;
  }
  window.addEventListener('scroll', onScroll, false);
}

});
