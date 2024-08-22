import l, { forwardRef as R, useState as v, useRef as d, useEffect as L, useLayoutEffect as h, useImperativeHandle as y } from "react";
const P = R(
  ({
    fetchMore: u,
    hasMore: c,
    loader: H = /* @__PURE__ */ l.createElement("p", null, "Loading..."),
    endMessage: T = /* @__PURE__ */ l.createElement("p", null, "No more items to load."),
    options: i,
    position: r = "bottom",
    className: b,
    style: E,
    children: f
  }, S) => {
    const [m, p] = v(!1), g = d(null), t = d(null), [s, w] = v({
      scrollHeight: 0,
      scrollTop: 0
    });
    return L(() => {
      const e = g.current;
      if (!e || m || !c) return;
      const o = new IntersectionObserver(async (a) => {
        if (a[0].isIntersecting) {
          p(!0);
          const n = u();
          n instanceof Promise && await n, p(!1), r === "top" && t.current && w({
            scrollHeight: t.current.scrollHeight,
            scrollTop: t.current.scrollTop
          });
        }
      }, i);
      return o.observe(e), () => {
        o.unobserve(e);
      };
    }, [c, m, u, i, r]), h(() => {
      const e = t.current;
      if (!e || r !== "top") return;
      const o = s.scrollHeight, a = s.scrollTop, n = e.scrollHeight, I = a + (n - o);
      e.scrollTop = I;
    }, [r, s]), y(S, () => t.current, []), /* @__PURE__ */ l.createElement("div", { ref: t, style: E, className: b }, r === "bottom" && f, /* @__PURE__ */ l.createElement("div", { ref: g }, c ? H : T), r === "top" && f);
  }
);
export {
  P as default
};
//# sourceMappingURL=index.es.js.map
