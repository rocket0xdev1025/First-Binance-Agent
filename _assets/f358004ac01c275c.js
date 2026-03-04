(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 488522: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var Z_;
        var g1;
        var M = __c.M;
        var Oa = __c.Oa;
        var LI = __c.LI;
        var G = __c.G;
        var X = __c.X;
        var W = __c.W;
        var H = __c.H;
        var xD = __c.xD;
        var zd = __c.zd;
        var Tc = __c.Tc;
        var ne = __c.ne;
        var E = __c.E;
        var u = __c.u;
        var Ba = __c.Ba;
        var y = __c.y;
        var I$b,
          J$b,
          K$b,
          M$b,
          O$b,
          N$b,
          Q$b,
          G_,
          S$b,
          H_,
          Y$b,
          aac,
          fac,
          J_,
          K_,
          mac,
          qac,
          I_,
          rac,
          tac,
          vac,
          xac,
          yac,
          P_,
          Aac,
          R_,
          S_,
          Bac,
          T_,
          Cac,
          U_,
          Dac,
          V_,
          W_,
          X_,
          Eac,
          Y_,
          Fac,
          Hac,
          Iac,
          Jac,
          Nac,
          Pac,
          Mac,
          Oac,
          Kac,
          Lac,
          Qac,
          Rac,
          b0,
          Sac,
          Tac,
          Uac,
          $ac,
          fbc,
          qbc,
          rbc,
          sbc,
          tbc,
          t0,
          u0,
          v0,
          vbc,
          wbc,
          xbc,
          w0,
          Abc,
          ybc,
          y0,
          A0,
          z0,
          Bbc,
          B0,
          Dbc,
          Fbc,
          Gbc,
          Ibc,
          E0,
          Jbc,
          Vbc,
          Wbc,
          Xbc,
          Ybc,
          J0,
          Kbc,
          F0,
          Pbc,
          Sbc,
          Ubc,
          H0,
          Rbc,
          Zbc,
          Hbc,
          acc,
          bcc,
          ccc,
          $bc,
          fcc,
          gcc,
          L0,
          ucc,
          rcc,
          pcc,
          N0,
          hcc,
          kcc,
          jcc,
          qcc,
          icc,
          vcc,
          occ,
          mcc,
          lcc,
          M0,
          O0,
          zcc,
          Acc,
          Bcc,
          Dcc,
          Ccc,
          Fcc,
          Q0,
          Kcc,
          Occ,
          Mcc,
          abc,
          Qcc,
          jbc,
          kbc,
          lbc,
          Scc,
          Tcc,
          Ucc,
          Vcc,
          Wcc,
          $cc,
          bdc,
          V0,
          W0,
          X0,
          Vac,
          cdc,
          gdc,
          idc,
          hdc,
          kdc,
          jdc,
          ldc,
          mdc,
          ndc,
          rdc,
          sdc,
          udc,
          vdc,
          wdc,
          xdc;
        __c.C_ = async function (a, b) {
          const c = await __c.Uh(a.vy, { method: "GET", url: y(b.url) });
          return (0, __c.Zb)(() => __c.Tra(a, b, c.body));
        };
        I$b = function (a, b) {
          b = a.Gi.get(__c.br(b));
          return b != null ? a.PW.get(b) : void 0;
        };
        J$b = function (a, b, c) {
          const d = a.Gi.get(__c.br(b));
          if (d != null) {
            const f = a.PW.get(d);
            if (f != null) {
              Promise.resolve({ ...d, element: f });
              return;
            }
          }
          const e = __c.br(b);
          (a.sGa.get(e) ?? a.pending.get(e)) ||
            (d != null &&
              (c = async () => {
                const f = await __c.C_(a, d);
                return { ...d, element: f };
              }),
            (b = c().finally(() => a.sGa.delete(e))),
            a.sGa.set(e, b));
        };
        K$b = function (a, b) {
          J$b(a, b, async () => {
            if (a.pWa == null)
              throw Error("Blueprint document resources are not supported");
            const c = await a.pWa.Sq(b),
              d = (0, __c.Zb)(() => __c.Ura(a, c)),
              e = a.PW.get(d) ?? (await __c.C_(a, d));
            return { ...d, element: e };
          });
        };
        __c.D_ = function (a) {
          return { type: 1, Component: a };
        };
        __c.E_ = function () {
          return (a) => a;
        };
        M$b = function (a) {
          a.$d = setTimeout(() => {
            a.z8a(new L$b());
          }, 500);
        };
        O$b = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.l0.get(d);
          if (e) {
            a.w9.c4.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.w9.c4.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.w9.c4.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof F_) {
                var h = k;
                k.code === "internal_error"
                  ? a.I.Nb(k, {
                      Be: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.gHb));
              } else
                a.WHb
                  ? a.I.Nb(k, {
                      Be: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.Rpb.error(k);
              g = N$b(a.w9, c, g, b);
              g.ok ||
                a.I.MQ(g.error, {
                  Be: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.$rb)
                try {
                  k(h);
                } catch (l) {
                  a.I.kK(l, { Be: "Error executing errorObserver" });
                }
          } else
            (h = N$b(
              a.w9,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.I.MQ(h.error, {
                  Be: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        N$b = function (a, b, c, d) {
          return a.c4.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        Q$b = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return P$b;
          a = new URL(a).origin;
          return a === "null" ? P$b : { UMa: a, U9a: a };
        };
        G_ = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window,
          f = Q$b,
          g
        ) {
          const h = new R$b(6e4),
            k = f(c),
            l = c.contentWindow;
          if (!l)
            throw new F_({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: m, source: n, origin: p }) => {
            const q = m?.source,
              r = m?.clientId;
            q?.startsWith("react-") ||
              (p !== k.UMa
                ? S$b(p) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", k.UMa],
                      ["actual", p],
                    ]),
                  })
                : n !== l
                ? n !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([["data.source", q]]),
                  })
                : ((m = m
                    ? m.source
                      ? m.source !== "iframe"
                        ? Ba("invalid source")
                        : m.clientId !== g
                        ? Ba("unknown client id")
                        : (0, __c.Aa)()
                      : Ba("'source' is missing in MessageEvent data object")
                    : Ba("missing 'data' field in MessageEvent")),
                  m.ok
                    ? (l.postMessage({ source: "parent", clientId: r }, k.U9a, [
                        a,
                      ]),
                      h.resolve(void 0))
                    : b.VF(m.error, { extra: new Map([["data.source", q]]) })));
          };
          d("message", c);
          try {
            await h.promise();
          } finally {
            e("message", c);
          }
        };
        S$b = function (a) {
          return T$b.some((b) => a.endsWith(b));
        };
        H_ = function (a, b, c, d, e) {
          a.handle(b, async (f) => {
            if (f === void 0)
              throw new F_({
                code: "internal_error",
                message: `${b}: request cannot be undefined.`,
              });
            f = c.za(f);
            f = await d(f);
            if (e) return e.Fa(f);
          });
        };
        Y$b = function (a, b) {
          H_(a, "INIT_DATA", U$b, (c) => b.Jvb(c), V$b);
          H_(a, "DATA_RENDER_READY", W$b, (c) => b.Nvb(c), X$b);
        };
        aac = async function (a, b) {
          a = await a.kA.request("SET_EDITING_CONFIG", Z$b.Fa(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("SET_EDITING_CONFIG: Result cannot be empty");
          return $$b.za(a.value);
        };
        fac = function (a, b) {
          H_(a, "SELECTION_CHANGED", bac, (c) => b.Tvb(c), cac);
          H_(a, "TEXT_CONTENT_CHANGED", dac, (c) => b.Vvb(c), eac);
        };
        J_ = async function (a, b) {
          a = await a.kA.request("RENDER_ELEMENT", gac.Fa(b));
          a = I_(a, "RENDER_ELEMENT");
          return hac.za(a);
        };
        K_ = async function (a, b) {
          a = await a.kA.request("SET_CAPABILITY", iac.Fa(b));
          a = I_(a, "SET_CAPABILITY");
          return jac.za(a);
        };
        mac = async function (a, b) {
          a = await a.kA.request("SET_EDIT_PANEL_VALUE", kac.Fa(b));
          a = I_(a, "SET_EDIT_PANEL_VALUE");
          return lac.za(a);
        };
        qac = function (a, b) {
          H_(a, "SET_CONFIG", nac, (c) => b.Uvb(c), oac);
          H_(a, "RESIZE_EVENT", pac, (c) => b.Ovb(c));
        };
        I_ = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        rac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new L_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-data-sdk");
          return { kA: e };
        };
        tac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new L_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-element-sdk");
          return { kA: e, Uqb: new sac(e) };
        };
        vac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new L_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-editing-sdk");
          return { kA: e, emitter: new uac(e) };
        };
        xac = function ({ De: a, Ep: b, Mq: c, Ua: d, I: e }) {
          const f = new wac(e),
            g = (h, k) =>
              e.error(h, {
                Be: "codelet: ",
                extra: new Map(Object.entries(k)),
              });
          return M_((h) => {
            const k = N_(
              (l) => {
                f.tnb(l, h.Loa, h.Koa);
              },
              [h.Loa, h.Koa]
            );
            return O_(__c.my, {
              url: h.url,
              store: b,
              Lo: c,
              QD: g,
              Ua: d,
              RN: a > 10,
              Fi: h.Fi || !1,
              FI: k,
              Ry: h.Ry,
            });
          });
        };
        yac = function ({ De: a, Ep: b, Mq: c, Ua: d, I: e }) {
          const f = new wac(e),
            g = (h, k) =>
              e.error(h, {
                Be: "codelet2: ",
                extra: new Map(Object.entries(k)),
              });
          return M_(({ url: h, Fi: k, fFa: l, Ry: m }) => {
            const n = N_(
              (p) => {
                f.snb(p, l);
              },
              [l]
            );
            return O_(__c.my, {
              url: h,
              store: b,
              Lo: c,
              QD: g,
              Ua: d,
              RN: a > 10,
              Fi: k || !1,
              FI: n,
              Ry: m,
            });
          });
        };
        P_ = function () {
          throw Error("ref not found");
        };
        Aac = function (a, b, c) {
          return new zac(a, b, c);
        };
        __c.Q_ = function () {
          return (a) => a;
        };
        R_ = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        S_ = function (a) {
          return { kind: 0, QN: a };
        };
        Bac = function () {
          return { kind: 1 };
        };
        T_ = function (a) {
          return { kind: 3, range: a };
        };
        Cac = function (a) {
          return { kind: 2, range: a };
        };
        U_ = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        Dac = function (a) {
          return { kind: 5, itemType: a };
        };
        V_ = function (a) {
          return { kind: 7, name: a };
        };
        W_ = function (a) {
          return { kind: 8, itemType: a };
        };
        X_ = function (a) {
          return { kind: 10, fields: a };
        };
        Eac = function (a, ...b) {
          return { kind: 11, aWa: a, qg: b };
        };
        Y_ = function (a, b, c) {
          return (d, ...e) => ({ key: d, JJa: a, iF: b, type: c(...e) });
        };
        Z_ = __c.Z_ = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        Fac = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new E(a);
          }
        };
        __c.$_ = function (a) {
          return () => ({ ...Gac, ...a });
        };
        Hac = function (a, b) {
          a = { ...a.LX };
          b.fb.every((c) => !!c.fill.se.ref?.image && !!c.fill.se.ref?.video) &&
            (a.Zt = !0);
          return a;
        };
        Iac = function (a, b) {
          a = { ...a.LX };
          b.ub.every((c) => !!c.se.ref?.text) && (a.Zt = !0);
          return a;
        };
        Jac = function (a, b) {
          switch (b.type) {
            case "rect":
              return (
                (a = { ...a.LX }),
                b.fill.se.ref?.image && b.fill.se.ref?.video && (a.Zt = !0),
                a
              );
            case "shape":
              return Hac(a, b);
            case "text":
              return (a = { ...a.LX }), b.se.ref?.text && (a.Zt = !0), a;
            case "chart":
              return { ...a.LX };
            case "line":
              return Iac(a, b);
            case "grid":
              return { ...a.LX };
            default:
              throw new E(b);
          }
        };
        Nac = function (a, b) {
          return a.e.classes.N2.create(
            {},
            {
              U: {
                image: a.e.computed(() => Kac(a.se, b.image, b.se.ref?.image)),
                video: a.e.computed(() => Lac(a.se, b.video, b.se.ref?.video)),
                Qa: b.Qa,
              },
              attributes: Mac(b),
            }
          );
        };
        Pac = function (a, b) {
          return { ...Oac(a, b), N: () => b.N };
        };
        Mac = function (a) {
          return {
            Tl: () => a.Tl,
            color: () => a.color,
            xa: () => a.xa,
            locked: () => a.locked,
            kg: () => a.kg,
            Sk: () => a.Sk,
            Vc: () => a.Vc,
            flipX: () => a.flipX,
            flipY: () => a.flipY,
          };
        };
        Oac = function (a, b) {
          return {
            height: () => b.height,
            width: () => b.width,
            top: () => b.top,
            left: () => b.left,
            rotation: () => b.rotation,
            Cg: () => Jac(a.W1a, b),
            locked: !0,
          };
        };
        Kac = function (a, b, c) {
          const d = c ? a.se?.get(c) : void 0;
          return {
            ref: (d && Qac(d, "image_fill"))?.image.ref ?? b.ref,
            set: (e) =>
              Rac(a, { type: "image_fill", value: { ...__c.zD, image: e } }, c),
          };
        };
        Lac = function (a, b, c) {
          const d = c ? a.se?.get(c) : void 0;
          return {
            ref: (d && Qac(d, "video_fill"))?.video.ref ?? b.ref,
            set: (e) =>
              Rac(a, { type: "video_fill", value: { ...__c.zD, video: e } }, c),
          };
        };
        Qac = function (a, b) {
          if (a.type !== b)
            throw Error(`Expected override type ${b} but got ${a.type}`);
          return a.value;
        };
        Rac = function (a, b, c) {
          if (!c)
            throw Error(
              "No override key is available, but this is being set on an instance. This is likely an error with the locking logic."
            );
          a.se.set(c, b);
        };
        b0 = async function (a, b) {
          [a] = await __c.Gsa(a, [b]);
          return new a0({ id: b.id, url: a.fonts[0].files[0].url });
        };
        Sac = async function (a, b, c) {
          a = await b0(a, c);
          return K_(b, a);
        };
        Tac = async function (a, b, c, d, e, f, g) {
          const h = b.Iza.ref?.first(),
            k = a.Sa;
          c = await J_(c, {
            config: b.config,
            C6: k != null && h != null ? await b0(k, h) : void 0,
          });
          a.config.mR?.FMa({ ...c, DH: c.DH?.size }, b, d, e, f, g);
        };
        Uac = function (a, b) {
          const c = new Map();
          return c0(
            () => {
              const d = new Map();
              a.config.forEach((e, f) => {
                let g;
                const h = c.get(f);
                e.textContent !== h?.textContent &&
                  (g = { ...(g ?? new d0({})), textContent: e.textContent });
                e.backgroundColor !== h?.backgroundColor &&
                  (g = {
                    ...(g ?? new d0({})),
                    backgroundColor: e.backgroundColor,
                  });
                g && d.set(f, g);
                c.set(f, { ...e });
              });
              return d;
            },
            async (d) => aac(b, new Z$b({ config: d })),
            { fireImmediately: !0 }
          );
        };
        $ac = function (a) {
          function b(f, g) {
            var h = c;
            g = g();
            u(!h.uaa.has(f));
            g = { document: Vac(h.gUa(f, g.document)), G: Vac(h.gUa(f, g.G)) };
            h.uaa.set(f, g);
            return { id: f, dn: g };
          }
          const c = a.GNa,
            { jha: d = __c.tc("c79472f0", !1) } = a,
            e = a.XXb ?? __c.tc("1d0cd616", !1);
          return {
            $r: b("w:wnJF5T87v", Wac),
            gY: b("w:xB9fK2LmQ", Xac),
            kj: a.nya
              ? Promise.all([
                  __webpack_require__.me(270376).then(() => __c.e0),
                  __webpack_require__.me(309241).then(() => __c.f0),
                  __webpack_require__.me(726606).then(() => __c.g0),
                  __webpack_require__.me(555219).then(() => __c.h0),
                  __webpack_require__.me(756388).then(() => __c.i0),
                  __webpack_require__.me(516583).then(() => __c.j0),
                  __webpack_require__.me(93698).then(() => __c.k0),
                  __webpack_require__.me(295247).then(() => __c.l0),
                  __webpack_require__.me(934200).then(() => __c.m0),
                  __webpack_require__.me(308710).then(() => __c.n0),
                ]).then(([f, g, h, k, l, m, n, p, q, r]) => ({
                  OX: b("w:cm9wgGptP", f.bh),
                  RX: b("w:yLMS4dWnl", g.bh),
                  SX: b("w:2flp30CGQ", h.bh),
                  TX: b("w:1Nv6K6Dtv", k.bh),
                  UX: b("w:5Nv6K6Dtv", l.bh),
                  VX: b("w:6Nv6K6Dtv", m.bh),
                  WX: b("w:7Nv6K6Dtv", n.bh),
                  XX: b("w:8Nv6K6Dtv", p.bh),
                  YX: b("w:9Nv6K6Dtv", q.bh),
                  QX: b("w:sSrc7m4Q3", r.bh),
                }))
              : void 0,
            Qx: b("w:JR4G8hDDg", Yac),
            hX: b("w:KS5H9iEEh", Zac),
            form: d
              ? __webpack_require__
                  .me(313335)
                  .then(() => __c.o0)
                  .then((f) => b("widget:form", f.bh))
              : void 0,
            XM: a.vya
              ? __webpack_require__
                  .me(870165)
                  .then(() => __c.p0)
                  .then((f) => b("w:K7mQ9xR3p", f.bh))
              : void 0,
            scene: a.Aya
              ? __webpack_require__
                  .me(666647)
                  .then(() => __c.q0)
                  .then((f) => b("w:2pbXJMtm1", f.bh))
              : void 0,
            button: e
              ? __webpack_require__
                  .me(868015)
                  .then(() => __c.r0)
                  .then((f) => b("w:PQccHDsCJ", f.bh))
              : void 0,
          };
        };
        fbc = function (a) {
          function b({ id: e, dn: f }, g) {
            var h = d;
            g = g();
            const k = y(h.nIa.uaa.get(e));
            u(k.G === f.G);
            u(!h.kUa.has(e));
            f = abc(e, g, f);
            h.kUa.set(e, f);
            return f;
          }
          const c = a.HNa,
            d = a.FNa;
          return {
            kj: c.kj
              ? Promise.all([
                  c.kj,
                  __webpack_require__.me(270376).then(() => __c.e0),
                  __webpack_require__.me(309241).then(() => __c.f0),
                  __webpack_require__.me(726606).then(() => __c.g0),
                  __webpack_require__.me(555219).then(() => __c.h0),
                  __webpack_require__.me(756388).then(() => __c.i0),
                  __webpack_require__.me(516583).then(() => __c.j0),
                  __webpack_require__.me(93698).then(() => __c.k0),
                  __webpack_require__.me(295247).then(() => __c.l0),
                  __webpack_require__.me(934200).then(() => __c.m0),
                  __webpack_require__.me(308710).then(() => __c.n0),
                ]).then(([e, f, g, h, k, l, m, n, p, q, r]) => ({
                  OX: b(e.OX, f.ah),
                  RX: b(e.RX, g.ah),
                  SX: b(e.SX, h.ah),
                  TX: b(e.TX, k.ah),
                  UX: b(e.UX, l.ah),
                  VX: b(e.VX, m.ah),
                  WX: b(e.WX, n.ah),
                  XX: b(e.XX, p.ah),
                  YX: b(e.YX, q.ah),
                  QX: b(e.QX, r.ah),
                }))
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(666647).then(() => __c.q0),
                ]).then(([e, f]) => b(e, f.ah))
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(868015).then(() => __c.r0),
                ]).then(([e, f]) => b(e, f.ah))
              : void 0,
            Qx: b(c.Qx, bbc),
            hX: b(c.hX, cbc),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(313335).then(() => __c.o0),
                ]).then(([e, f]) => b(e, f.ah))
              : void 0,
            $r: b(c.$r, dbc),
            gY: b(c.gY, ebc),
            XM: c.XM
              ? Promise.all([
                  c.XM,
                  __webpack_require__.me(870165).then(() => __c.p0),
                ]).then(([e, f]) => b(e, f.ah))
              : void 0,
          };
        };
        qbc = function (a) {
          const b = a.HNa,
            c = a.Sca,
            d = a.jf,
            e = a.xQ,
            f = a.Wh;
          class g extends gbc {
            async load() {
              const [m, n, p] = await Promise.all([
                  this.gn,
                  this.loadModule(),
                  Promise.resolve(this.Wh),
                ]),
                q = m.id,
                r = m.dn;
              var t = n.co({
                  xQ: {
                    ...e,
                    Wa: d.fw(`widgets.rendering.clients.${this.yl}`),
                  },
                  Wh: p,
                }),
                v = y(c.nIa.uaa.get(q));
              u(v.G === r.G);
              u(!c.ZT.has(q));
              hbc.has(q) || (__c.PR.set(q, ibc), hbc.add(q));
              const { Wrb: w, LM: z } = jbc(c, r, t);
              v = kbc(c, r, t, z);
              t = {
                G: w,
                email: v,
                exports: t.exports,
                metadata: t.metadata,
                YBb: lbc(r, t.metadata),
                LM: z,
                Ega: t.Ega,
              };
              c.ZT.set(q, t);
              return { id: q, dn: r, JHa: t, yl: this.yl };
            }
            constructor(m) {
              super(m.id, m.loadModule);
              this.gn = m.gn;
              this.Wh = m.Wh;
              this.yl = m.yl ?? "default";
            }
          }
          const h = {
            $r: new g({
              id: "w:wnJF5T87v",
              gn: Promise.resolve(b.$r),
              loadModule: () => __webpack_require__.me(798828).then(() => mbc),
              Wh: { LG: f.LG, eD: f.eD },
              yl: "blueprint",
            }),
            gY: new g({
              id: "w:xB9fK2LmQ",
              gn: Promise.resolve(b.gY),
              loadModule: () => __webpack_require__.me(488522).then(() => nbc),
              Wh: { LG: f.LG },
              yl: "documentBlueprint",
            }),
            OX: b.kj
              ? new g({
                  id: "w:cm9wgGptP",
                  gn: b.kj.then((m) => m.OX),
                  loadModule: () =>
                    __webpack_require__.me(270376).then(() => __c.e0),
                  Wh: void 0,
                  yl: "demo1",
                })
              : null,
            RX: b.kj
              ? new g({
                  id: "w:yLMS4dWnl",
                  gn: b.kj.then((m) => m.RX),
                  loadModule: () =>
                    __webpack_require__.me(309241).then(() => __c.f0),
                  Wh: void 0,
                  yl: "demo2",
                })
              : null,
            SX: b.kj
              ? new g({
                  id: "w:2flp30CGQ",
                  gn: Promise.resolve(b.kj.then((m) => m.SX)),
                  loadModule: () =>
                    __webpack_require__.me(726606).then(() => __c.g0),
                  Wh: void 0,
                  yl: "demo3",
                })
              : null,
            TX: b.kj
              ? new g({
                  id: "w:1Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.TX)),
                  loadModule: () =>
                    __webpack_require__.me(555219).then(() => __c.h0),
                  Wh: void 0,
                  yl: "demo4",
                })
              : null,
            UX: b.kj
              ? new g({
                  id: "w:5Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.UX)),
                  loadModule: () =>
                    __webpack_require__.me(756388).then(() => __c.i0),
                  Wh: void 0,
                  yl: "demo5",
                })
              : null,
            VX: b.kj
              ? new g({
                  id: "w:6Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.VX)),
                  loadModule: () =>
                    __webpack_require__.me(516583).then(() => __c.j0),
                  Wh: void 0,
                  yl: "demo6",
                })
              : null,
            WX: b.kj
              ? new g({
                  id: "w:7Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.WX)),
                  loadModule: () =>
                    __webpack_require__.me(93698).then(() => __c.k0),
                  Wh: void 0,
                  yl: "demo7",
                })
              : null,
            XX: b.kj
              ? new g({
                  id: "w:8Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.XX)),
                  loadModule: () =>
                    __webpack_require__.me(295247).then(() => __c.l0),
                  Wh: void 0,
                  yl: "demo8",
                })
              : null,
            YX: b.kj
              ? new g({
                  id: "w:9Nv6K6Dtv",
                  gn: Promise.resolve(b.kj.then((m) => m.YX)),
                  loadModule: () =>
                    __webpack_require__.me(934200).then(() => __c.m0),
                  Wh: void 0,
                  yl: "demo9",
                })
              : null,
            QX: b.kj
              ? new g({
                  id: "w:sSrc7m4Q3",
                  gn: Promise.resolve(b.kj.then((m) => m.QX)),
                  loadModule: () =>
                    __webpack_require__.me(308710).then(() => __c.n0),
                  Wh: void 0,
                  yl: "demo10",
                })
              : null,
            Qx: new g({
              id: "w:JR4G8hDDg",
              gn: Promise.resolve(b.Qx),
              loadModule: () => __webpack_require__.me(138187).then(() => obc),
              Wh: { Kra: f.Kra, Sa: f.Sa, zC: f.zC },
              yl: "codelet",
            }),
            hX: new g({
              id: "w:KS5H9iEEh",
              gn: Promise.resolve(b.hX),
              loadModule: () => __webpack_require__.me(327205).then(() => pbc),
              Wh: { Lra: f.Lra },
              yl: "codelet2",
            }),
            form: b.form
              ? new g({
                  id: "widget:form",
                  gn: b.form,
                  loadModule: () =>
                    __webpack_require__.me(313335).then(() => __c.o0),
                  Wh: Promise.all([f.nM?.()]).then(([m]) => ({
                    Dtb: m,
                    ND: f.ND,
                  })),
                  yl: "form",
                })
              : null,
            XM: b.XM
              ? new g({
                  id: "w:K7mQ9xR3p",
                  gn: b.XM,
                  loadModule: () =>
                    __webpack_require__.me(870165).then(() => __c.p0),
                  Wh: void 0,
                  yl: "navigationMenu",
                })
              : null,
            scene: b.scene
              ? new g({
                  id: "w:2pbXJMtm1",
                  gn: b.scene,
                  loadModule: () =>
                    __webpack_require__.me(666647).then(() => __c.q0),
                  Wh: { hz: f.hz },
                  yl: "scene",
                })
              : null,
            button: b.button
              ? new g({
                  id: "w:PQccHDsCJ",
                  gn: b.button,
                  loadModule: () =>
                    __webpack_require__.me(868015).then(() => __c.r0),
                  Wh: void 0,
                  yl: "button",
                })
              : null,
          };
          a = new Set([
            "widget:form",
            "w:JR4G8hDDg",
            "w:wnJF5T87v",
            "w:2pbXJMtm1",
            "w:PQccHDsCJ",
          ]);
          const k = [];
          for (var l of Object.values(h))
            l && a.has(l.id) && k.push(l.Xm(Promise.resolve()));
          l = Promise.allSettled(k).then(() => {});
          return {
            ZT: {
              $r: h.$r.Xm(l),
              gY: h.gY.Xm(l),
              kj: b.kj && {
                OX: h.OX.Xm(l),
                RX: h.RX.Xm(l),
                SX: h.SX.Xm(l),
                TX: h.TX.Xm(l),
                UX: h.UX.Xm(l),
                VX: h.VX.Xm(l),
                WX: h.WX.Xm(l),
                XX: h.XX.Xm(l),
                YX: h.YX.Xm(l),
                QX: h.QX.Xm(l),
              },
              Qx: h.Qx.Xm(l),
              hX: h.hX.Xm(l),
              form: h.form?.Xm(l) ?? void 0,
              XM: h.XM?.Xm(l) ?? void 0,
              scene: h.scene?.Xm(l) ?? void 0,
              button: h.button?.Xm(l) ?? void 0,
            },
            nYa: () => {
              const m = [];
              for (const n of Object.values(h))
                n && m.push(n.Xm(Promise.resolve()));
              return Promise.allSettled(m);
            },
          };
        };
        rbc = function (a) {
          var b = { document: void 0, G: void 0 };
          const c = new Map();
          for (const d in b) a[d].cL.forEach((e, f) => c.set(f, e));
          return {
            cL: c,
            decode: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].decode(d[g]);
                h.gIa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { gIa: e, data: f };
            },
            encode: (d) => ne(b, (e, f) => a[f].encode(d[f])),
          };
        };
        sbc = function (a) {
          return () => a;
        };
        tbc = function (a) {
          return a();
        };
        t0 = function (a, b, c) {
          return new s0([a], b, c);
        };
        u0 = function (a, b, c, d) {
          return new s0([a, b], c, d);
        };
        v0 = function (a, b, c, d) {
          return new ubc(a, b, c, d);
        };
        vbc = function (a, b) {
          return b(a);
        };
        wbc = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        xbc = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        w0 = function (a, b) {
          return a === b || b.map((c) => a.bCa(ybc(c)));
        };
        Abc = function (a, b) {
          return a.rEa(b).map((c) => new zbc(c, (d) => d.props[b]));
        };
        ybc = function (a) {
          u(a instanceof x0);
          return a;
        };
        y0 = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        A0 = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && z0(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : z0([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : z0(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && Bbc(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new E(a);
              }
            default:
              throw new E(a);
          }
        };
        z0 = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!A0(a[c], b[c])) return !1;
          return !0;
        };
        Bbc = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!A0(a[f], b[f])) return !1;
          return !0;
        };
        B0 = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        Dbc = function (a, b) {
          return a.map((c) => b.map((d) => Cbc[0](c, d)));
        };
        Fbc = function (a, b, c) {
          return b.map((d) => Ebc[a](d, c));
        };
        Gbc = function (a, b) {
          return new C0(new D0(new Map(b), a.vars), a.Q6);
        };
        Ibc = function (a, b, c) {
          for (const [e, f] of c.Q6) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = Hbc(b, d, (g) => E0(a, g, f.body));
            b = new C0(b.vars, b.Q6.define(e, d));
          }
          return E0(a, b, c.body);
        };
        E0 = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return Jbc(c.value);
            case 2:
              const f = c.args.map((q) => E0(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.Q6.resolve(c).map((q) => Kbc(q, f))
                : Lbc[c].map((q) => F0(q, f));
            case 3:
              const g = c.args.map((q) =>
                q.kind !== 13 ? new Mbc(E0(a, b, q)) : new Nbc(E0(a, b, q.x1b))
              );
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.zza(
                      (r) => r.type,
                      (r) => r.type.FS()
                    )
                  );
                  return G0.union(...d)
                    .map(Obc[c])
                    .map((q) => Pbc(q, g));
                default:
                  return Qbc[c].map((q) => Pbc(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = E0(a, b, c.nX);
              c = k.type.FS();
              const l = Hbc(b, [[e, c]], (q) => E0(a, q, h));
              return Fbc(d, c, l.resultType).map((q) => Rbc(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [E0(a, b, q), E0(a, b, r)]);
              c = G0.union(...m.map(([q]) => q.type));
              d = G0.union(...m.map(([, q]) => q.type));
              if (!w0(c, G0.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return Dbc(c, d).map((q) => Sbc(q, m));
            case 6:
              const n = ne(c.fields, (q) => E0(a, b, q));
              c = ne(n, (q) => q.type);
              return (0, Tbc[0])(c).map((q) => Ubc(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = E0(a, b, { kind: 6, fields: c.args });
              return d.GCb.map((q) => F0(q, [p], { Wp: !0 }));
            case 8:
              return (d = E0(a, b, c.base)), Vbc(d, c.F9b);
            case 9:
              return Wbc(b, c.name);
            case 10:
              return (d = Tc(c.defs, (q) => E0(a, b, q))), Xbc(a, b, d, c.body);
            case 11:
              return (
                (d = E0(a, b, c.test).as(G0.Yg)),
                (e = E0(a, b, c.xVb)),
                (c = E0(a, b, c.alternate)),
                Ybc(d, e, c)
              );
            case 12:
              return E0(a, b, c.body).computed();
            default:
              throw new E(c);
          }
        };
        Jbc = function (a) {
          switch (typeof a) {
            case "string":
              return H0(G0.string, a);
            case "number":
              return H0(G0.number, a);
            case "boolean":
              return H0(G0.Yg, a);
            case "undefined":
              return H0(G0.undefined, a);
            default:
              throw new E(a);
          }
        };
        Vbc = function (a, b) {
          return a.map((c) =>
            Abc(c, b).map(({ type: d, get: e }) => F0(new s0([c], d, e), [a]))
          );
        };
        Wbc = function (a, b) {
          return a.vars.resolve(b).map((c) => I0.of(c, (d) => d.resolve(b)));
        };
        Xbc = function (a, b, c, d) {
          const e = Tc(c, (g) => g.type),
            f = Tc(c, (g) => g.evaluate);
          return Zbc(E0(a, Gbc(b, e), d), (g) => {
            const h = Tc(f, (k) => k(g));
            return new D0(new Map(h), g);
          });
        };
        Ybc = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = G0.union(d, f);
              return I0.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        J0 = function (a) {
          return (b) => b(a);
        };
        Kbc = function ({ Sma: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = $bc(a, (f, g) => d[g].as(f));
          return I0.of(b, (f) => {
            const g = e.map(J0(f));
            return c(f)(...g);
          });
        };
        F0 = function ({ Sma: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = $bc(a, (g, h) => d[h].as(g));
          return I0.of(b, (g) => {
            g = f.map(J0(g));
            return acc(e?.Wp ? bcc(c) : c, g);
          });
        };
        Pbc = function ({ XFb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.tua(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = G0.nX(a)))
            )
          );
          return new I0(b, (g) => {
            const h = J0(g),
              k = f.map((l) => l.tua(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.zza(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        Sbc = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new I0(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        Ubc = function ({ Ckb: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = ccc(a, (g, h) => d[h].as(g));
          return new I0(b, (g) => {
            const h = ne(f, J0(g));
            return () => {
              var k = ne(h, tbc);
              return c(k);
            };
          });
        };
        H0 = function (a, b) {
          const c = sbc(b);
          return new I0(a, () => c);
        };
        Rbc = function (
          { itemType: a, Ykb: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(G0.nX(a));
          return new I0(c, (k) => {
            const l = h(k),
              m = g(k),
              n = bcc((p) => {
                p = p.map(sbc);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        Zbc = function (a, b) {
          const c = a.evaluate;
          return new I0(a.type, (d) => c(b(d)));
        };
        Hbc = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return vbc(e, (f) =>
            c(Gbc(a, new Map(b))).map(
              (g, h) =>
                new dcc(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new D0(new Map(m), k));
                })
            )
          );
        };
        acc = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(tbc);
                return a(...f);
              };
          }
        };
        bcc = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.lfb.length === c.length &&
              b.lfb.every((e, f) => K0.oh(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { lfb: c, v: d };
            return d;
          };
        };
        ccc = function (a, b) {
          return ne(a, b);
        };
        $bc = function (a, b) {
          return a.map(b);
        };
        fcc = function (a, b, c) {
          return new ecc(a, b, c);
        };
        gcc = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        L0 = function (a, b, c, d) {
          if (d == null) throw a.error(b.NL(c), "not found");
          return d;
        };
        ucc = function (a) {
          function b(r) {
            return m[r.kind](r);
          }
          const c = a.types,
            d = a.values;
          class e {
            static of(r, t, v, w, z, A) {
              return new e(r, v, w, hcc(z, icc(t)), jcc(A, icc(t)));
            }
            map(r) {
              return r(this);
            }
            validate(r) {
              return r
                ? new e(
                    this.dataType,
                    this.sca,
                    this.Tba,
                    kcc(this.decode, r),
                    hcc(this.encode, r)
                  )
                : this;
            }
            constructor(r, t, v, w, z) {
              this.dataType = r;
              this.sca = t;
              this.Tba = v;
              this.decode = w;
              this.encode = z;
            }
          }
          const f = e.of(
              { kind: 0 },
              "string",
              c.string,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "string", value: v })
            ),
            g = e.of(
              { kind: 1 },
              "boolean",
              c.Yg,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "boolean", value: v })
            ),
            h = e
              .of(
                { kind: 2 },
                "double",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "double", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isFinite(v))
                  throw r.error(t, `number is not finite: ${v}`);
              }),
            k = e
              .of(
                { kind: 3 },
                "int32",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "int32", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                  throw r.error(t, `number is not an int32: ${v}`);
              }),
            l = {
              FontRef: e.of(
                { kind: 7, name: "FontRef" },
                "ref",
                c.instance("FontRef"),
                (r) => d.instance("FontRef", r),
                M0("font"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              MediaRef: e.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                c.instance("MediaRef"),
                (r) => d.instance("MediaRef", r),
                M0("media"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              VideoRef: e.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                c.instance("VideoRef"),
                (r) => d.instance("VideoRef", r),
                M0("video"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              AudioRef: e.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                c.instance("AudioRef"),
                (r) => d.instance("AudioRef", r),
                M0("audio"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              EmbedRef: e.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                c.instance("EmbedRef"),
                (r) => d.instance("EmbedRef", r),
                M0("embed"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              SceneRef: e.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                c.instance("SceneRef"),
                (r) => d.instance("SceneRef", r),
                M0("scene"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              BlueprintRef: e.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                c.instance("BlueprintRef"),
                (r) => d.instance("BlueprintRef", r),
                M0("blueprint"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              Fill: e.of(
                { kind: 7, name: "Fill" },
                "fill",
                c.instance("Fill"),
                (r) => d.instance("Fill", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "fill", value: v })
              ),
              Stroke: e.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                c.instance("Stroke"),
                (r) => d.instance("Stroke", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "stroke", value: v })
              ),
              Richtext2: e.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                c.instance("Richtext2"),
                (r) => d.instance("Richtext2", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "text2", value: v })
              ),
            },
            m = {
              [0]: (r) => f.validate(lcc(r.QN)),
              [1]: () => g,
              [2]: (r) => h.validate(mcc(r.range)),
              [3]: (r) => k.validate(mcc(r.range)),
              [4]: (r) =>
                e
                  .of(
                    { kind: 4, values: r.values },
                    ncc,
                    c.primitive,
                    (t) => t,
                    (t, v, w) => w.value,
                    (t, v, w) => {
                      a: switch (typeof w) {
                        case "string":
                          t = { type: "string", value: w };
                          break a;
                        case "boolean":
                          t = { type: "boolean", value: w };
                          break a;
                        case "number":
                          t = { type: "int32", value: w };
                          break a;
                        default:
                          throw new E(w);
                      }
                      return t;
                    }
                  )
                  .validate(occ(r.values)),
              [5]: (r) => {
                const {
                  dataType: t,
                  sca: v,
                  Tba: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 5, itemType: t },
                  "list",
                  c.array(v),
                  (C) => d.array(C.map(w)),
                  (C, B, D) =>
                    D.value.toArray().map((I, L) => z(C, B.IR(L), I)),
                  (C, B, D) => ({
                    type: "list",
                    value: D.map((I, L) => A(C, B.IR(L), I)),
                  })
                );
              },
              [6]: (r) => {
                const {
                  dataType: t,
                  sca: v,
                  Tba: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 6, itemType: t },
                  "dict",
                  c.map(c.string, v),
                  (C) => d.map(Tc(C, w)),
                  (C, B, D) => Tc(D.value.xl(), (I, L) => z(C, B.H6(L), I)),
                  (C, B, D) => ({
                    type: "dict",
                    value: Tc(D, (I, L) => A(C, B.H6(L), I)),
                  })
                );
              },
              [7]: (r) => l[r.name],
              [8]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 8, itemType: t },
                  "list",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    Aac(
                      C.value,
                      (B) => w(z, A.IR("*"), B),
                      pcc(v, z, A.IR("*"))
                    ),
                  (z, A, C) => ({
                    type: "list",
                    value: C.map((B, D) => w(z, A.IR(D), B)),
                  })
                );
              },
              [9]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 9, itemType: t },
                  "dict",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    fcc(
                      C.value,
                      (B) => w(z, A.H6("*"), B),
                      pcc(v, z, A.IR("*"))
                    ),
                  (z, A, C) => ({
                    type: "dict",
                    value: Tc(C, (B, D) => w(z, A.H6(D), B)),
                  })
                );
              },
              [10]: (r) => {
                const { decode: t, encode: v } = p.b2a(r.fields);
                return e.of(
                  { kind: 10, fields: r.fields },
                  "dict",
                  c.undefined,
                  () => {},
                  t,
                  v
                );
              },
              [11]: (r) => {
                function t(I, L, N, P) {
                  N = N.get(P);
                  if (N == null)
                    throw I.error(
                      L,
                      `unknown case for discriminator value: ${P}`
                    );
                  return N;
                }
                const v = r.aWa;
                r = r.qg;
                var w = Object.keys(v);
                u(w.length >= 1, "missing discriminator props");
                u(w.length <= 1, "too many discriminator props: {}", w);
                const z = w[0];
                u(r.length >= 1, "discriminated union has no cases");
                w = new Map();
                for (const I of r) {
                  const L = I.fields[z].type.values,
                    N = b(I);
                  for (const P of L)
                    u(
                      !w.has(P),
                      "discriminator values are not unique across cases: {}",
                      P
                    ),
                      w.set(P, N);
                }
                const { decode: A, encode: C } = b({
                    kind: 4,
                    values: new Set(w.keys()),
                  }),
                  B = Tc(w, (I) => I.decode),
                  D = Tc(w, (I) => I.encode);
                return e.of(
                  { kind: 11, aWa: v, qg: r },
                  "dict",
                  c.undefined,
                  () => {},
                  (I, L, N) => {
                    var P = L0(I, L, "k", N.value.get("k"));
                    N = L0(I, L, "v", N.value.get("v"));
                    qcc(I, L, "dict", N);
                    P = A(I, L, P);
                    return t(I, L, B, P)(I, L, N);
                  },
                  (I, L, N) => {
                    const P = N[z],
                      R = t(I, L, D, P);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", C(I, L, P)],
                        ["v", R(I, L, N)],
                      ]),
                    };
                  }
                );
              },
            },
            n = Symbol("$impl");
          class p {
            static b2a(r) {
              r = ne(r, (w) => q.of(w));
              const t = ne(r, (w) => w.FMb()),
                v = Object.entries(r);
              return {
                cL: new Map(v.map(([, w]) => w.AMb())),
                GMb: (w) => {
                  const z = w[n];
                  return new Map(v.map(([, A]) => A.HMb(z)));
                },
                decode: (w, z, A) => {
                  const C = Object.create(null, t);
                  Object.defineProperty(C, n, {
                    enumerable: !1,
                    writable: !1,
                    value: new p(w, z, A.value),
                  });
                  return C;
                },
                encode: (w, z, A) => {
                  const C = v.map(([B, D]) => D.encode(w, z, A[B]));
                  return { type: "dict", value: new Map(C.filter(__c.pb)) };
                },
              };
            }
            AAa(r, t) {
              const v = L0(this.e, this.p, t, this.data.get(t));
              return N0(this.DXa, r.decode, this.e, this.p.NL(t), v);
            }
            xAa(r, t) {
              const v = this.data.get(t);
              if (v != null)
                return N0(this.DXa, r.decode, this.e, this.p.NL(t), v);
            }
            Hab(r, t, v) {
              this.data.set(t, r.encode(this.e, this.p.NL(t), v));
            }
            Aab(r, t, v) {
              v != null
                ? this.data.set(t, r.encode(this.e, this.p.NL(t), v))
                : this.data.delete(t);
            }
            constructor(r, t, v) {
              this.e = r;
              this.p = t;
              this.data = v;
              this.DXa = new WeakMap();
              this.YRa = new Map();
              this.bvb = rcc(this.YRa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.AAa(z, w);
                  },
                  set(C) {
                    A.Hab(z, w, C);
                  },
                };
              });
              this.Qub = rcc(this.YRa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.xAa(z, w);
                  },
                  set(C) {
                    A.Aab(z, w, C);
                  },
                };
              });
            }
          }
          class q {
            static of(r) {
              return new q(r, b(r.type));
            }
            AMb() {
              const r = this.key,
                t = this.Fb,
                v = this.type;
              switch (t.iF) {
                case 0:
                  return [r, v.sca];
                case 1:
                  return [r, c.optional(v.sca)];
                default:
                  throw new E(t.iF);
              }
            }
            HMb(r) {
              const t = this.key,
                v = this.Fb,
                w = this.type;
              switch (v.iF) {
                case 0:
                  return [t, () => w.Tba(r.AAa(w, t))];
                case 1:
                  return [
                    t,
                    () => {
                      const z = r.xAa(w, t);
                      return z != null ? w.Tba(z) : void 0;
                    },
                  ];
                default:
                  throw new E(v.iF);
              }
            }
            FMb() {
              const r = this.key;
              var t = this.Fb;
              const v = this.type;
              if (Fac(v.dataType) && t.JJa === 1) {
                switch (t.iF) {
                  case 0:
                    t = function () {
                      return this[n].bvb(r, v);
                    };
                    break;
                  case 1:
                    t = function () {
                      return this[n].Qub(r, v);
                    };
                    break;
                  default:
                    throw new E(t.iF);
                }
                return { enumerable: !0, get: t };
              }
              let w;
              switch (t.iF) {
                case 0:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].AAa(v, r);
                    },
                    set(z) {
                      this[n].Hab(v, r, z);
                    },
                  };
                  break;
                case 1:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].xAa(v, r);
                    },
                    set(z) {
                      this[n].Aab(v, r, z);
                    },
                  };
                  break;
                default:
                  throw new E(t.iF);
              }
              switch (t.JJa) {
                case 0:
                  w.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new E(t.JJa);
              }
              return w;
            }
            encode(r, t, v) {
              const w = this.key,
                z = this.Fb,
                A = this.type;
              switch (z.iF) {
                case 0:
                  return [w, A.encode(r, t.NL(w), L0(r, t, w, v))];
                case 1:
                  return v != null ? [w, A.encode(r, t.NL(w), v)] : void 0;
                default:
                  throw new E(z.iF);
              }
            }
            constructor(r, t) {
              this.Fb = r;
              this.type = t;
              r = r.key;
              u(r > 0 && Number.isInteger(r));
              if (r <= 52)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  r - 1
                ];
              else {
                for (t = ""; r > 0; )
                  r--,
                    (t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        r % 52
                      ] + t),
                    (r = Math.floor(r / 52));
                r = t;
              }
              this.key = r;
            }
          }
          return (r, t) => {
            const v = new scc(r),
              w = new tcc(),
              { cL: z, GMb: A, decode: C, encode: B } = p.b2a(t);
            return {
              cL: z,
              decode: (D) => {
                D = C(v, w, { type: "dict", value: D });
                return { gIa: A(D), data: D };
              },
              encode: (D) => B(v, w, D).value,
            };
          };
        };
        rcc = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        pcc = function (a, b, c) {
          const d = new WeakMap();
          return (e) => N0(d, a, b, c, e);
        };
        N0 = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        hcc = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        kcc = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        jcc = function (a, b) {
          var c = vcc();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        qcc = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        icc = function (a) {
          return typeof a === "string"
            ? (b, c, d) => qcc(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        vcc = function () {
          return (a, b, c) => {
            if (typeof c.value !== wcc[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        occ = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        mcc = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            u(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        lcc = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        M0 = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${xcc[a]} resource type, got ${xcc[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        O0 = function (a) {
          return typeof a === "function";
        };
        zcc = function (a) {
          return { get: () => a, set: ycc };
        };
        Acc = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        Bcc = function (a, b) {
          return () => b(ne(a, (c) => c()));
        };
        Dcc = function (a) {
          u(a.length === 1);
          let b;
          return (c) => {
            if (b != null && Ccc(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        Ccc = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        Fcc = function (a) {
          var b = Ecc;
          return {
            N2: b({
              Bp: a.N2,
              args: {},
              se: {
                U: { image: void 0, video: void 0, Qa: void 0 },
                attributes: {
                  Tl: void 0,
                  color: void 0,
                  xa: void 0,
                  locked: void 0,
                  kg: void 0,
                  Sk: void 0,
                  Vc: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            tsa: b({
              Bp: a.tsa,
              args: {},
              se: {
                U: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Oc: void 0,
                  qe: void 0,
                },
              },
            }),
            RV: b({
              Bp: a.RV,
              args: { d: void 0 },
              se: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { N: void 0 },
              },
            }),
            S2: b({
              Bp: a.S2,
              args: {},
              se: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { ...P0, N: void 0 },
              },
            }),
            nsa: b({
              Bp: a.nsa,
              args: {},
              se: {
                U: {
                  ub: void 0,
                  resizeMode: void 0,
                  slice: void 0,
                  fb: void 0,
                },
                attributes: { ...P0, Jj: void 0, viewBox: void 0 },
              },
            }),
            tda: b({
              Bp: a.tda,
              args: {},
              se: {
                U: { text: void 0 },
                attributes: {
                  ...P0,
                  hA: void 0,
                  Ch: void 0,
                  Ja: void 0,
                  J: void 0,
                  P: void 0,
                  Mf: void 0,
                },
              },
            }),
            uOa: b({
              Bp: a.uOa,
              args: { url: void 0, J: void 0, P: void 0 },
              se: { U: {}, attributes: P0 },
            }),
          };
        };
        Q0 = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        Kcc = function () {
          return Fcc({
            N2: Q0(R0, (a) => zd(__c.HN, a)),
            tsa: Q0(Gcc, (a) => zd(__c.Mz, a)),
            RV: Q0(Hcc, (a) => zd(__c.AR, a)),
            S2: Q0(S0, (a) => zd(__c.vA, { ...a, id: xD.generate() })),
            nsa: Q0(T0, (a) =>
              zd(__c.wA, {
                ...a,
                fb: [],
                viewBox: { top: 0, left: 0, width: 1, height: 1 },
                id: xD.generate(),
              })
            ),
            tda: Q0(Icc, (a) => zd(__c.xA, { ...a, id: xD.generate() })),
            uOa: Q0(Jcc, (a) => zd(__c.yA, { ...a, id: xD.generate() })),
          });
        };
        Occ = function () {
          return new Lcc({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.HN.create({ ...R0, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Oc: b.array(b.number),
                  qe: b.Yg,
                },
                (c) =>
                  __c.Mz.create({
                    ...Gcc,
                    color: c.color,
                    weight: c.weight,
                    Oc: c.Oc.items,
                    qe: c.qe,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  Gtb: b.array(
                    b.Ub({ tb: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.Gtb;
                  const d = __c.Lk.Db();
                  c.items.forEach((e) => {
                    const f = e.fields.tb;
                    d.attrs(__c.Of(e.fields.attrs.items));
                    d.tb(f);
                  });
                  return __c.Lk.create(d.build());
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.AR.create({ ...Hcc, d: c.d, fill: R0 });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: Mcc(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  N: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.vA.create({
                      ...S0,
                      id: xD.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? S0.rotation,
                      fill: R0,
                      N: c.N?.items ?? S0.N,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: Mcc(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  xa: b.union(b.number, b.undefined),
                  viewBox: b.Ub({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  fb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.wA.create({
                    ...T0,
                    id: xD.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? T0.rotation,
                    xa: c.xa ?? T0.xa,
                    fb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    fb: {
                      value: new Ncc(
                        c.fb.items.map((e) => U0(() => e.instance))
                      ),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        Mcc = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        abc = function (a, b, c) {
          return ne(b, (d) => (...e) => {
            const {
              data: f,
              O: { width: g, height: h },
            } = d(...e);
            e = c.G.encode(f.G);
            const k =
              c.document.cL.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Hc: { ...__c.FCb, app: { id: a, version: 1 } },
              mXb: k,
              Ld: e,
              Oe: { width: g, height: h },
            };
          });
        };
        Qcc = function (a, b) {
          return class extends Pcc {
            componentDidCatch(c) {
              a.error(c);
              this.setState({ hasError: !0 });
            }
            render() {
              return this.state.hasError
                ? O_(__c.nw, {
                    background: "criticalLow",
                    width: "full",
                    height: "full",
                    padding: "0.25u",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    role: "alert",
                    children: O_(__c.kw, {
                      size: "xsmall",
                      alignment: "center",
                      children: __c.K("Q6XSow"),
                    }),
                  })
                : O_(b, { ...this.props });
            }
            constructor(...c) {
              super(...c);
              this.state = { hasError: !1 };
            }
          };
        };
        jbc = function (a, b, c) {
          const d = c.G,
            e = (c = c.Y4) ? new Rcc(c) : void 0;
          c = e ? (f) => e.Pc(f.G) : void 0;
          switch (d.type) {
            case 0:
              a = Scc(a, d, b, c);
              break;
            case 1:
              a = Tcc(a, d, b, c);
              break;
            default:
              throw new E(d);
          }
          return { Wrb: a, LM: e };
        };
        kbc = function (a, b, c, d) {
          c = c.email;
          if (c != null) {
            var e = d ? (g) => d.Pc(g.G) : void 0,
              f = c.type;
            switch (f) {
              case 2:
                return Ucc(a, c, b, e);
              default:
                throw new E(f);
            }
          }
        };
        lbc = function (a, b) {
          return (c) => {
            if (b)
              return (
                (c = a.G.decode(c.G.Ld).data),
                {
                  type: b.type,
                  rba: typeof b.rba === "function" ? b.rba(c) : b.rba,
                  name: typeof b.name === "function" ? b.name(c) : b.name,
                }
              );
          };
        };
        Scc = function (a, b, c, d) {
          const e = b.Wx,
            { Kta: f, a5: g, dn: h, IHa: k } = Vcc(a, c);
          return typeof e === "object"
            ? ((b = a.I1.types),
              (b = b.nX(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              Wcc(
                a,
                f,
                h,
                b,
                e,
                (l) => new Xcc(() => l().map((m) => m.instance)),
                k
              ))
            : {
                type: 0,
                Wx: (l, m) => {
                  const { document: n, G: p } = h.decode(f(l)).data;
                  m = g(l, m);
                  l = d
                    ? { document: n, G: p, local: d(l) }
                    : { document: n, G: p, local: void 0 };
                  return e(l, m);
                },
                ola: V0(k),
                WR: W0(k),
                e0: X0(k),
              };
        };
        Tcc = function (a, b, c, d) {
          const e = b.Component,
            { Kta: f, a5: g, dn: h, IHa: k } = Vcc(a, c);
          return {
            type: 1,
            ola: V0(k),
            WR: W0(k),
            e0: X0(k),
            Component: Qcc(
              a.I,
              Y0(({ model: l, De: m, jSa: n }) => {
                n = Ycc(a.Ve, n);
                const [p] = Z0(() => {
                  const { document: q, G: r } = h.decode(f(l)).data;
                  return d
                    ? { document: q, G: r, local: d(l) }
                    : { document: q, G: r, local: void 0 };
                });
                m = g(l, m);
                return O_(e, { data: p, Ve: n, Ji: m });
              })
            ),
          };
        };
        Ucc = function (a, b, c, d) {
          const e = b.Component,
            { Kta: f, a5: g, dn: h, IHa: k } = Vcc(a, c);
          return {
            type: 2,
            ola: V0(k),
            WR: W0(k),
            e0: X0(k),
            Component: Qcc(
              a.I,
              Y0(({ model: l, De: m, scale: n }) => {
                const p = Zcc(a.brb, n),
                  [q] = Z0(() => {
                    const { document: r, G: t } = h.decode(f(l)).data;
                    return d
                      ? { document: r, G: t, local: d(l) }
                      : { document: r, G: t, local: void 0 };
                  });
                m = g(l, m);
                return O_(e, { data: q, Ve: p, scale: n, Ji: m });
              })
            ),
          };
        };
        Vcc = function (a, b) {
          return {
            Kta: (c) => ({ document: $cc(a, c), G: c.G.Ld }),
            a5: (c, d) => a.pQb.a5(c, d),
            dn: rbc(b),
            IHa: new adc(),
          };
        };
        Wcc = function (a, b, c, d, e, f, g) {
          const h = a.zwa(a.I1, c, d).compile(e);
          return {
            type: 0,
            Wx: (k) => ({ Ma: f(h(b(k))) }),
            ola: V0(g),
            WR: W0(g),
            e0: X0(g),
          };
        };
        $cc = function (a, b) {
          return (
            a.Da.Dm.first(
              (c) =>
                c.app.id === b.G.Hc.app.id &&
                c.app.version === b.G.Hc.app.version
            )?.data ?? __c.OR.create(new Map())
          );
        };
        bdc = function (a, b) {
          return a.ZT.get(b.G.Hc.app.id)?.YBb(b);
        };
        V0 = function (a) {
          return $0((b) => {
            if ((b = a.get(b.G)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.Cia())
                .reduce(
                  (c, d) => ({
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  { width: -Infinity, height: -Infinity }
                );
          });
        };
        W0 = function (a) {
          return $0((b) =>
            (b = a.get(b.G)) && b.size !== 0
              ? Array.from(b).flatMap((c) => c.WR())
              : []
          );
        };
        X0 = function (a) {
          return (b, c) => {
            a.add(b.G, c);
            return () => a.remove(b.G, c);
          };
        };
        Vac = function (a) {
          return { cL: a.cL, decode: cdc(a.decode), encode: a.encode };
        };
        cdc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        gdc = function (a) {
          var b = a.ora;
          const c = a.tQb,
            d = a.qQb,
            e = a.Iwa,
            f = a.I1,
            g = a.I,
            h = a.Da,
            k = a.S9a,
            l = a.u8a;
          a = new ddc(a.Bn, h);
          const m = new edc(h, b, f, e, g, a, c, d);
          b = new fdc();
          k && k.W9b((n) => bdc(m, n));
          l && l((n) => bdc(m, n));
          return { Sca: m, CC: m, expr: b };
        };
        idc = function (a, b) {
          if (!a) return "Arial, Helvetica, sans-serif";
          const c = __c.hr(a);
          a = b.find((d) => d.id === c.id && d.version === c.version);
          switch (a?.name) {
            case "Arimo":
            case "Arial":
              return "Arial, Helvetica, sans-serif";
            case "Helvetica":
            case "Helvetica Now":
              return "Helvetica, Arial, sans-serif";
            case "Times New Roman MT":
            case "Times New Roman":
              return '"Times New Roman", Times, serif';
            case "Tahoma":
              return "Tahoma, Geneva, sans-serif";
            case "Trebuchet MS":
              return '"Trebuchet MS", Helvetica, sans-serif';
            case "Lucida Console":
              return '"Lucida Console", Monaco, monospace';
            case "Comic Sans":
              return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
            case "Courier New OS":
            case "Courier New":
              return '"Courier New", monospace';
            case "Georgia Pro":
            case "Georgia":
              return "Georgia, serif";
            case "Verdana Pro":
            case "Verdana":
              return "Verdana, Geneva, sans-serif";
            default:
              return a?.name
                ? `${hdc(a.name)}, ${"Arial, Helvetica, sans-serif"}`
                : "Arial, Helvetica, sans-serif";
          }
        };
        hdc = function (a) {
          a = a.replace(/["']/g, "");
          return /[\s,]/.test(a) ? `"${a}"` : a;
        };
        kdc = function () {
          ({ yh: a } = { yh: [] });
          var a;
          return ({ text: b }) => {
            const c = jdc(b, a);
            return O_("span", {
              style: {
                ...c,
                display: "table-cell",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                boxSizing: "border-box",
              },
              children: b.V,
            });
          };
        };
        jdc = function (a, b) {
          var c = (q) => [...a.bi(q)[q]].values().next().value ?? __c.Mf.Qb[q],
            d = c("font-family");
          b = idc(d, b);
          d = c("font-size");
          var e = c("color"),
            f = c("font-weight"),
            g = c("font-style"),
            h = c("decoration"),
            k = c("strikethrough"),
            l = c("direction"),
            m = c("text-align"),
            n = c("leading");
          c = c("tracking");
          const p = [];
          h === "underline" && p.push("underline");
          k === "strikethrough" && p.push("line-through");
          h = p.length > 0 ? p.join(" ") : "none";
          return {
            color: e,
            fontSize: `${d}px`,
            fontWeight: f,
            fontFamily: b,
            fontStyle: g === "italic" ? "italic" : "normal",
            textDecoration: h,
            direction: l,
            textAlign: ldc(l, m),
            lineHeight: `${mdc(n)}em`,
            letterSpacing: `${mdc(c)}em`,
          };
        };
        ldc = function (a, b) {
          const c = {
            start: "left",
            center: "center",
            end: "right",
            justify: "justify",
          };
          if (a !== "rtl") return c[b];
          switch (b) {
            case "start":
              return "end";
            case "end":
              return "start";
            default:
              return c[b];
          }
        };
        mdc = function (a) {
          if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
          return a / 1e3;
        };
        ndc = function (a) {
          a.CP && (a.CP(), (a.CP = null));
          const b = a.props.xqb;
          b.forEach((c) => {
            window.addEventListener(c, a.JPa);
          });
          a.CP = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.JPa);
            });
          };
        };
        rdc = function (a) {
          const b = M_(function (c) {
            const [{ store: d, Ga: e }] = Z0(() => {
              const f = new odc(),
                g = new pdc(f);
              return { store: f, Ga: g };
            });
            return O_(qdc, {
              U9: e.reset,
              children: O_(__c.TVb, {
                Fxb: e,
                Gxb: d,
                J0a: a.Ep.contains(c.url),
                children: ({ Fi: f }) => c.children({ Fi: f }),
              }),
            });
          });
          return M_((c) =>
            c.Ylb && a.Ua?.status !== 2
              ? O_(b, { ...c })
              : c.children({ Fi: !1 })
          );
        };
        sdc = function (a) {
          return Y0(function (b) {
            return O_("div", {
              className: "gcYy_A",
              children: O_(__c.Ww, {
                m6: "both",
                children: ({ width: c, height: d }) =>
                  O_(a.fj, {
                    fill: b.fill,
                    Mb: c,
                    rc: d,
                    ge: void 0,
                    animation: void 0,
                    EF: !1,
                    ba: void 0,
                    ia: void 0,
                  }),
              }),
            });
          });
        };
        udc = function (a) {
          const b = a.Sa,
            c = a.uia,
            d = (e) => {
              e = __c.hr(e);
              b.WD([e], { Rp: !0 });
              return __c.zr(b, e);
            };
          return Y0(function (e) {
            var f = e.Hza;
            const g = e.fontWeight,
              h = e.Cua,
              k = e.Jc,
              l = e.Ekb,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.inputMode,
              v = e.onBlur,
              w = e.onFocus,
              z = e.onChange,
              A = e.placeholder,
              C = e.i7a,
              B = e.readOnly,
              D = e.type,
              I = e.value;
            e = {
              color: e.Mi,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.nr(g),
            };
            [f] = Z0(() => c?.pvb());
            return O_("div", {
              ref: f?.um,
              className: "BHOPhg",
              children: O_("input", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: tdc(n, ["_6Yde8g", C && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                inputMode: t,
                onBlur: v,
                onFocus: w,
                onChange: z,
                placeholder: A,
                readOnly: B,
                type: D,
                value: I,
                style: {
                  ...e,
                  "--srRiKA": C,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.ug,
                  "--UBd2ow": h?.focus,
                },
              }),
            });
          });
        };
        vdc = function () {
          return () => O_(__c.lV, { mediaType: "embed", failed: !1 });
        };
        wdc = function (a) {
          return Y0(function (b) {
            return O_("div", {
              className: "oUJNhQ",
              children: O_(a.We, {
                text: b.text,
                animation: void 0,
                fd: "middle",
                la: void 0,
                bb: void 0,
                hf: [],
                writingMode: 1,
              }),
            });
          });
        };
        xdc = function (a) {
          const b = a.Sa,
            c = a.uia,
            d = (e) => {
              e = __c.hr(e);
              b.WD([e], { Rp: !0 });
              return __c.zr(b, e);
            };
          return Y0(function (e) {
            var f = e.Hza;
            const g = e.fontWeight,
              h = e.Cua,
              k = e.Jc,
              l = e.Ekb,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.onBlur,
              v = e.onFocus,
              w = e.onChange,
              z = e.placeholder,
              A = e.i7a,
              C = e.readOnly,
              B = e.rows,
              D = e.value;
            e = {
              color: e.Mi,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.nr(g),
            };
            [f] = Z0(() => c?.pvb());
            return O_("div", {
              ref: f?.um,
              className: "BHOPhg",
              children: O_("textarea", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: tdc(n, ["_6Yde8g", A && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                onBlur: t,
                onFocus: v,
                onChange: w,
                placeholder: z,
                rows: B,
                readOnly: C,
                style: {
                  ...e,
                  "--srRiKA": A,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.ug,
                  "--UBd2ow": h?.focus,
                },
                value: D,
              }),
            });
          });
        };
        __c.Cc.prototype.MQ = __c.ea(3, function (a, b) {
          this.console.error(...__c.Bc(this, "critical", a, b));
        });
        __c.jI.prototype.MQ = __c.ea(2, function (a, b) {
          this.Nv.MQ(a, b);
          __c.hI(this, a, "critical", b);
        });
        var ydc = class {
            constructor(a) {
              this.ref = a;
            }
          },
          zdc = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          Adc = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          O_ = __webpack_require__(405148).jsx;
        var M_ = __webpack_require__(371201).PA;
        var a1 = __webpack_require__(227200),
          Bdc = a1.Component,
          Y0 = a1.memo,
          Pcc = a1.PureComponent,
          N_ = a1.useCallback,
          Z0 = a1.useState;
        var b1 = __webpack_require__(186901),
          U0 = b1.EW,
          Cdc = b1.fm,
          Ddc = b1.h5,
          Edc = b1.m3,
          c0 = b1.mJ,
          c1 = b1.sH,
          d1 = b1.XI;
        var $0 = __webpack_require__(536618).iB;
        var Fdc = __webpack_require__,
          Gdc = Fdc(208463),
          tdc = Fdc.n_x(Gdc)();
        var F_ = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.gHb = a.message;
            Object.setPrototypeOf(this, F_.prototype);
          }
        };
        var Hdc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.I = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Aa)();
              } catch (e) {
                return this.I.Nb(e), Ba(e);
              }
            };
            this.hEb = (d) => {
              this.I.Nb(d);
            };
            this.hFa = ({ data: d }) => {
              if (d)
                try {
                  this.handler.mHb(d);
                } catch (e) {
                  this.I.Nb(e);
                }
              else
                this.I.error(
                  new F_({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.hFa;
            this.port.onmessageerror = this.hEb;
          }
        };
        var L$b = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          R$b = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.$d);
              this.jIb(a);
            }
            reject(a) {
              clearTimeout(this.$d);
              this.z8a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.$d);
              this.$d = setTimeout(() => {
                M$b(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.jIb = b;
                this.z8a = c;
              });
              this.setTimeout();
            }
          };
        var Idc = class {
          request(a, b) {
            const c = this.Y6a,
              d = new R$b(5e3),
              e = this.YHb(),
              f = (async function () {
                c.set(e, { path: a, $Hb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.Aa)(g);
                } catch (g) {
                  return g instanceof L$b
                    ? Ba(
                        new F_({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ba(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.I.Nb(b.error, {
                Be: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.I = b;
            this.YHb = __c.dr;
            this.Y6a = new Map();
          }
        };
        var Jdc = class {
          handle(a, b) {
            if (this.l0.has(a))
              throw new F_({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.l0.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.w9 = a;
            this.I = b;
            this.WHb = !0;
            this.Rpb = c;
            this.l0 = new Map();
            this.$rb = new Set();
          }
        };
        var L_ = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.l0.handle(c, d);
              a = new Kdc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, $Hb: h } = d.Y6a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.I.t3({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new F_({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new E(c);
                        }
                      else
                        f !== "ack" &&
                          d.I.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      O$b(this.l0, c);
                      break;
                    default:
                      throw new E(c);
                  }
                },
                a,
                b.Vf("bus")
              );
              this.client = new Idc(a.aC, b.Vf("client"));
              this.l0 = new Jdc(a, b.Vf("requestHandler"));
            }
          },
          Kdc = class {
            constructor(a, b, c) {
              this.Zia = a;
              this.aC = (d, e, f) =>
                this.c4.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.sEb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Zia({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Zia({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Zia({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Zia({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new E(d);
                }
              };
              this.c4 = new Hdc({ mHb: this.sEb }, b, c);
            }
          };
        var P$b = { UMa: "null", U9a: "*" };
        var T$b =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var U$b = H(() => ({}));
        var Ldc = H(() => ({ oga: W(1), wd: W(2) }));
        var V$b = H(
          () => ({
            Ij: X("documentId", 1),
            Ul: X("elementId", 2),
            iQb: G("websiteContext", 3, Ldc),
            xCa: __c.Y("isPreview", 4),
          }),
          { Vk: 0 }
        );
        var W$b = H(() => ({}));
        var X$b = H(() => ({}));
        var d0 = H(
          () => ({
            textContent: X("textContent", 1),
            backgroundColor: X("backgroundColor", 2),
          }),
          { Vk: 0 }
        );
        var Z$b = H(() => ({ config: (0, __c.XI)("config", 1, d0) }), {
          Vk: 0,
        });
        var $$b = H(() => ({}));
        var bac = H(() => ({ Nya: X("entityId", 1) }), { Vk: 0 });
        var cac = H(() => ({}));
        var dac = H(
          () => ({ Nya: W("entityId", 1), textContent: W("textContent", 2) }),
          { Vk: 0 }
        );
        var eac = H(() => ({}));
        var uac = class {
          constructor(a) {
            this.kA = a;
          }
        };
        var a0 = H(
          () => ({
            type: __c.F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
            id: W("id", 1),
            url: W("url", 4),
          }),
          { Vk: 0 }
        );
        var gac = H(
          () => ({ config: X("config", 1), C6: G("fontEditable", 2, a0) }),
          { Vk: 0 }
        );
        var e1 = H(
          () => ({
            type: __c.F("type", "RECOLORABLE", 1, "RECOLORABLE"),
            id: W("id", 1),
            value: W("value", 2),
          }),
          { Vk: 0 }
        );
        var Mdc = H(
          () => ({
            borderRadius: LI("borderRadius", 1),
            borderWidth: LI("borderWidth", 2),
          }),
          { Vk: 0 }
        );
        var Ndc = H(
          () => ({
            type: __c.F("type", "BORDERABLE", 2, "BORDERABLE"),
            id: W("id", 1),
            value: __c.Na("value", 2, Mdc),
          }),
          { Vk: 0 }
        );
        var Odc = H(() => ({ id: W("id", 1), value: W("value", 2) }), {
          Vk: 0,
        });
        var f1 = H(
          () => ({
            type: __c.F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
            size: LI("size", 21),
          }),
          { Vk: 0 }
        );
        var hac = H(
          () => ({
            config: W("config", 1),
            b0: Oa("recolorables", 4, e1),
            Glb: Oa("borderables", 5, Ndc),
            Pqb: Oa("editPanelValues", 6, Odc),
            DH: G("fontSizeable", 7, f1),
            C6: G("fontEditable", 8, a0),
          }),
          { Vk: 0 }
        );
        var iac = __c.$a(
          () => ({ type: [1, e1, 2, Ndc, 3, a0, 5, f1] }),
          () => ({}),
          { Vk: 0 }
        );
        var jac = H(() => ({ config: W("config", 1) }), { Vk: 0 });
        var kac = H(() => ({ id: W(1), value: W(2) }));
        var lac = H(() => ({ config: W(1) }));
        var nac = H(
          () => ({
            config: W("config", 1),
            b0: Oa("recolorables", 4, e1),
            Glb: Oa("borderables", 5, Ndc),
            C6: G("fontEditable", 6, a0),
            Pqb: Oa("editPanelValues", 7, Odc),
            DH: G("fontSizeable", 8, f1),
          }),
          { Vk: 0 }
        );
        var oac = H(() => ({}));
        var Pdc = H(
          () => ({
            scrollWidth: LI("scrollWidth", 1),
            scrollHeight: LI("scrollHeight", 2),
            offsetWidth: LI("offsetWidth", 3),
            offsetHeight: LI("offsetHeight", 4),
          }),
          { Vk: 0 }
        );
        var pac = H(() => ({ body: __c.Na("body", 1, Pdc) }), { Vk: 0 });
        var sac = class {
          constructor(a) {
            this.kA = a;
          }
        };
        var wac = class {
          constructor(a) {
            this.I = a;
            this.tnb = (b, c, d) => {
              b.addEventListener("load", async () => {
                tac(b, this.I).then(({ kA: e, Uqb: f }) => {
                  ({ Vqb: f } = c(f));
                  qac(e, f);
                });
                rac(b, this.I).then(({ kA: e }) => {
                  const { gpb: f } = d();
                  Y$b(e, f);
                });
              });
            };
            this.snb = (b, c) => {
              b.addEventListener("load", async () => {
                const { kA: d, emitter: e } = await vac(b, this.I),
                  f = c(e);
                fac(d, f);
              });
            };
          }
        };
        var Qdc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          xl() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            P_();
          },
          previous() {
            P_();
          },
          Ne() {
            P_();
          },
          kw() {
            P_();
          },
          has() {
            return !1;
          },
          Ip() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var Rdc;
        Rdc = Symbol.iterator;
        var Xcc = class {
          static D(a) {
            M(a, { Lm: U0, Yq: U0 });
          }
          get Lm() {
            return this.Ikb().map((a) => {
              let b = this.j_a.get(a);
              b == null && ((b = `${this.ywb++}`), this.j_a.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Yq() {
            const a = new Map();
            this.Lm.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          wk(a) {
            return y(this.Yq.get(a), "ref not found");
          }
          get empty() {
            return !this.Lm.length;
          }
          count() {
            return this.Lm.length;
          }
          toArray() {
            return this.Lm.map((a) => a.ref);
          }
          xl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get ER() {
            return this.Lm[0]?.ref;
          }
          get JS() {
            return this.Lm[this.Lm.length - 1]?.ref;
          }
          first(a) {
            return a ? this.Lm.find((b) => a(b.ref))?.ref : this.ER;
          }
          last(a) {
            if (!a) return this.JS;
            const b = this.Lm;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Lm;
            for (a = this.wk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.Lm;
            for (a = this.wk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ne(a, b) {
            a = this.Yq.get(a);
            b = this.Yq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          kw(a) {
            return this.Lm[this.wk(a)].id;
          }
          has(a) {
            return this.Yq.has(a);
          }
          Ip(a) {
            return new __c.iK(this, a);
          }
          map(a) {
            return this.Lm.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Lm.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Lm.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Lm.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Lm.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Lm.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Lm.every((b) => a(b.ref, b.id));
          }
          [Rdc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.Ikb = a;
            this.ywb = (Xcc.D(this), 0);
            this.j_a = new WeakMap();
          }
        };
        var Sdc;
        Sdc = Symbol.iterator;
        var zac = class {
          static D(a) {
            M(a, { h9: U0 });
          }
          get h9() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.ig(b), b));
            return a;
          }
          Eu(a) {
            return y(this.h9.get(a));
          }
          g_(a) {
            return a != null ? this.ig(a) : void 0;
          }
          get empty() {
            return this.base.empty;
          }
          count() {
            return this.base.count();
          }
          toArray() {
            return this.base.toArray().map(this.ig);
          }
          xl() {
            return Tc(this.base.xl(), this.ig);
          }
          [Sdc]() {
            return this.toArray()[Symbol.iterator]();
          }
          first(a) {
            return this.g_(this.base.first(a && ((b) => a(this.ig(b)))));
          }
          last(a) {
            return this.g_(this.base.last(a && ((b) => a(this.ig(b)))));
          }
          next(a, b) {
            return this.g_(
              this.base.next(this.Eu(a), b && ((c) => b(this.ig(c))))
            );
          }
          previous(a, b) {
            return this.g_(
              this.base.previous(this.Eu(a), b && ((c) => b(this.ig(c))))
            );
          }
          Ne(a, b) {
            return this.base.Ne(this.Eu(a), this.Eu(b));
          }
          kw(a) {
            return this.base.kw(this.Eu(a));
          }
          has(a) {
            return this.base.has(this.Eu(a));
          }
          set(a, b) {
            return this.ig(this.base.set(a, this.sI(b)));
          }
          replace(a, b) {
            return this.ig(this.base.replace(this.Eu(a), this.sI(b)));
          }
          append(a) {
            return this.ig(this.base.append(this.sI(a)));
          }
          prepend(a) {
            return this.ig(this.base.prepend(this.sI(a)));
          }
          aI(a, b) {
            return this.ig(this.base.aI(a && this.Eu(a), this.sI(b)));
          }
          insertBefore(a, b) {
            return this.ig(this.base.insertBefore(a && this.Eu(a), this.sI(b)));
          }
          qE(a, b) {
            return this.base.qE(a && this.Eu(a), b.map(this.sI)).map(this.ig);
          }
          delete(a) {
            this.base.delete(this.Eu(a));
          }
          rA(a) {
            this.base.rA(a && ((b) => a(this.ig(b))));
          }
          er(a, b) {
            this.base.er(a && this.Eu(a), this.Eu(b));
          }
          Ip(a) {
            return new __c.iK(this, a);
          }
          map(a) {
            return this.base.map((b, c) => a(this.ig(b), c));
          }
          flatMap(a) {
            return this.base.flatMap((b, c) => a(this.ig(b), c));
          }
          filter(a) {
            return this.base.filter((b, c) => a(this.ig(b), c)).map(this.ig);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.ig(b), c));
          }
          reduce(a, b) {
            return this.base.reduce((c, d) => a(c, this.ig(d)), b);
          }
          some(a) {
            return this.base.some((b) => a(this.ig(b)));
          }
          every(a) {
            return this.base.every((b) => a(this.ig(b)));
          }
          constructor(a, b, c) {
            this.base = a;
            this.sI = b;
            this.ig = c;
            zac.D(this);
          }
        };
        var Tdc,
          Udc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        Tdc = Symbol.iterator;
        var Ncc = class {
          static D(a) {
            M(a, { Yq: U0, ER: U0, JS: U0 });
          }
          get Yq() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          wk(a) {
            return y(this.Yq.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          xl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get ER() {
            return this.cells[0]?.value;
          }
          get JS() {
            return this.cells[this.cells.length - 1]?.value;
          }
          first(a) {
            return a ? this.cells.find((b) => a(b.value))?.value : this.ER;
          }
          last(a) {
            if (!a) return this.JS;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.wk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.wk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          Ne(a, b) {
            a = this.Yq.get(a);
            b = this.Yq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          kw(a) {
            return this.cells[this.wk(a)].id;
          }
          has(a) {
            return this.Yq.has(a);
          }
          Ip(a) {
            return new __c.iK(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [Tdc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (Ncc.D(this), void 0);
            this.cells = a.map((b, c) => new Udc(String(c), b));
          }
        };
        var dbc = __c.Q_()(() => ({
            KVb({ SK: a, Clb: b, version: c }, d, e) {
              e = e && {
                fonts: R_("font", e.fonts),
                media: R_("media", e.media),
                vd: R_("video", e.vd),
                embeds: R_("embed", e.embeds),
              };
              return {
                data: {
                  G: {
                    SK: a,
                    $r: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: e,
                      },
                    },
                    type: "instance",
                    se: void 0,
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Vdc = ({ resource: a, eD: b }) => {
            const c = Cdc(() => {
              K$b(b, a.ref.ref);
            });
            return {
              Ma: new Xcc(() => {
                const d = I$b(b, a.ref.ref);
                return d
                  ? (__c.x(d.type === "group", "Expected group element"),
                    d.Ma.filter(__c.pb).map((e) =>
                      __c.UG.create({ ...e, locked: !0, kg: !0 })
                    ))
                  : [];
              }),
              Ym: c,
            };
          },
          Wdc = __c.E_()(({ Wh: { eD: a } }) => ({
            metadata: { type: "blueprint", name: __c.K("iAtEVw") },
            G: {
              type: 0,
              Wx: ({ G: b }) => Vdc({ resource: b.$r.resource, eD: a }),
            },
            exports: {},
          }));
        g1 = __c.g1 = class {};
        g1.val = (a, b) => Y_(0, 0, () => b)(a);
        g1.Ex = (a) => {
          var b = __c.Xdc;
          return Y_(1, 0, () => b)(a);
        };
        g1.ref = (a, b) => Y_(0, 0, () => b)(a);
        g1.WEb = () => {
          var a = __c.Xdc;
          return Y_(1, 1, () => a)(1);
        };
        g1.M5a = (a, b) => Y_(0, 1, () => b)(a);
        g1.Hpa = Y_(0, 0, S_);
        g1.sWa = Y_(0, 0, Cac);
        g1.hh = Y_(0, 0, U_);
        g1.vz = Y_(1, 0, S_);
        g1.TRa = Y_(1, 0, Bac);
        g1.oDa = Y_(1, 0, U_);
        g1.sE = Y_(1, 0, T_);
        g1.dRa = Y_(1, 0, Dac);
        g1.Bw = Y_(1, 1, S_);
        g1.Dma = Y_(1, 1, Bac);
        g1.Ty = Y_(1, 1, Cac);
        g1.$Eb = Y_(1, 1, T_);
        g1.WE = Y_(1, 1, U_);
        g1.VEb = Y_(1, 1, Dac);
        g1.Sm = Y_(0, 0, V_);
        g1.listRef = Y_(0, 0, W_);
        g1.SVa = Y_(0, 0, function (a) {
          return { kind: 9, itemType: a };
        });
        g1.oHa = Y_(0, 0, X_);
        g1.YOb = Y_(0, 0, Eac);
        g1.ZEb = Y_(0, 1, V_);
        g1.aFb = Y_(0, 1, X_);
        g1.Oua = Y_(1, 0, X_);
        g1.XEb = Y_(1, 1, V_);
        g1.YEb = Y_(1, 1, W_);
        g1.L5a = Y_(1, 1, X_);
        g1.ncb = S_;
        g1.Dxb = T_;
        g1.c8 = V_;
        g1.J1a = W_;
        g1.Pg = X_;
        g1.M1 = Eac;
        g1.TCb = Z_({});
        var Gac = Object.freeze({
          document: Object.freeze({}),
          G: Object.freeze({}),
        });
        var Wac = __c.$_({
          G: Z_({
            SK: g1.Hpa(1),
            $r: g1.oHa(2, {
              domain: g1.hh(1, "resource"),
              resource: g1.Oua(2, {
                ref: g1.Sm(2, "BlueprintRef"),
                resources: g1.aFb(3, {
                  fonts: g1.listRef(1, g1.c8("FontRef")),
                  media: g1.listRef(2, g1.c8("MediaRef")),
                  vd: g1.listRef(3, g1.c8("VideoRef")),
                  embeds: g1.listRef(5, g1.c8("EmbedRef")),
                }),
              }),
            }),
          }),
        });
        var mbc = { ah: dbc, co: Wdc, bh: Wac };
        var Ydc = class {
          constructor() {
            this.LX = { Zt: !1, IJ: !1, WG: !1, mH: !1 };
          }
        };
        var Zdc = class {
          create(a) {
            switch (a.type) {
              case "rect":
                return this.e.classes.S2.create(
                  {},
                  { U: { fill: Nac(this, a.fill) }, attributes: Pac(this, a) }
                );
              default:
                const b = __c.RR.snapshot(a);
                return __c.RR.create({
                  ...b,
                  locked: !0,
                  kg: !0,
                  Cg: Jac(this.W1a, a),
                });
            }
          }
          constructor(a, b) {
            this.e = a;
            this.se = b;
            this.W1a = new Ydc();
          }
        };
        var $dc = class {
          constructor(a) {
            this.se = a;
          }
        };
        var ebc = __c.Q_()(() => ({
            OVb({ SK: a, Clb: b, type: c }, d) {
              return {
                data: {
                  G: {
                    SK: a,
                    $r: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Fb:
                        c === "source"
                          ? { type: c }
                          : { type: c, se: new Map() },
                    },
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          aec = ({ data: a, LG: b, expr: c }) => {
            b = b.Ssb(a.SK);
            if (!b) throw Error(`Blueprint set ${a.SK} not found`);
            const d = b.Gi.get(a.$r.id);
            if (!d)
              throw Error(
                `Blueprint ${a.$r.id} not found in blueprint set ${a.SK}`
              );
            if (a.$r.Fb.type === "source") return { Ma: d.elements };
            const e = new Zdc(c, new $dc(a.$r.Fb.se));
            return { Ma: c.list(() => d.elements.map((f) => e.create(f))) };
          },
          bec = __c.E_()(({ xQ: { expr: a }, Wh: { LG: b } }) => ({
            metadata: { type: void 0, name: void 0 },
            G: { type: 0, Wx: ({ G: c }) => aec({ data: c, LG: b, expr: a }) },
            exports: {},
          }));
        var cec = g1.M1(
          { type: void 0 },
          g1.Pg({ type: g1.hh(1, "anchoring"), value: g1.oDa(2, 1, 2, 3) }),
          g1.Pg({ type: g1.hh(1, "boolean"), value: g1.Dma(2) }),
          g1.Pg({ type: g1.hh(1, "block_alignment"), value: g1.Ty(2) }),
          g1.Pg({ type: g1.hh(1, "non-negative-double"), value: g1.Ty(2) }),
          g1.Pg({ type: g1.hh(1, "double"), value: g1.Ty(2) }),
          g1.Pg({ type: g1.hh(1, "string"), value: g1.Bw(2) }),
          g1.Pg({ type: g1.hh(1, "richtext2"), value: g1.Sm(2, "Richtext2") }),
          g1.Pg({ type: g1.hh(1, "text_anchor"), value: g1.oDa(2, 1, 2, 3) }),
          g1.Pg({ type: g1.hh(1, "text_effects"), value: g1.Bw(2) }),
          g1.Pg({ type: g1.hh(1, "text_flow"), value: g1.Bw(2) }),
          g1.Pg({ type: g1.hh(1, "image_fill"), value: g1.Sm(2, "Fill") }),
          g1.Pg({ type: g1.hh(1, "video_fill"), value: g1.Sm(2, "Fill") })
        );
        var dec = g1.Pg({ type: g1.hh(1, "source") }),
          eec = g1.Pg({ type: g1.hh(1, "instance"), se: g1.SVa(2, cec) }),
          Xac = __c.$_({
            G: Z_({
              SK: g1.Hpa(1),
              $r: g1.oHa(2, {
                domain: g1.hh(1, "document"),
                id: g1.Hpa(2),
                version: g1.sE(3),
                Fb: g1.YOb(4, { type: void 0 }, dec, eec),
              }),
            }),
          });
        var nbc = { ah: ebc, co: bec, bh: Xac };
        var fec = class {
            static D(a) {
              M(a, { Ul: c1.ref });
            }
            constructor(a) {
              this.Ul = (fec.D(this), void 0);
              this.Ul = a;
            }
          },
          bbc = __c.Q_()(() => ({
            NVb(a, b) {
              return {
                data: {
                  G: {
                    Qva: { type: "embed", id: a, version: 0 },
                    YSa: b,
                    config: void 0,
                    Iza: void 0,
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          }));
        var gec = class {};
        var hec = class {
          static D(a) {
            M(a, { RRa: c1.ref });
          }
          get Oe() {
            return this.RRa;
          }
          constructor(a, b, c) {
            this.config = a;
            this.Sa = b;
            this.zC = c;
            this.An = (hec.D(this), void 0);
            this.Loa = (d, e) => {
              this.An?.();
              this.An = void 0;
              const f = (n) => K_(e, new e1(n)),
                g = this.Sa,
                h = g ? (n) => Sac(g, e, n) : void 0,
                k = (n) => mac(e, new kac(n)),
                l = (n) => K_(e, new f1({ size: n })),
                m = {
                  Uvb: (n) => {
                    this.config.mR?.FMa(
                      { ...n, DH: n.DH?.size },
                      d,
                      f,
                      h,
                      l,
                      k
                    );
                    return new oac();
                  },
                  Ovb: d1((n) => {
                    this.RRa = n.body;
                  }),
                };
              this.An = c0(
                () => d.config,
                async (n) => {
                  const p = await J_(e, { config: n, C6: void 0 });
                  p.config &&
                    p.config !== n &&
                    this.config.mR?.FMa(
                      { ...p, DH: p.DH?.size },
                      d,
                      f,
                      h,
                      l,
                      k
                    );
                }
              );
              this.An = c0(
                () => d.Iza.ref?.first(),
                async (n) => {
                  const p = d.config,
                    q = this.Sa;
                  n = await J_(e, {
                    config: p,
                    C6: q != null && n != null ? await b0(q, n) : void 0,
                  });
                  n.config &&
                    n.config !== p &&
                    this.config.mR?.FMa(
                      { ...n, DH: n.DH?.size },
                      d,
                      f,
                      h,
                      l,
                      k
                    );
                }
              );
              Tac(this, d, e, f, h, l, k);
              return { Vqb: m };
            };
            this.Koa = (d) => {
              const e = this.zC && new Ldc({ oga: this.zC.id, wd: this.zC.wd });
              return {
                gpb: {
                  Jvb: () =>
                    new V$b({ Ij: d.page?.container?.id, Ul: d.Ul, iQb: e }),
                  Nvb: () => new X$b(),
                },
              };
            };
            this.Ry = () => {
              this.An?.();
            };
          }
        };
        var Yac = __c.$_({
          G: Z_({
            Qva: g1.Sm(1, "EmbedRef"),
            YSa: g1.Hpa(35),
            config: g1.Bw(29),
            Iza: g1.YEb(6, g1.c8("FontRef")),
          }),
        });
        var iec = __c.E_()(({ Wh: a }) => {
            const b = a.Kra,
              c = a.Sa,
              d = a.zC,
              e = new gec();
            return {
              metadata: {
                type: "codelet",
                name: __c.K("4kcGvw"),
                rba: (f) => f.YSa,
              },
              Y4: () => new fec(void 0),
              G: __c.D_(
                M_(({ data: { G: f, local: g }, Ve: { hda: h }, Ji: k }) => {
                  Ddc(() => {
                    g.Ul = k.Ul;
                  });
                  const [l] = Z0(() => new hec(e, c, d)),
                    m = N_((p) => l.Loa(f, p), [f, l]),
                    n = N_(() => l.Koa(k), [l, k]);
                  return O_("div", {
                    style: { minHeight: l.Oe?.scrollHeight ?? k.O.height },
                    className: "fVbdNA",
                    children: O_(h, {
                      url: f.Qva.id,
                      children: ({ Fi: p }) =>
                        O_(b, {
                          url: f.Qva.id,
                          Fi: p,
                          Loa: m,
                          Koa: n,
                          Ry: l.Ry,
                        }),
                    }),
                  });
                })
              ),
              exports: { config: e },
            };
          }),
          obc = { ah: bbc, co: iec, bh: Yac };
        var Zac = __c.$_({
            G: Z_({
              Qx: g1.Oua(
                1,
                Z_({
                  Rva: g1.Sm(1, "EmbedRef"),
                  config: g1.SVa(
                    2,
                    g1.Pg({
                      textContent: g1.Bw(1),
                      backgroundColor: g1.Bw(2, /^#[0-9a-f]{6}$/),
                    })
                  ),
                })
              ),
            }),
          }),
          cbc = __c.Q_()(() => ({
            MVb(a, b) {
              return {
                data: {
                  G: {
                    Qx: {
                      Rva: { type: "embed", id: a, version: 0 },
                      config: b,
                    },
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          })),
          jec = class {};
        var kec = class {
          dispose() {
            this.An?.();
            this.An = void 0;
          }
          constructor(a) {
            this.config = a;
            this.fFa = (b, c) => {
              this.dispose();
              this.An = Uac(b, c);
              return {
                Tvb: (d) => {
                  this.config.mR?.$7b(b, d.Nya);
                  return new cac();
                },
                Vvb: (d) => {
                  this.config.mR?.g8b(b, d.Nya, d.textContent);
                  return new eac();
                },
              };
            };
            this.Ry = () => {
              this.dispose();
            };
          }
        };
        var lec = __c.E_()(({ Wh: a }) => {
            const b = a.Lra,
              c = new jec();
            return {
              metadata: { type: void 0, name: void 0 },
              G: __c.D_(
                M_(({ data: { G: d }, Ve: { hda: e } }) => {
                  const [f] = Z0(() => new kec(c)),
                    g = N_((h) => f.fFa(d.Qx.ref, h), [d.Qx.ref, f]);
                  return O_(e, {
                    url: d.Qx.ref.Rva.id,
                    children: ({ Fi: h }) =>
                      O_(b, { url: d.Qx.ref.Rva.id, Fi: h, fFa: g, Ry: f.Ry }),
                  });
                })
              ),
              exports: { configuration: c },
            };
          }),
          pbc = { ah: cbc, co: lec, bh: Zac };
        var gbc = class {
          Xm(a) {
            this.loading ||
              (this.loading = (a ?? Promise.resolve()).then(() => this.load()));
            return this.loading;
          }
          constructor(a, b) {
            this.id = a;
            this.loadModule = b;
          }
        };
        var s0 = class {
            static of(a, b, c) {
              return new s0(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Sma = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          nec = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = mec;
              this.Ckb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          h1 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.XFb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          pec = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = oec;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          ubc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Ykb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var zbc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.qec = wbc(4);
        __c.rec = wbc(6);
        __c.sec = xbc(5);
        __c.i1 = xbc(0);
        var tec = class {},
          Mbc = class extends tec {
            tua(a) {
              return new Mbc(a(this.value));
            }
            zza(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          Nbc = class extends tec {
            tua(a, b) {
              return new Nbc(b(this.value));
            }
            zza(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var x0 = class {
            map(a) {
              return a(this);
            }
          },
          j1 = class extends x0 {
            bCa(a) {
              return this === a || a.gKa((b) => this.h8(b));
            }
            FS() {
              throw Error(`${this} is not iterable`);
            }
            rEa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Uka());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Uka() {
              throw Error(`${this} is not navigable`);
            }
            Lza(a) {
              a(this);
            }
            gKa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          k1 = class extends j1 {
            h8(a) {
              return a instanceof k1 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          uec = class extends j1 {
            h8(a) {
              return a instanceof uec && this.Bp === a.Bp;
            }
            toString() {
              return this.Bp.name;
            }
            constructor(a) {
              super();
              this.Bp = a;
            }
          },
          vec = class extends j1 {
            h8(a) {
              return (
                a instanceof vec && this.Bp === a.Bp && w0(this.arg, a.arg)
              );
            }
            toString() {
              return `${this.Bp}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.Bp = a;
              this.arg = b;
            }
          },
          wec = class extends vec {
            FS() {
              return this.arg;
            }
            Uka() {
              const a = this.arg;
              return {
                size: G0.number,
                empty: G0.Yg,
                get first() {
                  return G0.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          xec = class extends vec {
            FS() {
              return this.arg;
            }
            Uka() {
              const a = this.arg;
              return {
                size: G0.number,
                empty: G0.Yg,
                get first() {
                  return G0.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          yec = class extends j1 {
            h8(a) {
              return (
                a instanceof yec &&
                w0(this.key, a.key) &&
                w0(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          zec = class extends j1 {
            h8(a) {
              return a instanceof zec
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && w0(this.fields[b], c)
                  )
                : !1;
            }
            Uka() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          l1 = class extends x0 {
            bCa(a) {
              return this === a || this.qg.every((b) => b.bCa(a));
            }
            FS() {
              return G0.union(...this.qg.map((a) => a.FS()));
            }
            rEa(a) {
              return G0.union(...this.qg.map((b) => b.rEa(a)));
            }
            Lza(a) {
              this.qg.forEach((b) => b.Lza(a));
            }
            gKa(a) {
              return this.qg.some((b) => b.gKa(a));
            }
            toString() {
              return this.qg.length
                ? this.qg.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.qg = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          Aec = new l1([]),
          Bec = new k1("string"),
          Cec = new k1("number"),
          Dec = new k1("boolean"),
          Eec = new k1("undefined"),
          Fec = new l1([Bec, Cec, Dec]),
          Gec = class {
            get never() {
              return Aec;
            }
            get string() {
              return Bec;
            }
            get number() {
              return Cec;
            }
            get Yg() {
              return Dec;
            }
            get undefined() {
              return Eec;
            }
            get primitive() {
              return Fec;
            }
            optional(a) {
              return G0.union(a, G0.undefined);
            }
            array(a) {
              return new wec(a);
            }
            set(a) {
              return new xec(a);
            }
            nX(a) {
              return new l1([new wec(a), new xec(a)]);
            }
            map(a, b) {
              return new yec(a, b);
            }
            Ub(a) {
              return new zec({ ...a });
            }
            union(...a) {
              if (a.length === 0) return Aec;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) ybc(d).Lza((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return Aec;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return w0(d, e) ? e : w0(e, d) ? d : new l1(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => w0(d, e)) ||
                  (c.forEach((e) => w0(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new l1([...c]);
            }
            constructor() {
              this.optional = y0(this.optional);
              this.array = y0(this.array);
              this.set = y0(this.set);
              this.nX = y0(this.nX);
            }
          },
          Hec = class extends Gec {
            instance(a) {
              return new uec(a);
            }
          },
          G0 = new Hec(),
          Iec = class extends Gec {
            instance(a) {
              return new uec(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var Jec,
          Kec,
          m1 = Symbol("value"),
          Lec = class {
            get props() {
              return this.Jjb ?? (this.Jjb = this.Tta());
            }
          },
          Mec = class {
            get size() {
              return this[m1].length;
            }
            get empty() {
              return this[m1].length === 0;
            }
            get first() {
              return this[m1][0];
            }
            constructor(a) {
              this[m1] = a;
            }
          };
        Jec = Symbol.iterator;
        var Nec = class extends Lec {
            Tta() {
              return new Mec(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [Jec]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, B0).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          Oec = class {
            get size() {
              return this[m1].size;
            }
            get empty() {
              return this[m1].size === 0;
            }
            get first() {
              return this[m1][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[m1] = a;
            }
          };
        Kec = Symbol.iterator;
        var Pec = class extends Lec {
            Tta() {
              return new Oec(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [Kec]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, B0).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          Qec = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${B0(a)}]: ${B0(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          Rec = class extends Lec {
            Tta() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${B0(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          Sec = class {
            toString() {
              return `[instance ${this.Bp.name}]`;
            }
            constructor(a, b) {
              this.Bp = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          Tec = class {
            array(a) {
              return new Nec(a);
            }
            arrayOf(...a) {
              return new Nec(a);
            }
            set(a) {
              return new Pec(a);
            }
            map(a) {
              return new Qec(new Map(a));
            }
            Ub(a) {
              return new Rec({ ...a });
            }
          },
          Uec = class extends Tec {
            instance(a, b) {
              return new Sec(a, b);
            }
            stringify(a) {
              return B0(a);
            }
            constructor() {
              super();
              this.oh = A0;
            }
          },
          K0 = new Uec(),
          Vec = class extends Tec {
            instance(a, b) {
              a = y(this.classes[a]);
              return new Sec(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var Lbc = {
            [0]: t0(G0.number, G0.number, (a) => -a),
            [1]: t0(G0.string, G0.number, (a) => a.length),
            [2]: t0(G0.Yg, G0.Yg, (a) => !a),
            [3]: u0(G0.number, G0.number, G0.number, (a, b) => a + b),
            [4]: u0(G0.number, G0.number, G0.number, (a, b) => a - b),
            [5]: u0(G0.number, G0.number, G0.number, (a, b) => a * b),
            [6]: u0(G0.number, G0.number, G0.number, (a, b) => a / b),
            [7]: u0(G0.number, G0.number, G0.number, (a, b) => a % b),
            [8]: u0(G0.string, G0.string, G0.string, (a, b) => a + b),
            [9]: u0(G0.number, G0.number, G0.Yg, (a, b) => a === b),
            [10]: u0(G0.number, G0.number, G0.Yg, (a, b) => a !== b),
            [11]: u0(G0.number, G0.number, G0.Yg, (a, b) => a < b),
            [12]: u0(G0.number, G0.number, G0.Yg, (a, b) => a <= b),
            [13]: u0(G0.number, G0.number, G0.Yg, (a, b) => a > b),
            [14]: u0(G0.number, G0.number, G0.Yg, (a, b) => a >= b),
            [15]: u0(G0.Yg, G0.Yg, G0.Yg, (a, b) => a && b),
            [16]: u0(G0.Yg, G0.Yg, G0.Yg, (a, b) => a || b),
          },
          Qbc = {
            [2]: new h1(G0.number, G0.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new h1(G0.number, G0.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new h1(G0.number, G0.number, (a) => Math.max(...a)),
            [5]: new h1(G0.number, G0.number, (a) => Math.min(...a)),
            [6]: new h1(G0.string, G0.string, (a) => a.join("")),
          },
          Wec = (a) => K0.array(a),
          Xec = (a) => K0.set(a),
          Obc = {
            [0]: (a) => new h1(a, G0.array(a), Wec),
            [1]: (a) => new h1(a, G0.set(a), Xec),
          },
          oec = (a) => K0.map(a),
          Cbc = { [0]: (a, b) => new pec(a, b, G0.map(a, b)) },
          mec = (a) => K0.Ub(a),
          Tbc = { [0]: (a) => new nec(a, G0.Ub(a)) },
          Yec = (a, b) => K0.array(b.map((c) => c())),
          Zec = (a, b) => K0.array(b.flatMap((c) => c().items)),
          $ec = (a, b) => K0.array(a.filter((c, d) => b[d]()).map((c) => c())),
          afc = (a, b) => b.some((c) => c()),
          bfc = (a, b) => b.every((c) => c()),
          cfc = (a, b) => a.find((c, d) => b[d]())?.(),
          Ebc = {
            [0]: (a, b) => b.map((c) => v0(a, c, G0.array(c), Yec)),
            [1]: (a, b) =>
              b.FS().map((c) => v0(a, G0.array(c), G0.array(c), Zec)),
            [2]: (a) => v0(a, G0.Yg, G0.array(a), $ec),
            [3]: (a) => v0(a, G0.Yg, G0.Yg, afc),
            [4]: (a) => v0(a, G0.Yg, G0.Yg, bfc),
            [5]: (a) => v0(a, G0.Yg, G0.optional(a), cfc),
          };
        var D0 = class {
          define(a, b) {
            return new D0(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var efc = (a, b, c) => {
            const d = C0.create(b.cL),
              e = new dfc(a);
            return {
              compile: (f) => {
                const g = Ibc(e, d, f).as(c);
                return (h) => {
                  h = new D0(new Map(b.decode(h).gIa));
                  return g(h);
                };
              },
            };
          },
          C0 = class {
            static create(a) {
              return new C0(new D0(new Map(a)), new D0(new Map()));
            }
            constructor(a = new D0(new Map()), b = new D0(new Map())) {
              this.vars = a;
              this.Q6 = b;
            }
          },
          dfc = class {
            constructor(a) {
              this.types = a;
            }
          },
          I0 = class {
            static of(a, b) {
              return new I0(a, b);
            }
            as(a) {
              if (!w0(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new I0(this.type, (b) => {
                const c = U0(a(b), { equals: K0.oh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          dcc = class {
            as(a, b) {
              const c = this.Sma,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!w0(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!w0(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Sma = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var Lcc = class {
            add(a) {
              a = a(ffc, this.types);
              return new Lcc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Yg;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.bRa));
                    case "set":
                      return b.set(this.evaluate(a.bRa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.bRa);
                      a = this.evaluate(a.YTb);
                      if (!w0(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Ub(ne(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new Iec(this.classes);
              this.values = new Vec(this.classes);
            }
          },
          ffc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.GCb = new s0([G0.Ub(b)], G0.instance(this), (d) =>
                K0.instance(this, c(d.fields))
              );
            }
          };
        var gfc;
        gfc = Symbol.iterator;
        var ecc = class {
          static D(a) {
            M(a, { h9: U0 });
          }
          get h9() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.ig(b), b));
            return a;
          }
          Eu(a) {
            return y(this.h9.get(a));
          }
          g_(a) {
            return a != null ? this.ig(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.g_(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.ig(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.ig(b), c));
          }
          set(a, b) {
            return this.ig(this.base.set(a, this.sI(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.ig(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return gcc(this.base.entries(), ([a, b]) => [a, this.ig(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return gcc(this.base.values(), this.ig);
          }
          [gfc]() {
            return this.xl()[Symbol.iterator]();
          }
          xl() {
            return Tc(this.base.xl(), this.ig);
          }
          constructor(a, b, c) {
            this.base = a;
            this.sI = b;
            this.ig = c;
            ecc.D(this);
          }
        };
        var n1 = class {
            NL(a) {
              return new hfc(this, a);
            }
            H6(a) {
              return new ifc(this, a);
            }
            IR(a) {
              return new jfc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.i9());
            }
          },
          tcc = class extends n1 {
            NL(a) {
              return new kfc(a);
            }
            H6() {
              throw Error();
            }
            IR() {
              throw Error();
            }
            i9() {
              return "(global)";
            }
          },
          kfc = class extends n1 {
            i9() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          hfc = class extends n1 {
            i9() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          ifc = class extends n1 {
            i9() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          jfc = class extends n1 {
            i9() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          scc = class {
            error(a, b) {
              return Error(
                `widget '${this.sQb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.sQb = a;
            }
          },
          wcc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          ncc = new Set(["string", "boolean", "int32"]),
          xcc = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var fdc, Ecc, ycc, lfc, mfc;
        __c.o1 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.o1(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.o1(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        fdc = class {
          read(a) {
            return O0(a) ? a() : a;
          }
          computed(a) {
            const b = U0(a);
            return () => b.get();
          }
          map(a, b) {
            return O0(a) ? () => b(a()) : b(a);
          }
          box(a) {
            return new Adc(O0(a) ? new zdc(U0(a)) : new ydc(a));
          }
          list(a) {
            const b = this.map(
              a,
              (c) =>
                new __c.lab(new Ncc(c.map((d) => (O0(d) ? U0(d) : zcc(d)))))
            );
            return O0(b) ? __c.ue(() => b()) : b;
          }
          constructor() {
            this.classes = Kcc();
          }
        };
        Ecc = (a) => {
          const b = a.Bp,
            c = a.se,
            d = c.U,
            e = c.attributes;
          Acc(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.U;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  u(m in d, "unknown override: '{}'", m),
                    O0(n) ? ((k || (k = {}))[m] = n) : (h[m] = lfc(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  u(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.o1
                        ? n
                        : O0(n)
                        ? { enumerable: !0, get: n, set: ycc }
                        : mfc(n));
              if (k)
                return Bcc(
                  k,
                  Dcc((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...ne(m, lfc) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        ycc = () => {};
        lfc = (a) => ({ enumerable: !0, writable: !1, value: a });
        mfc = (a) => ({ enumerable: !0, get: () => a, set: ycc });
        var P0 = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          Cg: void 0,
        };
        var nfc = new Map(),
          p1 = [],
          R0 = Object.freeze({
            Tl: void 0,
            image: void 0,
            video: void 0,
            Qa: void 0,
            color: void 0,
            xa: 0,
            locked: !0,
            kg: !0,
            Sk: void 0,
            Vc: void 0,
            K: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          Hcc = Object.freeze({ fill: R0, stroke: void 0, N: 0 }),
          Gcc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: R0,
            Oc: p1,
            qe: !1,
          }),
          q1 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            xa: 0,
            Vi: void 0,
            fa: void 0,
            K: void 0,
            transition: void 0,
            la: p1,
            Vb: p1,
            animation: void 0,
            If: void 0,
            link: void 0,
            locked: !0,
            Cg: void 0,
            kg: !0,
            Sk: void 0,
            Ta: void 0,
            Tr: void 0,
            zf: p1,
            mF: nfc,
            ZB: nfc,
            anchor: void 0,
            Zg: nfc,
          }),
          S0 = Object.freeze({
            ...q1,
            type: "rect",
            fill: R0,
            stroke: void 0,
            N: p1,
          }),
          T0 = Object.freeze({
            ...q1,
            type: "shape",
            slice: void 0,
            Jj: void 0,
            ub: p1,
            resizeMode: void 0,
          }),
          Icc = Object.freeze({
            ...q1,
            type: "text",
            text: __c.Lk.Yx("\n"),
            Ja: Object.freeze({ jb: [] }),
            Se: void 0,
            placeholder: void 0,
            Mf: 1,
            writingMode: void 0,
            J: void 0,
            P: void 0,
            qo: !1,
            hA: void 0,
            Ch: void 0,
            Vc: void 0,
          }),
          Jcc = Object.freeze({ ...q1, type: "embed" });
        var ddc = class {
            a5(a, b) {
              const c = __c.Oh(a);
              __c.x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return {
                    page: this.lk.RYa(c),
                    O: new ofc(a),
                    Ul: a.G.id,
                    De: b,
                  };
                case "concatenated-fixed-page":
                  return {
                    page: this.lk.HYa(c),
                    O: new ofc(a),
                    Ul: a.G.id,
                    De: b,
                  };
                case "responsive-page":
                  return {
                    page: this.lk.fZa(c),
                    O: new ofc(a),
                    Ul: a.G.id,
                    De: b,
                  };
                default:
                  throw new E(c);
              }
            }
            constructor(a, b) {
              this.aoa = a;
              u(
                b.Sf === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.Da = __c.Th(b);
              this.lk = new pfc(this.aoa, this.Da);
            }
          },
          ofc = class {
            get width() {
              return this.container.type === "controlled-item"
                ? this.container.G.Oe?.width || 0
                : this.container.G.J;
            }
            get height() {
              return this.container.type === "controlled-item"
                ? this.container.G.Oe?.height || 0
                : this.container.G.P;
            }
            constructor(a) {
              this.container = a;
            }
          },
          qfc = class {
            getIndex() {
              return this.YL(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get fyb() {
              return this.page.G.dg;
            }
            constructor(a, b) {
              this.page = a;
              this.YL = b;
            }
          },
          rfc = class extends qfc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          sfc = class extends qfc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          tfc = class extends qfc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          ufc = class {
            get id() {
              return this.aoa?.id;
            }
            get extension() {
              return this.aoa?.extension;
            }
            get language() {
              return this.Da.G.language;
            }
            constructor(a, b) {
              this.aoa = a;
              this.Da = b;
            }
          },
          pfc = class extends ufc {
            static D(a) {
              M(a, {
                Z: U0({ equals: Edc.shallow }),
                m4a: U0({ equals: Edc.shallow }),
              });
            }
            get Z() {
              return this.Da.G.Z.map((a) => this.Tub(this.Da.Re(a)));
            }
            get m4a() {
              return this.Da.G.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.Bn = a;
              this.Da = b;
              this.type = (pfc.D(this), "fixed");
              this.RYa = $0((c) => new rfc(c, this.YL, this));
              this.HYa = $0((c) => new sfc(c, this.YL, this));
              this.fZa = $0((c) => new tfc(c, this.YL, this));
              this.Tub = $0((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.RYa(c);
                  case "concatenated-fixed-page":
                    return this.HYa(c);
                  case "responsive-page":
                    return this.fZa(c);
                  default:
                    throw new E(c);
                }
              });
              this.YL = $0((c) => {
                c = this.Da.G.Z.has(c.G) ? c.G : void 0;
                return c != null ? this.m4a.indexOf(c) : -1;
              });
            }
          };
        var vfc = class {
          constructor(a) {
            this.nIa = a;
            this.kUa = new Map();
          }
        };
        var adc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = c1.set(void 0, { deep: !1 })), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new __c.kA();
          }
        };
        var Rcc = class {
          Pc(a) {
            let b = this.store.get(a);
            b == null && ((b = this.Aob()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.Aob = a;
            this.store = new WeakMap();
          }
        };
        var hbc = new Set(),
          ibc = { Wx: () => ({ Ma: Qdc }) },
          edc = class {
            static D(a) {
              M(a, { ZT: c1.shallow });
            }
            Qha(a) {
              return this.ZT.get(a)?.G;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.Da = a;
              this.nIa = b;
              this.I1 = c;
              this.zwa = d;
              this.I = e;
              this.pQb = f;
              this.Ve = g;
              this.brb = h;
              this.ZT = (edc.D(this), new Map());
            }
          },
          Ycc = (a, b) => ({
            ...a,
            hda: (c) => O_(a.hda, { ...c, Ylb: b || !1 }),
          }),
          Zcc = (a, b) => ({
            ...a,
            Ci: (c) => O_(a.Ci, { ...c, scale: b || 1 }),
          });
        var wfc = class {
          static D(a) {
            M(a, { uaa: c1.shallow });
          }
          constructor(a) {
            this.gUa = a;
            this.uaa = (wfc.D(this), new Map());
          }
        };
        var xfc = class extends Bdc {
          render() {
            const {
              children: a,
              component: b = "div",
              iHb: c,
              cma: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.zjb;
                return f;
              }, {}));
            return O_(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.cma && ndc(this);
          }
          componentDidUpdate() {
            this.props.cma && ndc(this);
          }
          componentWillUnmount() {
            this.CP && (this.CP(), (this.CP = null));
          }
          constructor(...a) {
            super(...a);
            this.ata = this.CP = null;
            this.zjb = (b) => {
              this.ata = b.nativeEvent;
            };
            this.JPa = (b) => {
              const c = this.props.cma,
                d = this.ata === b;
              c && !d && c(b);
              this.ata = null;
            };
          }
        };
        var qdc = (a) =>
          O_(xfc, {
            iHb: ["onMouseDown", "onTouchStart"],
            xqb: ["mousedown", "touchstart"],
            cma: a.U9,
            children: a.children,
          });
        var odc = class {
            static D(a) {
              M(a, { Fi: c1.ref });
            }
            constructor() {
              this.Fi = (odc.D(this), !0);
            }
          },
          pdc = class {
            static D(a) {
              M(a, {
                onDoubleClick: d1.bound,
                onTouchEnd: d1.bound,
                reset: d1.bound,
              });
            }
            onDoubleClick() {
              this.store.Fi = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.MU
                  ? (window.clearTimeout(this.MU),
                    (this.MU = void 0),
                    (this.store.Fi = !1))
                  : (this.MU = window.setTimeout(
                      () => (this.MU = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Fi = !0;
            }
            eX() {
              this.MU && window.clearTimeout(this.MU);
            }
            constructor(a) {
              this.store = a;
              this.MU = (pdc.D(this), void 0);
            }
          };
        __c.a_a = {
          Bxb: function ({
            document: a,
            lk: b,
            zC: c,
            hz: d,
            eD: e,
            LG: f,
            Ag: g,
            bha: h,
            Sa: k,
            uf: l,
            We: m,
            Uf: n,
            De: p,
            jha: q,
            ND: r,
            uQb: t,
            S9a: v,
            u8a: w,
            uia: z,
          }) {
            const A = g.nM,
              C = g.ai;
            var B = g.I;
            const D = g.jf,
              I = g.ha,
              L = g.IWa,
              N = g.Ua;
            var P = h.Ep;
            const { nya: R = !1, Aya: U = !1, vya: V = !1 } = t ?? {},
              { Lo: aa, zwa: ba } = { Lo: Occ(), zwa: efc };
            t = new wfc(ucc(aa));
            const {
              GNa: ha,
              ora: oa,
              Iwa: qa,
              I1: fa,
            } = { GNa: t, ora: t, Iwa: ba, I1: aa };
            q = $ac({ GNa: ha, nya: R, jha: q, Aya: U, vya: V });
            t = new vfc(oa);
            const { FNa: Ca, cgb: ca } = { FNa: t, cgb: t };
            t = fbc({ HNa: q, FNa: Ca });
            B = B.Vf("widget");
            P = rdc({ Ep: P, Ua: N });
            const ma = vdc();
            m = wdc({ We: m });
            n = sdc({ fj: n });
            const pa = udc({ Sa: k, uia: z });
            z = xdc({ Sa: k, uia: z });
            const {
              Sca: ta,
              CC: Ia,
              expr: Ha,
            } = gdc({
              I: B,
              ora: oa,
              tQb: { hda: P, cSb: ma, Ci: m, Nk: n, kda: pa, wsa: z },
              qQb: { Ci: kdc() },
              Iwa: qa,
              I1: fa,
              Bn: b,
              Da: a,
              S9a: v,
              u8a: w,
            });
            a = xac({
              De: p,
              Ep: h.Ep,
              Mq: h.Mq,
              Ua: g.Ua,
              I: g.I.Vf("codelet"),
            });
            g = yac({
              De: p,
              Ep: h.Ep,
              Mq: h.Mq,
              Ua: g.Ua,
              I: g.I.Vf("codelet2"),
            });
            const { ZT: jb, nYa: Qa } = qbc({
              HNa: q,
              Sca: ta,
              jf: D,
              xQ: { I: B, ha: I, uf: p === 30 ? l : void 0, Ua: N, expr: Ha },
              Wh: {
                hz: d,
                LG: f,
                eD: e,
                IWa: L,
                Sa: k,
                zC: c,
                Kra: a,
                Lra: g,
                ND: r,
                nM: A,
                ai: C,
              },
            });
            return { ora: oa, CC: Ia, bdc: jb, $cc: t, cgb: ca, nYa: Qa };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },

    /***/ 798828: (_, __, r) => r(488522),

    /***/ 138187: (_, __, r) => r(488522),

    /***/ 327205: (_, __, r) => r(488522),

    /***/ 152531: (_, __, r) => r(488522),
  },
]);
//# sourceMappingURL=sourcemaps/f358004ac01c275c.js.map
