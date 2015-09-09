var reactVersions = {
  "base": "1.392.1",
  "addPanelData": "1.392.1",
  "addPanelInfra": "1.392.1",
  "advancedStylePanel": "1.392.1",
  "backgroundPresets": "1.392.1",
  "baseUI": "1.392.1",
  "blog": "1.392.1",
  "compPanels": "1.392.1",
  "core": "1.392.1",
  "databaseEditor": "1.392.1",
  "debugTools": "1.392.1",
  "designPanel": "1.392.1",
  "gfppData": "1.392.1",
  "helpIds": "1.392.1",
  "listsEditing": "1.392.1",
  "mediaServices": "1.392.1",
  "mobileEditor": "1.392.1",
  "pagesMenu": "1.392.1",
  "panelUtils": "1.392.1",
  "panels": "1.392.1",
  "rEditor": "1.392.1",
  "santaPreview": "1.392.1",
  "savePublish": "1.392.1",
  "staticAssets": "1.392.1",
  "styles": "1.392.1",
  "superAppMenuInfra": "1.392.1",
  "symbols": "1.392.1",
  "testUtils": "1.392.1",
  "textControls": "1.392.1",
  "tpa": "1.392.1",
  "tpaIntegrationEditor": "1.392.1",
  "uiAnimations": "1.392.1",
  "userPreferences": "1.392.1",
  "util": "1.392.1",
  "wixStore": "1.392.1"
};

/*eslint strict:0*/
if (!Function.prototype.bind) {
    Function.prototype.bind = function (object) { //eslint-disable-line no-extend-native
        var self = this,
            slice = Array.prototype.slice,
            args = slice.call(arguments, 1);
        return function () {
            return self.apply(object, args.concat(slice.call(arguments)));
        };
    };
}

var queryUtil = (function () {
    /*eslint strict:0 */

    /**
     * Get value of URL parameter by its name
     * @param {string} name
     * @param {string} query
     * @returns {string}
     */
    function getParameterFromQuery(query, name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(query);
        return results && results[1] ? decodeURIComponent(results[1]).replace(/\+/g, ' ') : '';
    }

    /**
     * Get state of boolean URL parameter by its name
     * @param {string} name
     * @param {string} query
     * @returns {boolean}
     */
    function isParameterTrueInQuery(query, name) {
        return getParameterFromQuery(query, name) === 'true';
    }

    return {
        getParameterFromQuery: getParameterFromQuery,
        isParameterTrueInQuery: isParameterTrueInQuery,
        getParameterByName: getParameterFromQuery.bind(null, window.location.search),
        isParameterTrue: isParameterTrueInQuery.bind(null, window.location.search)
    };
}());
window.queryUtil = queryUtil;

function PackagesUtil(packagesStructure, query) {
    'use strict';

    /**
     * @param {string} str
     * @param {string} separator
     * @param {string} equalizer
     * @return {Object.<String, String>}
     */
    function reduceStringToObject(str, separator, equalizer) {
        return (str || '').split(separator).reduce(function (o, pairString) {
            var pair = pairString.split(equalizer);
            o[pair[0]] = pair[1];
            return o;
        }, {});
    }

    var queryParamsObject = reduceStringToObject(query.replace(/^\?/, ''), '&', '=');

    /**
     * returns a new reactVersions according to the packages query
     * @param {Object} versionsObject
     * @returns {Object}
     */
    this.getVersionsByQuery = function(versionsObject) {
        if (!versionsObject || !queryParamsObject) {
            return versionsObject;
        }
        var applied = {};

        function getVersionString(value) {
            if (/^\d+$/.test(value)) {
                return 'http://localhost:' + value;
            }
            if (/^[\d\.]+$/.test(value)) {
                return value;
            }
        }

        function applyVersion(version, key) {
            if (version && versionsObject[key]) {
                applied[key] = version;
            }
        }

        Object.keys(versionsObject).forEach(function(key) {
            applied[key] = versionsObject[key];
        });

        var packages = reduceStringToObject(queryParamsObject.packages, ',', ':');
        if (packages.all) {
            Object.keys(versionsObject).forEach(applyVersion.bind(null, getVersionString(packages.all)));
        }
        Object.keys(packages).forEach(function (key) {
            applyVersion(getVersionString(packages[key]), key);
        });
        return applied;
    };

    /**
     * changes the confiIg to load packages correctly, accounting the query
     * @param {Object} config
     * @returns {Object}
     */
    this.buildConfig = function(config) {

        var debug = (queryParamsObject.debug || '').split(',').filter(Boolean);
        if (debug.indexOf('all') !== -1) {
            var debuggableExternals = Object.keys(config.paths).filter(function (path) {
                return config.paths[path].source;
            });
            debug = packagesStructure.concat(debuggableExternals);
        }

        function isInDebug(i) {
            return debug.indexOf(i) !== -1
        }

        //config.paths:
        Object.keys(config.paths).forEach(function (k) {
            if (typeof config.paths[k] === 'object' && !(config.paths[k] instanceof Array)) {
                config.paths[k] = config.paths[k][isInDebug(k) ? 'source' : 'min'];
            }
        });

        //config.bundles:
        config.bundles = config.bundles || {};
        packagesStructure.filter(function(pkg){return !isInDebug(pkg); }).forEach(function(pkg) {
           config.bundles[pkg] = pkg;
            config.paths[pkg] = 'packages-bin/' + pkg + '/' + pkg + '.min';
        });

        //config.packages:
        config.packages = packagesStructure.filter(isInDebug).map(function (name) {
            return {
                name: name,
                location: 'packages/' + name + '/src/main',
                main: name
            };
        });

        return config;
    };
}

////////////////////////////////////////////////////////////////////////
// This file is generated by grunt-packages DO NOT modify
////////////////////////////////////////////////////////////////////////
var packagesUtil = new PackagesUtil(["addPanelData","addPanelInfra","advancedStylePanel","backgroundPresets","baseUI","blog","compPanels","componentsPresetsPanels","core","databaseEditor","debugTools","designPanel","gfppData","helpIds","listsEditing","mediaServices","mobileEditor","pagesMenu","panelUtils","panels","rEditor","santaPreview","savePublish","staticAssets","styles","superAppMenuInfra","symbols","testUtils","textControls","tpa","tpaIntegrationEditor","uiAnimations","userPreferences","util","wixStore"], window.location.search);

////////////////////////////////////////////////////////////////////////


function instrument(queryUtil, editorVersion) {
    'use strict';

    var base = (window.serviceTopology.biServerUrl || 'http://frog.wix.com').replace(/\/$/, '');

    function getCookie(name) {
        var re = new RegExp('(?:^|\\W)' + name + '\s*=([^;]*)');
        var m = document.cookie.match(re);
        return m ? m[1].trim() : m;
    }

    var permissionInfo = window.editorModel.permissionsInfo || {};
    var implicitParams = (function () {
        var implicitFields = {
            ownerId: function() {
                return permissionInfo.ownerId;
            },
            roles: function() {
                var loggedInUserRoles = (permissionInfo.loggedInUserRoles || []).map(function(loggedInUserRole) {
                    return loggedInUserRole.role;
                }).join();
                this.roles = function () {
                    return loggedInUserRoles;
                };
                return this.roles();
            },
            esi: function () {
                return window.editorModel.editorSessionId;
            },
            did: function () {
                return window.siteId;
            },
            msid: function () {
                return window.editorModel.metaSiteId;
            },
            ts: function (now) {
                return now - (window.mainLoaded || 0);
            },
            c: function (now) {
                return now;
            }
        };

        var newrelic = window.newrelic;
        if (newrelic) {
            if (newrelic.setCustomAttribute) {
                var roles = implicitFields.roles();
                if (roles) {
                    newrelic.setCustomAttribute('roles', roles);
                }
                newrelic.setCustomAttribute('esi', implicitFields.esi());
                newrelic.setCustomAttribute('did', implicitFields.did());
                newrelic.setCustomAttribute('msid', implicitFields.msid());
                newrelic.setCustomAttribute('editorVersion', editorVersion);

                // Running experiments:
                var model = window.rendererModel || window.editorModel || {};
                var runningExperiments = model.runningExperiments;
                if (runningExperiments) {
                    runningExperiments = Object.keys(runningExperiments).filter(function (key) {
                        return this[key] === 'new';
                    }, runningExperiments).join('][');
                    if (runningExperiments) {
                        newrelic.setCustomAttribute('experiments', '[' + runningExperiments + ']');
                    }
                }
            }
            if (newrelic.addPageAction) {
                newrelic.addPageAction('main-r loaded');
            }
        }

        return function (mapFn, omitFn) {
            var size = 0;
            var now = Date.now();
            var payload = Object.keys(implicitFields)
                .filter(function (key) {
                    return !omitFn(key);
                })
                .map(function (key) {
                    var result = mapFn(key) + '=' + implicitFields[key](now);
                    size += result.length;
                    return result;
                });
            payload.size = size;
            return payload;
        };
    }());

    var sendTheBI = !queryUtil.getParameterByName('isqa');

    function sendBI(reportDef, params, options) {
        options = options || {};
        var map = options.map || {};
        var omit = options.omit || {};
        var payload = implicitParams(function (key) {
            return map[key] || key;
        }, function (key) {
            return omit[key];
        });

        var size = payload.size || 0;
        params = Object.keys(params || {}).map(function (key) {
            var value = params[key];
            if (typeof value === 'string') {
                if (size + value.length > 1536) {
                    value = value.substring(0, Math.max(1536 - size, 32));
                }
                value = encodeURIComponent(value);
            }
            var result = key + '=' + value;
            size += result.length;
            return result;
        });
        payload = params.concat(payload);

        var endpoint = reportDef.endpoint || 'editor';
        var evid = reportDef.evid;
        var src = reportDef.src || 38;
        payload = payload.length ? '&' + payload.join('&') : '';

        var srcBI = base + '/' + endpoint + '?evid=' + evid + '&src=' + src + '&majorVer=3&viewMode=editor' + payload;
        if (sendTheBI) {
            (new Image()).src = srcBI;
        } else {
            console.log('BI:', srcBI);
        }
    }

    var bi = {
        event: function (reportDef, params) {
            if (typeof reportDef === 'number') {
                reportDef = {
                    evid: reportDef
                };
            }
            sendBI(reportDef, params);
        },
        error: (function () {
            var errorSeverityMap = {
                recoverable: 10,
                warning: 20,
                error: 30,
                fatal: 40
            };
            return function (reportDef, params) {
                var rd = {
                    evid: 10,
                    endpoint: reportDef.endpoint || 'trg'
                };
                var p = {
                    errn: reportDef.errorName,
                    errc: reportDef.errorCode,
                    sev: errorSeverityMap[reportDef.severity] || reportDef.severity,
                    cat: 1,
                    iss: 1
                };
                var ut = getCookie('userType');
                if (ut) {
                    p.ut = ut;
                }
                Object.keys(params).forEach(function (param) {
                    p[param] = params[param];
                });
                sendBI(rd, p);
            };
        }())
    };
    window.bi = bi;

    var noErrorInterception = queryUtil.getParameterByName('debug') && !queryUtil.isParameterTrue('bi');
    if (noErrorInterception) {
        return;
    }

    var sendErrorOnce = function (errorName, errorCode, severity) { //eslint-disable-line func-style
        sendErrorOnce = function () {}; // only report one error per session
        var params = Array.prototype.slice.call(arguments, 3).reduce(function (result, arg, index) {
            result['p' + (index + 1)] = arg;
            return result;
        }, {});
        bi.error({
            errorName: errorName,
            errorCode: errorCode,
            severity: severity
        }, params);
    };

    var origOnError = window.onerror || function () {};
    window.onerror = function (errorMsg, url, line, column, err) {
        var where = err && typeof err.stack === 'string' ? err.stack : url;
        sendErrorOnce('JAVASCRIPT_ERROR', 111022, 'fatal', errorMsg, where, line, column);
        return origOnError.apply(this, arguments);
    };

    if (window.console) {
        var origError = console.error;
        if (origError) {
            console.error = function () {
                sendErrorOnce.bind(null, 'CONSOLE_ERROR', 111023, 'error').apply(null, arguments);
                return origError.apply(this, arguments);
            };
        }
    }

    var origRjsError = requirejs.onError || function () {};
    requirejs.onError = function (err) {
        var modules = (err.requireModules || []).join(';');
        var where = typeof err.stack === 'string' ? err.stack : '';
        var errn = err.errn || 'REQUIREJS_ERROR';
        var errc = err.errc || 111024;
        var severity = err.severity || 'fatal';
        sendErrorOnce(errn, errc, severity, err.message, modules, where);
        return origRjsError.apply(this, arguments);
    };
}

function joinURL() {
    /*eslint strict:0 */
    var url = arguments[0];
    for (var i = 1; i < arguments.length; ++i) {
        url = url.replace(/\/$/, '') + '/' + arguments[i].replace(/^\//, '');
    }
    return url;
}

var persistent = (function () {
    /*eslint strict:0 */

    function isAvailable(st) {
        var unique = 'testStorage' + Date.now();
        try {
            st.setItem(unique, unique);
            var value = st.getItem(unique);
            st.removeItem(unique);
            if (value !== unique) {
                throw 'not equal'; //eslint-disable-line no-throw-literal
            }
        } catch (e) {
            return false;
        }
        return true;
    }

    var storage;
    if (isAvailable(window.localStorage)) {
        storage = window.localStorage;
    } else if (isAvailable(window.sessionStorage)) {
        storage = window.sessionStorage;
    } else {
        storage = {
            setItem: function () {},
            getItem: function () {},
            removeItem: function () {}
        };
    }

    return {
        save: function (key, value) {
            storage.setItem(key, value);
        },
        load: function (key) {
            return storage.getItem(key);
        },
        remove: function (key) {
            storage.removeItem(key);
        }
    };
}());
/* global joinURL:true */

var semverRegex = /(\d)+\.(\d)+\.(\d)+/;
var onlySemver = /^(\d)+\.(\d)+\.(\d)+$/;

function replaceUrlVersion(url, version) {
    'use strict';

    return url && onlySemver.test(version) ? url.replace(semverRegex, version) : url;
}

function overrideScriptsLocationMapFromQuery(scriptsLocationMap, overrideParam) {
    'use strict';
    overrideParam.split(',').filter(Boolean).forEach(function (keyValueString) {
        var pair = keyValueString.split(':');
        var urlOverride = replaceUrlVersion(scriptsLocationMap[pair[0]], pair[1]);
        if (urlOverride && scriptsLocationMap[pair[0]] !== urlOverride) {
            scriptsLocationMap[pair[0]] = urlOverride;
        }
    });
    return scriptsLocationMap;
}

function getSubdomain(domain) {
    /*eslint strict:0 */
    if (!domain) {
        return '';
    }
    var subDomain = domain.split('.');
    if (subDomain.length <= 2) {
        subDomain = domain;
    } else {
        var beforeLastPart = subDomain[subDomain.length - 2];
        var topLevelDomains = {com: true, org: true, net: true, edu: true, gov: true, mil: true, info: true, co: true, ac: true};
        if (topLevelDomains[beforeLastPart]) {
            subDomain = subDomain[subDomain.length - 3] + '.' + subDomain[subDomain.length - 2] + '.' + subDomain[subDomain.length - 1];
        } else {
            subDomain = subDomain[subDomain.length - 2] + '.' + subDomain[subDomain.length - 1];
        }
    }
    return subDomain;
}
/* global getPloaderSantaConfig: true */
function getEditorRjsConfig(serviceTopology, editorModel, baseVersion, PackagesUtil) { // eslint-disable-line no-unused-vars
    'use strict';
    function joinURL() {
        var url = arguments[0];
        for (var i = 1; i < arguments.length; ++i) {
            url = url.replace(/\/$/, '') + '/' + arguments[i].replace(/^\//, '');
        }
        return url;
    }

    var langsLocation = serviceTopology && serviceTopology.scriptsLocationMap['santa-langs'] || 'http://static.parastorage.com/services/santa-langs/1.194.0';
    var languageCode = editorModel && editorModel.languageCode || 'en';
    var langsUrl = joinURL(langsLocation, 'resources/santa-editor/bundles/_generated/santa_editor_' + languageCode + '.json');

    var mmgrBaseUrl = serviceTopology ? serviceTopology.mediaManagerUrl : 'http://editor.wix.com/static/services/media-gallery-g5/1.81.0/';
    var scriptLocation = (serviceTopology && (serviceTopology.scriptsDomainUrl || serviceTopology.staticServerUrl)) || 'http://static.parastorage.com/';
    var thirdParty = joinURL.bind(null, scriptLocation, 'services', 'third-party');
    var cdnjs = joinURL.bind(null, '//cdnjs.cloudflare.com', 'ajax', 'libs');
    return {
        baseUrl: '',
        paths: {
            lodash: [cdnjs('lodash.js/3.10.1/lodash.min'), thirdParty('lodash/3.10.1/dist/lodash.min')],
            jquery: [cdnjs('jquery/2.1.1/jquery.min'), thirdParty('jquery/2.1.1/dist/jquery.min')],
            ckeditor: {
                min: 'bower_components/ckeditor/dev/builder/release/ckeditor/ckeditor',
                source: 'bower_components/ckeditor/ckeditor'
            },
            color: 'bower_components/color/one-color',
            modernizr: 'js/vendor/modernizr/modernizr.custom.76951',
            keyboardMaster: {
                min: 'js/vendor/keyboardmaster/keymaster.min',
                source: 'js/vendor/keyboardmaster/keymaster'
            },
            react: {
                min: [cdnjs('react/0.12.2/react-with-addons.min'), thirdParty('react/0.12.2/react-with-addons.min')],
                source: thirdParty('react/0.12.2/react-with-addons')
            },
            langs: langsUrl,
            mediaFrame: joinURL(mmgrBaseUrl, 'scripts/media-frame'),
            aviary: thirdParty('aviary/3.1.0.243/js/feather'),
            facebook: ['//connect.facebook.net/en_US/all', 'js/vendor/facebook/facebook.min'],
            pms: 'js/modules/PMS',
            jasmine: 'bower_components/jasmine/lib/jasmine-core/jasmine',
            'jasmine-html': 'bower_components/jasmine/lib/jasmine-core/jasmine-html',
            'jasmine-boot': 'bower_components/jasmine/lib/jasmine-core/boot',
            Bluebird: 'bower_components/bluebird/js/browser/bluebird',
            plugins: 'js/plugins/bundle/plugins.bundle'
        },
        packages: null,
        bundles: {
            plugins: ['text', 'json', 'domReady', 'experiment', 'pLoader']
        },
        shim: {
            lodash: {exports: '_'},
            jquery: {exports: '$'},
            modernizr: {exports: 'Modernizr'},
            keyboardMaster: {exports: 'key'},
            react: {exports: 'React'},
            mediaFrame: {exports: 'MediaFrame', deps: ['jquery']},
            aviary: {exports: 'featherEditor'},
            facebook: {exports: 'FB'},
            'jasmine-html': {
                deps: ['jasmine']
            },
            'jasmine-boot': {
                deps: ['jasmine', 'jasmine-html']
            },
            Bluebird: {exports: 'Bluebird'}
        },
        map: {
            '*': {
                'react/addons': 'react'
            }
        },
        pLoader: {
            santa: getPloaderSantaConfig(serviceTopology, baseVersion, PackagesUtil)
        },
        jsx: {
            baseDefines: {lodash: '_', react: 'React'},
            fileExtension: '.html'
        },
        waitSeconds: 0
    };
}

/*globals joinURL:false */
function getFullRjsConfig(rjsConfigFunc, packagesUtil, reactVersions, artifactData, serviceTopology) {
    /*eslint strict:0 */

    function normalizeUrlToVersion(version, partialUrl) {
        function isAbsoluteUrl(url) {
            return /^\/|\:\/\//.test(url);
        }
        return isAbsoluteUrl(partialUrl) ? partialUrl : version + '/' + partialUrl;
    }

    function applyVersionsObject(versionsObject) {
        function getVersionOfPath(path) {
            return versionsObject[path] || versionsObject.base;
        }

        Object.keys(config.paths).forEach(function (path) {
            config.paths[path] = normalizeUrlToVersion(getVersionOfPath(path), config.paths[path]);
        });

        config.packages.forEach(function (pkg) {
            pkg.location = normalizeUrlToVersion(getVersionOfPath(pkg.name), pkg.location);
        });
    }

    //Call with serviceTopology and all arguments after
    var config = rjsConfigFunc.apply(null, Array.prototype.slice.call(arguments, 4));

    config = packagesUtil.buildConfig(config);
    if (reactVersions) {
        reactVersions = packagesUtil.getVersionsByQuery(reactVersions);
        applyVersionsObject(reactVersions);
    }
    if (artifactData.versionsParam && artifactData.versionsParam.indexOf('http://') === 0) {
        config.baseUrl = artifactData.versionsParam.replace('/target', '');
    } else if (artifactData.baseVersionOverride.indexOf('http://') === 0) {
        config.baseUrl = artifactData.baseVersionOverride;
    } else {
        //TODO: cancel fallback to staticServerUrl when server is stable
        var baseUrlPath = [serviceTopology.scriptsDomainUrl || serviceTopology.staticServerUrl, 'services', artifactData.artifactName];
        baseUrlPath = baseUrlPath.concat(artifactData.baseVersionOverride || []);
        config.baseUrl = joinURL.apply(null, baseUrlPath);
    }
    return config;
}


function runEditor(queryUtil, config) {
    'use strict';

    var packagesArr = ['symbols', 'ckeditor', 'addPanelData', 'rEditor', 'compPanels', 'core', 'wixStore', 'tpa',
        'util', 'blog', 'jquery', 'react', 'lodash', 'aviary', 'superAppMenuInfra', 'savePublish', 'panels',
        'addPanelInfra', 'experiment', 'staticAssets', 'pLoader', 'textControls', 'mediaFrame', 'keyboardMaster',
        'baseUI', 'uiAnimations', 'panelUtils', 'mediaServices', 'color', 'pms', 'databaseEditor', 'text', 'json',
        'gfppData', 'backgroundPresets', 'styles', 'pagesMenu', 'userPreferences',
        'pLoader!santa:skins', 'pLoader!santa:documentServices'];

    if (queryUtil.isParameterTrue('isqa')) {
        packagesArr.push('pLoader!santa:qaAutomation', 'debugTools');
    }
    if (queryUtil.isParameterTrue('isTpaIntegration')) {
        packagesArr.push('tpaIntegrationEditor', 'jasmine', 'jasmine-html', 'Bluebird');
    }

    requirejs(packagesArr, function () {
        function buildFunctionParametersObject(_pkgs, args) {
            return _pkgs.reduce(function (result, pkg, index) {
                result[pkg.replace(/^.*:/, '')] = args[index];
                return result;
            }, {});
        }

        function initConditionalDependencies(_pkgs) {
            var _ = _pkgs.lodash;
            if (_pkgs.debugTools) {
                window.testApi = _.assign({}, window.testApi, {
                    domSelectors: _pkgs.qaAutomation.getDomSelectors(_pkgs.react),
                    helpers: _pkgs.debugTools.helpers
                });
            }
            if (_pkgs.qaAutomation) {
                _pkgs.qaAutomation.init(window);
            }
            if (_pkgs.tpaIntegrationEditor) {
                _pkgs.tpaIntegrationEditor.init(window);
            }
        }

        var util = require('util');
        window.document.title = util.translate('EDITOR_BROWSER_TAB_NAME');
        var p = buildFunctionParametersObject(packagesArr, arguments);
        initConditionalDependencies(p);
        p.util.polyfills.register();

        var root = document.getElementById('root');
        var elem = p.react.createElement(p.rEditor.editorComp);
        window.rendered = p.react.render(elem, root);
    }, function (err) {
        if (!config.urlArgs) {
            if (err.requireModules) {
                err.requireModules.forEach(function (module) {
                    requirejs.undef(module);
                });
            }
            config.urlArgs = 'c=' + Date.now();
            requirejs.config(config);
            requirejs(packagesArr, function () {
                err.errn = 'REQUIREJS_RETRY_ERROR';
                err.errc = 111025;
                err.severity = 10;
                requirejs.onError(err);
            }, function (error) {
                requirejs.onError(error);
            });
        }
    });
}

function filterOpenLangsFromExperiment(langs, queryUtil, runningExperiments) {
    'use strict';
    var params = {
        experiments: 'new',
        experimentsoff: 'old'
    };

    function overrideFromParam(experiments, param) {
        return queryUtil.getParameterByName(param).split(',').reduce(function (accum, exp) {
            if (exp) {
                accum[exp] = params[param];
            }
            return accum;
        }, experiments);
    }

    var experiments = Object.keys(params).reduce(overrideFromParam, runningExperiments);
    return langs.filter(function (locale) {
        return experiments['se_lang_' + locale] === 'new';
    });
}

function determineLanguageCode(langFromModel, langFromQuery, openLangs) {
    'use strict';
    return langFromQuery || (openLangs.indexOf(langFromModel) !== -1 ? langFromModel : 'en');
}

////////////////////////////////////////////////////////////////////////
// requirejs main-r will be generated from this file
////////////////////////////////////////////////////////////////////////
/*eslint santa/enforce-package-access:0*/
/*globals instrument:true, getFullRjsConfig:true, getEditorRjsConfig:true, PackagesUtil:true, packagesUtil:true,
 queryUtil:true, getSubdomain:true, runEditor:true, joinURL:true, overrideScriptsLocationMapFromQuery:true, filterOpenLangsFromExperiment:true,
 determineLanguageCode:true, replaceUrlVersion: true */

// application configuration
function renderSite() {
    'use strict';

    window.mainLoaded = Date.now();

    var editorSource = queryUtil.getParameterByName('EditorSource');
    window.editorModel.editorVersion = editorSource || window.reactVersions && window.reactVersions.base;
    instrument(queryUtil, window.editorModel.editorVersion);
    window.bi.event(458); // main-r loaded event
    window.serviceTopology.mediaManagerUrl = replaceUrlVersion(window.serviceTopology.mediaManagerUrl, queryUtil.getParameterByName('mmgr'));
    window.serviceTopology.scriptsLocationMap = overrideScriptsLocationMapFromQuery(window.serviceTopology.scriptsLocationMap, queryUtil.getParameterByName('scriptsLocations'));

    var wixSupportedLanguages = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'ru', 'nl', 'tr', 'sv', 'pt', 'no', 'da'];
    var openLangs = filterOpenLangsFromExperiment(wixSupportedLanguages, queryUtil, window.editorModel.runningExperiments);
    window.editorModel.languageCode = determineLanguageCode(window.editorModel.languageCode,
                                                            queryUtil.getParameterByName('lang'),
                                                            openLangs);

    var config = getFullRjsConfig(getEditorRjsConfig,
                                  packagesUtil,
                                  window.reactVersions,
                                  {
                                      versionsParam: queryUtil.getParameterByName('SantaEditorVersions'),
                                      baseVersionOverride: editorSource,
                                      artifactName: 'santa-editor'
                                  },
                                  window.serviceTopology,
                                  window.editorModel,
                                  queryUtil.getParameterByName('ReactSource'),
                                  PackagesUtil);
    window.editorModel.editorBase = window.reactVersions ? joinURL(config.baseUrl, window.reactVersions.base) : config.baseUrl;

    requirejs.config(config);

    try {
        document.domain = getSubdomain(document.domain);
    } catch (e) {
        // empty
    }

    runEditor(queryUtil, config);
}

if (window.customRenderSite !== undefined) { // allows to override this in other html files as starting points
    window.customRenderSite();
} else {
    renderSite();
}
