import t, { forwardRef as p, useState as I, useRef as R, useEffect as u } from "react";
const w = p(
  ({
    fetchMore: n,
    hasMore: r,
    loader: m = /* @__PURE__ */ t.createElement("p", null, "Loading..."),
    endMessage: b = /* @__PURE__ */ t.createElement("p", null, "No more items to load."),
    threshold: o = 0.8,
    position: s = "bottom",
    className: d,
    style: v,
    children: l
  }, E) => {
    const [f, a] = I(!1), c = R(null);
    return u(() => {
      const e = c.current, i = new IntersectionObserver(
        (g) => {
          g[0].isIntersecting && !f && r && (a(!0), n());
        },
        { threshold: o }
      );
      return e && i.observe(e), () => {
        e && i.unobserve(e);
      };
    }, [r, f, n, o]), u(() => {
      a(!1);
    }, [n]), /* @__PURE__ */ t.createElement("div", { ref: E, style: v, className: d }, s === "bottom" && l, r ? /* @__PURE__ */ t.createElement("div", { ref: c }, m) : b, s === "top" && l);
  }
);
export {
  w as default
};
//# sourceMappingURL=index.es.js.map
