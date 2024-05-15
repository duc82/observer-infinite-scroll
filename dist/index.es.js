import t, { useState as g, useRef as p, useEffect as f } from "react";
const L = ({
  fetchMore: n,
  hasMore: r,
  loader: m = /* @__PURE__ */ t.createElement("p", null, "Loading..."),
  endMessage: b = /* @__PURE__ */ t.createElement("p", null, "No more items to load."),
  threshold: o = 0.8,
  position: s = "bottom",
  className: v,
  style: d,
  children: l
}) => {
  const [i, a] = g(!1), c = p(null);
  return f(() => {
    const e = c.current, u = new IntersectionObserver(
      (E) => {
        E[0].isIntersecting && !i && r && (a(!0), n());
      },
      { threshold: o }
    );
    return e && u.observe(e), () => {
      e && u.unobserve(e);
    };
  }, [r, i, n, o]), f(() => {
    a(!1);
  }, [n]), /* @__PURE__ */ t.createElement("div", { style: d, className: v }, s === "bottom" && l, r ? /* @__PURE__ */ t.createElement("div", { ref: c }, m) : b, s === "top" && l);
};
export {
  L as default
};
//# sourceMappingURL=index.es.js.map
