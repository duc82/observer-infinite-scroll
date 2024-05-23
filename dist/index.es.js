import c, { useState as p, useRef as H, useEffect as b } from "react";
const C = ({
  fetchMore: a,
  hasMore: r,
  loader: w = /* @__PURE__ */ c.createElement("p", null, "Loading..."),
  endMessage: E = /* @__PURE__ */ c.createElement("p", null, "No more items to load."),
  threshold: f = 0.8,
  position: t = "bottom",
  className: d,
  style: I,
  children: l
}) => {
  const [s, u] = p(!1), m = H(null), i = H(null), [g, R] = p(0);
  return b(() => {
    const e = m.current;
    if (!e || s || !r)
      return;
    const n = new IntersectionObserver(
      async (v) => {
        var o;
        if (v[0].isIntersecting) {
          u(!0);
          const S = a();
          S instanceof Promise && await S, u(!1), t === "top" && R(
            ((o = i.current) == null ? void 0 : o.scrollHeight) || 0
          );
        }
      },
      { threshold: f }
    );
    return n.observe(e), () => {
      n.unobserve(e);
    };
  }, [r, s, a, f, t]), b(() => {
    const e = i.current;
    if (!e || t !== "top")
      return;
    const n = g, o = e.scrollHeight - n;
    e.scrollTop = o;
  }, [t, l, g]), /* @__PURE__ */ c.createElement("div", { ref: i, style: I, className: d }, t === "bottom" && l, /* @__PURE__ */ c.createElement("div", { ref: m }, r && s && w, !r && E), t === "top" && l);
};
export {
  C as default
};
//# sourceMappingURL=index.es.js.map
