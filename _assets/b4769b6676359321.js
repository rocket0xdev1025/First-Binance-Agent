(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [43432],
  {
    /***/ 666647: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(738123);
      __web_req__(488522);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var g1 = __c.g1;
        var M = __c.M;
        var yJc = async function (a, b) {
            return a.rra(b, async () => {
              if (a.rWa == null)
                throw Error("Scene document resources are not supported");
              const c = await a.rWa.Sq({ id: b, version: 1 }, void 0),
                d = { id: c.id, files: { lZa: c.content.url, K7a: c.Rc?.url } };
              (0, __c.Zb)(() => {
                a.scenes.set(d.id, d);
              });
              return d;
            });
          },
          BJc = function (a, b) {
            if (a.zj.agb && b instanceof zJc) return new AJc(a.zj.agb, b);
            throw Error("GltfResource needs GltfResource");
          },
          CJc = function (a, b, c) {
            let d = b - 1,
              e = 0,
              f = c - 1,
              g = 0;
            for (let h = 0; h < c; h++)
              for (let k = 0; k < b; k++)
                a[3 + (h * b + k) * 4] !== 0 &&
                  ((d = Math.min(d, k)),
                  (e = Math.max(e, k)),
                  (f = Math.min(f, h)),
                  (g = Math.max(g, h)));
            a = g - f + 1;
            return { left: d, top: c - (f + a), width: e - d + 1, height: a };
          },
          DJc = function (a, b) {
            a.store.container = b;
            b.contains(a.zj.canvas) || b.appendChild(a.zj.canvas);
          },
          EJc = function (a, b) {
            const c = b.getContext("2d");
            if (!c) throw Error("Unable to create 2d context");
            a.store.ZL && a.render(!1);
            b.width = 2e3;
            b.height = 2e3;
            c.drawImage(a.store.ZL ? a.zj.canvas : a.store.Bha, 0, 0, 2e3, 2e3);
          },
          FJc = function (a) {
            if (a.store.xe) {
              const b = requestAnimationFrame(() => FJc(a));
              a.store.fea = b;
              a.render(a.store.SWa);
            }
          },
          IJc = function ({ Nia: a, zj: b }) {
            const c = new GJc();
            return new HJc(c, a, b);
          },
          JJc = function (a) {
            const b = a.Nk;
            a = __c.HN.create({
              ...__c.zD,
              image: {
                ...__c.rCb,
                media: { id: a.NE, version: 1 },
                ob: void 0,
              },
            });
            return W7(b, { fill: a });
          },
          KJc = function (a) {
            const b = __c.y(a.store.container, "Missing container"),
              c = a.mh.FY;
            b.style.width = 2e3 * a.mh.ba + "px";
            b.style.height = 2e3 * a.mh.ba + "px";
            b.style.left = `-${c.left * a.mh.ba}px`;
            b.style.top = `-${c.top * a.mh.ba}px`;
            b.style.position = "absolute";
            EJc(a.mh, a.store.ET);
          },
          MJc = function (a) {
            var b = __c.y(a.store.container, "Missing container");
            b.style.position = "init";
            b.style.left = "0";
            b.style.top = "0";
            b.style.width = "100%";
            b.style.height = "100%";
            b = a.mh;
            a = a.store.ET;
            if (b.store.isInitialized) {
              var c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              var d = b.via();
              a.width = 1 * d.width;
              a.height = 1 * d.height;
              a = LJc(b.zj);
              X7(b.zj, 2e3, 2e3);
              b.render(!1);
              c.drawImage(
                b.zj.canvas,
                d.left * 1,
                d.top * 1,
                d.width * 1,
                d.height * 1,
                0,
                0,
                d.width * 1,
                d.height * 1
              );
              X7(b.zj, a.width, a.height);
            } else {
              c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              d = b.store.Iua;
              a.width = d.width;
              a.height = d.height;
              c.drawImage(
                b.store.Bha,
                d.left,
                d.top,
                d.width,
                d.height,
                0,
                0,
                d.width,
                d.height
              );
            }
          },
          UJc = function ({ iq: a, hz: b, zj: c, taa: d }) {
            const e = new NJc(),
              f = new OJc(e, a, b, c, d),
              g = PJc({ local: a.ap.local }),
              h = QJc({ local: a.ap.local }),
              k = () => W7("div", { children: "Error" });
            return RJc(() => {
              Y7(() => {
                f.initialize();
                return () => {
                  f.destroy();
                };
              }, []);
              switch (f.Uwa) {
                case 1:
                  return W7(h, {});
                case 3:
                  return W7(SJc, { lS: f.lS || "" });
                case 0:
                  return W7(g, {});
                case 2:
                  return W7(JJc, { Nk: a.Nk, NE: f.cba || "" });
                case 4:
                  return W7(TJc, {
                    ixb: f.lS,
                    selected: f.Qyb,
                    cba: f.cba,
                    Nk: a.Nk,
                  });
                case 5:
                  return W7(k, {});
                default:
                  throw new __c.E(f.Uwa);
              }
            });
          },
          XJc = function (a) {
            return RJc(({ data: b, Ve: { Nk: c }, Ji: { De: d } }) => {
              const [e, f] = VJc(),
                [g, h] = VJc();
              Y7(() => {
                const k = new WJc(b, d, c),
                  l = UJc({ iq: k, ...a });
                f(l);
                h(k);
              }, []);
              Y7(() => {
                g &&
                  Z7(() => {
                    g.ap = b;
                    g.De = d;
                    g.Nk = c;
                  });
              }, [g, b, d, c]);
              return e ? W7(e, {}) : W7("span", {});
            });
          },
          YJc = function (a, b) {
            return (typeof b === "function" ? b() : b)
              .catch((c) => {
                a.setStatus("error");
                throw c;
              })
              .finally(() => {
                a.end();
              });
          },
          ZJc = function (a, b, c, d) {
            a = a.startSpan(b, d);
            return YJc(a, c);
          },
          X7 = function (a, b, c) {
            a.xK.width = b;
            a.xK.height = c;
          },
          $Jc = function (a, b) {
            a.T$ = a.T$.filter((c) => c !== b);
          },
          LJc = function (a) {
            return { width: a.xK.width, height: a.xK.height };
          },
          dKc = function (a, b = 0) {
            if (b > 5) throw Error("Unable to recreate context");
            const c = aKc(a);
            a.kW = new bKc(c);
            a.kW.onContextLost = () => {
              const d = a.xK;
              a.xK = cKc();
              dKc(a, b + 1);
              a.T$.forEach((e) => e(d));
            };
            return a.kW;
          },
          gKc = async function (a) {
            await eKc({ path: fKc });
            try {
              a.kW = dKc(a);
            } catch (b) {
              throw (
                (a.I.Nb("Failed to create WebGL renderer"),
                Error("Failed to create WebGL renderer"))
              );
            }
          },
          aKc = function (a) {
            const b = a.xK.getContext("webgl");
            if (b != null) return b;
            a.I.Nb("Failed to get WebGL context for scene widget");
            throw Error("Failed to get WebGL context for scene widget");
          },
          cKc = function () {
            const a = document.createElement("canvas");
            a.width = 1e3;
            a.height = 1e3;
            a.style.width = "100%";
            a.style.visibility = "visible";
            return a;
          };
        __c.cr.prototype.rra = __c.ea(8, function (a, b) {
          const c = this.Gi.get(__c.br(a));
          if (c != null && c.V8a != null) {
            const e = this.PW.get(c);
            if (e != null) return Promise.resolve({ ...c, element: e });
          }
          const d = __c.br(a);
          if ((a = this.pending.get(d))) return a;
          c != null &&
            c.V8a != null &&
            (b = async () => {
              const e = await __c.C_(this, c);
              return { ...c, element: e };
            });
          b = b().finally(() => this.pending.delete(d));
          this.pending.set(d, b);
          return b;
        });
        __c.us.prototype.rra = __c.ea(7, function (a, b) {
          var c = this.scenes.get(a);
          if (c) return Promise.resolve(c);
          if ((c = this.pending.get(a))) return c;
          b = b().finally(() => this.pending.delete(a));
          this.pending.set(a, b);
          return b;
        });
        var $7 = __webpack_require__(946863),
          eKc = $7.Ay,
          zJc = $7.IB,
          bKc = $7.ly,
          AJc = $7.tV;
        var a8 = __webpack_require__(186901),
          hKc = a8.EW,
          Z7 = a8.h5,
          b8 = a8.mJ,
          c8 = a8.sH,
          d8 = a8.XI;
        var iKc = __webpack_require__(405148),
          W7 = iKc.jsx,
          jKc = iKc.jsxs;
        var kKc = __webpack_require__(227200),
          Y7 = kKc.useEffect,
          lKc = kKc.useRef,
          VJc = kKc.useState;
        var RJc = __webpack_require__(371201).PA;
        var fKc = __webpack_require__(107745).A;
        var mKc = class {
          constructor(a) {
            this.zj = a;
          }
        };
        var nKc = class {
          static D(a) {
            M(a, {
              selected: c8.ref,
              kfb: c8.ref,
              fja: c8.ref,
              I0a: c8.ref,
              Cja: c8.ref,
            });
          }
          constructor(a) {
            this.mh = a;
            this.selected = (nKc.D(this), !1);
            this.I0a = this.fja = this.kfb = !1;
            this.Cja = 0;
          }
        };
        var HJc = class {
          static D(a) {
            M(a, {
              initialize: d8,
              jsb: d8,
              EKa: d8,
              Cab: d8,
              dispose: d8,
              via: d8,
              Xia: d8,
              Tbb: d8,
            });
          }
          async initialize(a) {
            this.store.isInitialized ||
              ((a = new zJc(a, {
                environment_sdr:
                  "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                environment_gain:
                  "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png",
              })),
              (this.store.Oia = a),
              await a.load(),
              a === this.store.Oia &&
                ((this.store.ZL = BJc(this.Nia, a)),
                this.zj.T$.push(this.Xia),
                Z7(() => {
                  this.store.isInitialized = !0;
                })));
          }
          jsb(a, b = !0) {
            X7(this.zj, 2e3, 2e3);
            this.store.FY = this.via();
            this.store.ba = a;
            this.store.SWa = b;
            this.Tbb();
          }
          get FY() {
            return this.store.FY;
          }
          EKa() {
            this.store.xe = !1;
            this.store.fea != null &&
              (cancelAnimationFrame(this.store.fea), (this.store.fea = void 0));
          }
          Cab(a) {
            this.store.OQ = a;
          }
          async dispose() {
            this.EKa();
            this.isInitialized &&
              ((this.store.Iua = this.via()), EJc(this, this.store.Bha));
            this.store.ZL?.dispose();
            this.store.ZL = void 0;
            this.store.isInitialized = !1;
            $Jc(this.zj, this.Xia);
            const a = this.store.Oia;
            this.store.Oia = void 0;
            await a?.load();
            a?.dispose();
          }
          via() {
            if (this.store.Eea && this.store.OQ === this.store.Eea?.uGb)
              return this.store.Eea.ja;
            var a = LJc(this.zj);
            X7(this.zj, 2e3, 2e3);
            this.render(!1);
            const b = this.zj.getImageData();
            X7(this.zj, a.width, a.height);
            a = this.dub(b.data, b.width, b.height);
            this.store.Eea = { uGb: this.store.OQ, ja: a };
            return a;
          }
          get isInitialized() {
            return this.store.isInitialized;
          }
          get xe() {
            return this.store.xe;
          }
          get ba() {
            return this.store.ba;
          }
          Tbb() {
            this.EKa();
            this.store.xe = !0;
            FJc(this);
          }
          render(a) {
            this.store.ZL?.render({
              distance: 1,
              rotationPhi: this.store.OQ.rotation.x,
              rotationTheta: this.store.OQ.rotation.y,
              enableGrid: a,
            });
          }
          constructor(a, b, c, d = CJc) {
            this.store = a;
            this.Nia = b;
            this.zj = c;
            this.dub = d;
            this.Xia =
              (HJc.D(this),
              (e) => {
                Z7(() => {
                  const f = this.store.Oia,
                    g = this.store.container;
                  g &&
                    this.store.isInitialized &&
                    f &&
                    (g.contains(e) && g.removeChild(e),
                    DJc(this, g),
                    this.store.ZL?.dispose(),
                    (this.store.ZL = void 0),
                    (this.store.ZL = BJc(this.Nia, f)),
                    this.zj.T$.push(this.Xia),
                    (this.store.isInitialized = !0));
                });
              });
          }
        };
        var GJc = class {
          static D(a) {
            M(a, {
              xe: c8.ref,
              OQ: c8.ref,
              fea: c8.ref,
              WKb: c8.ref,
              Bha: c8.ref,
              Iua: c8.ref,
              Eea: c8.ref,
              isInitialized: c8.ref,
              ba: c8.ref,
              FY: c8.ref,
            });
          }
          constructor() {
            this.container = (GJc.D(this), void 0);
            this.SWa = this.xe = !1;
            this.OQ = { rotation: { x: 0, y: 0, z: 0 } };
            this.WKb = document.createElement("canvas");
            this.Bha = document.createElement("canvas");
            this.Iua = { left: 0, top: 0, width: 1, height: 1 };
            this.isInitialized = !1;
            this.ba = 1;
            this.FY = { left: 0, top: 0, width: 1, height: 1 };
          }
        };
        var SJc = ({ lS: a }) =>
          W7("img", {
            src: a,
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          });
        var oKc = ({ vyb: a }) =>
            jKc("div", {
              className: "Wfem7A",
              children: [
                W7("div", { className: "CSoSRg" }),
                W7("div", {
                  className: "__J59g",
                  style: {
                    width: a ? "300%" : "init",
                    height: a ? "init" : "300%",
                    aspectRatio: "1",
                  },
                  children: W7("div", { className: "tEhdig" }),
                }),
              ],
            }),
          TJc = ({ selected: a, ixb: b, cba: c, Nk: d }) => {
            const e = lKc(null),
              [f, g] = VJc(!1);
            Y7(() => {
              e.current && g(e.current.clientWidth >= e.current.clientHeight);
            }, [e]);
            return W7("div", {
              ref: e,
              className: "uDEnGQ",
              children:
                a && (b || c)
                  ? jKc("div", {
                      className: "E8BDLQ",
                      children: [
                        W7("div", {
                          className: "II7r4Q",
                          children: c
                            ? W7(JJc, { Nk: d, NE: c || "" })
                            : W7(SJc, { lS: b || "" }),
                        }),
                        W7(oKc, { vyb: f }),
                      ],
                    })
                  : W7("div", { className: "_4Wsohg" }),
            });
          };
        var pKc = ({ yDb: a, xDb: b }) => {
          const c = lKc(null);
          Y7(() => {
            const d = c.current;
            c.current && a(c.current);
            return () => {
              d && b();
            };
          }, [c, a, b]);
          return W7("div", {
            ref: c,
            style: { display: "block", position: "absolute" },
          });
        };
        var qKc = class {
          get mh() {
            return this.local.mh;
          }
          constructor(a) {
            this.local = a;
            this.Gvb = (b) => {
              const c = this.mh.FY;
              b.style.width = 2e3 * this.mh.ba + "px";
              b.style.height = 2e3 * this.mh.ba + "px";
              b.style.left = `-${c.left * this.mh.ba}px`;
              b.style.top = `-${c.top * this.mh.ba}px`;
              DJc(this.mh, b);
            };
            this.Fvb = () => {
              var b = this.mh;
              b.store.container?.removeChild(b.zj.canvas);
              b.store.container = void 0;
            };
          }
        };
        var QJc = ({ local: a }) => {
          const b = new qKc(a);
          return () => W7(pKc, { yDb: b.Gvb, xDb: b.Fvb });
        };
        var rKc = ({ ET: a, ZDb: b, onDispose: c }) => {
          const d = lKc(null);
          Y7(() => {
            d.current && b(d.current);
            return () => c();
          }, [d, b, c]);
          Y7(() => {
            d.current &&
              ((a.style.width = "100%"),
              (a.style.height = "100%"),
              d.current.appendChild(a));
          }, [d, a]);
          return W7("div", {
            ref: d,
            style: { width: "100%", height: "100%" },
          });
        };
        var sKc = class {
          static D(a) {
            M(a, { initialize: d8.bound, dispose: d8.bound });
          }
          initialize(a) {
            this.store.container = a;
            this.store.hWa = b8(
              () => [this.mh.store.OQ, this.mh.xe],
              this.Kvb,
              { fireImmediately: !1 }
            );
            this.store.fWa = b8(() => this.local.fja, this.Hvb, {
              fireImmediately: !0,
            });
          }
          dispose() {
            this.store.hWa?.();
            this.store.hWa = void 0;
            this.store.fWa?.();
            this.store.fWa = void 0;
          }
          get ET() {
            return this.store.ET;
          }
          get mh() {
            return this.local.mh;
          }
          constructor(a, b) {
            this.store = a;
            this.local = b;
            this.Kvb =
              (sKc.D(this),
              () => {
                this.mh.xe || (this.local.fja ? KJc(this) : MJc(this));
              });
            this.Hvb = () => {
              this.local.fja ? KJc(this) : MJc(this);
            };
          }
        };
        var tKc = class {
          constructor() {
            this.ET = document.createElement("canvas");
          }
        };
        var PJc = ({ local: a }) => {
          const b = new tKc(),
            c = new sKc(b, a);
          return () =>
            W7(rKc, { ZDb: c.initialize, onDispose: c.dispose, ET: c.ET });
        };
        var OJc = class {
          static D(a) {
            M(a, {
              initialize: d8,
              destroy: d8,
              Uwa: hKc,
              lS: hKc,
              di: hKc,
              BZa: d8,
            });
          }
          async initialize() {
            const a = this.taa.startSpan("page_navigation");
            await YJc(a, async () => {
              this.XA && this.iq.ap.local.Cja++;
              const b = yJc(this.hz, this.iq.ap.G.scene.id),
                c = await ZJc(this.taa, "resolve_scene", b, a);
              Z7(() => {
                this.store.scene = c;
              });
              this.XA &&
                (await this.zj.hQb,
                await ZJc(
                  this.taa,
                  "load_resource",
                  this.mh.initialize(c.files.lZa),
                  a
                ),
                (this.store.iWa = b8(
                  () => this.di,
                  () => this.BZa(),
                  { fireImmediately: !0 }
                )),
                (this.store.lqb = b8(
                  () => [
                    this.iq.ap.G.config.ref.rotationPhi,
                    this.iq.ap.G.config.ref.rotationTheta,
                  ],
                  this.Pvb,
                  { fireImmediately: !0 }
                )));
            });
          }
          destroy() {
            this.XA && this.iq.ap.local.Cja--;
            this.iq.ap.local.Cja === 0 && this.mh.dispose();
            this.store.iWa?.();
            this.store.lqb?.();
          }
          get Uwa() {
            return this.XA && this.di && !this.mh.isInitialized
              ? 4
              : (this.JCa && this.XA && !this.mh.xe) ||
                (this.v0a && !this.mh.xe) ||
                (this.XA && this.JCa && !this.di) ||
                (!this.XA && this.JCa)
              ? 0
              : this.v0a
              ? 1
              : this.cba
              ? 2
              : this.lS
              ? 3
              : this.vg
              ? 4
              : 5;
          }
          get lS() {
            return this.store.scene?.files.K7a;
          }
          get JCa() {
            return this.iq.ap.local.kfb;
          }
          get cba() {
            return this.iq.ap.G.config.ref.snapshot?.id;
          }
          get vg() {
            return this.store.scene == null;
          }
          get XA() {
            return this.iq.De === 30;
          }
          get Qyb() {
            return this.di && this.XA;
          }
          get di() {
            return this.iq.ap.local.selected;
          }
          get v0a() {
            return this.XA && this.di && this.mh.isInitialized;
          }
          get mh() {
            return this.iq.ap.local.mh;
          }
          get G() {
            return this.iq.ap.G;
          }
          constructor(a, b, c, d, e) {
            this.store = a;
            this.iq = b;
            this.hz = c;
            this.zj = d;
            this.taa = e;
            this.BZa =
              (OJc.D(this),
              () => {
                this.iq.ap.local.I0a = this.di ? !0 : !1;
              });
            this.Pvb = () => {
              this.mh.xe ||
                this.mh.Cab({
                  rotation: {
                    x: this.iq.ap.G.config.ref.rotationPhi,
                    y: this.iq.ap.G.config.ref.rotationTheta,
                    z: 0,
                  },
                });
            };
          }
        };
        var NJc = class {
          static D(a) {
            M(a, { scene: c8.ref });
          }
          constructor() {
            this.iWa = (NJc.D(this), void 0);
          }
        };
        var WJc = class {
          static D(a) {
            M(a, { ap: c8.ref, De: c8.ref, Nk: c8.ref });
          }
          constructor(a, b, c) {
            WJc.D(this);
            this.ap = a;
            this.De = b;
            this.Nk = c;
          }
        };
        var uKc = class {
          startSpan(a, b) {
            a = `scene.${a}`;
            return b
              ? this.Wa.startSpan(a, b)
              : this.Wa.Eh(a, {
                  So: { name: `editor.${a}`, performance: { CI: !0 } },
                });
          }
          constructor(a) {
            this.Wa = a;
          }
        };
        var vKc = class {
          get hQb() {
            return this.Pjb;
          }
          get canvas() {
            return this.xK;
          }
          get agb() {
            return this.kW;
          }
          getImageData() {
            __c.x(this.kW != null, "WebGlRenderer is not initialized");
            return this.kW.readPixels();
          }
          constructor(a) {
            this.I = a;
            this.T$ = [];
            this.xK = cKc();
            this.Pjb = gKc(this);
          }
        };
        var wKc = __c.Q_()(() => ({
          XVb(a, b, c) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: void 0,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              O: { width: b, height: c },
            };
          },
          YVb(a, b, c, d) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: b,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              O: { width: c, height: d },
            };
          },
        }));
        var xKc = __c.$_({
          G: __c.Z_({
            scene: g1.Sm(1, "SceneRef"),
            config: g1.Oua(2, {
              snapshot: g1.ZEb(1, "MediaRef"),
              rotationPhi: g1.sWa(2, { min: 0, max: 6.284 }),
              rotationTheta: g1.sWa(3, { min: -1.571, max: 1.571 }),
            }),
          }),
        });
        var yKc;
        yKc = __c.E_()(({ Wh: a, xQ: b }) => {
          var c = b.Wa;
          b = b.I.Vf("scene_widget_rendering");
          c = new uKc(c);
          const d = new vKc(b),
            e = new mKc(d);
          a = XJc({ hz: a.hz, zj: d, taa: c });
          return {
            metadata: { type: void 0, name: void 0 },
            Y4: () => {
              const f = IJc({ Nia: e, zj: d });
              return new nKc(f);
            },
            G: __c.D_(a),
            exports: {},
          };
        });
        __c.q0 = {};
        __c.q0.NSb = nKc;
        __c.q0.ah = wKc;
        __c.q0.co = yKc;
        __c.q0.bh = xKc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b4769b6676359321.js.map
