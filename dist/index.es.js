import l, { useState as S, useRef as p, useEffect as H } from "react";
const P = ({
  fetchMore: i,
  hasMore: r,
  dataLength: b,
  loader: d = /* @__PURE__ */ l.createElement("p", null, "Loading..."),
  endMessage: w = /* @__PURE__ */ l.createElement("p", null, "No more items to load."),
  threshold: a = 0.8,
  position: t = "bottom",
  className: E,
  style: I,
  children: f
}) => {
  const [c, u] = S(!1), m = p(null), s = p(null), [R, L] = S(0);
  return H(() => {
    let e = m.current;
    if (!e || c || !r)
      return;
    const n = new IntersectionObserver(
      async (g) => {
        var o;
        if (g[0].isIntersecting) {
          u(!0);
          const v = i();
          v instanceof Promise && await v, u(!1), L(((o = s.current) == null ? void 0 : o.scrollHeight) || 0);
        }
      },
      { threshold: a }
    );
    return n.observe(e), () => {
      n.unobserve(e);
    };
  }, [r, c, i, a, t]), H(() => {
    const e = s.current;
    if (!e || t !== "top")
      return;
    const n = R, o = e.scrollHeight - n;
    e.scrollTop = o;
  }, [t, b]), /* @__PURE__ */ l.createElement("div", { ref: s, style: I, className: E }, t === "bottom" && f, /* @__PURE__ */ l.createElement("div", { ref: m }, r && c && d, !r && w), t === "top" && f);
};
export {
  P as default
};
//# sourceMappingURL=index.es.js.map
