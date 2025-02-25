"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2329], {
        27648: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(72972),
                o = n.n(r)
        },
        15329: function(e, t, n) {
            let r;

            function o(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" != i(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == i(t) ? t : t + ""
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r)
                }
            }

            function l(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function u(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && c(e, t)
            }

            function h(e, t) {
                if (t && ("object" == i(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                return u(e)
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t, n) {
                return (t = a(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return eJ
                }
            });
            var m, g, v, y = n(2265);
            let E = /^[a-z0-9]+(-[a-z0-9]+)*$/,
                b = (e, t, n, r = "") => {
                    let o = e.split(":");
                    if ("@" === e.slice(0, 1)) {
                        if (o.length < 2 || o.length > 3) return null;
                        r = o.shift().slice(1)
                    }
                    if (o.length > 3 || !o.length) return null;
                    if (o.length > 1) {
                        let e = o.pop(),
                            n = o.pop(),
                            i = {
                                provider: o.length > 0 ? o[0] : r,
                                prefix: n,
                                name: e
                            };
                        return t && !w(i) ? null : i
                    }
                    let i = o[0],
                        a = i.split("-");
                    if (a.length > 1) {
                        let e = {
                            provider: r,
                            prefix: a.shift(),
                            name: a.join("-")
                        };
                        return t && !w(e) ? null : e
                    }
                    if (n && "" === r) {
                        let e = {
                            provider: r,
                            prefix: "",
                            name: i
                        };
                        return t && !w(e, n) ? null : e
                    }
                    return null
                },
                w = (e, t) => !!e && !!(("" === e.provider || e.provider.match(E)) && (t && "" === e.prefix || e.prefix.match(E)) && e.name.match(E)),
                T = Object.freeze({
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16
                }),
                L = Object.freeze({
                    rotate: 0,
                    vFlip: !1,
                    hFlip: !1
                }),
                C = Object.freeze({ ...T,
                    ...L
                }),
                M = Object.freeze({ ...C,
                    body: "",
                    hidden: !1
                });

            function A(e, t) {
                let n = function(e, t) {
                    let n = {};
                    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
                    let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
                    return r && (n.rotate = r), n
                }(e, t);
                for (let r in M) r in L ? r in e && !(r in n) && (n[r] = L[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
                return n
            }

            function O(e, t) {
                let n = [];
                if ("object" != typeof e || "object" != typeof e.icons) return n;
                e.not_found instanceof Array && e.not_found.forEach(e => {
                    t(e, null), n.push(e)
                });
                let r = function(e, t) {
                    let n = e.icons,
                        r = e.aliases || Object.create(null),
                        o = Object.create(null);
                    return Object.keys(n).concat(Object.keys(r)).forEach(function e(t) {
                        if (n[t]) return o[t] = [];
                        if (!(t in o)) {
                            o[t] = null;
                            let n = r[t] && r[t].parent,
                                i = n && e(n);
                            i && (o[t] = [n].concat(i))
                        }
                        return o[t]
                    }), o
                }(e);
                for (let o in r) {
                    let i = r[o];
                    i && (t(o, function(e, t, n) {
                        let r = e.icons,
                            o = e.aliases || Object.create(null),
                            i = {};

                        function a(e) {
                            i = A(r[e] || o[e], i)
                        }
                        return a(t), n.forEach(a), A(e, i)
                    }(e, o, i)), n.push(o))
                }
                return n
            }
            let S = {
                provider: "",
                aliases: {},
                not_found: {},
                ...T
            };

            function P(e, t) {
                for (let n in t)
                    if (n in e && typeof e[n] != typeof t[n]) return !1;
                return !0
            }

            function k(e) {
                if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !P(e, S)) return null;
                let t = e.icons;
                for (let e in t) {
                    let n = t[e];
                    if (!e.match(E) || "string" != typeof n.body || !P(n, M)) return null
                }
                let n = e.aliases || Object.create(null);
                for (let e in n) {
                    let r = n[e],
                        o = r.parent;
                    if (!e.match(E) || "string" != typeof o || !t[o] && !n[o] || !P(r, M)) return null
                }
                return e
            }
            let _ = Object.create(null);

            function x(e, t) {
                let n = _[e] || (_[e] = Object.create(null));
                return n[t] || (n[t] = {
                    provider: e,
                    prefix: t,
                    icons: Object.create(null),
                    missing: new Set
                })
            }

            function D(e, t) {
                return k(t) ? O(t, (t, n) => {
                    n ? e.icons[t] = n : e.missing.add(t)
                }) : []
            }
            let R = !1;

            function N(e) {
                return "boolean" == typeof e && (R = e), R
            }
            let V = Object.freeze({
                    width: null,
                    height: null
                }),
                F = Object.freeze({ ...V,
                    ...L
                }),
                U = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                j = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

            function I(e, t, n) {
                if (1 === t) return e;
                if (n = n || 100, "number" == typeof e) return Math.ceil(e * t * n) / n;
                if ("string" != typeof e) return e;
                let r = e.split(U);
                if (null === r || !r.length) return e;
                let o = [],
                    i = r.shift(),
                    a = j.test(i);
                for (;;) {
                    if (a) {
                        let e = parseFloat(i);
                        isNaN(e) ? o.push(i) : o.push(Math.ceil(e * t * n) / n)
                    } else o.push(i);
                    if (void 0 === (i = r.shift())) return o.join("");
                    a = !a
                }
            }
            let B = e => "unset" === e || "undefined" === e || "none" === e,
                z = /\sid="(\S+)"/g,
                W = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16),
                X = 0,
                H = Object.create(null);

            function J(e) {
                return H[e] || H[""]
            }

            function Y(e) {
                let t;
                if ("string" == typeof e.resources) t = [e.resources];
                else if (!((t = e.resources) instanceof Array) || !t.length) return null;
                return {
                    resources: t,
                    path: e.path || "/",
                    maxURL: e.maxURL || 500,
                    rotate: e.rotate || 750,
                    timeout: e.timeout || 5e3,
                    random: !0 === e.random,
                    index: e.index || 0,
                    dataAfterTimeout: !1 !== e.dataAfterTimeout
                }
            }
            let G = Object.create(null),
                q = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                $ = [];
            for (; q.length > 0;) 1 === q.length ? $.push(q.shift()) : Math.random() > .5 ? $.push(q.shift()) : $.push(q.pop());
            G[""] = Y({
                resources: ["https://api.iconify.design"].concat($)
            });
            let K = (() => {
                let e;
                try {
                    if (e = fetch, "function" == typeof e) return e
                } catch (e) {}
            })();

            function Q(e, t) {
                e.forEach(e => {
                    let n = e.loaderCallbacks;
                    n && (e.loaderCallbacks = n.filter(e => e.id !== t))
                })
            }
            let Z = 0;
            var ee = {
                resources: [],
                index: 0,
                timeout: 2e3,
                rotate: 750,
                random: !1,
                dataAfterTimeout: !1
            };

            function et(e) {
                let t = { ...ee,
                        ...e
                    },
                    n = [];

                function r() {
                    n = n.filter(e => "pending" === e().status)
                }
                return {
                    query: function(e, o, i) {
                        let a = function(e, t, n, r) {
                            let o, i;
                            let a = e.resources.length,
                                s = e.random ? Math.floor(Math.random() * a) : e.index;
                            if (e.random) {
                                let t = e.resources.slice(0);
                                for (o = []; t.length > 1;) {
                                    let e = Math.floor(Math.random() * t.length);
                                    o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1))
                                }
                                o = o.concat(t)
                            } else o = e.resources.slice(s).concat(e.resources.slice(0, s));
                            let l = Date.now(),
                                u = "pending",
                                c = 0,
                                d = null,
                                h = [],
                                p = [];

                            function f() {
                                d && (clearTimeout(d), d = null)
                            }

                            function m() {
                                "pending" === u && (u = "aborted"), f(), h.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), h = []
                            }

                            function g(e, t) {
                                t && (p = []), "function" == typeof e && p.push(e)
                            }

                            function v() {
                                u = "failed", p.forEach(e => {
                                    e(void 0, i)
                                })
                            }

                            function y() {
                                h.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), h = []
                            }
                            return "function" == typeof r && p.push(r), setTimeout(function r() {
                                    if ("pending" !== u) return;
                                    f();
                                    let a = o.shift();
                                    if (void 0 === a) {
                                        if (h.length) {
                                            d = setTimeout(() => {
                                                f(), "pending" === u && (y(), v())
                                            }, e.timeout);
                                            return
                                        }
                                        v();
                                        return
                                    }
                                    let s = {
                                        status: "pending",
                                        resource: a,
                                        callback: (t, n) => {
                                            ! function(t, n, a) {
                                                let s = "success" !== n;
                                                switch (h = h.filter(e => e !== t), u) {
                                                    case "pending":
                                                        break;
                                                    case "failed":
                                                        if (s || !e.dataAfterTimeout) return;
                                                        break;
                                                    default:
                                                        return
                                                }
                                                if ("abort" === n) {
                                                    i = a, v();
                                                    return
                                                }
                                                if (s) {
                                                    i = a, h.length || (o.length ? r() : v());
                                                    return
                                                }
                                                if (f(), y(), !e.random) {
                                                    let n = e.resources.indexOf(t.resource); - 1 !== n && n !== e.index && (e.index = n)
                                                }
                                                u = "completed", p.forEach(e => {
                                                    e(a)
                                                })
                                            }(s, t, n)
                                        }
                                    };
                                    h.push(s), c++, d = setTimeout(r, e.rotate), n(a, t, s.callback)
                                }),
                                function() {
                                    return {
                                        startTime: l,
                                        payload: t,
                                        status: u,
                                        queriesSent: c,
                                        queriesPending: h.length,
                                        subscribe: g,
                                        abort: m
                                    }
                                }
                        }(t, e, o, (e, t) => {
                            r(), i && i(e, t)
                        });
                        return n.push(a), a
                    },
                    find: function(e) {
                        return n.find(t => e(t)) || null
                    },
                    setIndex: e => {
                        t.index = e
                    },
                    getIndex: () => t.index,
                    cleanup: r
                }
            }
            let en = Object.create(null),
                er = "iconify2",
                eo = "iconify",
                ei = eo + "-count",
                ea = eo + "-version";

            function es(e, t) {
                try {
                    return e.getItem(t)
                } catch (e) {}
            }

            function el(e, t, n) {
                try {
                    return e.setItem(t, n), !0
                } catch (e) {}
            }

            function eu(e, t) {
                try {
                    e.removeItem(t)
                } catch (e) {}
            }

            function ec(e, t) {
                return el(e, ei, t.toString())
            }

            function ed(e) {
                return parseInt(es(e, ei)) || 0
            }
            let eh = {
                    local: !0,
                    session: !0
                },
                ep = {
                    local: new Set,
                    session: new Set
                },
                ef = !1,
                em = "undefined" == typeof window ? {} : window;

            function eg(e) {
                let t = e + "Storage";
                try {
                    if (em && em[t] && "number" == typeof em[t].length) return em[t]
                } catch (e) {}
                eh[e] = !1
            }

            function ev(e, t) {
                let n = eg(e);
                if (!n) return;
                let r = es(n, ea);
                if (r !== er) {
                    if (r) {
                        let e = ed(n);
                        for (let t = 0; t < e; t++) eu(n, eo + t.toString())
                    }
                    el(n, ea, er), ec(n, 0);
                    return
                }
                let o = Math.floor(Date.now() / 36e5) - 168,
                    i = e => {
                        let r = eo + e.toString(),
                            i = es(n, r);
                        if ("string" == typeof i) {
                            try {
                                let n = JSON.parse(i);
                                if ("object" == typeof n && "number" == typeof n.cached && n.cached > o && "string" == typeof n.provider && "object" == typeof n.data && "string" == typeof n.data.prefix && t(n, e)) return !0
                            } catch (e) {}
                            eu(n, r)
                        }
                    },
                    a = ed(n);
                for (let t = a - 1; t >= 0; t--) i(t) || (t === a - 1 ? ec(n, --a) : ep[e].add(t))
            }

            function ey() {
                if (!ef)
                    for (let e in ef = !0, eh) ev(e, e => {
                        let t = e.data,
                            n = x(e.provider, t.prefix);
                        if (!D(n, t).length) return !1;
                        let r = t.lastModified || -1;
                        return n.lastModifiedCached = n.lastModifiedCached ? Math.min(n.lastModifiedCached, r) : r, !0
                    })
            }

            function eE() {}
            let eb = (e, t) => {
                    let n, r;
                    let o = function(e) {
                        let t = {
                                loaded: [],
                                missing: [],
                                pending: []
                            },
                            n = Object.create(null);
                        e.sort((e, t) => e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name));
                        let r = {
                            provider: "",
                            prefix: "",
                            name: ""
                        };
                        return e.forEach(e => {
                            if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
                            r = e;
                            let o = e.provider,
                                i = e.prefix,
                                a = e.name,
                                s = n[o] || (n[o] = Object.create(null)),
                                l = s[i] || (s[i] = x(o, i));
                            (a in l.icons ? t.loaded : "" === i || l.missing.has(a) ? t.missing : t.pending).push({
                                provider: o,
                                prefix: i,
                                name: a
                            })
                        }), t
                    }(function(e, t = !0, n = !1) {
                        let r = [];
                        return e.forEach(e => {
                            let o = "string" == typeof e ? b(e, t, n) : e;
                            o && r.push(o)
                        }), r
                    }(e, !0, N()));
                    if (!o.pending.length) {
                        let e = !0;
                        return t && setTimeout(() => {
                            e && t(o.loaded, o.missing, o.pending, eE)
                        }), () => {
                            e = !1
                        }
                    }
                    let i = Object.create(null),
                        a = [];
                    return o.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: o
                        } = e;
                        if (o === r && t === n) return;
                        n = t, r = o, a.push(x(t, o));
                        let s = i[t] || (i[t] = Object.create(null));
                        s[o] || (s[o] = [])
                    }), o.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: n,
                            name: r
                        } = e, o = x(t, n), a = o.pendingIcons || (o.pendingIcons = new Set);
                        a.has(r) || (a.add(r), i[t][n].push(r))
                    }), a.forEach(e => {
                        let {
                            provider: t,
                            prefix: n
                        } = e;
                        if (i[t][n].length) {
                            var r;
                            r = i[t][n], e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(r).sort() : e.iconsToLoad = r, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
                                let t;
                                e.iconsQueueFlag = !1;
                                let {
                                    provider: n,
                                    prefix: r
                                } = e, o = e.iconsToLoad;
                                delete e.iconsToLoad, o && (t = J(n)) && t.prepare(n, r, o).forEach(t => {
                                    ! function(e, t, n) {
                                        let r, o;
                                        if ("string" == typeof e) {
                                            let t = J(e);
                                            if (!t) return n(void 0, 424);
                                            o = t.send;
                                            let i = function(e) {
                                                if (!en[e]) {
                                                    let t = G[e];
                                                    if (!t) return;
                                                    let n = et(t);
                                                    en[e] = {
                                                        config: t,
                                                        redundancy: n
                                                    }
                                                }
                                                return en[e]
                                            }(e);
                                            i && (r = i.redundancy)
                                        } else {
                                            let t = Y(e);
                                            if (t) {
                                                r = et(t);
                                                let n = J(e.resources ? e.resources[0] : "");
                                                n && (o = n.send)
                                            }
                                        }
                                        r && o ? r.query(t, o, n)().abort : n(void 0, 424)
                                    }(n, t, n => {
                                        if ("object" != typeof n) t.icons.forEach(t => {
                                            e.missing.add(t)
                                        });
                                        else try {
                                            let t = D(e, n);
                                            if (!t.length) return;
                                            let r = e.pendingIcons;
                                            r && t.forEach(e => {
                                                    r.delete(e)
                                                }),
                                                function(e, t) {
                                                    function n(n) {
                                                        let r, o;
                                                        if (!eh[n] || !(r = eg(n))) return;
                                                        let i = ep[n];
                                                        if (i.size) i.delete(o = Array.from(i).shift());
                                                        else if (o = ed(r), !ec(r, o + 1)) return;
                                                        let a = {
                                                            cached: Math.floor(Date.now() / 36e5),
                                                            provider: e.provider,
                                                            data: t
                                                        };
                                                        return el(r, eo + o.toString(), JSON.stringify(a))
                                                    }
                                                    ef || ey(), (!t.lastModified || function(e, t) {
                                                        let n = e.lastModifiedCached;
                                                        if (n && n >= t) return n === t;
                                                        if (e.lastModifiedCached = t, n)
                                                            for (let n in eh) ev(n, n => {
                                                                let r = n.data;
                                                                return n.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t
                                                            });
                                                        return !0
                                                    }(e, t.lastModified)) && Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"))
                                                }(e, n)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                        e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
                                            e.iconsLoaderFlag = !1, e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
                                                e.pendingCallbacksFlag = !1;
                                                let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                                if (!t.length) return;
                                                let n = !1,
                                                    r = e.provider,
                                                    o = e.prefix;
                                                t.forEach(t => {
                                                    let i = t.icons,
                                                        a = i.pending.length;
                                                    i.pending = i.pending.filter(t => {
                                                        if (t.prefix !== o) return !0;
                                                        let a = t.name;
                                                        if (e.icons[a]) i.loaded.push({
                                                            provider: r,
                                                            prefix: o,
                                                            name: a
                                                        });
                                                        else {
                                                            if (!e.missing.has(a)) return n = !0, !0;
                                                            i.missing.push({
                                                                provider: r,
                                                                prefix: o,
                                                                name: a
                                                            })
                                                        }
                                                        return !1
                                                    }), i.pending.length !== a && (n || Q([e], t.id), t.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), t.abort))
                                                })
                                            }))
                                        }))
                                    })
                                })
                            }))
                        }
                    }), t ? function(e, t, n) {
                        let r = Z++,
                            o = Q.bind(null, n, r);
                        if (!t.pending.length) return o;
                        let i = {
                            id: r,
                            icons: t,
                            callback: e,
                            abort: o
                        };
                        return n.forEach(e => {
                            (e.loaderCallbacks || (e.loaderCallbacks = [])).push(i)
                        }), o
                    }(t, o, a) : eE
                },
                ew = /[\s,]+/,
                eT = { ...F,
                    inline: !1
                },
                eL = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    "aria-hidden": !0,
                    role: "img"
                },
                eC = {
                    display: "inline-block"
                },
                eM = {
                    backgroundColor: "currentColor"
                },
                eA = {
                    backgroundColor: "transparent"
                },
                eO = {
                    Image: "var(--svg)",
                    Repeat: "no-repeat",
                    Size: "100% 100%"
                },
                eS = {
                    WebkitMask: eM,
                    mask: eM,
                    background: eA
                };
            for (let e in eS) {
                let t = eS[e];
                for (let n in eO) t[e + n] = eO[n]
            }
            let eP = { ...eT,
                inline: !0
            };

            function ek(e) {
                return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
            }
            let e_ = (e, t, n, o) => {
                let i = n ? eP : eT,
                    a = function(e, t) {
                        let n = { ...e
                        };
                        for (let e in t) {
                            let r = t[e],
                                o = typeof r;
                            e in V ? (null === r || r && ("string" === o || "number" === o)) && (n[e] = r) : o === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r)
                        }
                        return n
                    }(i, t),
                    s = t.mode || "svg",
                    l = {},
                    u = t.style || {},
                    c = { ..."svg" === s ? eL : {},
                        ref: o
                    };
                for (let e in t) {
                    let n = t[e];
                    if (void 0 !== n) switch (e) {
                        case "icon":
                        case "style":
                        case "children":
                        case "onLoad":
                        case "mode":
                        case "_ref":
                        case "_inline":
                            break;
                        case "inline":
                        case "hFlip":
                        case "vFlip":
                            a[e] = !0 === n || "true" === n || 1 === n;
                            break;
                        case "flip":
                            "string" == typeof n && function(e, t) {
                                t.split(ew).forEach(t => {
                                    switch (t.trim()) {
                                        case "horizontal":
                                            e.hFlip = !0;
                                            break;
                                        case "vertical":
                                            e.vFlip = !0
                                    }
                                })
                            }(a, n);
                            break;
                        case "color":
                            l.color = n;
                            break;
                        case "rotate":
                            "string" == typeof n ? a[e] = function(e, t = 0) {
                                let n = e.replace(/^-?[0-9.]*/, "");

                                function r(e) {
                                    for (; e < 0;) e += 4;
                                    return e % 4
                                }
                                if ("" === n) {
                                    let t = parseInt(e);
                                    return isNaN(t) ? 0 : r(t)
                                }
                                if (n !== e) {
                                    let t = 0;
                                    switch (n) {
                                        case "%":
                                            t = 25;
                                            break;
                                        case "deg":
                                            t = 90
                                    }
                                    if (t) {
                                        let o = parseFloat(e.slice(0, e.length - n.length));
                                        return isNaN(o) ? 0 : (o /= t) % 1 == 0 ? r(o) : 0
                                    }
                                }
                                return t
                            }(n) : "number" == typeof n && (a[e] = n);
                            break;
                        case "ariaHidden":
                        case "aria-hidden":
                            !0 !== n && "true" !== n && delete c["aria-hidden"];
                            break;
                        default:
                            void 0 === i[e] && (c[e] = n)
                    }
                }
                let d = function(e, t) {
                        let n, r;
                        let o = { ...C,
                                ...e
                            },
                            i = { ...F,
                                ...t
                            },
                            a = {
                                left: o.left,
                                top: o.top,
                                width: o.width,
                                height: o.height
                            },
                            s = o.body;
                        [o, i].forEach(e => {
                            let t;
                            let n = [],
                                r = e.hFlip,
                                o = e.vFlip,
                                i = e.rotate;
                            switch (r ? o ? i += 2 : (n.push("translate(" + (a.width + a.left).toString() + " " + (0 - a.top).toString() + ")"), n.push("scale(-1 1)"), a.top = a.left = 0) : o && (n.push("translate(" + (0 - a.left).toString() + " " + (a.height + a.top).toString() + ")"), n.push("scale(1 -1)"), a.top = a.left = 0), i < 0 && (i -= 4 * Math.floor(i / 4)), i %= 4) {
                                case 1:
                                    n.unshift("rotate(90 " + (t = a.height / 2 + a.top).toString() + " " + t.toString() + ")");
                                    break;
                                case 2:
                                    n.unshift("rotate(180 " + (a.width / 2 + a.left).toString() + " " + (a.height / 2 + a.top).toString() + ")");
                                    break;
                                case 3:
                                    n.unshift("rotate(-90 " + (t = a.width / 2 + a.left).toString() + " " + t.toString() + ")")
                            }
                            i % 2 == 1 && (a.left !== a.top && (t = a.left, a.left = a.top, a.top = t), a.width !== a.height && (t = a.width, a.width = a.height, a.height = t)), n.length && (s = '<g transform="' + n.join(" ") + '">' + s + "</g>")
                        });
                        let l = i.width,
                            u = i.height,
                            c = a.width,
                            d = a.height;
                        null === l ? n = I(r = null === u ? "1em" : "auto" === u ? d : u, c / d) : (n = "auto" === l ? c : l, r = null === u ? I(n, d / c) : "auto" === u ? d : u);
                        let h = {},
                            p = (e, t) => {
                                B(t) || (h[e] = t.toString())
                            };
                        return p("width", n), p("height", r), h.viewBox = a.left.toString() + " " + a.top.toString() + " " + c.toString() + " " + d.toString(), {
                            attributes: h,
                            body: s
                        }
                    }(e, a),
                    h = d.attributes;
                if (a.inline && (l.verticalAlign = "-0.125em"), "svg" === s) {
                    var p;
                    c.style = { ...l,
                        ...u
                    }, Object.assign(c, h);
                    let e = 0,
                        n = t.id;
                    return "string" == typeof n && (n = n.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
                        __html: (p = function(e, t = W) {
                            let n;
                            let r = [];
                            for (; n = z.exec(e);) r.push(n[1]);
                            if (!r.length) return e;
                            let o = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
                            return r.forEach(n => {
                                let r = "function" == typeof t ? t(n) : t + (X++).toString(),
                                    i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                e = e.replace(RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"), "$1" + r + o + "$3")
                            }), e = e.replace(RegExp(o, "g"), "")
                        }(d.body, n ? () => n + "ID" + e++ : "iconifyReact"), void 0 === r && function() {
                            try {
                                r = window.trustedTypes.createPolicy("iconify", {
                                    createHTML: e => e
                                })
                            } catch (e) {
                                r = null
                            }
                        }(), r ? r.createHTML(p) : p)
                    }, y.createElement("svg", c)
                }
                let {
                    body: f,
                    width: m,
                    height: g
                } = e, v = "mask" === s || "bg" !== s && -1 !== f.indexOf("currentColor"), E = function(e, t) {
                    let n = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                    for (let e in t) n += " " + e + '="' + t[e] + '"';
                    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
                }(f, { ...h,
                    width: m + "",
                    height: g + ""
                });
                return c.style = { ...l,
                    "--svg": 'url("data:image/svg+xml,' + E.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                    width: ek(h.width),
                    height: ek(h.height),
                    ...eC,
                    ...v ? eM : eA,
                    ...u
                }, y.createElement("span", c)
            };
            if (N(!0), m = {
                    prepare: (e, t, n) => {
                        let r = [],
                            o = function(e, t) {
                                let n;
                                let r = G[e];
                                if (!r) return 0;
                                if (r.maxURL) {
                                    let e = 0;
                                    r.resources.forEach(t => {
                                        e = Math.max(e, t.length)
                                    }), n = r.maxURL - e - r.path.length - (t + ".json?icons=").length
                                } else n = 0;
                                return n
                            }(e, t),
                            i = "icons",
                            a = {
                                type: i,
                                provider: e,
                                prefix: t,
                                icons: []
                            },
                            s = 0;
                        return n.forEach((n, l) => {
                            (s += n.length + 1) >= o && l > 0 && (r.push(a), a = {
                                type: i,
                                provider: e,
                                prefix: t,
                                icons: []
                            }, s = n.length), a.icons.push(n)
                        }), r.push(a), r
                    },
                    send: (e, t, n) => {
                        if (!K) {
                            n("abort", 424);
                            return
                        }
                        let r = function(e) {
                            if ("string" == typeof e) {
                                let t = G[e];
                                if (t) return t.path
                            }
                            return "/"
                        }(t.provider);
                        switch (t.type) {
                            case "icons":
                                r += t.prefix + ".json?" + new URLSearchParams({
                                    icons: t.icons.join(",")
                                }).toString();
                                break;
                            case "custom":
                                {
                                    let e = t.uri;r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                                    break
                                }
                            default:
                                n("abort", 400);
                                return
                        }
                        let o = 503;
                        K(e + r).then(e => {
                            let t = e.status;
                            if (200 !== t) {
                                setTimeout(() => {
                                    n(404 === t ? "abort" : "next", t)
                                });
                                return
                            }
                            return o = 501, e.json()
                        }).then(e => {
                            if ("object" != typeof e || null === e) {
                                setTimeout(() => {
                                    404 === e ? n("abort", e) : n("next", o)
                                });
                                return
                            }
                            setTimeout(() => {
                                n("success", e)
                            })
                        }).catch(() => {
                            n("next", o)
                        })
                    }
                }, H[""] = m, "undefined" != typeof document && "undefined" != typeof window) {
                ey();
                let e = window;
                if (void 0 !== e.IconifyPreload) {
                    let t = e.IconifyPreload,
                        n = "Invalid IconifyPreload syntax.";
                    "object" == typeof t && null !== t && (t instanceof Array ? t : [t]).forEach(e => {
                        try {
                            ("object" != typeof e || null === e || e instanceof Array || "object" != typeof e.icons || "string" != typeof e.prefix || ! function(e, t) {
                                if ("object" != typeof e) return !1;
                                if ("string" != typeof t && (t = e.provider || ""), R && !t && !e.prefix) {
                                    let t = !1;
                                    return k(e) && (e.prefix = "", O(e, (e, n) => {
                                        n && function(e, t) {
                                            let n = b(e, !0, R);
                                            return !!n && function(e, t, n) {
                                                try {
                                                    if ("string" == typeof n.body) return e.icons[t] = { ...n
                                                    }, !0
                                                } catch (e) {}
                                                return !1
                                            }(x(n.provider, n.prefix), n.name, t)
                                        }(e, n) && (t = !0)
                                    })), t
                                }
                                let n = e.prefix;
                                return !!w({
                                    provider: t,
                                    prefix: n,
                                    name: "a"
                                }) && !!D(x(t, n), e)
                            }(e)) && console.error(n)
                        } catch (e) {
                            console.error(n)
                        }
                    })
                }
                if (void 0 !== e.IconifyProviders) {
                    let t = e.IconifyProviders;
                    if ("object" == typeof t && null !== t)
                        for (let e in t) {
                            let n = "IconifyProviders[" + e + "] is invalid.";
                            try {
                                let r = t[e];
                                if ("object" != typeof r || !r || void 0 === r.resources) continue;
                                ! function(e, t) {
                                    let n = Y(t);
                                    return null !== n && (G[e] = n, !0)
                                }(e, r) && console.error(n)
                            } catch (e) {
                                console.error(n)
                            }
                        }
                }
            }
            class ex extends y.Component {
                constructor(e) {
                    super(e), this.state = {
                        icon: null
                    }
                }
                _abortLoading() {
                    this._loading && (this._loading.abort(), this._loading = null)
                }
                _setData(e) {
                    this.state.icon !== e && this.setState({
                        icon: e
                    })
                }
                _checkIcon(e) {
                    let t;
                    let n = this.state,
                        r = this.props.icon;
                    if ("object" == typeof r && null !== r && "string" == typeof r.body) {
                        this._icon = "", this._abortLoading(), (e || null === n.icon) && this._setData({
                            data: r
                        });
                        return
                    }
                    if ("string" != typeof r || null === (t = b(r, !1, !0))) {
                        this._abortLoading(), this._setData(null);
                        return
                    }
                    let o = function(e) {
                        let t = "string" == typeof e ? b(e, !0, R) : e;
                        if (t) {
                            let e = x(t.provider, t.prefix),
                                n = t.name;
                            return e.icons[n] || (e.missing.has(n) ? null : void 0)
                        }
                    }(t);
                    if (!o) {
                        this._loading && this._loading.name === r || (this._abortLoading(), this._icon = "", this._setData(null), null !== o && (this._loading = {
                            name: r,
                            abort: eb([t], this._checkIcon.bind(this, !1))
                        }));
                        return
                    }
                    if (this._icon !== r || null === n.icon) {
                        this._abortLoading(), this._icon = r;
                        let e = ["iconify"];
                        "" !== t.prefix && e.push("iconify--" + t.prefix), "" !== t.provider && e.push("iconify--" + t.provider), this._setData({
                            data: o,
                            classes: e
                        }), this.props.onLoad && this.props.onLoad(r)
                    }
                }
                componentDidMount() {
                    this._checkIcon(!1)
                }
                componentDidUpdate(e) {
                    e.icon !== this.props.icon && this._checkIcon(!0)
                }
                componentWillUnmount() {
                    this._abortLoading()
                }
                render() {
                    let e = this.props,
                        t = this.state.icon;
                    if (null === t) return e.children ? e.children : y.createElement("span", {});
                    let n = e;
                    return t.classes && (n = { ...e,
                        className: ("string" == typeof e.className ? e.className + " " : "") + t.classes.join(" ")
                    }), e_({ ...C,
                        ...t.data
                    }, n, e._inline, e._ref)
                }
            }
            let eD = y.forwardRef(function(e, t) {
                let n = { ...e,
                    _ref: t,
                    _inline: !1
                };
                return y.createElement(ex, n)
            });

            function eR() {
                return (eR = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            y.forwardRef(function(e, t) {
                let n = { ...e,
                    _ref: t,
                    _inline: !0
                };
                return y.createElement(ex, n)
            });
            var eN = function(e) {
                    switch (e) {
                        case "stacked":
                        default:
                            return "rhap_stacked";
                        case "stacked-reverse":
                            return "rhap_stacked-reverse";
                        case "horizontal":
                            return "rhap_horizontal";
                        case "horizontal-reverse":
                            return "rhap_horizontal-reverse"
                    }
                },
                eV = function(e) {
                    return e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
                },
                eF = function(e) {
                    return e > 9 ? e.toString() : "0".concat(e)
                },
                eU = function(e, t, n) {
                    if (!isFinite(e)) return null;
                    var r = Math.floor(e / 60),
                        o = eF(r),
                        i = eF(Math.floor(e % 60)),
                        a = eF(Math.floor(r % 60)),
                        s = Math.floor(r / 60),
                        l = "".concat(o, ":").concat(i),
                        u = "".concat(s, ":").concat(a, ":").concat(i);
                    return "auto" === n ? t >= 3600 ? u : l : "mm:ss" === n ? l : "hh:mm:ss" === n ? u : void 0
                };

            function ej(e, t) {
                var n = !1;
                return function(r) {
                    n || (e(r), n = !0, setTimeout(function() {
                        return n = !1
                    }, t))
                }
            }
            var eI = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = p(r);
                        return e = t ? Reflect.construct(n, arguments, p(this).constructor) : n.apply(this, arguments), h(this, e)
                    });

                    function r() {
                        var e;
                        o(this, r);
                        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                        return f(u(e = n.call.apply(n, [this].concat(i))), "audio", void 0), f(u(e), "timeOnMouseMove", 0), f(u(e), "hasAddedAudioEventListener", !1), f(u(e), "downloadProgressAnimationTimer", void 0), f(u(e), "state", {
                            isDraggingProgress: !1,
                            currentTimePos: "0%",
                            hasDownloadProgressAnimation: !1,
                            downloadProgressArr: [],
                            waitingForSeekCallback: !1
                        }), f(u(e), "getCurrentProgress", function(t) {
                            var n = e.props,
                                r = n.audio,
                                o = n.progressBar;
                            if (0 !== r.src.indexOf("blob:") && void 0 === e.props.srcDuration && (!r.src || !isFinite(r.currentTime) || !o.current)) return {
                                currentTime: 0,
                                currentTimePos: "0%"
                            };
                            var i = o.current.getBoundingClientRect(),
                                a = i.width,
                                s = eV(t) - i.left;
                            return s < 0 ? s = 0 : s > a && (s = a), {
                                currentTime: e.getDuration() * s / a,
                                currentTimePos: "".concat((s / a * 100).toFixed(2), "%")
                            }
                        }), f(u(e), "handleContextMenu", function(e) {
                            e.preventDefault()
                        }), f(u(e), "handleMouseDownOrTouchStartProgressBar", function(t) {
                            t.stopPropagation();
                            var n = e.getCurrentProgress(t.nativeEvent),
                                r = n.currentTime,
                                o = n.currentTimePos;
                            isFinite(r) && (e.timeOnMouseMove = r, e.setState({
                                isDraggingProgress: !0,
                                currentTimePos: o
                            }), t.nativeEvent instanceof MouseEvent ? (window.addEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.addEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.addEventListener("touchend", e.handleWindowMouseOrTouchUp)))
                        }), f(u(e), "handleWindowMouseOrTouchMove", function(t) {
                            t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
                            var n = window.getSelection();
                            if (n && "Range" === n.type && n.empty(), e.state.isDraggingProgress) {
                                var r = e.getCurrentProgress(t),
                                    o = r.currentTime,
                                    i = r.currentTimePos;
                                e.timeOnMouseMove = o, e.setState({
                                    currentTimePos: i
                                })
                            }
                        }), f(u(e), "handleWindowMouseOrTouchUp", function(t) {
                            t.stopPropagation();
                            var n = e.timeOnMouseMove,
                                r = e.props,
                                o = r.audio,
                                i = r.onChangeCurrentTimeError,
                                a = r.onSeek;
                            if (a) e.setState({
                                isDraggingProgress: !1,
                                waitingForSeekCallback: !0
                            }, function() {
                                a(o, n).then(function() {
                                    return e.setState({
                                        waitingForSeekCallback: !1
                                    })
                                }, function(e) {
                                    throw Error(e)
                                })
                            });
                            else {
                                var s = {
                                    isDraggingProgress: !1
                                };
                                if (o.readyState === o.HAVE_NOTHING || o.readyState === o.HAVE_METADATA || !isFinite(n)) try {
                                    o.load()
                                } catch (e) {
                                    return s.currentTimePos = "0%", i && i(e)
                                }
                                o.currentTime = n, e.setState(s)
                            }
                            t instanceof MouseEvent ? (window.removeEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.removeEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleAudioTimeUpdate", ej(function(t) {
                            var n = e.state.isDraggingProgress,
                                r = t.target;
                            if (!n && !0 !== e.state.waitingForSeekCallback) {
                                var o = r.currentTime,
                                    i = e.getDuration();
                                e.setState({
                                    currentTimePos: "".concat((o / i * 100 || 0).toFixed(2), "%")
                                })
                            }
                        }, e.props.progressUpdateInterval)), f(u(e), "handleAudioDownloadProgressUpdate", function(t) {
                            for (var n = t.target, r = e.getDuration(), o = [], i = 0; i < n.buffered.length; i++) {
                                var a = n.buffered.start(i),
                                    s = n.buffered.end(i);
                                o.push({
                                    left: "".concat(Math.round(100 / r * a) || 0, "%"),
                                    width: "".concat(Math.round(100 / r * (s - a)) || 0, "%")
                                })
                            }
                            clearTimeout(e.downloadProgressAnimationTimer), e.setState({
                                downloadProgressArr: o,
                                hasDownloadProgressAnimation: !0
                            }), e.downloadProgressAnimationTimer = setTimeout(function() {
                                e.setState({
                                    hasDownloadProgressAnimation: !1
                                })
                            }, 200)
                        }), e
                    }
                    return l(r, [{
                        key: "getDuration",
                        value: function() {
                            var e = this.props,
                                t = e.audio,
                                n = e.srcDuration;
                            return void 0 === n ? t.duration : n
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = this.props.audio;
                            e && !this.hasAddedAudioEventListener && (this.audio = e, this.hasAddedAudioEventListener = !0, e.addEventListener("timeupdate", this.handleAudioTimeUpdate), e.addEventListener("progress", this.handleAudioDownloadProgressUpdate))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.initialize()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.initialize()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioTimeUpdate), this.audio.removeEventListener("progress", this.handleAudioDownloadProgressUpdate)), clearTimeout(this.downloadProgressAnimationTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.showDownloadProgress,
                                n = e.showFilledProgress,
                                r = e.progressBar,
                                o = e.i18nProgressBar,
                                i = this.state,
                                a = i.currentTimePos,
                                s = i.downloadProgressArr,
                                l = i.hasDownloadProgressAnimation;
                            return y.createElement("div", {
                                className: "rhap_progress-container",
                                ref: r,
                                "aria-label": o,
                                role: "progressbar",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Number(a.split("%")[0]),
                                tabIndex: 0,
                                onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
                                onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
                                onContextMenu: this.handleContextMenu
                            }, y.createElement("div", {
                                className: "rhap_progress-bar ".concat(t ? "rhap_progress-bar-show-download" : "")
                            }, y.createElement("div", {
                                className: "rhap_progress-indicator",
                                style: {
                                    left: a
                                }
                            }), n && y.createElement("div", {
                                className: "rhap_progress-filled",
                                style: {
                                    width: a
                                }
                            }), t && s.map(function(e, t) {
                                var n = e.left,
                                    r = e.width;
                                return y.createElement("div", {
                                    key: t,
                                    className: "rhap_download-progress",
                                    style: {
                                        left: n,
                                        width: r,
                                        transitionDuration: l ? ".2s" : "0s"
                                    }
                                })
                            })))
                        }
                    }]), r
                }(y.Component),
                eB = (0, y.forwardRef)(function(e, t) {
                    return y.createElement(eI, eR({}, e, {
                        progressBar: t
                    }))
                }),
                ez = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = p(r);
                        return e = t ? Reflect.construct(n, arguments, p(this).constructor) : n.apply(this, arguments), h(this, e)
                    });

                    function r(e) {
                        o(this, r), f(u(t = n.call(this, e)), "audio", void 0), f(u(t), "hasAddedAudioEventListener", !1), f(u(t), "state", {
                            currentTime: t.props.defaultCurrentTime
                        }), f(u(t), "handleAudioCurrentTimeChange", function(e) {
                            var n = e.target,
                                r = t.props,
                                o = r.isLeftTime,
                                i = r.timeFormat,
                                a = r.defaultCurrentTime;
                            t.setState({
                                currentTime: eU(o ? n.duration - n.currentTime : n.currentTime, n.duration, i) || a
                            })
                        }), f(u(t), "addAudioEventListeners", function() {
                            var e = t.props.audio;
                            e && !t.hasAddedAudioEventListener && (t.audio = e, t.hasAddedAudioEventListener = !0, e.addEventListener("timeupdate", t.handleAudioCurrentTimeChange), e.addEventListener("loadedmetadata", t.handleAudioCurrentTimeChange))
                        });
                        var t, i = e.audio,
                            a = e.defaultCurrentTime,
                            s = e.isLeftTime,
                            l = e.timeFormat,
                            c = a;
                        return i && (c = eU(s ? i.duration - i.currentTime : i.currentTime, i.duration, l)), t.state = {
                            currentTime: c
                        }, t
                    }
                    return l(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioCurrentTimeChange), this.audio.removeEventListener("loadedmetadata", this.handleAudioCurrentTimeChange))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.currentTime
                        }
                    }]), r
                }(y.PureComponent),
                eW = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = p(r);
                        return e = t ? Reflect.construct(n, arguments, p(this).constructor) : n.apply(this, arguments), h(this, e)
                    });

                    function r(e) {
                        o(this, r), f(u(t = n.call(this, e)), "audio", void 0), f(u(t), "hasAddedAudioEventListener", !1), f(u(t), "state", {
                            duration: t.props.audio ? eU(t.props.audio.duration, t.props.audio.duration, t.props.timeFormat) : t.props.defaultDuration
                        }), f(u(t), "handleAudioDurationChange", function(e) {
                            var n = e.target,
                                r = t.props,
                                o = r.timeFormat,
                                i = r.defaultDuration;
                            t.setState({
                                duration: eU(n.duration, n.duration, o) || i
                            })
                        }), f(u(t), "addAudioEventListeners", function() {
                            var e = t.props.audio;
                            e && !t.hasAddedAudioEventListener && (t.audio = e, t.hasAddedAudioEventListener = !0, e.addEventListener("durationchange", t.handleAudioDurationChange), e.addEventListener("abort", t.handleAudioDurationChange))
                        });
                        var t, i = e.audio,
                            a = e.timeFormat,
                            s = e.defaultDuration;
                        return t.state = {
                            duration: i ? eU(i.duration, i.duration, a) : s
                        }, t
                    }
                    return l(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("durationchange", this.handleAudioDurationChange), this.audio.removeEventListener("abort", this.handleAudioDurationChange))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.duration
                        }
                    }]), r
                }(y.PureComponent),
                eX = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = p(r);
                        return e = t ? Reflect.construct(n, arguments, p(this).constructor) : n.apply(this, arguments), h(this, e)
                    });

                    function r() {
                        var e;
                        o(this, r);
                        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                        return f(u(e = n.call.apply(n, [this].concat(i))), "audio", void 0), f(u(e), "hasAddedAudioEventListener", !1), f(u(e), "volumeBar", (0, y.createRef)()), f(u(e), "volumeAnimationTimer", 0), f(u(e), "lastVolume", e.props.volume), f(u(e), "state", {
                            currentVolumePos: "".concat((e.lastVolume / 1 * 100 || 0).toFixed(2), "%"),
                            hasVolumeAnimation: !1,
                            isDraggingVolume: !1
                        }), f(u(e), "getCurrentVolume", function(t) {
                            var n, r, o = e.props.audio;
                            if (!e.volumeBar.current) return {
                                currentVolume: o.volume,
                                currentVolumePos: e.state.currentVolumePos
                            };
                            var i = e.volumeBar.current.getBoundingClientRect(),
                                a = i.width,
                                s = eV(t) - i.left;
                            return s < 0 ? (n = 0, r = "0%") : s > i.width ? (n = 1, r = "100%") : (n = s / a, r = "".concat(s / a * 100, "%")), {
                                currentVolume: n,
                                currentVolumePos: r
                            }
                        }), f(u(e), "handleContextMenu", function(e) {
                            e.preventDefault()
                        }), f(u(e), "handleClickVolumeButton", function() {
                            var t = e.props.audio;
                            t.volume > 0 ? (e.lastVolume = t.volume, t.volume = 0) : t.volume = e.lastVolume
                        }), f(u(e), "handleVolumnControlMouseOrTouchDown", function(t) {
                            t.stopPropagation();
                            var n = e.props.audio,
                                r = e.getCurrentVolume(t.nativeEvent),
                                o = r.currentVolume,
                                i = r.currentVolumePos;
                            n.volume = o, e.setState({
                                isDraggingVolume: !0,
                                currentVolumePos: i
                            }), t.nativeEvent instanceof MouseEvent ? (window.addEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.addEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.addEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleWindowMouseOrTouchMove", function(t) {
                            t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
                            var n = e.props.audio,
                                r = window.getSelection();
                            if (r && "Range" === r.type && r.empty(), e.state.isDraggingVolume) {
                                var o = e.getCurrentVolume(t),
                                    i = o.currentVolume,
                                    a = o.currentVolumePos;
                                n.volume = i, e.setState({
                                    currentVolumePos: a
                                })
                            }
                        }), f(u(e), "handleWindowMouseOrTouchUp", function(t) {
                            t.stopPropagation(), e.setState({
                                isDraggingVolume: !1
                            }), t instanceof MouseEvent ? (window.removeEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.removeEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleAudioVolumeChange", function(t) {
                            var n = e.state.isDraggingVolume,
                                r = t.target.volume;
                            (e.lastVolume > 0 && 0 === r || 0 === e.lastVolume && r > 0) && e.props.onMuteChange(), e.lastVolume = r, n || (e.setState({
                                hasVolumeAnimation: !0,
                                currentVolumePos: "".concat((r / 1 * 100 || 0).toFixed(2), "%")
                            }), clearTimeout(e.volumeAnimationTimer), e.volumeAnimationTimer = setTimeout(function() {
                                e.setState({
                                    hasVolumeAnimation: !1
                                })
                            }, 100))
                        }), e
                    }
                    return l(r, [{
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.props.audio;
                            e && !this.hasAddedAudioEventListener && (this.audio = e, this.hasAddedAudioEventListener = !0, e.addEventListener("volumechange", this.handleAudioVolumeChange))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && this.audio.removeEventListener("volumechange", this.handleAudioVolumeChange), clearTimeout(this.volumeAnimationTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.audio,
                                n = e.showFilledVolume,
                                r = e.i18nVolumeControl,
                                o = this.state,
                                i = o.currentVolumePos,
                                a = o.hasVolumeAnimation,
                                s = (t || {}).volume;
                            return y.createElement("div", {
                                ref: this.volumeBar,
                                onMouseDown: this.handleVolumnControlMouseOrTouchDown,
                                onTouchStart: this.handleVolumnControlMouseOrTouchDown,
                                onContextMenu: this.handleContextMenu,
                                role: "progressbar",
                                "aria-label": r,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Number((100 * s).toFixed(0)),
                                tabIndex: 0,
                                className: "rhap_volume-bar-area"
                            }, y.createElement("div", {
                                className: "rhap_volume-bar"
                            }, y.createElement("div", {
                                className: "rhap_volume-indicator",
                                style: {
                                    left: i,
                                    transitionDuration: a ? ".1s" : "0s"
                                }
                            }), n && y.createElement("div", {
                                className: "rhap_volume-filled",
                                style: {
                                    width: i
                                }
                            })))
                        }
                    }]), r
                }(y.Component);
            (g = v || (v = {})).CURRENT_TIME = "CURRENT_TIME", g.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME", g.PROGRESS_BAR = "PROGRESS_BAR", g.DURATION = "DURATION", g.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS", g.MAIN_CONTROLS = "MAIN_CONTROLS", g.VOLUME_CONTROLS = "VOLUME_CONTROLS", g.LOOP = "LOOP", g.VOLUME = "VOLUME";
            var eH = function(e) {
                d(r, e);
                var t, n = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = p(r);
                    return e = t ? Reflect.construct(n, arguments, p(this).constructor) : n.apply(this, arguments), h(this, e)
                });

                function r() {
                    var e;
                    o(this, r);
                    for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                    return f(u(e = n.call.apply(n, [this].concat(i))), "audio", (0, y.createRef)()), f(u(e), "progressBar", (0, y.createRef)()), f(u(e), "container", (0, y.createRef)()), f(u(e), "lastVolume", e.props.volume), f(u(e), "listenTracker", void 0), f(u(e), "volumeAnimationTimer", void 0), f(u(e), "downloadProgressAnimationTimer", void 0), f(u(e), "togglePlay", function(t) {
                        t.stopPropagation();
                        var n = e.audio.current;
                        (n.paused || n.ended) && n.src ? e.playAudioPromise() : n.paused || n.pause()
                    }), f(u(e), "playAudioPromise", function() {
                        e.audio.current.error && e.audio.current.load();
                        var t = e.audio.current.play();
                        t ? t.then(null).catch(function(t) {
                            var n = e.props.onPlayError;
                            n && n(Error(t))
                        }) : e.forceUpdate()
                    }), f(u(e), "isPlaying", function() {
                        var t = e.audio.current;
                        return !!t && !t.paused && !t.ended
                    }), f(u(e), "handlePlay", function(t) {
                        e.forceUpdate(), e.props.onPlay && e.props.onPlay(t)
                    }), f(u(e), "handlePause", function(t) {
                        e.audio && (e.forceUpdate(), e.props.onPause && e.props.onPause(t))
                    }), f(u(e), "handleEnded", function(t) {
                        e.audio && (e.forceUpdate(), e.props.onEnded && e.props.onEnded(t))
                    }), f(u(e), "handleAbort", function(t) {
                        e.props.onAbort && e.props.onAbort(t)
                    }), f(u(e), "handleClickVolumeButton", function() {
                        var t = e.audio.current;
                        t.volume > 0 ? (e.lastVolume = t.volume, t.volume = 0) : t.volume = e.lastVolume
                    }), f(u(e), "handleMuteChange", function() {
                        e.forceUpdate()
                    }), f(u(e), "handleClickLoopButton", function() {
                        e.audio.current.loop = !e.audio.current.loop, e.forceUpdate()
                    }), f(u(e), "handleClickRewind", function() {
                        var t = e.props,
                            n = t.progressJumpSteps,
                            r = t.progressJumpStep,
                            o = n.backward || r;
                        e.setJumpTime(-o)
                    }), f(u(e), "handleClickForward", function() {
                        var t = e.props,
                            n = t.progressJumpSteps,
                            r = t.progressJumpStep,
                            o = n.forward || r;
                        e.setJumpTime(o)
                    }), f(u(e), "setJumpTime", function(t) {
                        var n = e.audio.current,
                            r = n.duration,
                            o = n.currentTime;
                        if (n.readyState === n.HAVE_NOTHING || n.readyState === n.HAVE_METADATA || !isFinite(r) || !isFinite(o)) try {
                            n.load()
                        } catch (t) {
                            return e.props.onChangeCurrentTimeError && e.props.onChangeCurrentTimeError(t)
                        }
                        var i = o + t / 1e3;
                        i < 0 ? (n.currentTime = 0, i = 0) : i > r ? (n.currentTime = r, i = r) : n.currentTime = i
                    }), f(u(e), "setJumpVolume", function(t) {
                        var n = e.audio.current.volume + t;
                        n < 0 ? n = 0 : n > 1 && (n = 1), e.audio.current.volume = n
                    }), f(u(e), "handleKeyDown", function(t) {
                        if (e.props.hasDefaultKeyBindings) switch (t.key) {
                            case " ":
                                (t.target === e.container.current || t.target === e.progressBar.current) && (t.preventDefault(), e.togglePlay(t));
                                break;
                            case "ArrowLeft":
                                e.handleClickRewind();
                                break;
                            case "ArrowRight":
                                e.handleClickForward();
                                break;
                            case "ArrowUp":
                                t.preventDefault(), e.setJumpVolume(e.props.volumeJumpStep);
                                break;
                            case "ArrowDown":
                                t.preventDefault(), e.setJumpVolume(-e.props.volumeJumpStep);
                                break;
                            case "l":
                                e.handleClickLoopButton();
                                break;
                            case "m":
                                e.handleClickVolumeButton()
                        }
                    }), f(u(e), "renderUIModules", function(t) {
                        return t.map(function(t, n) {
                            return e.renderUIModule(t, n)
                        })
                    }), f(u(e), "renderUIModule", function(t, n) {
                        var r = e.props,
                            o = r.defaultCurrentTime,
                            i = r.progressUpdateInterval,
                            a = r.showDownloadProgress,
                            s = r.showFilledProgress,
                            l = r.showFilledVolume,
                            u = r.defaultDuration,
                            c = r.customIcons,
                            d = r.showSkipControls,
                            h = r.onClickPrevious,
                            p = r.onClickNext,
                            f = r.onChangeCurrentTimeError,
                            m = r.showJumpControls,
                            g = r.customAdditionalControls,
                            E = r.customVolumeControls,
                            b = r.muted,
                            w = r.timeFormat,
                            T = r.volume,
                            L = r.loop,
                            C = r.mse,
                            M = r.i18nAriaLabels;
                        switch (t) {
                            case v.CURRENT_TIME:
                                return y.createElement("div", {
                                    key: n,
                                    id: "rhap_current-time",
                                    className: "rhap_time rhap_current-time"
                                }, y.createElement(ez, {
                                    audio: e.audio.current,
                                    isLeftTime: !1,
                                    defaultCurrentTime: o,
                                    timeFormat: w
                                }));
                            case v.CURRENT_LEFT_TIME:
                                return y.createElement("div", {
                                    key: n,
                                    id: "rhap_current-left-time",
                                    className: "rhap_time rhap_current-left-time"
                                }, y.createElement(ez, {
                                    audio: e.audio.current,
                                    isLeftTime: !0,
                                    defaultCurrentTime: o,
                                    timeFormat: w
                                }));
                            case v.PROGRESS_BAR:
                                return y.createElement(eB, {
                                    key: n,
                                    ref: e.progressBar,
                                    audio: e.audio.current,
                                    progressUpdateInterval: i,
                                    showDownloadProgress: a,
                                    showFilledProgress: s,
                                    onSeek: C && C.onSeek,
                                    onChangeCurrentTimeError: f,
                                    srcDuration: C && C.srcDuration,
                                    i18nProgressBar: M.progressControl
                                });
                            case v.DURATION:
                                return y.createElement("div", {
                                    key: n,
                                    className: "rhap_time rhap_total-time"
                                }, C && C.srcDuration ? eU(C.srcDuration, C.srcDuration, e.props.timeFormat) : y.createElement(eW, {
                                    audio: e.audio.current,
                                    defaultDuration: u,
                                    timeFormat: w
                                }));
                            case v.ADDITIONAL_CONTROLS:
                                return y.createElement("div", {
                                    key: n,
                                    className: "rhap_additional-controls"
                                }, e.renderUIModules(g));
                            case v.MAIN_CONTROLS:
                                var A, O = e.isPlaying();
                                return A = O ? c.pause ? c.pause : y.createElement(eD, {
                                    icon: "mdi:pause-circle"
                                }) : c.play ? c.play : y.createElement(eD, {
                                    icon: "mdi:play-circle"
                                }), y.createElement("div", {
                                    key: n,
                                    className: "rhap_main-controls"
                                }, d && y.createElement("button", {
                                    "aria-label": M.previous,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                                    type: "button",
                                    onClick: h
                                }, c.previous ? c.previous : y.createElement(eD, {
                                    icon: "mdi:skip-previous"
                                })), m && y.createElement("button", {
                                    "aria-label": M.rewind,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                                    type: "button",
                                    onClick: e.handleClickRewind
                                }, c.rewind ? c.rewind : y.createElement(eD, {
                                    icon: "mdi:rewind"
                                })), y.createElement("button", {
                                    "aria-label": O ? M.pause : M.play,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                                    type: "button",
                                    onClick: e.togglePlay
                                }, A), m && y.createElement("button", {
                                    "aria-label": M.forward,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                                    type: "button",
                                    onClick: e.handleClickForward
                                }, c.forward ? c.forward : y.createElement(eD, {
                                    icon: "mdi:fast-forward"
                                })), d && y.createElement("button", {
                                    "aria-label": M.next,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                                    type: "button",
                                    onClick: p
                                }, c.next ? c.next : y.createElement(eD, {
                                    icon: "mdi:skip-next"
                                })));
                            case v.VOLUME_CONTROLS:
                                return y.createElement("div", {
                                    key: n,
                                    className: "rhap_volume-controls"
                                }, e.renderUIModules(E));
                            case v.LOOP:
                                var S, P = e.audio.current ? e.audio.current.loop : L;
                                return S = P ? c.loop ? c.loop : y.createElement(eD, {
                                    icon: "mdi:repeat"
                                }) : c.loopOff ? c.loopOff : y.createElement(eD, {
                                    icon: "mdi:repeat-off"
                                }), y.createElement("button", {
                                    key: n,
                                    "aria-label": P ? M.loop : M.loopOff,
                                    className: "rhap_button-clear rhap_repeat-button",
                                    type: "button",
                                    onClick: e.handleClickLoopButton
                                }, S);
                            case v.VOLUME:
                                var k, _ = (e.audio.current || {}).volume,
                                    x = void 0 === _ ? b ? 0 : T : _;
                                return k = x ? c.volume ? c.volume : y.createElement(eD, {
                                    icon: "mdi:volume-high"
                                }) : c.volume ? c.volumeMute : y.createElement(eD, {
                                    icon: "mdi:volume-mute"
                                }), y.createElement("div", {
                                    key: n,
                                    className: "rhap_volume-container"
                                }, y.createElement("button", {
                                    "aria-label": x ? M.volume : M.volumeMute,
                                    onClick: e.handleClickVolumeButton,
                                    type: "button",
                                    className: "rhap_button-clear rhap_volume-button"
                                }, k), y.createElement(eX, {
                                    audio: e.audio.current,
                                    volume: x,
                                    onMuteChange: e.handleMuteChange,
                                    showFilledVolume: l,
                                    i18nVolumeControl: M.volumeControl
                                }));
                            default:
                                if (!(0, y.isValidElement)(t)) return null;
                                return t.key ? t : (0, y.cloneElement)(t, {
                                    key: n
                                })
                        }
                    }), e
                }
                return l(r, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.forceUpdate();
                        var t = this.audio.current;
                        this.props.muted ? t.volume = 0 : t.volume = this.lastVolume, t.addEventListener("error", function(t) {
                            var n = t.target;
                            if (n.error && n.currentTime === n.duration) return e.props.onEnded && e.props.onEnded(t);
                            e.props.onError && e.props.onError(t)
                        }), t.addEventListener("canplay", function(t) {
                            e.props.onCanPlay && e.props.onCanPlay(t)
                        }), t.addEventListener("canplaythrough", function(t) {
                            e.props.onCanPlayThrough && e.props.onCanPlayThrough(t)
                        }), t.addEventListener("play", this.handlePlay), t.addEventListener("abort", this.handleAbort), t.addEventListener("ended", this.handleEnded), t.addEventListener("playing", function(t) {
                            e.props.onPlaying && e.props.onPlaying(t)
                        }), t.addEventListener("seeking", function(t) {
                            e.props.onSeeking && e.props.onSeeking(t)
                        }), t.addEventListener("seeked", function(t) {
                            e.props.onSeeked && e.props.onSeeked(t)
                        }), t.addEventListener("waiting", function(t) {
                            e.props.onWaiting && e.props.onWaiting(t)
                        }), t.addEventListener("emptied", function(t) {
                            e.props.onEmptied && e.props.onEmptied(t)
                        }), t.addEventListener("stalled", function(t) {
                            e.props.onStalled && e.props.onStalled(t)
                        }), t.addEventListener("suspend", function(t) {
                            e.props.onSuspend && e.props.onSuspend(t)
                        }), t.addEventListener("loadstart", function(t) {
                            e.props.onLoadStart && e.props.onLoadStart(t)
                        }), t.addEventListener("loadedmetadata", function(t) {
                            e.props.onLoadedMetaData && e.props.onLoadedMetaData(t)
                        }), t.addEventListener("loadeddata", function(t) {
                            e.props.onLoadedData && e.props.onLoadedData(t)
                        }), t.addEventListener("pause", this.handlePause), t.addEventListener("timeupdate", ej(function(t) {
                            e.props.onListen && e.props.onListen(t)
                        }, this.props.listenInterval)), t.addEventListener("volumechange", function(t) {
                            e.props.onVolumeChange && e.props.onVolumeChange(t)
                        }), t.addEventListener("encrypted", function(t) {
                            var n = e.props.mse;
                            n && n.onEcrypted && n.onEcrypted(t)
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = t.src,
                            r = t.autoPlayAfterSrcChange;
                        e.src !== n && (r ? this.playAudioPromise() : this.forceUpdate())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.src,
                            r = e.loop,
                            o = e.preload,
                            i = e.autoPlay,
                            a = e.crossOrigin,
                            s = e.mediaGroup,
                            l = e.header,
                            u = e.footer,
                            c = e.layout,
                            d = e.customProgressBarSection,
                            h = e.customControlsSection,
                            p = e.children,
                            f = e.style,
                            m = e.i18nAriaLabels,
                            g = this.audio.current ? this.audio.current.loop : r,
                            v = g ? "rhap_loop--on" : "rhap_loop--off",
                            E = this.isPlaying() ? "rhap_play-status--playing" : "rhap_play-status--paused";
                        return y.createElement("div", {
                            role: "group",
                            tabIndex: 0,
                            "aria-label": m.player,
                            className: "rhap_container ".concat(v, " ").concat(E, " ").concat(t),
                            onKeyDown: this.handleKeyDown,
                            ref: this.container,
                            style: f
                        }, y.createElement("audio", {
                            src: n,
                            controls: !1,
                            loop: g,
                            autoPlay: i,
                            preload: o,
                            crossOrigin: a,
                            mediaGroup: s,
                            ref: this.audio
                        }, p), l && y.createElement("div", {
                            className: "rhap_header"
                        }, l), y.createElement("div", {
                            className: "rhap_main ".concat(eN(c))
                        }, y.createElement("div", {
                            className: "rhap_progress-section"
                        }, this.renderUIModules(d)), y.createElement("div", {
                            className: "rhap_controls-section"
                        }, this.renderUIModules(h))), u && y.createElement("div", {
                            className: "rhap_footer"
                        }, u))
                    }
                }]), r
            }(y.Component);
            f(eH, "defaultProps", {
                autoPlay: !1,
                autoPlayAfterSrcChange: !0,
                listenInterval: 1e3,
                progressJumpStep: 5e3,
                progressJumpSteps: {},
                volumeJumpStep: .1,
                loop: !1,
                muted: !1,
                preload: "auto",
                progressUpdateInterval: 20,
                defaultCurrentTime: "--:--",
                defaultDuration: "--:--",
                timeFormat: "auto",
                volume: 1,
                className: "",
                showJumpControls: !0,
                showSkipControls: !1,
                showDownloadProgress: !0,
                showFilledProgress: !0,
                showFilledVolume: !1,
                customIcons: {},
                customProgressBarSection: [v.CURRENT_TIME, v.PROGRESS_BAR, v.DURATION],
                customControlsSection: [v.ADDITIONAL_CONTROLS, v.MAIN_CONTROLS, v.VOLUME_CONTROLS],
                customAdditionalControls: [v.LOOP],
                customVolumeControls: [v.VOLUME],
                layout: "stacked",
                hasDefaultKeyBindings: !0,
                i18nAriaLabels: {
                    player: "Audio player",
                    progressControl: "Audio progress control",
                    volumeControl: "Volume control",
                    play: "Play",
                    pause: "Pause",
                    rewind: "Rewind",
                    forward: "Forward",
                    previous: "Previous",
                    next: "Skip",
                    loop: "Disable loop",
                    loopOff: "Enable loop",
                    volume: "Mute",
                    volumeMute: "Unmute"
                }
            });
            var eJ = eH
        },
        90105: function(e) {
            var t = function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                },
                n = function() {
                    function e(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (t(this, e), !(n instanceof Node)) throw "Can't initialize VanillaTilt because " + n + " is not a Node.";
                        this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = n, this.settings = this.extendSettings(r), this.reverse = this.settings.reverse ? -1 : 1, this.resetToStart = e.isSettingTrue(this.settings["reset-to-start"]), this.glare = e.isSettingTrue(this.settings.glare), this.glarePrerender = e.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = e.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = e.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.reset(), !1 === this.resetToStart && (this.settings.startX = 0, this.settings.startY = 0)
                    }
                    return e.isSettingTrue = function(e) {
                        return "" === e || !0 === e || 1 === e
                    }, e.prototype.getElementListener = function() {
                        if (this.fullPageListening) return window.document;
                        if ("string" == typeof this.settings["mouse-event-element"]) {
                            var e = document.querySelector(this.settings["mouse-event-element"]);
                            if (e) return e
                        }
                        return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element
                    }, e.prototype.addEventListeners = function() {
                        this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
                    }, e.prototype.removeEventListeners = function() {
                        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
                    }, e.prototype.destroy = function() {
                        clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.element.style.willChange = "", this.element.style.transition = "", this.element.style.transform = "", this.resetGlare(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null
                    }, e.prototype.onDeviceOrientation = function(e) {
                        if (null !== e.gamma && null !== e.beta) {
                            this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = e.gamma, this.betazero = e.beta) : (this.gammazero = (e.gamma + this.lastgammazero) / 2, this.betazero = (e.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
                            var t = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
                                n = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
                                r = t / this.width,
                                o = n / this.height,
                                i = e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero),
                                a = e.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
                            null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
                                clientX: i / r + this.left,
                                clientY: a / o + this.top
                            }, this.updateCall = requestAnimationFrame(this.updateBind)
                        }
                    }, e.prototype.onMouseEnter = function() {
                        this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
                    }, e.prototype.onMouseMove = function(e) {
                        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.updateBind)
                    }, e.prototype.onMouseLeave = function() {
                        this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind)
                    }, e.prototype.reset = function() {
                        this.onMouseEnter(), this.fullPageListening ? this.event = {
                            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                        } : this.event = {
                            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
                        };
                        var e = this.settings.scale;
                        this.settings.scale = 1, this.update(), this.settings.scale = e, this.resetGlare()
                    }, e.prototype.resetGlare = function() {
                        this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0")
                    }, e.prototype.getValues = function() {
                        var e = void 0,
                            t = void 0;
                        return this.fullPageListening ? (e = this.event.clientX / this.clientWidth, t = this.event.clientY / this.clientHeight) : (e = (this.event.clientX - this.left) / this.width, t = (this.event.clientY - this.top) / this.height), e = Math.min(Math.max(e, 0), 1), t = Math.min(Math.max(t, 0), 1), {
                            tiltX: (this.reverse * (this.settings.max - e * this.settings.max * 2)).toFixed(2),
                            tiltY: (this.reverse * (t * this.settings.max * 2 - this.settings.max)).toFixed(2),
                            percentageX: 100 * e,
                            percentageY: 100 * t,
                            angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
                        }
                    }, e.prototype.updateElementPosition = function() {
                        var e = this.element.getBoundingClientRect();
                        this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top
                    }, e.prototype.update = function() {
                        var e = this.getValues();
                        this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + e.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + e.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", {
                            detail: e
                        })), this.updateCall = null
                    }, e.prototype.prepareGlare = function() {
                        if (!this.glarePrerender) {
                            var e = document.createElement("div");
                            e.classList.add("js-tilt-glare");
                            var t = document.createElement("div");
                            t.classList.add("js-tilt-glare-inner"), e.appendChild(t), this.element.appendChild(e)
                        }
                        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            "pointer-events": "none",
                            "border-radius": "inherit"
                        }), Object.assign(this.glareElement.style, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "pointer-events": "none",
                            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                            transform: "rotate(180deg) translate(-50%, -50%)",
                            "transform-origin": "0% 0%",
                            opacity: "0"
                        }), this.updateGlareSize())
                    }, e.prototype.updateGlareSize = function() {
                        if (this.glare) {
                            var e = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
                            Object.assign(this.glareElement.style, {
                                width: e + "px",
                                height: e + "px"
                            })
                        }
                    }, e.prototype.updateClientSize = function() {
                        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                    }, e.prototype.onWindowResize = function() {
                        this.updateGlareSize(), this.updateClientSize()
                    }, e.prototype.setTransition = function() {
                        var e = this;
                        clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout(function() {
                            e.element.style.transition = "", e.glare && (e.glareElement.style.transition = "")
                        }, this.settings.speed)
                    }, e.prototype.extendSettings = function(e) {
                        var t = {
                                reverse: !1,
                                max: 15,
                                startX: 0,
                                startY: 0,
                                perspective: 1e3,
                                easing: "cubic-bezier(.03,.98,.52,.99)",
                                scale: 1,
                                speed: 300,
                                transition: !0,
                                axis: null,
                                glare: !1,
                                "max-glare": 1,
                                "glare-prerender": !1,
                                "full-page-listening": !1,
                                "mouse-event-element": null,
                                reset: !0,
                                "reset-to-start": !0,
                                gyroscope: !0,
                                gyroscopeMinAngleX: -45,
                                gyroscopeMaxAngleX: 45,
                                gyroscopeMinAngleY: -45,
                                gyroscopeMaxAngleY: 45,
                                gyroscopeSamples: 10
                            },
                            n = {};
                        for (var r in t)
                            if (r in e) n[r] = e[r];
                            else if (this.element.hasAttribute("data-tilt-" + r)) {
                            var o = this.element.getAttribute("data-tilt-" + r);
                            try {
                                n[r] = JSON.parse(o)
                            } catch (e) {
                                n[r] = o
                            }
                        } else n[r] = t[r];
                        return n
                    }, e.init = function(t, n) {
                        t instanceof Node && (t = [t]), t instanceof NodeList && (t = [].slice.call(t)), t instanceof Array && t.forEach(function(t) {
                            "vanillaTilt" in t || (t.vanillaTilt = new e(t, n))
                        })
                    }, e
                }();
            "undefined" != typeof document && (window.VanillaTilt = n, n.init(document.querySelectorAll("[data-tilt]"))), e.exports = n
        }
    }
]);