(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var E = __c.E;
        var x = __c.x;
        var bEc = function (a, b) {
            var c = __c.Fi(b);
            a = __c.um(a.Sc, b);
            b = c.ua;
            const d = c.br;
            c = c.br;
            try {
              a.Td(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          dEc = function (a, b, c, d) {
            c = new cEc(c, d);
            x(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            x(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${a?.type}`
            );
            c.jra(a, b);
          },
          fEc = function (a) {
            return {
              ...__c.XCb,
              ...a7,
              id: __c.xD.generate(),
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.dra.width,
                height: a.dra.height,
              },
              fb: a.fb.map(eEc),
            };
          },
          gEc = function (a) {
            switch (a.OF) {
              case 0:
                var b = __c.Lk.Db().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.ye("color", a.color);
                b = b
                  .tb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                return {
                  ...__c.ZG,
                  ...b7,
                  ...a7,
                  id: __c.xD.generate(),
                  xa: a.xa ?? 0,
                  text: b,
                  Mf: 2,
                };
              case 1:
                return (
                  (b = a.text),
                  {
                    ...__c.ZG,
                    ...b7,
                    ...a7,
                    id: __c.xD.generate(),
                    text: b,
                    Mf: 2,
                  }
                );
              default:
                throw new E(a);
            }
          },
          lEc = function ({ content: a, fill: b, border: c, N: d }) {
            b = { ...__c.ICb, fill: hEc(b), border: iEc(c), N: jEc(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: fEc(a) };
              case "text":
                return { ...b, element: gEc(a) };
              case "layout":
                return { ...b, element: kEc(a) };
              default:
                throw new E(a);
            }
          },
          kEc = function ({
            cells: a,
            border: b,
            fill: c,
            N: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.JCb,
              ...b7,
              ...a7,
              id: __c.xD.generate(),
              J: b7.width,
              P: b7.height,
              fill: hEc(c),
              border: iEc(b),
              direction: 1,
              N: jEc(d),
              cells: new Map(a.map((k) => [k.id, lEc(k)])),
              behavior: {
                rules: [
                  {
                    Lh: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g ?? 0,
                      rowGap: h ?? 0,
                      Zh: mEc(a),
                    },
                  },
                ],
              },
              Hc: void 0,
            };
          },
          mEc = function (a) {
            return new Map(a.map((b) => [b.id, nEc(b)]));
          },
          nEc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.Uja,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.XS,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          iEc = function (a) {
            const b = a?.color ?? "#000000";
            return {
              ...__c.Lz,
              all: a
                ? { ...__c.MS, weight: a.weight ?? 1, color: b, qe: !0 }
                : void 0,
            };
          },
          jEc = function (a) {
            return {
              ...__c.WS,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          eEc = function (a) {
            return {
              ...__c.YCb,
              ...a,
              fill: hEc(a.fill),
              stroke: oEc(a.stroke),
            };
          },
          oEc = function (a) {
            return a ? { ...__c.MS, color: a.color, weight: a.weight } : void 0;
          },
          hEc = function (a) {
            const b = { ...__c.zD, xa: a?.xa ?? 0 };
            switch (a?.type) {
              case "color":
                return { ...b, color: a.color };
              case "gradient":
                return { ...b, Qa: a.Qa };
              case void 0:
                return b;
              default:
                throw new E(a);
            }
          },
          vEc = function (a, b) {
            const c = new Map(b.cells.map((d) => [d.id, d]));
            pEc(
              a.cells,
              c,
              (d, e) => {
                let f = !1;
                qEc(d.element, e.content, () => {
                  a.cells.delete(e.id);
                  a.cells.set(e.id, lEc(e));
                  f = !0;
                });
                f ||
                  (rEc(d.fill, e.fill), sEc(d.border, e.border), tEc(d.N, e.N));
              },
              (d) => lEc(d)
            );
            uEc(a.behavior, b, c);
            rEc(a.fill, b.fill);
            tEc(a.N, b.N);
            sEc(a.border, b.border);
            a.xa = b.xa ?? 0;
          },
          uEc = function (a, b, c) {
            wEc(
              a.rules,
              [b],
              (d) => {
                xEc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                xEc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                d.grid.columnGap = b.columnGap ?? 0;
                d.grid.rowGap = b.rowGap ?? 0;
                pEc(
                  d.grid.Zh,
                  c,
                  (e, f) => {
                    const g = f.placement.padding,
                      h = f.placement.gridColumnEnd,
                      k = f.placement.gridRowStart,
                      l = f.placement.gridRowEnd,
                      m = f.placement.alignSelf;
                    e.gridColumnStart = f.placement.gridColumnStart;
                    e.gridColumnEnd = h;
                    e.gridRowStart = k;
                    e.gridRowEnd = l;
                    typeof g === "number" && e.padding.all !== g
                      ? (e.padding.all = g)
                      : typeof g !== "number" &&
                        ((e.padding.qa = g?.qa),
                        (e.padding.Ea = g?.Ea),
                        (e.padding.pa = g?.pa),
                        (e.padding.Na = g?.Na));
                    e.alignSelf = m;
                  },
                  (e) => nEc(e)
                );
              },
              (d) => ({
                Lh: void 0,
                grid: {
                  gridTemplateColumns: b.gridTemplateColumns,
                  gridTemplateRows: b.gridTemplateRows,
                  columnGap: b.columnGap ?? 0,
                  rowGap: b.rowGap ?? 0,
                  Zh: mEc(d.cells),
                },
              })
            );
          },
          yEc = function (a, b) {
            wEc(
              a.fb,
              b.fb,
              (e, f) => {
                e.d = f.d;
                rEc(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(oEc(f.stroke));
              },
              (e) => eEc(e)
            );
            const { viewBox: c, width: d } = fEc(b);
            a.width = d;
            __c.Fi(a.viewBox).equals(__c.Fi(c)) || (a.viewBox = c);
          },
          qEc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? yEc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Lk.domain.oc(__c.Lk.snapshot(a.text), gEc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? vEc(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          pEc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          wEc = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          rEc = function (a, b) {
            switch (b?.type) {
              case "color":
                a.color = b.color;
                a.Qa.set(void 0);
                a.xa = b.xa ?? 0;
                break;
              case "gradient":
                if (a.Qa.ref && __c.Pfb.domain.oc(a.Qa.ref, b.Qa)) break;
                a.color = void 0;
                a.Qa.set(b.Qa);
                a.xa = b.xa ?? 0;
                break;
              default:
                (a.color = void 0), a.Qa.set(void 0);
            }
          },
          tEc = function (a, b) {
            b = jEc(b);
            a.all = b.all;
            a.dD = b.dD;
            a.bD = b.bD;
            a.cD = b.cD;
            a.aD = b.aD;
          },
          sEc = function (a, b) {
            b = iEc(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.Mz.domain.oc(__c.Mz.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          xEc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          AEc = function (a, b, c, d) {
            let e = a.I8a.get(b);
            if (e) return e;
            e = {
              pA: new zEc(c.dn, b, d, c.FBa),
              VQa: void 0,
              S1a: void 0,
              l4a: __c.yX.mode,
            };
            a.I8a.set(b, e);
            return e;
          },
          CEc = function (a, b, c, d, e) {
            e = AEc(a, c, b, e);
            const f = e.pA,
              g = e.S1a,
              h = e.VQa,
              k = e.l4a;
            c = __c.OR.snapshot(c);
            const l = a.AC.LAa?.(d) || __c.yX;
            (f.fl === g && BEc.structural(c, h) && l.mode === k) ||
              ((e.VQa = c),
              (e.S1a = f.fl),
              (e.l4a = l.mode),
              (b = b.render(f, l)),
              a.oCb.update(d, b),
              dEc(
                d,
                b,
                (m, n) => a.iV.XBa.set(m, n),
                (m, n, p) => a.iV.refs.set(m, { ref: n, key: p })
              ));
          },
          FEc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.kDb());
            c.push(
              DEc(
                () => {
                  a: {
                    var e = new EEc();
                    for (const f of b)
                      if ((e.lV(f), e.wza)) {
                        e = e.wza;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Cb.isLoaded(e) || a.ZCa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) x(f.type === "layout"), bEc(a.lm, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          GEc = function (a, b) {
            return {
              Wx: ({ Ld: c }) => {
                const { pA: d } = AEc(a.renderer, c, b, a.LM),
                  e = __c.Dxb.create([]),
                  f = [];
                f.push(FEc(a.otb, e));
                f.push(
                  DEc(
                    () => [a.AC.LAa?.(e), __c.OR.snapshot(c), d.fl],
                    () => {
                      CEc(a.renderer, b, c, e, a.LM);
                    },
                    { fireImmediately: !0, equals: BEc.structural }
                  )
                );
                const g = b.PEa?.({ pA: d });
                g && f.push(g);
                return {
                  Ma: e,
                  Ym: () => {
                    f.forEach((h) => h());
                  },
                };
              },
            };
          },
          c7 = __webpack_require__(186901),
          HEc = c7.EW,
          IEc = c7.h5,
          BEc = c7.m3,
          DEc = c7.mJ,
          d7 = c7.sH;
        var JEc = class {
          static D(a) {
            __c.M(a, { TEb: d7.ref, Oub: d7.ref });
          }
          constructor() {
            this.LAa = (JEc.D(this), void 0);
          }
        };
        var KEc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          zEc = class {
            static D(a) {
              __c.M(a, { yf: HEc });
            }
            get T1a() {
              var a = this.LM,
                b = this.Ld,
                c = this.FBa;
              let d = a.sources.get(b);
              d || ((d = d7.box(c)), a.sources.set(b, d));
              return d;
            }
            get fl() {
              return this.T1a.get();
            }
            get yf() {
              return this.dn.gv({ type: "dict", value: this.Ld });
            }
            On(a) {
              this.T1a.set(
                a instanceof Function
                  ? { ...this.fl, ...a() }
                  : { ...this.fl, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.dn = a;
              this.Ld = b;
              this.LM = c;
              this.FBa = d;
              zEc.D(this);
            }
          };
        var cEc = class {
          Qca(a, b) {
            this.w8a(a, b);
            b.ref && this.uHa(a, b.ref, b.key);
          }
          A2(a, b) {
            b.ref && this.uHa(a.text, b.ref, b.key);
          }
          xNa(a, b) {
            switch (b.content.type) {
              case "shape":
                x(a.element.type === "shape");
                this.Qca(a.element, b.content);
                break;
              case "text":
                x(a.element.type === "text");
                this.A2(a.element, b.content);
                break;
              case "layout":
                x(a.element.type === "layout");
                this.jra(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          jra(a, b) {
            this.w8a(a, b);
            b.ref && this.uHa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                x(!!d && !!a),
                this.xNa(d, a);
          }
          constructor(a, b) {
            this.w8a = a;
            this.uHa = b;
          }
        };
        var a7 = { locked: !0, Cg: __c.GCb, kg: !0 },
          b7 = { top: 0, left: 0, width: 1, height: 1 };
        var LEc = class {
          constructor(a) {
            this.lm = a;
            this.update = (b, c) => {
              wEc(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      vEc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...kEc(d),
                        ...a7,
                        width: d.minWidth,
                        height: d.minHeight,
                        J: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                x(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.J = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  bEc(this.lm, d);
            };
          }
        };
        var MEc = class {
          constructor(a, b, c) {
            this.oCb = a;
            this.iV = b;
            this.AC = c;
            this.I8a = new WeakMap();
          }
        };
        var NEc = class {
            static D(a) {
              __c.M(a, { ZCa: d7.shallow });
            }
            constructor(a, b) {
              this.Cb = a;
              this.lm = b;
              this.ZCa = (NEc.D(this), new Set());
              this.Kza = new Set();
              this.kDb = () => {
                this.cia ||
                  (this.cia = __c.tsa(this.Cb).subscribe((d) => {
                    IEc(() => {
                      this.ZCa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Kza.add(c);
                return () => {
                  this.Kza.delete(c);
                  this.Kza.size <= 0 &&
                    this.cia &&
                    (this.cia.unsubscribe(), (this.cia = void 0));
                };
              };
            }
          },
          EEc = class extends __c.ss {
            lV(a, b) {
              this.wza || super.lV(a, b);
            }
            A2(a) {
              this.wza =
                (a = a.text
                  .bi("font-family")
                  ["font-family"].values()
                  .next().value) && __c.hr(a).id;
            }
          };
        var OEc = !1,
          PEc = class {
            static D(a) {
              __c.M(a, { Mv: d7.shallow });
            }
            register(a, b) {
              this.Mv.has(a) ||
                (this.Mv.set(a, b),
                this.Dga || OEc || (__c.PR.set(a, GEc(this, b)), (OEc = !0)));
            }
            get(a) {
              return this.Mv.get(a);
            }
            constructor(a, b, c, d, e, f = __c.tc("f576b13d", !1)) {
              this.renderer = a;
              this.LM = b;
              this.AC = c;
              this.Cb = d;
              this.lm = e;
              this.Dga = f;
              this.Mv = (PEc.D(this), new Map());
              this.otb = new NEc(this.Cb, this.lm);
            }
          };
        var QEc = class {
            constructor() {
              this.XBa = new __c.kA();
              this.refs = new __c.kA();
            }
          },
          REc = class {
            getContext(a) {
              return this.iV.refs.get(a);
            }
            QR(a) {
              return this.iV.XBa.get(a);
            }
            constructor(a, b, c) {
              this.iV = a;
              this.LM = b;
              this.renderer = c;
            }
          };
        __c.ySa = {
          Cxb: function (a) {
            const b = new JEc(),
              c = new QEc(),
              d = new MEc(new LEc(a.lm), c, b),
              e = new KEc();
            a = new PEc(d, e, b, a.Cb, a.lm, a.Dga);
            return { AC: b, adc: new REc(c, e, d), Sca: a, iV: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/367a4911a8188f0b.js.map
