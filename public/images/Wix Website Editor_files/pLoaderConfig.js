function getPloaderSantaConfig(topology, baseVersion, PackagesUtil) {
    var versions = {
  "base": "1.900.2",
  "animations": "1.900.2",
  "cloud": "1.900.2",
  "components": "1.900.2",
  "componentsPreviewLayer": "1.900.2",
  "core": "1.900.2",
  "documentServices": "1.900.2",
  "editingRendererPlugins": "1.900.2",
  "fonts": "1.900.2",
  "layout": "1.900.2",
  "previewExtensionsCore": "1.900.2",
  "qaAutomation": "1.900.2",
  "server": "1.900.2",
  "skins": "1.900.2",
  "testUtils": "1.900.2",
  "tpa": "1.900.2",
  "tpaIntegration": "1.900.2",
  "tweenEngine": "1.900.2",
  "utils": "1.900.2",
  "wixSites": "1.900.2",
  "wixappsBuilder": "1.900.2",
  "wixappsClassics": "1.900.2",
  "wixappsCore": "1.900.2"
};

    function getViewerRjsConfig (serviceTopology) {
    /*eslint strict:0 */

    function joinURL() {
        var url = arguments[0];
        for (var i = 1; i < arguments.length; ++i) {
            url = url.replace(/\/$/, '') + '/' + arguments[i].replace(/^\//, '');
        }
        return url;
    }
    //TODO: cancel fallback to staticServerUrl when server is stable
    var scriptsLocation = serviceTopology.scriptsDomainUrl || serviceTopology.staticServerUrl;
    var serviceURL = joinURL.bind(null, scriptsLocation, 'services', 'third-party');

    return {
        //By default load any module IDs from js/lib
        baseUrl: '/',
        //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
            experiment: 'js/plugins/experiment/experiment',
            modernizr: serviceURL('modernizer/2.6.2/modernizr-2.6.2.min'),
            lodash: ['http://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min', serviceURL('lodash/3.10.1/lodash.min')],
            react: {min: ['https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min', serviceURL('react/0.13.3/react-with-addons.min')], source: serviceURL('react/0.13.3/react-with-addons')},
            //react: {min: serviceURL('react/0.12.2/react-with-addons.min'), source: serviceURL('react/0.12.2/react-with-addons')},
            zepto: serviceURL('zepto/1.1.3/zepto.min'),
            immutable: {min: serviceURL('immutable/3.6.2/immutable.min'), source: serviceURL('immutable/3.6.2/immutable')},
            mousetrap: serviceURL('mousetrap/1.4.6/mousetrap.min'),
            swfobject: serviceURL('swfobject/2.3.20130521/swfobject.min'),
            TweenMax: {min: serviceURL('tweenmax/1.16.1/minified/TweenMax.min'), source: serviceURL('tweenmax/1.16.1/uncompressed/TweenMax')},
            TimelineMax: {min: serviceURL('tweenmax/1.16.1/minified/TweenMax.min'), source: serviceURL('tweenmax/1.16.1/uncompressed/TweenMax')},
            ScrollToPlugin: {min: serviceURL('tweenmax/1.16.1/minified/plugins/ScrollToPlugin.min'), source: serviceURL('tweenmax/1.16.1/uncompressed/plugins/ScrollToPlugin')},
            DrawSVGPlugin: {min: serviceURL('tweenmax/1.16.1/minified/plugins/DrawSVGPlugin.min'), source: serviceURL('tweenmax/1.16.1/uncompressed/plugins/DrawSVGPlugin')},
            color: 'js/vendor/color/color.min',
            jasmine: 'js/vendor/jasmine/jasmine2',
            'jasmine-html': 'js/vendor/jasmine/jasmine-html',
            'jasmine-boot': 'js/vendor/jasmine/jasmine-boot',
            Bluebird: {min: 'js/vendor/bluebird.min', source: 'js/vendor/bluebird'},
            SoundManager: 'js/vendor/soundmanager2/soundmanager2-nodebug-jsmin',
            jjv: 'js/vendor/jjv/jjv.min'
        },
        // generated
        packages: null,
        bundles: null,
        shim: {
            lodash: { exports: '_' },
            react: { exports: 'React' },
            zepto: { exports: '$' },
            color: { exports: 'Color' },
            'jasmine-html': {
                deps: ['jasmine']
            },
            'jasmine-boot': {
                deps: ['jasmine', 'jasmine-html']
            },
            Bluebird: { exports: 'Bluebird' },
            SoundManager: { exports: 'soundManager' },
            jjv: { exports: 'jjv' }
        },
        waitSeconds: 0
    };
}


    var config = getViewerRjsConfig(topology);

    function normalizeUrlToVersion(version, partialUrl) {
        function isAbsoluteUrl(url) {
            return /^\/|\:\/\//.test(url);
        }
        return isAbsoluteUrl(partialUrl) ? partialUrl : version + '/' + partialUrl;
    }

    config.injects =    {
        //'react': 'react',
        'lodash': 'lodash'
    };
    var packages = Object.keys(versions).filter(function(v) { return v !== 'base'});
    var packagesUtil = new PackagesUtil(packages, window.location.search);
    config = packagesUtil.buildConfig(config);

    function getVersionOfPath(path) {
        return versions[path] || versions.base;
    }

    Object.keys(config.paths).forEach(function (path) {
        config.paths[path] = normalizeUrlToVersion(getVersionOfPath(path), config.paths[path]);
    });

    config.packages.forEach(function (pkg) {
        pkg.location = normalizeUrlToVersion(getVersionOfPath(pkg.name), pkg.location);
    });

    //TODO: cancel fallback to staticServerUrl when server is stable
    var scriptsLocation = topology.scriptsDomainUrl || topology.staticServerUrl;
    config.baseUrl = scriptsLocation + 'services/santa/';
    config.versions = versions;

    return config;
}
