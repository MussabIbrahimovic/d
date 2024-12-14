(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        93182: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 10376))
        },
        27648: function(e, n, t) {
            "use strict";
            t.d(n, {
                default: function() {
                    return i.a
                }
            });
            var r = t(72972),
                i = t.n(r)
        },
        10376: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var r = t(57437),
                i = t(81742),
                l = t(23943);

            function c(e) {
                let {
                    error: n
                } = e;
                return (0, r.jsxs)(l.Z, {
                    icon: "\uD83E\uDD14",
                    children: [(0, r.jsx)("p", {
                        className: "text-xl font-light text-white",
                        children: "Something went wrong!"
                    }), (0, r.jsx)(i.Z, {})]
                })
            }
        },
        81742: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(57437),
                i = t(27648);

            function l() {
                return (0, r.jsx)(i.default, {
                    href: "/",
                    draggable: !1,
                    className: "inline-block select-none rounded-lg border border-white/25 px-4 py-2 text-white duration-300 hover:border-transparent hover:bg-white hover:text-black",
                    children: "Home"
                })
            }
        },
        23943: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(57437),
                i = t(27648);

            function l(e) {
                let {
                    children: n,
                    icon: t = "⚡",
                    wide: l
                } = e;
                return (0, r.jsx)("main", {
                    children: (0, r.jsx)("div", {
                        className: "relative table size-full",
                        children: (0, r.jsx)("div", {
                            className: "table-cell animate-slide-up px-4 py-10 align-middle",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto ".concat(l ? "max-w-lg" : "max-w-sm", " space-y-8 text-center"),
                                children: [(0, r.jsx)(i.default, {
                                    href: "/",
                                    className: "select-none text-7xl",
                                    draggable: !1,
                                    children: t
                                }), n]
                            })
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [2972, 2971, 2117, 1744], function() {
            return e(e.s = 93182)
        }), _N_E = e.O()
    }
]);