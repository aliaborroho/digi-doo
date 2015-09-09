(function(root, factory) {
    "use strict";
    if (typeof exports === "object") {
        module.exports = factory(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains"));
    } else if (typeof define === "function" && define.amd) {
        define([ "./punycode", "./IPv6", "./SecondLevelDomains" ], factory);
    } else {
        root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
    }
})(this, function(punycode, IPv6, SLD, root) {
    "use strict";
    var _URI = root && root.URI;
    function URI(url, base) {
        if (!(this instanceof URI)) {
            return new URI(url, base);
        }
        if (url === undefined) {
            if (typeof location !== "undefined") {
                url = location.href + "";
            } else {
                url = "";
            }
        }
        this.href(url);
        if (base !== undefined) {
            return this.absoluteTo(base);
        }
        return this;
    }
    URI.version = "1.13.2";
    var p = URI.prototype;
    var hasOwn = Object.prototype.hasOwnProperty;
    function escapeRegEx(string) {
        return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function getType(value) {
        if (value === undefined) {
            return "Undefined";
        }
        return String(Object.prototype.toString.call(value)).slice(8, -1);
    }
    function isArray(obj) {
        return getType(obj) === "Array";
    }
    function filterArrayValues(data, value) {
        var lookup = {};
        var i, length;
        if (isArray(value)) {
            for (i = 0, length = value.length; i < length; i++) {
                lookup[value[i]] = true;
            }
        } else {
            lookup[value] = true;
        }
        for (i = 0, length = data.length; i < length; i++) {
            if (lookup[data[i]] !== undefined) {
                data.splice(i, 1);
                length--;
                i--;
            }
        }
        return data;
    }
    function arrayContains(list, value) {
        var i, length;
        if (isArray(value)) {
            for (i = 0, length = value.length; i < length; i++) {
                if (!arrayContains(list, value[i])) {
                    return false;
                }
            }
            return true;
        }
        var _type = getType(value);
        for (i = 0, length = list.length; i < length; i++) {
            if (_type === "RegExp") {
                if (typeof list[i] === "string" && list[i].match(value)) {
                    return true;
                }
            } else if (list[i] === value) {
                return true;
            }
        }
        return false;
    }
    function arraysEqual(one, two) {
        if (!isArray(one) || !isArray(two)) {
            return false;
        }
        if (one.length !== two.length) {
            return false;
        }
        one.sort();
        two.sort();
        for (var i = 0, l = one.length; i < l; i++) {
            if (one[i] !== two[i]) {
                return false;
            }
        }
        return true;
    }
    URI._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: URI.duplicateQueryParameters,
            escapeQuerySpace: URI.escapeQuerySpace
        };
    };
    URI.duplicateQueryParameters = false;
    URI.escapeQuerySpace = true;
    URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    URI.idn_expression = /[^a-z0-9\.-]/i;
    URI.punycode_expression = /(xn--)/i;
    URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    URI.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/
    };
    URI.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    };
    URI.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
    URI.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src"
    };
    URI.getDomAttribute = function(node) {
        if (!node || !node.nodeName) {
            return undefined;
        }
        var nodeName = node.nodeName.toLowerCase();
        if (nodeName === "input" && node.type !== "image") {
            return undefined;
        }
        return URI.domAttributes[nodeName];
    };
    function escapeForDumbFirefox36(value) {
        return escape(value);
    }
    function strictEncodeURIComponent(string) {
        return encodeURIComponent(string).replace(/[!'()*]/g, escapeForDumbFirefox36).replace(/\*/g, "%2A");
    }
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
    URI.iso8859 = function() {
        URI.encode = escape;
        URI.decode = unescape;
    };
    URI.unicode = function() {
        URI.encode = strictEncodeURIComponent;
        URI.decode = decodeURIComponent;
    };
    URI.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        }
    };
    URI.encodeQuery = function(string, escapeQuerySpace) {
        var escaped = URI.encode(string + "");
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }
        return escapeQuerySpace ? escaped.replace(/%20/g, "+") : escaped;
    };
    URI.decodeQuery = function(string, escapeQuerySpace) {
        string += "";
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }
        try {
            return URI.decode(escapeQuerySpace ? string.replace(/\+/g, "%20") : string);
        } catch (e) {
            return string;
        }
    };
    URI.recodePath = function(string) {
        var segments = (string + "").split("/");
        for (var i = 0, length = segments.length; i < length; i++) {
            segments[i] = URI.encodePathSegment(URI.decode(segments[i]));
        }
        return segments.join("/");
    };
    URI.decodePath = function(string) {
        var segments = (string + "").split("/");
        for (var i = 0, length = segments.length; i < length; i++) {
            segments[i] = URI.decodePathSegment(segments[i]);
        }
        return segments.join("/");
    };
    var _parts = {
        encode: "encode",
        decode: "decode"
    };
    var _part;
    var generateAccessor = function(_group, _part) {
        return function(string) {
            return URI[_part](string + "").replace(URI.characters[_group][_part].expression, function(c) {
                return URI.characters[_group][_part].map[c];
            });
        };
    };
    for (_part in _parts) {
        URI[_part + "PathSegment"] = generateAccessor("pathname", _parts[_part]);
    }
    URI.encodeReserved = generateAccessor("reserved", "encode");
    URI.parse = function(string, parts) {
        var pos;
        if (!parts) {
            parts = {};
        }
        pos = string.indexOf("#");
        if (pos > -1) {
            parts.fragment = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }
        pos = string.indexOf("?");
        if (pos > -1) {
            parts.query = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }
        if (string.substring(0, 2) === "//") {
            parts.protocol = null;
            string = string.substring(2);
            string = URI.parseAuthority(string, parts);
        } else {
            pos = string.indexOf(":");
            if (pos > -1) {
                parts.protocol = string.substring(0, pos) || null;
                if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
                    parts.protocol = undefined;
                } else if (parts.protocol === "file") {
                    string = string.substring(pos + 3);
                } else if (string.substring(pos + 1, pos + 3) === "//") {
                    string = string.substring(pos + 3);
                    string = URI.parseAuthority(string, parts);
                } else {
                    string = string.substring(pos + 1);
                    parts.urn = true;
                }
            }
        }
        parts.path = string;
        return parts;
    };
    URI.parseHost = function(string, parts) {
        var pos = string.indexOf("/");
        var bracketPos;
        var t;
        if (pos === -1) {
            pos = string.length;
        }
        if (string.charAt(0) === "[") {
            bracketPos = string.indexOf("]");
            parts.hostname = string.substring(1, bracketPos) || null;
            parts.port = string.substring(bracketPos + 2, pos) || null;
            if (parts.port === "/") {
                parts.port = null;
            }
        } else if (string.indexOf(":") !== string.lastIndexOf(":")) {
            parts.hostname = string.substring(0, pos) || null;
            parts.port = null;
        } else {
            t = string.substring(0, pos).split(":");
            parts.hostname = t[0] || null;
            parts.port = t[1] || null;
        }
        if (parts.hostname && string.substring(pos).charAt(0) !== "/") {
            pos++;
            string = "/" + string;
        }
        return string.substring(pos) || "/";
    };
    URI.parseAuthority = function(string, parts) {
        string = URI.parseUserinfo(string, parts);
        return URI.parseHost(string, parts);
    };
    URI.parseUserinfo = function(string, parts) {
        var firstSlash = string.indexOf("/");
        var pos = firstSlash > -1 ? string.lastIndexOf("@", firstSlash) : string.indexOf("@");
        var t;
        if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
            t = string.substring(0, pos).split(":");
            parts.username = t[0] ? URI.decode(t[0]) : null;
            t.shift();
            parts.password = t[0] ? URI.decode(t.join(":")) : null;
            string = string.substring(pos + 1);
        } else {
            parts.username = null;
            parts.password = null;
        }
        return string;
    };
    URI.parseQuery = function(string, escapeQuerySpace) {
        if (!string) {
            return {};
        }
        string = string.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
        if (!string) {
            return {};
        }
        var items = {};
        var splits = string.split("&");
        var length = splits.length;
        var v, name, value;
        for (var i = 0; i < length; i++) {
            v = splits[i].split("=");
            name = URI.decodeQuery(v.shift(), escapeQuerySpace);
            value = v.length ? URI.decodeQuery(v.join("="), escapeQuerySpace) : null;
            if (items[name]) {
                if (typeof items[name] === "string") {
                    items[name] = [ items[name] ];
                }
                items[name].push(value);
            } else {
                items[name] = value;
            }
        }
        return items;
    };
    URI.build = function(parts) {
        var t = "";
        if (parts.protocol) {
            t += parts.protocol + ":";
        }
        if (!parts.urn && (t || parts.hostname)) {
            t += "//";
        }
        t += URI.buildAuthority(parts) || "";
        if (typeof parts.path === "string") {
            if (parts.path.charAt(0) !== "/" && typeof parts.hostname === "string") {
                t += "/";
            }
            t += parts.path;
        }
        if (typeof parts.query === "string" && parts.query) {
            t += "?" + parts.query;
        }
        if (typeof parts.fragment === "string" && parts.fragment) {
            t += "#" + parts.fragment;
        }
        return t;
    };
    URI.buildHost = function(parts) {
        var t = "";
        if (!parts.hostname) {
            return "";
        } else if (URI.ip6_expression.test(parts.hostname)) {
            t += "[" + parts.hostname + "]";
        } else {
            t += parts.hostname;
        }
        if (parts.port) {
            t += ":" + parts.port;
        }
        return t;
    };
    URI.buildAuthority = function(parts) {
        return URI.buildUserinfo(parts) + URI.buildHost(parts);
    };
    URI.buildUserinfo = function(parts) {
        var t = "";
        if (parts.username) {
            t += URI.encode(parts.username);
            if (parts.password) {
                t += ":" + URI.encode(parts.password);
            }
            t += "@";
        }
        return t;
    };
    URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
        var t = "";
        var unique, key, i, length;
        for (key in data) {
            if (hasOwn.call(data, key) && key) {
                if (isArray(data[key])) {
                    unique = {};
                    for (i = 0, length = data[key].length; i < length; i++) {
                        if (data[key][i] !== undefined && unique[data[key][i] + ""] === undefined) {
                            t += "&" + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
                            if (duplicateQueryParameters !== true) {
                                unique[data[key][i] + ""] = true;
                            }
                        }
                    }
                } else if (data[key] !== undefined) {
                    t += "&" + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
                }
            }
        }
        return t.substring(1);
    };
    URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
        return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? "=" + URI.encodeQuery(value, escapeQuerySpace) : "");
    };
    URI.addQuery = function(data, name, value) {
        if (typeof name === "object") {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    URI.addQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === "string") {
            if (data[name] === undefined) {
                data[name] = value;
                return;
            } else if (typeof data[name] === "string") {
                data[name] = [ data[name] ];
            }
            if (!isArray(value)) {
                value = [ value ];
            }
            data[name] = data[name].concat(value);
        } else {
            throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
        }
    };
    URI.removeQuery = function(data, name, value) {
        var i, length, key;
        if (isArray(name)) {
            for (i = 0, length = name.length; i < length; i++) {
                data[name[i]] = undefined;
            }
        } else if (typeof name === "object") {
            for (key in name) {
                if (hasOwn.call(name, key)) {
                    URI.removeQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === "string") {
            if (value !== undefined) {
                if (data[name] === value) {
                    data[name] = undefined;
                } else if (isArray(data[name])) {
                    data[name] = filterArrayValues(data[name], value);
                }
            } else {
                data[name] = undefined;
            }
        } else {
            throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
        }
    };
    URI.hasQuery = function(data, name, value, withinArray) {
        if (typeof name === "object") {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    if (!URI.hasQuery(data, key, name[key])) {
                        return false;
                    }
                }
            }
            return true;
        } else if (typeof name !== "string") {
            throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        }
        switch (getType(value)) {
          case "Undefined":
            return name in data;

          case "Boolean":
            var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
            return value === _booly;

          case "Function":
            return !!value(data[name], name, data);

          case "Array":
            if (!isArray(data[name])) {
                return false;
            }
            var op = withinArray ? arrayContains : arraysEqual;
            return op(data[name], value);

          case "RegExp":
            if (!isArray(data[name])) {
                return Boolean(data[name] && data[name].match(value));
            }
            if (!withinArray) {
                return false;
            }
            return arrayContains(data[name], value);

          case "Number":
            value = String(value);

          case "String":
            if (!isArray(data[name])) {
                return data[name] === value;
            }
            if (!withinArray) {
                return false;
            }
            return arrayContains(data[name], value);

          default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
        }
    };
    URI.commonPath = function(one, two) {
        var length = Math.min(one.length, two.length);
        var pos;
        for (pos = 0; pos < length; pos++) {
            if (one.charAt(pos) !== two.charAt(pos)) {
                pos--;
                break;
            }
        }
        if (pos < 1) {
            return one.charAt(0) === two.charAt(0) && one.charAt(0) === "/" ? "/" : "";
        }
        if (one.charAt(pos) !== "/" || two.charAt(pos) !== "/") {
            pos = one.substring(0, pos).lastIndexOf("/");
        }
        return one.substring(0, pos + 1);
    };
    URI.withinString = function(string, callback, options) {
        options || (options = {});
        var _start = options.start || URI.findUri.start;
        var _end = options.end || URI.findUri.end;
        var _trim = options.trim || URI.findUri.trim;
        var _attributeOpen = /[a-z0-9-]=["']?$/i;
        _start.lastIndex = 0;
        while (true) {
            var match = _start.exec(string);
            if (!match) {
                break;
            }
            var start = match.index;
            if (options.ignoreHtml) {
                var attributeOpen = string.slice(Math.max(start - 3, 0), start);
                if (attributeOpen && _attributeOpen.test(attributeOpen)) {
                    continue;
                }
            }
            var end = start + string.slice(start).search(_end);
            var slice = string.slice(start, end).replace(_trim, "");
            if (options.ignore && options.ignore.test(slice)) {
                continue;
            }
            end = start + slice.length;
            var result = callback(slice, start, end, string);
            string = string.slice(0, start) + result + string.slice(end);
            _start.lastIndex = start + result.length;
        }
        _start.lastIndex = 0;
        return string;
    };
    URI.ensureValidHostname = function(v) {
        if (v.match(URI.invalid_hostname_characters)) {
            if (!punycode) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
            }
            if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
            }
        }
    };
    URI.noConflict = function(removeAll) {
        if (removeAll) {
            var unconflicted = {
                URI: this.noConflict()
            };
            if (root.URITemplate && typeof root.URITemplate.noConflict === "function") {
                unconflicted.URITemplate = root.URITemplate.noConflict();
            }
            if (root.IPv6 && typeof root.IPv6.noConflict === "function") {
                unconflicted.IPv6 = root.IPv6.noConflict();
            }
            if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === "function") {
                unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
            }
            return unconflicted;
        } else if (root.URI === this) {
            root.URI = _URI;
        }
        return this;
    };
    p.build = function(deferBuild) {
        if (deferBuild === true) {
            this._deferred_build = true;
        } else if (deferBuild === undefined || this._deferred_build) {
            this._string = URI.build(this._parts);
            this._deferred_build = false;
        }
        return this;
    };
    p.clone = function() {
        return new URI(this);
    };
    p.valueOf = p.toString = function() {
        return this.build(false)._string;
    };
    _parts = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    };
    generateAccessor = function(_part) {
        return function(v, build) {
            if (v === undefined) {
                return this._parts[_part] || "";
            } else {
                this._parts[_part] = v || null;
                this.build(!build);
                return this;
            }
        };
    };
    for (_part in _parts) {
        p[_part] = generateAccessor(_parts[_part]);
    }
    _parts = {
        query: "?",
        fragment: "#"
    };
    generateAccessor = function(_part, _key) {
        return function(v, build) {
            if (v === undefined) {
                return this._parts[_part] || "";
            } else {
                if (v !== null) {
                    v = v + "";
                    if (v.charAt(0) === _key) {
                        v = v.substring(1);
                    }
                }
                this._parts[_part] = v;
                this.build(!build);
                return this;
            }
        };
    };
    for (_part in _parts) {
        p[_part] = generateAccessor(_part, _parts[_part]);
    }
    _parts = {
        search: [ "?", "query" ],
        hash: [ "#", "fragment" ]
    };
    generateAccessor = function(_part, _key) {
        return function(v, build) {
            var t = this[_part](v, build);
            return typeof t === "string" && t.length ? _key + t : t;
        };
    };
    for (_part in _parts) {
        p[_part] = generateAccessor(_parts[_part][1], _parts[_part][0]);
    }
    p.pathname = function(v, build) {
        if (v === undefined || v === true) {
            var res = this._parts.path || (this._parts.hostname ? "/" : "");
            return v ? URI.decodePath(res) : res;
        } else {
            this._parts.path = v ? URI.recodePath(v) : "/";
            this.build(!build);
            return this;
        }
    };
    p.path = p.pathname;
    p.href = function(href, build) {
        var key;
        if (href === undefined) {
            return this.toString();
        }
        this._string = "";
        this._parts = URI._parts();
        var _URI = href instanceof URI;
        var _object = typeof href === "object" && (href.hostname || href.path || href.pathname);
        if (href.nodeName) {
            var attribute = URI.getDomAttribute(href);
            href = href[attribute] || "";
            _object = false;
        }
        if (!_URI && _object && href.pathname !== undefined) {
            href = href.toString();
        }
        if (typeof href === "string") {
            this._parts = URI.parse(href, this._parts);
        } else if (_URI || _object) {
            var src = _URI ? href._parts : href;
            for (key in src) {
                if (hasOwn.call(this._parts, key)) {
                    this._parts[key] = src[key];
                }
            }
        } else {
            throw new TypeError("invalid input");
        }
        this.build(!build);
        return this;
    };
    p.is = function(what) {
        var ip = false;
        var ip4 = false;
        var ip6 = false;
        var name = false;
        var sld = false;
        var idn = false;
        var punycode = false;
        var relative = !this._parts.urn;
        if (this._parts.hostname) {
            relative = false;
            ip4 = URI.ip4_expression.test(this._parts.hostname);
            ip6 = URI.ip6_expression.test(this._parts.hostname);
            ip = ip4 || ip6;
            name = !ip;
            sld = name && SLD && SLD.has(this._parts.hostname);
            idn = name && URI.idn_expression.test(this._parts.hostname);
            punycode = name && URI.punycode_expression.test(this._parts.hostname);
        }
        switch (what.toLowerCase()) {
          case "relative":
            return relative;

          case "absolute":
            return !relative;

          case "domain":
          case "name":
            return name;

          case "sld":
            return sld;

          case "ip":
            return ip;

          case "ip4":
          case "ipv4":
          case "inet4":
            return ip4;

          case "ip6":
          case "ipv6":
          case "inet6":
            return ip6;

          case "idn":
            return idn;

          case "url":
            return !this._parts.urn;

          case "urn":
            return !!this._parts.urn;

          case "punycode":
            return punycode;
        }
        return null;
    };
    var _protocol = p.protocol;
    var _port = p.port;
    var _hostname = p.hostname;
    p.protocol = function(v, build) {
        if (v !== undefined) {
            if (v) {
                v = v.replace(/:(\/\/)?$/, "");
                if (!v.match(URI.protocol_expression)) {
                    throw new TypeError('Protocol "' + v + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
                }
            }
        }
        return _protocol.call(this, v, build);
    };
    p.scheme = p.protocol;
    p.port = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v !== undefined) {
            if (v === 0) {
                v = null;
            }
            if (v) {
                v += "";
                if (v.charAt(0) === ":") {
                    v = v.substring(1);
                }
                if (v.match(/[^0-9]/)) {
                    throw new TypeError('Port "' + v + '" contains characters other than [0-9]');
                }
            }
        }
        return _port.call(this, v, build);
    };
    p.hostname = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v !== undefined) {
            var x = {};
            URI.parseHost(v, x);
            v = x.hostname;
        }
        return _hostname.call(this, v, build);
    };
    p.host = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined) {
            return this._parts.hostname ? URI.buildHost(this._parts) : "";
        } else {
            URI.parseHost(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.authority = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined) {
            return this._parts.hostname ? URI.buildAuthority(this._parts) : "";
        } else {
            URI.parseAuthority(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.userinfo = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined) {
            if (!this._parts.username) {
                return "";
            }
            var t = URI.buildUserinfo(this._parts);
            return t.substring(0, t.length - 1);
        } else {
            if (v[v.length - 1] !== "@") {
                v += "@";
            }
            URI.parseUserinfo(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.resource = function(v, build) {
        var parts;
        if (v === undefined) {
            return this.path() + this.search() + this.hash();
        }
        parts = URI.parse(v);
        this._parts.path = parts.path;
        this._parts.query = parts.query;
        this._parts.fragment = parts.fragment;
        this.build(!build);
        return this;
    };
    p.subdomain = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined) {
            if (!this._parts.hostname || this.is("IP")) {
                return "";
            }
            var end = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, end) || "";
        } else {
            var e = this._parts.hostname.length - this.domain().length;
            var sub = this._parts.hostname.substring(0, e);
            var replace = new RegExp("^" + escapeRegEx(sub));
            if (v && v.charAt(v.length - 1) !== ".") {
                v += ".";
            }
            if (v) {
                URI.ensureValidHostname(v);
            }
            this._parts.hostname = this._parts.hostname.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.domain = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (typeof v === "boolean") {
            build = v;
            v = undefined;
        }
        if (v === undefined) {
            if (!this._parts.hostname || this.is("IP")) {
                return "";
            }
            var t = this._parts.hostname.match(/\./g);
            if (t && t.length < 2) {
                return this._parts.hostname;
            }
            var end = this._parts.hostname.length - this.tld(build).length - 1;
            end = this._parts.hostname.lastIndexOf(".", end - 1) + 1;
            return this._parts.hostname.substring(end) || "";
        } else {
            if (!v) {
                throw new TypeError("cannot set domain empty");
            }
            URI.ensureValidHostname(v);
            if (!this._parts.hostname || this.is("IP")) {
                this._parts.hostname = v;
            } else {
                var replace = new RegExp(escapeRegEx(this.domain()) + "$");
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.tld = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (typeof v === "boolean") {
            build = v;
            v = undefined;
        }
        if (v === undefined) {
            if (!this._parts.hostname || this.is("IP")) {
                return "";
            }
            var pos = this._parts.hostname.lastIndexOf(".");
            var tld = this._parts.hostname.substring(pos + 1);
            if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
                return SLD.get(this._parts.hostname) || tld;
            }
            return tld;
        } else {
            var replace;
            if (!v) {
                throw new TypeError("cannot set TLD empty");
            } else if (v.match(/[^a-zA-Z0-9-]/)) {
                if (SLD && SLD.is(v)) {
                    replace = new RegExp(escapeRegEx(this.tld()) + "$");
                    this._parts.hostname = this._parts.hostname.replace(replace, v);
                } else {
                    throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
                }
            } else if (!this._parts.hostname || this.is("IP")) {
                throw new ReferenceError("cannot set TLD on non-domain host");
            } else {
                replace = new RegExp(escapeRegEx(this.tld()) + "$");
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.directory = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined || v === true) {
            if (!this._parts.path && !this._parts.hostname) {
                return "";
            }
            if (this._parts.path === "/") {
                return "/";
            }
            var end = this._parts.path.length - this.filename().length - 1;
            var res = this._parts.path.substring(0, end) || (this._parts.hostname ? "/" : "");
            return v ? URI.decodePath(res) : res;
        } else {
            var e = this._parts.path.length - this.filename().length;
            var directory = this._parts.path.substring(0, e);
            var replace = new RegExp("^" + escapeRegEx(directory));
            if (!this.is("relative")) {
                if (!v) {
                    v = "/";
                }
                if (v.charAt(0) !== "/") {
                    v = "/" + v;
                }
            }
            if (v && v.charAt(v.length - 1) !== "/") {
                v += "/";
            }
            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.filename = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined || v === true) {
            if (!this._parts.path || this._parts.path === "/") {
                return "";
            }
            var pos = this._parts.path.lastIndexOf("/");
            var res = this._parts.path.substring(pos + 1);
            return v ? URI.decodePathSegment(res) : res;
        } else {
            var mutatedDirectory = false;
            if (v.charAt(0) === "/") {
                v = v.substring(1);
            }
            if (v.match(/\.?\//)) {
                mutatedDirectory = true;
            }
            var replace = new RegExp(escapeRegEx(this.filename()) + "$");
            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);
            if (mutatedDirectory) {
                this.normalizePath(build);
            } else {
                this.build(!build);
            }
            return this;
        }
    };
    p.suffix = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? "" : this;
        }
        if (v === undefined || v === true) {
            if (!this._parts.path || this._parts.path === "/") {
                return "";
            }
            var filename = this.filename();
            var pos = filename.lastIndexOf(".");
            var s, res;
            if (pos === -1) {
                return "";
            }
            s = filename.substring(pos + 1);
            res = /^[a-z0-9%]+$/i.test(s) ? s : "";
            return v ? URI.decodePathSegment(res) : res;
        } else {
            if (v.charAt(0) === ".") {
                v = v.substring(1);
            }
            var suffix = this.suffix();
            var replace;
            if (!suffix) {
                if (!v) {
                    return this;
                }
                this._parts.path += "." + URI.recodePath(v);
            } else if (!v) {
                replace = new RegExp(escapeRegEx("." + suffix) + "$");
            } else {
                replace = new RegExp(escapeRegEx(suffix) + "$");
            }
            if (replace) {
                v = URI.recodePath(v);
                this._parts.path = this._parts.path.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.segment = function(segment, v, build) {
        var separator = this._parts.urn ? ":" : "/";
        var path = this.path();
        var absolute = path.substring(0, 1) === "/";
        var segments = path.split(separator);
        if (segment !== undefined && typeof segment !== "number") {
            build = v;
            v = segment;
            segment = undefined;
        }
        if (segment !== undefined && typeof segment !== "number") {
            throw new Error('Bad segment "' + segment + '", must be 0-based integer');
        }
        if (absolute) {
            segments.shift();
        }
        if (segment < 0) {
            segment = Math.max(segments.length + segment, 0);
        }
        if (v === undefined) {
            return segment === undefined ? segments : segments[segment];
        } else if (segment === null || segments[segment] === undefined) {
            if (isArray(v)) {
                segments = [];
                for (var i = 0, l = v.length; i < l; i++) {
                    if (!v[i].length && (!segments.length || !segments[segments.length - 1].length)) {
                        continue;
                    }
                    if (segments.length && !segments[segments.length - 1].length) {
                        segments.pop();
                    }
                    segments.push(v[i]);
                }
            } else if (v || typeof v === "string") {
                if (segments[segments.length - 1] === "") {
                    segments[segments.length - 1] = v;
                } else {
                    segments.push(v);
                }
            }
        } else {
            if (v || typeof v === "string" && v.length) {
                segments[segment] = v;
            } else {
                segments.splice(segment, 1);
            }
        }
        if (absolute) {
            segments.unshift("");
        }
        return this.path(segments.join(separator), build);
    };
    p.segmentCoded = function(segment, v, build) {
        var segments, i, l;
        if (typeof segment !== "number") {
            build = v;
            v = segment;
            segment = undefined;
        }
        if (v === undefined) {
            segments = this.segment(segment, v, build);
            if (!isArray(segments)) {
                segments = segments !== undefined ? URI.decode(segments) : undefined;
            } else {
                for (i = 0, l = segments.length; i < l; i++) {
                    segments[i] = URI.decode(segments[i]);
                }
            }
            return segments;
        }
        if (!isArray(v)) {
            v = typeof v === "string" ? URI.encode(v) : v;
        } else {
            for (i = 0, l = v.length; i < l; i++) {
                v[i] = URI.decode(v[i]);
            }
        }
        return this.segment(segment, v, build);
    };
    var q = p.query;
    p.query = function(v, build) {
        if (v === true) {
            return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        } else if (typeof v === "function") {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            var result = v.call(this, data);
            this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else if (v !== undefined && typeof v !== "string") {
            this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else {
            return q.call(this, v, build);
        }
    };
    p.setQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if (typeof name === "object") {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    data[key] = name[key];
                }
            }
        } else if (typeof name === "string") {
            data[name] = value !== undefined ? value : null;
        } else {
            throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
        }
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== "string") {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.addQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.addQuery(data, name, value === undefined ? null : value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== "string") {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.removeQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.removeQuery(data, name, value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== "string") {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.hasQuery = function(name, value, withinArray) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return URI.hasQuery(data, name, value, withinArray);
    };
    p.setSearch = p.setQuery;
    p.addSearch = p.addQuery;
    p.removeSearch = p.removeQuery;
    p.hasSearch = p.hasQuery;
    p.normalize = function() {
        if (this._parts.urn) {
            return this.normalizeProtocol(false).normalizeQuery(false).normalizeFragment(false).build();
        }
        return this.normalizeProtocol(false).normalizeHostname(false).normalizePort(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
    };
    p.normalizeProtocol = function(build) {
        if (typeof this._parts.protocol === "string") {
            this._parts.protocol = this._parts.protocol.toLowerCase();
            this.build(!build);
        }
        return this;
    };
    p.normalizeHostname = function(build) {
        if (this._parts.hostname) {
            if (this.is("IDN") && punycode) {
                this._parts.hostname = punycode.toASCII(this._parts.hostname);
            } else if (this.is("IPv6") && IPv6) {
                this._parts.hostname = IPv6.best(this._parts.hostname);
            }
            this._parts.hostname = this._parts.hostname.toLowerCase();
            this.build(!build);
        }
        return this;
    };
    p.normalizePort = function(build) {
        if (typeof this._parts.protocol === "string" && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
            this._parts.port = null;
            this.build(!build);
        }
        return this;
    };
    p.normalizePath = function(build) {
        if (this._parts.urn) {
            return this;
        }
        if (!this._parts.path || this._parts.path === "/") {
            return this;
        }
        var _was_relative;
        var _path = this._parts.path;
        var _leadingParents = "";
        var _parent, _pos;
        if (_path.charAt(0) !== "/") {
            _was_relative = true;
            _path = "/" + _path;
        }
        _path = _path.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/");
        if (_was_relative) {
            _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || "";
            if (_leadingParents) {
                _leadingParents = _leadingParents[0];
            }
        }
        while (true) {
            _parent = _path.indexOf("/..");
            if (_parent === -1) {
                break;
            } else if (_parent === 0) {
                _path = _path.substring(3);
                continue;
            }
            _pos = _path.substring(0, _parent).lastIndexOf("/");
            if (_pos === -1) {
                _pos = _parent;
            }
            _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
        }
        if (_was_relative && this.is("relative")) {
            _path = _leadingParents + _path.substring(1);
        }
        _path = URI.recodePath(_path);
        this._parts.path = _path;
        this.build(!build);
        return this;
    };
    p.normalizePathname = p.normalizePath;
    p.normalizeQuery = function(build) {
        if (typeof this._parts.query === "string") {
            if (!this._parts.query.length) {
                this._parts.query = null;
            } else {
                this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
            }
            this.build(!build);
        }
        return this;
    };
    p.normalizeFragment = function(build) {
        if (!this._parts.fragment) {
            this._parts.fragment = null;
            this.build(!build);
        }
        return this;
    };
    p.normalizeSearch = p.normalizeQuery;
    p.normalizeHash = p.normalizeFragment;
    p.iso8859 = function() {
        var e = URI.encode;
        var d = URI.decode;
        URI.encode = escape;
        URI.decode = decodeURIComponent;
        this.normalize();
        URI.encode = e;
        URI.decode = d;
        return this;
    };
    p.unicode = function() {
        var e = URI.encode;
        var d = URI.decode;
        URI.encode = strictEncodeURIComponent;
        URI.decode = unescape;
        this.normalize();
        URI.encode = e;
        URI.decode = d;
        return this;
    };
    p.readable = function() {
        var uri = this.clone();
        uri.username("").password("").normalize();
        var t = "";
        if (uri._parts.protocol) {
            t += uri._parts.protocol + "://";
        }
        if (uri._parts.hostname) {
            if (uri.is("punycode") && punycode) {
                t += punycode.toUnicode(uri._parts.hostname);
                if (uri._parts.port) {
                    t += ":" + uri._parts.port;
                }
            } else {
                t += uri.host();
            }
        }
        if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== "/") {
            t += "/";
        }
        t += uri.path(true);
        if (uri._parts.query) {
            var q = "";
            for (var i = 0, qp = uri._parts.query.split("&"), l = qp.length; i < l; i++) {
                var kv = (qp[i] || "").split("=");
                q += "&" + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace).replace(/&/g, "%26");
                if (kv[1] !== undefined) {
                    q += "=" + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace).replace(/&/g, "%26");
                }
            }
            t += "?" + q.substring(1);
        }
        t += URI.decodeQuery(uri.hash(), true);
        return t;
    };
    p.absoluteTo = function(base) {
        var resolved = this.clone();
        var properties = [ "protocol", "username", "password", "hostname", "port" ];
        var basedir, i, p;
        if (this._parts.urn) {
            throw new Error("URNs do not have any generally defined hierarchical components");
        }
        if (!(base instanceof URI)) {
            base = new URI(base);
        }
        if (!resolved._parts.protocol) {
            resolved._parts.protocol = base._parts.protocol;
        }
        if (this._parts.hostname) {
            return resolved;
        }
        for (i = 0; p = properties[i]; i++) {
            resolved._parts[p] = base._parts[p];
        }
        if (!resolved._parts.path) {
            resolved._parts.path = base._parts.path;
            if (!resolved._parts.query) {
                resolved._parts.query = base._parts.query;
            }
        } else if (resolved._parts.path.substring(-2) === "..") {
            resolved._parts.path += "/";
        }
        if (resolved.path().charAt(0) !== "/") {
            basedir = base.directory();
            resolved._parts.path = (basedir ? basedir + "/" : "") + resolved._parts.path;
            resolved.normalizePath();
        }
        resolved.build();
        return resolved;
    };
    p.relativeTo = function(base) {
        var relative = this.clone().normalize();
        var relativeParts, baseParts, common, relativePath, basePath;
        if (relative._parts.urn) {
            throw new Error("URNs do not have any generally defined hierarchical components");
        }
        base = new URI(base).normalize();
        relativeParts = relative._parts;
        baseParts = base._parts;
        relativePath = relative.path();
        basePath = base.path();
        if (relativePath.charAt(0) !== "/") {
            throw new Error("URI is already relative");
        }
        if (basePath.charAt(0) !== "/") {
            throw new Error("Cannot calculate a URI relative to another relative URI");
        }
        if (relativeParts.protocol === baseParts.protocol) {
            relativeParts.protocol = null;
        }
        if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
            return relative.build();
        }
        if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
            return relative.build();
        }
        if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
            relativeParts.hostname = null;
            relativeParts.port = null;
        } else {
            return relative.build();
        }
        if (relativePath === basePath) {
            relativeParts.path = "";
            return relative.build();
        }
        common = URI.commonPath(relative.path(), base.path());
        if (!common) {
            return relative.build();
        }
        var parents = baseParts.path.substring(common.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
        relativeParts.path = parents + relativeParts.path.substring(common.length);
        return relative.build();
    };
    p.equals = function(uri) {
        var one = this.clone();
        var two = new URI(uri);
        var one_map = {};
        var two_map = {};
        var checked = {};
        var one_query, two_query, key;
        one.normalize();
        two.normalize();
        if (one.toString() === two.toString()) {
            return true;
        }
        one_query = one.query();
        two_query = two.query();
        one.query("");
        two.query("");
        if (one.toString() !== two.toString()) {
            return false;
        }
        if (one_query.length !== two_query.length) {
            return false;
        }
        one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
        two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);
        for (key in one_map) {
            if (hasOwn.call(one_map, key)) {
                if (!isArray(one_map[key])) {
                    if (one_map[key] !== two_map[key]) {
                        return false;
                    }
                } else if (!arraysEqual(one_map[key], two_map[key])) {
                    return false;
                }
                checked[key] = true;
            }
        }
        for (key in two_map) {
            if (hasOwn.call(two_map, key)) {
                if (!checked[key]) {
                    return false;
                }
            }
        }
        return true;
    };
    p.duplicateQueryParameters = function(v) {
        this._parts.duplicateQueryParameters = !!v;
        return this;
    };
    p.escapeQuerySpace = function(v) {
        this._parts.escapeQuerySpace = !!v;
        return this;
    };
    return URI;
});

var PermissionsDefinition = function() {
    function PermissionsDefinition(json) {
        this.permissions = json.permissions;
        this.isOwner = json.isOwner;
        this.$$ownerId = json.ownerId;
        this.$$roles = json.roles;
    }
    return PermissionsDefinition;
}();

var PermissionsDefinitionBuilder = function() {
    function PermissionsDefinitionBuilder() {
        this.roles = [];
        this.permissions = [];
    }
    PermissionsDefinitionBuilder.prototype.withPermissions = function(permissions) {
        this.permissions = permissions;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withIsOwner = function(isOwner) {
        this.isOwner = isOwner;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withOwnerId = function(ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withRoles = function(roles) {
        this.roles = roles;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.build = function() {
        return new PermissionsDefinition({
            permissions: this.permissions,
            isOwner: this.isOwner,
            roles: this.roles,
            ownerId: this.ownerId
        });
    };
    return PermissionsDefinitionBuilder;
}();

"use strict";

angular.module("wixAngularExperiments", []);

angular.module("wixAngularPermissions", []);

angular.module("wixAngularBackwardCompatibility", [ "wixAngularAppInternal", "wixAngularExperiments" ]);

angular.module("wixAngularStorage", [ "wixAngularAppInternal" ]);

angular.module("wixAngularStorageHub", [ "wixAngularStorage" ]);

angular.module("wixAngularAppInternal", []);

angular.module("wixAngularInterceptor", [ "wixAngularAppInternal" ]).config([ "$httpProvider", "wixAngularTopologyProvider", function($httpProvider, wixAngularTopologyProvider) {
    $httpProvider.interceptors.push("wixAngularInterceptor");
    if (!wixAngularTopologyProvider.getStaticsUrl()) {
        wixAngularTopologyProvider.setStaticsUrl(angular.element(document).find("base").attr("href"));
    }
} ]);

angular.module("wixAngularTranslateCompile", [ "pascalprecht.translate" ]);

angular.module("wixAngular", [ "wixAngularAppInternal", "wixAngularTranslateCompile", "wixAngularStorage", "wixAngularExperiments", "wixAngularInterceptor", "wixAngularBackwardCompatibility", "wixAngularPermissions" ]);

"use strict";

angular.module("wixAngularStorage").constant("ANGULAR_STORAGE_PREFIX", "wixAngularStorage").constant("KEY_SEPARATOR", "|").constant("DEFAULT_AGE_IN_SEC", 60 * 60).constant("CLEANING_INTERVAL", 1e3 * 60 * 10).constant("CLEAN_EPSILON", 100).constant("MAX_KEY_LENGTH", 100).constant("MAX_VALUE_SIZE_IN_BYTES", 4 * 1024).constant("MAX_AGE_IN_SEC", 60 * 60 * 24 * 2).constant("MAX_STORAGE_SIZE_IN_BYTES", 1024 * 1024).constant("DATA_TYPE", "data").constant("ADHOC_TYPE", "adhoc").constant("REMOTE_TYPE", "remote").constant("wixAngularStorageErrors", {
    LOGGED_OUT: 1,
    NOT_FOUND: 2,
    RUNTIME_EXCEPTION: 3,
    SERVER_ERROR: 4,
    QUOTA_EXCEEDED: 5
});

"use strict";

(function() {
    function WixAngularStorageController(wixCache, wixStorage) {
        var that = this;
        function getOptions() {
            return {
                siteId: that.siteId,
                noCache: that.noCache
            };
        }
        var writeData = function(res) {
            that.data = res;
        };
        var eraseData = function() {
            that.data = null;
        };
        this.cache = {
            set: function(key, data) {
                wixCache.set(key, data, getOptions());
            },
            setWithGUID: function(data) {
                wixCache.setWithGUID(data).then(function(key) {
                    that.key = key;
                });
            },
            get: function(key) {
                wixCache.get(key, getOptions()).then(writeData, eraseData);
            },
            remove: function(key) {
                wixCache.remove(key, getOptions()).then(eraseData);
            }
        };
        this.remote = {
            set: function(key, value) {
                wixStorage.set(key, value, getOptions());
            },
            get: function(key) {
                wixStorage.get(key, getOptions()).then(writeData, eraseData);
            },
            remove: function(key) {
                wixStorage.remove(key, getOptions()).then(eraseData);
            }
        };
    }
    WixAngularStorageController.$inject = [ "wixCache", "wixStorage" ];
    angular.module("wixAngularAppInternal").controller("WixAngularStorageController", WixAngularStorageController);
})();

"use strict";

(function() {
    function wixTranslateCompile($translate, $compile, $parse) {
        return {
            restrict: "A",
            replace: true,
            link: function(scope, element, attrs) {
                function compileTranslation() {
                    var values = attrs.translateValues ? $parse(attrs.translateValues)(scope) : {};
                    var content = $translate(attrs.wixTranslateCompile, values);
                    element.html(content);
                    $compile(element.contents())(scope);
                }
                compileTranslation();
                scope.$watch(function() {
                    return attrs.wixTranslateCompile;
                }, compileTranslation);
            }
        };
    }
    wixTranslateCompile.$inject = [ "$translate", "$compile", "$parse" ];
    angular.module("wixAngularTranslateCompile").directive("wixTranslateCompile", wixTranslateCompile);
})();

"use strict";

(function() {
    function relativeHref(wixAngularTopology) {
        return {
            priority: 99,
            link: function(scope, element, attr) {
                attr.$observe("relativeHref", function(url) {
                    if (url) {
                        attr.$set("href", wixAngularTopology.staticsUrl + url);
                    }
                });
            }
        };
    }
    relativeHref.$inject = [ "wixAngularTopology" ];
    angular.module("wixAngularAppInternal").directive("relativeHref", relativeHref);
})();

"use strict";

(function() {
    function relativeSrc(wixAngularTopology) {
        return {
            priority: 99,
            link: function(scope, element, attr) {
                attr.$observe("relativeSrc", function(url) {
                    if (url) {
                        attr.$set("src", url.indexOf("images/") === 0 ? wixAngularTopology.staticsUrl + url : url);
                    }
                });
            }
        };
    }
    relativeSrc.$inject = [ "wixAngularTopology" ];
    angular.module("wixAngularAppInternal").directive("relativeSrc", relativeSrc);
})();

"use strict";

(function() {
    function hookPreLink(link, fn) {
        if (typeof link === "function") {
            return {
                pre: fn,
                post: link
            };
        } else {
            var hooked = link.pre;
            link.pre = function() {
                fn.apply(undefined, arguments);
                return hooked.apply(undefined, arguments);
            };
            return link;
        }
    }
    function wixManagersNgDirective(manager, ngDirective, directiveName, ngAttributeName, wixManagerEval) {
        var ngDir = ngDirective[0];
        var ddo = angular.copy(ngDir);
        ddo.compile = function() {
            var ret = ngDir.compile.apply(ngDir, arguments);
            return hookPreLink(ret, function(scope, element, attr) {
                attr[ngAttributeName] = function() {
                    var expr = attr[directiveName];
                    return wixManagerEval.eval(manager, expr, attr.wixPermissionContext);
                };
            });
        };
        return ddo;
    }
    wixManagersNgDirective.$inject = [ "manager", "ngDirective", "directiveName", "ngAttributeName", "wixManagerEval" ];
    function defineNgDirective($injector, manager, name, ngDirective, ngAttributeName) {
        return $injector.invoke(wixManagersNgDirective, this, {
            manager: manager,
            directiveName: name,
            ngDirective: ngDirective,
            ngAttributeName: ngAttributeName
        });
    }
    angular.module("wixAngularExperiments").directive("wixExperimentIf", [ "$injector", "experimentManager", "ngIfDirective", function($injector, experimentManager, ngIfDirective) {
        return defineNgDirective($injector, experimentManager, "wixExperimentIf", ngIfDirective, "ngIf");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionIf", [ "$injector", "permissionsManager", "ngIfDirective", function($injector, permissionsManager, ngIfDirective) {
        return defineNgDirective($injector, permissionsManager, "wixPermissionIf", ngIfDirective, "ngIf");
    } ]);
    angular.module("wixAngularExperiments").directive("wixExperimentDisabled", [ "$injector", "experimentManager", "ngDisabledDirective", function($injector, experimentManager, ngDisabledDirective) {
        return defineNgDirective($injector, experimentManager, "wixExperimentDisabled", ngDisabledDirective, "ngDisabled");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionDisabled", [ "$injector", "permissionsManager", "ngDisabledDirective", function($injector, permissionsManager, ngDisabledDirective) {
        return defineNgDirective($injector, permissionsManager, "wixPermissionDisabled", ngDisabledDirective, "ngDisabled");
    } ]);
})();

"use strict";

(function() {
    function wixManagersClass(manager, directiveName, valuesToCheck, $parse, wixConstValue) {
        return {
            restrict: "A",
            link: function postLink(scope, element, attr) {
                var values = $parse(attr[valuesToCheck])(scope);
                var name = attr[directiveName];
                if (values) {
                    var classToAdd = values[manager.get(wixConstValue(name))];
                    if (classToAdd) {
                        element.addClass(classToAdd);
                    }
                }
            }
        };
    }
    wixManagersClass.$inject = [ "manager", "directiveName", "valuesToCheck", "$parse", "wixConstValue" ];
    function defineClassDirective($injector, manager, name, valuesToCheck) {
        return $injector.invoke(wixManagersClass, this, {
            manager: manager,
            directiveName: name,
            valuesToCheck: valuesToCheck
        });
    }
    angular.module("wixAngularExperiments").directive("wixExperimentClass", [ "$injector", "experimentManager", function($injector, experimentManager) {
        return defineClassDirective($injector, experimentManager, "wixExperimentClass", "experimentValues");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionClass", [ "$injector", "permissionsManager", function($injector, permissionsManager) {
        return defineClassDirective($injector, permissionsManager, "wixPermissionClass", "permissionValues");
    } ]);
})();

"use strict";

(function() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?\.([a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
    function wixMailValidator() {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (EMAIL_REGEXP.test(viewValue)) {
                        ctrl.$setValidity("wixMailValidator", true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity("wixMailValidator", false);
                        return undefined;
                    }
                });
            }
        };
    }
    angular.module("wixAngularAppInternal").directive("wixMailValidator", wixMailValidator);
})();

"use strict";

(function() {
    angular.module("wixAngularAppInternal").factory("wixConstValue", [ "$injector", function($injector) {
        return function(name) {
            var constantValueOrName = $injector.has(name) ? $injector.get(name) : name;
            return constantValueOrName;
        };
    } ]);
})();

"use strict";

(function() {
    function wixAngularInterceptorFactory($q, wixCookies, $rootScope, wixAngularEvents, wixAngularTopology) {
        var wixAngularInterceptor = {};
        var firstUserSwitchTest = true;
        var previousUserGUID;
        function errorHandler(response) {
            return $q.reject(response);
        }
        function checkUserSwitch() {
            if (!firstUserSwitchTest && previousUserGUID !== wixCookies.userGUID) {
                $rootScope.$emit(wixAngularEvents.userSwitch, wixCookies.userGUID, previousUserGUID);
            }
            previousUserGUID = wixCookies.userGUID;
            firstUserSwitchTest = false;
        }
        wixAngularInterceptor.request = function(config) {
            checkUserSwitch();
            if (config.url.match(/\.(?:html|svg)$/)) {
                if (!config.url.match(/(:|^)\/\//)) {
                    if (!config.cache || !config.cache.get || !config.cache.get(config.url)) {
                        config.url = wixAngularTopology.calcPartialsUrl(wixAngularTopology.staticsUrl) + config.url.replace(/^\//, "");
                    }
                }
            } else if (config.url.indexOf("/_api/") === 0) {
                config.url = wixAngularTopology.fixOrigin(config.url);
            }
            return config;
        };
        wixAngularInterceptor.response = function(response) {
            if (response.data) {
                if (response.data.success === false) {
                    response.status = 500;
                    return errorHandler(response);
                } else if (response.data.success === true && response.data.payload !== undefined) {
                    response.data = response.data.payload;
                }
            }
            return response;
        };
        wixAngularInterceptor.responseError = function(response) {
            return errorHandler(response);
        };
        return wixAngularInterceptor;
    }
    wixAngularInterceptorFactory.$inject = [ "$q", "wixCookies", "$rootScope", "wixAngularEvents", "wixAngularTopology" ];
    angular.module("wixAngularAppInternal").factory("wixAngularInterceptor", wixAngularInterceptorFactory).constant("wixAngularEvents", {
        userSwitch: "userSwitch"
    });
})();

"use strict";

(function() {
    function WixAngular(wixAngularTopologyProvider, experimentManagerProvider) {
        this.getStaticsUrl = wixAngularTopologyProvider.getStaticsUrl;
        this.setStaticsUrl = wixAngularTopologyProvider.setStaticsUrl;
        var isExperimentEnabled = experimentManagerProvider.isExperimentEnabled.bind(experimentManagerProvider);
        this.setExperiments = experimentManagerProvider.setExperiments.bind(experimentManagerProvider);
        this.isExperimentEnabled = isExperimentEnabled;
        this.$get = [ "wixAngularTopology", "experimentManager", function(wixAngularTopology, experimentManager) {
            var wixAngular = {};
            wixAngular.experiments = experimentManager.$$getExperimentsObj();
            wixAngular.isExperimentEnabled = isExperimentEnabled;
            wixAngular.fixOrigin = wixAngularTopology.fixOrigin;
            wixAngular.staticsUrl = wixAngularTopology.staticsUrl;
            wixAngular.partialsUrl = wixAngularTopology.partialsUrl;
            return wixAngular;
        } ];
        this.$get.$inject = [ "wixAngularTopology", "experimentManager" ];
    }
    WixAngular.$inject = [ "wixAngularTopologyProvider", "experimentManagerProvider" ];
    angular.module("wixAngularBackwardCompatibility").provider("wixAngular", WixAngular);
})();

"use strict";

(function() {
    function wixCacheFactory($q, recordUtils, cleanableStorage, wixAngularStorageErrors, DEFAULT_AGE_IN_SEC, DATA_TYPE, ADHOC_TYPE, REMOTE_TYPE, CLEAN_EPSILON) {
        var wixCache = {};
        function rejectWithRuntimeException() {
            return $q.reject(wixAngularStorageErrors.RUNTIME_EXCEPTION);
        }
        function tryToSet(key, value) {
            var cacheKey = recordUtils.getCacheKey(key, value.options);
            function returnKey() {
                return key;
            }
            return cleanableStorage.set(cacheKey, value).then(returnKey, function(reason) {
                if (reason === wixAngularStorageErrors.RUNTIME_EXCEPTION) {
                    return rejectWithRuntimeException();
                }
                if (value.options.type === REMOTE_TYPE) {
                    return $q.reject();
                } else {
                    return cleanableStorage.clear(recordUtils.getRecordSize(cacheKey, value) + CLEAN_EPSILON).then(function() {
                        return cleanableStorage.set(cacheKey, value).then(returnKey, rejectWithRuntimeException);
                    }, function() {
                        return $q.reject(wixAngularStorageErrors.QUOTA_EXCEEDED);
                    });
                }
            });
        }
        wixCache.set = function(key, data, options) {
            recordUtils.validateKey(key);
            recordUtils.validateData(data);
            recordUtils.validateExpiration(options);
            var value = {
                createdAt: Date.now(),
                data: data,
                options: angular.extend({
                    expiration: DEFAULT_AGE_IN_SEC,
                    type: DATA_TYPE
                }, options)
            };
            return tryToSet(key, value);
        };
        wixCache.setWithGUID = function(data) {
            var key = recordUtils.generateRandomKey();
            return this.set(key, data, {
                expiration: null,
                type: ADHOC_TYPE
            });
        };
        wixCache.get = function(key, opts) {
            return cleanableStorage.get(recordUtils.getCacheKey(key, opts)).then(function(record) {
                if (record && !recordUtils.isExpired(record)) {
                    return record.data;
                } else {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
            }, rejectWithRuntimeException);
        };
        wixCache.remove = function(key, opts) {
            return cleanableStorage.del(recordUtils.getCacheKey(key, opts)).catch(rejectWithRuntimeException);
        };
        if (!recordUtils.isUserLoggedIn()) {
            wixCache.set = wixCache.get = wixCache.remove = function() {
                return $q.reject(wixAngularStorageErrors.LOGGED_OUT);
            };
        }
        return wixCache;
    }
    wixCacheFactory.$inject = [ "$q", "recordUtils", "cleanableStorage", "wixAngularStorageErrors", "DEFAULT_AGE_IN_SEC", "DATA_TYPE", "ADHOC_TYPE", "REMOTE_TYPE", "CLEAN_EPSILON" ];
    angular.module("wixAngularStorage").factory("wixCache", wixCacheFactory);
})();

"use strict";

(function() {
    function wixCookiesFactory(cookieStr) {
        var parsedUser, prevCookies;
        function parseUserCookie(cookie) {
            var cookieParts = cookie ? cookie.split("|") : [];
            return {
                guid: cookieParts[6],
                userName: cookieParts[0]
            };
        }
        function parseAllCookies(cookies) {
            return cookies.split(";").map(function(str) {
                return str.trim();
            }).reduce(function(acc, curr) {
                var args = curr.split("=");
                acc[args[0]] = args[1];
                return acc;
            }, {});
        }
        function getParsedUserCookie() {
            var cookies = cookieStr() || "";
            if (cookies !== prevCookies) {
                prevCookies = cookies;
                parsedUser = parseUserCookie(parseAllCookies(cookies).wixClient);
            }
            return parsedUser;
        }
        return {
            get userGUID() {
                return getParsedUserCookie().guid;
            },
            get userName() {
                return getParsedUserCookie().userName;
            }
        };
    }
    wixCookiesFactory.$inject = [ "cookieStr" ];
    angular.module("wixAngularAppInternal").factory("wixCookies", wixCookiesFactory).factory("cookieStr", [ "$document", function($document) {
        return function() {
            return $document[0] && $document[0].cookie || "";
        };
    } ]);
})();

"use strict";

(function() {
    function cleanableStorage($interval, $q, recordUtils, DATA_TYPE, CLEANING_INTERVAL, MAX_STORAGE_SIZE_IN_BYTES) {
        var dataKeys = [];
        var remoteAndAdhocKeys = [];
        function getValue(key) {
            return localStorage[key] && JSON.parse(localStorage[key]);
        }
        function clearRecord(key) {
            var record = getValue(key);
            if (record) {
                var recordSize = recordUtils.getRecordSize(key, record);
                delete localStorage[key];
                return recordSize;
            } else {
                return 0;
            }
        }
        function clearRecords(keys) {
            return keys.reduce(function(acc, key) {
                acc += clearRecord(key);
                return acc;
            }, 0);
        }
        function getWixCacheKeys() {
            return Object.keys(localStorage).filter(recordUtils.hasPrefix);
        }
        function getWixCacheSize() {
            return getWixCacheKeys().reduce(function(acc, key) {
                return acc + recordUtils.getRecordSize(key, getValue(key));
            }, 0);
        }
        function loadExistingWixCacheKeys() {
            var createdAtSort = function(a, b) {
                return a.createdAt - b.createdAt;
            };
            var getKey = function(item) {
                return item.key;
            };
            dataKeys = [];
            remoteAndAdhocKeys = [];
            getWixCacheKeys().forEach(function(key) {
                var item = getValue(key);
                var arr = item.options.type === DATA_TYPE ? dataKeys : remoteAndAdhocKeys;
                arr.push({
                    key: key,
                    createdAt: item.createdAt
                });
            });
            dataKeys.sort(createdAtSort);
            remoteAndAdhocKeys.sort(createdAtSort);
            dataKeys = dataKeys.map(getKey);
            remoteAndAdhocKeys = remoteAndAdhocKeys.map(getKey);
        }
        function clearOtherUsers() {
            return clearRecords(getWixCacheKeys().filter(function(key) {
                return !recordUtils.belongsToCurrentUser(key);
            }));
        }
        function clearExpiredRecords() {
            return clearRecords(getWixCacheKeys().filter(function(cacheKey) {
                var record = getValue(cacheKey);
                return recordUtils.isExpired(record);
            }));
        }
        function clearNonExpiredRecord() {
            var arr = remoteAndAdhocKeys.length === 0 ? dataKeys : remoteAndAdhocKeys;
            var key = arr.shift();
            return clearRecord(key);
        }
        function clear(amount) {
            var requiredSpace = amount || 0;
            var clearedSpace = 0;
            clearedSpace += clearOtherUsers();
            clearedSpace += clearExpiredRecords();
            var size = getWixCacheSize();
            var removedRecordsSpace = 0;
            loadExistingWixCacheKeys();
            while (size - removedRecordsSpace > MAX_STORAGE_SIZE_IN_BYTES) {
                var removed = clearNonExpiredRecord();
                clearedSpace += removed;
                removedRecordsSpace += removed;
            }
            if (size - removedRecordsSpace < requiredSpace - clearedSpace) {
                return false;
            }
            while (clearedSpace < requiredSpace) {
                clearedSpace += clearNonExpiredRecord();
            }
            return true;
        }
        function promiseWrapper(fn) {
            var defer = $q.defer();
            try {
                var done;
                var result = fn(function() {
                    done = true;
                    defer.resolve();
                }, function() {
                    done = true;
                    defer.reject();
                });
                if (!done) {
                    defer.resolve(result);
                }
            } catch (e) {
                defer.reject();
            }
            return defer.promise;
        }
        clear();
        $interval(function() {
            clear();
        }, CLEANING_INTERVAL);
        return {
            set: function(key, value) {
                return promiseWrapper(function() {
                    localStorage[key] = JSON.stringify(value);
                });
            },
            get: function(key) {
                return promiseWrapper(function() {
                    return getValue(key);
                });
            },
            del: function(key) {
                return promiseWrapper(function() {
                    delete localStorage[key];
                });
            },
            clear: function(amount) {
                return promiseWrapper(function(resolve, reject) {
                    if (clear(amount)) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            }
        };
    }
    cleanableStorage.$inject = [ "$interval", "$q", "recordUtils", "DATA_TYPE", "CLEANING_INTERVAL", "MAX_STORAGE_SIZE_IN_BYTES" ];
    angular.module("wixAngularStorage").factory("cleanableStorage", cleanableStorage);
})();

"use strict";

(function() {
    function wixStorageFactory($q, $http, recordUtils, wixCache, wixAngularStorageErrors, ANGULAR_STORAGE_PREFIX, REMOTE_TYPE, DEFAULT_AGE_IN_SEC) {
        var wixStorage = {};
        function cacheRemoteData(key, data, options) {
            if (!options.noCache) {
                return wixCache.set(key, data, angular.extend({}, options, {
                    type: REMOTE_TYPE,
                    expiration: DEFAULT_AGE_IN_SEC
                }));
            }
        }
        function getRemote(key, options) {
            var path = options.siteId ? "getVolatilePrefForSite" : "getVolatilePrefForKey";
            var url = [ "/_api/wix-user-preferences-webapp", path, ANGULAR_STORAGE_PREFIX, options.siteId, key ].filter(angular.identity).join("/");
            return $http.get(url).then(function(res) {
                if (res.data[key] === null) {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                cacheRemoteData(key, res.data[key], options);
                return res.data[key];
            }, function(err) {
                if (err.status === 404) {
                    cacheRemoteData(key, null, options);
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                return $q.reject(wixAngularStorageErrors.SERVER_ERROR);
            });
        }
        function tryCache(key, options) {
            return wixCache.get(key, options).then(function(res) {
                if (res === null) {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                return res;
            }, function() {
                return getRemote(key, options);
            });
        }
        wixStorage.set = function(key, data, opts) {
            var options = opts || {};
            recordUtils.validateKey(key);
            recordUtils.validateData(data);
            recordUtils.validateExpiration(options);
            var dto = {
                nameSpace: ANGULAR_STORAGE_PREFIX,
                key: key,
                blob: data
            };
            if (options.siteId) {
                dto.siteId = options.siteId;
            }
            if (options.expiration) {
                dto.TTLInDays = Math.ceil(options.expiration / (60 * 60 * 24));
            }
            return $http.post("/_api/wix-user-preferences-webapp/set", dto).then(function() {
                cacheRemoteData(key, data, options);
                return key;
            });
        };
        wixStorage.get = function(key, opts) {
            var options = opts || {};
            return !options.noCache ? tryCache(key, options) : getRemote(key, options);
        };
        wixStorage.remove = function(key, opts) {
            return wixStorage.set(key, null, opts);
        };
        if (!recordUtils.isUserLoggedIn()) {
            wixStorage.set = wixStorage.get = wixStorage.remove = function() {
                return $q.reject(wixAngularStorageErrors.LOGGED_OUT);
            };
        }
        return wixStorage;
    }
    wixStorageFactory.$inject = [ "$q", "$http", "recordUtils", "wixCache", "wixAngularStorageErrors", "ANGULAR_STORAGE_PREFIX", "REMOTE_TYPE", "DEFAULT_AGE_IN_SEC" ];
    angular.module("wixAngularStorage").factory("wixStorage", wixStorageFactory);
})();

"use strict";

(function() {
    function recordUtilsFactory(wixCookies, ANGULAR_STORAGE_PREFIX, KEY_SEPARATOR, MAX_KEY_LENGTH, MAX_VALUE_SIZE_IN_BYTES, MAX_AGE_IN_SEC) {
        var recordUtils = {};
        function countBytes(str) {
            return encodeURI(str).match(/%..|./g).length;
        }
        function hasExpiration(options) {
            return options && !!options.expiration;
        }
        recordUtils.isUserLoggedIn = function() {
            return wixCookies.userGUID !== undefined;
        };
        recordUtils.validateKey = function(key) {
            if (typeof key !== "string" || key.length > MAX_KEY_LENGTH) {
                throw new Error("Key length should be no more than " + MAX_KEY_LENGTH + " chars");
            }
        };
        recordUtils.validateData = function(data) {
            var val = JSON.stringify(data);
            if (countBytes(val) > MAX_VALUE_SIZE_IN_BYTES) {
                throw new Error("The size of passed data exceeds the allowed " + MAX_VALUE_SIZE_IN_BYTES / 1024 + " KB");
            }
        };
        recordUtils.validateExpiration = function(options) {
            if (hasExpiration(options) && (typeof options.expiration !== "number" || options.expiration > MAX_AGE_IN_SEC)) {
                throw new Error("Expiration should be a number and cannot increase " + MAX_AGE_IN_SEC + " seconds");
            }
        };
        recordUtils.isExpired = function(record) {
            if (hasExpiration(record.options)) {
                return record.createdAt + record.options.expiration * 1e3 <= Date.now();
            } else {
                return false;
            }
        };
        recordUtils.getRecordSize = function(key, value) {
            return countBytes(key) + countBytes(JSON.stringify(value));
        };
        recordUtils.getCacheKey = function(key, opts) {
            var options = opts || {};
            return [ ANGULAR_STORAGE_PREFIX, wixCookies.userGUID, options.siteId, key ].filter(angular.identity).join(KEY_SEPARATOR);
        };
        recordUtils.generateRandomKey = function() {
            return Math.random().toString(36).slice(2);
        };
        recordUtils.hasPrefix = function(key) {
            return key.indexOf(ANGULAR_STORAGE_PREFIX) === 0;
        };
        recordUtils.belongsToCurrentUser = function(key) {
            if (recordUtils.isUserLoggedIn()) {
                return key.split(KEY_SEPARATOR)[1] === wixCookies.userGUID;
            } else {
                return false;
            }
        };
        return recordUtils;
    }
    recordUtilsFactory.$inject = [ "wixCookies", "ANGULAR_STORAGE_PREFIX", "KEY_SEPARATOR", "MAX_KEY_LENGTH", "MAX_VALUE_SIZE_IN_BYTES", "MAX_AGE_IN_SEC" ];
    angular.module("wixAngularStorage").factory("recordUtils", recordUtilsFactory);
})();

"use strict";

(function() {
    function WixAngularTopology($sceDelegateProvider) {
        var staticsUrl = "";
        this.getStaticsUrl = function() {
            return staticsUrl;
        };
        this.setStaticsUrl = function(url) {
            staticsUrl = url && url.replace(/\/?$/, "/").replace(/^\/\//, location.protocol + "//");
            $sceDelegateProvider.resourceUrlWhitelist([ staticsUrl + "**", "self" ]);
        };
        this.$get = [ "$window", "$document", "$location", "$injector", function($window, $document, $location, $injector) {
            var origin = $document.find && $document.find("base").attr("href") ? $window.location.protocol + "//" + $window.location.host : "";
            function isStaging() {
                return /\.wixpress\.com$/.test($window.location.hostname);
            }
            function fixOrigin(url) {
                return url.replace(/^([^\/]*\/\/+)?[^\/]*/, origin);
            }
            var wixAngularTopology = {};
            wixAngularTopology.fixOrigin = fixOrigin;
            wixAngularTopology.calcPartialsUrl = function(staticsUrl, force) {
                if (!force && $location.protocol && $location.protocol() === "https" && $injector.has("experimentManager") && $injector.get("experimentManager").isExperimentEnabled("specs.cx.UseCorsInPartials")) {
                    return staticsUrl;
                } else {
                    return staticsUrl ? fixOrigin(staticsUrl.replace("/services/", "/_partials/")) : "";
                }
            };
            wixAngularTopology.staticsUrl = staticsUrl ? staticsUrl : "";
            wixAngularTopology.partialsUrl = staticsUrl ? fixOrigin(staticsUrl.replace("/services/", "/_partials/")) : "";
            wixAngularTopology.isStaging = isStaging;
            return wixAngularTopology;
        } ];
        this.$get.$inject = [ "$window", "$document", "$location", "$injector" ];
    }
    WixAngularTopology.$inject = [ "$sceDelegateProvider" ];
    angular.module("wixAngularAppInternal").provider("wixAngularTopology", WixAngularTopology);
})();

"use strict";

window.jsonpExperiemts = {};

window.loadExperimentScopeSync = function(scope) {
    var url = "//www.wix.com/_api/wix-laboratory-server/laboratory/conductAllInScope?scope=" + scope + "&accept=jsonp&callback=setExperimentsSync";
    document.write('<script src="' + url + '"></script>');
    window.setExperimentsSync = function(junk, experiments) {
        angular.extend(window.jsonpExperiemts, experiments);
    };
};

var ExperimentManager = function() {
    function ExperimentManager(provider, $http) {
        this.provider = provider;
        this.$http = $http;
        this.petriUrlPrefix = "/_api/wix-laboratory-server/laboratory/";
        this.getExperimentValue = provider.getExperimentValue.bind(provider);
        this.isExperimentEnabled = provider.isExperimentEnabled.bind(provider);
    }
    ExperimentManager.$inject = [ "provider", "$http" ];
    ExperimentManager.prototype.get = function(value) {
        return this.getExperimentValue(value);
    };
    ExperimentManager.prototype.contains = function(value) {
        return this.isExperimentEnabled(value);
    };
    ExperimentManager.prototype.loadScope = function(scope) {
        var _this = this;
        return this.$$queryPetri({
            scope: scope
        }).then(function(experiments) {
            _this.provider.setExperiments(experiments);
            return experiments;
        });
    };
    ExperimentManager.prototype.loadExperiment = function(name, fallback) {
        var _this = this;
        return this.$$queryPetri({
            name: name,
            fallback: fallback
        }).then(function(value) {
            var singleExperiment = {};
            singleExperiment[name] = value;
            _this.provider.setExperiments(singleExperiment);
            return value;
        });
    };
    ExperimentManager.prototype.$$queryPetri = function(params) {
        return this.$http.get(this.getPetriUrl(params), {
            params: this.getQueryParams(params),
            cache: true
        }).then(function(result) {
            return result.data;
        });
    };
    ExperimentManager.prototype.$$getExperimentsObj = function() {
        return this.provider.experiments;
    };
    ExperimentManager.prototype.getPetriUrl = function(params) {
        return this.petriUrlPrefix + (params.scope ? "conductAllInScope/" : "conductExperiment/");
    };
    ExperimentManager.prototype.getQueryParams = function(params) {
        return params.scope ? {
            scope: params.scope
        } : {
            key: params.name,
            fallback: params.fallback
        };
    };
    return ExperimentManager;
}();

var ExperimentManagerProvider = function() {
    function ExperimentManagerProvider() {
        this.experiments = angular.copy(window.jsonpExperiemts);
    }
    ExperimentManagerProvider.prototype.clearExperiments = function() {
        this.experiments = {};
    };
    ExperimentManagerProvider.prototype.isExperimentEnabled = function(name) {
        return this.experiments[name] === "true";
    };
    ExperimentManagerProvider.prototype.setExperiments = function(map) {
        angular.extend(this.experiments, map);
    };
    ExperimentManagerProvider.prototype.getExperimentValue = function(name) {
        return this.experiments[name];
    };
    ExperimentManagerProvider.prototype.$get = function($injector) {
        return $injector.instantiate(ExperimentManager, {
            provider: this
        });
    };
    ExperimentManagerProvider.prototype.$get.$inject = [ "$injector" ];
    return ExperimentManagerProvider;
}();

angular.module("wixAngularExperiments").provider("experimentManager", ExperimentManagerProvider).run([ "$rootScope", "experimentManager", function($rootScope, experimentManager) {
    $rootScope.experimentManager = experimentManager;
} ]);

"use strict";

if (window.beforeEach) {
    window.beforeEach(function() {
        angular.module("experimentManagerMock").config([ "experimentManagerProvider", function(experimentManagerProvider) {
            experimentManagerProvider.clearExperiments();
        } ]);
    });
}

angular.module("experimentManagerMock", []).config([ "$provide", function($provide) {
    $provide.decorator("experimentManager", [ "$delegate", "$q", function($delegate, $q) {
        var originalGetExperimentValue = $delegate.getExperimentValue.bind($delegate);
        var originalIsExperimentEnabled = $delegate.isExperimentEnabled.bind($delegate);
        var scopeToExperiments = {};
        var unexpected = [];
        var used = [];
        function addIfNotExist(val, group) {
            if (group.indexOf(val) === -1) {
                group.push(val);
            }
        }
        function markAsUsedOrUnexpected(experiment) {
            if (originalGetExperimentValue(experiment) === undefined) {
                addIfNotExist(experiment, unexpected);
            } else {
                addIfNotExist(experiment, used);
            }
        }
        function resolvePromise(params) {
            var deferred = $q.defer();
            if (params.scope) {
                deferred.resolve(scopeToExperiments[params.scope] || {});
            } else {
                deferred.resolve(Object.keys(scopeToExperiments).reduce(function(prev, scope) {
                    return prev || scopeToExperiments[scope][params.name];
                }, undefined) || params.fallback);
            }
            return deferred.promise;
        }
        $delegate.getExperimentValue = function(name) {
            markAsUsedOrUnexpected(name);
            return originalGetExperimentValue(name);
        };
        $delegate.isExperimentEnabled = function(name) {
            markAsUsedOrUnexpected(name);
            return originalIsExperimentEnabled(name);
        };
        $delegate.$$queryPetri = function(params) {
            return $q.when(params).then(resolvePromise);
        };
        $delegate.setScopeExperiments = function(str, map) {
            scopeToExperiments[str] = map;
        };
        $delegate.verifyNoUnexpectedExperiments = function() {
            if (unexpected.length) {
                throw "unexpected experiments: " + unexpected.join(", ");
            }
        };
        $delegate.verifyNoUnusedExperiments = function() {
            var unused = Object.keys($delegate.$$getExperimentsObj()).filter(function(experiment) {
                return used.indexOf(experiment) === -1;
            });
            if (unused.length) {
                throw "unused experiments: " + unused.join(", ");
            }
        };
        return $delegate;
    } ]);
} ]);

"use strict";

var PermissionsManager = function() {
    function PermissionsManager(provider) {
        this.provider = provider;
        var defaultContextKey = "permissions";
        this.contextGetter = function() {
            return defaultContextKey;
        };
        this.permissionsContextMap = {};
        this.permissionsContextMap[defaultContextKey] = this.provider.permissionsDefinition;
    }
    PermissionsManager.$inject = [ "provider" ];
    PermissionsManager.prototype.contains = function(value, context) {
        var ctx = context || this.contextGetter();
        var permissionsDefinition = this.permissionsContextMap[ctx];
        return permissionsDefinition ? permissionsDefinition.isOwner || permissionsDefinition.permissions.indexOf(value) !== -1 : false;
    };
    PermissionsManager.prototype.get = function(value) {
        return this.contains(value).toString();
    };
    PermissionsManager.prototype.loadScope = function(scope) {
        throw new Error("This method is not implemented.");
    };
    PermissionsManager.prototype.assignPermissionsMap = function(permissionsMap) {
        angular.extend(this.permissionsContextMap, permissionsMap);
    };
    PermissionsManager.prototype.setContextGetter = function(contextGetter) {
        this.contextGetter = contextGetter;
    };
    PermissionsManager.prototype.$$getOwnerId = function() {
        return this.getCurrentPermissionsDefinition().$$ownerId;
    };
    PermissionsManager.prototype.$$getRoles = function() {
        return this.getCurrentPermissionsDefinition().$$roles;
    };
    PermissionsManager.prototype.$$isOwner = function() {
        return this.getCurrentPermissionsDefinition().isOwner;
    };
    PermissionsManager.prototype.getCurrentPermissionsDefinition = function() {
        return this.permissionsContextMap[this.contextGetter()];
    };
    return PermissionsManager;
}();

var PermissionsManagerProvider = function() {
    function PermissionsManagerProvider() {
        this.permissionsDefinition = new PermissionsDefinition({
            permissions: [],
            isOwner: false,
            ownerId: undefined,
            roles: []
        });
    }
    PermissionsManagerProvider.prototype.setPermissions = function(permissionsDefinition) {
        this.permissionsDefinition = permissionsDefinition;
    };
    PermissionsManagerProvider.prototype.$get = function($injector) {
        return $injector.instantiate(PermissionsManager, {
            provider: this
        });
    };
    PermissionsManagerProvider.prototype.$get.$inject = [ "$injector" ];
    return PermissionsManagerProvider;
}();

angular.module("wixAngularPermissions").provider("permissionsManager", PermissionsManagerProvider);

"use strict";

var IsPermitted = function() {
    function IsPermitted(permissionsManager, wixManagerEval) {
        this.permissionsManager = permissionsManager;
        this.wixManagerEval = wixManagerEval;
    }
    IsPermitted.$inject = [ "permissionsManager", "wixManagerEval" ];
    IsPermitted.prototype.filter = function(input, permissionId, fallback, context) {
        var result = this.wixManagerEval.eval(this.permissionsManager, permissionId, context);
        return result ? input : fallback;
    };
    return IsPermitted;
}();

angular.module("wixAngularPermissions").filter("isPermitted", [ "$injector", function($injector) {
    var isPermitted = $injector.instantiate(IsPermitted);
    return isPermitted.filter.bind(isPermitted);
} ]);

"use strict";

var WixManagerEval = function() {
    function WixManagerEval(wixConstValue) {
        this.wixConstValue = wixConstValue;
    }
    WixManagerEval.$inject = [ "wixConstValue" ];
    WixManagerEval.prototype.eval = function(manager, expr, context) {
        var negationGroups = /^(\!*)([^!].*)/.exec(expr);
        var negation = negationGroups[1];
        var name = negationGroups[2];
        var value = manager.contains(this.wixConstValue(name), context);
        return negation.length % 2 ? !value : value;
    };
    return WixManagerEval;
}();

angular.module("wixAngularAppInternal").service("wixManagerEval", WixManagerEval);