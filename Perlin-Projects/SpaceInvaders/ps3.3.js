const PS = (function () {
  "use strict";
  function e(e, n, t, o) {
    return !0 === e || !1 === e
      ? e
      : null !== e &&
          ("number" === zt(e)
            ? 0 !== e
            : e === PS.CURRENT
            ? n
            : e === PS.DEFAULT
            ? t
            : void 0 === e
            ? o
            : PS.ERROR);
  }
  function n(e) {
    return (
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0),
      e.preventDefault(),
      !1
    );
  }
  function t(e) {
    var n = e.toString();
    1 > n.length && (n = ""), (ft.innerHTML = bt = n);
  }
  function o(e, n, t) {
    var o;
    (o = e.a * (1 - n.a)),
      (t.r = Math.floor(n.r * n.a + e.r * o)),
      (t.g = Math.floor(n.g * n.a + e.g * o)),
      (t.b = Math.floor(n.b * n.a + e.b * o));
  }
  function i(e, n) {
    var t;
    return (
      (t = n.a),
      1 > t
        ? ((wo.rgb = e.rgb),
          (wo.r = e.r),
          (wo.g = e.g),
          (wo.b = e.b),
          (wo.a = e.a),
          (wo.str = e.str))
        : 255 > t
        ? ((So.r = e.r),
          (So.g = e.g),
          (So.b = e.b),
          (So.a = 1),
          (Lo.r = n.r),
          (Lo.g = n.g),
          (Lo.b = n.b),
          (Lo.a = et[t]),
          o(So, Lo, wo),
          (wo.a = 1),
          (wo.rgb = 65536 * wo.r + 256 * wo.g + wo.b),
          (wo.str = Zt[wo.r] + $t[wo.g] + eo[wo.b]))
        : ((wo.rgb = n.rgb),
          (wo.r = n.r),
          (wo.g = n.g),
          (wo.b = n.b),
          (wo.a = n.a),
          (wo.str = n.str)),
      wo
    );
  }
  function d(e, n, t, o, r, a) {
    var d, s, l, u, g, m, p, c, f, b, _, h, R, E, T, y, v, A;
    return (
      (d = io.context),
      (s = io.bead_size),
      (l = e.left),
      (u = e.top),
      (g = s),
      (m = s),
      (p = e.border),
      (t = p.colorNow ? p.colorNow : p.color),
      (E = t.a),
      (a = io.colorNow ? io.colorNow : io.color),
      (r = e.bgColor),
      e.visible
        ? void ((_ = e.size < s),
          (h = e.radius),
          (R = e.planes[0].color.a),
          (T = null),
          (_ || 0 < h || 255 > R || (0 < p.width && 255 > E)) &&
            ((T = i(a, r)),
            (d.fillStyle = T.str),
            d.fillRect(l, u, g, m),
            _ &&
              ((l += e.margin), (u += e.margin), (g = e.size), (m = e.size))),
          (v = Math.floor((g * h) / 100)),
          (A = 0),
          0 < p.width &&
            (0 < E &&
              ((t = p.colorNow ? p.colorNow : p.color),
              (d.fillStyle = t.str),
              1 > h
                ? ((c = p.top),
                  0 < c && d.fillRect(l, u, g, c),
                  (f = p.bottom),
                  0 < f && d.fillRect(l, u + m - f, g, f),
                  (y = p.left),
                  0 < y && d.fillRect(l, u + c, y, m - c - f),
                  (y = p.right),
                  0 < y && d.fillRect(l + g - y, u + c, y, m - c - f))
                : 50 > h
                ? d.fillRoundedRect(l + A, u + A, g - A, m - A, v)
                : d.fillCircle(l + A, u + A, g - A, m - A)),
            (l += p.left),
            (u += p.top),
            (g -= p.left + p.right),
            (m -= p.top + p.bottom),
            0 < E &&
              0 < h &&
              (!T && (T = i(a, r)),
              (d.fillStyle = T.str),
              50 > h
                ? d.fillRoundedRect(l + A, u + A, g - A, m - A, v)
                : d.fillCircle(l + A, u + A, g - A, m - A))),
          (n = e.colorNow ? e.colorNow : e.color),
          (d.fillStyle = n.str),
          1 > h
            ? d.fillRect(l, u, g, m)
            : 50 > h
            ? d.fillRoundedRect(l + A, u + A, g - A, m - A, v)
            : d.fillCircle(l + A, u + A, g - A, m - A),
          (b = e.glyph),
          (o = b.colorNow ? b.colorNow : b.color),
          0 < b.str.length &&
            0 < o.a &&
            ((io.context.font = b.font),
            (d.fillStyle = o.str),
            d.fillText(b.str, e.left + b.x, e.top + b.y)))
        : ((d.fillStyle = a.str), void d.fillRect(l, u, g, m))
    );
  }
  function s(e, n, t) {
    var d, s, l, u, m, p, c, f, _, h, R, E, T;
    for (
      d = n.r, s = n.g, l = n.b, u = n.a, m = e.planes, p = m.length, c = 0;
      c < p;
      c += 1
    )
      (_ = m[c]),
        (f = _.color),
        (h = f.r),
        (R = f.g),
        (E = f.b),
        (T = f.a),
        0 < T &&
          (255 > T
            ? ((So.r = d),
              (So.g = s),
              (So.b = l),
              (So.a = 1),
              (Lo.r = h),
              (Lo.g = R),
              (Lo.b = E),
              (Lo.a = et[T]),
              o(So, Lo, Co),
              (d = Co.r),
              (s = Co.g),
              (l = Co.b))
            : ((d = h), (s = R), (l = E)),
          (u = T));
    (h = d),
      (R = s),
      (E = l),
      (T = u),
      (t.rgb = 65536 * h + 256 * R + E),
      (t.r = h),
      (t.g = R),
      (t.b = E),
      (t.a = T),
      (t.str = Zt[h] + $t[R] + eo[E]);
  }
  function l() {
    var e, n, t, o, r;
    for (
      e = io.colorNow ? io.colorNow : io.color,
        n = e.str,
        t = io.canvas,
        t.style.backgroundColor = n,
        document.body.style.backgroundColor = n,
        lo.statusP.style.backgroundColor = n,
        lo.inputP.style.backgroundColor = n,
        ft.style.backgroundColor = n,
        o = 0;
      o < io.count;
      o += 1
    )
      (r = so[o]), d(r);
  }
  function u(e, n) {
    var t;
    (t = so[n]), (t.colorNow = e), d(t);
  }
  function g(e, n) {
    var t;
    (t = so[n]), (t.colorNow = null), d(t);
  }
  function m(e, n) {
    var t;
    (t = so[n]), (t.border.colorNow = e), d(t);
  }
  function p(e, n) {
    var t;
    (t = so[n]), (t.border.colorNow = null), d(t);
  }
  function c(e, n) {
    var t;
    (t = so[n]), (t.glyph.colorNow = e), d(t);
  }
  function f(e, n) {
    var t;
    (t = so[n]), (t.glyph.colorNow = null), d(t);
  }
  function _(e) {
    (e.dirty = !0), (dt = !0);
  }
  function R() {
    var e, n, t;
    if (((st = 0), dt)) {
      for (e = io.count, n = 0; n < e; n += 1)
        (t = so[n]),
          t.dirty &&
            ((t.dirty = !1),
            d(t, t.color, t.border.color, t.glyph.color, t.bgColor, io.color),
            (st += 1));
      dt = !1;
    }
  }
  function E() {
    Ot || ((Dt.style.display = "inline"), (Ot = !0), (kt = !1));
  }
  function T(e) {
    ("string" !== typeof e || 1 > e.length) && (e = "???"),
      PS.debug("WARNING: " + e + "\n");
  }
  function y(e) {
    var n, t, o;
    return (
      (n = ""),
      -1 !== e.search(".js") &&
        ((t = e.lastIndexOf("/") + 1),
        (o = e.substr(t).replace(/^[\s\(\)]+|[\s\(\)]+$/g, "")),
        3 === o.split(":").length && (o = o.substr(0, o.lastIndexOf(":"))),
        "" !== o && (n += "    " + o + "\n")),
      n
    );
  }
  function v(e) {
    var n, t, o, r;
    if ((console && console.log && console.log(e), !e.split)) return e;
    for (n = e.split("\n"), r = "", t = n.length, o = 0; o < t; o += 1)
      r += y(n[o]);
    return r;
  }
  function A() {
    _t && (window.clearInterval(_t), (_t = null)),
      (ft.innerHTML = bt = "&nbsp;"),
      (ht = 50),
      (Rt = 1),
      (ft.style.opacity = "1.0");
  }
  function x() {
    0 < ht
      ? (ht -= 1)
      : ((Rt -= 0.05), 0 >= Rt && A(), (ft.style.opacity = Rt.toString()));
  }
  function U(e) {
    A(), Do(), t(e), (_t = window.setInterval(x, 100));
  }
  function S(e, n) {
    var o;
    return (
      Uo.stop(),
      (!e || "string" !== typeof e || 1 > e.length) && (e = "???"),
      (o = "ERROR: " + e),
      A(),
      t(o),
      (o += "\n"),
      n && n.stack && (o += v(n.stack) + "\n"),
      PS.debug(o),
      vo && PS.audioPlay(Zn.audio.error_sound, { path: Zn.audio.path }),
      PS.ERROR
    );
  }
  function L(e) {
    try {
      throw new Error("!");
    } catch (n) {
      return S(e, n);
    }
  }
  function C() {
    var n;
    (n = document.getElementById("main")), (n.scrollTop = n.scrollHeight);
  }
  function w(e) {
    (e.active = !1),
      (e.kill = !1),
      (e.r = 0),
      (e.g = 0),
      (e.b = 0),
      (e.rgb = null),
      (e.tr = 0),
      (e.tg = 0),
      (e.tb = 0),
      (e.trgb = 0),
      (e.tstr = null),
      (e.step = 0),
      (e.rate = 0),
      (e.onStep = null),
      (e.onEnd = null),
      (e.params = null),
      (e.frames = []),
      (e.colorNow = null);
  }
  function N(e, n, t) {
    var o;
    return (o = { element: e, exec: n, execEnd: t }), w(o), o;
  }
  function D(e, n, t, o, r, a, i, d, s) {
    var l, u, g, m, p, c, f, b, _, h, R, E, T, y;
    if (
      ((e.step = 0),
      (e.frames.length = 0),
      n !== a || t !== i || o !== d || r !== s)
    ) {
      (e.tr = a),
        (e.tg = i),
        (e.tb = d),
        (e.ta = s),
        (e.trgb = 65536 * a + 256 * i + d),
        (e.tstr = Zt[a] + $t[i] + $t[d] + no[s]),
        (l = n),
        (u = t),
        (g = o),
        (m = r),
        (_ = n > a ? -(n - a) : a - n),
        (h = t > i ? -(t - i) : i - t),
        (R = o > d ? -(o - d) : d - o),
        (E = r > s ? -(r - s) : s - r),
        (p = 4 > e.rate ? 1 : Math.ceil(e.rate / 4)),
        (c = 100 / p),
        (f = 0);
      do
        if (
          ((T = !1),
          (b = {}),
          (f += c),
          100 <= f
            ? ((b.r = a), (b.g = i), (b.b = d), (b.a = s))
            : (l !== a &&
                ((y = (f * _) / 100),
                (l = n + y),
                (l = Math.round(l)),
                (T = !0)),
              (b.r = l),
              u !== i &&
                ((y = (f * h) / 100),
                (u = t + y),
                (u = Math.round(u)),
                (T = !0)),
              (b.g = u),
              g !== d &&
                ((y = (f * R) / 100),
                (g = o + y),
                (g = Math.round(g)),
                (T = !0)),
              (b.b = g),
              m !== s &&
                ((y = (f * E) / 100),
                (m = r + y),
                (m = Math.round(m)),
                (T = !0)),
              (b.a = m)),
          (b.rgb = 65536 * b.r + 256 * b.g + b.b),
          (b.str = Zt[b.r] + $t[b.g] + $t[b.b] + no[b.a]),
          e.frames.push(b),
          !T)
        )
          return;
      while (100 > f);
    }
  }
  function F(e, n, t, o, r, a, i, d, s) {
    D(e, n, t, o, r, a, i, d, s),
      0 < e.frames.length && ((e.kill = !1), (e.active = !0), co.push(e));
  }
  function P(e, n, t, o, r) {
    var a, i, d, s;
    (a = e.active),
      (e.active = !1),
      (i = e.frames.length),
      0 < i &&
        ((d = e.step),
        d >= i && (d = i - 1),
        (s = e.frames[d]),
        D(e, s.r, s.g, s.b, s.a, n, t, o, r)),
      0 < e.frames.length && (e.active = a);
  }
  function O(e) {
    var n, t, o, d, l, u, m, p, c, f, h, R;
    (n = i(io.color, e.bgColor)),
      s(e, n, ko),
      (t = ko.rgb),
      (d = ko.r),
      (l = ko.g),
      (u = ko.b),
      (m = ko.a),
      (o = e.color),
      (p = o.r),
      (c = o.g),
      (f = o.b),
      (h = o.a),
      (o.rgb = t),
      (o.r = d),
      (o.g = l),
      (o.b = u),
      (o.a = m),
      (o.str = ko.str),
      e.visible &&
        ((R = e.fader),
        0 < R.rate
          ? null === R.rgb
            ? R.active
              ? P(R, d, l, u, 255)
              : F(R, p, c, f, 255, d, l, u, 255)
            : F(R, R.r, R.g, R.b, 255, d, l, u, 255)
          : _(e));
  }
  function k(e, n, t, o, r) {
    var a, i, d, s;
    if (((a = t), a !== PS.CURRENT && a !== PS.DEFAULT))
      if (((s = zt(a)), "undefined" === s)) a = PS.CURRENT;
      else if ("number" === s)
        (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
      else return L(e + "red value invalid");
    if (((i = o), i !== PS.CURRENT && i !== PS.DEFAULT))
      if (((s = zt(i)), "undefined" === s)) i = PS.CURRENT;
      else if ("number" === s)
        (i = Math.floor(i)), 0 > i ? (i = 0) : 255 < i && (i = 255);
      else return L(e + "green value invalid");
    if (((d = r), d !== PS.CURRENT && d !== PS.DEFAULT))
      if (((s = zt(d)), "undefined" === s)) d = PS.CURRENT;
      else if ("number" === s)
        (d = Math.floor(d)), 0 > d ? (d = 0) : 255 < d && (d = 255);
      else return L(e + "blue value invalid");
    return (n.rgb = null), (n.r = a), (n.g = i), (n.b = d), PS.DONE;
  }
  function I(e, n) {
    var t, o, r, a, i, d;
    (t = Math.floor(n)),
      1 > t
        ? (t = o = a = d = 0)
        : 16777215 <= t
        ? ((t = 16777215), (o = a = d = 255))
        : ((o = t / 65536),
          (o = Math.floor(o)),
          (r = 65536 * o),
          (a = (t - r) / 256),
          (a = Math.floor(a)),
          (i = 256 * a),
          (d = t - r - i)),
      (e.rgb = t),
      (e.r = o),
      (e.g = a),
      (e.b = d);
  }
  function B(e, n, t, o) {
    var r, a, i, d, s;
    if (
      ((r = Io),
      (r.rgb = 0),
      (r.r = null),
      (r.g = null),
      (r.b = null),
      (r.str = ""),
      (a = zt(n)),
      void 0 !== t || void 0 !== o)
    ) {
      if (
        "number" !== a &&
        "undefined" !== a &&
        n !== PS.CURRENT &&
        n !== PS.DEFAULT
      )
        return "array" === a
          ? L(e + "Extraneous arguments after color array")
          : "object" === a
          ? L(e + "Extraneous arguments after color object")
          : L(e + "red argument invalid");
      if (((i = k(e, r, n, t, o)), i === PS.ERROR)) return PS.ERROR;
    } else if ("number" === a) I(r, n);
    else if ("array" === a) {
      if (((s = n.length), 1 > s)) r.rgb = PS.CURRENT;
      else if (((i = k(e, r, n[0], n[1], n[2])), i === PS.ERROR))
        return PS.ERROR;
    } else if ("object" === a) {
      if (((d = n.rgb), (a = zt(d)), "undefined" === a || null === d)) {
        if (((i = k(e, r, n.r, n.g, n.b)), i === PS.ERROR)) return PS.ERROR;
      } else if ("number" === a) I(r, d);
      else if (d === PS.CURRENT || d === PS.DEFAULT) r.rgb = d;
      else return L(e + ".rgb property invalid");
    } else if ("undefined" === a || n === PS.CURRENT) r.rgb = PS.CURRENT;
    else if (n === PS.DEFAULT) r.rgb = PS.DEFAULT;
    else return L(e + "color argument invalid");
    return r;
  }
  function M(e) {
    var n, t, o, r;
    (n = io.bead_size),
      (e.glyph.x = Math.round(n / 2)),
      (o = e.glyph.scale),
      (t = 100 > o ? Math.round((n * o) / 100) : n),
      (e.glyph.size = r = Math.round(t / 2)),
      (e.glyph.font = r + "px " + Zn.font.name),
      (e.glyph.y = Math.round((n - r) / 2 + r / 2));
  }
  function Y(e) {
    return {
      index: e,
      dirty: !0,
      active: !0,
      visible: !0,
      radius: 0,
      scale: 0,
      minimum: Zn.bead.minimum,
      data: 0,
      exec: null,
      colorNow: null,
      fader: N(e, u, g),
      color: {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
        rgb: 16777215,
        str: "rgba(255,255,255,1)",
      },
      bgColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 0,
        rgb: 16777215,
        str: "rgba(255,255,255,0)",
      },
      border: {
        width: 1,
        equal: !0,
        top: 1,
        left: 1,
        bottom: 1,
        right: 1,
        colorNow: null,
        color: {
          r: 128,
          g: 128,
          b: 128,
          a: 255,
          rgb: 8421504,
          str: "rgba(128,128,128,1)",
        },
        fader: N(e, m, p),
      },
      glyph: {
        str: "",
        code: 0,
        scale: 100,
        size: 0,
        x: 0,
        y: 0,
        font: null,
        colorNow: null,
        color: { r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" },
        fader: N(e, c, f),
      },
      planes: [
        {
          height: 0,
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 255,
            rgb: 16777215,
            str: "rgba(255,255,255,1)",
          },
        },
      ],
    };
  }
  function K(e) {
    var n;
    (e.dirty = !0),
      (e.active = !0),
      (e.visible = !0),
      (e.radius = 0),
      (e.scale = 100),
      (e.minimum = Zn.bead.minimum),
      (e.data = 0),
      (e.exec = null),
      (e.colorNow = null),
      w(e.fader),
      (n = e.color),
      (n.r = 255),
      (n.g = 255),
      (n.b = 255),
      (n.a = 255),
      (n.rgb = 16777215),
      (n.str = "rgba(255,255,255,1)"),
      (n = e.bgColor),
      (n.r = 255),
      (n.g = 255),
      (n.b = 255),
      (n.a = 0),
      (n.rgb = 16777215),
      (n.str = "rgba(255,255,255,0)"),
      (n = e.border),
      (n.width = 1),
      (n.equal = !0),
      (n.top = 1),
      (n.left = 1),
      (n.bottom = 1),
      (n.right = 1),
      (n.colorNow = null),
      w(n.fader),
      (n = e.border.color),
      (n.r = 128),
      (n.g = 128),
      (n.b = 128),
      (n.a = 255),
      (n.rgb = 8421504),
      (n.str = "rgba(128,128,128,1)"),
      (n = e.glyph),
      (n.str = ""),
      (n.code = 0),
      (n.scale = 100),
      (n.size = 0),
      (n.x = 0),
      (n.y = 0),
      (n.font = null),
      (n.colorNow = null),
      w(n.fader),
      (n = e.glyph.color),
      (n.r = 0),
      (n.g = 0),
      (n.b = 0),
      (n.a = 255),
      (n.rgb = 0),
      (n.str = "rgba(0,0,0,1)"),
      (e.planes = [
        {
          height: 0,
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 255,
            rgb: 16777215,
            str: "rgba(255,255,255,1)",
          },
        },
      ]);
  }
  function W(e, n) {
    var t, o, r, a, d, s;
    if (((t = e.planes), 1 > n)) return (o = t[0]), o.color;
    for (r = t.length, a = 1; a < r; a += 1)
      if (((o = t[a]), o.height === n)) return o.color;
    if (
      ((s = Zn.bead.color),
      (d = { rgb: s.rgb, r: s.r, g: s.g, b: s.b, a: 0 }),
      e.active)
    ) {
      for (a = 0; a < r && ((o = t[a]), !(o.height > n)); ) a += 1;
      t.splice(a, 0, { height: n, color: d });
    }
    return d;
  }
  function G(e) {
    return 0 < e.glyph.code ? e.border.gmax : e.border.max;
  }
  function z(e, n) {
    (e.border.equal = !0),
      (e.border.width = n),
      (e.border.top = n),
      (e.border.left = n),
      (e.border.bottom = n),
      (e.border.right = n);
  }
  function H(e) {
    var n, t, o, r, a, i, d;
    (n = io.bead_size),
      100 > e.scale
        ? ((t = Math.floor((n * e.scale) / 100)),
          (o = n - t),
          0 < o && o % 2 && (t += 1))
        : ((t = n),
          (e.margin = 0),
          (e.senseLeft = e.left),
          (e.senseRight = e.right),
          (e.senseTop = e.top),
          (e.senseBottom = e.bottom)),
      (e.size = t),
      t !== n &&
        ((e.margin = r = Math.floor((n - t) / 2)),
        (e.senseLeft = e.left + r),
        (e.senseRight = e.right - r),
        (e.senseTop = e.top + r),
        (e.senseBottom = e.bottom - r)),
      (d = e.border),
      (d.max = Math.floor((t - e.minimum) / 2)),
      (d.gmax = Math.floor((t - e.glyph.size) / 2)),
      (a = G(e)),
      d.equal
        ? d.width > a && z(e, a)
        : ((i = d.top),
          i > a && (d.top = a),
          (i = d.left),
          i > a && (d.left = a),
          (i = d.bottom),
          i > a && (d.bottom = a),
          (i = d.right),
          i > a && (d.right = a));
  }
  function q(e) {
    var n;
    return (n = e.data), null === n && (n = 0), n;
  }
  function j(e) {
    lt = { start: e, end: 0, duration: 0, events: [] };
  }
  function V(e, n, t) {
    lt.events.push({ x: e, y: n, start: t, end: 0, duration: 0 });
  }
  function J(e) {
    var n, t;
    (n = lt.events.length),
      0 < n &&
        ((t = lt.events[n - 1]),
        (lt.end = e),
        (t.end = e),
        (t.duration = e - t.start),
        (lt.duration += t.duration));
  }
  function X() {
    var e, n, t, o;
    for (
      e = { start: lt.start, end: lt.end, duration: lt.duration, events: [] },
        n = lt.events.length,
        t = 0;
      t < n;
      t += 1
    )
      (o = lt.events[t]),
        e.events.push({
          x: o.x,
          y: o.y,
          start: o.start,
          end: o.end,
          duration: o.duration,
        });
    return e;
  }
  function Q(e) {
    var n, t;
    if (((n = !1), 1 < lt.events.length)) {
      J(e), (t = X());
      try {
        PS.swipe(t, { time: e }), (n = !0);
      } catch (e) {
        return S("PS.swipe() failed [" + e.message + "]", e);
      }
    }
    return (lt = null), n;
  }
  function Z(e) {
    var n, t, o;
    if (e.active) {
      if (
        ((t = !1),
        (Bo.time = e.timeTouch = o = Uo.ticks),
        PS.swipe && (j(o), V(e.x, e.y, o)),
        e.exec)
      )
        try {
          (n = q(e)), e.exec(e.x, e.y, n, Bo), (t = !0);
        } catch (n) {
          return S(
            "Bead " + e.x + ", " + e.y + " function failed [" + n.message + "]",
            n
          );
        }
      if (PS.touch)
        try {
          (n = q(e)), PS.touch(e.x, e.y, n, Bo), (t = !0);
        } catch (e) {
          return S("PS.touch() failed [" + e.message + "]", e);
        }
      t && R();
    }
    return PS.DONE;
  }
  function $(e) {
    var n, t;
    if (e.active) {
      if (((e.timeRelease = t = Uo.ticks), PS.release)) {
        try {
          (n = q(e)), (Mo.time = t), PS.release(e.x, e.y, n, Mo);
        } catch (e) {
          return S("PS.release() failed [" + e.message + "]", e);
        }
        R();
      }
      PS.swipe && Q();
    }
    return PS.DONE;
  }
  function ee(e) {
    var n, t;
    if (
      ((Ct = !0),
      e.active &&
        ((e.timeEnter = n = Uo.ticks),
        Lt && PS.swipe && lt && V(e.x, e.y, n),
        PS.enter))
    ) {
      try {
        (t = q(e)),
          (Yo.time = n),
          (Yo.touching = Lt),
          PS.enter(e.x, e.y, t, Yo);
      } catch (e) {
        return S("PS.enter() failed [" + e.message + "]", e);
      }
      R();
    }
    return PS.DONE;
  }
  function ne(e) {
    var n, t;
    if (
      e.active &&
      ((e.timeExit = n = Uo.ticks), Lt && PS.swipe && lt && J(n), PS.exit)
    ) {
      try {
        (t = q(e)), (Ko.time = n), (Ko.touching = Lt), PS.exit(e.x, e.y, t, Ko);
      } catch (e) {
        return S("PS.exit() failed [" + e.message + "]", e);
      }
      R();
    }
    return PS.DONE;
  }
  function te() {
    var e;
    if (((Ct = !1), (io.timeExit = e = Uo.ticks), PS.exitGrid)) {
      try {
        (Wo.time = e), (Wo.touching = Lt), PS.exitGrid(Wo);
      } catch (e) {
        return S("PS.exitGrid() failed [" + e.message + "]", e);
      }
      R();
    }
    return Lt && PS.swipe && lt && V(-1, -1, e), PS.DONE;
  }
  function oe() {
    (Ct = !1), (wt = -1), (Nt = -1), (Lt = !1), (lt = null), (yo = -1);
  }
  function re(e, n) {
    var t, o, r, a;
    if (
      ((t = io.canvas),
      (e +=
        document.body.scrollLeft +
        document.documentElement.scrollLeft -
        t.offsetLeft -
        io.padLeft),
      (n +=
        document.body.scrollTop +
        document.documentElement.scrollTop -
        t.offsetTop -
        io.padRight),
      e >= io.left && e < io.right && n >= io.top && n < io.bottom)
    )
      for (r = 0; r < io.count; ) {
        if (((o = so[r]), n >= o.top && n < o.bottom)) {
          for (a = 0; a < io.x; a += 1) {
            if (
              e >= o.senseLeft &&
              e < o.senseRight &&
              n >= o.senseTop &&
              n < o.senseBottom
            )
              return o;
            (r += 1), (o = so[r]);
          }
          return null;
        }
        r += io.x;
      }
    return null;
  }
  function ae(e) {
    var t;
    return (
      Ot && Ft.blur(),
      (t = Uo.ticks),
      (Lt = !0),
      PS.swipe && (j(t), V(-1, -1, t)),
      n(e)
    );
  }
  function ie(e) {
    return PS.swipe && lt && Q(Uo.ticks), (Lt = !1), n(e);
  }
  function de(e) {
    return Ft.focus(), n(e);
  }
  function se(e) {
    return n(e);
  }
  function le(e) {
    var t, o, r;
    return (
      Ot && Ft.blur(),
      (t = e.clientX),
      (o = e.clientY),
      (Lt = !0),
      (r = re(t, o)),
      r && Z(r),
      n(e)
    );
  }
  function ue(e) {
    var t, o, r;
    return (
      (t = e.clientX),
      (o = e.clientY),
      (r = re(t, o)),
      r && $(r),
      (Lt = !1),
      n(e)
    );
  }
  function ge(e) {
    var t, o, r, a;
    return (
      (t = e.clientX),
      (o = e.clientY),
      (r = re(t, o)),
      r
        ? r.index !== wt &&
          (-1 !== wt && ((a = so[wt]), ne(a)), ee(r), (wt = r.index))
        : -1 !== wt && ((a = so[wt]), ne(a), (wt = -1)),
      n(e)
    );
  }
  function me(e) {
    var t, o;
    return (
      -1 !== wt && ((t = so[wt]), ne(t), (wt = -1)),
      (o = e.relatedTarget),
      o &&
        ((o = o.id),
        o && ("outer" === o || "main" === o || 1 > o.length) && te()),
      n(e)
    );
  }
  function pe(e) {
    var t, o, r, a;
    return (Ot && Ft.blur(), -1 !== yo)
      ? n(e)
      : ((r = e.changedTouches[0]),
        (yo = r.identifier),
        (Lt = !0),
        (t = r.pageX),
        (o = r.pageY),
        (a = re(t, o)),
        a ? ((Ct = !0), Z(a), (Nt = a.index)) : ((Nt = -1), (Ct = !1)),
        n(e));
  }
  function ce(e) {
    var t, o, r, a, d, s, l;
    for (t = e.changedTouches.length, o = 0; o < t; o += 1)
      if (((r = e.changedTouches[o]), (a = r.identifier), a === yo)) {
        (yo = -1),
          (Ct = !1),
          (d = r.pageX),
          (s = r.pageY),
          (l = re(d, s)),
          l && $(l),
          (Nt = -1),
          (Lt = !1);
        break;
      }
    return n(e);
  }
  function fe(e) {
    var t, o, r, a, d, s, l, u;
    for (t = e.changedTouches.length, o = 0; o < t; o += 1)
      if (((r = e.changedTouches[o]), (a = r.identifier), a === yo)) {
        (d = r.pageX),
          (s = r.pageY),
          (l = re(d, s)),
          l
            ? ((Ct = !0),
              Nt !== l.index &&
                (-1 !== Nt && ((u = so[Nt]), ne(u)), ee(l), (Nt = l.index)))
            : (-1 !== Nt && ((u = so[Nt]), ne(u)), (Nt = -1), Ct && te());
        break;
      }
    return n(e);
  }
  function be() {
    var e;
    for (yt.length = 0, vt = !1, At = !1, xt = !1, e = 0; 256 > e; e += 1)
      Tt[e] = 0;
  }
  function _e(e, n) {
    var t;
    return (
      (t = e),
      65 <= t && 90 >= t
        ? !n && (t += 32)
        : ((t = bo[t]), n && 256 > t && (t = _o[t])),
      t
    );
  }
  function he(e) {
    return 32 <= e || 13 === e || 8 === e || 9 === e || 27 === e;
  }
  function Re(e) {
    var t, o, r, a, d, s;
    if (((t = "[_keyDown] "), (o = !1), kt)) return !0;
    if (
      ((vt = e.shiftKey),
      (At = e.ctrlKey),
      (xt = e.altKey),
      (r = e.which ? e.which : e.keyCode),
      (a = _e(r, vt)),
      he(a))
    ) {
      if (
        !Tt[a] &&
        ((Tt[a] = 1),
        a !== r &&
          Tt[r] &&
          ((Tt[r] = 0), (s = yt.indexOf(r)), 0 <= s && yt.splice(s, 1)),
        1 > yt.length && (Ro = To),
        0 > yt.indexOf(a) && yt.push(a),
        PS.keyDown)
      )
        try {
          (Uo.keyOptions.time = Uo.ticks),
            PS.keyDown(a, vt, At, Uo.keyOptions),
            (o = !0);
        } catch (e) {
          S(t + "PS.keyDown failed [" + e.message + "]", e);
        }
    } else if (16 === a)
      for (d = yt.length, s = 0; s < d; s += 1)
        if (
          ((a = r = yt[s]),
          97 <= r && 122 >= r ? (a -= 32) : 256 > r && (a = _o[r]),
          a !== r && ((Tt[r] = 0), (Tt[a] = 1), (yt[s] = a), PS.keyDown))
        )
          try {
            (Uo.keyOptions.time = Uo.ticks),
              PS.keyDown(a, !0, At, Uo.keyOptions),
              (o = !0);
          } catch (e) {
            S(t + "PS.keyDown failed [" + e.message + "]", e);
          }
    return o && R(), n(e);
  }
  function Ee(e) {
    var t, o, r, a, d, s, l, u;
    if (((t = "[_keyUp] "), (o = !1), kt)) return !0;
    if (
      ((r = vt = e.shiftKey),
      (a = At = e.ctrlKey),
      (d = e.which ? e.which : e.keyCode),
      (s = _e(d, vt)),
      he(s))
    ) {
      if (
        ((Tt[s] = 0),
        (l = yt.indexOf(s)),
        0 <= l && yt.splice(l, 1),
        1 > yt.length && ((Ro = 0), (vt = !1), (At = !1), (xt = !1)),
        PS.keyUp)
      )
        try {
          (Go.time = Uo.ticks), PS.keyUp(s, r, a, Go), (o = !0);
        } catch (e) {
          S(t + "PS.keyUp failed [" + e.message + "]", e);
        }
    } else if (16 === s)
      for (u = yt.length, l = 0; l < u; l += 1)
        if (
          ((s = d = yt[l]),
          256 > d && (s = ho[d]),
          s !== d && ((Tt[d] = 0), (Tt[s] = 1), (yt[l] = s), PS.keyDown))
        )
          try {
            (Go.time = Uo.ticks), PS.keyDown(s, !1, a, Go), (o = !0);
          } catch (e) {
            S(t + "PS.keyDown failed [" + e.message + "]", e);
          }
    return o && R(), n(e);
  }
  function Te(e) {
    var t;
    return (
      !Ct ||
      (e || (e = window.event),
      (t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))),
      (t = 1 <= t ? PS.WHEEL_FORWARD : PS.WHEEL_BACKWARD),
      (Ho.wheel = t),
      (qo.time = Uo.ticks),
      zo(Ho, qo),
      n(e))
    );
  }
  function ye() {
    Et ||
      (be(),
      document.addEventListener("keydown", Re, !!tt && ot),
      document.addEventListener("keyup", Ee, !!tt && ot),
      (Et = !0));
  }
  function ve() {
    Et &&
      ((Et = !1),
      document.removeEventListener("keydown", Re, !1),
      document.removeEventListener("keyup", Ee, !1));
  }
  function Ae() {
    var e;
    (e = io.canvas),
      (e.style.display = "block"),
      oe(),
      document.addEventListener("mousedown", ae, !!tt && ot),
      document.addEventListener("mouseup", ie, !!tt && ot),
      e.addEventListener("mousedown", le, !!tt && ot),
      e.addEventListener("mouseup", ue, !!tt && ot),
      e.addEventListener("mousemove", ge, !!tt && ot),
      e.addEventListener("mouseout", me, !!tt && ot),
      ye(),
      window.addEventListener("mousewheel", Te, !tt || at),
      St &&
        (document.addEventListener("touchmove", fe, !!tt && ot),
        document.addEventListener("touchstart", pe, !!tt && ot),
        document.addEventListener("touchend", ce, !!tt && ot),
        document.addEventListener("touchcancel", ce, !!tt && ot));
  }
  function xe(e) {
    var n, t, o, a, i, d;
    return ((n = io.color), (t = io.fader), (o = e.rgb), o === PS.CURRENT)
      ? n.rgb
      : (null === o
          ? ((a = e.r),
            a === PS.CURRENT
              ? (e.r = a = n.r)
              : a === PS.DEFAULT && (e.r = a = Zn.grid.color.r),
            (i = e.g),
            i === PS.CURRENT
              ? (e.g = i = n.g)
              : i === PS.DEFAULT && (e.g = i = Zn.grid.color.g),
            (d = e.b),
            d === PS.CURRENT
              ? (e.b = d = n.b)
              : d === PS.DEFAULT && (e.b = d = Zn.grid.color.b),
            (e.rgb = 65536 * a + 256 * i + d))
          : o === PS.DEFAULT &&
            (e = {
              r: 255,
              g: 255,
              b: 255,
              a: 255,
              rgb: 16777215,
              str: "rgba(255,255,255,1)",
            }),
        (n.rgb !== e.rgb ||
          (0 < t.rate && null !== t.rgb && t.rgb !== e.rgb)) &&
          ((n.rgb = e.rgb),
          (a = e.r),
          (i = e.g),
          (d = e.b),
          (n.str = e.str = Zt[a] + $t[i] + eo[d]),
          0 < t.rate
            ? null === t.rgb
              ? t.active
                ? P(t, a, i, d, 255)
                : F(t, n.r, n.g, n.b, 255, a, i, d, 255)
              : F(t, t.r, t.g, t.b, 255, a, i, d, 255)
            : (l(), Do()),
          (n.r = a),
          (n.g = i),
          (n.b = d)),
        n.rgb);
  }
  function Ue(e, n) {
    var t, o, a, i, d;
    return (
      (t = io.shadow),
      (o = n.rgb),
      o !== PS.CURRENT &&
        (null === o
          ? ((a = n.r),
            a === PS.CURRENT
              ? (n.r = a = t.r)
              : a === PS.DEFAULT && (n.r = a = Zn.grid.shadow.r),
            (i = n.g),
            i === PS.CURRENT
              ? (n.g = i = t.g)
              : i === PS.DEFAULT && (n.g = i = Zn.grid.shadow.g),
            (d = n.b),
            d === PS.CURRENT
              ? (n.b = d = t.b)
              : d === PS.DEFAULT && (n.b = d = Zn.grid.shadow.b),
            (n.rgb = 65536 * a + 256 * i + d))
          : o === PS.DEFAULT &&
            (n = {
              show: !1,
              r: 192,
              g: 192,
              b: 192,
              a: 255,
              rgb: 12632256,
              str: "rgba(192,192,192,1)",
              params: "0px 0px 64px 8px ",
            }),
        t.rgb !== n.rgb &&
          ((t.rgb = n.rgb),
          (a = n.r),
          (i = n.g),
          (d = n.b),
          (t.str = n.str = Zt[a] + $t[i] + eo[d]),
          (t.r = a),
          (t.g = i),
          (t.b = d))),
      e !== PS.CURRENT && (io.shadow.show = e),
      io.shadow.show ? Po(t) : (io.canvas.style.boxShadow = "none"),
      { show: io.shadow.show, rgb: t.rgb }
    );
  }
  function Se(e, n) {
    var t, o, r, a, d, s, l;
    if (
      (ct(),
      w(io.fader),
      w(lo.fader),
      oe(),
      (io.plane = 0),
      !io.ready || e !== io.x || n !== io.y)
    ) {
      for (
        io.x = e,
          io.y = n,
          io.count = e * n,
          io.left = 0,
          io.top = 0,
          t = e >= n ? Math.floor(ro / e) : Math.floor(ro / n),
          io.bead_size = t,
          io.width = t * e,
          io.height = t * n,
          io.right = io.width,
          io.bottom = io.height,
          io.canvas.width = io.width,
          io.canvas.height = io.height,
          io.context.textAlign = "center",
          io.context.textBaseline = "middle",
          a = 0,
          s = io.top,
          r = 0;
        r < n;
        r += 1
      ) {
        for (d = io.left, o = 0; o < e; o += 1)
          (l = so[a]),
            (l.x = o),
            (l.y = r),
            (l.left = d),
            (l.right = d + t),
            (l.top = s),
            (l.bottom = s + t),
            K(l),
            H(l),
            M(l),
            (d += t),
            (a += 1);
        s += t;
      }
      for (; 1024 > a; )
        (l = so[a]), (l.visible = !1), (l.active = !1), (a += 1);
    } else for (o = 0; o < io.count; o += 1) (l = so[o]), K(l), H(l), M(l);
    (dt = !0),
      xe({ rgb: PS.DEFAULT }),
      PS.statusColor(PS.DEFAULT),
      R(),
      (io.ready = !0);
  }
  function Le(e, n) {
    return "number" === zt(e)
      ? ((e = Math.floor(e)),
        0 > e
          ? L(n + "x argument negative")
          : e >= io.x
          ? L(n + "x argument exceeds grid width")
          : e)
      : L(n + "x argument not a number");
  }
  function Ce(e, n) {
    return "number" === zt(e)
      ? ((e = Math.floor(e)),
        0 > e
          ? L(n + "y argument negative")
          : e >= io.y
          ? L(n + "y argument exceeds grid height")
          : e)
      : L(n + "y argument not a number");
  }
  function we(e, n, t, o, r, a, d, s) {
    var l, u, g;
    if (t === PS.ALL) {
      if (o === PS.ALL) {
        for (u = 0; u < io.y; u += 1)
          for (
            l = 0;
            l < io.x && ((g = n(l, u, r, a, d, s)), g !== PS.ERROR);
            l += 1
          );
        return g;
      }
      if (((o = Ce(o, e)), o === PS.ERROR)) return PS.ERROR;
      for (
        l = 0;
        l < io.x && ((g = n(l, o, r, a, d, s)), g !== PS.ERROR);
        l += 1
      );
      return g;
    }
    if (o === PS.ALL) {
      if (((t = Le(t, e)), t === PS.ERROR)) return PS.ERROR;
      for (
        u = 0;
        u < io.y && ((g = n(t, u, r, a, d, s)), g !== PS.ERROR);
        u += 1
      );
      return g;
    }
    return ((t = Le(t, e)), t === PS.ERROR)
      ? PS.ERROR
      : ((o = Ce(o, e)), o === PS.ERROR)
      ? PS.ERROR
      : ((g = n(t, o, r, a, d, s)), g);
  }
  function Ne(e, n, t) {
    var o, a, i, d, s, l, u, m, p;
    return ((o = n * io.x + e),
    (a = so[o]),
    (i = Zn.bead.color),
    (d = W(a, io.plane)),
    (s = a.fader),
    (l = t.rgb),
    !a.active || l === PS.CURRENT)
      ? d.rgb
      : (null === l
          ? ((u = t.r),
            u === PS.CURRENT
              ? (t.r = u = d.r)
              : u === PS.DEFAULT && (t.r = u = i.r),
            (m = t.g),
            m === PS.CURRENT
              ? (t.g = m = d.g)
              : m === PS.DEFAULT && (t.g = m = i.g),
            (p = t.b),
            p === PS.CURRENT
              ? (t.b = p = d.b)
              : p === PS.DEFAULT && (t.b = p = i.b),
            (t.rgb = 65536 * u + 256 * m + p))
          : l === PS.DEFAULT &&
            (t = {
              r: 255,
              g: 255,
              b: 255,
              a: 255,
              rgb: 16777215,
              str: "rgba(255,255,255,1)",
            }),
        (d.rgb !== t.rgb ||
          (0 < s.rate && null !== s.rgb && s.rgb !== t.rgb)) &&
          ((d.rgb = t.rgb), (d.r = t.r), (d.g = t.g), (d.b = t.b), O(a)),
        d.rgb);
  }
  function De(e, n, t) {
    var o, r, a;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      (a = W(r, io.plane)),
      r.active && t !== PS.CURRENT && t !== a.a && ((a.a = t), O(r)),
      a.a
    );
  }
  function Fe(e, n) {
    var t, o, r, a, i, d, s;
    if (((t = zt(n)), "undefined" === t || n === PS.CURRENT))
      return {
        rgb: PS.CURRENT,
        r: 0,
        g: 0,
        b: 0,
        onStep: PS.CURRENT,
        onEnd: PS.CURRENT,
        params: PS.CURRENT,
      };
    if (n === PS.DEFAULT)
      return {
        rgb: PS.DEFAULT,
        r: 0,
        g: 0,
        b: 0,
        onStep: PS.DEFAULT,
        onEnd: PS.DEFAULT,
        params: PS.DEFAULT,
      };
    if ("object" !== t) return L(e + "options argument invalid");
    if (((o = n.rgb), o === PS.CURRENT || o === PS.DEFAULT))
      (n.r = 0), (n.g = 0), (n.b = 0);
    else if (((t = zt(o)), "undefined" === t || null === o)) n.rgb = PS.CURRENT;
    else if ("number" === t)
      (o = Math.floor(o)),
        o <= PS.COLOR_BLACK
          ? ((o = PS.COLOR_BLACK), (r = 0), (i = 0), (a = 0))
          : o >= PS.COLOR_WHITE
          ? ((o = PS.COLOR_WHITE), (r = 255), (i = 255), (a = 255))
          : ((r = o / 65536),
            (r = Math.floor(r)),
            (d = 65536 * r),
            (i = (o - d) / 256),
            (i = Math.floor(i)),
            (s = 256 * i),
            (a = o - d - s)),
        (n.rgb = o),
        (n.r = r),
        (n.g = i),
        (n.b = a);
    else return L(e + "options.rgb property invalid");
    if (((o = n.onStep), o !== PS.CURRENT && o !== PS.DEFAULT))
      if (((t = zt(o)), "undefined" === t || null === o)) n.onStep = PS.CURRENT;
      else if ("function" !== t)
        return L(e + "options.onStep property invalid");
    if (((o = n.onEnd), o !== PS.CURRENT && o !== PS.DEFAULT))
      if (((t = zt(o)), "undefined" === t || null === o)) n.onEnd = PS.CURRENT;
      else if ("function" !== t) return L(e + "options.onEnd property invalid");
    if (((o = n.params), o !== PS.CURRENT && o !== PS.DEFAULT))
      if (((t = zt(o)), "undefined" === t || null === o)) n.params = PS.CURRENT;
      else if ("array" !== t) return L(e + "options.params property invalid");
    return n;
  }
  function Pe(e, n, t, o) {
    var r, a, i, d, s, l, u;
    return (
      (r = n * io.x + e),
      (a = so[r]),
      (i = a.color),
      (d = a.fader),
      (s = d.rate),
      a.active &&
        ((l = t === PS.CURRENT ? s : t === PS.DEFAULT ? Zn.fader.rate : t),
        (u = o.rgb),
        u !== PS.CURRENT &&
          ((d.rgb = u === PS.DEFAULT ? Zn.fader.rgb : u),
          (d.r = o.r),
          (d.g = o.g),
          (d.b = o.b)),
        (u = o.onStep),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.onStep = Zn.fader.onStep) : (d.onStep = u)),
        (u = o.onEnd),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.onEnd = Zn.fader.onEnd) : (d.onEnd = u)),
        (u = o.params),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.params = Zn.fader.params) : (d.params = u)),
        s !== l &&
          ((d.rate = l),
          1 > l
            ? ((d.active = !1), (d.kill = !0))
            : d.active && P(d, i.r, i.g, i.b, 255))),
      {
        rate: d.rate,
        rgb: d.rgb,
        onStep: d.onStep,
        onEnd: d.onEnd,
        params: d.params,
      }
    );
  }
  function Oe(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        r.scale !== t &&
        ((r.scale = t), H(r), _(r)),
      r.scale
    );
  }
  function ke(e, n, t) {
    var o, r, a;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        r.radius !== t &&
        ((r.radius = t),
        !r.border.equal &&
          0 < t &&
          ((a = Math.max(
            r.border.top,
            r.border.left,
            r.border.bottom,
            r.border.right
          )),
          z(r, a)),
        _(r)),
      r.radius
    );
  }
  function Ie(e, n, t) {
    var o, a, i, d, s, l, u, m;
    return ((o = n * io.x + e),
    (a = so[o]),
    (i = Zn.bead.bgColor),
    (d = a.bgColor),
    (s = t.rgb),
    !a.active || s === PS.CURRENT)
      ? d.rgb
      : (null === s
          ? ((l = t.r),
            l === PS.CURRENT
              ? (t.r = l = d.r)
              : l === PS.DEFAULT && (t.r = l = i.r),
            (u = t.g),
            u === PS.CURRENT
              ? (t.g = u = d.g)
              : u === PS.DEFAULT && (t.g = u = i.g),
            (m = t.b),
            m === PS.CURRENT
              ? (t.b = m = d.b)
              : m === PS.DEFAULT && (t.b = m = i.b),
            (t.rgb = 65536 * l + 256 * u + m))
          : s === PS.DEFAULT &&
            (t = {
              r: 255,
              g: 255,
              b: 255,
              a: 0,
              rgb: 16777215,
              str: "rgba(255,255,255,0)",
            }),
        d.rgb !== t.rgb &&
          ((d.rgb = t.rgb),
          (d.r = l = t.r),
          (d.g = u = t.g),
          (d.b = m = t.b),
          (d.str = Zt[l] + $t[u] + $t[m] + no[d.a]),
          a.active && (100 > a.scale || 0 < a.radius) && _(a)),
        d.rgb);
  }
  function Be(e, n, t) {
    var o, r, a;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      (a = r.bgColor),
      t !== PS.CURRENT &&
        t !== a.a &&
        ((a.a = t),
        (a.str = Zt[a.r] + $t[a.g] + $t[a.b] + no[t]),
        r.active && (100 > r.scale || 0 < r.radius) && _(r)),
      a.a
    );
  }
  function Me(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        (null === t
          ? ((r.data = Zn.bead.data),
            (r.fader.data = r.data),
            (r.border.fader.data = r.data),
            (r.glyph.fader.data = r.data))
          : ((r.data = t),
            (r.fader.data = t),
            (r.border.fader.data = t),
            (r.glyph.fader.data = t))),
      r.data
    );
  }
  function Ye(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active && t !== PS.CURRENT && (r.exec = t),
      r.exec
    );
  }
  function Ke(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        r.visible !== t &&
        ((r.visible = t),
        !t &&
          ((r.fader.kill = !0),
          (r.border.fader.kill = !0),
          (r.glyph.fader.kill = !0)),
        _(r)),
      r.visible
    );
  }
  function We(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      t !== PS.CURRENT && (r.active = t),
      r.active
    );
  }
  function Ge(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        r.minimum !== t &&
        (t > r.size && (t = r.size), (r.minimum = t), H(r), _(r)),
      r.minimum
    );
  }
  function ze(e, n, t) {
    var o, r, a, i, d, s, l, u, g;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        ((a = G(r)),
        "number" === zt(t)
          ? (t > a && (t = a), t !== r.border.width && (z(r, t), _(r)))
          : ((d = !1),
            (s = t.top),
            s === PS.CURRENT
              ? (s = r.border.top)
              : (s > a && (s = a),
                s !== r.border.top && ((r.border.top = s), (d = !0))),
            (l = t.left),
            l === PS.CURRENT
              ? (l = r.border.left)
              : (l > a && (l = a),
                l !== r.border.left && ((r.border.left = l), (d = !0))),
            (u = t.bottom),
            u === PS.CURRENT
              ? (u = r.border.bottom)
              : (u > a && (u = a),
                u !== r.border.bottom && ((r.border.bottom = u), (d = !0))),
            (g = t.right),
            g === PS.CURRENT
              ? (g = r.border.right)
              : (g > a && (g = a),
                g !== r.border.right && ((r.border.right = g), (d = !0))),
            s === l && s === g && s === u
              ? (z(r, s), d && _(r))
              : 0 < r.radius
              ? ((a = Math.max(s, l, u, g)), z(r, a), _(r))
              : ((r.border.equal = !1), d && _(r)))),
      (i = {
        top: r.border.top,
        left: r.border.left,
        bottom: r.border.bottom,
        right: r.border.right,
        equal: r.border.equal,
      }),
      r.border.equal ||
        (r.border.width = Math.max(i.top, i.left, i.bottom, i.right)),
      (i.width = r.border.width),
      i
    );
  }
  function He(e, n, t) {
    var o, i, d, s, l, u, m, p, c, f;
    return (
      (o = n * io.x + e),
      (i = so[o]),
      (d = i.border.color),
      (s = i.border.fader),
      (l = Zn.bead.border.color),
      (u = t.rgb),
      i.active &&
        u !== PS.CURRENT &&
        (null === u
          ? ((m = t.r),
            m === PS.CURRENT
              ? (t.r = m = d.r)
              : m === PS.DEFAULT && (t.r = m = l.r),
            (p = t.g),
            p === PS.CURRENT
              ? (t.g = p = d.g)
              : p === PS.DEFAULT && (t.g = p = l.g),
            (c = t.b),
            c === PS.CURRENT
              ? (t.b = c = d.b)
              : c === PS.DEFAULT && (t.b = c = l.b),
            (t.rgb = 65536 * m + 256 * p + c))
          : u === PS.DEFAULT &&
            (t = {
              r: 128,
              g: 128,
              b: 128,
              a: 255,
              rgb: 8421504,
              str: "rgba(128,128,128,1)",
            }),
        (d.rgb !== t.rgb ||
          (0 < s.rate && null !== s.rgb && s.rgb !== t.rgb)) &&
          ((d.rgb = t.rgb),
          (m = t.r),
          (p = t.g),
          (c = t.b),
          (t.a = f = d.a),
          (d.str = t.str = Zt[m] + $t[p] + $t[c] + no[f]),
          i.visible &&
            (0 < s.rate
              ? null === s.rgb
                ? s.active
                  ? P(s, m, p, c, f)
                  : F(s, d.r, d.g, d.b, f, m, p, c, f)
                : F(s, s.r, s.g, s.b, f, m, p, c, f)
              : _(i)),
          (d.r = m),
          (d.g = p),
          (d.b = c))),
      d.rgb
    );
  }
  function qe(e, n, t) {
    var o, a, i, d, s, l, u;
    return (
      (o = n * io.x + e),
      (a = so[o]),
      (i = a.border.color),
      a.active &&
        t !== PS.CURRENT &&
        t !== i.a &&
        ((d = i.r),
        (s = i.g),
        (l = i.b),
        (i.str = Zt[d] + $t[s] + $t[l] + no[t]),
        a.visible &&
          ((u = a.border.fader),
          0 < u.rate
            ? u.active
              ? P(u, d, s, l, t)
              : null === u.rgb
              ? F(u, d, s, l, i.a, d, s, l, t)
              : F(u, u.r, u.g, u.b, i.a, d, s, l, t)
            : _(a)),
        (i.a = t)),
      i.a
    );
  }
  function je(e, n, t, o) {
    var r, a, i, d, s, l, u;
    return (
      (r = n * io.x + e),
      (a = so[r]),
      (d = a.border.color),
      (i = a.border.fader),
      (s = i.rate),
      a.active &&
        ((l = t === PS.CURRENT ? s : t === PS.DEFAULT ? Zn.fader.rate : t),
        (u = o.rgb),
        u !== PS.CURRENT &&
          ((i.rgb = u === PS.DEFAULT ? Zn.fader.rgb : u),
          (i.r = o.r),
          (i.g = o.g),
          (i.b = o.b)),
        (u = o.onStep),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (i.onStep = Zn.fader.onStep) : (i.onStep = u)),
        (u = o.onEnd),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (i.onEnd = Zn.fader.onEnd) : (i.onEnd = u)),
        (u = o.params),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (i.params = Zn.fader.params) : (i.params = u)),
        s !== l &&
          ((i.rate = l),
          1 > l
            ? ((i.active = !1), (i.kill = !0))
            : i.active && P(i, d.r, d.g, d.b, 255))),
      {
        rate: i.rate,
        rgb: i.rgb,
        onStep: i.onStep,
        onEnd: i.onEnd,
        params: i.params,
      }
    );
  }
  function Ve(e, n, t) {
    var o, r;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      r.active &&
        t !== PS.CURRENT &&
        r.glyph.str !== t &&
        ((r.glyph.str = t),
        (r.glyph.code = 0 < t.length ? t.charCodeAt(0) : 0),
        _(r)),
      r.glyph.code
    );
  }
  function Je(e, n, t) {
    var o, i, d, s, l, u, m, p, c, f;
    return (
      (o = n * io.x + e),
      (i = so[o]),
      (d = i.glyph.color),
      (s = i.glyph.fader),
      (l = Zn.bead.glyph.color),
      (u = t.rgb),
      i.active &&
        u !== PS.CURRENT &&
        (null === u
          ? ((m = t.r),
            m === PS.CURRENT
              ? (t.r = m = d.r)
              : m === PS.DEFAULT && (t.r = m = l.r),
            (p = t.g),
            p === PS.CURRENT
              ? (t.g = p = d.g)
              : p === PS.DEFAULT && (t.g = p = l.g),
            (c = t.b),
            c === PS.CURRENT
              ? (t.b = c = d.b)
              : c === PS.DEFAULT && (t.b = c = l.b),
            (t.rgb = 65536 * m + 256 * p + c))
          : u === PS.DEFAULT &&
            (t = { r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" }),
        (d.rgb !== t.rgb ||
          (0 < s.rate && null !== s.rgb && s.rgb !== t.rgb)) &&
          ((d.rgb = t.rgb),
          (m = t.r),
          (p = t.g),
          (c = t.b),
          (t.a = f = d.a),
          (d.str = t.str = Zt[m] + $t[p] + $t[c] + no[f]),
          i.visible &&
            (0 < s.rate
              ? null === s.rgb
                ? s.active
                  ? P(s, m, p, c, f)
                  : F(s, d.r, d.g, d.b, f, m, p, c, f)
                : F(s, s.r, s.g, s.b, f, m, p, c, f)
              : _(i)),
          (d.r = m),
          (d.g = p),
          (d.b = c))),
      d.rgb
    );
  }
  function Xe(e, n, t) {
    var o, a, i, d, s, l, u;
    return (
      (o = n * io.x + e),
      (a = so[o]),
      (i = a.glyph.color),
      a.active &&
        t !== PS.CURRENT &&
        t !== i.a &&
        ((d = i.r),
        (s = i.g),
        (l = i.b),
        (i.str = Zt[d] + $t[s] + $t[l] + no[t]),
        a.visible &&
          ((u = a.glyph.fader),
          0 < u.rate
            ? u.active
              ? P(u, d, s, l, t)
              : F(u, d, s, l, i.a, d, s, l, t)
            : _(a)),
        (i.a = t)),
      i.a
    );
  }
  function Qe(e, n, t) {
    var o, r, a;
    return (
      (o = n * io.x + e),
      (r = so[o]),
      (a = r.glyph.scale),
      r.active &&
        t !== PS.CURRENT &&
        t !== a &&
        ((r.glyph.scale = t), r.visible && (M(r), _(r))),
      r.glyph.scale
    );
  }
  function Ze(e, n, t, o) {
    var r, a, i, d, s, l, u;
    return (
      (r = n * io.x + e),
      (a = so[r]),
      (i = a.glyph.color),
      (d = a.glyph.fader),
      (s = d.rate),
      a.active &&
        ((l = t === PS.CURRENT ? s : t === PS.DEFAULT ? Zn.fader.rate : t),
        (u = o.rgb),
        u !== PS.CURRENT &&
          ((d.rgb = u === PS.DEFAULT ? Zn.fader.rgb : u),
          (d.r = o.r),
          (d.g = o.g),
          (d.b = o.b)),
        (u = o.onStep),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.onStep = Zn.fader.onStep) : (d.onStep = u)),
        (u = o.onEnd),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.onEnd = Zn.fader.onEnd) : (d.onEnd = u)),
        (u = o.params),
        u !== PS.CURRENT &&
          (u === PS.DEFAULT ? (d.params = Zn.fader.params) : (d.params = u)),
        s !== l &&
          ((d.rate = l),
          1 > l
            ? ((d.active = !1), (d.kill = !0))
            : d.active && P(d, i.r, i.g, i.b, 255))),
      {
        rate: d.rate,
        rgb: d.rgb,
        onStep: d.onStep,
        onEnd: d.onEnd,
        params: d.params,
      }
    );
  }
  function $e(e) {
    var n, t, o, r, a;
    for (n = e.getAttribute("data-id"), t = go.length, o = 0; o < t; o += 1)
      if (((r = go[o]), r.id === n)) {
        (a = r.exec), go.splice(o, 1);
        break;
      }
    try {
      a(PS.ERROR);
    } catch (e) {
      S("[PS.imageLoad] .exec function failed [" + e.message + "]", e);
    }
    L("[PS.imageLoad] Error loading " + e.src);
  }
  function en(e, n) {
    var t, o, d, s, l, u, m, p, c, f, _, R, E, T, y;
    if (((t = "[_imageExtract] "), (o = e.width), "number" !== zt(o) || 1 > o))
      return L(t + "image width invalid");
    if (((o = Math.floor(o)), (d = e.height), "number" !== zt(d) || 1 > d))
      return L(t + "image height invalid");
    d = Math.floor(d);
    try {
      (uo.width = o),
        (uo.height = d),
        (s = uo.getContext("2d")),
        s.drawImage(e, 0, 0, o, d, 0, 0, o, d);
    } catch (e) {
      return S(t + "image extraction failed @ 1 [" + e.message + "]", e);
    }
    try {
      l = s.getImageData(0, 0, o, d);
    } catch (e) {
      return S(t + "image extraction failed @ 2 [" + e.message + "]", e);
    }
    if (
      ((u = { width: l.width, height: l.height }),
      (m = l.data),
      (p = m.length),
      (c = []),
      (_ = f = 0),
      1 === n)
    )
      for (c.length = p / 4; f < p; )
        (R = m[f]),
          (E = m[f + 1]),
          (T = m[f + 2]),
          (c[_] = 65536 * R + 256 * E + T),
          (f += 4),
          (_ += 1);
    else if (2 === n)
      for (c.length = p / 2; f < p; )
        (R = m[f]),
          (E = m[f + 1]),
          (T = m[f + 2]),
          (y = m[f + 3]),
          (c[_] = 65536 * R + 256 * E + T),
          (c[_ + 1] = y),
          (f += 4),
          (_ += 2);
    else if (3 === n)
      for (c.length = 3 * (p / 4); f < p; )
        (R = m[f]),
          (E = m[f + 1]),
          (T = m[f + 2]),
          (c[_] = R),
          (c[_ + 1] = E),
          (c[_ + 2] = T),
          (f += 4),
          (_ += 3);
    else
      for (c.length = p; f < p; )
        (c[f] = m[f]),
          (f += 1),
          (c[f] = m[f]),
          (f += 1),
          (c[f] = m[f]),
          (f += 1),
          (c[f] = m[f]),
          (f += 1);
    return (u.pixelSize = n), (u.data = c), u;
  }
  function nn(e) {
    var n, t, o, r, a, d, s, l;
    for (n = e.getAttribute("data-id"), t = go.length, o = 0; o < t; o += 1)
      if (((r = go[o]), r.id === n)) {
        (a = r.exec), (d = r.format), (s = r.source), go.splice(o, 1);
        break;
      }
    if (((l = en(e, d)), l !== PS.ERROR))
      try {
        (l.source = s), (l.id = n), a(l);
      } catch (e) {
        S("[PS.imageLoad] .exec function failed [" + e.message + "]", e);
      }
  }
  function tn(e, n) {
    var t, o, r, a, d, s, l, u;
    if ("object" !== zt(n)) return L(e + "image argument not an object");
    if (((t = n.width), "number" !== zt(t)))
      return L(e + "image.width not a number");
    if (((t = Math.floor(t)), 1 > t)) return L(e + "image.width < 1");
    if (((n.width = t), (o = n.height), "number" !== zt(o)))
      return L(e + "image.height not a number");
    if (((o = Math.floor(o)), 1 > o)) return L(e + "image.height < 1");
    if (((n.height = o), (r = n.pixelSize), "number" !== zt(r)))
      return L(e + "image.pixelSize not a number");
    if (((r = Math.floor(r)), 1 > r && 4 < r))
      return L(e + "image.pixelSize is not 1, 2, 3 or 4");
    if (((n.pixelSize = r), (d = n.data), "array" !== zt(d)))
      return L(e + "image.data is not an array");
    if (((s = d.length), (a = t * o * r), s !== a))
      return L(e + "image.data length invalid");
    for (l = 0; l < s; l += 1) {
      if (((u = d[l]), "number" !== zt(u)))
        return L(e + "image.data[" + l + "] not a number");
      if (0 > u) return L(e + "image.data[" + l + "] negative");
      if (3 > r) {
        if (16777215 < u) return L(e + "image.data[" + l + "] > 0xFFFFFF");
      } else if (255 < u) return L(e + "image.data[" + l + "] > 255");
    }
    return !0;
  }
  function on(e, n, t, o, r, i, d) {
    var a;
    return (
      3 > e
        ? ((a = ""),
          (a += n ? Ht(t, 6, 16) : t),
          2 == e && (n ? (a += ", " + Ht(d, 2, 16)) : (a += ", " + d)))
        : ((a = n
            ? Ht(o, 2, 16) + ", " + Ht(r, 2, 16) + ", " + Ht(i, 2, 16)
            : o + ", " + r + ", " + i),
          4 == e && (n ? (a += ", " + Ht(d, 2, 16)) : (a += ", " + d))),
      a
    );
  }
  function rn() {
    var e;
    return (
      (e = {
        id: "sprite_" + gt,
        placed: !1,
        visible: !0,
        x: 0,
        y: 0,
        ax: 0,
        ay: 0,
        image: null,
        color: null,
        collide: null,
        width: 0,
        height: 0,
        plane: -1,
      }),
      (gt += 1),
      mo.push(e),
      e
    );
  }
  function an(e, n) {
    var t, o, r;
    if ("string" !== typeof e || 1 > e.length)
      return L(n + "sprite argument invalid");
    for (t = mo.length, o = 0; o < t; o += 1)
      if (((r = mo[o]), r.id === e)) return r;
    return L(n + "sprite id '" + e + "' does not exist");
  }
  function dn(e, n, t, o, r) {
    var a, d, s, l, u, g, m, p, c;
    if (
      (void 0 === n && ((n = e.x), (t = e.y), (o = e.width), (r = e.height)),
      (a = io.x),
      (n -= e.ax),
      !(n >= a))
    ) {
      if (0 > n) {
        if (((o += n), 1 > o)) return;
        n = 0;
      }
      if (
        (n + o > a && (o = a - n),
        (s = n + o),
        (d = io.y),
        (t -= e.ay),
        !(t >= d))
      ) {
        if (0 > t) {
          if (((r += t), 1 > r)) return;
          t = 0;
        }
        for (t + r > d && (r = d - t), l = t + r, g = t; g < l; g += 1)
          for (u = n; u < s; u += 1)
            (p = u + g * a),
              (m = so[p]),
              m.active &&
                ((c = W(m, e.plane)),
                (c.r = 255),
                (c.g = 255),
                (c.b = 255),
                (c.a = 0),
                (c.rgb = 16777215),
                O(m));
      }
    }
  }
  function sn(e) {
    var n, t, o, d, s, l, u, m, p, c, f, _, h, R, E, T, v, A, U, S, L, C;
    if (
      ((n = e.width), (t = e.height), !(1 > n || 1 > t)) &&
      ((o = io.x), (p = 0), (s = e.x - e.ax), !(s >= o))
    ) {
      if (0 > s) {
        if (((n += s), 1 > n)) return;
        (s = 0), (p = e.width - n);
      }
      if (
        (s + n > o && (n = o - s),
        (u = s + n),
        (d = io.y),
        (c = 0),
        (l = e.y - e.ay),
        !(l >= d))
      ) {
        if (0 > l) {
          if (((t += l), 1 > t)) return;
          (l = 0), (c = e.height - t);
        }
        if ((l + t > d && (t = d - l), (m = l + t), (f = e.color), f))
          for (h = l; h < m; h += 1)
            for (_ = s; _ < u; _ += 1)
              (E = _ + h * o),
                (R = so[E]),
                R.active &&
                  ((T = W(R, e.plane)),
                  (T.rgb = f.rgb),
                  (T.r = f.r),
                  (T.g = f.g),
                  (T.b = f.b),
                  (T.a = f.a),
                  O(R));
        else
          for (v = e.image.data, h = l; h < m; h += 1) {
            for (A = 4 * (c * e.width + p), _ = s; _ < u; _ += 1)
              (E = _ + h * o),
                (R = so[E]),
                R.active &&
                  ((U = v[A]),
                  (S = v[A + 1]),
                  (L = v[A + 2]),
                  (C = v[A + 3]),
                  (T = W(R, e.plane)),
                  (T.rgb = 65536 * U + 256 * S + L),
                  (T.r = U),
                  (T.g = S),
                  (T.b = L),
                  (T.a = C),
                  O(R)),
                (A += 4);
            c += 1;
          }
      }
    }
  }
  function ln(e, n) {
    var t, o, r, a, d, s, l, u, g, m, p, c, f, b, _, R, E, T;
    for (
      t = "[_collisionCheck] ",
        a = e.x - e.ax,
        d = e.y - e.ay,
        s = e.width,
        l = e.height,
        u = e.collide,
        o = mo.length,
        r = 0;
      r < o;
      r += 1
    )
      if (
        ((g = mo[r]),
        (m = g.id),
        m !== n &&
          g.visible &&
          g.placed &&
          ((p = g.x - g.ax),
          (c = g.y - g.ay),
          (f = g.width),
          (b = g.height),
          (_ = g.collide),
          (R = p > a ? p - a : a - p),
          (E = c > d ? c - d : d - c),
          (T = null),
          a === p - s || a === p + f
            ? ((d <= c && E <= l) || (d >= c && E <= b)) &&
              (T = PS.SPRITE_TOUCH)
            : d === c - l || d === c + b
            ? ((a <= p && R <= s) || (a >= p && R <= f)) &&
              (T = PS.SPRITE_TOUCH)
            : a >= p && a < p + f
            ? ((d <= c && E < l) || (d >= c && E < b)) &&
              (T = PS.SPRITE_OVERLAP)
            : p >= a &&
              p < a + s &&
              ((c <= d && E < b) || (c >= d && E < l)) &&
              (T = PS.SPRITE_OVERLAP),
          T))
      ) {
        if (u)
          try {
            u(n, e.plane, m, g.plane, T);
          } catch (e) {
            return void S(
              t + n + " collide function failed [" + e.message + "]",
              e
            );
          }
        if (_)
          try {
            _(m, g.plane, n, e.plane, T);
          } catch (e) {
            return void S(
              t + m + " collide function failed [" + e.message + "]",
              e
            );
          }
      }
  }
  function un(e) {
    (this.content = []), (this.scoreFunction = e);
  }
  function gn(e, n, t, o) {
    var r, a, i, d, s, l, u;
    for (
      r = t > e ? t - e : e - t,
        a = o > n ? o - n : n - o,
        i = e < t ? 1 : -1,
        d = n < o ? 1 : -1,
        s = r - a,
        u = [];
      e !== t || n !== o;

    ) {
      if (((l = 2 * s), l > -a && ((s -= a), (e += i)), e === t && n === o)) {
        u.push([e, n]);
        break;
      }
      l < r && ((s += r), (n += d)), u.push([e, n]);
    }
    return u;
  }
  function mn(e, n, t, o, r, a) {
    var i, d, s, l, u, g, m, p, c;
    for (
      i = r > t ? r - t : t - r,
        d = a > o ? a - o : o - a,
        s = t < r ? 1 : -1,
        l = o < a ? 1 : -1,
        u = i - d,
        m = [];
      t !== r || o !== a;

    ) {
      if (((g = 2 * u), g > -d && ((u -= d), (t += s)), t === r && o === a))
        return m.push([t, o]), m;
      if (
        (g < i && ((u += i), (o += l)), (c = o * n + t), (p = e[c]), !p.value)
      )
        return null;
      m.push([t, o]);
    }
    return m;
  }
  function pn(e, n, t, o) {
    var r, a, i;
    return (
      (r = t > e ? t - e : e - t),
      (a = o > n ? o - n : n - o),
      (i = r > a ? a * jn + (r - a) : r * jn + (a - r)),
      i
    );
  }
  function cn(e, n, t, o, r, a) {
    var i, d, s, l, u, g, m, p, c, f, b, _, h, R, E;
    return (
      (i = []),
      (d = o.x),
      (s = o.y),
      (l = n - 1),
      (u = t - 1),
      (p = s * n),
      (g = (s - 1) * n),
      (m = (s + 1) * n),
      (_ = !1),
      (h = !1),
      (R = !1),
      (E = !1),
      0 < d &&
        ((c = d - 1),
        (f = p + c),
        (b = e[f]),
        b.value ? !b.closed && ((b.cost = b.value), i.push(b)) : (E = !0)),
      d < l &&
        ((c = d + 1),
        (f = p + c),
        (b = e[f]),
        b.value ? !b.closed && ((b.cost = b.value), i.push(b)) : (R = !0)),
      0 < s &&
        ((f = g + d),
        (b = e[f]),
        b.value ? !b.closed && ((b.cost = b.value), i.push(b)) : (_ = !0)),
      s < u &&
        ((f = m + d),
        (b = e[f]),
        b.value ? !b.closed && ((b.cost = b.value), i.push(b)) : (h = !0)),
      r ||
        (0 < d &&
          ((c = d - 1),
          0 < s &&
            (a || (!E && !_)) &&
            ((f = g + c),
            (b = e[f]),
            b.value && !b.closed && ((b.cost = b.value * jn), i.push(b))),
          s < u &&
            (a || (!E && !h)) &&
            ((f = m + c),
            (b = e[f]),
            b.value && !b.closed && ((b.cost = b.value * jn), i.push(b)))),
        d < l &&
          ((c = d + 1),
          0 < s &&
            (a || (!_ && !R)) &&
            ((f = g + c),
            (b = e[f]),
            b.value && !b.closed && ((b.cost = b.value * jn), i.push(b))),
          s < u &&
            (a || (!h && !R)) &&
            ((f = m + c),
            (b = e[f]),
            b.value && !b.closed && ((b.cost = b.value * jn), i.push(b))))),
      i
    );
  }
  function fn(e) {
    return e.f;
  }
  function bn(e, t, o, r, a, d, s) {
    var l, u, g, m, p, c, f, b, _, h, R, E, T, y, v, A;
    if (t === r && o === a) return [];
    if (
      ((l = e.width),
      (u = e.height),
      (g = e.nodes),
      (m = o * l + t),
      (p = g[m]),
      !p.value)
    )
      return [];
    if (((m = a * l + r), (p = g[m]), !p.value)) return [];
    if (!d && ((c = mn(g, l, t, o, r, a)), c)) return c;
    for (f = g.length, E = 0; E < f; E += 1)
      (p = g[E]),
        (p.f = 0),
        (p.g = 0),
        (p.h = 0),
        (p.cost = 0),
        (p.closed = !1),
        (p.visited = !1),
        (p.parent = null);
    for (
      c = [], b = new un(fn), m = o * l + t, p = g[m], b.push(p);
      0 < b.size();

    ) {
      if (((_ = b.pop()), _.x === r && _.y === a)) {
        for (A = _; A.parent; ) c.push([A.x, A.y]), (A = A.parent);
        c.reverse();
        break;
      }
      for (
        _.closed = !0, h = cn(g, l, u, _, d, s), R = h.length, E = 0;
        E < R;
        E += 1
      )
        (T = h[E]),
          (y = _.g + T.cost),
          (v = T.visited),
          (!v || y < T.g) &&
            ((T.visited = !0),
            (T.parent = _),
            (T.h = T.h || pn(T.x, T.y, r, a)),
            (T.g = y),
            (T.f = T.g + T.h),
            v ? b.rescore(T) : b.push(T));
    }
    return c;
  }
  function _n(e, n, t, o, r, a) {
    var d, s, l, u, g, m, p, c;
    for (
      d = [], d.length = o * r, s = e.nodes, l = t + r, p = 0, m = t;
      m < l;
      m += 1
    )
      for (u = m * e.width + n, g = 0; g < o; g += 1)
        (c = s[u]),
          a !== PS.CURRENT &&
            (a === PS.DEFAULT ? (c.value = c.ovalue) : (c.value = a)),
          (d[p] = c.value),
          (p += 1),
          (u += 1);
    return d;
  }
  function hn(e, n, t) {
    var o, r, a, i, d, s, l, u;
    for (r = t.length, o = [], o.length = r, a = 0, d = 0; d < n; d += 1)
      for (i = 0; i < e; i += 1)
        (l = t[a]),
          (s = {
            x: i,
            y: d,
            value: l,
            ovalue: l,
            f: 0,
            g: 0,
            h: 0,
            cost: 0,
            parent: null,
            closed: !1,
            visited: !1,
          }),
          (o[a] = s),
          (a += 1);
    return (
      (u = { id: "pathmap_" + It, width: e, height: n, nodes: o }),
      (It += 1),
      Ao.push(u),
      u
    );
  }
  function Rn(e) {
    var n, t, o;
    for (n = Ao.length, t = 0; t < n; t += 1)
      if (((o = Ao[t]), o.id === e)) return o;
    return null;
  }
  function En(e) {
    var n, t, o, r, a;
    for (n = Ao.length, t = 0; t < n; t += 1)
      if (((o = Ao[t]), o.id === e)) {
        for (r = o.nodes, n = r.length, a = 0; a < n; a += 1) r[a] = null;
        return (o.nodes = null), Ao.splice(t, 1), !0;
      }
    return !1;
  }
  function Tn(e, n, t, o, r) {
    var a, d, s, l, u, g, m, p, c, f, b, _, h, R, E, T, y, v, A;
    for (a = e.nodes, d = e.width, s = e.height, l = 1; l < d; ) {
      if (
        ((u = []),
        (g = o - l),
        (p = o + l),
        (m = r - l),
        (c = r + l),
        (f = g),
        0 > f && (f = 0),
        (b = p + 1),
        b >= d && (b = d),
        0 <= m)
      )
        for (_ = m * d + f, h = f; h < b; h += 1)
          (R = a[_]), R.value && u.push([R.x, R.y]), (_ += 1);
      if (c < s)
        for (_ = c * d + f, h = f; h < b; h += 1)
          (R = a[_]), R.value && u.push([R.x, R.y]), (_ += 1);
      if (((f = m + 1), 0 > f && (f = 0), (b = c), b >= s && (b = s), 0 <= g))
        for (_ = f * d + g, h = f; h < b; h += 1)
          (R = a[_]), R.value && u.push([R.x, R.y]), (_ += d);
      if (p < d)
        for (_ = f * d + p, h = f; h < b; h += 1)
          (R = a[_]), R.value && u.push([R.x, R.y]), (_ += d);
      if (((E = u.length), E)) {
        if (1 === E) return u[0];
        for (T = d + s, h = 0; h < E; h += 1)
          (A = u[h]), (v = pn(n, t, A[0], A[1])), v < T && ((T = v), (y = h));
        return u[y];
      }
      l += 1;
    }
    return [n, t];
  }
  function yn(e) {
    var n = e.toString();
    1 > n.length && (n = ""),
      (lo.inputP.style.display = "none"),
      (lo.statusNode.nodeValue = lo.text = n),
      (lo.statusP.style.display = "block");
  }
  function vn(e, n) {
    var t;
    if (((t = lo.exec), t && "function" === typeof t))
      try {
        t(e);
      } catch (e) {
        S("PS.statusInput() callback failed [" + e.message + "]", e);
      }
    lo.input.removeEventListener("keydown", n, !1), yn(lo.text), ye();
  }
  function An(e) {
    var t;
    return (
      (t = e.which),
      t || (t = e.keyCode),
      t === PS.KEY_ENTER
        ? (vn(lo.input.value, An), n(e))
        : t !== PS.KEY_ESCAPE || (vn("", An), n(e))
    );
  }
  function xn(e, n) {
    var t;
    (lo.statusP.style.display = "none"),
      (t = e),
      1 > t.length && (t = ">"),
      (lo.label = t),
      (lo.inputNode.nodeValue = t),
      (lo.exec = n),
      (lo.input.value = ""),
      ve(),
      lo.input.addEventListener("keydown", An, !!tt && ot),
      (lo.inputP.style.display = "block"),
      lo.input.focus();
  }
  function Un() {
    var e, n, t, o, r, a, i;
    (to =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth),
      (oo =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight),
      (e = 640),
      to >= e && oo >= e
        ? ((o = 512), (r = Kn), (a = 8), (i = 64))
        : ((n = 4 * (to / 5)),
          (t = 4 * (oo / 5)),
          (o = Math.min(n, t)),
          (o = 8 * Math.floor(o / 8)),
          (r = Kn * (o / 512)),
          (r = Math.floor(100 * r) / 100),
          (i = 64 * (o / 512)),
          (i = Math.floor(i)),
          (a = Math.floor(i / 8))),
      (ro = o),
      (ao = r + "em"),
      (Zn.grid.shadow.params = "0px 0px " + i + "px " + a + "px ");
  }
  function Sn() {
    try {
      return document.createEvent("TouchEvent"), !0;
    } catch (e) {
      return !1;
    }
  }
  var Ln = "main",
    Cn = "stsp",
    wn = "inp",
    Nn = "inlabel",
    Dn = "inspan",
    Fn = "inbox",
    Pn = "cover",
    On = "grid",
    kn = "footer",
    In = "debug",
    Bn = "monitor",
    Mn = "image_",
    Yn = 512,
    Kn = 1.25,
    Wn = 65536,
    Gn = 256,
    zn = {},
    Hn = 6,
    qn = -1,
    jn = 1.4142,
    Vn = 16,
    Jn = [
      "a0",
      "bb0",
      "b0",
      "c1",
      "db1",
      "d1",
      "eb1",
      "e1",
      "f1",
      "gb1",
      "g1",
      "ab1",
      "a1",
      "bb1",
      "b1",
      "c2",
      "db2",
      "d2",
      "eb2",
      "e2",
      "f2",
      "gb2",
      "g2",
      "ab2",
      "a2",
      "bb2",
      "b2",
      "c3",
      "db3",
      "d3",
      "eb3",
      "e3",
      "f3",
      "gb3",
      "g3",
      "ab3",
      "a3",
      "bb3",
      "b3",
      "c4",
      "db4",
      "d4",
      "eb4",
      "e4",
      "f4",
      "gb4",
      "g4",
      "ab4",
      "a4",
      "bb4",
      "b4",
      "c5",
      "db5",
      "d5",
      "eb5",
      "e5",
      "f5",
      "gb5",
      "g5",
      "ab5",
      "a5",
      "bb5",
      "b5",
      "c6",
      "db6",
      "d6",
      "eb6",
      "e6",
      "f6",
      "gb6",
      "g6",
      "ab6",
      "a6",
      "bb6",
      "b6",
      "c7",
      "db7",
      "d7",
      "eb7",
      "e7",
      "f7",
      "gb7",
      "g7",
      "ab7",
      "a7",
      "bb7",
      "b7",
      "c8",
    ],
    Xn = [
      "a2",
      "bb2",
      "b2",
      "c3",
      "db3",
      "d3",
      "eb3",
      "e3",
      "f3",
      "gb3",
      "g3",
      "ab3",
      "a3",
      "bb3",
      "b3",
      "c4",
      "db4",
      "d4",
      "eb4",
      "e4",
      "f4",
      "gb4",
      "g4",
      "ab4",
      "a4",
      "bb4",
      "b4",
      "c5",
      "db5",
      "d5",
      "eb5",
      "e5",
      "f5",
      "gb5",
      "g5",
      "ab5",
      "a5",
      "bb5",
      "b5",
      "c6",
      "db6",
      "d6",
      "eb6",
      "e6",
      "f6",
      "gb6",
      "g6",
      "ab6",
      "a6",
      "bb6",
      "b6",
      "c7",
      "db7",
      "d7",
      "eb7",
      "e7",
      "f7",
    ],
    Qn = [
      "a4",
      "bb4",
      "b4",
      "c5",
      "db5",
      "d5",
      "eb5",
      "e5",
      "f5",
      "gb5",
      "g5",
      "ab5",
      "a5",
      "bb5",
      "b5",
      "c6",
      "db6",
      "d6",
      "eb6",
      "e6",
      "f6",
      "gb6",
      "g6",
      "ab6",
      "a6",
      "bb6",
      "b6",
      "c7",
      "db7",
      "d7",
      "eb7",
      "e7",
      "f7",
      "gb7",
      "g7",
      "ab7",
      "a7",
      "bb7",
      "b7",
    ],
    Zn = {
      cover: {
        bgColor: 16777215,
        textColor: 0,
        text: "Touch image to begin",
        file: "cover.png",
      },
      grid: {
        width: 512,
        x: 8,
        y: 8,
        max: 32,
        plane: 0,
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 255,
          rgb: 16777215,
          str: "rgba(255,255,255,1)",
        },
        shadow: {
          show: !1,
          r: 192,
          g: 192,
          b: 192,
          a: 255,
          rgb: 12632256,
          str: "rgba(192,192,192,1)",
          params: "0px 0px 64px 8px ",
        },
        padLeft: 0,
        padRight: 0,
        ready: !1,
        timeExit: 0,
      },
      status: {
        text: "",
        label: "",
        exec: null,
        color: { r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" },
      },
      fader: {
        active: !1,
        kill: !1,
        r: 0,
        g: 0,
        b: 0,
        rgb: null,
        tr: 0,
        tg: 0,
        tb: 0,
        trgb: 0,
        tstr: null,
        step: 0,
        rate: 0,
        onStep: null,
        onEnd: null,
        params: null,
      },
      bead: {
        dirty: !0,
        active: !0,
        visible: !0,
        planes: null,
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 255,
          rgb: 16777215,
          str: "rgba(255,255,255,1)",
        },
        bgColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 0,
          rgb: 16777215,
          str: "rgba(255,255,255,0)",
        },
        fbgColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 255,
          rgb: 16777215,
          str: "rgba(255,255,255,1)",
        },
        radius: 0,
        scale: 100,
        minimum: 8,
        data: 0,
        exec: null,
        timeTouch: 0,
        timeRelease: 0,
        timeEnter: 0,
        timeExit: 0,
        border: {
          width: 1,
          equal: !0,
          top: 1,
          left: 1,
          bottom: 1,
          right: 1,
          color: {
            r: 128,
            g: 128,
            b: 128,
            a: 255,
            rgb: 8421504,
            str: "rgba(128,128,128,1)",
          },
          max: 0,
          gmax: 0,
        },
        glyph: {
          str: "",
          code: 0,
          scale: 100,
          size: 0,
          x: 0,
          y: 0,
          font: null,
          color: { r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" },
        },
      },
      paths: { no_diagonals: !1, cut_corners: !1 },
      audio: {
        volume: 0.5,
        max_volume: 1,
        path: "https://perlenspiel.net/audio/",
        fileTypes: ["ogg", "mp3", "wav"],
        loop: !1,
        error_sound: "fx_uhoh",
      },
      font: {
        name: "'Droid Sans', sans-serif",
        file: "https://fonts.googleapis.com/css?family=Droid+Sans.css",
      },
    },
    $n = {
      engine: "Perlenspiel",
      major: 3,
      minor: 3,
      revision: "5",
      audio: {
        engine: "",
        major: 0,
        minor: 0,
        revision: 0,
        fileTypes: [],
        mode: "",
      },
      host: {
        app_name: "",
        app_version: 0,
        os_name: "",
        os_version: 0,
        mobile: !1,
      },
      inputs: { touch: !1, gamepad: !1 },
      date: null,
    },
    et = [],
    nt = null,
    tt = !1,
    ot = { capture: !1 },
    rt = { capture: !0 },
    at = { passive: !0 },
    it = { once: !0 },
    dt = !1,
    st = 0,
    lt = null,
    ut = 0,
    gt = 0,
    mt = 0,
    pt = function () {
      (po = []), (mt = 0);
    },
    ct = function () {
      (co = []), (fo = 0);
    },
    ft = null,
    bt = "",
    _t = null,
    ht = 50,
    Rt = 1,
    Et = !1,
    Tt = [],
    yt = [],
    vt = !1,
    At = !1,
    xt = !1,
    Ut = !0,
    St = !1,
    Lt = !1,
    Ct = !1,
    wt = qn,
    Nt = qn,
    Dt = null,
    Ft = null,
    Pt = !0,
    Ot = !1,
    kt = !1,
    It = 0,
    Bt = "number",
    Mt = "string",
    Yt = "object",
    Kt = "function",
    Wt = "undefined",
    Gt = "array",
    zt = function (e) {
      var n = typeof e;
      if (n === Bt) {
        if (Number.isNaN(e)) return "nan";
        if (Number.isInteger(e) && !Number.isSafeInteger(e)) return "unsafe";
        if (!Number.isFinite(e)) return "infinity";
      } else if (n === Yt) {
        if (!e) return "null";
        if (e instanceof Array) return Gt;
      }
      return n;
    },
    Ht = function (e, n, t) {
      var o, r, a, d, s, l;
      if (
        ((o = Math.abs(Math.floor(e))),
        (r = void 0 === n ? 0 : n),
        (a = void 0 === t ? 10 : t),
        (d = 16 === a ? "0x" : 8 === a ? "0o" : 2 === a ? "0b" : ""),
        (s = o.toString(a).toUpperCase()),
        r)
      )
        for (l = s.length; l < r; ) (s = "0" + s), (l += 1);
      return d + s;
    },
    qt = function (e) {
      var n = Object.getOwnPropertyNames(e);
      n.forEach(function (n) {
        Object.defineProperty(e, n, { writable: !1, configurable: !1 });
      });
    },
    jt = 802701,
    Vt = function () {
      var e;
      return (e = 1e4 * Math.sin(jt)), (jt += 1), e - Math.floor(e);
    },
    Jt = function (e, n) {
      var t, o;
      return ((t = Math.floor(e)), 2 > t)
        ? 1
        : (n && ((o = jt), (jt = n)),
          (t = Vt() * t),
          n && (jt = o),
          (t = Math.floor(t) + 1),
          t);
    },
    Xt = null,
    Qt = null,
    Zt,
    $t,
    eo,
    no,
    to,
    oo,
    ro,
    ao,
    io,
    so,
    lo,
    uo,
    go,
    mo,
    po,
    co,
    fo,
    bo,
    _o,
    ho,
    Ro,
    Eo,
    To,
    yo,
    vo,
    Ao;
  (function () {
    var e = {},
      n = function (e, n) {
        n && !e._duration && (e._duration = n.duration),
          0 === Object.keys(e._sprite).length &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state &&
            ((e._state = "loaded"),
            e._emit("load", e._newID, e._src),
            e._loadQueue());
      },
      t = function (t, o) {
        var r = function () {
          o._emit("loaderror", null, "Data decode failed @ '" + o._src + "'");
        };
        Qt.ctx.decodeAudioData(
          t,
          function (t) {
            t && 0 < o._sounds.length ? ((e[o._src] = t), n(o, t)) : r();
          },
          r
        );
      },
      o = function (n) {
        try {
          n.send();
        } catch (t) {
          n.onerror();
        }
      },
      r = function (r) {
        var a = r._src,
          d,
          s,
          l,
          u,
          g;
        if (e[a]) return (r._duration = e[a].duration), void n(r, null);
        if (/^data:[^;]+;base64,/.test(a)) {
          for (
            s = window.atob(a.split(",")[1]),
              l = new Uint8Array(s.length),
              d = 0;
            d < s.length;
            ++d
          )
            l[d] = s.charCodeAt(d);
          t(l.buffer, r);
        } else
          (u = new XMLHttpRequest()),
            u.open("GET", a, !0),
            (u.withCredentials = r._xhrWithCredentials),
            (u.responseType = "arraybuffer"),
            (u.onload = function () {
              return (
                (g = (u.status + "")[0]),
                "0" !== g && "2" !== g && "3" !== g
                  ? void r._emit(
                      "loaderror",
                      null,
                      "Failure loading '" +
                        a +
                        "' [status = " +
                        u.status +
                        ", code " +
                        g +
                        "]"
                    )
                  : void t(u.response, r)
              );
            }),
            (u.onerror = function () {
              r._webAudio &&
                ((r._html5 = !0),
                (r._webAudio = !1),
                (r._sounds = []),
                delete e[a],
                r.load());
            }),
            o(u);
      },
      a = function () {
        var e, n, t, o;
        try {
          "undefined" == typeof AudioContext
            ? "undefined" == typeof webkitAudioContext
              ? (Qt.usingWebAudio = !1)
              : (Qt.ctx = new webkitAudioContext())
            : (Qt.ctx = new AudioContext());
        } catch (n) {
          Qt.usingWebAudio = !1;
        }
        (e = /iP(hone|od|ad)/.test(Qt._navigator && Qt._navigator.platform)),
          (n =
            Qt._navigator &&
            Qt._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)),
          (t = n ? parseInt(n[1], 10) : null),
          e &&
            t &&
            9 > t &&
            ((o = /safari/.test(
              Qt._navigator && Qt._navigator.userAgent.toLowerCase()
            )),
            ((Qt._navigator && Qt._navigator.standalone && !o) ||
              (Qt._navigator && !Qt._navigator.standalone && !o)) &&
              (Qt.usingWebAudio = !1)),
          Qt.usingWebAudio &&
            ((Qt.masterGain =
              "undefined" == typeof Qt.ctx.createGain
                ? Qt.ctx.createGainNode()
                : Qt.ctx.createGain()),
            Qt.masterGain.gain.setValueAtTime(
              Qt._muted ? 0 : 1,
              Qt.ctx.currentTime
            ),
            Qt.masterGain.connect(Qt.ctx.destination)),
          Qt._setup();
      },
      d = function (e) {
        (this._parent = e), this.init();
      };
    (d.prototype = {
      init: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = Qt._counter),
          (Qt._counter += 1),
          (n._newID = e._id),
          n._sounds.push(e),
          e.create(),
          e
        );
      },
      create: function () {
        var e = this,
          n = e._parent,
          t = Qt._muted || e._muted || e._parent._muted ? 0 : e._volume;
        return (
          n._webAudio
            ? ((e._node =
                "undefined" == typeof Qt.ctx.createGain
                  ? Qt.ctx.createGainNode()
                  : Qt.ctx.createGain()),
              e._node.gain.setValueAtTime(t, Qt.ctx.currentTime),
              (e._node.paused = !0),
              e._node.connect(Qt.masterGain))
            : ((e._node = new Audio()),
              (e._errorFn = e._errorListener.bind(e)),
              e._node.addEventListener("error", e._errorFn, !1),
              (e._loadFn = e._loadListener.bind(e)),
              e._node.addEventListener(Qt._canPlayEvent, e._loadFn, !1),
              (e._node.src = n._src),
              (e._node.preload = "auto"),
              (e._node.volume = t * Qt.volume()),
              e._node.load()),
          e
        );
      },
      reset: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._rateSeek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = Qt._counter),
          (Qt._counter += 1),
          (n._newID = e._id),
          e
        );
      },
      _errorListener: function () {
        var e = this,
          n = e._parent;
        e._parent._emit(
          "loaderror",
          null,
          "Load failure on '" +
            n._src +
            "' [code : " +
            (e._node.error ? e._node.error.code : 0) +
            "]"
        ),
          e._node.removeEventListener("error", e._errorFn, !1);
      },
      _loadListener: function () {
        var e = this,
          n = e._parent;
        (n._duration = Math.ceil(10 * e._node.duration) / 10),
          0 === Object.keys(n._sprite).length &&
            (n._sprite = { __default: [0, 1e3 * n._duration] }),
          "loaded" !== n._state &&
            ((n._state = "loaded"),
            n._emit("load", n._newID, n._src),
            n._loadQueue()),
          e._node.removeEventListener(Qt._canPlayEvent, e._loadFn, !1);
      },
    }),
      (Xt = function (e) {
        var n = this;
        if (e) {
          if (!e.src || 0 === e.src.length)
            return void console.error(
              "An array of source files must be passed with any new Howl."
            );
          n.init(e);
        }
      }),
      (Xt.prototype = {
        init: function (e) {
          var n = this;
          return (
            Qt.ctx || a(),
            (n._autoplay = e.autoplay || !1),
            (n._format = "string" == typeof e.format ? [e.format] : e.format),
            (n._html5 = e.html5 || !1),
            (n._muted = e.mute || !1),
            (n._loop = e.loop || !1),
            (n._pool = e.pool || 5),
            (n._preload = "boolean" != typeof e.preload || e.preload),
            (n._rate = e.rate || 1),
            (n._sprite = e.sprite || {}),
            (n._src = "string" == typeof e.src ? [e.src] : e.src),
            (n._volume = void 0 === e.volume ? 1 : e.volume),
            (n._xhrWithCredentials = e.xhrWithCredentials || !1),
            (n._duration = 0),
            (n._state = "unloaded"),
            (n._sounds = []),
            (n._endTimers = {}),
            (n._queue = []),
            (n._playLock = !1),
            (n._onend = e.onend ? [{ fn: e.onend }] : []),
            (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
            (n._onload = e.onload ? [{ fn: e.onload }] : []),
            (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
            (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
            (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
            (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
            (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
            (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
            (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
            (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
            (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
            (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
            (n._onresume = []),
            (n._newID = 0),
            (n._webAudio = Qt.usingWebAudio && !n._html5),
            "undefined" != typeof Qt.ctx &&
              Qt.ctx &&
              Qt.mobileAutoEnable &&
              Qt._enableMobileAudio(),
            Qt._howls.push(n),
            n._autoplay &&
              n._queue.push({
                event: "play",
                action: function () {
                  n.play();
                },
              }),
            n._preload && n.load(),
            n
          );
        },
        load: function () {
          var e = this,
            n = null,
            t,
            o,
            a,
            s;
          if (Qt.noAudio)
            return (
              e._emit(
                "loaderror",
                null,
                "Audio is not supported on this browser"
              ),
              null
            );
          for (
            "string" == typeof e._src && (e._src = [e._src]), t = 0;
            t < e._src.length;
            t++
          ) {
            if (e._format && e._format[t]) o = e._format[t];
            else {
              if (((a = e._src[t]), !a || "string" != typeof a || 1 > a.length))
                return e._emit("loaderror", null, "Audio source invalid"), null;
              (o = /^data:audio\/([^;,]+);/i.exec(a)),
                o || (o = /\.([^.]+)$/.exec(a.split("?", 1)[0])),
                o && (o = o[1].toLowerCase());
            }
            if (!o)
              return (
                e._emit("loaderror", null, "No valid file extension found"),
                null
              );
            if (o && Qt.codecs(o)) {
              n = e._src[t];
              break;
            }
          }
          return n
            ? ((e._src = n),
              (e._state = "loading"),
              "https:" === window.location.protocol &&
                "http:" === n.slice(0, 5) &&
                ((e._html5 = !0), (e._webAudio = !1)),
              (s = new d(e)),
              e._webAudio && r(e),
              e)
            : (e._emit("loaderror", null, "Unsupported file type"), null);
        },
        play: function (e, n) {
          var t = this,
            o = null,
            r,
            a,
            d,
            s,
            l,
            u,
            g,
            m,
            p,
            c,
            f,
            b,
            _,
            h;
          if ("number" == typeof e) (o = e), (e = null);
          else {
            if ("string" == typeof e && "loaded" === t._state && !t._sprite[e])
              return null;
            if ("undefined" == typeof e) {
              for (e = "__default", r = 0, a = 0; a < t._sounds.length; a++)
                t._sounds[a]._paused &&
                  !t._sounds[a]._ended &&
                  (r++, (o = t._sounds[a]._id));
              1 === r ? (e = null) : (o = null);
            }
          }
          return ((d = o ? t._soundById(o) : t._inactiveSound()), !d)
            ? null
            : (o && !e && (e = d._sprite || "__default"), "loaded" !== t._state)
            ? ((d._sprite = e),
              (d._ended = !1),
              (s = d._id),
              t._queue.push({
                event: "play",
                action: function () {
                  t.play(s);
                },
              }),
              s)
            : o && !d._paused
            ? (n || t._loadQueue("play"), d._id)
            : (t._webAudio && Qt._autoResume(),
              (l = Math.max(0, 0 < d._seek ? d._seek : t._sprite[e][0] / 1e3)),
              (u = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - l)),
              (g = (1e3 * u) / Math.abs(d._rate)),
              (d._paused = !1),
              (d._ended = !1),
              (d._sprite = e),
              (d._seek = l),
              (d._start = t._sprite[e][0] / 1e3),
              (d._stop = (t._sprite[e][0] + t._sprite[e][1]) / 1e3),
              (d._loop = !!(d._loop || t._sprite[e][2])),
              d._seek >= d._stop)
            ? void t._ended(d)
            : ((m = d._node),
              t._webAudio
                ? ((p = function () {
                    t._refreshBuffer(d),
                      (c = d._muted || t._muted ? 0 : d._volume),
                      m.gain.setValueAtTime(c, Qt.ctx.currentTime),
                      (d._playStart = Qt.ctx.currentTime),
                      "undefined" == typeof m.bufferSource.start
                        ? d._loop
                          ? m.bufferSource.noteGrainOn(0, l, 86400)
                          : m.bufferSource.noteGrainOn(0, l, u)
                        : d._loop
                        ? m.bufferSource.start(0, l, 86400)
                        : m.bufferSource.start(0, l, u),
                      g !== 1 / 0 &&
                        (t._endTimers[d._id] = setTimeout(
                          t._ended.bind(t, d),
                          g
                        )),
                      n ||
                        setTimeout(function () {
                          t._emit("play", d._id, null);
                        }, 0);
                  }),
                  "running" === Qt.state
                    ? p()
                    : (t.once("resume", p), t._clearTimer(d._id)))
                : ((f = function () {
                    (m.currentTime = l),
                      (m.muted = d._muted || t._muted || Qt._muted || m.muted),
                      (m.volume = d._volume * Qt.volume()),
                      (m.playbackRate = d._rate);
                    try {
                      if (
                        ((b = m.play()),
                        n || t._emit("play", d._id, null),
                        (m.playbackRate = d._rate),
                        m.paused)
                      )
                        return void t._emit(
                          "playerror",
                          d._id,
                          "Playback error on '" + t._src + "' [code 2]"
                        );
                      "__default" !== e || d._loop
                        ? (t._endTimers[d._id] = setTimeout(
                            t._ended.bind(t, d),
                            g
                          ))
                        : ((t._endTimers[d._id] = function () {
                            t._ended(d),
                              m.removeEventListener(
                                "ended",
                                t._endTimers[d._id],
                                !1
                              );
                          }),
                          m.addEventListener("ended", t._endTimers[d._id], !1));
                    } catch (e) {
                      t._emit(
                        "playerror",
                        d._id,
                        "Playback error on '" +
                          t._src +
                          "' [code 3, " +
                          e.message +
                          "]"
                      );
                    }
                  }),
                  (_ =
                    (window && window.ejecta) ||
                    (!m.readyState && Qt._navigator.isCocoonJS)),
                  3 <= m.readyState || _
                    ? f()
                    : ((h = function () {
                        f(), m.removeEventListener(Qt._canPlayEvent, h, !1);
                      }),
                      m.addEventListener(Qt._canPlayEvent, h, !1),
                      t._clearTimer(d._id))),
              d._id);
        },
        pause: function (e) {
          var n = this,
            t,
            o,
            r;
          if ("loaded" !== n._state || n._playLock)
            return (
              n._queue.push({
                event: "pause",
                action: function () {
                  n.pause(e);
                },
              }),
              n
            );
          for (t = n._getSoundIds(e), o = 0; o < t.length; o++) {
            if (
              (n._clearTimer(t[o]),
              (r = n._soundById(t[o])),
              r &&
                !r._paused &&
                ((r._seek = n.seek(t[o])),
                (r._rateSeek = 0),
                (r._paused = !0),
                n._stopFade(t[o]),
                r._node))
            )
              if (n._webAudio) {
                if (!r._node.bufferSource) continue;
                "undefined" == typeof r._node.bufferSource.stop
                  ? r._node.bufferSource.noteOff(0)
                  : r._node.bufferSource.stop(0),
                  n._cleanBuffer(r._node);
              } else
                (isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
                  r._node.pause();
            arguments[1] || n._emit("pause", r ? r._id : null, null);
          }
          return n;
        },
        stop: function (e, n) {
          var t = this,
            o,
            r,
            a;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "stop",
                action: function () {
                  t.stop(e);
                },
              }),
              t
            );
          for (o = t._getSoundIds(e), r = 0; r < o.length; r++)
            t._clearTimer(o[r]),
              (a = t._soundById(o[r])),
              a &&
                ((a._seek = a._start || 0),
                (a._rateSeek = 0),
                (a._paused = !0),
                (a._ended = !0),
                t._stopFade(o[r]),
                a._node &&
                  (t._webAudio
                    ? a._node.bufferSource &&
                      ("undefined" == typeof a._node.bufferSource.stop
                        ? a._node.bufferSource.noteOff(0)
                        : a._node.bufferSource.stop(0),
                      t._cleanBuffer(a._node))
                    : (!isNaN(a._node.duration) ||
                        a._node.duration === 1 / 0) &&
                      ((a._node.currentTime = a._start || 0), a._node.pause())),
                !n && t._emit("stop", a._id, null));
          return t;
        },
        mute: function (e, n) {
          var t = this,
            o,
            r,
            a;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "mute",
                action: function () {
                  t.mute(e, n);
                },
              }),
              t
            );
          if ("undefined" == typeof n)
            if ("boolean" == typeof e) t._muted = e;
            else return t._muted;
          for (o = t._getSoundIds(n), r = 0; r < o.length; r++)
            (a = t._soundById(o[r])),
              a &&
                ((a._muted = e),
                a._interval && t._stopFade(a._id),
                t._webAudio && a._node
                  ? a._node.gain.setValueAtTime(
                      e ? 0 : a._volume,
                      Qt.ctx.currentTime
                    )
                  : a._node && (a._node.muted = !!Qt._muted || e),
                t._emit("mute", a._id, null));
          return t;
        },
        volume: function () {
          var e = this,
            n = arguments,
            t,
            o,
            r,
            a,
            d,
            s;
          if (0 === n.length) return e._volume;
          if (
            (1 === n.length || (2 === n.length && "undefined" == typeof n[1])
              ? ((t = e._getSoundIds()),
                (o = t.indexOf(n[0])),
                0 <= o ? (s = parseInt(n[0], 10)) : (d = parseFloat(n[0])))
              : 2 <= n.length &&
                ((d = parseFloat(n[0])), (s = parseInt(n[1], 10))),
            "undefined" != typeof d && 0 <= d && 1 >= d)
          ) {
            if ("loaded" !== e._state || e._playLock)
              return (
                e._queue.push({
                  event: "volume",
                  action: function () {
                    e.volume.apply(e, n);
                  },
                }),
                e
              );
            for (
              "undefined" == typeof s && (e._volume = d),
                s = e._getSoundIds(s),
                a = 0;
              a < s.length;
              a++
            )
              (r = e._soundById(s[a])),
                r &&
                  ((r._volume = d),
                  !n[2] && e._stopFade(s[a]),
                  e._webAudio && r._node && !r._muted
                    ? r._node.gain.setValueAtTime(d, Qt.ctx.currentTime)
                    : r._node &&
                      !r._muted &&
                      (r._node.volume = d * Qt.volume()),
                  e._emit("volume", r._id, null));
          } else
            return (r = s ? e._soundById(s) : e._sounds[0]), r ? r._volume : 0;
          return e;
        },
        fade: function (e, n, t, o) {
          var r = this,
            a,
            d,
            s,
            l,
            u;
          if ("loaded" !== r._state || r._playLock)
            return (
              r._queue.push({
                event: "fade",
                action: function () {
                  r.fade(e, n, t, o);
                },
              }),
              r
            );
          for (r.volume(e, o), a = r._getSoundIds(o), d = 0; d < a.length; d++)
            (s = r._soundById(a[d])),
              s &&
                (!o && r._stopFade(a[d]),
                r._webAudio &&
                  !s._muted &&
                  ((l = Qt.ctx.currentTime),
                  (u = l + t / 1e3),
                  (s._volume = e),
                  s._node.gain.setValueAtTime(e, l),
                  s._node.gain.linearRampToValueAtTime(n, u)),
                r._startFadeInterval(
                  s,
                  e,
                  n,
                  t,
                  a[d],
                  "undefined" == typeof o
                ));
          return r;
        },
        _startFadeInterval: function (e, n, t, o, r, a) {
          var i = this,
            d = n,
            s = t - n,
            l = Math.abs(s / 0.01),
            u = Math.max(4, 0 < l ? o / l : o),
            g = Date.now(),
            m;
          (e._fadeTo = t),
            (e._interval = setInterval(function () {
              (m = (Date.now() - g) / o),
                (g = Date.now()),
                (d += s * m),
                (d = Math.max(0, d)),
                (d = Math.min(1, d)),
                (d = Math.round(100 * d) / 100),
                i._webAudio ? (e._volume = d) : i.volume(d, e._id, !0),
                a && (i._volume = d),
                ((t < n && d <= t) || (t > n && d >= t)) &&
                  (clearInterval(e._interval),
                  (e._interval = null),
                  (e._fadeTo = null),
                  i.volume(t, e._id),
                  i._emit("fade", e._id, null));
            }, u));
        },
        _stopFade: function (e) {
          var n = this,
            t = n._soundById(e);
          return (
            t &&
              t._interval &&
              (n._webAudio &&
                t._node.gain.cancelScheduledValues(Qt.ctx.currentTime),
              clearInterval(t._interval),
              (t._interval = null),
              n.volume(t._fadeTo, e),
              (t._fadeTo = null),
              n._emit("fade", e, null)),
            n
          );
        },
        loop: function () {
          var e = this,
            n = arguments,
            t,
            o,
            r,
            a,
            d;
          if (0 === n.length) return e._loop;
          if (1 !== n.length)
            2 === n.length && ((r = n[0]), (a = parseInt(n[1], 10)));
          else if ("boolean" == typeof n[0]) (r = n[0]), (e._loop = r);
          else return (d = e._soundById(parseInt(n[0], 10))), !!d && d._loop;
          for (t = e._getSoundIds(a), o = 0; o < t.length; o++)
            (d = e._soundById(t[o])),
              d &&
                ((d._loop = r),
                e._webAudio &&
                  d._node &&
                  d._node.bufferSource &&
                  ((d._node.bufferSource.loop = r),
                  r &&
                    ((d._node.bufferSource.loopStart = d._start || 0),
                    (d._node.bufferSource.loopEnd = d._stop))));
          return e;
        },
        seek: function () {
          var e = this,
            n = arguments,
            t,
            o,
            r,
            a,
            i,
            d,
            s,
            l,
            u,
            g;
          if (
            (0 === n.length
              ? (a = e._sounds[0]._id)
              : 1 === n.length
              ? ((t = e._getSoundIds()),
                (o = t.indexOf(n[0])),
                0 <= o
                  ? (a = parseInt(n[0], 10))
                  : e._sounds.length &&
                    ((a = e._sounds[0]._id), (r = parseFloat(n[0]))))
              : 2 === n.length &&
                ((r = parseFloat(n[0])), (a = parseInt(n[1], 10))),
            "undefined" == typeof a)
          )
            return e;
          if ("loaded" !== e._state || e._playLock)
            return (
              e._queue.push({
                event: "seek",
                action: function () {
                  e.seek.apply(e, n);
                },
              }),
              e
            );
          if (((i = e._soundById(a)), i))
            if ("number" == typeof r && 0 <= r)
              (d = e.playing(a)),
                d && e.pause(a, !0),
                (i._seek = r),
                (i._ended = !1),
                e._clearTimer(a),
                !e._webAudio && i._node && (i._node.currentTime = r),
                (s = function () {
                  e._emit("seek", a, null), d && e.play(a, !0);
                }),
                d && !e._webAudio
                  ? ((l = function () {
                      e._playLock ? setTimeout(l, 0) : s();
                    }),
                    setTimeout(l, 0))
                  : s();
            else
              return e._webAudio
                ? ((u = e.playing(a) ? Qt.ctx.currentTime - i._playStart : 0),
                  (g = i._rateSeek ? i._rateSeek - i._seek : 0),
                  i._seek + (g + u * Math.abs(i._rate)))
                : i._node.currentTime;
          return e;
        },
        playing: function (e) {
          var n = this,
            t,
            o;
          if ("number" == typeof e)
            return (t = n._soundById(e)), !!t && !t._paused;
          for (o = 0; o < n._sounds.length; o++)
            if (!n._sounds[o]._paused) return !0;
          return !1;
        },
        duration: function (e) {
          var n = this,
            t = n._duration,
            o;
          return (
            (o = n._soundById(e)), o && (t = n._sprite[o._sprite][1] / 1e3), t
          );
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          var n = this,
            t,
            o,
            r,
            a,
            d;
          for (t = n._sounds, o = 0; o < t.length; o++)
            t[o]._paused || n.stop(t[o]._id),
              n._webAudio ||
                ((r = /MSIE |Trident\//.test(
                  Qt._navigator && Qt._navigator.userAgent
                )),
                !r &&
                  (t[o]._node.src =
                    "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
                t[o]._node.removeEventListener("error", t[o]._errorFn, !1),
                t[o]._node.removeEventListener(
                  Qt._canPlayEvent,
                  t[o]._loadFn,
                  !1
                )),
              delete t[o]._node,
              n._clearTimer(t[o]._id);
          for (
            a = Qt._howls.indexOf(n),
              0 <= a && Qt._howls.splice(a, 1),
              d = !0,
              o = 0;
            o < Qt._howls.length;
            o++
          )
            if (Qt._howls[o]._src === n._src) {
              d = !1;
              break;
            }
          return (
            d && delete e[n._src],
            (Qt.noAudio = !1),
            (n._state = "unloaded"),
            (n._sounds = []),
            (n = null),
            null
          );
        },
        on: function (e, n, t, o) {
          var r = this,
            a = r["_on" + e];
          return (
            "function" == typeof n &&
              a.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }),
            r
          );
        },
        off: function (e, n, t) {
          var o = this,
            r = o["_on" + e],
            a,
            d,
            s;
          if (("number" == typeof n && ((t = n), (n = null)), n || t)) {
            for (a = 0; a < r.length; a++)
              if (((d = t === r[a].id), (n === r[a].fn && d) || (!n && d))) {
                r.splice(a, 1);
                break;
              }
          } else if (e) o["_on" + e] = [];
          else
            for (s = Object.keys(o), a = 0; a < s.length; a++)
              0 === s[a].indexOf("_on") &&
                Array.isArray(o[s[a]]) &&
                (o[s[a]] = []);
          return o;
        },
        once: function (e, n, t) {
          var o = this;
          return o.on(e, n, t, 1), o;
        },
        _emit: function (e, n, t) {
          var o = this,
            r = o["_on" + e],
            a;
          for (a = r.length - 1; 0 <= a; a--)
            ("load" !== e && r[a].id !== n && r[a].id) ||
              (setTimeout(
                function (e) {
                  e.call(this, n, t);
                }.bind(o, r[a].fn),
                0
              ),
              r[a].once && o.off(e, r[a].fn, r[a].id));
          return o._loadQueue(e), o;
        },
        _loadQueue: function (e) {
          var n = this,
            t;
          return (
            0 < n._queue.length &&
              ((t = n._queue[0]),
              t.event === e && (n._queue.shift(), n._loadQueue()),
              !e && t.action()),
            n
          );
        },
        _ended: function (e) {
          var n = this,
            t = e._parent,
            o = e._sprite,
            r,
            a;
          return n._webAudio ||
            !e._node ||
            e._node.paused ||
            e._node.ended ||
            !(e._node.currentTime < e._stop)
            ? ((r = !!(e._loop || n._sprite[o][2])),
              n._emit("end", e._id, t._src),
              !n._webAudio && r && n.stop(e._id, !0).play(e._id),
              n._webAudio &&
                r &&
                (n._emit("play", e._id, null),
                (e._seek = e._start || 0),
                (e._rateSeek = 0),
                (e._playStart = Qt.ctx.currentTime),
                (a = (1e3 * (e._stop - e._start)) / Math.abs(e._rate)),
                (n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), a))),
              n._webAudio &&
                !r &&
                ((e._paused = !0),
                (e._ended = !0),
                (e._seek = e._start || 0),
                (e._rateSeek = 0),
                n._clearTimer(e._id),
                n._cleanBuffer(e._node),
                Qt._autoSuspend()),
              n._webAudio || r || n.stop(e._id, !0),
              n)
            : (setTimeout(n._ended.bind(n, e), 100), n);
        },
        _clearTimer: function (e) {
          var n = this,
            t;
          return (
            n._endTimers[e] &&
              ("function" == typeof n._endTimers[e]
                ? ((t = n._soundById(e)),
                  t &&
                    t._node &&
                    t._node.removeEventListener("ended", n._endTimers[e], !1))
                : clearTimeout(n._endTimers[e]),
              delete n._endTimers[e]),
            n
          );
        },
        _soundById: function (e) {
          var n = this,
            t;
          for (t = 0; t < n._sounds.length; t++)
            if (e === n._sounds[t]._id) return n._sounds[t];
          return null;
        },
        _inactiveSound: function () {
          var e = this,
            n;
          for (e._drain(), n = 0; n < e._sounds.length; n++)
            if (e._sounds[n]._ended) return e._sounds[n].reset();
          return new d(e);
        },
        _drain: function () {
          var e = 0,
            n = this,
            t = n._pool,
            o;
          if (!(n._sounds.length < t)) {
            for (o = 0; o < n._sounds.length; o++) n._sounds[o]._ended && e++;
            for (o = n._sounds.length - 1; 0 <= o; o--) {
              if (e <= t) return;
              n._sounds[o]._ended &&
                (n._webAudio &&
                  n._sounds[o]._node &&
                  n._sounds[o]._node.disconnect(0),
                n._sounds.splice(o, 1),
                e--);
            }
          }
        },
        _getSoundIds: function (e) {
          var n = this,
            t,
            o;
          if ("undefined" == typeof e) {
            for (t = [], o = 0; o < n._sounds.length; o++)
              t.push(n._sounds[o]._id);
            return t;
          }
          return [e];
        },
        _refreshBuffer: function (n) {
          var t = this;
          return (
            (n._node.bufferSource = Qt.ctx.createBufferSource()),
            (n._node.bufferSource.buffer = e[t._src]),
            n._panner
              ? n._node.bufferSource.connect(n._panner)
              : n._node.bufferSource.connect(n._node),
            (n._node.bufferSource.loop = n._loop),
            n._loop &&
              ((n._node.bufferSource.loopStart = n._start || 0),
              (n._node.bufferSource.loopEnd = n._stop || 0)),
            n._node.bufferSource.playbackRate.setValueAtTime(
              n._rate,
              Qt.ctx.currentTime
            ),
            t
          );
        },
        _cleanBuffer: function (e) {
          var n = this;
          if (Qt._scratchBuffer && e.bufferSource) {
            (e.bufferSource.onended = null), e.bufferSource.disconnect(0);
            try {
              e.bufferSource.buffer = Qt._scratchBuffer;
            } catch (n) {}
          }
          return (e.bufferSource = null), n;
        },
      });
    var s = function () {
      this.init();
    };
    (s.prototype = {
      init: function () {
        var e = this || Qt;
        return (
          (e.major = 2),
          (e.minor = 0),
          (e.revision = 15),
          (e._counter = 1),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator =
            "undefined" != typeof window && window.navigator
              ? window.navigator
              : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !0),
          (e.ctx = null),
          (e._mobileEnabled = !1),
          (e.isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(
            e._navigator && e._navigator.userAgent
          )),
          (e.mobileAutoEnable = !0),
          e._setup(),
          e
        );
      },
      volume: function (e) {
        var n = this || Qt,
          t,
          o,
          r,
          d;
        if (
          ((e = parseFloat(e)),
          n.ctx || a(),
          "undefined" != typeof e && 0 <= e && 1 >= e)
        ) {
          if (((n._volume = e), n._muted)) return n;
          for (
            n.usingWebAudio &&
              n.masterGain.gain.setValueAtTime(e, Qt.ctx.currentTime),
              t = 0;
            t < n._howls.length;
            t++
          )
            if (!n._howls[t]._webAudio)
              for (o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++)
                (d = n._howls[t]._soundById(o[r])),
                  d && d._node && (d._node.volume = d._volume * e);
          return n;
        }
        return n._volume;
      },
      mute: function (e) {
        var n = this || Qt,
          t,
          o,
          r,
          d;
        for (
          n.ctx || a(),
            n._muted = e,
            n.usingWebAudio &&
              n.masterGain.gain.setValueAtTime(
                e ? 0 : n._volume,
                Qt.ctx.currentTime
              ),
            t = 0;
          t < n._howls.length;
          t++
        )
          if (!n._howls[t]._webAudio)
            for (o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++)
              (d = n._howls[t]._soundById(o[r])),
                d && d._node && (d._node.muted = !!e || d._muted);
        return n;
      },
      unload: function () {
        var e = this || Qt,
          n;
        for (n = e._howls.length - 1; 0 <= n; n--) e._howls[n].unload();
        return (
          e.usingWebAudio &&
            e.ctx &&
            "undefined" != typeof e.ctx.close &&
            (e.ctx.close(), (e.ctx = null), a()),
          e
        );
      },
      codecs: function (e) {
        return (this || Qt)._codecs[e.replace(/^x-/, "")];
      },
      _setup: function () {
        var n = this || Qt,
          t;
        if (
          ((n.state = n.ctx ? n.ctx.state || "running" : "running"),
          n._autoSuspend(),
          !n.usingWebAudio)
        )
          if ("undefined" != typeof Audio)
            try {
              (t = new Audio()),
                "undefined" == typeof t.oncanplaythrough &&
                  (n._canPlayEvent = "canplay");
            } catch (t) {
              n.noAudio = !0;
            }
          else n.noAudio = !0;
        try {
          (t = new Audio()), t.muted && (n.noAudio = !0);
        } catch (n) {}
        return n.noAudio || n._setupCodecs(), n;
      },
      _setupCodecs: function () {
        var e = this || Qt,
          n = null,
          t,
          o,
          r;
        try {
          n = "undefined" == typeof Audio ? null : new Audio();
        } catch (n) {
          return e;
        }
        return n && "function" == typeof n.canPlayType
          ? ((t = n.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (o =
              e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g)),
            (r = o && 33 > parseInt(o[0].split("/")[1], 10)),
            (e._codecs = {
              mp3: !!(
                !r &&
                (t || n.canPlayType("audio/mp3;").replace(/^no$/, ""))
              ),
              mpeg: !!t,
              opus: !!n
                .canPlayType('audio/ogg; codecs="opus"')
                .replace(/^no$/, ""),
              ogg: !!n
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
              oga: !!n
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
              wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
              aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(
                n.canPlayType("audio/x-m4a;") ||
                n.canPlayType("audio/m4a;") ||
                n.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              mp4: !!(
                n.canPlayType("audio/x-mp4;") ||
                n.canPlayType("audio/mp4;") ||
                n.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              weba: !!n
                .canPlayType('audio/webm; codecs="vorbis"')
                .replace(/^no$/, ""),
              webm: !!n
                .canPlayType('audio/webm; codecs="vorbis"')
                .replace(/^no$/, ""),
              dolby: !!n
                .canPlayType('audio/mp4; codecs="ec-3"')
                .replace(/^no$/, ""),
              flac: !!(
                n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")
              ).replace(/^no$/, ""),
            }),
            e)
          : e;
      },
      _enableMobileAudio: function () {
        var e = this || Qt;
        if (!e._mobileEnabled && e.ctx && e.isMobile) {
          (e._mobileEnabled = !1),
            (e.mobileAutoEnable = !1),
            e._mobileUnloaded ||
              44100 === e.ctx.sampleRate ||
              ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
          var n = function () {
            var t, o;
            Qt._autoResume(),
              (t = e.ctx.createBufferSource()),
              (t.buffer = e._scratchBuffer),
              t.connect(e.ctx.destination),
              "undefined" == typeof t.start ? t.noteOn(0) : t.start(0),
              "function" == typeof e.ctx.resume && e.ctx.resume(),
              (t.onended = function () {
                for (
                  t.disconnect(0),
                    e._mobileEnabled = !0,
                    document.removeEventListener("touchstart", n, !0),
                    document.removeEventListener("touchend", n, !0),
                    document.removeEventListener("click", n, !0),
                    o = 0;
                  o < e._howls.length;
                  o++
                )
                  e._howls[o]._emit("unlock", null, null);
              });
          };
          return (
            document.addEventListener("touchstart", n, !0),
            document.addEventListener("touchend", n, !0),
            document.addEventListener("click", n, !0),
            e
          );
        }
      },
      _autoSuspend: function () {
        var e = this,
          n,
          t;
        if (
          e.autoSuspend &&
          e.ctx &&
          "undefined" != typeof e.ctx.suspend &&
          Qt.usingWebAudio
        ) {
          for (n = 0; n < e._howls.length; n++)
            if (e._howls[n]._webAudio)
              for (t = 0; t < e._howls[n]._sounds.length; t++)
                if (!e._howls[n]._sounds[t]._paused) return e;
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function () {
              e.autoSuspend &&
                ((e._suspendTimer = null),
                (e.state = "suspending"),
                e.ctx.suspend().then(function () {
                  (e.state = "suspended"),
                    e._resumeAfterSuspend &&
                      (delete e._resumeAfterSuspend, e._autoResume());
                }));
            }, 3e4)),
            e
          );
        }
      },
      _autoResume: function () {
        var e = this,
          n;
        if (e.ctx && "undefined" != typeof e.ctx.resume && Qt.usingWebAudio)
          return (
            "running" === e.state && e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : "suspended" === e.state
              ? (e.ctx.resume().then(function () {
                  for (e.state = "running", n = 0; n < e._howls.length; n++)
                    e._howls[n]._emit("resume", null, null);
                }),
                e._suspendTimer &&
                  (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
              : "suspending" === e.state && (e._resumeAfterSuspend = !0),
            e
          );
      },
    }),
      (Qt = new s());
  })();
  var xo = function (e, n) {
    var t = this;
    (t.func = e),
      (t.delay = n),
      (t.timeout = null),
      (t.count = 0),
      (t.startTime = window.performance.now()),
      (t.timeout = window.setTimeout(function () {
        t.tick();
      }, t.delay));
  };
  (xo.prototype.tick = function () {
    var e = this,
      n;
    e.func(),
      (e.count += 1),
      (n = Math.max(
        1,
        e.startTime + (e.count + 1) * e.delay - window.performance.now()
      )),
      (e.timeout = window.setTimeout(function () {
        e.tick();
      }, n));
  }),
    (xo.prototype.stop = function () {
      var e = this;
      e.timeout && (window.clearTimeout(e.timeout), (e.timeout = null));
    });
  var Uo = {
      DISPLAY: !1,
      DISPLAY_RATE: 60,
      delay: 0,
      timer: null,
      next: !1,
      onTick: function () {
        (Uo.next = !0),
          Uo.DISPLAY &&
            (0 < Uo.delay
              ? (Uo.delay -= 1)
              : ((Uo.delay = Uo.DISPLAY_RATE),
                t(Uo.fps.toFixed(2) + " FPS | " + Uo.tps.toFixed(2) + " TPS"),
                Do()));
      },
      RATE: Math.round(1e3 / 60),
      FPS_UPPER: 65,
      FPS_FILTER: 50,
      request: null,
      timeNow: 0,
      timePrev: 0,
      tickPrev: 0,
      fps: 0,
      tps: 0,
      ticks: 0,
      keyOptions: { time: 0 },
      onFrame: function () {
        var e, n, t, o, r, a, d, s, l, u, g, m, p, c, f, b, _;
        if (
          ((Uo.request = window.requestAnimationFrame(Uo.onFrame)),
          (Uo.timeNow = e = window.performance.now()),
          (n = e - Uo.timePrev),
          (t = e - Uo.tickPrev),
          (o = 1e3 / n),
          e !== Uo.timePrev &&
            ((Uo.fps += (o - Uo.fps) / Uo.FPS_FILTER), (Uo.timePrev = e)),
          Uo.fps > Uo.FPS_UPPER)
        ) {
          if (!Uo.next) return;
          Uo.next = !1;
        }
        if (
          ((o = 1e3 / t),
          e !== Uo.tickPrev &&
            ((Uo.tps += (o - Uo.tps) / Uo.FPS_FILTER), (Uo.tickPrev = e)),
          (Uo.ticks += 1),
          (r = "[_tick] "),
          (a = !1),
          (fo += 1),
          fo >= 4)
        )
          for (fo = 0, d = co.length, s = 0; s < d; )
            if (((l = co[s]), (g = l.frames.length), l.kill))
              co.splice(s, 1), (d -= 1);
            else if (l.active) {
              if (((u = l.frames[l.step]), (f = l.onStep), f)) {
                (_ = [g, l.step, u.rgb]), l.params && (_ = _.concat(l.params));
                try {
                  (c = f.apply(zn, _)),
                    (!1 === c || null === c) &&
                      ((l.step = g - 1), (u = l.frames[l.step])),
                    (a = !0);
                } catch (e) {
                  return void S(
                    r + "fader .onStep failed [" + e.message + "]",
                    e
                  );
                }
              }
              if (l.exec)
                try {
                  l.exec(u, l.element);
                } catch (e) {
                  return void S(
                    r + "fader .exec failed [" + e.message + "]",
                    e
                  );
                }
              if (((l.step += 1), l.step >= g)) {
                if (
                  ((l.active = !1),
                  (l.step = 0),
                  (l.frames.length = 0),
                  l.execEnd)
                )
                  try {
                    l.execEnd(u, l.element);
                  } catch (e) {
                    return void S(
                      r + "fader .execEnd failed [" + e.message + "]",
                      e
                    );
                  }
                if (((f = l.onEnd), f)) {
                  (_ = l.params), _ || (_ = []);
                  try {
                    f.apply(zn, _), (a = !0);
                  } catch (e) {
                    return void S(
                      r + "fader .onEnd failed [" + e.message + "]",
                      e
                    );
                  }
                }
                co.splice(s, 1), (d -= 1);
              } else s += 1;
            } else s += 1;
        if (((d = yt.length), Ut && 0 < d))
          if (0 < Ro) Ro -= 1;
          else if (((Ro = Eo), PS.keyDown))
            for (s = 0; s < d; s += 1)
              if (((m = yt[s]), m)) {
                Uo.keyOptions.time = Uo.ticks;
                try {
                  PS.keyDown(m, vt, At, Uo.keyOptions), (a = !0);
                } catch (e) {
                  return void S(r + "Key repeat failed [" + e.message + "]", e);
                }
              }
        if (((d = po.length), 0 < d))
          for (s = 0; s < d; ) {
            if (((p = po[s]), (b = p.id), (p.count -= 1), 1 > p.count)) {
              p.count = p.delay;
              try {
                (c = p.exec.apply(zn, p.arglist)), (a = !0);
              } catch (e) {
                c = S(r + "Timed function failed [" + e.message + "]", e);
              }
              c === PS.ERROR && PS.timerStop(b), (d = po.length);
            }
            0 < d && ((p = po[s]), p && p.id === b && (s += 1));
          }
        a && R();
      },
      start: function () {
        pt(),
          ct(),
          (Uo.delay = Uo.DISPLAY_RATE),
          (Uo.fps = Uo.tps = Uo.ticks = 0),
          (Uo.tickPrev = Uo.timePrev = Uo.timeNow = window.performance.now()),
          (Uo.timer = new xo(Uo.onTick, Uo.RATE)),
          (Uo.request = window.requestAnimationFrame(Uo.onFrame));
      },
      stop: function () {
        (Uo.DISPLAY = !1),
          Uo.request &&
            (window.cancelAnimationFrame(Uo.request), (Uo.request = null)),
          Uo.timer && (Uo.timer.stop(), (Uo.timer = null));
      },
    },
    So = { r: 0, g: 0, b: 0, a: 0, rgb: 0, str: "" },
    Lo = { r: 0, g: 0, b: 0, a: 0, rgb: 0, str: "" },
    Co = { r: 0, g: 0, b: 0, a: 0, rgb: 0, str: "" },
    wo = { r: 0, g: 0, b: 0, a: 0, rgb: 0, str: "" },
    No = function (e) {
      (io.colorNow = e), l();
    },
    Do = function () {
      var e;
      (e = io.colorNow ? io.colorNow : io.color),
        (ft.style.color =
          127 < e.r || 127 < e.g || 127 < e.b
            ? "rgba(0,0,0,1)"
            : "rgba(255,255,255,1)");
    },
    Fo = function () {
      (io.colorNow = null), Do();
    },
    Po = function (e) {
      io.canvas.style.boxShadow = io.shadow.params + e.str;
    },
    Oo = function (e) {
      (lo.statusP.style.color = e.str), (lo.inputP.style.color = e.str);
    },
    ko = { rgb: 0, r: 0, g: 0, b: 0, str: "" },
    Io = { rgb: 0, r: null, g: null, b: null, str: "" },
    Bo = { time: 0 },
    Mo = { time: 0 },
    Yo = { time: 0, touching: !1 },
    Ko = { time: 0, touching: !1 },
    Wo = { time: 0, touching: !1 },
    Go = { time: 0 },
    zo = function (e, n) {
      if (PS.input) {
        try {
          PS.input(e, n);
        } catch (e) {
          S("PS.input() failed [" + e.message + "]", e);
        }
        R();
      }
    },
    Ho = { wheel: 0 },
    qo = { time: 0 };
  un.prototype = {
    push: function (e) {
      this.content.push(e), this.bubbleUp(this.content.length - 1);
    },
    pop: function () {
      var e, n;
      return (
        (e = this.content[0]),
        (n = this.content.pop()),
        0 < this.content.length && ((this.content[0] = n), this.sinkDown(0)),
        e
      );
    },
    remove: function (e) {
      var n, t, o;
      for (n = this.content.length, t = 0; t < n; t += 1)
        if (this.content[t] === e) {
          (o = this.content.pop()),
            t !== n - 1 &&
              ((this.content[t] = o), this.bubbleUp(t), this.sinkDown(t));
          break;
        }
    },
    size: function () {
      var e;
      return (e = this.content.length), e;
    },
    bubbleUp: function (e) {
      var t, o, r, a;
      for (
        t = this.content[e], o = this.scoreFunction(t);
        0 < e &&
        ((r = Math.floor((e + 1) / 2) - 1),
        (a = this.content[r]),
        !(o >= this.scoreFunction(a)));

      )
        (this.content[r] = t), (this.content[e] = a), (e = r);
    },
    sinkDown: function (e) {
      var t, o, r, a, i, d, s, l, u, g;
      for (
        t = this.content.length, o = this.content[e], r = this.scoreFunction(o);
        (i = 2 * (e + 1)),
          (a = i - 1),
          (d = null),
          a < t &&
            ((s = this.content[a]),
            (l = this.scoreFunction(s)),
            l < r && (d = a)),
          i < t &&
            ((u = this.content[i]),
            (g = this.scoreFunction(u)),
            g < (null === d ? r : l) && (d = i)),
          null !== d;

      )
        (this.content[e] = this.content[d]), (this.content[d] = o), (e = d);
    },
    rescore: function (n) {
      this.sinkDown(this.content.indexOf(n));
    },
  };
  var jo = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Vo = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    Jo = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    Xo = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    Qo = function (e) {
      var n = new Date(),
        t = {
          time: n.getTime(),
          year: n.getFullYear(),
          mon: n.getMonth(),
          dom: n.getDate(),
          dow: n.getDay(),
          h24: n.getHours(),
          h12: 0,
          min: n.getMinutes(),
          sec: n.getSeconds(),
          ms: e || n.getMilliseconds(),
          zone: n.getTimezoneOffset(),
          ampm: "AM",
        };
      (t.h12 = t.h24 + 1),
        11 < t.h24 && ((t.ampm = "PM"), 12 < t.h24 && (t.h12 = t.h24 - 12)),
        (t.str = {
          month_full: jo[t.mon],
          month_short: Vo[t.mon],
          month_num: Ht(t.mon, 2),
          day_full: Jo[t.dow],
          day_short: Xo[t.dow],
          dom: Ht(t.dom, 2),
          hour12: Ht(t.h12, 2),
          minute: Ht(t.min, 2),
          second: Ht(t.sec, 2),
          millisecond: Ht(t.ms, 3),
        });
      var o = t.str;
      return (
        (o.time =
          o.hour12 + ":" + o.minute + ":" + o.second + "+" + o.millisecond),
        (o.date_full =
          o.day_full +
          " " +
          o.dom +
          " " +
          o.month_full +
          " " +
          o.year +
          " " +
          o.time +
          " " +
          t.ampm),
        (o.date_short =
          o.day_short +
          " " +
          o.dom +
          " " +
          o.month_short +
          " " +
          t.year +
          " " +
          o.time +
          " " +
          t.ampm),
        (t.timestamp =
          t.str.day_short +
          "_" +
          t.str.dom +
          "_" +
          t.str.month_short +
          "_" +
          t.year +
          "_" +
          t.str.time +
          "_" +
          t.ampm),
        qt(o),
        qt(t),
        t
      );
    },
    Zo = {
      howls: {},
      sources: function (e, n, t) {
        var o, r, a, d, s;
        for (o = [], r = 0, a = t.fileTypes.length, d = 0; d < a; d += 1)
          (s = t.fileTypes[d]),
            Qt.codecs(s) && ((o[r] = t.path + n + "." + s), (r += 1));
        return 1 > o.length
          ? L(e + "No params.fileTypes formats supported in this browser")
          : ((t.src = o), t);
      },
      verifyParams: function (e, n, t) {
        var o, r, a, d, s;
        if (!n || zt(n) !== Mt)
          return L(e + "filename argument is not a string");
        if (1 > n.length) return PS.DONE;
        if (void 0 === t)
          return {
            path: Zn.audio.path,
            fileTypes: Zn.audio.fileTypes,
            volume: Zn.audio.volume,
            onLoad: null,
            onEnd: null,
            autoplay: !1,
            loop: !1,
            lock: !1,
            data: n,
          };
        if (zt(t) !== Yt) return L(e + "params argument is not an object");
        if (
          ((o = t.path),
          (r = zt(o)),
          void 0 === o || null === o || o === PS.DEFAULT)
        )
          t.path = Zn.audio.path;
        else {
          if (r !== Mt) return L(e + "params.path property is not a string");
          1 > o.length && (t.path = Zn.audio.path);
        }
        if (
          ((o = t.fileTypes),
          (r = zt(o)),
          void 0 === o || null === o || o === PS.DEFAULT)
        )
          t.fileTypes = Zn.audio.fileTypes;
        else {
          if (r !== Gt)
            return L(e + "params.fileTypes property is not an array");
          if (((a = o.length), 1 > a))
            return L(e + "params.fileTypes array is empty");
          for (d = 0; d < a; ) {
            if (((s = o[d]), zt(s) !== Mt || 1 > s.length))
              return L(e + "params.fileTypes element " + d + " invalid");
            if (
              ((s = s.toLowerCase()), "ogg" !== s && "mp3" !== s && "wav" !== s)
            )
              return L(
                e + "params.fileTypes unsupported extension: '" + s + "'"
              );
            Qt.codecs(s) ? ((o[d] = s), (d += 1)) : (o.splice(d, 1), (a -= 1));
          }
          if (1 > a)
            return L(
              e + "No extensions in params.fileTypes supported by this browser"
            );
        }
        if (
          ((o = t.volume),
          (r = zt(o)),
          void 0 === o || null === o || o === PS.DEFAULT)
        )
          t.volume = Zn.audio.volume;
        else {
          if (r !== Bt) return L(e + "params.volume is not a number");
          1 < o ? (t.volume = 1) : 0 > o && (t.volume = 0);
        }
        if (
          ((o = t.onLoad),
          (r = zt(o)),
          void 0 === o || null === o || o === PS.DEFAULT)
        )
          t.onLoad = null;
        else if (r !== Kt) return L(e + "params.onLoad is not a function");
        if (
          ((o = t.onEnd),
          (r = zt(o)),
          void 0 === o || null === o || o === PS.DEFAULT)
        )
          t.onEnd = null;
        else if (r !== Kt) return L(e + "params.onEnd is not a function");
        if (
          ((o = t.data),
          (void 0 === o || null === o || o === PS.DEFAULT) && (t.data = n),
          (o = t.autoplay),
          (r = zt(o)),
          void 0 === o || !1 === o || null === o || 0 === o || o === PS.DEFAULT)
        )
          t.autoplay = !1;
        else if (!0 === o || r === Bt) t.autoplay = !0;
        else return L(e + "params.autoplay invalid");
        if (
          ((o = t.loop),
          (r = zt(o)),
          void 0 === o || !1 === o || null === o || 0 === o || o === PS.DEFAULT)
        )
          t.loop = !1;
        else if (!0 === o || r === Bt) t.loop = !0;
        else return L(e + "params.loop invalid");
        if (
          ((o = t.lock),
          (r = zt(o)),
          void 0 === o || !1 === o || null === o || 0 === o || o === PS.DEFAULT)
        )
          t.lock = !1;
        else if (!0 === o || r === Bt) t.lock = !0;
        else return L(e + "params.autoplay invalid");
        return t;
      },
      verifyChannel: function (e, n) {
        var t = zt(n);
        return n && t === Mt
          ? 1 > n.length
            ? PS.DONE
            : Zo.howls[n]
            ? n
            : L(e + "Channel ID '" + n + "' unrecognized or expired")
          : L(e + "Channel ID is not a valid string");
      },
      response: function (e) {
        var n = {
          channel: e.channel,
          name: e.name,
          path: e.path,
          url: e.url,
          duration: e.duration,
          data: e.data,
        };
        return qt(n), n;
      },
      load: function (e, n, t, o) {
        var r, a, i;
        return ((r = Zo.sources(e, n, t)), r === PS.ERROR)
          ? PS.ERROR
          : ((r.onloaderror = function (n, t) {
              return Qt.isMobile && Qt.mobileAutoEnable && !Qt._mobileEnabled
                ? void a.once("unlock", function () {
                    a.load();
                  })
                : void L(e + t);
            }),
            (r.onplayerror = function (n, t) {
              return Qt.isMobile && Qt.mobileAutoEnable && !Qt._mobileEnabled
                ? void a.once("unlock", function () {
                    a.play();
                  })
                : void L(e + t);
            }),
            (r.onload = function (t, d) {
              var s, l, u, g;
              if (((i = "channel_" + Ht(t, 3, 10)), (l = Zo.howls[i]), l))
                return void L(e, "Cache clash @ " + i);
              if (
                ((l = {
                  id: t,
                  channel: i,
                  howl: a,
                  name: n,
                  path: r.path,
                  url: d,
                  duration: a.duration(),
                  data: r.data,
                }),
                qt(l),
                (Zo.howls[i] = l),
                (s = r.onLoad),
                s && typeof s === Kt)
              ) {
                u = Zo.response(l);
                try {
                  s(u);
                } catch (n) {
                  S(
                    e +
                      ".onLoad error @ " +
                      i +
                      ":\n'" +
                      d +
                      "'\n[" +
                      n.message +
                      "]",
                    n
                  );
                }
              }
              o && (g = a.play(t));
            }),
            (r.onend = function (n, t) {
              var o, a, d;
              if (((o = Zo.howls[i]), !o))
                return void L(e, i + " unrecognized or expired");
              if (((d = r.onEnd), d && typeof d === Kt)) {
                a = Zo.response(o);
                try {
                  d(a);
                } catch (n) {
                  S(
                    e +
                      ".onEnd error @ " +
                      i +
                      ":\n'" +
                      t +
                      "'\n[" +
                      n.message +
                      "]",
                    n
                  );
                }
              }
            }),
            (r.preload = !1),
            (r.autoplay = !1),
            (a = new Xt(r)),
            !a)
          ? PS.ERROR
          : ((a = a.load()), a ? PS.DONE : PS.ERROR);
      },
      playChannel: function (e, n, t) {
        var o, r, a, i, d, s;
        (o = Zo.howls[n]),
          (a = o.id),
          (r = o.howl),
          (i = r._src),
          r.volume(t.volume, a),
          r.loop(t.loop, a),
          (d = r._onloaderror),
          zt(d) === Gt &&
            1 > d.length &&
            r.on("loaderror", function (n, t) {
              return Qt.isMobile && Qt.mobileAutoEnable && !Qt._mobileEnabled
                ? void r.once("unlock", function () {
                    r.load();
                  })
                : void L(e + t);
            }),
          (d = r._onplayerror),
          zt(d) === Gt &&
            1 > d.length &&
            r.on("playerror", function (n, t) {
              return Qt.isMobile && Qt.mobileAutoEnable && !Qt._mobileEnabled
                ? void r.once("unlock", function () {
                    r.play();
                  })
                : void L(e + t);
            }),
          (d = r._onload),
          zt(d) === Gt && 1 > d.length
            ? r.on("load", function () {})
            : ((r.preload = !0), (r.autoplay = !0)),
          r.on("end", function (r, a) {
            var i;
            if (((i = t.onEnd), i && zt(i) === Kt))
              try {
                i(o);
              } catch (t) {
                S(
                  e +
                    ".onEnd error @ " +
                    n +
                    ":\n'" +
                    a +
                    "'\n[" +
                    t.message +
                    "]",
                  t
                );
              }
          }),
          r.seek(0, a),
          (s = r.play(a));
      },
      pause: function (e, n) {
        var t, o;
        return (
          (t = Zo.howls[n]),
          (o = t.howl),
          o.playing() ? o.pause(t.id) : o.play(t.id),
          n
        );
      },
      stop: function (e, n) {
        var t, o;
        return (t = Zo.howls[n]), (o = t.howl), o.stop(t.id), n;
      },
      fade: function (e, n, t, o, r, a) {
        var i, d, s;
        if (((i = Zo.howls[n]), (d = i.howl), !d.playing())) return PS.DONE;
        if (((s = i.id), t === PS.CURRENT && (t = d.volume(s)), t === o)) {
          if (a && zt(a) === Kt)
            try {
              a(n);
            } catch (t) {
              S(e + ".onEnd error @ " + n + ":\n[" + t.message + "]", t);
            }
          return n;
        }
        return (
          a &&
            zt(a) === Kt &&
            d.once("fade", function () {
              try {
                a(n);
              } catch (t) {
                S(e + ".onEnd error @ " + n + ":\n[" + t.message + "]", t);
              }
            }),
          d.fade(t, o, r, s),
          n
        );
      },
    },
    $o = function (e) {
      var n = null,
        t = null,
        o = null,
        r = null,
        a = window.navigator.userAgent,
        i = function (e) {
          var n = a.match(e);
          return (n && 1 < n.length && n[1]) || "";
        },
        d = function (e) {
          var n = a.match(e);
          return (n && 1 < n.length && n[2]) || "";
        },
        s = i(/(ipod|iphone|ipad)/i).toLowerCase(),
        l = /like android/i.test(a),
        u = !l && /android/i.test(a),
        g = /nexus\s*[0-6]\s*/i.test(a),
        m = !g && /nexus\s*[0-9]+/i.test(a),
        p = /CrOS/.test(a),
        c = /silk/i.test(a),
        f = /sailfish/i.test(a),
        b = /tizen/i.test(a),
        _ = /(web|hpw)os/i.test(a),
        h = /windows phone/i.test(a),
        R = !h && /windows/i.test(a),
        E = !s && !c && /macintosh/i.test(a),
        T = !u && !f && !b && !_ && /linux/i.test(a),
        y = d(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
        v = i(/version\/(\d+(\.\d+)?)/i),
        A = /tablet/i.test(a) && !/tablet pc/i.test(a),
        x = !A && /[^-]mobi/i.test(a),
        U = /xbox/i.test(a);
      /firefox|iceweasel|fxios/i.test(a)
        ? ((n = "Firefox"),
          (x || /fennec/.test(a)) && (n += " Mobile"),
          (t = i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)),
          /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(a) &&
            ((o = "Firefox OS"), (x = !0)))
        : /chrome|crios|crmo/i.test(a)
        ? ((n = "Chrome"), (t = i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)))
        : /chromium/i.test(a)
        ? ((n = "Chromium"), (t = i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v))
        : /safari|applewebkit/i.test(a)
        ? ((n = "Safari"), v && (t = v))
        : /edg([ea]|ios)/i.test(a)
        ? ((n = "Microsoft Edge"), (t = y))
        : /msie/.test(a)
        ? ((n = "Internet Explorer"),
          /iemobile/.test(a) && ((n += " Mobile"), (x = !0)),
          (t = /msie \d+[.]\d+/.exec(a)[0].split(" ")[1]))
        : /trident/.test(a)
        ? ((n = "Internet Explorer"),
          (t = /rv\:\d+[.]\d+/.exec(a)[0].split(":")[1]))
        : /opera/i.test(a)
        ? ((n = "Opera"),
          /mini/.test(a)
            ? (n += " Mini")
            : /mobile/.test(a) && ((n += " Mobile"), (x = !0)),
          (t = v || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)))
        : /opr\/|opios/i.test(a)
        ? ((n = "Opera"),
          /mini/.test(a)
            ? (n += " Mini")
            : /mobile/.test(a) && ((n += " Mobile"), (x = !0)),
          (t = i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v))
        : c
        ? ((n = "Amazon Silk"), (t = i(/silk\/(\d+(\.\d+)?)/i)), (x = !0))
        : /blackberry|\bbb\d+/i.test(a) || /rim\stablet/i.test(a)
        ? ((n = "BlackBerry"),
          (t = v || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)),
          (o = "BlackBerry OS"),
          (r = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i)),
          (x = !0))
        : /googlebot/i.test(a)
        ? ((n = "Googlebot"), (t = i(/googlebot\/(\d+(\.\d+))/i) || v))
        : b
        ? ((n = "Tizen"),
          (t = i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v),
          (o = "TizenOS"),
          (r = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
          (x = !0))
        : /vivaldi/i.test(a)
        ? ((n = "Vivaldi"), (t = i(/vivaldi\/(\d+(\.\d+)?)/i) || v))
        : /falkon/i.test(a)
        ? ((n = "Falkon"), (t = i(/falkon\/(\d+(\.\d+)?)/i) || v))
        : /seamonkey\//i.test(a)
        ? ((n = "SeaMonkey"), (t = i(/seamonkey\/(\d+(\.\d+)?)/i)))
        : /slimerjs/i.test(a)
        ? ((n = "SlimerJS"), (t = i(/slimerjs\/(\d+(\.\d+)?)/i)))
        : ((n = i(/^(.*)\/(.*) /)), (t = d(/^(.*)\/(.*) /))),
        o ||
          (R
            ? ((o = "Windows"),
              h
                ? ((o += " Phone"),
                  (r = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)),
                  (x = !0))
                : (r = (function (e) {
                    return "NT" === e
                      ? "NT"
                      : "XP" === e
                      ? "XP"
                      : "NT 5.0" === e
                      ? "2000"
                      : "NT 5.1" === e
                      ? "XP"
                      : "NT 5.2" === e
                      ? "2003"
                      : "NT 6.0" === e
                      ? "Vista"
                      : "NT 6.1" === e
                      ? "7"
                      : "NT 6.2" === e
                      ? "8"
                      : "NT 6.3" === e
                      ? "8.1"
                      : "NT 10.0" === e
                      ? "10"
                      : void 0;
                  })(i(/Windows ((NT|XP)( \d\d?.\d)?)/i))))
            : E
            ? ((o = "macOS"),
              (r = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)),
              (r = r.replace(/[_\s]/g, ".")))
            : !h && (u || c)
            ? ((o = "Android"),
              m ? (o += " Nexus Tablet") : g && (o += " Nexus Mobile"),
              (r = i(/android[ \/-](\d+(\.\d+)*)/i)),
              (x = !0))
            : !h && s
            ? ((o = "iOS"),
              (r = i(/os (\d+([_\s]\d+)*) like mac os x/i)),
              (r = r.replace(/[_\s]/g, ".")),
              (x = !0))
            : p
            ? (o = "Chrome OS")
            : T
            ? (o = "Linux")
            : U
            ? (o = "Xbox")
            : _
            ? ((o = "WebOS"), (r = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)))
            : b && ((o = "Tizen"), (r = i(/tizen[\/\s](\d+(\.\d+)*)/i)))),
        t || ((t = /version\/[\.\d]+/.exec(a)), t && (t = t[0].split("/")[1])),
        (e.app_name = n),
        (e.app_version = t),
        (e.os_name = o),
        (e.os_version = r),
        (e.mobile = x);
    },
    er = {
      ALL: "PS.ALL",
      CURRENT: "PS.CURRENT",
      DONE: "PS.DONE",
      DEFAULT: "PS.DEFAULT",
      ERROR: "PS.ERROR",
      EMPTY: "PS.EMPTY",
      UNEQUAL: "PS.UNEQUAL",
      GRID: "PS.GRID",
      STATUS: "PS.STATUS",
      HTML5_AUDIO: "PS.HTML5_AUDIO",
      WEB_AUDIO: "PS.WEB_AUDIO",
      SPRITE_TOUCH: "PS.SPRITE_TOUCH",
      SPRITE_OVERLAP: "PS.SPRITE_OVERLAP",
      COLOR_BLACK: 0,
      COLOR_WHITE: 16777215,
      COLOR_GRAY_LIGHT: 12632256,
      COLOR_GRAY: 8421504,
      COLOR_GRAY_DARK: 4210752,
      COLOR_RED: 16711680,
      COLOR_ORANGE: 16744448,
      COLOR_YELLOW: 16776960,
      COLOR_GREEN: 65280,
      COLOR_BLUE: 255,
      COLOR_INDIGO: 4194559,
      COLOR_VIOLET: 8388863,
      COLOR_MAGENTA: 16711935,
      COLOR_CYAN: 65535,
      ALPHA_OPAQUE: 255,
      ALPHA_TRANSPARENT: 0,
      KEY_ENTER: 13,
      KEY_TAB: 9,
      KEY_ESCAPE: 27,
      KEY_ARROW_LEFT: 1005,
      KEY_ARROW_UP: 1006,
      KEY_ARROW_RIGHT: 1007,
      KEY_ARROW_DOWN: 1008,
      KEY_DELETE: 1010,
      KEY_PAD_0: 96,
      KEY_PAD_1: 97,
      KEY_PAD_2: 98,
      KEY_PAD_3: 99,
      KEY_PAD_4: 100,
      KEY_PAD_5: 101,
      KEY_PAD_6: 102,
      KEY_PAD_7: 103,
      KEY_PAD_8: 104,
      KEY_PAD_9: 105,
      KEY_F1: 112,
      KEY_F2: 113,
      KEY_F3: 114,
      KEY_F4: 115,
      KEY_F5: 116,
      KEY_F6: 117,
      KEY_F7: 118,
      KEY_F8: 119,
      KEY_F9: 120,
      KEY_F10: 121,
      WHEEL_FORWARD: "PS.WHEEL_FORWARD",
      WHEEL_BACKWARD: "PS.WHEEL_BACKWARD",
      FINDER_ASTAR: "PS.FINDER_ASTAR",
      FINDER_BREADTH_FIRST: "PS.FINDER_BREADTH_FIRST",
      FINDER_BEST_FIRST: "PS.FINDER_BEST_FIRST",
      FINDER_DIJKSTRA: "PS.FINDER_DIJKSTRA",
      FINDER_BI_ASTAR: "PS.FINDER_BI_ASTAR",
      FINDER_BI_BEST_FIRST: "PS.FINDER_BI_BEST_FIRST",
      FINDER_BI_DIJKSTRA: "PS.FINDER_BI_DIJKSTRA",
      FINDER_BI_BREADTH_FIRST: "PS.FINDER_BI_BREADTH_FIRST",
      FINDER_JUMP_POINT: "PS.FINDER_JUMP_POINT",
      _sys: function (e, n, t) {
        var o, r, a, d, s, l, u, g, m, p, c;
        for (
          o = void 0 === e || zt(e) !== Bt ? Zn.cover.bgColor : e,
            r = void 0 === n || zt(n) !== Bt ? Zn.cover.textColor : n,
            a = void 0 === t || zt(t) !== Mt ? Zn.cover.text : t,
            jt = Math.floor(1e6 * Math.random()) + 1,
            Zt = [],
            Zt.length = 256,
            $t = [],
            $t.length = 256,
            eo = [],
            eo.length = 256,
            no = [],
            no.length = 256,
            s = 0;
          256 > s;
          s += 1
        )
          (Zt[s] = "rgba(" + s + ","),
            ($t[s] = s + ","),
            (eo[s] = s + ",1)"),
            (l = Math.floor(100 * Math.max(0, Math.min(s / 255, 1))) / 100),
            (et[s] = l),
            (no[s] = l + ")");
        $o($n.host), Un(), (tt = !1);
        try {
          var f = Object.defineProperty({}, "capture", {
            get: function () {
              tt = !0;
            },
          });
          window.addEventListener("test", null, f);
        } catch (n) {}
        ($n.inputs.touch = St = Sn()), Uo.start(), (document.body.id = "body");
        var b = document.getElementById("outer");
        b ||
          ((b = document.createElement("div")),
          (b.id = "outer"),
          document.body.appendChild(b)),
          (nt = document.getElementById(Ln)),
          nt ||
            ((nt = document.createElement("div")),
            (nt.id = Ln),
            b.appendChild(nt)),
          (nt.style.width = ro + "px"),
          (PS._mainLeft = nt.offsetLeft),
          (PS._mainTop = nt.offsetTop);
        var _ = document.getElementById(Cn);
        _ ||
          ((_ = document.createElement("p")), (_.id = Cn), nt.appendChild(_)),
          (_.style.fontSize = ao),
          (_.style.display = "block");
        var h = document.createTextNode("");
        _.appendChild(h);
        var E = document.getElementById(wn);
        E ||
          ((E = document.createElement("p")), (E.id = wn), nt.appendChild(E)),
          (E.style.fontSize = ao),
          (E.style.display = "none"),
          (g = document.getElementById(Nn)),
          g ||
            ((g = document.createElement("span")),
            (g.id = Nn),
            E.appendChild(g));
        var y = document.createTextNode("");
        g.appendChild(y),
          (g = document.getElementById(Dn)),
          g ||
            ((g = document.createElement("span")),
            (g.id = Dn),
            E.appendChild(g));
        var v = document.getElementById(Fn);
        v ||
          ((v = document.createElement("input")),
          (v.id = Fn),
          g.appendChild(v)),
          (v.tabindex = 0),
          (v.wrap = "soft"),
          (lo = {
            statusP: _,
            statusNode: h,
            inputP: E,
            inputNode: y,
            input: v,
            colorNow: null,
            fader: N(Cn, Oo, null),
            text: "",
            label: "",
            exec: null,
            color: {
              r: 255,
              g: 255,
              b: 255,
              rgb: 16777215,
              a: 255,
              str: "rgba(255,255,255,1)",
            },
          });
        var x = new Blob(
            [
              '<svg version="1.1" id="PSLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <style type="text/css"> .st0{fill:#6A98BA;} .st1{fill:#EDE945;} .st2{fill:#F47829;} .st3{fill:#86568E;} .st4{fill:#A0C73B;} </style> <rect x="128" y="304" class="st0" width="32" height="32"/> <rect x="160" y="144" class="st1" width="32" height="32"/> <rect x="192" y="208" class="st2" width="32" height="32"/> <rect x="224" y="304" class="st0" width="32" height="32"/> <rect x="256" y="336" class="st3" width="32" height="32"/> <rect x="288" y="304" class="st0" width="32" height="32"/> <rect x="320" y="240" class="st4" width="32" height="32"/> <rect x="352" y="208" class="st2" width="32" height="32"/> </svg>',
            ],
            { type: "image/svg+xml" }
          ),
          L = URL.createObjectURL(x),
          C = document.getElementById(Pn);
        C ||
          ((C = document.createElement("img")),
          C.addEventListener(
            "load",
            function () {
              URL.revokeObjectURL(L);
            },
            !tt || { once: !0 }
          ),
          (C.id = Pn),
          (C.src = L),
          nt.appendChild(C)),
          (p = ro.toString()),
          (C.width = p),
          (C.height = p);
        var w = document.getElementById(On);
        if (!w) {
          if (((w = document.createElement("canvas")), !w))
            return void window.alert(
              "[PS.sys] " + "HTML5 canvas not supported."
            );
          (w.id = On), nt.appendChild(w);
        }
        for (
          w.width = ro,
            w.style.backgroundColor = Zn.grid.color.str,
            Ct = !1,
            oe(),
            ft = document.getElementById(kn),
            ft ||
              ((ft = document.createElement("p")),
              (ft.id = kn),
              nt.appendChild(ft)),
            Pt &&
              ((Dt = document.getElementById(In)),
              !Dt &&
                ((Dt = document.createElement("div")),
                (Dt.id = In),
                nt.appendChild(Dt)),
              (Ft = document.getElementById(Bn)),
              !Ft &&
                ((Ft = document.createElement("textarea")),
                (Ft.id = Bn),
                Dt.appendChild(Ft)),
              (Ft.rows = 8),
              (Ft.wrap = "soft"),
              (Ft.readonly = "readonly"),
              (Ft.onfocus = function () {
                kt = !0;
              }),
              (Ft.onblur = function () {
                kt = !1;
              }),
              Ft.addEventListener("mousedown", de, !!tt && ot),
              Ft.addEventListener("mouseup", se, !!tt && ot)),
            Ot = !1,
            kt = !1,
            Et = !1,
            Tt = [],
            bo = [],
            _o = [],
            ho = [],
            s = 0;
          256 > s;
          s += 1
        )
          (Tt[s] = 0), (bo[s] = s), (_o[s] = s), (ho[s] = s);
        for (
          yt = [],
            vt = !1,
            At = !1,
            xt = !1,
            Ut = !0,
            Eo = Hn,
            To = 5 * Hn,
            bo[33] = PS.KEY_PAGE_UP,
            bo[34] = PS.KEY_PAGE_DOWN,
            bo[35] = PS.KEY_END,
            bo[36] = PS.KEY_HOME,
            bo[37] = PS.KEY_ARROW_LEFT,
            bo[38] = PS.KEY_ARROW_UP,
            bo[39] = PS.KEY_ARROW_RIGHT,
            bo[40] = PS.KEY_ARROW_DOWN,
            bo[45] = PS.KEY_INSERT,
            bo[46] = PS.KEY_DELETE,
            bo[188] = 44,
            bo[190] = 46,
            bo[191] = 47,
            bo[192] = 96,
            bo[219] = 91,
            bo[220] = 92,
            bo[221] = 93,
            bo[222] = 39,
            _o[96] = 126,
            _o[49] = 33,
            _o[50] = 64,
            _o[51] = 35,
            _o[52] = 36,
            _o[53] = 37,
            _o[54] = 94,
            _o[55] = 38,
            _o[56] = 42,
            _o[57] = 40,
            _o[48] = 41,
            _o[45] = 95,
            _o[61] = 43,
            _o[91] = 123,
            _o[93] = 125,
            _o[92] = 124,
            _o[59] = 58,
            _o[39] = 34,
            _o[44] = 60,
            _o[46] = 62,
            _o[47] = 63,
            s = 65;
          91 > s;
          s += 1
        )
          ho[s] = s + 32;
        for (
          ho[126] = 96,
            ho[33] = 49,
            ho[64] = 50,
            ho[35] = 51,
            ho[36] = 52,
            ho[37] = 53,
            ho[94] = 54,
            ho[38] = 55,
            ho[42] = 56,
            ho[40] = 57,
            ho[41] = 48,
            ho[95] = 45,
            ho[43] = 51,
            ho[123] = 91,
            ho[125] = 93,
            ho[124] = 92,
            ho[58] = 59,
            ho[34] = 39,
            ho[60] = 44,
            ho[62] = 46,
            ho[63] = 47,
            window.onblur = be,
            m = w.getContext("2d"),
            m.constructor.prototype.fillRoundedRect ||
              (m.constructor.prototype.fillRoundedRect = function (
                e,
                n,
                t,
                o,
                r,
                a,
                i
              ) {
                void 0 === r && (r = 5),
                  this.beginPath(),
                  "Opera" === $n.host.app
                    ? (this.moveTo(e + t - r, n),
                      this.arcTo(e + r, n, e, n + r, r),
                      this.arcTo(e, n + o - r, e + r, n + o, r),
                      this.arcTo(e + t - r, n + o, e + t, n + o - r, r),
                      this.arcTo(e + t, n + r, e + t - r, n, r))
                    : (this.moveTo(e + r, n),
                      this.arcTo(e + t, n, e + t, n + o, r),
                      this.arcTo(e + t, n + o, e, n + o, r),
                      this.arcTo(e, n + o, e, n, r),
                      this.arcTo(e, n, e + t, n, r)),
                  this.closePath(),
                  i ? this.stroke() : (a || void 0 === a) && this.fill();
              }),
            m.constructor.prototype.fillCircle ||
              (m.constructor.prototype.fillCircle = function (
                e,
                n,
                t,
                o,
                r,
                a
              ) {
                var i;
                (i = t / 2),
                  this.beginPath(),
                  this.arc(e + i, n + i, i, 0, 2 * Math.PI, !0),
                  this.closePath(),
                  a ? this.stroke() : (r || void 0 === r) && this.fill();
              }),
            io = {
              canvas: w,
              context: m,
              colorNow: null,
              fader: N(On, No, Fo),
              width: 512,
              x: 8,
              y: 8,
              max: 32,
              plane: 0,
              color: {
                r: 48,
                g: 48,
                b: 48,
                a: 255,
                rgb: 3158064,
                str: "rgba(48,48,48,1)",
              },
              shadow: {
                show: !1,
                r: 192,
                g: 192,
                b: 192,
                a: 255,
                rgb: 12632256,
                str: "rgba(192,192,192,1)",
                params: "0px 0px 64px 8px ",
              },
              padLeft: 0,
              padRight: 0,
              ready: !1,
              timeExit: 0,
            },
            so = [],
            so.length = l = 1024,
            s = 0;
          s < l;
          s += 1
        )
          so[s] = Y(s);
        (mo = []),
          (gt = 0),
          (Ao = []),
          (It = 0),
          (go = []),
          (ut = 0),
          (uo = document.createElement("canvas")),
          (m = uo.getContext("2d")),
          (m.imageSmoothingEnabled = !1),
          (m.webkitImageSmoothingEnabled = !1),
          (u = {}),
          I(u, o),
          (p = Zt[u.r] + $t[u.g] + eo[u.b]),
          (document.body.style.backgroundColor = p),
          (lo.statusP.style.backgroundColor = p),
          (ft.style.backgroundColor = p),
          (u = {}),
          I(u, r),
          (p = Zt[u.r] + $t[u.g] + eo[u.b]),
          (lo.statusP.style.color = p),
          (ft.style.color = p),
          (c = new Image());
        var D = function () {
            var e;
            if (
              (document.removeEventListener("click", D, !tt || rt),
              document.removeEventListener("touchstart", D, !tt || rt),
              document.removeEventListener("touchend", D, !tt || rt),
              A(),
              (C.style.display = "none"),
              (w.style.display = "block"),
              (e = window.getComputedStyle(io.canvas, null)),
              (io.padLeft = parseInt(
                e.getPropertyValue("padding-top").replace("px", ""),
                10
              )),
              (io.padRight = parseInt(
                e.getPropertyValue("padding-left").replace("px", ""),
                10
              )),
              PS.gridColor(Zn.grid.color),
              (ft.style.color = "rgba(0,0,0,1)"),
              PS.statusColor(Zn.status.color),
              yn("Perlenspiel " + $n.major + "." + $n.minor),
              (p = "() function invalid; will be ignored"),
              PS.init &&
                typeof PS.init !== Kt &&
                ((PS.init = null), T("PS.init" + p)),
              PS.touch &&
                typeof PS.touch !== Kt &&
                ((PS.touch = null), T("PS.touch" + p)),
              PS.release &&
                typeof PS.release !== Kt &&
                ((PS.release = null), T("PS.release" + p)),
              PS.enter &&
                typeof PS.enter !== Kt &&
                ((PS.enter = null), T("PS.enter" + p)),
              PS.exit &&
                typeof PS.exit !== Kt &&
                ((PS.exit = null), T("PS.exit" + p)),
              PS.exitGrid &&
                typeof PS.exitGrid !== Kt &&
                ((PS.exitGrid = null), T("PS.exitGrid" + p)),
              PS.keyDown &&
                typeof PS.keyDown !== Kt &&
                ((PS.keyDown = null), T("PS.keyDown" + p)),
              PS.keyUp &&
                typeof PS.keyUp !== Kt &&
                ((PS.keyUp = null), T("PS.keyUp" + p)),
              PS.input &&
                typeof PS.input !== Kt &&
                ((PS.input = null), T("PS.input" + p)),
              PS.swipe &&
                typeof PS.swipe !== Kt &&
                ((PS.swipe = null), T("PS.swipe" + p)),
              PS.shutdown &&
                typeof PS.shutdown !== Kt &&
                ((PS.shutdown = null), T("PS.shutdown" + p)),
              Se(Zn.grid.x, Zn.grid.y),
              Ae(),
              PS.init)
            ) {
              $n.date = Qo(!1);
              try {
                PS.init($n, { time: Uo.ticks }), R();
              } catch (e) {
                S("PS.init() failed [" + e.message + "]", e);
              }
            }
          },
          F = function (e) {
            console &&
              console.log &&
              console.log(
                "PS3 WARNING: '" +
                  Zn.cover.file +
                  "' load error; using default image"
              ),
              (this.src = null),
              P(e);
          },
          P = function () {
            var e = this;
            c.removeEventListener("load", P, !0),
              c.removeEventListener("error", F, !0),
              "undefined" != typeof e && e.src && (C.src = this.src),
              (C.alt = "[Cover Image]"),
              yn(a),
              (Qt.autoSuspend = !1),
              (vo = null),
              (d = PS.audioLoad(Zn.audio.error_sound, {
                lock: !0,
                onLoad: function (e) {
                  e && e !== PS.ERROR && (vo = e.name),
                    document.addEventListener("touchstart", D, !tt || rt),
                    document.addEventListener("touchend", D, !tt || rt),
                    document.addEventListener("click", D, !tt || rt);
                },
              })),
              d === PS.ERROR && T("Error sound '" + vo + "' not loaded"),
              ($n.audio = {
                engine: "Howler",
                major: Qt.major,
                minor: Qt.minor,
                revision: Qt.revision,
                mode: Qt.noAudio ? "x" : Qt.usingWebAudio ? "w" : "h",
              }),
              (p = "PS " + $n.major + "." + $n.minor + "." + $n.revision),
              (p += Qt.noAudio
                ? " | Silent"
                : " | H " +
                  Qt.major +
                  "." +
                  Qt.minor +
                  "." +
                  Qt.revision +
                  $n.audio.mode),
              (p +=
                " | " +
                $n.host.os_name +
                " " +
                $n.host.os_version +
                " " +
                $n.host.app_name +
                " " +
                $n.host.app_version),
              St && (p += " | Touch"),
              U(p);
          };
        c.addEventListener("load", P, !tt || it),
          c.addEventListener("error", F, !tt || it),
          (c.src = Zn.cover.file);
      },
      gridSize: function (e, n) {
        var t, o, r, a, i;
        if (((t = "[PS.gridSize] "), (o = arguments.length), 0 < o)) {
          if (2 < o) return L(t + "Too many arguments");
          if (((r = e), (a = n), (i = Zn.grid.max), r === PS.DEFAULT))
            r = Zn.grid.x;
          else if (r === PS.CURRENT) r = io.x;
          else if (zt(r) === Bt)
            (r = Math.floor(r)), 1 > r ? (r = 1) : r > i && (r = i);
          else return L(t + "x argument invalid");
          if (a === PS.DEFAULT) a = Zn.grid.y;
          else if (a === PS.CURRENT) a = io.y;
          else if (zt(a) === Bt)
            (a = Math.floor(a)), 1 > a ? (a = 1) : a > i && (a = i);
          else return L(t + "y argument invalid");
          Se(r, a);
        }
        return { width: io.x, height: io.y };
      },
      gridPlane: function (e) {
        var n, t, o;
        if (((n = "[PS.gridPlane] "), 1 < arguments.length))
          return L(n + "Too many arguments");
        if (((t = e), (o = zt(t)), o !== Wt && t !== PS.CURRENT)) {
          if (t === PS.DEFAULT) t = 0;
          else if (o === Bt) (t = Math.floor(t)), 1 > t && (t = 0);
          else return L(n + "plane argument invalid");
          io.plane = t;
        }
        return io.plane;
      },
      gridColor: function (e, n, t) {
        var o, r;
        return ((o = "[PS.gridColor] "), 3 < arguments.length)
          ? L(o + "Too many arguments")
          : ((r = B(o, e, n, t)), r === PS.ERROR ? PS.ERROR : xe(r));
      },
      gridFade: function (e, n) {
        var t, o, r, a, i, d, s, l;
        if (((t = "[PS.gridFade] "), 2 < arguments.length))
          return L(t + "Too many arguments");
        if (
          ((r = io.color),
          (o = io.fader),
          (a = o.rate),
          (s = zt(e)),
          s === Wt || e === PS.CURRENT)
        )
          i = a;
        else if (e === PS.DEFAULT) i = Zn.fader.rate;
        else if (s === Bt) (i = Math.floor(e)), 0 > i && (i = 0);
        else return L(t + "rate argument invalid");
        return ((d = Fe(t, n)), d === PS.ERROR)
          ? PS.ERROR
          : ((l = d.rgb),
            l !== PS.CURRENT &&
              ((o.rgb = l === PS.DEFAULT ? Zn.fader.rgb : l),
              (o.r = d.r),
              (o.g = d.g),
              (o.b = d.b)),
            (l = d.onStep),
            l !== PS.CURRENT &&
              (l === PS.DEFAULT
                ? (o.onStep = Zn.fader.onStep)
                : (o.onStep = l)),
            (l = d.onEnd),
            l !== PS.CURRENT &&
              (l === PS.DEFAULT ? (o.onEnd = Zn.fader.onEnd) : (o.onEnd = l)),
            (l = d.params),
            l !== PS.CURRENT &&
              (l === PS.DEFAULT
                ? (o.params = Zn.fader.params)
                : (o.params = l)),
            a !== i &&
              ((o.rate = i),
              1 > i
                ? ((o.active = !1), (o.kill = !0))
                : o.active && P(o, r.r, r.g, r.b, 255)),
            {
              rate: o.rate,
              rgb: o.rgb,
              onStep: o.onStep,
              onEnd: o.onEnd,
              params: o.params,
            });
      },
      gridShadow: function (e, n, t, o) {
        var r, a, i;
        if (((r = "[PS.gridShadow] "), 4 < arguments.length))
          return L(r + "Too many arguments");
        if (((a = e), !0 !== a && !1 !== a && a !== PS.CURRENT))
          if (null === a || a === PS.DEFAULT) a = !1;
          else if (zt(a) === Bt) a = 0 !== a;
          else return L(r + "First argument invalid");
        return (i = B(r, n, t, o)), i === PS.ERROR ? PS.ERROR : Ue(a, i);
      },
      gridRefresh: function () {
        var e;
        return ((e = "[PS.gridRefresh] "), 0 < arguments.length)
          ? L(e + "Too many arguments")
          : (R(), st);
      },
      color: function (e, n, t, o, r) {
        var a, i, d;
        return ((a = "[PS.color] "), (i = arguments.length), 2 > i)
          ? L(a + "Missing argument(s)")
          : 5 < i
          ? L(a + "Too many arguments")
          : ((d = B(a, t, o, r)),
            d === PS.ERROR ? PS.ERROR : we(a, Ne, e, n, d));
      },
      alpha: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.alpha] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (i === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
          else if (a === PS.DEFAULT) a = Zn.bead.color.a;
          else return L(o + "alpha argument invalid");
        return we(o, De, e, n, a);
      },
      fade: function (e, n, t, o) {
        var r, a, i, d, s;
        if (((r = "[PS.fade] "), (a = arguments.length), 2 > a))
          return L(r + "Missing argument(s)");
        if (4 < a) return L(r + "Too many arguments");
        if (((i = t), i !== PS.CURRENT && i !== PS.DEFAULT))
          if (((d = zt(i)), d === Wt)) i = PS.CURRENT;
          else if (d === Bt) (i = Math.floor(i)), 0 > i && (i = 0);
          else return L(r + "rate argument invalid");
        return (
          (s = Fe(r, o)), s === PS.ERROR ? PS.ERROR : we(r, Pe, e, n, i, s)
        );
      },
      scale: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.scale] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (a === PS.DEFAULT) a = 100;
          else if (i === Bt)
            (a = Math.floor(a)), 50 > a ? (a = 50) : 100 < a && (a = 100);
          else return L(o + "scale parameter invalid");
        return we(o, Oe, e, n, a);
      },
      radius: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.radius] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (a === PS.DEFAULT) a = 0;
          else if (i === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 50 < a && (a = 50);
          else return L(o + "radius parameter invalid");
        return we(o, ke, e, n, a);
      },
      bgColor: function (e, n, t, o, r) {
        var a, i, d;
        return ((a = "[PS.bgColor] "), (i = arguments.length), 2 > i)
          ? L(a + "Missing argument(s)")
          : 5 < i
          ? L(a + "Too many arguments")
          : ((d = B(a, t, o, r)),
            d === PS.ERROR ? PS.ERROR : we(a, Ie, e, n, d));
      },
      bgAlpha: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.bgAlpha] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (i === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
          else if (a === PS.DEFAULT) a = Zn.bead.bgColor.a;
          else return L(o + "alpha argument invalid");
        return we(o, Be, e, n, a);
      },
      data: function (e, n, t) {
        var o, r, a;
        return ((o = "[PS.data] "), (r = arguments.length), 2 > r)
          ? L(o + "Missing argument(s)")
          : 3 < r
          ? L(o + "Too many arguments")
          : ((a = t),
            void 0 === a ? (a = PS.CURRENT) : a === PS.DEFAULT && (a = null),
            we(o, Me, e, n, a));
      },
      exec: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.exec] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (a === PS.DEFAULT) a = Zn.bead.exec;
          else if (i !== Kt) return L(o + "exec argument invalid");
        return we(o, Ye, e, n, a);
      },
      visible: function (n, t, o) {
        var r, a, i;
        return ((r = "[PS.visible] "), (a = arguments.length), 2 > a)
          ? L(r + "Missing argument(s)")
          : 3 < a
          ? L(r + "Too many arguments")
          : ((i = e(o, PS.CURRENT, !0, PS.CURRENT)),
            i === PS.ERROR
              ? L(r + "show argument invalid")
              : we(r, Ke, n, t, i));
      },
      active: function (n, t, o) {
        var r, a, i;
        return ((r = "[PS.active] "), (a = arguments.length), 2 > a)
          ? L(r + "Missing argument(s)")
          : 3 < a
          ? L(r + "Too many arguments")
          : ((i = e(o, PS.CURRENT, !0, PS.CURRENT)),
            i === PS.ERROR
              ? L(r + "active argument invalid")
              : we(r, We, n, t, i));
      },
      minimum: function (e, n, t) {
        var o, r, a;
        if (((o = "[PS.minimum] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (void 0 === a) a = PS.CURRENT;
          else if (a === PS.DEFAULT) a = Zn.bead.minimum;
          else if (zt(a) === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : a > Yn && (a = Yn);
          else return L(o + "minimum argument invalid");
        return we(o, Ge, e, n, a);
      },
      border: function (e, n, t) {
        var o, r, a, i, d, s;
        if (((o = "[PS.border] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = Zn.bead.border), (i = t), i !== PS.CURRENT))
          if (((d = zt(i)), d === Wt)) i = PS.CURRENT;
          else if (i === PS.DEFAULT) i = a.width;
          else if (d === Bt) (i = Math.floor(i)), 0 > i && (i = 0);
          else if (d === Yt) {
            if (((s = i.top), s !== PS.CURRENT))
              if (((d = zt(s)), d === Wt)) i.top = PS.CURRENT;
              else if (d === Bt)
                (s = Math.floor(s)), 0 > s && (s = 0), (i.top = s);
              else if (s === PS.DEFAULT) i.top = a.top;
              else return L(o + ".top property invalid");
            if (((s = i.left), s !== PS.CURRENT))
              if (((d = zt(s)), d === Wt)) i.left = PS.CURRENT;
              else if (d === Bt)
                (s = Math.floor(s)), 0 > s && (s = 0), (i.left = s);
              else if (s === PS.DEFAULT) i.left = a.left;
              else return L(o + ".left property invalid");
            if (((s = i.bottom), s !== PS.CURRENT))
              if (((d = zt(s)), d === Wt)) i.bottom = PS.CURRENT;
              else if (d === Bt)
                (s = Math.floor(s)), 0 > s && (s = 0), (i.bottom = s);
              else if (s === PS.DEFAULT) i.bottom = a.bottom;
              else return L(o + ".bottom property invalid");
            if (((s = i.right), s !== PS.CURRENT))
              if (((d = zt(s)), d === Wt)) i.right = PS.CURRENT;
              else if (d === Bt)
                (s = Math.floor(s)), 0 > s && (s = 0), (i.right = s);
              else if (s === PS.DEFAULT) i.right = a.right;
              else return L(o + ".right property invalid");
          } else return L(o + "width argument invalid");
        return we(o, ze, e, n, i);
      },
      borderColor: function (e, n, t, o, r) {
        var a, i;
        return ((a = "[PS.borderColor] "), 2 > arguments.length)
          ? L(a + "Missing argument(s)")
          : 5 < arguments.length
          ? L(a + "Too many arguments")
          : ((i = B(a, t, o, r)),
            i === PS.ERROR ? PS.ERROR : we(a, He, e, n, i));
      },
      borderAlpha: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.borderAlpha] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (i === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
          else if (a === PS.DEFAULT) a = Zn.bead.border.color.a;
          else return L(o + "alpha argument invalid");
        return we(o, qe, e, n, a);
      },
      borderFade: function (e, n, t, o) {
        var r, a, i, d, s;
        if (((r = "[PS.borderFade] "), (a = arguments.length), 2 > a))
          return L(r + "Missing argument(s)");
        if (4 < a) return L(r + "Too many arguments");
        if (((i = t), i !== PS.CURRENT && i !== PS.DEFAULT))
          if (((d = zt(i)), d === Wt)) i = PS.CURRENT;
          else if (d === Bt) (i = Math.floor(i)), 0 > i && (i = 0);
          else return L(r + "rate argument not a number");
        return (
          (s = Fe(r, o)), s === PS.ERROR ? PS.ERROR : we(r, je, e, n, i, s)
        );
      },
      glyph: function (e, n, t) {
        var o, r, a, i, d;
        if (((o = "[PS.glyph] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), void 0 === a)) a = PS.CURRENT;
        else if (a === PS.DEFAULT) a = "";
        else if (a !== PS.CURRENT)
          if (((i = zt(a)), i !== Bt)) {
            if (i !== Mt) return L(o + "glyph argument invalid");
            0 < a.length &&
              ((d = a.charCodeAt(0)),
              d === 92
                ? ((a = decodeURI(a)),
                  0 < a.length &&
                    ((d = a.charCodeAt(0)), (a = String.fromCodePoint(d))))
                : (a = String.fromCodePoint(d)));
          } else if (((a = Math.floor(a)), 1 > a)) a = "";
          else {
            if (a > 1114111)
              return L(o + "glyph argument exceeds Unicode limit");
            a = String.fromCodePoint(a);
          }
        return we(o, Ve, e, n, a);
      },
      glyphColor: function (e, n, t, o, r) {
        var a, i;
        return ((a = "[PS.glyphColor] "), 2 > arguments.length)
          ? L(a + "Missing argument(s)")
          : 5 < arguments.length
          ? L(a + "Too many arguments")
          : ((i = B(a, t, o, r)),
            i === PS.ERROR ? PS.ERROR : we(a, Je, e, n, i));
      },
      glyphAlpha: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.glyphAlpha] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (i === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
          else if (a === PS.DEFAULT) a = Zn.bead.glyph.color.a;
          else return L(o + "alpha argument invalid");
        return we(o, Xe, e, n, a);
      },
      glyphScale: function (e, n, t) {
        var o, r, a, i;
        if (((o = "[PS.glyphScale] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many arguments");
        if (((a = t), a !== PS.CURRENT))
          if (((i = zt(a)), i === Wt)) a = PS.CURRENT;
          else if (i === Bt)
            (a = Math.floor(a)), 50 > a ? (a = 50) : 100 < a && (a = 100);
          else if (a === PS.DEFAULT) a = Zn.bead.glyph.scale;
          else return L(o + "scale argument invalid");
        return we(o, Qe, e, n, a);
      },
      glyphFade: function (e, n, t, o) {
        var r, a, i, d, s;
        if (((r = "[PS.glyphFade] "), (a = arguments.length), 2 > a))
          return L(r + "Missing argument(s)");
        if (4 < a) return L(r + "Too many arguments");
        if (((i = t), i !== PS.CURRENT && i !== PS.DEFAULT))
          if (((d = zt(i)), d === Wt)) i = PS.CURRENT;
          else if (d === Bt) (i = Math.floor(i)), 0 > i && (i = 0);
          else return L(r + "rate argument not a number");
        return (
          (s = Fe(r, o)), s === PS.ERROR ? PS.ERROR : we(r, Ze, e, n, i, s)
        );
      },
      statusText: function (e) {
        var n, t, o;
        return ((n = "[PS.statusText] "), 1 < arguments.length)
          ? L(n + "Too many arguments")
          : ((t = e),
            (o = zt(t)),
            t !== PS.CURRENT &&
              o !== Wt &&
              (t === PS.DEFAULT && (t = Zn.status.text), yn(t)),
            lo.text);
      },
      statusInput: function (e, n) {
        var t, o, r;
        return ((t = "[PS.statusInput] "), 2 !== arguments.length)
          ? L(t + "Expected 2 arguments")
          : n && typeof n === Kt
          ? ((o = e.toString()),
            (r = e.length),
            r > Vn && (o = o.substring(0, Vn)),
            xn(o, n),
            lo.label)
          : L(t + "function argument invalid");
      },
      statusColor: function (e, n, t) {
        var o, a, i, d, s, l, u, m, p;
        return ((o = "[PS.statusColor] "), 3 < arguments.length)
          ? L(o + "Too many arguments")
          : ((a = B(o, e, n, t)), a === PS.ERROR)
          ? PS.ERROR
          : ((i = lo.color),
            (d = Zn.status.color),
            (s = lo.fader),
            (l = a.rgb),
            l !== PS.CURRENT &&
              (null === l
                ? ((u = a.r),
                  u === PS.CURRENT
                    ? (a.r = u = i.r)
                    : u === PS.DEFAULT && (a.r = u = d.r),
                  (m = a.g),
                  m === PS.CURRENT
                    ? (a.g = m = i.g)
                    : m === PS.DEFAULT && (a.g = m = d.g),
                  (p = a.b),
                  p === PS.CURRENT
                    ? (a.b = p = i.b)
                    : p === PS.DEFAULT && (a.b = p = d.b),
                  (a.rgb = u * Wn + m * Gn + p))
                : l === PS.DEFAULT &&
                  (a = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255,
                    rgb: 0,
                    str: "rgba(0,0,0,1)",
                  }),
              (i.rgb !== a.rgb ||
                (0 < s.rate && null !== s.rgb && s.rgb !== a.rgb)) &&
                ((i.rgb = a.rgb),
                (u = a.r),
                (m = a.g),
                (p = a.b),
                (i.str = a.str = Zt[u] + $t[m] + eo[p]),
                0 < s.rate
                  ? (null !== s.rgb && F(s, s.r, s.g, s.b, 255, u, m, p, 255),
                    s.active
                      ? P(s, u, m, p, 255)
                      : F(s, i.r, i.g, i.b, 255, u, m, p, 255))
                  : Oo(i),
                (i.r = u),
                (i.g = m),
                (i.b = p))),
            i.rgb);
      },
      statusFade: function (e, n) {
        var t, o, r, a, i, d, s, l;
        if (((t = "[PS.statusFade] "), 2 < arguments.length))
          return L(t + "Too many arguments");
        if (
          ((r = lo.color),
          (o = lo.fader),
          (a = o.rate),
          (d = zt(e)),
          d === Wt || e === PS.CURRENT)
        )
          i = a;
        else if (e === PS.DEFAULT) i = Zn.fader.rate;
        else if (d === Bt) (i = Math.floor(e)), 0 > i && (i = 0);
        else return L(t + "rate argument invalid");
        return ((l = Fe(t, n)), l === PS.ERROR)
          ? PS.ERROR
          : ((s = l.rgb),
            s !== PS.CURRENT &&
              ((o.rgb = s === PS.DEFAULT ? Zn.fader.rgb : s),
              (o.r = l.r),
              (o.g = l.g),
              (o.b = l.b)),
            (s = l.onStep),
            s !== PS.CURRENT &&
              (s === PS.DEFAULT
                ? (o.onStep = Zn.fader.onStep)
                : (o.onStep = s)),
            (s = l.onEnd),
            s !== PS.CURRENT &&
              (s === PS.DEFAULT ? (o.onEnd = Zn.fader.onEnd) : (o.onEnd = s)),
            (s = l.params),
            s !== PS.CURRENT &&
              (s === PS.DEFAULT
                ? (o.params = Zn.fader.params)
                : (o.params = s)),
            a !== i &&
              ((o.rate = i),
              1 > i
                ? ((o.active = !1), (o.kill = !0))
                : o.active && P(o, r.r, r.g, r.b, 255)),
            {
              rate: o.rate,
              rgb: o.rgb,
              onStep: o.onStep,
              onEnd: o.onEnd,
              params: o.params,
            });
      },
      _footerFade: function (e) {
        U(e);
      },
      timerStart: function (e, n) {
        var t, o, r, a, d, s, l, u, g, m;
        if (((t = "[PS.timerStart] "), (o = arguments.length), 2 > o))
          return L(t + "Argument(s) missing");
        if (((r = e), (a = n), r === PS.DEFAULT)) r = 60;
        else {
          if (((d = zt(r)), d !== Bt)) return L(t + "ticks argument invalid");
          if (((r = Math.floor(r)), 1 > r))
            return L(t + "ticks argument less than one (1)");
        }
        if (typeof a !== Kt) return L(t + "exec argument not a function");
        if (((l = []), 2 < o))
          for (g = o - 2, l.length = g, u = 0; u < g; u += 1)
            l[u] = arguments[u + 2];
        return (
          (m = "timer_" + mt),
          (mt += 1),
          (s = { id: m, delay: r, count: r, exec: a, arglist: l }),
          po.push(s),
          m
        );
      },
      timerStop: function (e) {
        var n, t, o, r, a;
        if (((n = "[PS.timerStop] "), (t = arguments.length), 1 > t))
          return L(n + "Argument missing");
        if (!e || typeof e !== Mt || 1 > e.length)
          return L(n + "id argument invalid");
        for (r = po.length, o = 0; o < r; o += 1)
          if (((a = po[o]), a.id === e)) return po.splice(o, 1), e;
        return L(n + "timer id '" + e + "' not found");
      },
      random: function (e) {
        var n;
        return (
          (n = "[PS.random] "),
          1 > arguments.length
            ? L(n + "Argument missing")
            : zt(e) === Bt
            ? Jt(e, 0)
            : L(n + "Argument not a number")
        );
      },
      seed: function (e) {
        var n, t;
        return ((n = "[PS.seed] "), 1 > arguments.length)
          ? L(n + "Argument missing")
          : zt(e) === Bt
          ? ((t = Math.floor(e)), 1 > t && (t = 1), (jt = t), jt)
          : L(n + "Argument not a number");
      },
      makeRGB: function (e, n, t) {
        var o, a, i, d, s;
        return ((o = "[PS.makeRGB] "), (a = arguments.length), 3 > a)
          ? L(o + "Argument(s) missing")
          : 3 < a
          ? L(o + "Too many arguments")
          : ((i = e), (d = n), (s = t), zt(i) !== Bt)
          ? L(o + "r argument not a number")
          : ((i = Math.floor(i)),
            0 > i ? (i = 0) : 255 < i && (i = 255),
            zt(d) !== Bt)
          ? L(o + "g argument not a number")
          : ((d = Math.floor(d)),
            0 > d ? (d = 0) : 255 < d && (d = 255),
            zt(s) !== Bt)
          ? L(o + "b argument not a number")
          : ((s = Math.floor(s)),
            0 > s ? (s = 0) : 255 < s && (s = 255),
            i * Wn + d * Gn + s);
      },
      unmakeRGB: function (e, n) {
        var t, o, r, a, i, d, s, l, u, g;
        if (((t = "[PS.unmakeRGB] "), (o = arguments.length), 2 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many arguments");
        if (((r = e), (a = n), zt(r) !== Bt))
          return L(t + "rgb argument not a number");
        if (
          ((r = Math.floor(r)),
          1 > r
            ? ((r = 0), (i = 0), (d = 0), (s = 0))
            : 16777215 <= r
            ? ((r = 16777215), (i = 255), (d = 255), (s = 255))
            : ((i = r / Wn),
              (i = Math.floor(i)),
              (l = i * Wn),
              (d = (r - l) / Gn),
              (d = Math.floor(d)),
              (u = d * Gn),
              (s = r - l - u)),
          (g = zt(a)),
          g === Yt)
        )
          (a.rgb = r), (a.r = i), (a.g = d), (a.b = s);
        else if (g === Gt)
          3 > a.length && (a.length = 3), (a[0] = i), (a[1] = d), (a[2] = s);
        else return L(t + "result argument not an array or object reference");
        return a;
      },
      applyRect: function (e, n, t, o, r) {
        var a, d, s, l, u, g, m, p, c, f, b, _, h, R, E, T, v;
        if (((a = "[PS.applyRect] "), (d = arguments.length), 5 > d))
          return L(a + "Argument(s) missing");
        if (
          ((s = io.x),
          (l = io.y),
          (u = e),
          (g = n),
          (m = t),
          (p = o),
          (c = r),
          u === PS.DEFAULT)
        )
          u = 0;
        else if (zt(u) === Bt) {
          if (((u = Math.floor(u)), u >= s)) return PS.DONE;
          0 > u && (u = 0);
        } else return L(a + "left argument invalid");
        if (g === PS.DEFAULT) g = 0;
        else if (zt(g) === Bt) {
          if (((g = Math.floor(g)), g >= l)) return PS.DONE;
          0 > g && (g = 0);
        } else return L(a + "top argument invalid");
        if (m === PS.DEFAULT) m = s - u;
        else if (zt(m) === Bt) {
          if (((m = Math.floor(m)), 1 > m)) return PS.DONE;
          u + m > s && (m = s - u);
        } else return L(a + "width argument invalid");
        if (((f = u + m), p === PS.DEFAULT)) p = l - g;
        else if (zt(p) === Bt) {
          if (((p = Math.floor(p)), 1 > p)) return PS.DONE;
          g + p > l && (p = l - g);
        } else return L(a + "height argument invalid");
        if (((b = g + p), !c || typeof c !== Kt))
          return L(a + "exec argument not a function");
        if (((E = [0, 0]), 5 < d))
          for (T = d - 5, v = 0; v < T; v += 1) E.push(arguments[v + 5]);
        for (h = g; h < b; h += 1)
          for (E[1] = h, _ = u; _ < f; _ += 1) {
            E[0] = _;
            try {
              R = c.apply(zn, E);
            } catch (e) {
              R = S(
                a + "exec failed @" + _ + ", " + h + " [" + e.message + "]",
                e
              );
            }
            if (R === PS.ERROR) return PS.ERROR;
          }
        return R;
      },
      hex: function (e, n) {
        var t, o, r, a;
        if (((t = "[PS.hex] "), (o = e), (r = zt(o)), r !== Bt))
          return L(t + "value argument invalid");
        if (
          ((o = Math.floor(o)),
          (o = Math.abs(o)),
          (a = n),
          (r = zt(a)),
          r === Wt || a === PS.DEFAULT)
        )
          a = 2;
        else if (r === Bt) (a = Math.floor(a)), 1 > a && (a = 1);
        else return L(t + "padding argument invalid");
        return Ht(o, a, 16);
      },
      keyRepeat: function (n, t, o) {
        var r, a, i, d, s;
        if (((r = "[PS.keyRepeat] "), (i = e(n, Ut, !0, !0)), i === PS.ERROR))
          return L(r + "repeat argument invalid");
        if (((s = t), (a = zt(s)), a === Wt || s === PS.DEFAULT)) s = 5 * Hn;
        else if (s === PS.CURRENT) s = To;
        else if (a === Bt) (s = Math.floor(s)), 1 > s && (s = 1);
        else return L(r + "init argument invalid");
        if (((d = o), (a = zt(d)), a === Wt || d === PS.DEFAULT)) d = Hn;
        else if (d === PS.CURRENT) d = Eo;
        else if (a === Bt) (d = Math.floor(d)), 1 > d && (d = 1);
        else return L(r + "delay argument invalid");
        return (
          (Ut = i), (To = s), (Eo = d), { repeat: Ut, init: To, delay: Eo }
        );
      },
      date: function () {
        return Qo(!1);
      },
      elapsed: function () {
        var e, n;
        return (e = new Date()), (n = e.getTime()), n - $n.date.time;
      },
      imageLoad: function (e, n, t) {
        var o, r, a, i, d, s, l, u, g;
        if (((o = "[PS.imageLoad] "), (r = arguments.length), 2 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many argument(s)");
        if (((a = e), (i = n), (d = t), typeof a !== Mt || 1 > a.length))
          return L(o + "filename argument invalid");
        if (
          ((s = a.substr(a.lastIndexOf(".") + 1)),
          (s = s.toLowerCase()),
          "png" !== s && "jpg" !== s && "jpeg" !== s && "bmp" !== s)
        )
          return L(o + "filename extension invalid");
        if (typeof i !== Kt) return L(o + "exec argument invalid");
        if (((g = zt(d)), g === Wt || d === PS.DEFAULT)) d = 4;
        else {
          if (g !== Bt) return L(o + "format argument invalid");
          if (((d = Math.floor(d)), 1 > d && 4 < d))
            return L(o + "format argument is not 1, 2, 3 or 4");
        }
        (u = Mn + ut),
          (ut += 1),
          go.push({ source: a, id: u, exec: i, format: d });
        try {
          (l = new Image()),
            l.setAttribute("data-id", u),
            (l.onload = function () {
              nn(l);
            }),
            (l.onerror = function () {
              $e(l);
            }),
            (l.crossOrigin = 'anonymous',
             l.src = a);
        } catch (e) {
          return S(o + "Error loading " + a + " [" + e.message + "]", e);
        }
        return u;
      },
      imageBlit: function (e, n, t, o) {
        var d,
          s,
          l,
          u,
          m,
          p,
          c,
          f,
          _,
          E,
          T,
          v,
          A,
          U,
          S,
          C,
          N,
          D,
          F,
          P,
          k,
          I,
          B,
          M,
          Y,
          K,
          G,
          z,
          H,
          q,
          j,
          V,
          J,
          X,
          Q,
          Z,
          $;
        if (((d = "[PS.imageBlit] "), (s = arguments.length), 3 > s))
          return L(d + "Missing argument(s)");
        if (4 < s) return L(d + "Too many arguments");
        if (
          ((l = io.x),
          (u = io.y),
          (m = e),
          (p = n),
          (c = t),
          (f = o),
          tn(d, m) === PS.ERROR)
        )
          return PS.ERROR;
        if (
          ((_ = m.width),
          (E = m.height),
          (T = m.pixelSize),
          (v = m.data),
          (A = zt(p)),
          A === Wt || p === PS.DEFAULT)
        )
          p = 0;
        else if (A === Bt) p = Math.floor(p);
        else return L(d + "xpos argument invalid");
        if (((A = zt(c)), A === Wt || c === PS.DEFAULT)) c = 0;
        else if (A === Bt) c = Math.floor(c);
        else return L(d + "ypos argument invalid");
        if (p >= l || c >= u || 1 > p + _ || 1 > c + E) return !1;
        if (((A = zt(f)), A === Wt || f === PS.DEFAULT))
          (U = 0), (S = 0), (C = _), (N = E);
        else if (A === Yt) {
          if (((S = f.left), (A = zt(S)), A === Wt || S === PS.DEFAULT)) S = 0;
          else {
            if (A !== Bt) return L(d + "region.left invalid");
            if (((S = Math.floor(S)), 0 > S)) S = 0;
            else if (S >= _) return L(d + "region.left outside image");
          }
          if (((U = f.top), (A = zt(U)), A === Wt || U === PS.DEFAULT)) U = 0;
          else {
            if (A !== Bt) return L(d + "region.top invalid");
            if (((U = Math.floor(U)), 0 > U)) U = 0;
            else if (U >= E) return L(d + "region.top outside image");
          }
          if (((C = f.width), (A = zt(C)), A === Wt || C === PS.DEFAULT))
            C = _ - S;
          else {
            if (A !== Bt) return L(d + "region.width invalid");
            if (((C = Math.floor(C)), 1 > C)) return !1;
            S + C > _ && (C = _ - S);
          }
          if (1 > p + C) return !1;
          if (((N = f.height), (A = zt(N)), A === Wt || N === PS.DEFAULT))
            N = E - U;
          else {
            if (A !== Bt) return L(d + "region.height invalid");
            if (((N = Math.floor(N)), 1 > N)) return !1;
            U + N > E && (N = E - U);
          }
          if (1 > c + N) return !1;
        } else return L(d + "region argument invalid");
        if (0 > p) {
          if (((C += p), 1 > C)) return !1;
          (S -= p), (p = 0);
        }
        if (((F = p + C), F > l && (C = l - p), 1 > C)) return !1;
        if (0 > c) {
          if (((N += c), 1 > N)) return !1;
          (U -= c), (c = 0);
        }
        if (((F = c + N), F > u && (N = u - c), 1 > N)) return !1;
        for (
          P = _ * T,
            $ = !1,
            q = 255,
            D = io.plane,
            k = U * P + S * T,
            M = c,
            Y = 0;
          Y < N;
          Y += 1
        ) {
          for (I = k, B = p, K = 0; K < C; K += 1)
            (X = B + M * l),
              (Q = so[X]),
              Q.active &&
                (($ = !0),
                3 > T
                  ? ((j = v[I]),
                    (G = j / Wn),
                    (G = Math.floor(G)),
                    (V = G * Wn),
                    (z = (j - V) / Gn),
                    (z = Math.floor(z)),
                    (J = z * Gn),
                    (H = j - V - J),
                    2 === T && (q = v[I + 1]))
                  : ((G = v[I]),
                    (z = v[I + 1]),
                    (H = v[I + 2]),
                    (j = G * Wn + z * Gn + H),
                    4 === T && (q = v[I + 3])),
                (Z = W(Q, D)),
                (Z.r = G),
                (Z.g = z),
                (Z.b = H),
                (Z.a = q),
                (Z.rgb = j),
                O(Q)),
              (B += 1),
              (I += T);
          (M += 1), (k += P);
        }
        return $ && R(), !0;
      },
      imageCapture: function (e, n) {
        var t, o, r, a, d, s, l, u, g, m, p, c, f, b, _, R, E, T, v, A, U, S, C;
        if (((t = "[PS.imageCapture] "), (o = arguments.length), 2 < o))
          return L(t + "Too many arguments");
        if (((r = e), (a = n), (d = zt(r)), d === Wt || r === PS.DEFAULT))
          r = 3;
        else {
          if (d !== Bt) return L(t + "format argument invalid");
          if (((r = Math.floor(r)), 1 > r && 4 < r))
            return L(t + "format argument is not 1, 2, 3 or 4");
        }
        if (((s = io.x), (l = io.y), (d = zt(a)), d === Wt || a === PS.DEFAULT))
          (g = 0), (m = 0), (p = s), (c = l);
        else if (d === Yt) {
          if (((m = a.left), (d = zt(m)), d === Wt || m === PS.DEFAULT)) m = 0;
          else {
            if (d !== Bt) return L(t + "region.left not a number");
            if (((m = Math.floor(m)), 0 > m)) m = 0;
            else if (m >= s) return L(t + "region.left outside grid");
          }
          if (((g = a.top), (d = zt(g)), d === Wt || g === PS.DEFAULT)) g = 0;
          else {
            if (d !== Bt) return L(t + "region.top not a number");
            if (((g = Math.floor(g)), 0 > g)) g = 0;
            else if (g >= l) return L(t + "region.top outside grid");
          }
          if (((p = a.width), (d = zt(p)), d === Wt || p === PS.DEFAULT))
            p = s - m;
          else {
            if (d !== Bt) return L(t + "region.width not a number");
            (p = Math.floor(p)), (1 > p || m + p > s) && (p = s - m);
          }
          if (((c = a.height), (d = zt(c)), d === Wt || c === PS.DEFAULT))
            c = l - g;
          else {
            if (d !== Bt) return L(t + "region.height not a number");
            (c = Math.floor(c)), (1 > c || g + c > l) && (c = l - g);
          }
        } else return L(t + "region argument invalid");
        if (
          ((E = Mn + ut),
          (ut += 1),
          (b = {
            source: PS.GRID,
            id: E,
            width: p,
            height: c,
            pixelSize: r,
            valid: !0,
            data: [],
          }),
          (f = p * c),
          1 > f)
        )
          return b;
        for (
          u = b.data, u.length = f * r, _ = m + p, R = g + c, T = 0, A = g;
          A < R;
          A += 1
        )
          for (v = m; v < _; v += 1)
            (U = v + A * s),
              (S = so[U]),
              (C = S.color),
              3 > r
                ? ((u[T] = C.rgb), 2 === r && (u[T + 1] = C.a))
                : ((u[T] = C.r),
                  (u[T + 1] = C.g),
                  (u[T + 2] = C.b),
                  4 === r && (u[T + 3] = C.a)),
              (T += r);
        return b;
      },
      imageDump: function (n, t, o, i, d) {
        var s,
          l,
          u,
          m,
          p,
          c,
          f,
          _,
          R,
          E,
          T,
          v,
          A,
          U,
          S,
          C,
          N,
          D,
          F,
          P,
          O,
          k,
          I,
          B,
          M,
          Y,
          K,
          W,
          G,
          z,
          H,
          q;
        if (((s = "[PS.imageDump] "), (l = arguments.length), 1 > l))
          return L(s + "Missing argument(s)");
        if (5 < l) return L(s + "Too many arguments");
        if (((u = n), (m = t), (p = o), (c = i), tn(s, u) === PS.ERROR))
          return PS.ERROR;
        if (
          ((_ = u.width),
          (R = u.height),
          (E = u.pixelSize),
          (T = u.data),
          (v = zt(m)),
          v === Wt || m === PS.DEFAULT)
        )
          (A = 0), (U = 0), (S = _), (C = R);
        else if (v === Yt) {
          if (((U = m.left), (v = zt(U)), v === Wt || U === PS.DEFAULT)) U = 0;
          else {
            if (v !== Bt) return L(s + "region.left invalid");
            if (((U = Math.floor(U)), 0 > U)) U = 0;
            else if (U >= _) return L(s + "region.left outside grid");
          }
          if (((A = m.top), (v = zt(A)), v === Wt || A === PS.DEFAULT)) A = 0;
          else {
            if (v !== Bt) return L(s + "region.top invalid");
            if (((A = Math.floor(A)), 0 > A)) A = 0;
            else if (A >= R) return L(s + "region.top outside grid");
          }
          if (((S = m.width), (v = zt(S)), v === Wt || S === PS.DEFAULT))
            S = _ - U;
          else {
            if (v !== Bt) return L(s + "region.width invalid");
            (S = Math.floor(S)), (1 > S || U + S > _) && (S = _ - U);
          }
          if (((C = m.height), (v = zt(C)), v === Wt || C === PS.DEFAULT))
            C = R - A;
          else {
            if (v !== Bt) return L(s + "region.height invalid");
            (C = Math.floor(C)), (1 > C || A + C > R) && (C = R - A);
          }
        } else return L(s + "region argument invalid");
        if (((N = S * C), (v = zt(p)), v === Wt || p === PS.DEFAULT)) p = E;
        else {
          if (v !== Bt) return L(s + "format argument invalid");
          if (((p = Math.floor(p)), 1 > p || 4 < p))
            return L(s + "format argument is not 1, 2, 3 or 4");
        }
        if (((v = zt(c)), v === Wt || c === PS.DEFAULT)) c = S;
        else {
          if (v !== Bt) return L(s + "length argument invalid");
          (c = Math.floor(c)), 1 > c && (c = 1), c > N && (c = N);
        }
        if (((f = e(d, PS.ERROR, !0, !0)), f === PS.ERROR))
          return L(s + "hex argument invalid");
        if (
          ((D =
            "\nvar myImage = {\n\twidth : " +
            S +
            ", height : " +
            C +
            ", pixelSize : " +
            p +
            ",\n\tdata : ["),
          1 > N)
        )
          return (D += "]\n};\n"), PS.debug(D), PS.DONE;
        for (
          D += "\n\t", k = 255, O = P = 0, F = _ * E, I = A * F + U * E, M = 0;
          M < C;
          M += 1
        ) {
          for (B = I, Y = 0; Y < S; Y += 1)
            3 > E
              ? ((z = T[B]),
                1 > z
                  ? (K = W = G = 0)
                  : 16777215 <= z
                  ? (K = W = G = 255)
                  : ((K = z / Wn),
                    (K = Math.floor(K)),
                    (H = K * Wn),
                    (W = (z - H) / Gn),
                    (W = Math.floor(W)),
                    (q = W * Gn),
                    (G = z - H - q)),
                2 === E && (k = T[B + 1]))
              : ((K = T[B]),
                (W = T[B + 1]),
                (G = T[B + 2]),
                (z = K * Wn + W * Gn + G),
                4 === E && (k = T[B + 3])),
              (D += on(p, f, z, K, W, G, k)),
              (O += 1),
              O < N &&
                ((D += ","),
                (P += 1),
                P < c ? (D += " ") : ((P = 0), (D += "\n\t"))),
              (B += E);
          I += F;
        }
        return (D += "\n\t]\n};\n"), PS.debug(D), PS.DONE;
      },
      spriteSolid: function (e, n) {
        var t, o, r, a, i;
        if (((t = "[PS.spriteSolid] "), (o = arguments.length), 2 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many argument(s)");
        if (((r = e), (a = n), r === PS.DEFAULT)) r = 1;
        else if (zt(r) === Bt) (r = Math.floor(r)), 1 > r && (r = 1);
        else return L(t + "width argument invalid");
        if (a === PS.DEFAULT) a = 1;
        else if (zt(a) === Bt) (a = Math.floor(a)), 1 > a && (a = 1);
        else return L(t + "height argument invalid");
        return (
          (i = rn()),
          (i.width = r),
          (i.height = a),
          (i.color = { rgb: 0, r: 0, g: 0, b: 0, a: 255 }),
          i.id
        );
      },
      spriteSolidColor: function (e, n, t, o) {
        var a, i, d, l, u, m, p, c, f;
        return ((a = "[PS.spriteSolidColor] "), (i = arguments.length), 1 > i)
          ? L(a + "Missing argument(s)")
          : 4 < i
          ? L(a + "Too many argument(s)")
          : ((d = an(e, a)), d === PS.ERROR)
          ? PS.ERROR
          : ((u = d.color), !u)
          ? L(a + "Cannot set color of image sprite " + d.id)
          : ((l = B(a, n, t, o)), l === PS.ERROR)
          ? PS.ERROR
          : ((m = l.rgb),
            m !== PS.CURRENT &&
              (null === m
                ? ((p = l.r),
                  p === PS.CURRENT
                    ? (l.r = p = u.r)
                    : p === PS.DEFAULT && (l.r = p = 0),
                  (c = l.g),
                  c === PS.CURRENT
                    ? (l.g = c = u.g)
                    : c === PS.DEFAULT && (l.g = c = 0),
                  (f = l.b),
                  f === PS.CURRENT
                    ? (l.b = f = u.b)
                    : f === PS.DEFAULT && (l.b = f = 0),
                  (l.rgb = m = p * Wn + c * Gn + f))
                : m === PS.DEFAULT &&
                  ((l.rgb = m = 0), (l.r = 0), (l.g = 0), (l.b = 0)),
              u.rgb !== m &&
                ((u.rgb = m),
                (u.r = l.r),
                (u.g = l.g),
                (u.b = l.b),
                d.visible && d.placed && (sn(d), R()))),
            u.rgb);
      },
      spriteSolidAlpha: function (e, n) {
        var t, o, r, a, i, d, l;
        if (((t = "[PS.spriteSolidAlpha] "), (o = arguments.length), 1 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many argument(s)");
        if (((r = e), (a = n), (i = an(r, t)), i === PS.ERROR)) return PS.ERROR;
        if (((d = i.color), !d))
          return L(t + "Cannot set alpha of image sprite " + i.id);
        if (((l = zt(a)), l !== Wt && a !== PS.CURRENT)) {
          if (a === PS.DEFAULT) a = 255;
          else if (l === Bt)
            (a = Math.floor(a)), 0 > a ? (a = 0) : 255 < a && (a = 255);
          else return L(t + "alpha argument invalid");
          d.a !== a && ((d.a = a), i.visible && i.placed && (sn(i), R()));
        }
        return d.a;
      },
      spriteImage: function (e, n) {
        var t,
          o,
          d,
          l,
          u,
          m,
          p,
          c,
          f,
          _,
          R,
          E,
          T,
          v,
          A,
          U,
          S,
          C,
          N,
          D,
          F,
          P,
          O,
          k,
          I,
          B;
        if (((t = "[PS.spriteImage] "), (o = arguments.length), 1 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many argument(s)");
        if (tn(t, e) === PS.ERROR) return PS.ERROR;
        if (
          ((f = c = 0),
          (_ = d = e.width),
          (R = l = e.height),
          (u = e.pixelSize),
          (m = e.data),
          (p = zt(n)),
          p !== Wt && n !== PS.DEFAULT)
        ) {
          if (p !== Yt) return L(t + "region argument invalid");
          if (((f = n.left), (p = zt(f)), p === Wt || f === PS.DEFAULT)) f = 0;
          else {
            if (p !== Bt) return L(t + "region.left invalid");
            if (((f = Math.floor(f)), 0 > f)) f = 0;
            else if (f >= d) return L(t + "region.left outside image");
          }
          if (((c = n.top), (p = zt(c)), p === Wt || c === PS.DEFAULT)) c = 0;
          else {
            if (p !== Bt) return L(t + "region.top invalid");
            if (((c = Math.floor(c)), 0 > c)) c = 0;
            else if (c >= l) return L(t + "region.top outside image");
          }
          if (((_ = n.width), (p = zt(_)), p === Wt || _ === PS.DEFAULT))
            _ = d - f;
          else {
            if (p !== Bt) return L(t + "region.width invalid");
            (_ = Math.floor(_)), (1 > _ || f + _ > d) && (_ = d - f);
          }
          if (((R = n.height), (p = zt(R)), p === Wt || R === PS.DEFAULT))
            R = l - c;
          else {
            if (p !== Bt) return L(t + "region.height invalid");
            (R = Math.floor(R)), (1 > R || c + R > l) && (R = l - c);
          }
        }
        for (
          E = [],
            E.length = 4 * (_ * R),
            O = 255,
            T = d * u,
            v = c * T + f * u,
            C = 0,
            S = 0;
          S < R;
          S += 1
        ) {
          for (A = v, U = 0; U < _; U += 1)
            3 > u
              ? ((N = m[A]),
                1 > N
                  ? (N = D = F = P = 0)
                  : 16777215 <= N
                  ? ((N = 16777215), (D = F = P = 255))
                  : ((D = N / Wn),
                    (D = Math.floor(D)),
                    (k = D * Wn),
                    (F = (N - k) / Gn),
                    (F = Math.floor(F)),
                    (I = F * Gn),
                    (P = N - k - I)),
                2 === u && (O = m[A + 1]))
              : ((D = m[A]),
                (F = m[A + 1]),
                (P = m[A + 2]),
                4 === u && (O = m[A + 3])),
              (E[C] = D),
              (E[C + 1] = F),
              (E[C + 2] = P),
              (E[C + 3] = O),
              (A += u),
              (C += 4);
          v += T;
        }
        return (
          (B = rn()),
          (B.width = _),
          (B.height = R),
          (B.image = {
            id: Mn + ut,
            width: _,
            height: R,
            pixelSize: 4,
            data: E,
          }),
          (ut += 1),
          B.id
        );
      },
      spriteShow: function (n, t) {
        var o, r, a, i, d;
        return ((o = "[PS.spriteShow] "), (r = arguments.length), 1 > r)
          ? L(o + "Missing argument(s)")
          : 2 < r
          ? L(o + "Too many argument(s)")
          : ((a = n), (d = an(a, o)), d === PS.ERROR)
          ? PS.ERROR
          : ((i = e(t, PS.CURRENT, !0, PS.CURRENT)), i === PS.ERROR)
          ? L(o + "show argument invalid")
          : (i !== PS.CURRENT &&
              d.visible !== i &&
              ((d.visible = i),
              d.placed && (i ? (sn(d), ln(d, a)) : dn(d), R())),
            d.visible);
      },
      spriteAxis: function (e, n, t) {
        var o, r, a, i, d, l, u;
        if (((o = "[PS.spriteAxis] "), (r = arguments.length), 1 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many argument(s)");
        if (((a = e), (i = n), (d = t), (l = an(a, o)), l === PS.ERROR))
          return PS.ERROR;
        if (((u = zt(i)), u === Wt || i === PS.CURRENT)) i = l.ax;
        else if (i === PS.DEFAULT) i = 0;
        else if (u === Bt) i = Math.floor(i);
        else return L(o + "x argument invalid");
        if (((u = zt(d)), u === Wt || d === PS.CURRENT)) d = l.ay;
        else if (d === PS.DEFAULT) d = 0;
        else if (u === Bt) d = Math.floor(d);
        else return L(o + "y argument invalid");
        return (
          (i !== l.ax || d !== l.ay) &&
            ((l.ax = i),
            (l.ay = d),
            l.visible && l.placed && (sn(l), ln(l, a), R())),
          { x: l.ax, y: l.ay }
        );
      },
      spritePlane: function (e, n) {
        var t, o, r, a, i, d;
        if (((t = "[PS.spritePlane] "), (o = arguments.length), 1 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many arguments");
        if (((r = e), (a = n), (i = an(r, t)), i === PS.ERROR)) return PS.ERROR;
        if (((d = zt(a)), d !== Wt && a !== PS.CURRENT)) {
          if (a === PS.DEFAULT) a = 0;
          else if (d === Bt) (a = Math.floor(a)), 1 > a && (a = 0);
          else return L(t + "plane argument invalid");
          i.plane !== a &&
            (i.visible && i.placed && dn(i),
            (i.plane = a),
            i.visible && i.placed && (sn(i), R()));
        }
        return 0 > i.plane ? 0 : i.plane;
      },
      spriteMove: function (e, n, t) {
        var o, r, a, i, d, l, u, g, m, p, c, f, b, _, h, E;
        if (((o = "[PS.spriteMove] "), (r = arguments.length), 1 > r))
          return L(o + "Missing argument(s)");
        if (3 < r) return L(o + "Too many argument(s)");
        if (((a = e), (i = n), (d = t), (l = an(a, o)), l === PS.ERROR))
          return PS.ERROR;
        if (((u = zt(i)), u === Wt || i === PS.CURRENT)) i = l.x;
        else if (i === PS.DEFAULT) i = 0;
        else if (u === Bt) i = Math.floor(i);
        else return L(o + "x argument invalid");
        if (((u = zt(d)), u === Wt || d === PS.CURRENT)) d = l.y;
        else if (d === PS.DEFAULT) d = 0;
        else if (u === Bt) d = Math.floor(d);
        else return L(o + "y argument invalid");
        return (
          (l.placed && i === l.x && d === l.y) ||
            ((E = !1),
            0 > l.plane && (l.plane = io.plane),
            l.visible &&
              l.placed &&
              ((m = l.y),
              (c = l.height),
              i > l.x
                ? ((p = i - l.x), (g = l.x))
                : l.x > i
                ? ((p = l.x - i), (g = l.x + l.width - p))
                : (p = 0),
              p >= l.width
                ? ((E = !0), dn(l))
                : ((f = l.x),
                  (_ = l.width),
                  d > l.y
                    ? ((h = d - l.y), (b = l.y))
                    : l.y > d
                    ? ((h = l.y - d), (b = l.y + l.height - h))
                    : (h = 0),
                  h >= l.height
                    ? ((E = !0), dn(l))
                    : 1 > h
                    ? ((E = !0), dn(l, g, m, p, c))
                    : 1 > _
                    ? ((E = !0), dn(l, f, b, _, h))
                    : ((E = !0),
                      (_ -= p),
                      i > l.x && (f += p),
                      dn(l, g, m, p, c),
                      dn(l, f, b, _, h)))),
            (l.x = i),
            (l.y = d),
            (l.placed = !0),
            l.visible && ((E = !0), sn(l), ln(l, a)),
            E && R()),
          { x: l.x, y: l.y }
        );
      },
      spriteCollide: function (e, n) {
        var t, o, r, a, i;
        if (((t = "[PS.spriteCollide] "), (o = arguments.length), 1 > o))
          return L(t + "Missing argument(s)");
        if (2 < o) return L(t + "Too many arguments");
        if (((r = an(e, t)), r === PS.ERROR)) return PS.ERROR;
        if (((a = n), (i = zt(a)), i !== Wt && a !== PS.CURRENT)) {
          if (a === PS.DEFAULT) a = null;
          else if (i !== Kt) return L(t + "exec argument not a function");
          r.collide !== a &&
            ((r.collide = a), a && r.visible && r.placed && ln(r, e));
        }
        return r.collide;
      },
      spriteDelete: function (e) {
        var n, t, o, r, a;
        if (((n = "[PS.spriteDelete] "), (t = arguments.length), 1 > t))
          return L(n + "Missing argument");
        if (1 < t) return L(n + "Too many arguments");
        if (typeof e !== Mt || 1 > e.length)
          return L(n + "sprite argument invalid");
        for (o = mo.length, r = 0; r < o; r += 1)
          if (((a = mo[r]), a.id === e))
            return dn(a), mo.splice(r, 1), R(), PS.DONE;
        return L(n + "sprite id '" + e + "' not found");
      },
      audioLoad: function (e, n) {
        var t, o, r, a, i;
        return ((t = "[PS.audioLoad] "), (o = arguments.length), 1 > o)
          ? L(t + "Missing argument(s) [expected 1 or 2]")
          : 2 < o
          ? L(t + "Too many arguments [" + o + " passed; expected 1 or 2]")
          : ((r = e),
            (a = Zo.verifyParams(t, r, n)),
            a === PS.DONE || a === PS.ERROR)
          ? a
          : ((i = Zo.load(t, r, a, a.autoplay)), i);
      },
      audioPlay: function (e, n) {
        var t, o, r, a, i;
        return ((t = "[PS.audioPlay] "), (o = arguments.length), 1 > o)
          ? L(t + "Missing argument(s) [expected 1 or 2]")
          : 2 < o
          ? L(t + "Too many arguments [" + o + " passed, expected 1 or 2]")
          : ((r = e),
            (a = Zo.verifyParams(t, e, n)),
            a === PS.DONE || a === PS.ERROR)
          ? a
          : ((i = Zo.load(t, r, a, !0)), i);
      },
      audioPlayChannel: function (e, n) {
        var t, o, r, a, i;
        return ((t = "[PS.audioPlayChannel] "), (o = arguments.length), 1 > o)
          ? L(t + "Missing argument(s) [expected 1 or 2]")
          : 2 < o
          ? L(t + "Too many arguments [" + o + " passed, expected 1 or 2]")
          : ((r = Zo.verifyChannel(t, e)), r === PS.DONE || r === PS.ERROR)
          ? r
          : ((a = Zo.verifyParams(t, r, n)), a === PS.DONE || a === PS.ERROR)
          ? a
          : ((i = Zo.playChannel(t, r, a)), i);
      },
      audioPause: function (e) {
        var n, t, o, r;
        return ((n = "[PS.audioPause] "), (t = arguments.length), 1 > t)
          ? L(n + "Missing argument(s) [expected 1]")
          : 1 < t
          ? L(n + "Too many arguments [" + t + " passed; expected 1]")
          : ((o = Zo.verifyChannel(n, e)), o === PS.DONE || o === PS.ERROR)
          ? o
          : ((r = Zo.pause(n, o)), r);
      },
      audioStop: function (e) {
        var n, t, o, r;
        return ((n = "[PS.audioStop] "), (t = arguments.length), 1 > t)
          ? L(n + "Missing argument(s) [expected 1]")
          : 1 < t
          ? L(n + "Too many arguments [" + t + " passed; expected 1]")
          : ((o = Zo.verifyChannel(n, e)), o === PS.DONE || o === PS.ERROR)
          ? o
          : ((r = Zo.stop(n, o)), r);
      },
      audioFade: function (e, n, t, o, r) {
        var a, i, d, s, l, u, g, m, p;
        if (((a = "[PS.audioFade] "), (i = arguments.length), 1 > i))
          return L(a + "Missing argument(s) [expected 4 or 5]");
        if (5 < i)
          return L(
            a + "Too many arguments [" + i + " passed; expected 4 or 5]"
          );
        if (((d = Zo.verifyChannel(a, e)), d === PS.DONE || d === PS.ERROR))
          return d;
        if (((s = n), s !== PS.CURRENT)) {
          if (((m = zt(s)), m !== Bt))
            return L(a + "Argument 2 is not a number or PS.CURRENT");
          0 > s ? (s = 0) : 1 < s && (s = 1);
        }
        if (((l = t), (m = zt(l)), m !== Bt))
          return L(a + "Argument 3 is not a number");
        if (l === s) return L(a + "Arguments 2 and 3 are identical");
        if (
          (0 > l ? (l = 0) : 1 < l && (l = 1),
          (u = o),
          void 0 === u || u === PS.DEFAULT)
        )
          u = 1e3;
        else {
          if (((m = zt(u)), m !== Bt))
            return L(a + "Argument 4 is not a number or PS.DEFAULT");
          if (((u = Math.floor(u)), 0 >= u)) return L(a + "Argument 4 <= 0");
        }
        if (((g = r), void 0 === g || g === PS.DEFAULT)) g = null;
        else if (((m = zt(g)), m !== Kt))
          return L(a + "Argument 5 is not a function or PS.DEFAULT");
        return (p = Zo.fade(a, d, s, l, u, g)), p;
      },
      piano: function (e, n) {
        var t, o, r, a, i, d;
        if (
          ((t = "[PS.piano] "), (o = Jn.length), (a = e), (r = zt(a)), r !== Bt)
        )
          return L(t + "index argument invalid");
        if (
          ((a = Math.floor(a)),
          1 > a ? (a = 1) : a > o && (a = o),
          (i = n),
          !0 !== i && !1 !== i)
        )
          if (((r = zt(i)), r === Wt)) i = !1;
          else if (r !== Bt) return L(t + "flag argument invalid");
        return (d = "piano_" + Jn[a - 1]), i && (d = "l_" + d), d;
      },
      harpsichord: function (e, n) {
        var t, o, r, a, i, d;
        if (
          ((t = "[PS.harpsichord] "),
          (o = Xn.length),
          (a = e),
          (r = zt(a)),
          r !== Bt)
        )
          return L(t + "index argument invalid");
        if (
          ((a = Math.floor(a)),
          1 > a ? (a = 1) : a > o && (a = o),
          (i = n),
          !0 !== i && !1 !== i)
        )
          if (((r = zt(i)), r === Wt)) i = !1;
          else if (r !== Bt) return L(t + "flag argument invalid");
        return (d = "hchord_" + Xn[a - 1]), i && (d = "l_" + d), d;
      },
      xylophone: function (e) {
        var n, t, o, r, a;
        return ((n = "[PS.xylophone] "),
        (t = Qn.length),
        (r = e),
        (o = zt(r)),
        o !== Bt)
          ? L(n + "index argument invalid")
          : ((r = Math.floor(r)),
            1 > r ? (r = 1) : r > t && (r = t),
            (a = "xylo_" + Qn[r - 1]),
            a);
      },
      debug: function (n) {
        var t, o, r, a;
        return ((t = "[PS.debug] "), 1 < arguments.length)
          ? L(t + "Too many arguments")
          : ((o = n),
            (r = zt(o)),
            r === Wt ? (o = "") : r !== Mt && (o = o.toString()),
            (E(),
            0 < o.length &&
              ((a = document.getElementById(Bn)),
              (a.value += o),
              (a.scrollTop = a.scrollHeight),
              console && console.log && console.log(o)),
            C()),
            PS.DONE);
      },
      debugClose: function () {
        var n, t;
        return ((n = "[PS.debugClose] "), 0 < arguments.length)
          ? L(n + "Too many arguments")
          : (Pt &&
              ((t = document.getElementById(In)), (t.style.display = "none")),
            (Ot = !1),
            PS.DONE);
      },
      debugClear: function () {
        var e;
        return ((e = "[PS.debugClear] "), 0 < arguments.length)
          ? L(e + "Too many arguments")
          : (Pt && (Ft.value = ""), PS.DONE);
      },
      line: function (e, n, t, o) {
        var r, a, i, d, s, l, u;
        if (((r = "[PS.line] "), (a = arguments.length), 4 > a))
          return L(r + "Missing argument(s)");
        if (4 < a) return L(r + "Too many arguments");
        if (((i = e), (d = n), (s = t), (l = o), zt(i) === Bt))
          i = Math.floor(i);
        else return L(r + "x1 argument not a number");
        if (zt(d) === Bt) d = Math.floor(d);
        else return L(r + "y1 argument not a number");
        if (zt(s) === Bt) s = Math.floor(s);
        else return L(r + "x2 argument not a number");
        if (zt(l) === Bt) l = Math.floor(l);
        else return L(r + "y2 argument not a number");
        return (u = gn(i, d, s, l)), u;
      },
      pathMap: function (e) {
        var n, t, o;
        return ((n = "[PS.pathMap] "), (t = arguments.length), 1 > t)
          ? L(n + "Missing argument(s)")
          : 1 < t
          ? L(n + "Too many arguments")
          : tn(n, e) === PS.ERROR
          ? PS.ERROR
          : 1 === e.pixelSize
          ? ((o = hn(e.width, e.height, e.data)), o.id)
          : L(n + "image is not format 1");
      },
      pathFind: function (e, n, t, o, r, a) {
        var i, d, s, l, u, g, m, p, c, f, b, _, h, R;
        if (((i = "[PS.pathFind] "), (d = arguments.length), 5 > d))
          return L(i + "Missing argument(s)");
        if (6 < d) return L(i + "Too many arguments");
        if (
          ((s = e),
          (l = n),
          (u = t),
          (g = o),
          (m = r),
          (p = a),
          !s || typeof s !== Mt || 1 > s.length)
        )
          return L(i + "pathmap argument invalid");
        if (((c = Rn(s)), !c)) return L(i + s + " not found");
        if (zt(l) !== Bt) return L(i + "x1 argument not a number");
        if (((l = Math.floor(l)), 0 > l || l >= c.width))
          return L(i + "x1 argument is outside " + s);
        if (zt(u) !== Bt) return L(i + "y1 argument not a number");
        if (((u = Math.floor(u)), 0 > u || u >= c.height))
          return L(i + "y1 argument is outside " + s);
        if (zt(g) !== Bt) return L(i + "x2 argument not a number");
        if (((g = Math.floor(g)), 0 > g || g >= c.width))
          return L(i + "x2 argument is outside " + s);
        if (zt(m) !== Bt) return L(i + "y2 argument not a number");
        if (((m = Math.floor(m)), 0 > m || m >= c.height))
          return L(i + "y2 argument is outside " + s);
        if (
          ((h = Zn.paths.no_diagonals),
          (R = Zn.paths.cut_corners),
          (f = zt(p)),
          f !== Wt && p !== PS.DEFAULT)
        ) {
          if (f !== Yt) return L(i + "options argument invalid");
          if (((_ = p.no_diagonals), !0 === _ || !1 === _)) h = _;
          else if (((f = zt(_)), f === Wt || _ === PS.DEFAULT))
            h = Zn.paths.no_diagonals;
          else if (f === Bt) h = 0 !== _;
          else return L(i + "options.no_diagonals invalid");
          if (((_ = p.cut_corners), !0 === _ || !1 === _)) R = _;
          else if (((f = zt(_)), f === Wt || _ === PS.DEFAULT))
            R = Zn.paths.cut_corners;
          else if (f === Bt) R = 0 !== _;
          else return L(i + "options.cut_corners invalid");
        }
        return (b = bn(c, l, u, g, m, h, R)), b;
      },
      pathData: function (e, n, t, o, r, a) {
        var i, d, s, l, u, g, m, p, c, f, b, _;
        if (((i = "[PS.pathData] "), (d = arguments.length), 5 > d))
          return L(i + "Missing argument(s)");
        if (6 < d) return L(i + "Too many arguments");
        if (
          ((s = e),
          (l = n),
          (u = t),
          (g = o),
          (m = r),
          (p = a),
          !s || typeof s !== Mt || 1 > s.length)
        )
          return L(i + "pathmap argument invalid");
        if (((c = Rn(s)), !c)) return L(i + s + " not found");
        if (zt(l) !== Bt) return L(i + "left argument not a number");
        if (((l = Math.floor(l)), 0 > l || l >= c.width))
          return L(i + "left argument is outside " + s);
        if (zt(u) !== Bt) return L(i + "top argument not a number");
        if (((u = Math.floor(u)), 0 > u || u >= c.height))
          return L(i + "top argument is outside " + s);
        if (g === PS.DEFAULT) g = 1;
        else if (zt(g) === Bt)
          (g = Math.floor(g)),
            1 > g ? (g = 1) : ((f = c.width - l), g > f && (g = f));
        else return L(i + "width argument not a number");
        if (m === PS.DEFAULT) m = 1;
        else if (zt(m) === Bt)
          (m = Math.floor(m)),
            1 > m ? (m = 1) : ((f = c.height - u), m > f && (m = f));
        else return L(i + "height argument not a number");
        if (p !== PS.DEFAULT && p !== PS.CURRENT)
          if (((b = zt(p)), b === Wt)) p = PS.CURRENT;
          else {
            if (b !== Bt) return L(i + "data argument not a number");
            if (0 > p) return L(i + "data argument < 0");
          }
        return (_ = _n(c, l, u, g, m, p)), _;
      },
      pathDelete: function (e) {
        var n, t;
        return (
          (n = "[PS.pathDelete] "),
          (t = arguments.length),
          1 > t
            ? L(n + "Missing argument")
            : !e || typeof e !== Mt || 1 > e.length
            ? L(n + "pathmap argument invalid")
            : En(e)
            ? PS.DONE
            : L(n + e + " not found")
        );
      },
      pathNear: function (e, n, t, o, r) {
        var a, i, d, s;
        return ((a = "[PS.pathNear] "), (i = arguments.length), 5 > i)
          ? L(a + "Missing argument(s)")
          : 5 < i
          ? L(a + "Too many arguments")
          : !e || typeof e !== Mt || 1 > e.length
          ? L(a + "pathmap argument invalid")
          : ((d = Rn(e)), !d)
          ? L(a + e + " not found")
          : ((s = Tn(d, n, t, o, r)), s);
      },
      _footerText: function (e) {
        var n, o, r;
        return ((n = "[PS._footerText] "), 1 < arguments.length)
          ? L(n + "Too many arguments")
          : ((o = e),
            (r = zt(o)),
            o !== PS.CURRENT &&
              r !== Wt &&
              (o === PS.DEFAULT ? (o = "") : r !== Mt && (o = o.toString()),
              A(),
              t(o.trim())),
            bt);
      },
    };
  return qt(er), er;
})();
(function () {
  "use strict";
  var e, n, t, o, r, a, d;
  if (
    ((e = 0),
    (n = ["webkit", "moz", "ms", "o"]),
    (t = n.length),
    !window.requestAnimationFrame)
  ) {
    for (o = 0; o < t; o += 1)
      (r = n[o]),
        (window.requestAnimationFrame = window[r + "RequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (n) {
        var t, o, r;
        return (
          (t = new Date().getTime()),
          (o = Math.max(0, 16 - (t - e))),
          (r = window.setTimeout(function () {
            n(t + o);
          }, o)),
          (e = t + o),
          r
        );
      });
  }
  if (!window.cancelAnimationFrame) {
    for (o = 0; o < t; o += 1)
      (r = n[o]),
        (window.cancelAnimationFrame =
          window[r + "CancelAnimationFrame"] ||
          window[r + "CancelRequestAnimationFrame"]);
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (e) {
        window.clearTimeout(e);
      });
  }
  String.fromCodePoint ||
    ((a = (function () {
      var e, n, t;
      (e = {}), (n = Object.defineProperty);
      try {
        t = n(e, e, e) && n;
      } catch (n) {}
      return t;
    })()),
    (d = function () {
      var e, n, t, o, r, a, d, s;
      if (((e = arguments.length), !e)) return "";
      for (n = 16384, t = "", r = [], o = 0; o < e; ) {
        if (
          ((a = +arguments[o]),
          !isFinite(a) || 0 > a || 1114111 < a || Math.floor(a) !== a)
        )
          throw RangeError("Invalid code point: " + a);
        65535 >= a
          ? r.push(a)
          : ((a -= 65536),
            (d = (a >> 10) + 55296),
            (s = (a % 1024) + 56320),
            r.push(d, s)),
          (o + 1 === e || r.length > n) &&
            ((t += String.fromCharCode.apply(null, r)), (r.length = 0)),
          (o += 1);
      }
      return t;
    }),
    a
      ? a(String, "fromCodePoint", { value: d, configurable: !0, writable: !0 })
      : (String.fromCodePoint = d));
})();