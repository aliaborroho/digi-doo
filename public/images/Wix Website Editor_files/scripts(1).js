"use strict";

angular.module("answersWidgetAppInternal", [ "answersContentCore" ]);

angular.module("answersWidgetApp", [ "answersWidgetAppInternal", "answersWidgetTranslations", "ngSanitize", "wixAngular", "ngAnimate", "ui.router", "anim-in-out", "toolbox", "answersSdk", "answersContentEditorViewer" ]).config([ "$stateProvider", "$urlRouterProvider", "$translateProvider", "LANG", function($stateProvider, $urlRouterProvider, $translateProvider, LANG) {
    $translateProvider.preferredLanguage(LANG);
    $urlRouterProvider.otherwise("/main/view");
    $stateProvider.state("main", {
        url: "/main",
        templateUrl: "/views/main.tpl.html",
        controller: "MainController",
        controllerAs: "main"
    }).state("main.item-view", {
        url: "/view?itemId",
        templateUrl: "/views/item-view.tpl.html",
        controller: "WidgetController",
        controllerAs: "vm",
        resolve: {
            ItemId: [ "$stateParams", function($stateParams) {
                var itemId = $stateParams.itemId;
                $("body").attr("data-item-id", itemId);
                return itemId;
            } ]
        }
    }).state("main.404", {
        url: "/404",
        templateUrl: "/views/404.tpl.html",
        controller: [ "HistoryService", function(HistoryService) {
            HistoryService.popLastHistory();
        } ]
    }).state("main.results", {
        url: "/results?text",
        templateUrl: "/views/search-results-view.tpl.html",
        controller: "SearchResultsController",
        controllerAs: "vm",
        resolve: {
            SearchText: [ "$stateParams", function($stateParams) {
                $("body").removeAttr("data-item-id");
                return decodeURIComponent($stateParams.text);
            } ]
        }
    });
} ]);

angular.module("answersWidgetAppInternal").constant("Classifications", {
    WALK_THROUGH: "WALK_THROUGH",
    ARTICLE: "ARTICLE",
    FEATURE_REQUEST: "FEATURE_REQUEST",
    KNOWN_ISSUE: "KNOWN_ISSUE",
    VIDEO: "VIDEO"
});

"use strict";

angular.module("answersWidgetAppInternal").config([ "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $httpProvider.defaults.transformRequest = [ function(data) {
        var param = function(obj) {
            var query = "";
            var name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    if (value.length === 0) {
                        subValue = "";
                        fullSubName = name;
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + "&";
                    } else {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name;
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + "&";
                        }
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + "[" + subName + "]";
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + "&";
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
                }
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        return angular.isObject(data) && String(data) !== "[object File]" ? param(data) : data;
    } ];
} ]);

"use strict";

angular.module("toolbox", []).filter("htmlToText", function() {
    return function(html) {
        return html && html.replace ? html.replace(/<[^>]*>/g, "").replace(/&apos;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"') : html;
    };
}).directive("hideAndShowLoader", function() {
    return {
        scope: {
            hideAndShowLoader: "=",
            size: "@"
        },
        template: "<div>" + '<div class="text-center text-muted" ng-show="hideAndShowLoader" style="text-align: center;padding-top: 150px;">' + '<div class="loading-bubbles"></div>' + "</div>" + '<div ng-transclude class="hide-and-show-loader-content" ng-hide="hideAndShowLoader"></div> ' + "</div>",
        transclude: true,
        link: function(scope, elem, attrs) {
            if (attrs.adaptHeight !== undefined) {
                var height = elem.find(".hide-and-show-loader-content").height();
                elem.height(height);
                elem.css("overflow", "hidden");
            }
        }
    };
});

"use strict";

angular.module("answersWidgetAppInternal").factory("ItemService", [ "API_URL", "$http", "$q", "$window", "TENANT_ID", "LANG", "PREVIEW", "DEFAULT_LANG", function(API_URL, $http, $q, $window, TENANT_ID, LANG, PREVIEW, DEFAULT_LANG) {
    var uri = API_URL + (PREVIEW ? "/kb/getPreviewItem" : "/kbSearch/getItem");
    return {
        getItemById: function(itemId) {
            var config = {
                cache: true,
                params: {
                    itemId: itemId || "",
                    tenantId: TENANT_ID,
                    lang: LANG,
                    accept: "json"
                }
            };
            if (itemId) {
                return $http.get(uri, config).catch(function(err) {
                    if (LANG !== DEFAULT_LANG) {
                        config.params.lang = DEFAULT_LANG;
                        return $http.get(uri, config);
                    } else {
                        return $q(function(res, rej) {
                            rej(err);
                        });
                    }
                });
            }
        }
    };
} ]);

"use strict";

angular.module("answersWidgetAppInternal").factory("SearchService", [ "API_URL", "$http", "TENANT_ID", "LANG", "$q", "$window", function(API_URL, $http, TENANT_ID, LANG, $q, $window) {
    var defaultOptions = {};
    var isSearchEnabled = false;
    var lastContextItem = null;
    return {
        getContextItem: function() {
            return lastContextItem;
        },
        setSearchOptions: function(newOptions) {
            defaultOptions = newOptions || {};
        },
        setIsSearchEnabled: function(isEnabled) {
            isSearchEnabled = isEnabled === true;
        },
        getIsSearchEnabled: function() {
            return isSearchEnabled;
        },
        showSearch: function() {
            return defaultOptions.enableSearch;
        },
        setContextItem: function(item) {
            lastContextItem = angular.copy(item);
        },
        search: function(text) {
            var baseDefaultOpts = {
                classifications: [ "ARTICLE" ],
                text: text,
                pageSize: 20,
                searchableByUser: true,
                spellcheck: true,
                tenantId: TENANT_ID,
                lang: LANG,
                categoryIds: [],
                excludedCategoryIds: []
            };
            var baseSearchParams = angular.extend({}, baseDefaultOpts, defaultOptions);
            var contextCategoryId = lastContextItem && lastContextItem.category && lastContextItem.category.id;
            var requestParams = [ baseSearchParams ];
            if (contextCategoryId) {
                var searchWithCategory = angular.copy(baseSearchParams);
                searchWithCategory.categoryIds.push(contextCategoryId);
                searchWithCategory.mustMatchText = text;
                searchWithCategory.text = null;
                searchWithCategory.searchAllTextualContent = $window.location.href.indexOf("searchAllTextualContent=true") !== -1;
                requestParams.push(searchWithCategory);
            }
            var pendingRequests = requestParams.map(function(params) {
                return $http.post(API_URL + "/kbSearch/search", params);
            });
            return $q.all(pendingRequests).then(function(responses) {
                var regularResponse = responses[0];
                var relatedResponse = responses[1];
                var mainResponse = {
                    related: relatedResponse && relatedResponse.data.items || [],
                    regular: regularResponse && regularResponse.data.items || [],
                    itemsCount: 0
                };
                responses.forEach(function(response) {
                    mainResponse.itemsCount += response.data.itemsCount;
                });
                mainResponse.related = mainResponse.related.slice(0, 3);
                var relatedIdsForFiltering = mainResponse.related.map(function(item) {
                    return item.itemId;
                });
                mainResponse.regular = mainResponse.regular.filter(function(item) {
                    return relatedIdsForFiltering.indexOf(item.itemId) === -1;
                });
                mainResponse.regular = mainResponse.regular.slice(0, 15);
                return mainResponse;
            });
        },
        getRelatedItemsByType: function(itemId) {
            var relatedParams = {
                itemId: itemId,
                tenantId: TENANT_ID,
                lang: LANG
            };
            return $http.post(API_URL + "/kbSearch/getRelatedKBItems", angular.extend({}, relatedParams, defaultOptions));
        }
    };
} ]);

"use strict";

angular.module("answersSdk", []).factory("Sdk", [ "$window", "$timeout", "Classifications", "LANG", "WIDGET_ID", "$filter", function($window, $timeout, Classifications, LANG, WIDGET_ID, $filter) {
    var eventName = "answers.widget.sdk", safetyTimeout = 0, searchTimer = null, events = {
        ready: "widget.ready",
        search: "answers.search",
        contentLoad: "widget.content.load",
        searchAnswerClick: "answers.searchAnswerClick",
        searchNoAnswer: "answer.searchNoAnswer",
        itemRated: "itemRated",
        stepByStepStepChange: "stepByStep.stepChange",
        itemNotFound: "widget.itemNotFound",
        kbItemLoad: "kbItemLoad"
    }, $document = $(document);
    function triggerEvent(eventType, data) {
        $timeout(function() {
            $document.trigger(eventName, [ eventType, data ]);
        }, safetyTimeout);
    }
    $window.answersSdk = {
        eventTypes: events,
        Classifications: Classifications,
        lang: LANG,
        id: WIDGET_ID
    };
    return {
        events: events,
        triggerWidgetReady: function() {
            $timeout(function() {
                $document.trigger(events.ready, [ $filter("translate") ]);
                triggerEvent(events.ready, {});
            }, safetyTimeout);
        },
        htmlContentLoad: function(elem) {
            $timeout(function() {
                $document.trigger(events.contentLoad, elem);
                triggerEvent(events.contentLoad, {});
            }, safetyTimeout);
        },
        triggerSearch: function(text, answers, hasRelated) {
            $timeout.cancel(searchTimer);
            var realTime = new Date();
            searchTimer = $timeout(function() {
                triggerEvent(events.search, {
                    question: text,
                    answers: answers,
                    hasRelated: hasRelated,
                    realTime: realTime
                });
            }, 4e3);
        },
        kbItemLoad: function(kbItem) {
            triggerEvent(events.kbItemLoad, {
                title: kbItem.content.title
            });
        },
        triggerSearchAnswerClick: function(text, answer, index, itemUrl, isFromRelated, hasRelated) {
            var data = {
                question: text,
                answer: answer,
                order: index,
                url: itemUrl,
                isFromRelated: isFromRelated,
                hasRelated: hasRelated
            };
            triggerEvent(events.searchAnswerClick, data);
        },
        triggerSearchNoAnswer: function(text) {
            triggerEvent(events.searchNoAnswer, {
                question: text
            });
        },
        itemRated: function(vote, category, title, classification, itemUrl) {
            var data = {
                vote: vote,
                category: category,
                title: title,
                classification: classification,
                url: itemUrl
            };
            triggerEvent(events.itemRated, data);
        },
        triggerStepByStepStepChange: function(id, stepsData) {
            $timeout(function() {
                $document.trigger(events.stepByStepStepChange, {
                    id: id,
                    stepsData: stepsData
                });
            }, safetyTimeout);
        },
        triggerItemNotFound: function(itemId) {
            triggerEvent(events.itemNotFound, {
                itemId: itemId
            });
        }
    };
} ]);

"use strict";

angular.module("answersWidgetAppInternal").factory("EventLogger", [ "$http", "WIDGET_ID", "API_URL", function($http, WIDGET_ID, API_URL) {
    function logEvent(data) {
        var widgetData = {
            sourceId: WIDGET_ID
        };
        $http.post(API_URL + "/analytics/log", angular.extend({}, data, widgetData));
    }
    return {
        search: function(text, items) {
            var eventData = {
                eventType: "SEARCH",
                text: text,
                diff: items.length
            };
            logEvent(eventData);
        },
        searchClick: function(text, itemId, order) {
            var eventData = {
                eventType: "SEARCH_CLICK",
                text: text,
                diff: order,
                itemId: itemId
            };
            logEvent(eventData);
        },
        searchIgnored: function(text) {
            var eventData = {
                eventType: "SEARCH_IGNORED",
                text: text,
                diff: "0"
            };
            logEvent(eventData);
        }
    };
} ]);

"use strict";

function MainController($state, $scope, Sdk, $rootScope, HistoryService, SearchService, EventLogger) {
    var main = this;
    main.searchText = null;
    main.animated = false;
    main.showSearch = SearchService.getIsSearchEnabled();
    $scope.$watch("main.searchText", function(newVal) {
        if (newVal) {
            $state.go("main.results", {
                text: newVal
            });
        } else if (newVal === "" && $state.current.name === "main.results") {
            $state.go("main.item-view", HistoryService.getLastItemParam());
        }
    });
    main.triggerWidgetReady = function() {
        Sdk.triggerWidgetReady();
    };
    HistoryService.clearHistory();
    main.hasBack = function() {
        var history = HistoryService.getHistory();
        return history.length;
    };
    main.goBack = function() {
        var lastState = HistoryService.popLastHistory();
        if (lastState) {
            $state.go(lastState.state, lastState.params);
            main.searchText = lastState.params.text || "";
            if ($state.current.name === "main.results") {
                EventLogger.searchIgnored(main.searchText);
            }
        }
    };
    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        HistoryService.storeCurrHistory(fromState.name, fromParams);
    });
}

MainController.$inject = [ "$state", "$scope", "Sdk", "$rootScope", "HistoryService", "SearchService", "EventLogger" ];

angular.module("answersWidgetAppInternal").controller("MainController", MainController);

"use strict";

function WidgetController(ItemService, SearchService, ItemId, $state, $log, ContentEditorSdk, Sdk, $scope, $document) {
    var vm = this;
    vm.kbItem = null;
    if (ItemId) {
        ItemService.getItemById(ItemId).then(function(res) {
            vm.kbItem = false;
            vm.loading = false;
            if (res && res.data && !res.data.errors) {
                vm.kbItem = res && res.data;
                SearchService.setContextItem(vm.kbItem);
            }
            ContentEditorSdk.addListener(ContentEditorSdk.events.stepByStep.stepChanged, function(ev, name, object) {
                var listener = Sdk.triggerStepByStepStepChange(vm.kbItem.itemId, object);
                $scope.$on("$destroy", function() {
                    $log.log("destorying step by step listener");
                    $document.off(listener);
                });
            });
            Sdk.kbItemLoad(vm.kbItem);
        }, function(e) {
            $state.go("main.404");
            Sdk.triggerItemNotFound(ItemId);
            $log.error(e);
        });
    }
}

WidgetController.$inject = [ "ItemService", "SearchService", "ItemId", "$state", "$log", "ContentEditorSdk", "Sdk", "$scope", "$document" ];

angular.module("answersWidgetAppInternal").controller("WidgetController", WidgetController);

"use strict";

function SearchResultsController(SearchService, $log, $state, $document, SearchText, Sdk, EventLogger) {
    var vm = this;
    vm.searchText = SearchText;
    vm.searchResults = null;
    vm.goToItem = function(item, index, fromRelated) {
        $state.go("main.item-view", {
            itemId: item.itemId
        });
        var hasRelated = vm.searchResults ? vm.searchResults.related.length > 0 : false;
        Sdk.triggerSearchAnswerClick(vm.searchText, item.content.title, index + 1, item.content.permalink, fromRelated, hasRelated);
        EventLogger.searchClick(vm.searchText, item.itemId, index + 1);
    };
    function doSearch(text) {
        var contextItem = SearchService.getContextItem();
        if (text) {
            vm.searchResults = null;
            SearchService.search(text).then(function(combinedResults) {
                vm.loading = false;
                vm.searchResults = combinedResults;
                vm.contextCategoryName = contextItem && contextItem.category && contextItem.category.title;
                var combinedItems = combinedResults.related.concat(combinedResults.regular);
                vm.noResults = !combinedItems.length;
                if (combinedItems && combinedItems.length > 0) {
                    EventLogger.search(text, combinedItems);
                    Sdk.triggerSearch(text, combinedItems, combinedResults.related.length > 0);
                } else {
                    Sdk.triggerSearchNoAnswer(text);
                }
            }, function(e) {
                $log.error(e);
            });
        }
    }
    doSearch(SearchText);
    vm.getHtmlStringText = function(htmlStr) {
        var tmp = $document.get(0).createElement("DIV");
        tmp.innerHTML = htmlStr;
        return tmp.textContent || tmp.innerText || "";
    };
}

SearchResultsController.$inject = [ "SearchService", "$log", "$state", "$document", "SearchText", "Sdk", "EventLogger" ];

angular.module("answersWidgetAppInternal").controller("SearchResultsController", SearchResultsController);

"use strict";

angular.module("answersWidgetAppInternal").directive("htmlContent", [ "$compile", "$sce", "Sdk", "DocumentProcessor", function($compile, $sce, Sdk, DocumentProcessor) {
    return {
        scope: {
            htmlContent: "="
        },
        priority: 2,
        link: function(scope, elem) {
            scope.$watch("htmlContent", function(newContent) {
                if (newContent) {
                    var htmlData = newContent;
                    if (DocumentProcessor.isValidHtmlContent(htmlData)) {
                        scope.components = DocumentProcessor.parseHtmlToComponents(htmlData);
                        var elemContent = $compile('<content-viewer components="components"></content-viewer>')(scope);
                        elem.empty().append(elemContent);
                    } else {
                        elem.addClass("html-base-content").html(htmlData);
                        $compile(elem)(scope);
                    }
                    Sdk.htmlContentLoad(elem);
                }
            });
        }
    };
} ]);

"use strict";

angular.module("answersWidgetAppInternal").directive("itemContentMain", [ "$state", function($state) {
    return {
        restrict: "C",
        priority: 1,
        link: function(scope, elem) {
            scope.$watch(function() {
                return elem.html();
            }, function() {
                $(elem).find("a").each(function() {
                    var $a = $(this);
                    var itemId = $a.attr("data-item-id");
                    var isTargetBlank = $a.attr("target") === "_blank";
                    var href = $a.attr("href");
                    if (itemId && !isTargetBlank) {
                        $a.attr("href", $state.href("main.item-view", {
                            itemId: itemId
                        }));
                    } else if (!itemId && href.indexOf("#") !== 0) {
                        $a.attr("target", "_blank");
                    }
                });
            });
        }
    };
} ]);

"use strict";

angular.module("answersWidgetAppInternal").directive("stepByStepWidget", [ "$filter", function($filter) {
    return {
        priority: 1,
        restrict: "C",
        link: function(scope, elem) {
            var setArrowEvent = function($nextStep, $prevStep) {
                $nextStep.click(function(e) {
                    e.preventDefault();
                    if (!$nextStep.hasClass("disabled")) {
                        var $currSection = $stepByStepWidget.find("section:visible");
                        var sectionIndex = $currSection.index();
                        $currSection.hide();
                        var nextSectionIndex = (sectionIndex + 1) % numOfSection;
                        var $nextSection = $stepByStepWidget.find("section:nth-child(" + (nextSectionIndex + 1) + ")");
                        $nextSection.fadeIn();
                    }
                });
                $prevStep.click(function(e) {
                    e.preventDefault();
                    if (!$prevStep.hasClass("disabled")) {
                        var $currSection = $stepByStepWidget.find("section:visible");
                        var sectionIndex = $currSection.index();
                        $currSection.hide();
                        var prevSectionIndex = (sectionIndex === 0 ? numOfSection - 1 : sectionIndex - 1) % numOfSection;
                        var $prevSection = $stepByStepWidget.find("section:nth-child(" + (prevSectionIndex + 1) + ")");
                        $prevSection.fadeIn();
                    }
                });
            };
            var $stepByStepWidget = elem;
            if ($stepByStepWidget.length) {
                var isNotCircles = $stepByStepWidget.hasClass("not-circles");
                $stepByStepWidget.each(function() {
                    var $el = $(this);
                    var $sections = $el.find("section");
                    $sections.hide();
                    $sections.each(function(index, section) {
                        var $steps = $('<div class="sbs-arrows-holder"></div>');
                        var $prevStep = $('<a href="#" class="sbs-arrow sbs-arrow-prev"></a>');
                        var $nextStep = $('<a href="#" class="sbs-arrow sbs-arrow-next"></a>');
                        setArrowEvent($nextStep, $prevStep);
                        var title = $filter("translate")("content.common.step.title").replace("{0}", index + 1).replace("{1}", $sections.length);
                        $steps.append($prevStep);
                        $steps.append("<span>" + title + "</span>");
                        $steps.append($nextStep);
                        $(section).find(".description").before($steps);
                        if (index === 0) {
                            if (isNotCircles) {
                                $prevStep.addClass("disabled");
                            }
                            var img = $(section).find("img")[0];
                            if (img) {
                                img.onload = function() {
                                    var height = this.height;
                                    $sections.each(function(i, currSection) {
                                        $(currSection).find("img").first().attr("height", height);
                                    });
                                };
                            }
                        }
                        if ($sections.length === index + 1) {
                            $nextStep.addClass("disabled");
                        }
                    });
                    $sections.first().show();
                });
                var numOfSection = $stepByStepWidget.find("section").length;
            }
        }
    };
} ]);

(function() {
    "use strict";
    angular.module("answersWidgetAppInternal").factory("RatingService", [ "TENANT_ID", "LANG", "$http", "API_URL", "$window", function(TENANT_ID, LANG, $http, API_URL, $window) {
        return {
            rateItemHelpful: function(itemId, action, helpful, revert) {
                var params = {
                    action: action,
                    helpful: helpful,
                    itemId: itemId,
                    tenantId: TENANT_ID,
                    revert: revert,
                    lang: LANG
                };
                return $http.post(API_URL + "/kb/rateItemHelpful", params);
            },
            voteItem: function(itemId, newValue) {
                var revert = newValue ? null : true;
                var params = {
                    itemId: itemId,
                    tenantId: TENANT_ID,
                    lang: LANG,
                    revert: revert
                };
                return $http.post(API_URL + "/kb/voteItem", params);
            },
            rateItem: function(itemId, newRating, oldRating) {
                var promiseToReturn;
                if (newRating === null) {
                    promiseToReturn = this.rateItemHelpful(itemId, "REVERT", oldRating, true);
                } else if (oldRating === null) {
                    promiseToReturn = this.rateItemHelpful(itemId, "RATE", newRating, null);
                } else {
                    promiseToReturn = this.rateItemHelpful(itemId, "TOGGLE", newRating, null);
                }
                return promiseToReturn;
            },
            storeItemData: function(itemId, state) {
                if (state === null) {
                    $window.localStorage.removeItem(itemId + LANG);
                } else {
                    $window.localStorage.setItem(itemId + LANG, state);
                }
            },
            getItemData: function(itemId) {
                var state = $window.localStorage.getItem(itemId + LANG);
                return state === "true" ? true : state === "false" ? false : null;
            }
        };
    } ]);
})();

(function() {
    "use strict";
    angular.module("answersWidgetAppInternal").directive("itemRating", [ "RatingService", "Sdk", function(RatingService, Sdk) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "/views/item-rating.tpl.html",
            scope: {
                item: "="
            },
            bindToController: true,
            controllerAs: "vm",
            controller: [ "HelpCenterLink", function(HelpCenterLink) {
                var vm = this;
                if (!vm.item) {
                    throw "You must include item to use this directive";
                }
                vm.itemId = vm.item.itemId;
                vm.classification = vm.item.classification.name;
                vm.itemWasVoted = false;
                vm.helpCenterLink = HelpCenterLink;
                vm.rateItem = function(newRating) {
                    if (newRating === vm.ratingValue) {
                        newRating = null;
                    }
                    RatingService.rateItem(vm.itemId, newRating, vm.ratingValue);
                    vm.ratingValue = newRating;
                    vm.itemWasVoted = true;
                    if (newRating !== null) {
                        Sdk.itemRated(newRating, vm.item.category ? vm.item.category.id : "", vm.item.content.title, vm.classification, vm.item.content.permalink);
                    }
                };
                vm.voteItem = function() {
                    var newValue = vm.ratingValue ? null : true;
                    RatingService.voteItem(vm.itemId, newValue);
                    vm.ratingValue = newValue;
                    vm.itemWasVoted = true;
                    Sdk.itemRated(newValue || false, vm.item.category ? vm.item.category.id : "", vm.item.content.title, vm.classification, vm.item.content.permalink);
                };
            } ]
        };
    } ]);
})();

"use strict";

angular.module("answersWidgetAppInternal").factory("HistoryService", function() {
    var storeHistory = true;
    var historyList = [];
    var lastItemParams = "";
    return {
        popLastHistory: function() {
            storeHistory = false;
            var last = null;
            if (historyList.length) {
                last = historyList.pop();
            }
            return last;
        },
        storeCurrHistory: function(state, params) {
            if (storeHistory) {
                historyList.push({
                    state: state,
                    params: params
                });
                if (state === "main.item-view") {
                    lastItemParams = params;
                }
            }
            storeHistory = true;
        },
        getHistory: function() {
            return historyList;
        },
        clearHistory: function() {
            historyList = [];
        },
        getLastItemParam: function() {
            return lastItemParams;
        }
    };
});

"use strict";

(function() {
    angular.module("answersWidgetAppInternal").factory("RelatedService", [ "TENANT_ID", "LANG", "$http", "API_URL", "SearchService", function(TENANT_ID, LANG, $http, API_URL, SearchService) {
        return {
            getRelatedItems: function(itemId) {
                return SearchService.getRelatedItemsByType(itemId).then(function(res) {
                    return res.data;
                });
            }
        };
    } ]);
})();

(function() {
    "use strict";
    angular.module("answersWidgetAppInternal").directive("relatedItems", [ "RelatedService", "$log", function(RelatedService, $log) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "/views/related-items.tpl.html",
            scope: {
                leadItemId: "@",
                leadItemType: "@"
            },
            bindToController: true,
            controllerAs: "vm",
            controller: function() {
                var vm = this;
                if (!vm.leadItemId || !vm.leadItemType) {
                    throw "You must include lead item id and lead item type to use this directive";
                }
                RelatedService.getRelatedItems(vm.leadItemId, vm.leadItemType).then(function(res) {
                    vm.items = res;
                }, function(e) {
                    if (e && e.status) {
                        if (!(e.data && e.data.errorCode !== -66001)) {
                            $log.error(e);
                        }
                    }
                });
            }
        };
    } ]);
})();

"use strict";

angular.module("answersWidgetAppInternal").directive("translateHtml", [ "$state", "translateFilter", "$compile", function($state, translateFilter, $compile) {
    return {
        restrict: "A",
        priority: 1,
        link: function(scope, elem, attrs) {
            var key = attrs.translateHtml;
            elem.html(translateFilter(key));
            elem.attr("translate-html", null);
            elem.append($compile(elem)(scope));
        }
    };
} ]);

angular.module("answersWidgetAppInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/404.tpl.html", '<section class="item-content">\n' + "  <h1>{{'not.found.header' | translate}}<small>{{'not.found.error' | translate}}</small></h1>\n" + '  <div ng-if="main.hasBack()">\n' + '    <p translate-html="not.found.back-suggestion"></p>\n' + "  </div>\n" + '  <div ng-if="!main.hasBack()">\n' + "    {{'not.found.suggestion' | translate}}\n" + "  </div>\n" + "\n" + "</section>\n");
    $templateCache.put("views/item-rating.tpl.html", '<div class="item-rating">\n' + "    <div ng-if=\"vm.classification !== 'FEATURE_REQUEST' && vm.classification !== 'KNOWN_ISSUE'\">\n" + '        <span ng-hide="vm.itemWasVoted">{{\'rating.vote.question\' | translate}} <a ng-click="vm.rateItem(true)" class="yes" ng-class="{\'active\': vm.ratingValue}">{{\'yes\' | translate}}</a> | <a ng-click="vm.rateItem(false)" ng-class="{\'active\': vm.ratingValue === false}" class="no">{{\'no\' | translate}}</a></span>\n' + '        <div class="note article" ng-show="vm.itemWasVoted">\n' + "            <span ng-show=\"vm.ratingValue\">{{'rating.voted.question' | translate}}</span>\n" + "            <!--TODO - ESES change linke from topology-->\n" + '            <span ng-show="!vm.ratingValue" ng-bind-html="\'rating.voted.no.question\' | translate:{helpCenterLink: vm.helpCenterLink}"></span>\n' + "        </div>\n" + "    </div>\n" + "    <div ng-if=\"vm.classification === 'FEATURE_REQUEST'\">\n" + '        <a ng-hide="vm.itemWasVoted" ng-click="vm.voteItem()" class="vote iconed feature" ng-class="{\'active\': vm.ratingValue}">{{\'rating.vote.feature_request\' | translate}}</a>\n' + '        <div class="note" ng-show="vm.itemWasVoted">{{\'rating.voted.feature_request\' | translate}}</div>\n' + "    </div>\n" + "    <div ng-if=\"vm.classification === 'KNOWN_ISSUE'\">\n" + '        <a ng-hide="vm.itemWasVoted" ng-click="vm.voteItem()" class="vote iconed known" ng-class="{\'active\': vm.ratingValue}">{{\'rating.vote.bug\' | translate}}</a>\n' + '        <div class="note" ng-show="vm.itemWasVoted">{{\'rating.voted.bug\' | translate}}</div>\n' + "    </div>\n" + "</div>\n");
    $templateCache.put("views/item-view.tpl.html", '<div class="container anim-fade inner-content" hide-and-show-loader="vm.kbItem === null">\n' + '    <div class="item-content">\n' + '        <div class="item-content-main">\n' + "            <h1>{{vm.kbItem.content.title}}</h1>\n" + '            <div class="main-content" html-content="vm.kbItem.content.contentText"></div>\n' + '             <related-items ng-if="vm.kbItem" lead-item-id="{{vm.kbItem.itemId}}" lead-item-type="{{vm.kbItem.itemType.name}}"></related-items>\n' + "        </div>\n" + '        <item-rating ng-if="vm.kbItem" item="::vm.kbItem"></item-rating>\n' + "    </div>\n" + "</div>");
    $templateCache.put("views/main.tpl.html", '<div ng-init="main.triggerWidgetReady()">\n' + '    <div class="header" ng-show="main.showSearch">\n' + '        <div class="back" ng-show="main.hasBack()">\n' + '            <span ng-click="main.goBack()">&#160;</span>\n' + "        </div>\n" + '        <div class="search-inputbox">\n' + '                <input type="text" placeholder="{{\'search.placeholder\' | translate}}" ng-model="main.searchText" class="search form-control" ng-change="main.onSearchChange()" ng-model-options="{ debounce: 800 }"  />\n' + "        </div>\n" + "    </div>\n" + '    <div class="content">\n' + '        <div ui-view class="anim-in-out anim-fade" data-anim-sync="true" data-anim-speed="150"></div>\n' + "    </div>\n" + "</div>\n");
    $templateCache.put("views/related-items.tpl.html", '<div class="related-items" ng-show="vm.items.length">\n' + "    <h4>{{'related.title' | translate}}</h4>\n" + "    <ul>\n" + '        <li class="related-item" ng-repeat="item in vm.items">\n' + '            <a href="#" data-item-id="{{item.itemId}}">{{item.content.title}}</a>\n' + "        </li>\n" + "    </ul>\n" + "</div>\n");
    $templateCache.put("views/search-results-view.tpl.html", '<div class="container anim-fade" hide-and-show-loader="vm.searchResults === null">\n' + '    <div class="search-results related" ng-show="vm.searchResults.related.length">\n' + "        <div class=\"results-header related\">{{'search.related.header' | translate: {categoryName: vm.contextCategoryName} }}</div>\n" + '        <div ng-repeat="result in vm.searchResults.related" class="search-result">\n' + '            <a ng-click="vm.goToItem(result, $index, true)">\n' + '                <div class="search-title">{{result.content.title}}</div>\n' + '                <div class="search-content-text">{{result.content.contentText | htmlToText}}</div>\n' + "            </a>\n" + "        </div>\n" + "    </div>\n" + '    <div class="search-results regular" ng-show="vm.searchResults.regular.length">\n' + "\n" + '        <div class="results-header regular" ng-if="vm.searchResults.related.length">{{\'search.more.results\' | translate}}</div>\n' + "\n" + '        <div class="results-header regular" ng-if="!vm.searchResults.related.length">{{\'search.header\' | translate: {searchText: vm.searchText} }}</div>\n' + "\n" + '        <div ng-repeat="result in vm.searchResults.regular" class="search-result">\n' + '            <a ng-click="vm.goToItem(result, $index, false)">\n' + '                <div class="search-title">{{result.content.title}}</div>\n' + '                <div class="search-content-text">{{result.content.contentText | htmlToText}}</div>\n' + "            </a>\n" + "        </div>\n" + "    </div>\n" + '    <div class="no-results" ng-show="vm.noResults">\n' + "        {{'search.no.results' | translate}}\n" + "    </div>\n" + "</div>\n");
} ]);