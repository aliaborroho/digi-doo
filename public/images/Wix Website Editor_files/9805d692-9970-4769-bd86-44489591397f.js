var appIdPattern = /appId=([0-9a-f-]{36})/;
var appMarketItemId = '47f00d3e-78ae-4bd6-9c2f-4ddf0e9c42f4';
var appIdMatches = document.location.href.match(appIdPattern);
var homePageId = '58406e7a-1ad0-4105-8e37-c053b529f9d8';
var mobileHomePageId = 'f8b24a99-cefd-4c55-adda-aa66ec643259';

$(document).on('widget.ready', function (e, translateFunc) {
  // for home page
  $('body .header').prepend('<div class="wix-home"><div class="home-image"></div><div class="home-head-text"><div class="home-title">' + translateFunc('wix.title') + '</div><div class="home-slogan">' + translateFunc('wix.slogan') + '</div></div></div>');
  // for mobile home
  $('body .header').prepend('<div class="wix-home-mobile"><div class="home-image"></div><div class="home-head-text"><div class="home-title">' + translateFunc('wix.mobile.title') + '</div><div class="home-slogan">' + translateFunc('wix.mobile.slogan') + '</div></div></div>');
  // custom header
  $('body .header').before('<div class="wix-header header"><div class="wix-back"></div><div class="wix-title">' + translateFunc('wix.title') + '</div></div>');

  // block the outer scroll events
  $('.content').on('DOMMouseScroll mousewheel', function(ev) {
        var $this = $(this),
            scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = $this.height(),
            delta = ev.originalEvent.wheelDelta,
            up = delta > 0;
    
        var prevent = function() {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }
        
        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            $this.scrollTop(scrollHeight);
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            $this.scrollTop(0);
            return prevent();
        }
    }); 
});

$(document).on('widget.content.load', function (e, elem) {
    var hasBack = $('.header .back').is(':visible');
     //$('.wix-header.header').toggleClass('no-back', !hasBack)
    
    //code for app market
    var itemId = $('body').attr('data-item-id');
    var $elem = $(elem);
    var $coverElem = $elem.find('img[alt="cover"], iframe[src*="cover=true"]');
    if ($coverElem.length) {
        $coverElem.addClass('cover-image');
        $('.item-content-main').addClass('has-cover-image');
    }
  
    if (itemId === appMarketItemId) {
        var appInfoUrl = '//apps-list.apps.wixapps.net/apps';
        if(appIdMatches)  {
            var appId = appIdMatches[1];
            appInfoUrl += '/' + appId + '?source=answers';
        }
        $('.content .container')
            .replaceWith('<div class="app-info-container"><iframe src="' + appInfoUrl + ' "></iframe></div>');
    }
    
    if (itemId === homePageId || itemId === mobileHomePageId) {

    }
});

// BI EVENT
$(document).ready(function () {

  var queuedEventUrl = window.sessionStorage.getItem('queuedEvent');
  if (queuedEventUrl) {
    _callBI(queuedEventUrl);
    window.sessionStorage.removeItem('queuedEvent');
  }

  $(document).on('answers.widget.sdk', function (e, eventType, data) {
    var sdk = window.answersSdk;
    switch (eventType) {
      case sdk.eventTypes.contentLoad:
        _logEvent(531, {
          item_url: window.location.href,
          item_name: $('h1').text()
        });
        break;
       case sdk.eventTypes.itemNotFound:
        _logEvent(531, {
          item_url: '404_' + window.location.href
        });
        break;
      case sdk.eventTypes.search:
        _logEvent(520, {
          question: data.question,
          first_answer: _getAnswer(data.answers, 1),
          source_url: window.location.href,
          has_related:!!data.hasRelated,
          action_date: data.realTime.toISOString()
        });
        break;
      case sdk.eventTypes.searchAnswerClick:
        _logEvent(521, {
          question: data.question,
          answer: data.answer,
          order: data.order,
          action_date: new Date().toISOString(),
          item_url: data.url,
          is_related: !!data.isFromRelated,
          has_related: !!data.hasRelated,
          source_url: window.location.href
        });
        break;
      case sdk.eventTypes.searchNoAnswer:
        _logEvent(537, {
          question: data.question,
          source_url: window.location.href
        });
        break;
      case sdk.eventTypes.itemRated:
        var eventId = 501;
        switch (data.classification) {
          case sdk.Classifications.ARTICLE:
            eventId = 501;
            break;
          case sdk.Classifications.FEATURE_REQUEST:
            eventId = 502;
            break;
          case sdk.Classifications.KNOWN_ISSUE:
            eventId = 503;
            break;
        }
        _logEvent(eventId, {
          thumbs_up: data.vote,
          item_name: data.title,
          item_url: window.location.href,
          category: data.category
        });
        break;
    }
  });

  function _getAnswer(answers, order) {
    if (answers && answers.length >= order) {
      return answers[order - 1].title || answers[order - 1].content.title;
    }
    return null;
  }

  function _logEvent(eventId, eventData, stack) {
    var query = [];
    query.push('evid=' + eventId);
    query.push('src=4');
    query.push('lang=' + window.answersSdk.lang);
    query.push('source_name=' + 'widget_' +  window.answersSdk.id);
    query.push('_=' + new Date().getTime());

    if (eventData) {
      $.each(eventData, function (key, value) {
        query.push(key + '=' + encodeURIComponent(value));
      });
    }

    var url = window.location.protocol + ((window.location.host.indexOf('.wix.com') == -1) ? '//frog.wixpress.com/ans_bi' : '//frog.wix.com/ans_bi') + '?' + query.join('&');
    if (stack) {
      window.sessionStorage.setItem('queuedEvent', url);
    } else {
      _callBI(url);
    }
  }

  function _callBI(url) {
    try {
      var image = new Image();
      image.src = url;
    } catch (e) {
      //So what..
    }
  }
 
});

$(document).ready(function () {
angular.module('answersWidgetApp')
    .run(function($translate, LANG) {
        $translate.uses(LANG);
    });
});

