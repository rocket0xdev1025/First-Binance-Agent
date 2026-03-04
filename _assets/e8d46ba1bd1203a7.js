(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var YB = __c.YB;
        var nc = __c.nc;
        var Pf = __c.Pf;
        var M = __c.M;
        var Fi = __c.Fi;
        var Qf = __c.Qf;
        var fi = __c.fi;
        var y = __c.y;
        var hv = __c.hv;
        var K = __c.K;
        var E = __c.E;
        var DBc = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.kX(b.reference.hj);
                a = a.p0(b.reference.rj);
                return c != null && a != null;
              case 1:
                return a.kX(b.reference.hj) != null;
              case 2:
                return a.p0(b.reference.rj) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          EBc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.U.length > 0) return !1;
                a = a.RI(c.j4.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.Az(new __c.Dz(), a.kL).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return DBc(b, d);
                        case 1:
                          return DBc(b, d.start) && DBc(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          FBc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new E(a);
            }
          },
          GBc = function () {
            const [a] = (0, __c.kb)(() => hv());
            return a;
          },
          HBc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          IBc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.J)(a, { ...b }) });
          },
          JBc = function (a) {
            var b = a.bC;
            const c = a.content,
              d = a.context,
              e = a.kr;
            __c.x(c?.Xg?.type === "formula");
            const f = c.Kj;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.Esa?.({
                  content: __c.zd(__c.ghb, { ...__c.KCb, value: f.value }),
                  context: d,
                  kr: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.Hsa?.({ context: d, value: c.VC, valueType: c.Kj.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: s6(__c.pU, {
                    label: FBc(f.error),
                    children: s6(__c.x6b, { tone: "critical" }),
                  }),
                };
                break;
              default:
                throw new E(f);
            }
            return b ?? a;
          },
          OBc = function (a) {
            const b = a.bC,
              c = a.Uf,
              d = a.hMb,
              e = a.bb;
            b.Hsa = (f) => __c.pQa({ ...f, bb: e });
            b.tPa = (f) => JBc({ ...f, bC: b });
            b.sPa = (f) => KBc({ ...f });
            b.Esa = IBc(LBc({ Uf: c, KV: void 0 }));
            b.vPa = MBc(d, e);
            b.wPa = IBc((f) => s6(NBc, { ...f, bb: e }));
          },
          QBc = function ({
            label: a,
            $a: b,
            width: c,
            height: d,
            scale: e,
            lTa: f,
          }) {
            return s6("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: t6(__c.kw, {
                className: u6("ivlMMQ", PBc(f)),
                size: "small",
                alignment: "center",
                children: [b && s6(b, { size: "small" }), a],
              }),
            });
          },
          PBc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          SBc = function ({
            Rd: a,
            XZa: b,
            scale: c,
            Uq: d,
            onMouseDown: e,
            onTouchStart: f,
            Vq: g,
            ggb: h,
            DUa: k,
          }) {
            const l = v6(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.dx(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return s6(__c.lw, {
              up: "light",
              light: "light",
              ls: "light",
              dark: "light",
              children: (q) =>
                s6("div", {
                  className: u6("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: s6("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: u6("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.um,
                    children: s6(__c.tU, {
                      className: u6("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: s6(RBc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          UBc = function ({ zb: a }) {
            const b = new TBc(),
              c = new __c.XT(),
              d = w6((g) => {
                const {
                    scale: h = 1,
                    QZa: k,
                    size: l = "small",
                    ggb: m = !0,
                  } = g,
                  n = x6((p) => b.Vq({ scale: p, size: l, bEa: k }), [l, k]);
                return s6(SBc, {
                  ...g,
                  scale: k ? Math.max(h, k) : h,
                  Rd: g.sheet.direction === "rtl",
                  XZa: g.selection != null && b.Tyb(g.sheet, a, g.selection),
                  Vq: n,
                  ggb: m,
                  DUa: g.DUa,
                  onMouseDown: g.onMouseDown,
                  onTouchStart: g.onTouchStart,
                });
              }),
              e = w6((g) => {
                const {
                    scale: h = 1,
                    QZa: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    TIb: p,
                  } = g,
                  q = x6((z) => b.Vq({ scale: z, size: l, bEa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = x6((z) => n != null && b.vIa(n).has(z), [n]),
                  v = x6((z) => n != null && b.owb(m, a, n).has(z), [m, n]),
                  w = x6(
                    (z) => {
                      var A = a.layout.ZZ.Rk(m);
                      A = p != null && A.Ne(z, p.jc) >= 0 && A.Ne(z, p.$c) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return s6(y6, {
                  ...g,
                  ee: h,
                  Ge: r,
                  Vq: q,
                  MH: w,
                  zI: c,
                  zb: a,
                });
              }),
              f = w6((g) => {
                const {
                    scale: h = 1,
                    QZa: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    TIb: p,
                  } = g,
                  q = x6((z) => b.Vq({ scale: z, size: l, bEa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = x6((z) => n != null && b.xIa(n).has(z), [n]),
                  v = x6((z) => n != null && b.pwb(m, a, n).has(z), [m, n]),
                  w = x6(
                    (z) => {
                      var A = a.layout.ZZ.sm(m);
                      A = p != null && A.Ne(z, p.mc) >= 0 && A.Ne(z, p.xd) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return s6(z6, {
                  ...g,
                  ee: r,
                  Ge: h,
                  Vq: q,
                  MH: w,
                  zI: c,
                  zb: a,
                });
              });
            return { Mgb: d, Lgb: e, Ngb: f };
          },
          WBc = function (a) {
            const b = a.Rr,
              c = () => null;
            return __c.pv((d) => s6(VBc, { ...d, Rr: b, Di: c }));
          },
          $Bc = function (a, b, c, d, e, f, g, h) {
            if (f.length === 0 || g.length === 0) return [];
            const k = XBc(b, d, e, f, g);
            h = YBc(b, c, e, f, g, h);
            const l = ZBc(a, c, d, e, f, g),
              m = a.evb(c),
              n = a.lub(b, d),
              p = b.direction === "rtl";
            a = k
              .map((q) => {
                var r = q.hLb,
                  t = q.Dya,
                  v = q.j9a;
                const w = q.color,
                  z = q.weight;
                q = q.hd;
                const A = p ? -1 : 1,
                  C = l.get(A6(r, v))?.Na,
                  B = l.get(A6(t, v))?.pa;
                if (C != null && B != null) {
                  var D = y(m.get(v.ta)),
                    I = y(n.get(r.column));
                  r = y(n.get(t.column));
                  v = v.boundary === "start" ? D.start : D.end;
                  D = I.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: z,
                    hd: q,
                    p1: new fi(D + C * A, v),
                    p2: new fi(t + B * A, v),
                    ...__c.Uk((t - D) * A, q * z, C),
                  };
                }
              })
              .filter(__c.pb);
            return [
              ...h
                .map((q) => {
                  var r = q.aTa,
                    t = q.xLb,
                    v = q.Jya;
                  const w = q.color,
                    z = q.weight;
                  q = q.hd;
                  const A = l.get(A6(r, t))?.Ea,
                    C = l.get(A6(r, v))?.qa;
                  if (A != null && C != null) {
                    var B = y(n.get(r.column)),
                      D = y(m.get(t.ta));
                    t = y(m.get(v.ta));
                    r = r.boundary === "start" ? B.start : B.end;
                    B = D.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: z,
                      hd: q,
                      p1: new fi(r, B + A),
                      p2: new fi(r, v + C),
                      ...__c.Uk(v - B, q * z, A),
                    };
                  }
                })
                .filter(__c.pb),
              ...a,
            ];
          },
          aCc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Ok(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Ok(d, (e) => `${e.Nl}_${e.Ol}`);
              for (const [, e] of a) {
                const { Ol: f, Nl: g } = e[0];
                a = __c.Ok(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Nl: g, Ol: f });
              }
            }
            return b;
          },
          dCc = function (a, b, c, d, e, f) {
            var g = bCc;
            const h = d.get().flatMap((m) =>
                b.last() === m
                  ? [
                      { ta: m, boundary: "start" },
                      { ta: m, boundary: "end" },
                    ]
                  : [{ ta: m, boundary: "start" }]
              ),
              k = e.get().flatMap((m) =>
                c.last() === m
                  ? [
                      { column: m, boundary: "start" },
                      { column: m, boundary: "end" },
                    ]
                  : [{ column: m, boundary: "start" }]
              ),
              l = new Map();
            for (const m of d.get())
              for (const n of e.get())
                (d = cCc(g.Xab, a, b, c, { column: n, ta: m })) &&
                  l.set(`${n.id}:${m.id}`, d);
            a = $Bc(g, a, b, c, l, h, k, f);
            return aCc(a);
          },
          XBc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of e) {
                d = l.ta;
                var g = m.column,
                  h = a.layout.cells.get(d, g);
                if (
                  !h ||
                  (l.boundary === "start" ? h.span.mc === d : h.span.xd === d)
                )
                  if (
                    ((d = c.get(`${g.id}:${d.id}`)),
                    (d = l.boundary === "start" ? d?.qa : d?.Ea))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.next(g))
                      ? { column: g, boundary: "start" }
                      : { column: y(b.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.Dya),
                        (k =
                          k.column === m.column && k.boundary === m.boundary);
                    k &&
                      ((k = h.j9a),
                      (k = k.ta === l.ta && k.boundary === l.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.hd === d.hd &&
                    h.hd === 0
                      ? (h.Dya = g)
                      : f.push({
                          j9a: l,
                          hLb: m,
                          Dya: g,
                          color: d.color,
                          weight: d.weight,
                          hd: d.hd,
                        });
                  }
              }
            return f;
          },
          YBc = function (a, b, c, d, e, f) {
            const g = [];
            for (const m of e)
              for (const n of d) {
                var h = n.ta,
                  k = m.column;
                e = a.layout.cells.get(h, k);
                if (
                  !e ||
                  (m.boundary === "start" ? e.span.jc === k : e.span.$c === k)
                )
                  if (
                    ((e = c.get(`${k.id}:${h.id}`)),
                    (e = m.boundary === "start" ? e?.pa : e?.Na) &&
                      (m.boundary !== "start" || f(h, k) !== 1))
                  ) {
                    k = g[g.length - 1];
                    h = (h = b.next(h))
                      ? { ta: h, boundary: "start" }
                      : { ta: y(b.last()), boundary: "end" };
                    var l;
                    if ((l = k))
                      (l = k.aTa),
                        (l =
                          l.column === m.column && l.boundary === m.boundary);
                    l &&
                      ((l = k.Jya),
                      (l = l.ta === n.ta && l.boundary === n.boundary));
                    l &&
                    k.color === e.color &&
                    k.weight === e.weight &&
                    k.hd === e.hd &&
                    k.hd === 0
                      ? (k.Jya = h)
                      : g.push({
                          aTa: m,
                          xLb: n,
                          Jya: h,
                          color: e.color,
                          weight: e.weight,
                          hd: e.hd,
                        });
                  }
              }
            return g;
          },
          ZBc = function (a, b, c, d, e, f) {
            const g = a.Xab.hob(d, b.last(), c.last());
            a = (r, t) => {
              const v = g.get(r) || 0,
                w = g.get(t) || 0;
              return v <= w ? r : t;
            };
            const h = new Map();
            if (e.length === 0 || f.length === 0) return h;
            var k = [],
              l = c.previous(f[0].column);
            l && k.push({ column: l, boundary: "start" });
            k.push(...f);
            (f = c.next(f[f.length - 1].column)) &&
              k.push({ column: f, boundary: "start" });
            f = [];
            (l = b.previous(e[0].ta)) && f.push({ ta: l, boundary: "start" });
            f.push(...e);
            (e = b.next(e[e.length - 1].ta)) &&
              f.push({ ta: e, boundary: "start" });
            for (const r of k) {
              k = (e = r.boundary === "start" ? r.column : void 0)
                ? c.previous(e)
                : c.last();
              for (const t of f) {
                var m = t.boundary === "start" ? t.ta : void 0;
                l = m ? b.previous(m) : b.last();
                var n = e && m && d.get(`${e.id}:${m.id}`),
                  p = e && l && d.get(`${e.id}:${l.id}`);
                m = k && m && d.get(`${k.id}:${m.id}`);
                var q = k && l && d.get(`${k.id}:${l.id}`);
                l = r.boundary === "end" ? m?.Na : n?.pa;
                n = t.boundary === "end" ? p?.Ea : n?.qa;
                p = r.boundary === "end" ? q?.Na : p?.pa;
                m = t.boundary === "end" ? q?.Ea : m?.qa;
                q = __c.xia({ qa: p, Ea: l, pa: m, Na: n }, a);
                let v;
                switch (q) {
                  case "blockStart":
                    v = p;
                    break;
                  case "blockEnd":
                    v = l;
                    break;
                  case "inlineStart":
                    v = m;
                    break;
                  case "inlineEnd":
                    v = n;
                    break;
                  default:
                    v = void 0;
                }
                const { height: w, width: z } =
                  v?.hd === 1
                    ? { height: v.weight, width: v.weight }
                    : {
                        height: Math.max(m?.weight || 0, n?.weight || 0),
                        width: Math.max(p?.weight || 0, l?.weight || 0),
                      };
                h.set(A6(r, t), __c.Pk(q, w / 2, z / 2));
              }
            }
            return h;
          },
          cCc = function (a, b, c, d, e) {
            return a.iIb(b, c, d, e);
          },
          B6 = function (a, b, c, d, e) {
            return a && b
              ? __c.Rk(
                  b.borderStyle,
                  a.borderStyle,
                  d,
                  c,
                  e,
                  (b.pja ? (a.pja ? void 0 : a) : b)?.borderStyle
                )
              : a?.borderStyle ?? b?.borderStyle;
          },
          C6 = function (a, b, c, d) {
            if (!a) return d ? void 0 : { borderStyle: b, pja: !0 };
            a = c(a);
            return a.color == null && a.weight == null && a.Oc == null
              ? d
                ? void 0
                : { borderStyle: b, pja: !0 }
              : {
                  borderStyle: {
                    color: a.color ?? b.color,
                    weight: a.weight ?? b.weight,
                    hd: a.Oc ? __c.Sk(a.Oc) : b.hd,
                  },
                  pja: !1,
                };
          },
          D6 = function (a, b, c, d) {
            if (b && c) {
              var e = b && c && a.layout.cells.get(c, b),
                f = {
                  color: a.Tk.color,
                  weight: a.Tk.weight,
                  hd: __c.Sk(a.Tk.Oc),
                };
              switch (d) {
                case "blockStart":
                  return C6(
                    a.layout.attrs.get(
                      Qf({ XP: void 0, $z: void 0, aQ: void 0 }),
                      e?.span.mc ?? c,
                      e?.span.jc ?? b
                    ) || {},
                    f,
                    eCc,
                    a.Is
                  );
                case "blockEnd":
                  return C6(
                    a.layout.attrs.get(
                      Qf({ WP: void 0, Zz: void 0, $P: void 0 }),
                      e?.span.mc ?? c,
                      e?.span.jc ?? b
                    ) || {},
                    f,
                    fCc,
                    a.Is
                  );
                case "inlineStart":
                  return C6(
                    a.layout.attrs.get(
                      Qf({ ZP: void 0, bA: void 0, cQ: void 0 }),
                      e?.span.mc ?? c,
                      e?.span.jc ?? b
                    ) || {},
                    f,
                    gCc,
                    a.Is
                  );
                case "inlineEnd":
                  return C6(
                    a.layout.attrs.get(
                      Qf({ YP: void 0, aA: void 0, bQ: void 0 }),
                      e?.span.mc ?? c,
                      e?.span.jc ?? b
                    ) || {},
                    f,
                    hCc,
                    a.Is
                  );
                default:
                  throw new E(d);
              }
            }
          },
          E6 = function (a) {
            return a == null || a === "inherit" ? void 0 : a;
          },
          F6 = function (a) {
            return a == null || a === "inherit"
              ? void 0
              : Number(a.split("px")[0]);
          },
          G6 = function (a) {
            return a == null || a === "inherit"
              ? void 0
              : a
                  .split(" ")
                  .map((b) => {
                    b = Number(b);
                    return b > 0 ? b : void 0;
                  })
                  .filter(__c.pb);
          },
          H6 = function (a, b, c) {
            let d = 0;
            for (; a != null && a !== b; ) (a = c.next(a)) && d++;
            return d;
          },
          iCc = function (a, b) {
            return (
              a?.Ea === b?.Ea &&
              a?.qa === b?.qa &&
              a?.Na === b?.Na &&
              a?.pa === b?.pa
            );
          },
          nCc = function (a) {
            const b = a.direction === "rtl" ? -jCc(a) / 2 : -kCc(a) / 2,
              c = -lCc(a) / 2,
              d = a.width + kCc(a) / 2 + jCc(a) / 2;
            a = a.height + lCc(a) / 2 + mCc(a) / 2;
            return Fi({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          oCc = function ({ sheet: a, zb: b, ba: c, range: d, Bd: e }) {
            I6(
              () =>
                J6(() => {
                  if (e.current != null) {
                    var f = c?.get() ?? 1,
                      g = a.direction === "rtl",
                      h = b.layout.Ug.sm(a),
                      k = b.layout.Ug.Rk(a);
                    h = d && h.has(d.mc);
                    g =
                      d && k.has(d.jc)
                        ? b.Pa.pa(a, d.jc) * f * (g ? 1 : -1)
                        : 0;
                    k = h ? -b.Pa.qa(a, d.mc) * f : 0;
                    e.current.style.transform = `translate(${g}px, ${k}px)`;
                    e.current.style.width = `${a.width * f}px`;
                    e.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, b.layout.Ug, b.Pa, d, e, c]
            );
          },
          rCc = function ({ onScroll: a }) {
            const b = new pCc(a);
            return {
              xF: b,
              msa: w6((c) =>
                s6(qCc, { sheet: c.sheet, xF: b, children: c.children })
              ),
            };
          },
          uCc = function (a) {
            const b = a.Rr,
              c = a.We,
              d = a.Zab,
              e = a.zb,
              f = ({ children: l }) => l,
              { xF: g, msa: h } = rCc({ onScroll: a.onScroll });
            class k extends sCc {
              get vP() {
                const l = this.props.ia.uA;
                switch (l) {
                  case "screen":
                    return h;
                  case "print":
                    return f;
                  default:
                    throw new E(l);
                }
              }
              componentDidMount() {
                d.Iab(this.props.item, {
                  cc: this.props.cc,
                  ia: this.props.ia,
                });
              }
              componentWillUnmount() {
                d.Nmb(this.props.item, {
                  cc: this.props.cc,
                  ia: this.props.ia,
                });
              }
              render() {
                d.Iab(this.props.item, {
                  cc: this.props.cc,
                  ia: this.props.ia,
                });
                return s6(tCc, {
                  ...this.props,
                  ba: this.ba,
                  Rr: b,
                  vP: this.vP,
                  Di: this.Di,
                  Zab: d,
                  zb: e,
                  xF: g,
                });
              }
              constructor(...l) {
                super(...l);
                this.ba = K6(() => {
                  const m = this.props.item;
                  var n = this.props.ia,
                    p = n.uA;
                  n = n.zoom;
                  switch (p) {
                    case "screen":
                      return n;
                    case "print":
                      p = d.ivb(m);
                      if (!p) return 1;
                      ({ width: p } = new __c.Eq(m, p.cc, { zoom: n }));
                      return p / m.config.width;
                    default:
                      throw new E(p);
                  }
                });
                this.Di = w6((m) =>
                  s6("div", {
                    className: "wKvivQ",
                    children: s6(__c.xQa, { ...this.props, ...m, We: c }),
                  })
                );
              }
            }
            return { Tib: k, xF: g };
          },
          vCc = function (a, b, c) {
            if (
              c != null &&
              c.jc != null &&
              c.mc != null &&
              c.$c != null &&
              c.xd != null
            ) {
              var d = b.Pa.pa(a, c.jc),
                e = b.Pa.qa(a, c.mc),
                f = b.Pa.pa(a, c.$c) + c.$c.width - d;
              a = b.Pa.qa(a, c.xd) + c.xd.height - e;
              return Fi({ top: e, left: d, width: f, height: a });
            }
          },
          xCc = function (a) {
            const b = a.Rr,
              c = a.zb,
              d = () => null;
            return (e) => s6(wCc, { ...e, Rr: b, Di: d, zb: c });
          },
          BCc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { uSa: b, Nx: b, Ra: {}, hD: {} },
              d = L6(
                () => a.jC.style || c,
                (h) => {
                  Object.assign(a.Wea.style, h.uSa);
                  Object.assign(a.kQ.style, h.Nx);
                  Object.assign(a.PG.style, h.Ra);
                  Object.assign(a.XG.style, h.hD);
                  h = h?.Ra?.textDecoration;
                  a.PG.classList.toggle("OQx3PQ", h === "underline");
                  a.PG.classList.toggle("_99ezUA", h === "line-through");
                  a.PG.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: yCc }
              ),
              e = L6(
                () => a.ECa,
                (h) => {
                  a.PG.classList.toggle("_84KvRA", !h);
                  a.Wea.classList.toggle("_84KvRA", !h);
                  a.kQ.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = L6(
                () => a.renderer,
                (h) => {
                  a.Jfa && h?.type !== "react"
                    ? ((a.Jfa = void 0), a.G$.remove())
                    : (a.XG.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.Jfa = zCc(h.node, a.G$);
                      a.XG.appendChild(a.G$);
                      break;
                    case "dom":
                      h.render(a.XG);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.XEa();
                },
                { fireImmediately: !0 }
              ),
              g = ACc
                ? L6(
                    () => a.cBa,
                    (h) => {
                      a.PG.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g?.();
            };
          },
          yCc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          DCc = function (a) {
            const b = a.cC,
              c = a.zb,
              d = a.sl,
              e = a.cG,
              f = a.vfb,
              g = a.IA,
              h = new CCc(d, c),
              k = (l, m) => (g ? EBc(g, l, m) : !1);
            return (l) =>
              s6(M6, {
                ...l,
                yS: k,
                cG: e,
                zb: c,
                sl: d,
                cC: b,
                $Ba: h,
                vfb: f?.get(),
              });
          },
          LBc =
            ({ Uf: a, KV: b }) =>
            (c) =>
              (0, __c.J)(__c.OOb, { ...c, Uf: a, KV: b }),
          ECc = __webpack_require__(405148),
          FCc = ECc.Fragment,
          s6 = ECc.jsx,
          t6 = ECc.jsxs;
        var GCc = __webpack_require__,
          HCc = GCc(208463),
          u6 = GCc.n_x(HCc)();
        var w6 = __webpack_require__(371201).PA;
        var N6 = __webpack_require__(227200),
          O6 = N6.Component,
          sCc = N6.PureComponent,
          x6 = N6.useCallback,
          I6 = N6.useEffect,
          ICc = N6.useLayoutEffect,
          v6 = N6.useMemo,
          P6 = N6.useRef;
        var Q6 = __webpack_require__(186901),
          K6 = Q6.EW,
          J6 = Q6.fm,
          JCc = Q6.m3,
          L6 = Q6.mJ,
          KCc = Q6.MN,
          LCc = Q6.O8,
          R6 = Q6.sH,
          S6 = Q6.XI;
        var MCc = __webpack_require__(536618),
          T6 = MCc.Aj,
          U6 = MCc.iB,
          NCc = MCc.uP;
        var V6 = __webpack_require__(277049)._;
        var W6 = __webpack_require__(269018)._;
        var OCc = __webpack_require__(87387).A;
        var zCc = __webpack_require__(662534).createPortal;
        var PCc = class {
            static D(a) {
              M(a, { viewBox: R6.ref });
            }
            constructor() {
              this.viewBox =
                (PCc.D(this), Fi({ top: 0, left: 0, height: 0, width: 0 }));
              this.$Jb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          QCc = w6((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = P6(new PCc()),
              d = S6(() => {
                if (a.fra) {
                  var f = a.fra.current;
                  f &&
                    c.current.$Jb(
                      Fi({
                        top: f.scrollTop,
                        left: f.scrollLeft,
                        height: f.clientHeight,
                        width: f.clientWidth,
                      })
                    );
                }
              });
            I6(() => {
              d();
              a.fra.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.fra.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.fra, d]);
            const e = v6(() => ({ get: () => c.current.viewBox }), []);
            return t6("div", {
              className: u6("nMvVqA", b),
              children: [
                t6("div", {
                  ref: a.Bd,
                  className: "_0YOFPg",
                  children: [
                    s6(a.Rr, { ...a, viewport: e }),
                    s6("div", {
                      className: u6("Gdl7fQ", b),
                      children: a.NOa?.get()?.map((f, g) => s6(f, {}, g)),
                    }),
                  ],
                }),
                a.y0b === "visible" &&
                  t6(FCc, {
                    children: [
                      s6("div", {
                        className: u6("_32sKQw", b),
                        children: s6(a.Qib, { ...a }),
                      }),
                      s6("div", {
                        className: u6("xdIsTQ", b),
                        children: s6(a.Uib, { ...a }),
                      }),
                      s6("div", {
                        className: u6("rsTRSA", b),
                        children: s6(a.Sib, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          RCc = w6((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.V;
              case "text3":
                return __c.cy.snapshot(a.value).cells.V();
              default:
                throw new E(a);
            }
          });
        var SCc = 1 / 13.334,
          KBc = IBc(
            w6((a) => {
              var b = a.context;
              const c = a.value,
                d = a.onChange,
                e = b.attrs;
              b = b.container.column;
              __c.x(a.valueType === 3);
              const f = x6(
                  (m) => {
                    d?.(c, m.target.checked);
                  },
                  [d, c]
                ),
                g = e.fontSize ?? Pf.Qb.fontSize,
                h = b.width;
              a = v6(() => {
                const m = 20 * g * SCc;
                return `${Math.round(m * Math.min(1, (h - __c.BU * 2) / m))}px`;
              }, [g, h]);
              b = v6(() => {
                var m = e.color ?? Pf.Qb.color,
                  n = e.gD ?? Pf.Qb.gD;
                const { h: p, s: q, oa: r } = __c.Zl(m),
                  t = __c.Xl(new __c.Rl(p, q * 0.59, r * 0.69)).Vo(),
                  v = __c.Xl(new __c.Rl(p, q * 0.68, r * 0.84)).Vo(),
                  w = __c.dm(__c.cm(__c.Xl(m), 0.5));
                return {
                  MSa: m,
                  Dmb: t,
                  NSa: v,
                  Emb: n !== "transparent" ? n : "#ffffff",
                  Fmb: w,
                };
              }, [e]);
              const k = __c.Vv(),
                l = x6(
                  (m) => {
                    m.nativeEvent.cancelable && m.preventDefault();
                    m.stopPropagation();
                    S6(() => {
                      d && d(c, !c);
                    })();
                  },
                  [d, c]
                );
              return s6("label", {
                className: u6("s5Xvtg", { _0YWo_Q: k, agLBbw: d == null }),
                onTouchEnd: l,
                children: t6("div", {
                  className: "nOL94A",
                  style: {
                    "--V8rdkw": a,
                    "--6kHV0A": b.MSa,
                    "--dhlyXQ": b.Dmb,
                    "--pMrTCg": b.NSa,
                    "--EyYwbg": b.MSa,
                    "--3ZWdlg": b.NSa,
                    "--81jhOQ": b.Emb,
                    "--Cs3XTw": b.Fmb,
                  },
                  children: [
                    s6("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: S6((m) => f(m)),
                      className: "p8DDOg",
                    }),
                    s6("span", {
                      "aria-hidden": !0,
                      className: u6("l_S_Ng", { iGjddQ: c }),
                      children: s6(TCc, {}),
                    }),
                  ],
                }),
              });
            })
          ),
          TCc = () =>
            s6("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: s6("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var MBc = (a, b) =>
            __c.aQa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ $g: c } = __c.rf(Pf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    la: void 0,
                    writingMode: 1,
                    fd: "start",
                    hf: UCc(e, c),
                    bb: b,
                  });
            }),
          UCc = U6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.V.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: JCc.structural }
          );
        var VCc, WCc, XCc, NBc;
        new ((VCc = class extends V6 {
          constructor() {
            super(NBc);
            WCc();
          }
        }),
        (() => {
          class a extends (XCc = O6) {
            static D(b) {
              M(b, { $g: K6 });
            }
            get $g() {
              return __c.rf(Pf, this.props.context.attrs).$g;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = s6(this.props.Di, {
                content: b,
                ta: c.container.ta,
                col: c.container.column,
                $g: this.$g,
              });
              return this.$g === "wrap"
                ? s6("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [NBc, WCc],
          } = W6(a, [], [nc], XCc));
        })(),
        VCc)();
        var TBc = class {
          Vq({ size: a, scale: b, bEa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.QX * b : __c.v5b * b;
          }
          constructor() {
            this.Tyb = U6((a, b, c) => {
              c = c.get();
              const d = b.layout.ZZ.sm(a);
              a = b.layout.ZZ.Rk(a);
              return (
                c != null &&
                d.count() === (c.rows?.size || 0) &&
                a.count() === (c.columns?.size || 0)
              );
            });
            this.vIa = T6((a) => new Set(a.get()?.columns || []), {
              equals: __c.Ui,
            });
            this.xIa = T6((a) => new Set(a.get()?.rows || []), {
              equals: __c.Ui,
            });
            this.owb = U6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.xIa(c);
                b = b.layout.ZZ.Rk(a);
                if (e.size > 0) return new Set(b);
                c = this.vIa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ta, f.column);
                  for (const g of HBc(
                    d ? d.span.jc : f.column,
                    d ? d.span.$c : f.column,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Ui }
            );
            this.pwb = U6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.vIa(c);
                b = b.layout.ZZ.sm(a);
                if (e.size > 0) return new Set(b);
                c = this.xIa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ta, f.column);
                  for (const g of HBc(
                    d ? d.span.mc : f.ta,
                    d ? d.span.xd : f.ta,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Ui }
            );
          }
        };
        var YCc,
          ZCc,
          $Cc,
          aDc,
          bDc,
          cDc,
          dDc = parseInt("4px", 10) || 4,
          eDc = parseInt("0.5px", 10) || 0.5,
          fDc = parseInt("1px", 10) || 1,
          gDc = parseInt("0.5px", 10) || 0.5,
          hDc = parseInt("0.5px", 10) || 0.5,
          iDc = parseInt("1px", 10) || 1,
          jDc = parseInt("0.5px", 10) || 0.5,
          y6;
        new ((YCc = class extends V6 {
          constructor() {
            super(y6);
            $Cc();
          }
        }),
        (() => {
          class a extends (aDc = O6) {
            static D(b) {
              M(b, { Rd: K6, Fs: K6, nba: K6 });
            }
            get Rd() {
              return this.props.sheet.direction === "rtl";
            }
            get Fs() {
              const b = this.props.Uq?.get();
              if (b != null && b.length !== 0) return new __c.dx(b);
            }
            get nba() {
              return this.props.pAa?.()?.get();
            }
            render() {
              return s6(__c.lw, {
                up: "light",
                light: "light",
                ls: "light",
                dark: "light",
                children: this.hnb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (y6.D(this),
                S6((c) => {
                  const { onMouseMove: d, sheet: e, ee: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = S6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = S6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = S6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.G8a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    Vq: h,
                    MH: k,
                    J0b: l,
                    ee: m = 1,
                    Ge: n = 1,
                  } = this.props,
                  p = { jNbTIg: !this.Rd, gtA7Dw: this.Rd };
                var q = e?.sticky
                  ? this.Rd
                    ? { right: 0 }
                    : { left: 0 }
                  : void 0;
                q = e?.sticky ? this.nba ?? q : void 0;
                let r = 0;
                const t = g.layout.Ug.Rk(f),
                  v = t.map((z) => {
                    if (!((c && t.Ne(z, c) < 0) || (d && t.Ne(z, d) > 0)))
                      return (
                        (r += z.width),
                        s6(
                          kDc,
                          {
                            col: z,
                            label: __c.Ru(f.Ut(z)),
                            $a: l?.get()?.get(z),
                            Vq: h,
                            MH: k,
                            ee: m,
                            Ge: n,
                            start: g.Pa.pa(f, z),
                          },
                          z.id
                        )
                      );
                  }),
                  w = this.Rd ? { right: r * m } : { left: r * m };
                return t6("div", {
                  style: { height: h(n), width: r * m, ...q },
                  className: u6("Vt2_4w", p, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    v,
                    e?.sticky &&
                      s6("div", {
                        style: { width: dDc * m, ...w },
                        className: u6("HBvlug", "ru3tFQ", p),
                      }),
                  ],
                });
              };
              this.hnb = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.VG
                    ? d.layout.Wd.get(d.view.freeze.VG)
                    : void 0,
                  g = { jNbTIg: !this.Rd, gtA7Dw: this.Rd };
                d = e.layout.Ug.Rk(d);
                return t6("div", {
                  ref: this.Fs?.um,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: u6("xhBZaw", g, c.className),
                  children: [
                    f && this.G8a(void 0, f, { sticky: !0 }),
                    this.G8a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [y6, $Cc],
          } = W6(a, [], [nc], aDc));
        })(),
        YCc)();
        var z6;
        new ((ZCc = class extends V6 {
          constructor() {
            super(z6);
            bDc();
          }
        }),
        (() => {
          class a extends (cDc = O6) {
            static D(b) {
              M(b, { Rd: K6, Fs: K6, nba: K6 });
            }
            get Rd() {
              return this.props.sheet.direction === "rtl";
            }
            get Fs() {
              const b = this.props.Uq?.get();
              if (b != null && b.length !== 0) return new __c.dx(b);
            }
            get nba() {
              return this.props.pAa?.()?.get();
            }
            render() {
              return s6(__c.lw, {
                up: "light",
                light: "light",
                ls: "light",
                dark: "light",
                children: this.zIb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (z6.D(this),
                S6((c) => {
                  const { onMouseMove: d, sheet: e, Ge: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = S6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = S6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = S6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.M8a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    Vq: h,
                    MH: k,
                    ee: l = 1,
                    Ge: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Rd, gtA7Dw: this.Rd };
                var p = e?.sticky ? { top: 0 } : void 0;
                p = e?.sticky ? this.nba ?? p : void 0;
                let q = 0;
                const r = g.layout.Ug.sm(f),
                  t = r.map((v) => {
                    if (!((c && r.Ne(v, c) < 0) || (d && r.Ne(v, d) > 0))) {
                      q += v.height;
                      var w = `${f.Wu(v) + 1}`;
                      return s6(
                        lDc,
                        {
                          ta: v,
                          label: w,
                          MH: k,
                          Vq: h,
                          ee: l,
                          Ge: m,
                          start: g.Pa.qa(f, v),
                        },
                        v.id
                      );
                    }
                  });
                return t6("div", {
                  style: { height: q * m, width: h(l), ...p },
                  className: u6("_93roJg", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    t,
                    e?.sticky &&
                      s6("div", {
                        style: { height: dDc * m },
                        className: u6("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.zIb = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.eU
                    ? d.layout.ce.get(d.view.freeze.eU)
                    : void 0,
                  g = { jNbTIg: !this.Rd, gtA7Dw: this.Rd };
                d = e.layout.Ug.sm(d);
                return t6("div", {
                  ref: this.Fs?.um,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: u6("An9VeA", g, c.className),
                  children: [
                    f && this.M8a(void 0, f, { sticky: !0 }),
                    this.M8a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [z6, bDc],
          } = W6(a, [], [nc], cDc));
        })(),
        ZCc)();
        var kDc = w6((a) => {
            const b = a.label,
              c = a.$a,
              d = a.col,
              e = a.MH,
              f = a.Vq,
              g = a.ee,
              h = a.Ge,
              k = f(h),
              l = NCc(() => e(d));
            return s6("div", {
              className: u6("_83Rssw", "d2uLIA", PBc(l)),
              style: {
                width: d.width * g,
                height: k,
                borderInlineWidth: `${eDc * g}px`,
                borderBlockStartWidth: `${fDc * g}px`,
                borderBlockEndWidth: `${gDc * g}px`,
                transform: `translateX(${a.start * g}px)`,
              },
              children: s6(QBc, {
                label: b,
                $a: c,
                width: d.width,
                height: f(1),
                scale: h,
                lTa: l,
              }),
            });
          }),
          lDc = w6((a) => {
            const b = a.label,
              c = a.ta,
              d = a.Vq,
              e = a.MH,
              f = a.ee,
              g = a.Ge,
              h = d(f),
              k = NCc(() => e(c));
            return s6("div", {
              className: u6("_83Rssw", "JhBzyw", PBc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${hDc * g}px`,
                borderInlineStartWidth: `${iDc * g}px`,
                borderInlineEndWidth: `${jDc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: s6(QBc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                lTa: k,
              }),
            });
          });
        var mDc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var nDc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var RBc = __c.jU({ Uo: mDc, medium: nDc });
        var oDc, pDc, qDc, VBc;
        new ((oDc = class extends V6 {
          constructor() {
            super(VBc);
            pDc();
          }
        }),
        (() => {
          class a extends (qDc = O6) {
            static D(b) {
              M(b, { Ke: K6.struct });
            }
            render() {
              const b = this.props.element;
              return s6(this.props.Rr, {
                sheet: b.G.config,
                container: b,
                Cea: "visible",
                Uq: this.props.Uq,
                Zu: this.props.Zu,
                bw: this.props.bw,
                ew: this.props.ew,
                ba: this.props.ba,
                Ke: this.Ke,
                Di: this.props.Di,
                uK: void 0,
              });
            }
            get Ke() {
              return __c.Gl(this.props.element.G.Ta, this.props.xf);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [VBc, pDc],
          } = W6(a, [], [nc], qDc));
        })(),
        oDc)();
        var rDc = class {
          constructor() {
            this.Qoa = new WeakMap();
            this.ivb = (a) => this.Qoa.get(a);
            this.Iab = (a, b) => {
              this.Qoa.set(a, b);
            };
            this.Nmb = (a, b) => {
              const c = this.Qoa.get(a);
              c && c.ia === b.ia && c.cc === b.cc && this.Qoa.delete(a);
            };
          }
        };
        var A6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ta.id}-${b.boundary}`,
          eCc = (a) => ({ color: E6(a.XP), weight: F6(a.$z), Oc: G6(a.aQ) }),
          fCc = (a) => ({ color: E6(a.WP), weight: F6(a.Zz), Oc: G6(a.$P) }),
          gCc = (a) => ({ color: E6(a.ZP), weight: F6(a.bA), Oc: G6(a.cQ) }),
          hCc = (a) => ({ color: E6(a.YP), weight: F6(a.aA), Oc: G6(a.bQ) }),
          tDc = class {
            constructor() {
              this.Xab = sDc;
              this.evb = T6((a) => {
                const b = new Map();
                let c = 0;
                a.forEach((d) => {
                  const e = c,
                    f = e + d.height;
                  b.set(d, { start: e, end: f });
                  c = f;
                });
                return b;
              });
              this.lub = U6((a, b) => {
                const c = new Map();
                var d = a.direction === "rtl";
                const e = d ? -1 : 1;
                let f = 0;
                d && ((d = b.last()), (f = d != null ? a.pa(d) + d.width : 0));
                b.forEach((g) => {
                  const h = f,
                    k = h + g.width * e;
                  c.set(g, { start: h, end: k });
                  f = k;
                });
                return c;
              });
            }
          },
          uDc = class {
            constructor() {
              this.iIb = U6(
                (a, b, c, d) => {
                  var e = d.column;
                  const f = d.ta,
                    g = a.layout.cells.get(f, e);
                  var h = H6(g?.span.jc ?? e, g?.span.$c ?? e, c);
                  d = H6(g?.span.mc ?? f, g?.span.xd ?? f, b);
                  var k = g ? f === g.span.mc : !0,
                    l = g ? f === g.span.xd : !0,
                    m = g ? e === g.span.jc : !0,
                    n = g ? e === g.span.$c : !0;
                  if (m || n || k || l) {
                    var p = {},
                      q = b.previous(f),
                      r = b.next(f),
                      t = c.previous(e),
                      v = c.next(e);
                    if (k) {
                      k = D6(a, e, f, "blockStart");
                      var w = e && q && a.layout.cells.get(q, e);
                      q = e && q && D6(a, e, q, "blockEnd");
                      const z = H6(w?.span.jc ?? e, w?.span.$c ?? e, c);
                      w = c.Ne(g?.span.jc ?? e, w?.span.jc ?? e);
                      p.qa = B6(k, q, h, z, w);
                    }
                    l &&
                      ((l = D6(a, e, f, "blockEnd")),
                      (k = e && r && a.layout.cells.get(r, e)),
                      (r = e && r && D6(a, e, r, "blockStart")),
                      (w = H6(k?.span.jc ?? e, k?.span.$c ?? e, c)),
                      (c = c.Ne(g?.span.jc ?? e, k?.span.jc ?? e)),
                      (p.Ea = B6(l, r, h, w, c)));
                    m &&
                      ((c = D6(a, e, f, "inlineStart")),
                      (h = t && f && a.layout.cells.get(f, t)),
                      (t = t && f && D6(a, t, f, "inlineEnd")),
                      (m = H6(h?.span.mc ?? f, h?.span.xd ?? f, b)),
                      (h = b.Ne(g?.span.mc ?? f, h?.span.mc ?? f)),
                      (p.pa = B6(c, t, d, m, h)));
                    n &&
                      ((e = D6(a, e, f, "inlineEnd")),
                      (n = v && f && a.layout.cells.get(f, v)),
                      (a = v && f && D6(a, v, f, "inlineStart")),
                      (v = H6(n?.span.mc ?? f, n?.span.xd ?? f, b)),
                      (b = b.Ne(g?.span.mc ?? f, n?.span.mc ?? f)),
                      (p.Na = B6(e, a, d, v, b)));
                    return p;
                  }
                },
                { equals: iCc }
              );
              this.hob = (a, b, c) => {
                const d = new Map();
                a.forEach(({ pa: e, qa: f, Na: g, Ea: h }, k) => {
                  e && d.set(e.color, (d.get(e.color) || 0) + 1);
                  f && d.set(f.color, (d.get(f.color) || 0) + 1);
                  g &&
                    c &&
                    k.includes(c.id) &&
                    d.set(g.color, (d.get(g.color) || 0) + 1);
                  h &&
                    b &&
                    k.includes(b.id) &&
                    d.set(h.color, (d.get(h.color) || 0) + 1);
                });
                return d;
              };
            }
          },
          sDc = new uDc(),
          bCc = new tDc();
        var kCc = T6((a) => {
            const b = a.layout.cols.first();
            if (b == null) return 0;
            let c = 0;
            const d = a.Is ? 0 : a.Tk.weight;
            for (const e of a.layout.rows) {
              const f = a.layout.attrs.get(Qf({ bA: void 0 }), e, b);
              c = Math.max(c, F6(f?.bA) ?? d);
            }
            return c;
          }),
          lCc = T6((a) => {
            const b = a.layout.rows.first();
            if (b == null) return 0;
            let c = 0;
            const d = a.Is ? 0 : a.Tk.weight;
            for (const e of a.layout.cols) {
              const f = a.layout.attrs.get(Qf({ $z: void 0 }), b, e);
              c = Math.max(c, F6(f?.$z) ?? d);
            }
            return c;
          }),
          jCc = T6((a) => {
            const b = a.layout.cols.last();
            if (b == null) return 0;
            let c = 0;
            const d = a.Is ? 0 : a.Tk.weight;
            for (const e of a.layout.rows) {
              const f = a.layout.attrs.get(Qf({ aA: void 0 }), e, b);
              c = Math.max(c, F6(f?.aA) ?? d);
            }
            return c;
          }),
          mCc = T6((a) => {
            const b = a.layout.rows.last();
            if (b == null) return 0;
            let c = 0;
            const d = a.Is ? 0 : a.Tk.weight;
            for (const e of a.layout.cols) {
              const f = a.layout.attrs.get(Qf({ Zz: void 0 }), b, e);
              c = Math.max(c, F6(f?.Zz) ?? d);
            }
            return c;
          });
        var vDc = parseInt("4px", 10) || 4,
          wDc = w6(({ sheet: a, zb: b, ba: c, range: d, ky: e, my: f }) => {
            if (d != null && (e || f)) {
              c = c?.get() ?? 1;
              var g = a.direction === "rtl",
                h = { ZJ0G6w: !g, dOI_jA: g };
              if (e && f)
                return (
                  (e = b.Pa.qa(a, d.xd) + d.xd.height),
                  (a = b.Pa.pa(a, d.$c) + d.$c.width),
                  s6("div", {
                    style: { top: e * c, width: a * c, height: vDc * c },
                    className: u6("aX8dhQ", "VGcLng"),
                  })
                );
              if (e)
                return (
                  (b = b.Pa.pa(a, d.$c) + d.$c.width),
                  s6("div", {
                    style: {
                      width: vDc * c,
                      height: a.height * c,
                      ...(g ? { right: b * c } : { left: b * c }),
                    },
                    className: u6("aX8dhQ", "gl1RPg", h),
                  })
                );
              if (f)
                return (
                  (b = b.Pa.qa(a, d.xd) + d.xd.height),
                  s6("div", {
                    style: { top: b * c, width: a.width * c, height: vDc * c },
                    className: u6("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var X6 = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = GBc();
            oCc({ sheet: a, zb: b, ba: d, range: c, Bd: f });
            return s6("div", {
              ref: f,
              className: u6(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: e,
            });
          },
          xDc = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = GBc();
            oCc({ sheet: a, zb: b, ba: d, range: c, Bd: f });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return s6("div", {
              className: u6("nstn2A", a, "_9sodyg"),
              children: s6("div", {
                ref: f,
                className: u6("nstn2A", a),
                children: e,
              }),
            });
          };
        var qCc = w6(({ sheet: a, children: b, xF: c }) => {
            const d = x6(
                (f) => {
                  c.xJa(a, f);
                },
                [c, a]
              ),
              e = x6(
                (f) => {
                  f != null ? c.yF.set(a, f) : c.yF.delete(a);
                },
                [c, a]
              );
            return s6(__c.H2b, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Lw: e,
              children: b,
            });
          }),
          pCc = class {
            xJa(a, b) {
              this.onScroll && this.onScroll(a);
              this.vaa.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.yF = new WeakMap();
              this.vaa = R6.map(new Map(), { deep: !1 });
              this.scrollTo = S6((b, c) => {
                this.yF.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var tCc = w6((a) => {
          const b = a.item,
            c = a.Uq,
            d = a.Zu,
            e = a.wg,
            f = a.measureRef,
            g = a.ba,
            h = a.b0a,
            k = a.cc,
            l = a.bw,
            m = a.ew,
            n = a.Rr,
            p = a.vP,
            q = a.Di,
            r = a.xf,
            t = a.zb,
            v = a.xF;
          a = v6(() => __c.Gl(b.Ta, r), [b, r]);
          const w = v6(
              () =>
                w6(({ sheet: B, range: D, ky: I, my: L }) =>
                  s6(X6, {
                    sheet: B,
                    zb: t,
                    range: D,
                    ba: g,
                    children: s6(wDc, {
                      sheet: B,
                      zb: t,
                      ba: g,
                      range: D,
                      ky: I,
                      my: L,
                    }),
                  })
                ),
              [g, t]
            ),
            z = nCc(b.config),
            A = g.get(),
            C = Math.min(z.width * A, k.width);
          I6(
            () =>
              J6(() => {
                var B = b.config.view.freeze.VG
                  ? b.config.layout.Wd.get(b.config.view.freeze.VG)
                  : void 0;
                if (B != null)
                  if (b.config.pa(B) + B.width > C) {
                    if ((B = v.yF.get(b))) B.style.overflowX = "hidden";
                  } else if ((B = v.yF.get(b))) B.style.overflowX = "scroll";
              }),
            [b, k.width, v, A, C]
          );
          return s6("div", {
            ref: f,
            className: "E8r86A",
            style: { width: C },
            children: s6(p, {
              sheet: b,
              children: s6("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: z.width * A, height: z.height * A },
                children: s6("div", {
                  className: "W1ir5A",
                  children: s6(n, {
                    container: e.nk(b),
                    sheet: b.config,
                    Cea: "visible",
                    Uq: c,
                    Zu: d,
                    ba: g,
                    bw: l,
                    ew: m,
                    Ke: a,
                    Di: q,
                    uK: w,
                  }),
                }),
              }),
            }),
          });
        });
        var yDc = w6(({ page: a, zb: b, range: c, oF: d }) => {
          const e = vCc(a.sheet, b, c);
          return s6("div", {
            className: "Gi9pfA",
            children: a.elements.map((f, g) =>
              e == null ? d(f, g) : __c.Di(Fi(f)).Zq(e) && d(f, g)
            ),
          });
        });
        var zDc = new __c.XT(),
          ADc = (a) => __c.QX * a,
          BDc = () => "primary-default",
          wCc = w6(
            ({
              container: a,
              Uq: b,
              Zu: c,
              bw: d,
              ew: e,
              c7: f,
              ba: g,
              viewport: h,
              zb: k,
              FKb: l,
              Rr: m,
              Di: n,
              oF: p,
              Pna: q,
              cTb: r,
              KRb: t,
              JRb: v,
            }) => {
              const w = a.page,
                z = v6(
                  () =>
                    w6(({ sheet: A, range: C, ky: B, my: D }) =>
                      t6(FCc, {
                        children: [
                          s6(X6, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: s6(wDc, {
                              sheet: A,
                              zb: k,
                              ba: g,
                              range: C,
                              ky: B,
                              my: D,
                            }),
                          }),
                          t6(xDc, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: [
                              r && s6(r, {}),
                              p && s6(yDc, { page: w, zb: k, oF: p, range: C }),
                              v && s6(v, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            C &&
                            s6(X6, {
                              sheet: w.sheet,
                              zb: k,
                              range: C,
                              ba: g,
                              children: s6(t, { range: C }),
                            }),
                        ],
                      })
                    ),
                  [w, k, g, r, p, v, q, t]
                );
              return l
                ? s6(CDc, {
                    container: a,
                    viewport: h,
                    ba: g,
                    Uq: b,
                    Zu: c,
                    bw: d,
                    ew: e,
                    Rr: m,
                    Di: n,
                    uK: z,
                    zb: k,
                  })
                : s6(m, {
                    sheet: w.sheet,
                    container: a,
                    Cea: "hidden",
                    Uq: b,
                    Zu: c,
                    bw: d,
                    ew: e,
                    c7: f,
                    ba: g,
                    viewport: h,
                    Di: n,
                    uK: z,
                  });
            }
          ),
          CDc = w6((a) => {
            const b = a.container,
              c = a.ba,
              d = a.viewport,
              e = a.Uq,
              f = a.Zu,
              g = a.bw,
              h = a.ew,
              k = a.Rr,
              l = a.Di,
              m = a.uK;
            a = a.zb;
            const n = b.page,
              p = n.sheet.direction === "rtl",
              q = P6(null),
              r = P6(null),
              t = P6(null);
            I6(() => {
              const C = Y6({
                sheet: n.sheet,
                Apa: !0,
                Bpa: !0,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = q.current;
                  if (B && D) {
                    var I = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    D.style.top = B.top ?? "0px";
                    I
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            I6(() => {
              const C = Y6({
                sheet: n.sheet,
                Apa: !1,
                Bpa: !0,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = t.current;
                  B &&
                    D &&
                    ((D.style.position = B.position ?? "sticky"),
                    (D.style.top = B.top ?? "0px"),
                    (D.style.transform = B.transform ?? ""));
                }
              );
            }, [n.sheet, c, d]);
            I6(() => {
              const C = Y6({
                sheet: n.sheet,
                Apa: !0,
                Bpa: !1,
                ba: c,
                viewport: d,
              });
              return L6(
                () => C?.get(),
                (B) => {
                  const D = r.current;
                  if (B && D) {
                    var I = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    I
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            const v = x6(
                (C, B, D) =>
                  Y6({ sheet: C, Apa: B, Bpa: D, ba: c, viewport: d }),
                [c, d]
              ),
              w = v6(
                () => (v ? () => v(n.sheet, !0, !1) : void 0),
                [v, n.sheet]
              ),
              z = v6(
                () => (v ? () => v(n.sheet, !1, !0) : void 0),
                [v, n.sheet]
              ),
              A = c?.get() ?? 1;
            return t6("div", {
              className: u6("OsKKIQ", "cbOp6Q"),
              children: [
                s6("div", {
                  className: "VDFv_A",
                  children: s6(k, {
                    sheet: n.sheet,
                    container: b,
                    Cea: "hidden",
                    Uq: e,
                    Zu: f,
                    bw: g,
                    ew: h,
                    c7: v,
                    ba: c,
                    viewport: d,
                    Di: l,
                    uK: m,
                  }),
                }),
                s6("div", {
                  ref: q,
                  className: "_688KWg",
                  children: s6(SBc, { Rd: p, XZa: !1, Vq: ADc, scale: A }),
                }),
                s6("div", {
                  ref: t,
                  className: "m0cT1w",
                  children: s6(y6, {
                    sheet: n.sheet,
                    ee: A,
                    Ge: A,
                    Vq: ADc,
                    MH: BDc,
                    zI: zDc,
                    pAa: w,
                    zb: a,
                  }),
                }),
                s6("div", {
                  ref: r,
                  className: "zm537g",
                  children: s6(z6, {
                    sheet: n.sheet,
                    ee: A,
                    Ge: A,
                    Vq: ADc,
                    MH: BDc,
                    zI: zDc,
                    pAa: z,
                    zb: a,
                  }),
                }),
              ],
            });
          }),
          Y6 = ({ sheet: a, Apa: b, Bpa: c, ba: d, viewport: e }) =>
            K6(() => {
              var f = e?.get().sb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new fi(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var CCc = class {
          constructor(a, b) {
            this.sl = a;
            this.zb = b;
            this.smb = __c.BU;
            this.Gub = U6((c, d, e, f) => {
              e = e.get();
              const g = new WeakMap();
              for (let v = 0; v < e.length; v++) {
                var h = e[v],
                  k = this.wub(c, d, h);
                if (k) {
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[v + 1];
                      if (l == null || !YB(c, this.zb, d, l)) continue;
                      break;
                    case "center":
                      l = e[v + 1];
                      if (l == null || !YB(c, this.zb, d, l)) continue;
                      l = e[v - 1];
                      if (l == null || !YB(c, this.zb, d, l)) continue;
                      break;
                    case "end":
                      l = e[v - 1];
                      if (l == null || !YB(c, this.zb, d, l)) continue;
                      break;
                    default:
                      throw new E(k);
                  }
                  if ((l = f(d, h))) {
                    var m = l.width + (k === "center" ? 0 : this.smb);
                    if (!(h.width > m)) {
                      switch (k) {
                        case "start":
                        case "justify":
                          k = this.zb.Pa.pa(c, h);
                          l = k + m;
                          break;
                        case "center":
                          l = this.zb.Pa.pa(c, h) + h.width / 2;
                          k = l - m / 2;
                          l += m / 2;
                          break;
                        case "end":
                          l = this.zb.Pa.pa(c, h) + h.width;
                          k = l - m;
                          break;
                        default:
                          throw new E(k);
                      }
                      for (m = e.indexOf(h); m >= 0; m--) {
                        var n = e[m],
                          p = m - 1 < 0 || YB(c, this.zb, d, e[m - 1]),
                          q;
                        if ((q = n === h || YB(c, this.zb, d, n))) {
                          q = k;
                          var r = l,
                            t = this.zb.Pa.pa(c, n);
                          q = q < t && t < r;
                        }
                        if (q && p) g.set(n, 1);
                        else break;
                      }
                      for (h = e.indexOf(h) + 1; h < e.length; h++) {
                        m = e[h];
                        if ((n = YB(c, this.zb, d, m)))
                          (n = k),
                            (p = l),
                            (q = this.zb.Pa.pa(c, m)),
                            (n = n < q && q < p);
                        if (n) g.set(m, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return g;
            });
            this.wub = (c, d, e) => {
              const f = c.layout.cells.get(d, e);
              if (
                f &&
                (f.ref.content.ref || f.ref.Ca.ref) &&
                f.span.mc === f.span.xd &&
                f.span.jc === f.span.$c
              ) {
                var g = this.sl.Fn(c, d, e);
                c = this.sl.iAa(c, d, e, Qf({ $g: void 0, textAlign: void 0 }));
                var { $g: h, textAlign: k } = __c.rf(Pf, c);
                if (h === "overflow")
                  return __c.cQa(
                    k,
                    f.ref.content.ref?.type,
                    f.ref.Ca.ref?.type,
                    g ? () => g.Kj.type : void 0
                  );
              }
            };
          }
        };
        var DDc = w6(function (a) {
          const b = a.sheet;
          var c = a.zb,
            d = a.ii;
          const e = a.$Pb,
            f = a.ba,
            g = a.$Ba,
            h = a.iub;
          a = a.overflow;
          const k = GBc();
          ICc(
            () =>
              J6(() => {
                const p = y(k.current),
                  q = f?.get() ?? 1,
                  r = b.height;
                p.style.width = `${b.width * q}px`;
                p.style.height = `${r * q}px`;
              }),
            [k, f, b]
          );
          const l = x6((p) => g.Gub(b, p, e, h), [g, b, e, h]);
          var m = x6((p, q) => l(p)?.get(q) ?? 0, [l]);
          c = dCc(b, c.layout.Ug.sm(b), c.layout.Ug.Rk(b), d, e, m);
          d = b.width;
          m = b.height;
          const n = b.direction === "rtl";
          return s6("svg", {
            ref: k,
            role: "presentation",
            className: u6("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${d} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Nl: t, Ol: v }) =>
              s6(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: z }) => `M ${w.x} ${w.y} L ${z.x} ${z.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var EDc;
        EDc = Symbol.iterator;
        var FDc = class {
          get size() {
            return this.jpa;
          }
          get([a, b]) {
            return (a = this.mI.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.mI.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.mI.get(a);
            d == null && ((d = new Map()), this.mI.set(a, d));
            d.set(b, c);
            this.jpa++;
            return this;
          }
          clear() {
            this.mI.clear();
            this.jpa = 0;
          }
          delete([a, b]) {
            const c = this.mI.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.jpa--;
            c.size === 0 && this.mI.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.mI) for (const [d, e] of c) a([b, d], e);
          }
          *[EDc]() {
            for (const [a, b] of this.mI)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.jpa = 0;
            this.mI = new Map();
          }
        };
        var GDc,
          HDc,
          IDc,
          JDc,
          KDc,
          LDc,
          MDc,
          ACc = __c.tc("285688d5", !1),
          NDc,
          ODc = class extends O6 {
            render() {
              const { pia: a, ...b } = this.props,
                c = this.props.sheet;
              return t6("div", {
                ref: this.cbb,
                className: u6(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.BRa &&
                    s6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.BRa.range,
                      ky: !0,
                      my: !0,
                      className: "_0C8M3w",
                    }),
                  a?.Gfb &&
                    s6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.Gfb.range,
                      ky: !1,
                      my: !0,
                      className: "_7n44yg",
                    }),
                  a?.$Za &&
                    s6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.$Za.range,
                      ky: !0,
                      my: !1,
                      className: "fF5r6w",
                    }),
                  a?.xeb &&
                    s6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.xeb.range,
                      ky: !1,
                      my: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = J6(() => {
                var b = this.props,
                  c = b.ba;
                b = b.sheet;
                const d = this.cbb.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.fc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.cbb = hv();
            }
          };
        ({
          c: [NDc, IDc],
        } = W6(ODc, [], [nc], O6));
        IDc();
        var Z6;
        new ((GDc = class extends V6 {
          constructor() {
            super(Z6);
            JDc();
          }
        }),
        (() => {
          class a extends (KDc = O6) {
            static D(b) {
              M(b, { PJa: K6, bounds: K6 });
            }
            get PJa() {
              const b = this.props.viewport,
                c = this.props.ky,
                d = this.props.my;
              return b == null || (!c && !d)
                ? b
                : K6(() => {
                    const e = b.get().sb();
                    return Fi({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.yS,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.uK,
                g = this.props.ky,
                h = this.props.my;
              return t6("div", {
                ref: this.hGa,
                className: u6("i0YQww", this.props.className),
                children: [
                  s6("div", {
                    ref: this.H6a,
                    className: "vUKoKg",
                    children: s6("div", {
                      ref: this.I6a,
                      children: s6($6, {
                        yS: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Uq: this.props.Uq,
                        Zu: this.props.Zu,
                        cG: this.props.cG,
                        Di: this.props.Di,
                        U4: this.props.U4,
                        zb: this.props.zb,
                        ba: this.props.ba,
                        ii: this.ii,
                        Nca: this.Nca,
                        wX: this.wX,
                      }),
                    }),
                  }),
                  s6(this.osa, {}),
                  f && s6(f, { sheet: c, range: e, ky: g, my: h }),
                ],
              });
            }
            componentDidMount() {
              const b = J6(() => {
                  var h = this.props,
                    k = h.ba,
                    l = h.sheet;
                  const m = h.zb;
                  var n = this.hGa.current;
                  const p = this.H6a.current;
                  h = this.I6a.current;
                  var q = this.bounds,
                    r = q.jc,
                    t = q.$c;
                  const v = q.mc;
                  q = q.xd;
                  k = k ? k.get() : 1;
                  t =
                    t && r ? m.Pa.pa(l, t) + t.width - m.Pa.pa(l, r) : l.width;
                  q =
                    q && v
                      ? m.Pa.qa(l, q) + q.height - m.Pa.qa(l, v)
                      : l.height;
                  n &&
                    ((n.style.width = `${t * k}px`),
                    (n.style.height = `${q * k}px`));
                  p &&
                    ((p.style.width = `${t * k}px`),
                    (p.style.height = `${q * k}px`));
                  n = l.direction === "rtl";
                  r = r ? m.Pa.pa(l, r) * k * (n ? 1 : -1) : 0;
                  l = v ? -m.Pa.qa(l, v) * k : 0;
                  h && (h.style.transform = `translate(${r}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.c7;
              const e = this.props.ky,
                f = this.props.my,
                g = e || f ? d?.(c, e, f) : void 0;
              d = J6(() => {
                const h = this.hGa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.fc(this, [b, d]);
            }
            get bounds() {
              var b = this.props.sheet,
                c = this.props.zb,
                d = this.props.range;
              const e = c.layout.Ug.sm(b);
              b = c.layout.Ug.Rk(b);
              if (b.empty || e.empty)
                return { jc: void 0, $c: void 0, mc: void 0, xd: void 0 };
              c = d.jc;
              const f = d.$c,
                g = d.mc;
              d = d.xd;
              const h = b.first(),
                k = e.first(),
                l = b.last(),
                m = e.last();
              return {
                jc: c ? (b.has(c) ? c : void 0) : h,
                $c: f ? (b.has(f) ? f : void 0) : l,
                mc: g ? (e.has(g) ? g : void 0) : k,
                xd: d ? (e.has(d) ? d : void 0) : m,
              };
            }
            constructor(...b) {
              super(...b);
              this.hGa = (Z6.D(this), hv());
              this.H6a = hv();
              this.I6a = hv();
              this.wX = new PDc();
              this.aQb = K6(
                () =>
                  [...this.ii.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Ug.sm(this.props.sheet).Ne(c, d)
                  ),
                { equals: __c.Vi() }
              );
              this.ZPb = K6(
                () =>
                  [...this.Nca.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Ug.Rk(this.props.sheet).Ne(c, d)
                  ),
                { equals: __c.Vi() }
              );
              this.osa = w6(() =>
                s6(this.props.Pib, {
                  ii: this.aQb,
                  $Pb: this.ZPb,
                  iub: this.wX.Cia,
                  range: this.props.range,
                })
              );
              this.ii = K6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.PJa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.y - h : g.mc ? e.Pa.qa(c, g.mc) : 0;
                  f = f
                    ? f.br.y + h
                    : g.xd
                    ? e.Pa.qa(c, g.xd) + g.xd.height
                    : 0;
                  h = new Map();
                  const l = e.layout.Ug.sm(c);
                  for (
                    let m = g.mc;
                    m != null && g.xd != null && l.Ne(m, g.xd) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Pa.qa(c, m);
                    if (!(n + m.height < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: JCc.shallow }
              );
              this.Nca = K6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.PJa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.x - h : g.jc ? e.Pa.pa(c, g.jc) : 0;
                  f = f ? f.br.x + h : g.$c ? e.Pa.pa(c, g.$c) + g.$c.width : 0;
                  h = new Map();
                  const l = e.layout.Ug.Rk(c);
                  for (
                    let m = g.jc;
                    m != null && g.$c != null && l.Ne(m, g.$c) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Pa.pa(c, m);
                    if (!(n + m.width < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: JCc.shallow }
              );
            }
          }
          ({
            c: [Z6, JDc],
          } = W6(a, [], [nc], KDc));
        })(),
        GDc)();
        var PDc = class {
            constructor() {
              this.cells = new FDc();
              this.tHa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = R6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.Cia = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = R6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.LTa;
              };
            }
          },
          $6;
        new ((HDc = class extends V6 {
          constructor() {
            super($6);
            LDc();
          }
        }),
        (() => {
          class a extends (MDc = O6) {
            static D(b) {
              M(b, { eP: R6.shallow, Fs: K6, cRa: S6, Wfa: S6.bound });
            }
            get Fs() {
              const b = this.props.Uq?.get();
              if (b != null && b.length !== 0) return new __c.dx(b);
            }
            render() {
              return t6("div", {
                onMouseDown: this.props.Zu?.onMouseDown,
                onTouchStart: this.props.Zu?.onTouchStart,
                ref: OCc(this.Bd, this.Fs?.um),
                children: [
                  s6("div", { ref: this.rva, className: "_5YlOqQ" }),
                  s6("div", { ref: this.tva, className: "_XCmKw" }),
                  this.eP.map((b) => b.tGb),
                ],
              });
            }
            componentDidMount() {
              const b = L6(
                  () => [
                    this.props.sheet,
                    this.props.Nca.get(),
                    this.props.ii.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.Omb();
                    this.cRa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = J6(() => {
                  var e = this.props,
                    f = e.ba;
                  e = e.sheet;
                  const g = this.Bd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.eP.map((e) => BCc(e));
              __c.fc(this, [c, b, ...d]);
            }
            Omb() {
              const b = y(this.rva.current),
                c = y(this.tva.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.kNa.length = 0;
              this.eP.length = 0;
            }
            cRa(b, c) {
              const d = y(this.rva.current),
                e = y(this.tva.current),
                f = [],
                g = new Map();
              for (const h of this.kNa)
                c.has(h.ta) ? g.set(h.ta, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new QDc(this.Wfa, h)),
                    d.appendChild(c.Xea),
                    e.appendChild(c.Zea),
                    this.kNa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Wfa(b, c) {
              const d = this.props.U4,
                e = this.props.zb,
                f = this.props.sheet,
                g = this.props.container,
                h = this.props.wX;
              b = new RDc(
                this.props.yS,
                this.props.cG,
                this.props.Di,
                d(b, c),
                e,
                f,
                b,
                c,
                g,
                h.tHa,
                this.Mia,
                this.Lia
              );
              __c.fc(this, BCc(b));
              this.eP.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Bd = ($6.D(this), hv());
              this.rva = hv();
              this.tva = hv();
              this.kNa = [];
              this.eP = [];
              this.Mia = U6((c) => {
                const d = this.props.ii.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Lia = U6((c) => {
                const d = this.props.Nca.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [$6, LDc],
          } = W6(a, [], [nc], MDc));
        })(),
        HDc)();
        var QDc = class {
            static D(a) {
              M(a, { update: S6 });
            }
            update(a, b, c) {
              [this.Xea, this.Zea].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ta = b;
              for (const [d] of c)
                (c = this.eP.get(d)),
                  c ||
                    ((c = this.Wfa(d, b)),
                    this.eP.set(d, c),
                    this.Xea.appendChild(c.Wea),
                    this.Zea.appendChild(c.kQ)),
                  c.update(b);
            }
            hide() {
              [this.Xea, this.Zea].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Wfa = a;
              this.ta = b;
              this.Xea = (QDc.D(this), document.createElement("div"));
              this.Zea = document.createElement("div");
              this.eP = new Map();
            }
          },
          RDc = class {
            static D(a) {
              M(a, {
                Jfa: R6.ref,
                ta: R6.ref,
                cBa: K6,
                update: S6,
                Hv: K6,
                attrs: K6.struct,
                ECa: K6,
                Nx: K6,
                renderer: K6,
                LTa: K6.struct,
              });
            }
            get cBa() {
              if (!ACc) return !1;
              const a = this.Hv;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.yS(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.ta &&
                ((this.ta = a),
                (this.jC.ta = a),
                this.Nxa && this.Nxa(),
                (this.Nxa = this.tHa(this.ta, this.col, this)));
            }
            get tGb() {
              return this.Jfa;
            }
            get Hv() {
              const a = this.sheet.layout.cells.get(this.ta, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.jC.attrs;
              return {
                $g: a?.$g,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
                gD: a?.gD,
              };
            }
            get ECa() {
              var a = this.jC.span;
              if (!a) return !1;
              if (a.mc === a.xd && a.jc === a.$c) return !0;
              var b = this.Mia("first");
              const c = this.Mia("last"),
                d = this.Lia("first"),
                e = this.Lia("last");
              if (!(b && c && d && e)) return !1;
              const f = this.zb.layout.Ug.sm(this.sheet),
                g = this.zb.layout.Ug.Rk(this.sheet);
              b = f.Ne(a.mc, b) >= 0 && f.Ne(a.mc, c) <= 0 ? a.mc : b;
              a = g.Ne(a.jc, d) >= 0 && g.Ne(a.jc, e) <= 0 ? a.jc : d;
              return b === this.ta && a === this.col;
            }
            get Nx() {
              const a = this.sheet,
                b = this.ta,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ta: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.JR(c, b);
                case "sheet-item":
                  return this.container.JR(c, b);
                case "sheet-element":
                  return this.container.JR(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.Hv;
              if (a && this.ECa && (a.content.ref || a.Ca.ref))
                return this.cG({
                  context: { container: this.Nx, attrs: this.attrs },
                  kr: this.XEa,
                  Di: this.Di,
                });
            }
            get LTa() {
              this.MTa.reportObserved();
              var a = LCc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.G$ : this.XG),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
              this.yS = a;
              this.cG = b;
              this.jC = d;
              this.zb = e;
              this.sheet = f;
              this.col = g;
              this.container = k;
              this.tHa = l;
              this.Mia = m;
              this.Lia = n;
              this.Wea = (RDc.D(this), document.createElement("div"));
              this.kQ = document.createElement("div");
              this.PG = document.createElement("div");
              this.XG = document.createElement("div");
              this.G$ = document.createElement("div");
              this.MTa = KCc("content size atom");
              this.XEa = S6(() => this.MTa.reportChanged());
              this.ta = h;
              this.Wea.className = "_2JFriw";
              this.kQ.className = "imy9ug";
              this.PG.className = u6("pDMp7w", {
                _0yZ6Qg: this.Hv?.content.ref?.type !== "text3",
                qhF5uA:
                  this.Hv?.content.ref?.type !== "text3" &&
                  this.Hv?.content.ref?.type !== "text2",
                qxD1GA: this.cBa,
              });
              this.XG.className = "_30B9pw";
              this.PG.appendChild(this.XG);
              this.kQ.appendChild(this.PG);
              this.G$.className = "G7zH2w";
              this.Nxa = l(this.ta, this.col, this);
              this.Di = (p) => s6(c, { ...p, kr: this.XEa });
            }
          };
        var SDc, TDc, UDc, M6;
        new ((SDc = class extends V6 {
          constructor() {
            super(M6);
            TDc();
          }
        }),
        (() => {
          class a extends (UDc = O6) {
            static D(b) {
              M(b, { pia: K6 });
            }
            render() {
              const {
                  yS: b,
                  sheet: c,
                  container: d,
                  zb: e,
                  Uq: f,
                  Zu: g,
                  c7: h,
                  cG: k,
                  Ke: l,
                  Di: m,
                  viewport: n,
                  uK: p,
                  vfb: q = !1,
                } = this.props,
                r = c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                t = e.layout.Ug.sm(c);
              if (!e.layout.Ug.Rk(c).empty && !t.empty)
                return s6("div", {
                  className: u6("SNkrHw", r, { RaA0Nw: q }),
                  ...l,
                  children: s6(NDc, {
                    yS: b,
                    cG: k,
                    Di: m,
                    Pib: this.osa,
                    U4: this.U4,
                    zb: e,
                    sheet: c,
                    container: d,
                    Uq: f,
                    Zu: g,
                    c7: h,
                    ba: this.ba,
                    viewport: n,
                    uK: p,
                    pia: this.pia,
                  }),
                });
            }
            get pia() {
              var b = this.props.sheet,
                c = this.props.zb;
              const d = {},
                e = b.view.freeze.eU
                  ? b.layout.ce.get(b.view.freeze.eU)
                  : void 0,
                f = b.view.freeze.VG
                  ? b.layout.Wd.get(b.view.freeze.VG)
                  : void 0;
              var g = c.layout.Ug.sm(b),
                h = c.layout.Ug.Rk(b);
              b = g.first();
              c = g.last();
              const k = h.first(),
                l = h.last();
              if (b != null && c != null && k != null && l != null)
                return (
                  (h = f ? h.next(f) : k),
                  (g = e ? g.next(e) : b),
                  e && f && (d.BRa = { range: { jc: k, mc: b, $c: f, xd: e } }),
                  e && h && (d.Gfb = { range: { jc: h, mc: b, $c: l, xd: e } }),
                  f && g && (d.$Za = { range: { jc: k, mc: g, $c: f, xd: c } }),
                  g && h && (d.xeb = { range: { jc: h, mc: g, $c: l, xd: c } }),
                  d
                );
            }
            get ba() {
              return this.props.ba ? this.props.ba : K6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.osa =
                (M6.D(this),
                w6((c) => {
                  const {
                    sheet: d,
                    zb: e,
                    $Ba: f,
                    ba: g,
                    Cea: h = "hidden",
                  } = this.props;
                  return s6(X6, {
                    sheet: d,
                    zb: e,
                    range: c.range,
                    ba: g,
                    children: s6(DDc, {
                      ...c,
                      sheet: d,
                      zb: e,
                      ba: this.ba,
                      $Ba: f,
                      overflow: h,
                    }),
                  });
                }));
              this.U4 = (c, d) =>
                new __c.vQa(
                  this.props.sl,
                  this.props.zb,
                  this.props.cC,
                  this.props.sheet,
                  c,
                  d,
                  this.ba,
                  this.bw,
                  this.ew
                );
              this.bw = (c, d) => this.props.bw?.(this.props.sheet, c, d);
              this.ew = (c, d) => this.props.ew?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [M6, TDc],
          } = W6(a, [], [nc], UDc));
        })(),
        SDc)();
        __c.GQa = {
          zxb: function (a) {
            const b = a.ju,
              c = a.Pd,
              d = a.Jd,
              e = a.Nn,
              f = a.sl,
              g = a.zb,
              h = a.cC,
              k = a.V2;
            OBc({ bC: a.bC, Uf: a.Uf, hMb: a.bU, bb: a.bb });
            const l = DCc({ cG: k, zb: g, sl: f, cC: h, IA: void 0 });
            b.Lsa = xCc({ Rr: l, zb: g });
            c.psa = WBc({ Rr: l });
            ({ Tib: a } = uCc({ Rr: l, We: e(), Zab: new rDc(), zb: g }));
            d.Aq.Ksa = a;
            const { Mgb: m, Ngb: n, Lgb: p } = UBc({ zb: g });
            return {
              ePa: w6((q) =>
                s6(QCc, {
                  ...q,
                  container: void 0,
                  Rr: l,
                  Sib: m,
                  Uib: n,
                  Qib: p,
                  Di: RCc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/e8d46ba1bd1203a7.js.map
