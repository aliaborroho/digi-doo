"use strict";

try {
    angular.module("answersWidgetTranslations");
} catch (e) {
    angular.module("answersWidgetTranslations", [ "pascalprecht.translate" ]);
}

angular.module("answersWidgetTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        yes: "Yes",
        no: "No",
        search: {
            no: {
                results: "Sorry, we couldn't find any results for your search."
            },
            more: {
                results: "More results"
            },
            related: {
                header: 'Results related to "{{categoryName}}"'
            },
            header: 'Search Results for "{{searchText}}"',
            placeholder: "Type your question here"
        },
        rating: {
            voted: {
                bug: "Thanks for letting us know!",
                feature_request: "Thanks for your vote!",
                question: "Thanks for your feedback!",
                no: {
                    question: 'Thanks for your feedback! Visit our <a href="{{helpCenterLink}}" target="_blank">Help Center</a> to learn more.'
                }
            },
            vote: {
                bug: "I'm experiencing this issue",
                feature_request: "Vote for this feature",
                question: "Was this helpful?"
            }
        },
        content: {
            common: {
                step: {
                    title: "Step {0}/{1}"
                }
            }
        },
        related: {
            title: "See Also"
        },
        back: {
            to: {
                top: "Back to top"
            }
        },
        wix: {
            mobile: {
                slogan: "Search for your question or browse<br/>our mobile related topics below",
                title: "Mobile Help"
            },
            slogan: "Search for your question or browse<br/>our popular topics below",
            title: "Editor Help"
        },
        not: {
            found: {
                "back-suggestion": "You can <a ng-click='main.goBack()'>Go back</a> or try searching a different topic.",
                suggestion: "Please try searching for a different topic.",
                error: "(Error 404)",
                header: "We Looked Everywhere For This Page!"
            }
        }
    };
    $translateProvider.translations("en", translations);
    $translateProvider.translations(translations);
} ]);