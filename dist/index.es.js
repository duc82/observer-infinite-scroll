import c, { forwardRef as I, useState as v, useRef as d, useEffect as R, useLayoutEffect as L, useImperativeHandle as h } from "react";
const C = I(
  ({
    fetchMore: u,
    hasMore: o,
    loader: H = /* @__PURE__ */ c.createElement("p", null, "Loading..."),
    endMessage: T = /* @__PURE__ */ c.createElement("p", null, "No more items to load."),
    options: f = { rootMargin: "100px 0px 100px 0px" },
    position: r = "bottom",
    className: b,
    style: E,
    children: p
  }, S) => {
    const [s, m] = v(!1), g = d(null), t = d(null), [a, w] = v({
      scrollHeight: 0,
      scrollTop: 0
    });
    return R(() => {
      const e = g.current;
      if (!e || s || !o)
        return;
      const n = new IntersectionObserver(async (i) => {
        if (i[0].isIntersecting) {
          m(!0);
          const l = u();
          l instanceof Promise && await l, m(!1), r === "top" && t.current && w({
            scrollHeight: t.current.scrollHeight,
            scrollTop: t.current.scrollTop
          });
        }
      }, f);
      return n.observe(e), () => {
        n.unobserve(e);
      };
    }, [o, s, u, f, r]), L(() => {
      const e = t.current;
      if (!e || r !== "top")
        return;
      const n = a.scrollHeight, i = a.scrollTop, l = e.scrollHeight, x = i + (l - n);
      e.scrollTop = x;
    }, [r, a]), h(S, () => t.current, []), /* @__PURE__ */ c.createElement("div", { ref: t, style: E, className: b }, r === "bottom" && p, /* @__PURE__ */ c.createElement("div", { ref: g }, o && s && H, !o && T), r === "top" && p);
  }
);
export {
  C as default
};
//# sourceMappingURL=index.es.js.map
