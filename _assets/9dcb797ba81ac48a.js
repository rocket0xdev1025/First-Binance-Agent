(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [86064],
  {
    /***/ 775822: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var ilc;
        __c.glc = function (a, b, c) {
          return new __c.tb(a, c ? __c.Jaa(c) : void 0, __c.Kaa, {
            ignoreTag: !0,
          }).format(Object.fromEntries(Object.entries(b)));
        };
        __c.hlc = function (a, b) {
          __c.u(!0);
          __c.u(!0);
          __c.u(!0);
          const { oa: c, a: d, b: e } = __c.Sl(a),
            { oa: f, a: g, b: h } = __c.Sl(b);
          a = (c + f) / 2;
          b = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
          b = 0.5 * (1 - Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7)));
          var k = d * (1 + b),
            l = g * (1 + b),
            m = Math.hypot(k, e),
            n = Math.hypot(l, h);
          b = (m + n) / 2;
          var p = __c.em((Math.atan2(e, k) * 180) / Math.PI);
          const q = __c.em((Math.atan2(h, l) * 180) / Math.PI);
          k = Math.abs(p - q) > 180 ? (p + q + 360) / 2 : (p + q) / 2;
          l = n - m;
          m =
            2 *
            Math.sqrt(m * n) *
            Math.sin(
              (((Math.abs(q - p) <= 180
                ? q - p
                : q <= p
                ? q - p + 360
                : q - p - 360) /
                2) *
                Math.PI) /
                180
            );
          n = 1 + 0.045 * b;
          p =
            1 +
            0.015 *
              b *
              (1 -
                0.17 * Math.cos(((k - 30) * Math.PI) / 180) +
                0.24 * Math.cos((2 * k * Math.PI) / 180) +
                0.32 * Math.cos(((3 * k + 6) * Math.PI) / 180) -
                0.2 * Math.cos(((4 * k - 63) * Math.PI) / 180));
          return Math.sqrt(
            ((f - c) /
              (1 + (0.015 * (a - 50) ** 2) / Math.sqrt(20 + (a - 50) ** 2))) **
              2 +
              (l / (1 * n)) ** 2 +
              (m / (1 * p)) ** 2 +
              (l / (1 * n)) *
                (m / (1 * p)) *
                (-(2 * Math.sqrt(b ** 7 / (b ** 7 + 25 ** 7))) *
                  Math.sin(
                    (30 * Math.exp(-1 * ((k - 275) / 25) ** 2) * 2 * Math.PI) /
                      180
                  ))
          );
        };
        ilc = function (a) {
          return { status: 3, error: a };
        };
        __c.iz.prototype.C$ = __c.ea(18, function () {
          return __c.dz(this, () => __c.Qy(this.operators, "%", this.value));
        });
        __c.V2 = {
          Yd: "form_widget_interacted",
          gf(a) {
            return __c.vr({
              form_id: a.IH,
              form_type: a.hia,
              action_group: a.Tr,
              action: a.action,
              location: a.location,
              linked_design_id: a.T1b,
              toggle_value: a.LJ,
              editing_context: a.qd == null ? void 0 : __c.wr(a.qd),
              performance_context: a.Gd == null ? void 0 : __c.xr(a.Gd),
              question_type: a.N9b,
            });
          },
        };
        __c.W2 = ilc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/9dcb797ba81ac48a.js.map
