(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 519987: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      __web_req__(775822);
      __web_req__(891548);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var pb = __c.pb;
        var E = __c.E;
        var K = __c.K;
        var wzc = function (a) {
            __c.Oic({ ...a, G: a.span });
          },
          Y5 = function (a, b) {
            var c = a.qdb.get(b);
            if (c != null) return c;
            c = { value: a.dn.zt(b) };
            a.qdb.set(b, c);
            a.idb.set(c, b);
            return c;
          },
          Z5 = function (a, b) {
            a = a.idb.get(b);
            if (a == null) throw new xzc("ref does not exists");
            return a;
          },
          yzc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new $5("text2", b);
              return b.value;
            };
            return {
              wl: (b) => ({ type: "text2", value: b }),
              At: (b) => {
                if (b?.type !== "text2") throw new a6("text2", b);
                return b.value;
              },
              zt: a,
              gv: a,
            };
          },
          zzc = function (a) {
            const b = () => a.fl.kC.get(a.yf.Yi) || b6;
            return {
              aZ: function () {
                return a.fl.$k
                  ? 3
                  : a.fl.mxb === "checking" || a.fl.Zc.status === 2
                  ? 1
                  : a.fl.Zc.status === 3
                  ? 4
                  : a.fl.Jy
                  ? 2
                  : 0;
              },
              oAa: function () {
                const c = a.yf,
                  { AJ: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      e.type === "select" &&
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              Pub: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                d = c.MI.get(d) ?? 0;
                d = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                return d;
              },
              qvb: function (c) {
                if (!a.yf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              FAa: b,
              WBb: (c) => {
                const d = new Map(a.fl.kC);
                d.set(a.yf.Yi, { ...b(), ...c });
                return d;
              },
            };
          },
          Dzc = function (a, b, c, d, e, f) {
            function g() {
              const v = b.aZ(),
                w = q();
              return (p === "poll" || !w) && v === 0;
            }
            async function h() {
              const v = f.Eh("submit_response", {
                  So: { name: "ui.rendering.form.submit_response" },
                }),
                w = {
                  IH: m,
                  hia: p,
                  Tr: "interacted",
                  action: "response_submitted",
                  location: "in_form",
                };
              e && wzc({ span: v, ha: e, event: __c.V2, props: w });
              const { results: z, Zf: A, SGa: C } = r();
              if (A != null && g()) {
                var B = a.yf.fields.first(
                  ({ value: P }) =>
                    P.type === "select" &&
                    !!P.options.first(({ value: R }) => R.id === A)?.value
                )?.value;
                if (B) {
                  l("selected_field_found", v);
                  var D = a.fl,
                    I = z;
                  p === "poll" &&
                    C &&
                    C !== A &&
                    (I = Azc({ rua: z, Bs: B.id, A_: C }));
                  I = Bzc({ xUa: I, Bs: B.id, A_: A });
                  l("field_results_created", v);
                  c6(() => {
                    a.On(() => ({
                      kC: t({ Zf: A, AJ: A, results: I }),
                      Jy: !0,
                    }));
                  });
                  l("submission_set", v);
                  v.AY();
                  var L = await c.rAb({
                    Dr: a.yf.Dr,
                    Yi: n,
                    Ita: [
                      {
                        type: 0,
                        Bs: B.id,
                        Vl: B.label.text.V.trim(),
                        I0: [A],
                        options:
                          B.type === "select"
                            ? B.options.map(({ value: P }) => ({
                                id: P.id,
                                label: P.label.text.V.trim(),
                              }))
                            : [],
                      },
                    ],
                  });
                  if (L.ok)
                    return c6(() => {
                      const P = (R) =>
                        !!L.value.result.FXa.get(B.id)?.feedback?.wD?.includes(
                          R
                        );
                      a.On(() => ({
                        Jy: !1,
                        Zc: { ...a.fl.Zc, Mja: P },
                        kC: t({ SGa: void 0 }),
                      }));
                    });
                  d?.Bx({
                    Oy: K("izckBA"),
                    group: Czc,
                    OC: { Lx: K("mQhziQ"), onClick: h },
                  });
                  var N = Azc({ rua: I, Bs: B.id, A_: A });
                  C && (N = Bzc({ xUa: N, Bs: B.id, A_: C }));
                  c6(() => {
                    a.On({
                      ...D,
                      ...(C && { kC: t({ Zf: C, AJ: C, results: N }) }),
                    });
                  });
                } else v.abort();
              } else v.abort();
            }
            async function k(v) {
              const w = r(),
                z = a.yf.fields.first(
                  ({ value: B }) =>
                    B.type === "select" &&
                    !!B.options.first(({ value: D }) => D.id === v)?.value
                )?.value;
              if (z) {
                var A = a.fl,
                  C = Azc({ rua: w.results, Bs: z.id, A_: v });
                c6(() => {
                  a.On(() => ({
                    kC: t({ Zf: void 0, AJ: void 0, results: C }),
                    Sz: void 0,
                    Jy: !0,
                  }));
                });
                (await c.h0({ Yi: n })).ok
                  ? c6(() => {
                      a.On({ Jy: !1 });
                    })
                  : (d?.Bx({
                      Oy: K("kgHTHw"),
                      group: Czc,
                      OC: { Lx: K("mQhziQ"), onClick: () => k(v) },
                    }),
                    c6(() => {
                      a.On(A);
                    }));
              }
            }
            function l(v, w) {
              w.addEvent(v);
              w.md().addEvent(v);
            }
            const m = a.yf.id,
              n = a.yf.Yi,
              p = a.yf.type,
              q = b.oAa,
              r = b.FAa,
              t = b.WBb;
            return {
              submit: h,
              iEa: function () {
                a.On(() => ({ HU: 1 }));
              },
              jEa: function () {
                a.On(() => ({ HU: 0 }));
              },
              hEa: function () {
                a.On(() => ({ HU: 2 }));
              },
              kEa: function () {
                a.On(() => ({ HU: 1 }));
              },
              mqa: function (v) {
                const w = r(),
                  z = p === "poll" && v === w?.Zf && v === w?.AJ;
                if (g() && z) k(v);
                else if (
                  g() &&
                  a.yf.fields.some(
                    ({ value: C }) =>
                      C.type === "select" &&
                      C.options.some(({ value: B }) => B.id === v)
                  )
                ) {
                  var A = w?.AJ;
                  c6(() => {
                    const C = r();
                    a.On(() => ({
                      kC: t({ SGa: A, Zf: C.Zf === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              Bla: function (v) {
                g() &&
                  a.yf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.On(() => ({ TH: v }));
              },
              Cla: function (v) {
                b.aZ() === 0 &&
                  a.yf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.fl.TH &&
                  a.On(() => ({ TH: void 0 }));
              },
              zla: function (v) {
                const { AJ: w, Zf: z } = r();
                b.aZ() === 0 &&
                  a.yf.fields.some(
                    ({ value: A }) =>
                      A.type === "select" &&
                      A.options.some(({ value: C }) => C.id === v)
                  ) &&
                  z !== v &&
                  !w &&
                  a.On(() => ({ Sz: v }));
              },
              Dla: function (v) {
                b.aZ() === 0 &&
                  a.yf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.fl.Sz &&
                  a.On(() => ({ Sz: void 0 }));
              },
            };
          },
          Azc = function ({ rua: a, Bs: b, A_: c }) {
            const d = a.fields.get(b) ?? { id: b, MI: new Map(), total: 0 },
              e = Math.max(0, (d.MI.get(c) ?? 0) - 1),
              f = new Map(d.MI);
            e > 0 ? f.set(c, e) : f.delete(c);
            return {
              fields: Ezc(a.fields, b, {
                id: b,
                MI: f,
                total: Math.max(0, d.total - 1),
              }),
            };
          },
          Bzc = function ({ xUa: a, Bs: b, A_: c }) {
            const d = a.fields.get(b) ?? { id: b, MI: new Map(), total: 0 },
              e = (d.MI.get(c) ?? 0) + 1;
            return {
              fields: Ezc(a.fields, b, {
                id: b,
                MI: Ezc(d.MI, c, e),
                total: d.total + 1,
              }),
            };
          },
          Ezc = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          d6 = function (a, b) {
            __c.u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.Yi(b, (d) => {
              const e = c.get(d) ?? __c.jm(d, a);
              c.set(d, e);
              return e;
            });
          },
          Fzc = function (a, b) {
            return __c.hlc(a, b) >= 20 ? a : d6(b, e6);
          },
          f6 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.Qa.Bg[0].color;
              default:
                throw new E(a);
            }
          },
          g6 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            N: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? Gzc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? Gzc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              N: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          Hzc = function ({
            padding: a,
            direction: b,
            background: c,
            N: d,
            xa: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              N: d,
              xa: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          Gzc = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { qa: a[0], Na: a[1], Ea: a[0], pa: a[1] };
              case 4:
                return { qa: a[0], Na: a[1], Ea: a[2], pa: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          h6 = function (a, b) {
            a = __c.Lk.create(__c.Lk.snapshot(a.text));
            b != null && a.setAttributes(b);
            return { type: "text", OF: 1, text: __c.Lk.snapshot(a) };
          },
          i6 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new E(a);
            }
          },
          j6 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new E(a);
            }
          },
          Izc = function (a) {
            if (a)
              return {
                mqa: a.mqa,
                Bla: a.Bla,
                Cla: a.Cla,
                zla: a.zla,
                Dla: a.Dla,
              };
          },
          Jzc = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: h6(b, { direction: j6(a) }),
            };
          },
          Mzc = function ({
            direction: a,
            messages: b,
            QFa: c,
            fontFamily: d,
            C$: e,
            N: f,
            state: g,
            bq: h,
            ct: k,
          }) {
            var l = h !== k,
              m = d6(k, e6);
            h = l ? h : m;
            m = Fzc("#000000", k);
            var n = Fzc(h, k);
            l = Kzc(g, g === 3 && l ? n : m, l);
            b = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [
                {
                  id: "text",
                  placement: {
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: h6(c, {
                    direction: j6(a),
                    ...(g === 3 && { color: d6(h, e6) }),
                  }),
                },
                g === 3 || g === 4 || g === 5
                  ? {
                      id: "percentage",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: {
                        type: "text",
                        OF: 0,
                        fontFamily: d,
                        fontWeight: "bold",
                        fontSize: Lzc,
                        text: b.Yna(e),
                        textAlign: "end",
                        direction: j6(a),
                        color: g === 3 ? d6(h, e6) : d6(k, e6),
                      },
                    }
                  : void 0,
              ].filter(pb),
            };
            if (g !== 3 && g !== 4 && g !== 5) return b;
            c = e > 0;
            const p = e < 100;
            n = (k = (c && !p) || (!c && p)) ? 1 : 2;
            e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(pb);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              xa: g === 3 ? 0 : 0.8,
            };
            return k
              ? { ...b, fill: c ? g : l }
              : {
                  type: "layout",
                  direction: i6(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      N: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: Hzc({
                        direction: i6(a),
                        content: {
                          type: "text",
                          OF: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: Lzc,
                          direction: j6(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: b,
                    },
                  ],
                };
          },
          Kzc = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, xa: 0.88 };
              case 2:
                return { type: "color", color: b, xa: 0.74 };
              case 3:
                return { type: "color", color: b, xa: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, xa: 0.92 };
              default:
                throw new E(a);
            }
          },
          Nzc = function ({
            Btb: a,
            tS: b,
            Bs: c,
            direction: d,
            options: e,
            Zf: f,
            TH: g,
            Sz: h,
            PFa: k,
            fontFamily: l,
            Zaa: m,
            bq: n,
            ct: p,
            messages: q,
            cra: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: g6({
                layout: "vertical",
                direction: i6(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const w = t.id === g,
                    z = t.id === h;
                  v = m ? (v ? 3 : w ? 5 : 4) : z ? 2 : w ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      N: k,
                      Zm: () => b?.mqa?.(t.id),
                      onMouseEnter: () => b?.Bla?.(t.id),
                      onMouseLeave: () => b?.Cla?.(t.id),
                      onMouseDown: () => b?.zla?.(t.id),
                      onMouseUp: () => b?.Dla?.(t.id),
                      ...Mzc({
                        messages: q,
                        QFa: t.label,
                        direction: d,
                        fontFamily: l,
                        C$: a.Pub(c, t.id),
                        N: k,
                        state: v,
                        bq: n,
                        ct: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          Szc = function (a) {
            const b = a.status,
              c = a.direction,
              d = a.backgroundColor,
              e = a.fontSize,
              f = a.fontFamily,
              g = d6(d, e6);
            switch (b) {
              case 0:
                return {
                  type: "text",
                  OF: 1,
                  text: k6(
                    a.statusMessage ?? (a.messages.Jp("live") || K("/iw6+Q")),
                    c,
                    d6(d, Ozc),
                    g,
                    e,
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  OF: 1,
                  text: k6(a.messages.loading(), c, d6(d, Pzc), g, e, f),
                };
              case 2:
                return {
                  type: "text",
                  OF: 1,
                  text: k6(a.messages.tba(), c, d6(d, Pzc), g, e, f),
                };
              case 3:
                return {
                  type: "text",
                  OF: 1,
                  text: k6(a.messages.offline(), c, d6(d, Qzc), g, e, f),
                };
              case 4:
                return {
                  type: "text",
                  OF: 1,
                  text: k6(
                    a.messages.Jp("somethingWentWrong") || K("ElTceA"),
                    c,
                    d6(d, Rzc),
                    g,
                    e,
                    f
                  ),
                };
              default:
                throw new E(b);
            }
          },
          Tzc = function ({
            direction: a,
            messages: b,
            eDb: c,
            status: d,
            Zc: e,
            backgroundColor: f,
            fontSize: g,
            fontFamily: h,
          }) {
            e =
              e.status === 1
                ? e.data.IU?.type === "ANON"
                  ? b.Jp("yourNameWontBeShared") || K("Gzs/9g")
                  : b.Jp("yourNameWillBeShared") || K("WjcAyg")
                : b.Jp("live") || K("/iw6+Q");
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: Szc({
                  messages: b,
                  status: d,
                  statusMessage: `${e} | ${b.M9(c)}`,
                  backgroundColor: f,
                  direction: a,
                  fontSize: g,
                  fontFamily: h,
                }),
              },
            ];
          },
          Vzc = function (a, b, c, d, e, f, g) {
            const h = c.yf;
            c = c.fl;
            const k = a.yr;
            a = a.et;
            b = b.border;
            const l = b.i9a,
              m = h.direction,
              n = h.fields.first()?.value;
            if (!n || n.type !== "select" || !k || !a)
              return {
                ...g6({
                  layout: "vertical",
                  direction: i6(m),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: h.minWidth,
                minHeight: h.minHeight,
              };
            const p = f6(k),
              q = f6(a);
            var r = n.options.first()?.value.label.text,
              t = (C) => C?.values().next().value,
              v =
                r?.stream.bi("font-size")["font-size"]?.values().next().value ||
                16;
            const w = t(r?.stream.bi("font-family")["font-family"]) || h.KX,
              z =
                t(r?.stream.bi("font-weight")["font-weight"]) ||
                __c.Mf.Qb["font-weight"];
            r =
              t(r?.stream.bi("font-style")["font-style"]) ||
              __c.Mf.Qb["font-style"];
            v *= Uzc;
            t = d.oAa();
            const A = d.FAa();
            return {
              minWidth: h.minWidth,
              minHeight: h.minHeight,
              ...g6({
                layout: "vertical",
                direction: i6(m),
                background: a,
                N: l,
                border: b,
                cells: [
                  h.fM
                    ? void 0
                    : Jzc({ direction: m, text: n.label, background: k }),
                  Nzc({
                    Btb: d,
                    tS: Izc(e),
                    options: n.options,
                    TH: c.TH,
                    Sz: c.Sz,
                    Zf: A.Zf,
                    PFa: n.N,
                    bq: p,
                    ct: q,
                    fontFamily: w,
                    direction: m,
                    Zaa: t,
                    Bs: n.id,
                    messages: f,
                    cra: g,
                  }),
                  ...Tzc({
                    direction: m,
                    messages: f,
                    eDb: d.qvb(n.id),
                    status: d.aZ(),
                    Zc: c.Zc,
                    backgroundColor: q,
                    fontSize: v,
                    fontFamily: w,
                    fontWeight: z,
                    fontStyle: r,
                  }),
                ].filter(pb),
              }),
              ref: g.root,
            };
          },
          Wzc = function ({
            width: a,
            height: b,
            fe: c,
            color: d,
            byb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              dra: { width: 16, height: 16 },
              fb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          Zzc = function ({ direction: a, QFa: b, ct: c, state: d }) {
            const e = Fzc("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: Xzc(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return h6(b, { direction: j6(a), color: "#00873d" });
                      case 6:
                        return h6(b, { direction: j6(a), color: "#c8001e" });
                      case 4:
                        return h6(b, { direction: j6(a), color: d6(c, Yzc) });
                      default:
                        return h6(b, { direction: j6(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: Wzc({
                        width: 18,
                        height: 18,
                        fe: 1.6,
                        byb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(pb),
            };
          },
          Xzc = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
                return { type: "color", color: b, xa: 0.74 };
              case 2:
                return { type: "color", color: b, xa: 0.88 };
              case 3:
                return { type: "color", color: b, xa: 0.74 };
              case 4:
                return { type: "color", color: b, xa: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", xa: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", xa: 0 };
              default:
                throw new E(a);
            }
          },
          $zc = function ({
            tS: a,
            direction: b,
            options: c,
            Zc: d,
            Zf: e,
            TH: f,
            Sz: g,
            PFa: h,
            ct: k,
            Zaa: l,
            cra: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: g6({
                layout: "vertical",
                direction: i6(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.data.Mja(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.data.Mja(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      N: h,
                      Zm: () => a?.mqa?.(p.id),
                      onMouseEnter: () => a?.Bla?.(p.id),
                      onMouseLeave: () => a?.Cla?.(p.id),
                      onMouseDown: () => a?.zla?.(p.id),
                      onMouseUp: () => a?.Dla?.(p.id),
                      ...Zzc({ direction: b, QFa: p.label, ct: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          aAc = function ({
            direction: a,
            text: b,
            SW: c,
            TW: d,
            tS: e,
            fontSize: f,
            fontFamily: g,
            fontWeight: h,
            fontStyle: k,
          }) {
            const l = e6.includes(c),
              { h: m, s: n, oa: p } = __c.Zl(c);
            var q = new __c.Rl(m, n, p < 10 ? p + 6 : p - 6);
            q = __c.$l(q);
            var r = new __c.Rl(m, n, p < 10 ? p + 10 : p - 10);
            r = __c.$l(r);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: Hzc({
                direction: i6(a),
                Zm: e?.submit,
                onMouseEnter: e?.iEa,
                onMouseLeave: e?.jEa,
                onMouseDown: e?.hEa,
                onMouseUp: e?.kEa,
                background: {
                  type: "color",
                  color: d === 2 ? r : d === 1 ? q : c,
                  xa: e?.submit ? (l ? 0.1 : void 0) : 0.6,
                },
                N: 24,
                padding: 12,
                content: h6(b, {
                  direction: j6(a),
                  "font-size": f,
                  "font-family": g,
                  "font-weight": h,
                  "font-style": k,
                }),
              }),
            };
          },
          bAc = function ({
            tS: a,
            direction: b,
            messages: c,
            Lx: d,
            bq: e,
            status: f,
            Zc: g,
            Zf: h,
            backgroundColor: k,
            Zaa: l,
            HU: m,
            G6: n,
            fontFamily: p,
            fontWeight: q,
            fontStyle: r,
          }) {
            if (!l || !g || !h)
              return (
                (h = e === k ? d6(e, e6) : e),
                (g =
                  g?.status === 1
                    ? g.data.IU?.type === "ANON"
                      ? c.Jp("yourNameWontBeShared") || K("Gzs/9g")
                      : c.Jp("yourNameWillBeShared") || K("WjcAyg")
                    : void 0),
                [
                  aAc({
                    direction: b,
                    text: d,
                    SW: h,
                    TW: m,
                    tS: a,
                    fontSize: n.label,
                    fontFamily: p,
                    fontWeight: q,
                    fontStyle: r,
                  }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: Szc({
                      status: f,
                      statusMessage: g,
                      messages: c,
                      direction: b,
                      backgroundColor: k,
                      fontSize: n.message,
                      fontFamily: p,
                    }),
                  },
                ]
              );
            a = d6(k, e6);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: g6({
                  layout: "vertical",
                  direction: i6(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        OF: 0,
                        fontFamily: p,
                        text: g.data.Mja(h) ? c.Q4() : c.R7(),
                        fontSize: n.label,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: j6(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        OF: 0,
                        fontFamily: p,
                        text: c.haa(),
                        fontSize: n.message,
                        xa: 0.2,
                        textAlign: "center",
                        direction: j6(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          },
          dAc = function (a, b, c, d, e, f, g, h) {
            const k = c.yf;
            c = c.fl;
            var l = a.yr;
            a = a.et;
            b = b.border;
            const m = b.i9a,
              n = k.direction;
            var p = k.fields.first()?.value;
            if (!p || p.type !== "select" || !l || !a)
              return {
                ...g6({
                  layout: "vertical",
                  direction: i6(n),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: k.minWidth,
                minHeight: k.minHeight,
              };
            const q = f6(l),
              r = f6(a),
              t = d.aZ(),
              v = c.Zc.status === 1 && c.Zc,
              w = d.oAa() && v && t === 0;
            var z = p.options.first()?.value.label.text,
              A = (P) => P?.values().next().value,
              C =
                z?.stream.bi("font-size")["font-size"]?.values().next().value ||
                16;
            const B = A(z?.stream.bi("font-family")["font-family"]) || k.KX,
              D =
                A(z?.stream.bi("font-weight")["font-weight"]) ||
                __c.Mf.Qb["font-weight"];
            z =
              A(z?.stream.bi("font-style")["font-style"]) ||
              __c.Mf.Qb["font-style"];
            A = C * cAc;
            C *= Uzc;
            d = d.FAa();
            var I = k.minWidth,
              L = k.minHeight,
              N = i6(n);
            l = k.fM
              ? void 0
              : Jzc({ direction: n, text: p.label, background: l });
            p = $zc({
              tS: Izc(e),
              direction: n,
              options: p.options,
              Zc: c.Zc,
              TH: c.TH,
              Sz: c.Sz,
              Zf: d.Zf,
              PFa: p.N,
              ct: r,
              Zaa: w,
              cra: g,
              context: h,
            });
            e = e
              ? {
                  submit: e.submit,
                  iEa: e.iEa,
                  jEa: e.jEa,
                  hEa: e.hEa,
                  kEa: e.kEa,
                }
              : void 0;
            return {
              minWidth: I,
              minHeight: L,
              ...g6({
                layout: "vertical",
                direction: N,
                background: a,
                N: m,
                border: b,
                cells: [
                  l,
                  p,
                  ...bAc({
                    tS: e,
                    direction: n,
                    messages: f,
                    Lx: k.footer.label,
                    bq: q,
                    status: t,
                    Zaa: w && h.mode !== "edit",
                    Zc: v ? v : void 0,
                    Zf: d.Zf,
                    backgroundColor: r,
                    HU: c.HU,
                    G6: { label: A, message: C },
                    fontFamily: B,
                    fontWeight: D,
                    fontStyle: z,
                  }),
                ].filter(pb),
              }),
              ref: g.root,
            };
          },
          eAc = class {
            constructor() {
              this.type = "layout";
            }
          },
          l6 = __webpack_require__(186901),
          m6 = l6.EW,
          c6 = l6.h5,
          fAc = l6.mJ,
          gAc = l6.sH,
          hAc = l6.XI;
        var iAc = class {
            static D(a) {
              __c.M(a, { QVa: m6 });
            }
            get QVa() {
              const a = [];
              for (const b of this.list.value) {
                const c = Y5(this, b);
                if (c === void 0)
                  throw new xzc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.QVa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(Y5(this, c)) : void 0
              );
              if (b != null) return Y5(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(Y5(this, c)) : void 0
              );
              if (b != null) return Y5(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(Y5(this, d)) : void 0;
              a = Z5(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return Y5(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(Y5(this, d)) : void 0;
              a = Z5(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return Y5(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(Y5(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(Y5(this, b), c))
                .map((b) => Y5(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(Y5(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(Y5(this, b)));
            }
            constructor(a, b) {
              this.dn = b;
              this.qdb = (iAc.D(this), new WeakMap());
              this.idb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          jAc = class extends iAc {
            replace(a, b) {
              a = Z5(this, a);
              b = this.list.value.replace(a, this.dn.wl(b));
              return Y5(this, b);
            }
            aI(a, b) {
              a = a != null ? Z5(this, a) : void 0;
              b = this.list.value.aI(a, this.dn.wl(b));
              return Y5(this, b);
            }
            qE(a, b) {
              a = a != null ? Z5(this, a) : void 0;
              return this.list.value
                .qE(
                  a,
                  b.map((c) => this.dn.wl(c))
                )
                .map((c) => Y5(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? Z5(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.dn.wl(b));
              return Y5(this, b);
            }
            append(a) {
              a = this.list.value.append(this.dn.wl(a));
              return Y5(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.dn.wl(a));
              return Y5(this, a);
            }
            delete(a) {
              a = Z5(this, a);
              this.list.value.delete(a);
            }
            rA(a) {
              this.list.value.rA(a ? (b) => a(Y5(this, b)) : void 0);
            }
            er(a, b) {
              a = a == null ? void 0 : Z5(this, a);
              b = Z5(this, b);
              this.list.value.er(a, b);
            }
          };
        var o6 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new $5("string", c)
                    : new a6("string", c);
                return c.value;
              };
              return {
                wl: (c) => ({ type: "string", value: c }),
                At: (c) => b(c, "toWidgetState"),
                zt: (c) => b(c, "toWidgetData"),
                gv: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new n6(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new $5("literal", e)
                      : new a6("literal", e);
                  return e.value;
                };
              return {
                wl: (e) => ({ type: "string", value: e }),
                At: (e) => d(e, "toWidgetState"),
                zt: (e) => d(e, "toWidgetData"),
                gv: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new $5("integer", c)
                    : new a6("integer", c);
                return c.value;
              };
              return {
                wl: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new kAc("integer", c);
                  return { type: "int32", value: c };
                },
                At: (c) => b(c, "toWidgetState"),
                zt: (c) => b(c, "toWidgetData"),
                gv: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new $5("double", c)
                    : new a6("double", c);
                return c.value;
              };
              return {
                wl: (c) => {
                  if (!Number.isFinite(c)) throw new kAc("double", c);
                  return { type: "double", value: c };
                },
                At: (c) => b(c, "toWidgetState"),
                zt: (c) => b(c, "toWidgetData"),
                gv: (c) => b(c, "toWidgetData"),
              };
            }
            static Yg(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new $5("boolean", c)
                    : new a6("boolean", c);
                return c.value;
              };
              return {
                wl: (c) => ({ type: "boolean", value: c }),
                At: (c) => b(c, "toWidgetState"),
                zt: (c) => b(c, "toWidgetData"),
                gv: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new $5("fill", b);
                return b.value;
              };
              return {
                wl: (b) => ({ type: "fill", value: b }),
                At: (b) => {
                  if (b?.type !== "fill") throw new a6("fill", b);
                  return b.value;
                },
                zt: a,
                gv: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new $5("stroke", b);
                return b.value;
              };
              return {
                wl: (b) => ({ type: "stroke", value: b }),
                At: (b) => {
                  if (b?.type !== "stroke") throw new a6("stroke", b);
                  return b.value;
                },
                zt: a,
                gv: a,
              };
            }
            static Ub(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new n6(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new $5("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = m6(
                      () => {
                        const m = e.value.get(h);
                        return k.zt(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.wl(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                wl: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.wl(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                At: (d) => {
                  if (d?.type !== "dict") throw new a6("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.At(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                zt: (d) => c("editable", d),
                gv: (d) => c("readonly", d),
                xb: (d) => o6.Ub({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                wl: (b) => ({ type: "list", value: b.map((c) => a.wl(c)) }),
                At: (b) => {
                  if (b?.type !== "list") throw new a6("list", b);
                  return b.value.filter(pb).map((c) => a.At(c));
                },
                zt: (b) => {
                  if (b?.type !== "list") throw new $5("list", b);
                  return new jAc(b, a);
                },
                gv: (b) => {
                  if (b?.type !== "list") throw new $5("list", b);
                  return new iAc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                wl: (b) => {
                  if (b != null) return a.wl(b);
                },
                At: (b) => {
                  if (b != null) return a.At(b);
                },
                zt: (b) => {
                  if (b != null) return a.zt(b);
                },
                gv: (b) => {
                  if (b != null) return a.gv(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new $5("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new $5("union", e);
                  return { Tea: a[f], Uea: g };
                };
              return {
                wl: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].wl(e)],
                    ]),
                  };
                },
                At: (e) => {
                  if (e?.type !== "dict") throw new a6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new a6("union", e);
                  const { Tea: h, Uea: k } = { Tea: a[f], Uea: g };
                  return h.At(k);
                },
                zt: (e) => {
                  const { Tea: f, Uea: g } = d(e);
                  return f.zt(g);
                },
                gv: (e) => {
                  const { Tea: f, Uea: g } = d(e);
                  return f.gv(g);
                },
              };
            }
          },
          n6 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          xzc = class extends n6 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          $5 = class extends n6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          a6 = class extends n6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          kAc = class extends n6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var b6 = {
            Zf: void 0,
            AJ: void 0,
            SGa: void 0,
            results: { fields: new Map() },
          },
          lAc = {
            Zc: { status: 2 },
            kC: new Map(),
            HU: 0,
            TH: void 0,
            Sz: void 0,
            dBa: !1,
            mxb: "unchecked",
            Jy: !1,
            $k: !1,
          };
        var mAc = o6.Ub({
            type: ["t", o6.literal(["text2"], "text2"), "readonly"],
            text: ["te", yzc()],
          }),
          nAc = o6.union({ text2: mAc }, (a) => a.type),
          oAc = o6.Ub({ id: ["i", o6.string("")], label: ["l", nAc] }),
          pAc = o6.list(oAc),
          qAc = o6.list(o6.string("")),
          rAc = o6.Ub({
            id: ["i", o6.string("")],
            label: ["l", nAc],
            N8: ["tl", o6.literal(["c", "u"], "c")],
            required: ["rq", o6.Yg(!1)],
            N: ["c", o6.double(0)],
          }),
          sAc = o6.Ub({ type: ["t", o6.literal(["r"], "r"), "readonly"] }),
          tAc = o6.Ub({ type: ["t", o6.literal(["p"], "p"), "readonly"] }),
          uAc = o6.Ub({ type: ["t", o6.literal(["q"], "q"), "readonly"] }),
          vAc = o6.union({ r: sAc, p: tAc, q: uAc }, (a) => a.type),
          wAc = rAc.xb({
            type: ["t", o6.literal(["select"], "select"), "readonly"],
            variant: ["v", o6.optional(vAc)],
            options: ["o", pAc],
            f_: ["m", o6.optional(o6.integer(1))],
            R4: ["co", qAc],
          }),
          xAc = o6.Ub({ type: ["t", o6.literal(["e"], "e"), "readonly"] }),
          yAc = o6.Ub({
            type: ["t", o6.literal(["f"], "f"), "readonly"],
            dN: ["n", o6.integer(1)],
          }),
          zAc = o6.union({ e: xAc, f: yAc }, (a) => a.type),
          AAc = rAc.xb({
            type: ["t", o6.literal(["text"], "text"), "readonly"],
            placeholder: ["p", o6.string("")],
            variant: ["v", zAc],
          }),
          BAc = o6.Ub({ type: ["t", o6.literal(["a"], "a"), "readonly"] }),
          CAc = o6.Ub({ type: ["t", o6.literal(["b"], "b"), "readonly"] }),
          DAc = o6.Ub({ type: ["t", o6.literal(["c"], "c"), "readonly"] }),
          EAc = o6.Ub({ type: ["t", o6.literal(["d"], "d"), "readonly"] }),
          FAc = o6.union({ a: BAc, b: CAc, c: DAc, d: EAc }, (a) => a.type),
          GAc = rAc.xb({
            type: ["t", o6.literal(["number"], "number"), "readonly"],
            variant: ["v", FAc],
            min: ["a", o6.optional(o6.double())],
            max: ["b", o6.optional(o6.double())],
          }),
          HAc = o6.union(
            { select: wAc, text: AAc, number: GAc },
            (a) => a.type
          ),
          IAc = o6.list(HAc),
          JAc = o6.Ub({ label: ["l", nAc] }),
          KAc = o6.Ub({}),
          LAc = o6.Ub({
            label: ["A", yzc()],
            N8: ["tl", o6.literal(["c", "u"])],
          }),
          MAc = o6.literal(["l", "r"], "l"),
          NAc = o6.Ub({
            minHeight: ["mh", o6.double(1)],
            minWidth: ["mw", o6.double(1)],
            type: ["t", o6.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", o6.string()],
            Yi: ["s", o6.string()],
            Dr: ["a", o6.optional(o6.string())],
            direction: ["r", MAc],
            KX: ["d", o6.string("")],
            yr: ["pf", o6.fill()],
            et: ["sf", o6.fill()],
            border: ["b", o6.stroke()],
            N: ["c", o6.double(0)],
            fM: ["hh", o6.Yg(!1)],
            eKa: ["z", o6.Yg(!0)],
            aVa: ["h", o6.optional(KAc)],
            header: ["j", o6.optional(LAc)],
            fields: ["f", IAc],
            footer: ["fo", o6.optional(JAc)],
          }),
          OAc = o6.union({ poll: NAc, quiz: NAc }, (a) => a.type);
        var Czc = Symbol("UNABLE_TO_SUBMIT");
        var PAc = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          QAc = class {
            static D(a) {
              __c.M(a, { H1: gAc.ref });
            }
            async KBa(a) {
              const b = await a;
              c6(() => {
                const c = JSON.parse(b),
                  d = new Map();
                for (const e in c) d.set(e, Object.values(c[e]));
                this.H1 = d;
              });
            }
            Jp(a) {
              return (this.H1?.get(this.document.language || "en") || [])[
                PAc[a]
              ];
            }
            Q4() {
              return this.Jp("correctLabel") || K("i3mNPA");
            }
            R7() {
              return this.Jp("incorrectLabel") || K("As1GTA");
            }
            haa() {
              return this.Jp("responseSaved") || K("xSH8Og");
            }
            M9(a) {
              const b = this.Jp("numVotes");
              return b
                ? __c.glc(b, [a], this.document.language)
                : __c.sb("6QpLYA", [a]);
            }
            Yna(a) {
              const b = this.Jp("resultsPercentage");
              return b
                ? __c.glc(b, [a], this.document.language)
                : __c.sb("sUWUOA", [a]);
            }
            offline() {
              return this.Jp("offline") || K("nFbxIQ");
            }
            loading() {
              return this.Jp("loading") || K("2Q9Q+A");
            }
            tba() {
              return this.Jp("submitting") || K("wutQEA");
            }
            constructor(a, b) {
              this.document = a;
              this.H1 = (QAc.D(this), void 0);
              this.KBa(b);
            }
          };
        var SAc = class extends QAc {
          constructor(a) {
            const b = __webpack_require__
              .me(282643)
              .then(() => __c.RAc)
              .then(({ UJ: c }) => c);
            super(a, b);
          }
        };
        var TAc = class {
          static D(a) {
            __c.M(a, { border: m6 });
          }
          get border() {
            const a = this.pA.yf;
            a.border.weight &&
              !a.border.color &&
              this.I &&
              this.I.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, i9a: a.N };
          }
          constructor(a, b) {
            this.pA = a;
            this.I = b;
            TAc.D(this);
          }
        };
        var UAc = class {
          static D(a) {
            __c.M(a, { yr: m6, et: m6, bq: m6, ct: m6 });
          }
          get yr() {
            const a = this.pA.yf.yr.color,
              b = this.pA.yf.yr.Qa;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Qa: b.ref };
          }
          get et() {
            const a = this.pA.yf.et.color,
              b = this.pA.yf.et.Qa;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Qa: b.ref };
          }
          get bq() {
            if (!this.yr) return "#000000";
            switch (this.yr.type) {
              case "color":
                return this.yr.color;
              case "gradient":
                return this.yr.Qa.Bg[0].color;
              default:
                throw new E(this.yr);
            }
          }
          get ct() {
            if (!this.et) return "#000000";
            switch (this.et.type) {
              case "color":
                return this.et.color;
              case "gradient":
                return this.et.Qa.Bg[0].color;
              default:
                throw new E(this.et);
            }
          }
          constructor(a) {
            this.pA = a;
            UAc.D(this);
          }
        };
        var e6 = ["#000000", "#ffffff"];
        var Lzc = 9 * __c.bT,
          Yzc = ["#cccccc", "#333333"],
          Ozc = ["#00d200", "#00ed00"],
          Pzc = ["#ffae00", "#ffc654"],
          Qzc = ["#545454", "#c8c8c8"],
          Rzc = ["#e53935", "#ef5350"],
          cAc = (14 * __c.bT) / 16,
          Uzc = (9 * __c.bT) / 16;
        var k6 = (a, b, c, d, e, f) =>
          __c.Lk.Db()
            .attrs({
              "font-family": f,
              "font-size": e,
              leading: void 0,
              "text-align": "center",
              direction: j6(b),
              color: c,
            })
            .tb("\u25cf ")
            .attrs({
              "font-family": f,
              "font-size": e,
              color: d,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .tb(a)
            .gr()
            .build();
        var VAc;
        VAc = ({ KCb: a, Yob: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (
            (a.status === 1 && b.status === 1 && a.data.Wva !== b.data.Wva) || c
          );
        };
        __c.LGa = {
          vob: function (a, b, c, d, e, f, g, h, k) {
            g.Vf("forms");
            const { Ctb: l } = d ?? {},
              m = h.fw("ui.rendering.form"),
              n = { root: new eAc(), option: new eAc() },
              p = new SAc(b);
            return {
              FBa: lAc,
              dn: OAc,
              PEa: ({ pA: q }) => {
                if (l && a) {
                  var r,
                    t = fAc(
                      () => q.yf.id,
                      () => {
                        const w = q.yf.type,
                          z = l.get({ IH: q.yf.id, cg: a, n6: c });
                        r?.unsubscribe();
                        w === "poll" &&
                          (r = z
                            .Pzb({ mvb: () => q.yf.Yi })
                            .subscribe(({ results: A, Yi: C }) => {
                              c6(() => {
                                const B = new Map(q.fl.kC);
                                B.set(C, { ...(B.get(C) ?? b6), results: A });
                                q.On({ kC: B });
                              });
                            }));
                        z.getSettings({ f0b: () => q.yf.Dr }).subscribe((A) => {
                          const C = q.fl.Zc;
                          let B = A;
                          if (
                            A.status === 1 &&
                            !q.yf.Dr &&
                            q.yf.type === "quiz"
                          ) {
                            const D = q.yf.fields.first()?.value,
                              I = D?.type === "select" ? D.R4.toArray() : [];
                            B = {
                              status: 1,
                              data: {
                                wD: new Map(
                                  q.yf.fields
                                    .filter(
                                      ({ value: L }) => L.type === "select"
                                    )
                                    .map(({ value: L }) => [
                                      L.id,
                                      L.R4.toArray(),
                                    ])
                                ),
                                Mja: (L) => I.includes(L),
                                Wva: A.data.Wva,
                                IU: A.data.IU,
                                bIb: !1,
                              },
                            };
                          }
                          c6(() => {
                            q.On({ Zc: B });
                          });
                          VAc({ KCb: B, Yob: C }) &&
                            z.Usb({ Yi: q.yf.Yi, Dr: q.yf.Dr }).then(
                              hAc((D) => {
                                const I = q.yf.Yi;
                                if (D.ok) {
                                  var L = new Map(q.fl.kC);
                                  if (D.value) {
                                    D = D.value;
                                    const N =
                                      q.yf.fields.first()?.value.id ?? "";
                                    D = D.Ita.get(N);
                                    D =
                                      D?.type === 0 && D.I0.length >= 1
                                        ? D.I0[0]
                                        : void 0;
                                    L.set(I, {
                                      ...(L.get(I) ?? b6),
                                      Zf: D,
                                      AJ: D,
                                    });
                                  } else
                                    L.set(I, {
                                      ...(L.get(I) ?? b6),
                                      Zf: void 0,
                                      AJ: void 0,
                                    });
                                  q.On({ kC: L, Sz: void 0 });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = fAc(
                      () => k?.status === 2,
                      hAc((w) => {
                        q.On({ $k: w });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r?.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                const t = zzc(q);
                if (l && a) {
                  var v = l.get({ IH: q.yf.id, cg: a, n6: c });
                  v = Dzc(q, t, v, e, f, m);
                }
                a: {
                  const w = q.yf,
                    z = new UAc(q),
                    A = new TAc(q);
                  switch (w.type) {
                    case "poll":
                      q = Vzc(z, A, q, t, v, p, n);
                      break a;
                    case "quiz":
                      q = dAc(z, A, q, t, v, p, n, r);
                      break a;
                    default:
                      throw new E(w.type);
                  }
                }
                return q;
              },
              cra: n,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/f9bf272a80626122.js.map
