"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [338],
  {
    5084: () => {},
    4014: () => {},
    50: (e, t, s) => {
      s.d(t, { Ij: () => d, Vx: () => a, dK: () => o, WO: () => c });
      var i = s(8628),
        r = s(7713);
      function n(e, t, s, i) {
        return (
          e.params.createElements &&
            Object.keys(i).forEach((n) => {
              if (!s[n] && !0 === s.auto) {
                let a = (0, r.e)(e.el, ".".concat(i[n]))[0];
                a ||
                  ((a = (0, r.c)("div", i[n])),
                  (a.className = i[n]),
                  e.el.append(a)),
                  (s[n] = a),
                  (t[n] = a);
              }
            }),
          s
        );
      }
      function a(e) {
        let { swiper: t, extendParams: s, on: i, emit: a } = e;
        function l(e) {
          let s;
          return e &&
            "string" === typeof e &&
            t.isElement &&
            ((s = t.el.querySelector(e) || t.hostEl.querySelector(e)), s)
            ? s
            : (e &&
                ("string" === typeof e &&
                  (s = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" === typeof e &&
                s &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (s = t.el.querySelector(e))
                  : s && 1 === s.length && (s = s[0])),
              e && !s ? e : s);
        }
        function o(e, s) {
          const i = t.params.navigation;
          (e = (0, r.m)(e)).forEach((e) => {
            e &&
              (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = s),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
          });
        }
        function d() {
          const { nextEl: e, prevEl: s } = t.navigation;
          if (t.params.loop) return o(s, !1), void o(e, !1);
          o(s, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function c(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function p(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a("navigationNext"));
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = n(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          let s = l(e.nextEl),
            i = l(e.prevEl);
          Object.assign(t.navigation, { nextEl: s, prevEl: i }),
            (s = (0, r.m)(s)),
            (i = (0, r.m)(i));
          const a = (s, i) => {
            s && s.addEventListener("click", "next" === i ? p : c),
              !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
          };
          s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
        }
        function f() {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = (0, r.m)(e)), (s = (0, r.m)(s));
          const i = (e, s) => {
            e.removeEventListener("click", "next" === s ? p : c),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          i("init", () => {
            !1 === t.params.navigation.enabled ? m() : (u(), d());
          }),
          i("toEdge fromEdge lock unlock", () => {
            d();
          }),
          i("destroy", () => {
            f();
          }),
          i("enable disable", () => {
            let { nextEl: e, prevEl: s } = t.navigation;
            (e = (0, r.m)(e)),
              (s = (0, r.m)(s)),
              t.enabled
                ? d()
                : [...e, ...s]
                    .filter((e) => !!e)
                    .forEach((e) =>
                      e.classList.add(t.params.navigation.lockClass)
                    );
          }),
          i("click", (e, s) => {
            let { nextEl: i, prevEl: n } = t.navigation;
            (i = (0, r.m)(i)), (n = (0, r.m)(n));
            const l = s.target;
            let o = n.includes(l) || i.includes(l);
            if (t.isElement && !o) {
              const e = s.path || (s.composedPath && s.composedPath());
              e && (o = e.find((e) => i.includes(e) || n.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === l || t.pagination.el.contains(l))
              )
                return;
              let e;
              i.length
                ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
                : n.length &&
                  (e = n[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                a(!0 === e ? "navigationShow" : "navigationHide"),
                [...i, ...n]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        const m = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            f();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              u(),
              d();
          },
          disable: m,
          update: d,
          init: u,
          destroy: f,
        });
      }
      function l(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!+\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function o(e) {
        let { swiper: t, extendParams: s, on: i, emit: a } = e;
        const o = "swiper-pagination";
        let d;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "".concat(o, "-bullet"),
            bulletActiveClass: "".concat(o, "-bullet-active"),
            modifierClass: "".concat(o, "-"),
            currentClass: "".concat(o, "-current"),
            totalClass: "".concat(o, "-total"),
            hiddenClass: "".concat(o, "-hidden"),
            progressbarFillClass: "".concat(o, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(o, "-progressbar-opposite"),
            clickableClass: "".concat(o, "-clickable"),
            lockClass: "".concat(o, "-lock"),
            horizontalClass: "".concat(o, "-horizontal"),
            verticalClass: "".concat(o, "-vertical"),
            paginationDisabledClass: "".concat(o, "-disabled"),
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let c = 0;
        function p() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, s) {
          const { bulletActiveClass: i } = t.params.pagination;
          e &&
            (e =
              e[
                "".concat("prev" === s ? "previous" : "next", "ElementSibling")
              ]) &&
            (e.classList.add("".concat(i, "-").concat(s)),
            (e =
              e[
                "".concat("prev" === s ? "previous" : "next", "ElementSibling")
              ]) &&
              e.classList.add("".concat(i, "-").concat(s, "-").concat(s)));
        }
        function f(e) {
          const s = e.target.closest(l(t.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const i = (0, r.h)(s) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            const e =
              ((n = t.realIndex),
              (a = i),
              (o = t.slides.length),
              (a %= o) === 1 + (n %= o)
                ? "next"
                : a === n - 1
                ? "previous"
                : void 0);
            "next" === e
              ? t.slideNext()
              : "previous" === e
              ? t.slidePrev()
              : t.slideToLoop(i);
          } else t.slideTo(i);
          var n, a, o;
        }
        function m() {
          const e = t.rtl,
            s = t.params.pagination;
          if (p()) return;
          let i,
            n,
            o = t.pagination.el;
          o = (0, r.m)(o);
          const f =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            m = t.params.loop
              ? Math.ceil(f / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((n = t.previousRealIndex || 0),
                (i =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : "undefined" !== typeof t.snapIndex
              ? ((i = t.snapIndex), (n = t.previousSnapIndex))
              : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
            "bullets" === s.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let l, p, f;
            if (
              (s.dynamicBullets &&
                ((d = (0, r.f)(
                  a[0],
                  t.isHorizontal() ? "width" : "height",
                  !0
                )),
                o.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] = "".concat(
                    d * (s.dynamicMainBullets + 4),
                    "px"
                  );
                }),
                s.dynamicMainBullets > 1 &&
                  void 0 !== n &&
                  ((c += i - (n || 0)),
                  c > s.dynamicMainBullets - 1
                    ? (c = s.dynamicMainBullets - 1)
                    : c < 0 && (c = 0)),
                (l = Math.max(i - c, 0)),
                (p = l + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                (f = (p + l) / 2)),
              a.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => "".concat(s.bulletActiveClass).concat(e)),
                ]
                  .map((e) =>
                    "string" === typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              o.length > 1)
            )
              a.forEach((e) => {
                const n = (0, r.h)(e);
                n === i
                  ? e.classList.add(...s.bulletActiveClass.split(" "))
                  : t.isElement && e.setAttribute("part", "bullet"),
                  s.dynamicBullets &&
                    (n >= l &&
                      n <= p &&
                      e.classList.add(
                        ..."".concat(s.bulletActiveClass, "-main").split(" ")
                      ),
                    n === l && u(e, "prev"),
                    n === p && u(e, "next"));
              });
            else {
              const e = a[i];
              if (
                (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute(
                      "part",
                      t === i ? "bullet-active" : "bullet"
                    );
                  }),
                s.dynamicBullets)
              ) {
                const e = a[l],
                  t = a[p];
                for (let i = l; i <= p; i += 1)
                  a[i] &&
                    a[i].classList.add(
                      ..."".concat(s.bulletActiveClass, "-main").split(" ")
                    );
                u(e, "prev"), u(t, "next");
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(a.length, s.dynamicMainBullets + 4),
                r = (d * i - d) / 2 - f * d,
                n = e ? "right" : "left";
              a.forEach((e) => {
                e.style[t.isHorizontal() ? n : "top"] = "".concat(r, "px");
              });
            }
          }
          o.forEach((e, r) => {
            if (
              ("fraction" === s.type &&
                (e.querySelectorAll(l(s.currentClass)).forEach((e) => {
                  e.textContent = s.formatFractionCurrent(i + 1);
                }),
                e.querySelectorAll(l(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(m);
                })),
              "progressbar" === s.type)
            ) {
              let r;
              r = s.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const n = (i + 1) / m;
              let a = 1,
                o = 1;
              "horizontal" === r ? (a = n) : (o = n),
                e.querySelectorAll(l(s.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = "translate3d(0,0,0) scaleX("
                    .concat(a, ") scaleY(")
                    .concat(o, ")")),
                    (e.style.transitionDuration = "".concat(
                      t.params.speed,
                      "ms"
                    ));
                });
            }
            "custom" === s.type && s.renderCustom
              ? ((e.innerHTML = s.renderCustom(t, i + 1, m)),
                0 === r && a("paginationRender", e))
              : (0 === r && a("paginationRender", e), a("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
          });
        }
        function h() {
          const e = t.params.pagination;
          if (p()) return;
          const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
          let i = t.pagination.el;
          i = (0, r.m)(i);
          let n = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil(s / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
            for (let s = 0; s < i; s += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(t, s, e.bulletClass))
                : (n += "<"
                    .concat(e.bulletElement, " ")
                    .concat(t.isElement ? 'part="bullet"' : "", ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
          }
          "fraction" === e.type &&
            (n = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
            "progressbar" === e.type &&
              (n = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (t.pagination.bullets = []),
            i.forEach((s) => {
              "custom" !== e.type && (s.innerHTML = n || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(
                    ...s.querySelectorAll(l(e.bulletClass))
                  );
            }),
            "custom" !== e.type && a("paginationRender", i[0]);
        }
        function g() {
          t.params.pagination = n(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let s;
          "string" === typeof e.el &&
            t.isElement &&
            (s = t.el.querySelector(e.el)),
            s ||
              "string" !== typeof e.el ||
              (s = [...document.querySelectorAll(e.el)]),
            s || (s = e.el),
            s &&
              0 !== s.length &&
              (t.params.uniqueNavElements &&
                "string" === typeof e.el &&
                Array.isArray(s) &&
                s.length > 1 &&
                ((s = [...t.el.querySelectorAll(e.el)]),
                s.length > 1 &&
                  (s = s.filter((e) => (0, r.a)(e, ".swiper")[0] === t.el)[0])),
              Array.isArray(s) && 1 === s.length && (s = s[0]),
              Object.assign(t.pagination, { el: s }),
              (s = (0, r.m)(s)),
              s.forEach((s) => {
                "bullets" === e.type &&
                  e.clickable &&
                  s.classList.add(...(e.clickableClass || "").split(" ")),
                  s.classList.add(e.modifierClass + e.type),
                  s.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass
                  ),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (s.classList.add(
                      "".concat(e.modifierClass).concat(e.type, "-dynamic")
                    ),
                    (c = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    s.classList.add(e.progressbarOppositeClass),
                  e.clickable && s.addEventListener("click", f),
                  t.enabled || s.classList.add(e.lockClass);
              }));
        }
        function v() {
          const e = t.params.pagination;
          if (p()) return;
          let s = t.pagination.el;
          s &&
            ((s = (0, r.m)(s)),
            s.forEach((s) => {
              s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (s.classList.remove(...(e.clickableClass || "").split(" ")),
                  s.removeEventListener("click", f));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        i("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: s } = t.pagination;
          (s = (0, r.m)(s)),
            s.forEach((s) => {
              s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
          i("init", () => {
            !1 === t.params.pagination.enabled ? w() : (g(), h(), m());
          }),
          i("activeIndexChange", () => {
            "undefined" === typeof t.snapIndex && m();
          }),
          i("snapIndexChange", () => {
            m();
          }),
          i("snapGridLengthChange", () => {
            h(), m();
          }),
          i("destroy", () => {
            v();
          }),
          i("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              ((e = (0, r.m)(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
          }),
          i("lock unlock", () => {
            m();
          }),
          i("click", (e, s) => {
            const i = s.target,
              n = (0, r.m)(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              n &&
              n.length > 0 &&
              !i.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = n[0].classList.contains(
                t.params.pagination.hiddenClass
              );
              a(!0 === e ? "paginationShow" : "paginationHide"),
                n.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass)
                );
            }
          });
        const w = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = (0, r.m)(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
            v();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = (0, r.m)(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
              g(),
              h(),
              m();
          },
          disable: w,
          render: h,
          update: m,
          init: g,
          destroy: v,
        });
      }
      function d(e) {
        let t,
          s,
          { swiper: r, extendParams: n, on: a, emit: l, params: o } = e;
        (r.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          n({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let d,
          c,
          p,
          u,
          f,
          m,
          h,
          g,
          v = o && o.autoplay ? o.autoplay.delay : 3e3,
          w = o && o.autoplay ? o.autoplay.delay : 3e3,
          b = new Date().getTime();
        function y(e) {
          r &&
            !r.destroyed &&
            r.wrapperEl &&
            e.target === r.wrapperEl &&
            (r.wrapperEl.removeEventListener("transitionend", y),
            g || (e.detail && e.detail.bySwiperTouchMove) || M());
        }
        const S = () => {
            if (r.destroyed || !r.autoplay.running) return;
            r.autoplay.paused ? (c = !0) : c && ((w = d), (c = !1));
            const e = r.autoplay.paused ? d : b + w - new Date().getTime();
            (r.autoplay.timeLeft = e),
              l("autoplayTimeLeft", e, e / v),
              (s = requestAnimationFrame(() => {
                S();
              }));
          },
          E = (e) => {
            if (r.destroyed || !r.autoplay.running) return;
            cancelAnimationFrame(s), S();
            let i = "undefined" === typeof e ? r.params.autoplay.delay : e;
            (v = r.params.autoplay.delay), (w = r.params.autoplay.delay);
            const n = (() => {
              let e;
              if (
                ((e =
                  r.virtual && r.params.virtual.enabled
                    ? r.slides.filter((e) =>
                        e.classList.contains("swiper-slide-active")
                      )[0]
                    : r.slides[r.activeIndex]),
                !e)
              )
                return;
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(n) &&
              n > 0 &&
              "undefined" === typeof e &&
              ((i = n), (v = n), (w = n)),
              (d = i);
            const a = r.params.speed,
              o = () => {
                r &&
                  !r.destroyed &&
                  (r.params.autoplay.reverseDirection
                    ? !r.isBeginning || r.params.loop || r.params.rewind
                      ? (r.slidePrev(a, !0, !0), l("autoplay"))
                      : r.params.autoplay.stopOnLastSlide ||
                        (r.slideTo(r.slides.length - 1, a, !0, !0),
                        l("autoplay"))
                    : !r.isEnd || r.params.loop || r.params.rewind
                    ? (r.slideNext(a, !0, !0), l("autoplay"))
                    : r.params.autoplay.stopOnLastSlide ||
                      (r.slideTo(0, a, !0, !0), l("autoplay")),
                  r.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      E();
                    })));
              };
            return (
              i > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    o();
                  }, i)))
                : requestAnimationFrame(() => {
                    o();
                  }),
              i
            );
          },
          T = () => {
            (b = new Date().getTime()),
              (r.autoplay.running = !0),
              E(),
              l("autoplayStart");
          },
          x = () => {
            (r.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(s),
              l("autoplayStop");
          },
          C = (e, s) => {
            if (r.destroyed || !r.autoplay.running) return;
            clearTimeout(t), e || (h = !0);
            const i = () => {
              l("autoplayPause"),
                r.params.autoplay.waitForTransition
                  ? r.wrapperEl.addEventListener("transitionend", y)
                  : M();
            };
            if (((r.autoplay.paused = !0), s))
              return m && (d = r.params.autoplay.delay), (m = !1), void i();
            const n = d || r.params.autoplay.delay;
            (d = n - (new Date().getTime() - b)),
              (r.isEnd && d < 0 && !r.params.loop) || (d < 0 && (d = 0), i());
          },
          M = () => {
            (r.isEnd && d < 0 && !r.params.loop) ||
              r.destroyed ||
              !r.autoplay.running ||
              ((b = new Date().getTime()),
              h ? ((h = !1), E(d)) : E(),
              (r.autoplay.paused = !1),
              l("autoplayResume"));
          },
          P = () => {
            if (r.destroyed || !r.autoplay.running) return;
            const e = (0, i.g)();
            "hidden" === e.visibilityState && ((h = !0), C(!0)),
              "visible" === e.visibilityState && M();
          },
          L = (e) => {
            "mouse" === e.pointerType &&
              ((h = !0), (g = !0), r.animating || r.autoplay.paused || C(!0));
          },
          k = (e) => {
            "mouse" === e.pointerType && ((g = !1), r.autoplay.paused && M());
          };
        a("init", () => {
          r.params.autoplay.enabled &&
            (r.params.autoplay.pauseOnMouseEnter &&
              (r.el.addEventListener("pointerenter", L),
              r.el.addEventListener("pointerleave", k)),
            (0, i.g)().addEventListener("visibilitychange", P),
            T());
        }),
          a("destroy", () => {
            r.el &&
              "string" !== typeof r.el &&
              (r.el.removeEventListener("pointerenter", L),
              r.el.removeEventListener("pointerleave", k)),
              (0, i.g)().removeEventListener("visibilitychange", P),
              r.autoplay.running && x();
          }),
          a("_freeModeStaticRelease", () => {
            (u || h) && M();
          }),
          a("_freeModeNoMomentumRelease", () => {
            r.params.autoplay.disableOnInteraction ? x() : C(!0, !0);
          }),
          a("beforeTransitionStart", (e, t, s) => {
            !r.destroyed &&
              r.autoplay.running &&
              (s || !r.params.autoplay.disableOnInteraction ? C(!0, !0) : x());
          }),
          a("sliderFirstMove", () => {
            !r.destroyed &&
              r.autoplay.running &&
              (r.params.autoplay.disableOnInteraction
                ? x()
                : ((p = !0),
                  (u = !1),
                  (h = !1),
                  (f = setTimeout(() => {
                    (h = !0), (u = !0), C(!0);
                  }, 200))));
          }),
          a("touchEnd", () => {
            if (!r.destroyed && r.autoplay.running && p) {
              if (
                (clearTimeout(f),
                clearTimeout(t),
                r.params.autoplay.disableOnInteraction)
              )
                return (u = !1), void (p = !1);
              u && r.params.cssMode && M(), (u = !1), (p = !1);
            }
          }),
          a("slideChange", () => {
            !r.destroyed && r.autoplay.running && (m = !0);
          }),
          Object.assign(r.autoplay, { start: T, stop: x, pause: C, resume: M });
      }
      function c(e) {
        let { swiper: t, extendParams: s, on: n } = e;
        s({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let a = !1,
          l = !1;
        function o() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const s = e.clickedIndex,
            i = e.clickedSlide;
          if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
            return;
          if ("undefined" === typeof s || null === s) return;
          let r;
          (r = e.params.loop
            ? parseInt(
                e.clickedSlide.getAttribute("data-swiper-slide-index"),
                10
              )
            : s),
            t.params.loop ? t.slideToLoop(r) : t.slideTo(r);
        }
        function d() {
          const { thumbs: e } = t.params;
          if (a) return !1;
          a = !0;
          const s = t.constructor;
          if (e.swiper instanceof s)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              t.thumbs.swiper.update();
          else if ((0, r.l)(e.swiper)) {
            const i = Object.assign({}, e.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new s(i)),
              (l = !0);
          }
          return (
            t.thumbs.swiper.el.classList.add(
              t.params.thumbs.thumbsContainerClass
            ),
            t.thumbs.swiper.on("tap", o),
            !0
          );
        }
        function c(e) {
          const s = t.thumbs.swiper;
          if (!s || s.destroyed) return;
          const i =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView;
          let n = 1;
          const a = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (n = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (n = 1),
            (n = Math.floor(n)),
            s.slides.forEach((e) => e.classList.remove(a)),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
          )
            for (let d = 0; d < n; d += 1)
              (0, r.e)(
                s.slidesEl,
                '[data-swiper-slide-index="'.concat(t.realIndex + d, '"]')
              ).forEach((e) => {
                e.classList.add(a);
              });
          else
            for (let r = 0; r < n; r += 1)
              s.slides[t.realIndex + r] &&
                s.slides[t.realIndex + r].classList.add(a);
          const l = t.params.thumbs.autoScrollOffset,
            o = l && !s.params.loop;
          if (t.realIndex !== s.realIndex || o) {
            const r = s.activeIndex;
            let n, a;
            if (s.params.loop) {
              const e = s.slides.filter(
                (e) =>
                  e.getAttribute("data-swiper-slide-index") ===
                  "".concat(t.realIndex)
              )[0];
              (n = s.slides.indexOf(e)),
                (a = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (n = t.realIndex), (a = n > t.previousIndex ? "next" : "prev");
            o && (n += "next" === a ? l : -1 * l),
              s.visibleSlidesIndexes &&
                s.visibleSlidesIndexes.indexOf(n) < 0 &&
                (s.params.centeredSlides
                  ? (n =
                      n > r
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > r && s.params.slidesPerGroup,
                s.slideTo(n, e ? 0 : void 0));
          }
        }
        (t.thumbs = { swiper: null }),
          n("beforeInit", () => {
            const { thumbs: e } = t.params;
            if (e && e.swiper)
              if (
                "string" === typeof e.swiper ||
                e.swiper instanceof HTMLElement
              ) {
                const s = (0, i.g)(),
                  r = () => {
                    const i =
                      "string" === typeof e.swiper
                        ? s.querySelector(e.swiper)
                        : e.swiper;
                    if (i && i.swiper) (e.swiper = i.swiper), d(), c(!0);
                    else if (i) {
                      const s = "".concat(t.params.eventsPrefix, "init"),
                        r = (n) => {
                          (e.swiper = n.detail[0]),
                            i.removeEventListener(s, r),
                            d(),
                            c(!0),
                            e.swiper.update(),
                            t.update();
                        };
                      i.addEventListener(s, r);
                    }
                    return i;
                  },
                  n = () => {
                    if (t.destroyed) return;
                    r() || requestAnimationFrame(n);
                  };
                requestAnimationFrame(n);
              } else d(), c(!0);
          }),
          n("slideChange update resize observerUpdate", () => {
            c();
          }),
          n("setTransition", (e, s) => {
            const i = t.thumbs.swiper;
            i && !i.destroyed && i.setTransition(s);
          }),
          n("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && l && e.destroy();
          }),
          Object.assign(t.thumbs, { init: d, update: c });
      }
    },
    8628: (e, t, s) => {
      function i(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((s) => {
            "undefined" === typeof e[s]
              ? (e[s] = t[s])
              : i(t[s]) &&
                i(e[s]) &&
                Object.keys(t[s]).length > 0 &&
                r(e[s], t[s]);
          });
      }
      s.d(t, { a: () => o, g: () => a });
      const n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        const e = "undefined" !== typeof document ? document : {};
        return r(e, n), e;
      }
      const l = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        const e = "undefined" !== typeof window ? window : {};
        return r(e, l), e;
      }
    },
    7713: (e, t, s) => {
      s.d(t, {
        a: () => y,
        c: () => h,
        d: () => a,
        e: () => u,
        f: () => S,
        h: () => b,
        j: () => l,
        l: () => o,
        m: () => E,
        n: () => n,
        p: () => w,
        q: () => v,
        r: () => g,
        s: () => c,
        t: () => p,
        u: () => m,
        v: () => f,
        w: () => d,
        x: () => r,
      });
      var i = s(8628);
      function r(e) {
        const t = e;
        Object.keys(t).forEach((e) => {
          try {
            t[e] = null;
          } catch (s) {}
          try {
            delete t[e];
          } catch (s) {}
        });
      }
      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function l(e, t) {
        void 0 === t && (t = "x");
        const s = (0, i.a)();
        let r, n, a;
        const l = (function (e) {
          const t = (0, i.a)();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((n = l.transform || l.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((a =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = a.toString().split(","))),
          "x" === t &&
            (n = s.WebKitCSSMatrix
              ? a.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (n = s.WebKitCSSMatrix
              ? a.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          n || 0
        );
      }
      function o(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            void 0 !== r &&
            null !== r &&
            ((s = r),
            !("undefined" !== typeof window &&
            "undefined" !== typeof window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n &&
                n.enumerable &&
                (o(e[i]) && o(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : d(e[i], r[i])
                  : !o(e[i]) && o(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : d(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        var s;
        return e;
      }
      function c(e, t, s) {
        e.style.setProperty(t, s);
      }
      function p(e) {
        let { swiper: t, targetPosition: s, side: r } = e;
        const n = (0, i.a)(),
          a = -t.translate;
        let l,
          o = null;
        const d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > a ? "next" : "prev",
          p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (l = new Date().getTime()), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0),
              i = 0.5 - Math.cos(e * Math.PI) / 2;
            let c = a + i * (s - a);
            if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [r]: c }), p(c, s)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: c });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      function u(e, t) {
        void 0 === t && (t = "");
        const s = [...e.children];
        return (
          e instanceof HTMLSlotElement && s.push(...e.assignedElements()),
          t ? s.filter((e) => e.matches(t)) : s
        );
      }
      function f(e, t) {
        const s = t.contains(e);
        if (!s && t instanceof HTMLSlotElement) {
          return [...t.assignedElements()].includes(e);
        }
        return s;
      }
      function m(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function h(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ""),
                    e
                      .trim()
                      .split(" ")
                      .filter((e) => !!e.trim())
                  );
                })(t))
          ),
          s
        );
      }
      function g(e, t) {
        const s = [];
        for (; e.previousElementSibling; ) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
        }
        return s;
      }
      function v(e, t) {
        const s = [];
        for (; e.nextElementSibling; ) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
        }
        return s;
      }
      function w(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function b(e) {
        let t,
          s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling); )
            1 === s.nodeType && (t += 1);
          return t;
        }
      }
      function y(e, t) {
        const s = [];
        let i = e.parentElement;
        for (; i; )
          t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
        return s;
      }
      function S(e, t, s) {
        const r = (0, i.a)();
        return s
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    4975: (e, t, s) => {
      s.d(t, { RC: () => re, qr: () => ne });
      var i = s(2555),
        r = s(3986),
        n = s(5043),
        a = s(8628),
        l = s(7713);
      let o, d, c;
      function p() {
        return (
          o ||
            (o = (function () {
              const e = (0, a.a)(),
                t = (0, a.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          o
        );
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          d ||
            (d = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const s = p(),
                i = (0, a.a)(),
                r = i.navigator.platform,
                n = t || i.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = i.screen.width,
                d = i.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = n.match(/(iPad).*OS\s([\d_]+)/);
              const f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                m = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r;
              let g = "MacIntel" === r;
              return (
                !u &&
                  g &&
                  s.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(o, "x").concat(d)) >= 0 &&
                  ((u = n.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (g = !1)),
                c && !h && ((l.os = "android"), (l.android = !0)),
                (u || m || f) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          d
        );
      }
      function f() {
        return (
          c ||
            (c = (function () {
              const e = (0, a.a)(),
                t = u();
              let s = !1;
              function i() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (i()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  const [e, i] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  s = e < 16 || (16 === e && i < 2);
                }
              }
              const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                n = i();
              return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || (r && t.ios),
                isWebView: r,
              };
            })()),
          c
        );
      }
      var m = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" !== typeof t) return i;
          const r = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" !== typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
              n[a] = arguments[a];
            t.apply(i, n);
          }
          return (r.__emitterProxy = t), i.on(e, r, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" !== typeof e) return s;
          const i = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(r, 1);
                    });
              }),
              s)
            : s;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
            n[a] = arguments[a];
          "string" === typeof n[0] || Array.isArray(n[0])
            ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
            : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
            s.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, s);
                  });
            }),
            e
          );
        },
      };
      const h = (e, t, s) => {
        t && !e.classList.contains(s)
          ? e.classList.add(s)
          : !t && e.classList.contains(s) && e.classList.remove(s);
      };
      const g = (e, t, s) => {
        t && !e.classList.contains(s)
          ? e.classList.add(s)
          : !t && e.classList.contains(s) && e.classList.remove(s);
      };
      const v = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(
            e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass)
          );
          if (s) {
            let t = s.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (s.shadowRoot
                ? (t = s.shadowRoot.querySelector(
                    ".".concat(e.params.lazyPreloaderClass)
                  ))
                : requestAnimationFrame(() => {
                    s.shadowRoot &&
                      ((t = s.shadowRoot.querySelector(
                        ".".concat(e.params.lazyPreloaderClass)
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        w = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading");
        },
        b = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const i =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
              n = [s - t];
            return (
              n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
              void e.slides.forEach((t, s) => {
                n.includes(t.column) && w(e, s);
              })
            );
          }
          const n = r + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let a = r - t; a <= n + t; a += 1) {
              const t = ((a % s) + s) % s;
              (t < r || t > n) && w(e, t);
            }
          else
            for (
              let a = Math.max(r - t, 0);
              a <= Math.min(n + t, s - 1);
              a += 1
            )
              a !== r && (a > n || a < r) && w(e, a);
        };
      var y = {
        updateSize: function () {
          const e = this;
          let t, s;
          const i = e.el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : i.clientWidth),
            (s =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : i.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt((0, l.p)(i, "padding-left") || 0, 10) -
                parseInt((0, l.p)(i, "padding-right") || 0, 10)),
              (s =
                s -
                parseInt((0, l.p)(i, "padding-top") || 0, 10) -
                parseInt((0, l.p)(i, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
          }
          const s = e.params,
            {
              wrapperEl: i,
              slidesEl: r,
              size: n,
              rtlTranslate: a,
              wrongRTL: o,
            } = e,
            d = e.virtual && s.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, l.e)(r, ".".concat(e.params.slideClass, ", swiper-slide")),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const m = [],
            h = [];
          let g = s.slidesOffsetBefore;
          "function" === typeof g && (g = s.slidesOffsetBefore.call(e));
          let v = s.slidesOffsetAfter;
          "function" === typeof v && (v = s.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = s.spaceBetween,
            S = -g,
            E = 0,
            T = 0;
          if ("undefined" === typeof n) return;
          "string" === typeof y && y.indexOf("%") >= 0
            ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
            : "string" === typeof y && (y = parseFloat(y)),
            (e.virtualSize = -y),
            p.forEach((e) => {
              a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            s.centeredSlides &&
              s.cssMode &&
              ((0, l.s)(i, "--swiper-centered-offset-before", ""),
              (0, l.s)(i, "--swiper-centered-offset-after", ""));
          const x = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const M =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => "undefined" !== typeof s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let P = 0; P < u; P += 1) {
            let i;
            if (
              ((C = 0),
              p[P] && (i = p[P]),
              x && e.grid.updateSlide(P, i, p),
              !p[P] || "none" !== (0, l.p)(i, "display"))
            ) {
              if ("auto" === s.slidesPerView) {
                M && (p[P].style[e.getDirectionLabel("width")] = "");
                const r = getComputedStyle(i),
                  n = i.style.transform,
                  a = i.style.webkitTransform;
                if (
                  (n && (i.style.transform = "none"),
                  a && (i.style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  C = e.isHorizontal()
                    ? (0, l.f)(i, "width", !0)
                    : (0, l.f)(i, "height", !0);
                else {
                  const e = t(r, "width"),
                    s = t(r, "padding-left"),
                    n = t(r, "padding-right"),
                    a = t(r, "margin-left"),
                    l = t(r, "margin-right"),
                    o = r.getPropertyValue("box-sizing");
                  if (o && "border-box" === o) C = e + a + l;
                  else {
                    const { clientWidth: t, offsetWidth: r } = i;
                    C = e + s + n + a + l + (r - t);
                  }
                }
                n && (i.style.transform = n),
                  a && (i.style.webkitTransform = a),
                  s.roundLengths && (C = Math.floor(C));
              } else
                (C = (n - (s.slidesPerView - 1) * y) / s.slidesPerView),
                  s.roundLengths && (C = Math.floor(C)),
                  p[P] &&
                    (p[P].style[e.getDirectionLabel("width")] = "".concat(
                      C,
                      "px"
                    ));
              p[P] && (p[P].swiperSlideSize = C),
                h.push(C),
                s.centeredSlides
                  ? ((S = S + C / 2 + E / 2 + y),
                    0 === E && 0 !== P && (S = S - n / 2 - y),
                    0 === P && (S = S - n / 2 - y),
                    Math.abs(S) < 0.001 && (S = 0),
                    s.roundLengths && (S = Math.floor(S)),
                    T % s.slidesPerGroup === 0 && f.push(S),
                    m.push(S))
                  : (s.roundLengths && (S = Math.floor(S)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ===
                      0 && f.push(S),
                    m.push(S),
                    (S = S + C + y)),
                (e.virtualSize += C + y),
                (E = C),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, n) + v),
            a &&
              o &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              (i.style.width = "".concat(e.virtualSize + y, "px")),
            s.setWrapperSize &&
              (i.style[e.getDirectionLabel("width")] = "".concat(
                e.virtualSize + y,
                "px"
              )),
            x && e.grid.updateWrapperSize(C, f),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < f.length; i += 1) {
              let r = f[i];
              s.roundLengths && (r = Math.floor(r)),
                f[i] <= e.virtualSize - n && t.push(r);
            }
            (f = t),
              Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - n);
          }
          if (d && s.loop) {
            const t = h[0] + y;
            if (s.slidesPerGroup > 1) {
              const i = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    s.slidesPerGroup
                ),
                r = t * s.slidesPerGroup;
              for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r);
            }
            for (
              let i = 0;
              i < e.virtual.slidesBefore + e.virtual.slidesAfter;
              i += 1
            )
              1 === s.slidesPerGroup && f.push(f[f.length - 1] + t),
                m.push(m[m.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === f.length && (f = [0]), 0 !== y)) {
            const t =
              e.isHorizontal() && a
                ? "marginLeft"
                : e.getDirectionLabel("marginRight");
            p.filter(
              (e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1
            ).forEach((e) => {
              e.style[t] = "".concat(y, "px");
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = e > n ? e - n : 0;
            f = f.map((e) => (e <= 0 ? -g : e > t ? t + v : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            h.forEach((t) => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
            if (e + t < n) {
              const s = (n - e - t) / 2;
              f.forEach((e, t) => {
                f[t] = e - s;
              }),
                m.forEach((e, t) => {
                  m[t] = e + s;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            (0, l.s)(
              i,
              "--swiper-centered-offset-before",
              "".concat(-f[0], "px")
            ),
              (0, l.s)(
                i,
                "--swiper-centered-offset-after",
                "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            f.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            m.length !== b && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !d && !s.cssMode && ("slide" === s.effect || "fade" === s.effect))
          ) {
            const t = "".concat(s.containerModifierClass, "backface-hidden"),
              i = e.el.classList.contains(t);
            u <= s.maxBackfaceHiddenSlides
              ? i || e.el.classList.add(t)
              : i && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            n = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                s.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                s.push(a(e));
              }
          else s.push(a(t.activeIndex));
          for (r = 0; r < s.length; r += 1)
            if ("undefined" !== typeof s[r]) {
              const e = s[r].offsetHeight;
              n = e > n ? e : n;
            }
          (n || 0 === n) && (t.wrapperEl.style.height = "".concat(n, "px"));
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            s = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset =
              (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
              s -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: r, snapGrid: n } = t;
          if (0 === i.length) return;
          "undefined" === typeof i[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let a = -e;
          r && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
          let l = s.spaceBetween;
          "string" === typeof l && l.indexOf("%") >= 0
            ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
            : "string" === typeof l && (l = parseFloat(l));
          for (let o = 0; o < i.length; o += 1) {
            const e = i[o];
            let d = e.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c =
                (a + (s.centeredSlides ? t.minTranslate() : 0) - d) /
                (e.swiperSlideSize + l),
              p =
                (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
                (e.swiperSlideSize + l),
              u = -(a - d),
              f = u + t.slidesSizesGrid[o],
              m = u >= 0 && u <= t.size - t.slidesSizesGrid[o],
              g =
                (u >= 0 && u < t.size - 1) ||
                (f > 1 && f <= t.size) ||
                (u <= 0 && f >= t.size);
            g && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o)),
              h(e, g, s.slideVisibleClass),
              h(e, m, s.slideFullyVisibleClass),
              (e.progress = r ? -c : c),
              (e.originalProgress = r ? -p : p);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = t;
          const o = n,
            d = a;
          if (0 === i) (r = 0), (n = !0), (a = !0);
          else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1;
            (n = s || r <= 0), (a = l || r >= 1), s && (r = 0), l && (r = 1);
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[s],
              n = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              o = Math.abs(e);
            (l = o >= r ? (o - r) / a : (o + a - n) / a), l > 1 && (l -= 1);
          }
          Object.assign(t, {
            progress: r,
            progressLoop: l,
            isBeginning: n,
            isEnd: a,
          }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            a && !d && t.emit("reachEnd toEdge"),
            ((o && !n) || (d && !a)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
            n = e.virtual && s.virtual.enabled,
            a = e.grid && s.grid && s.grid.rows > 1,
            o = (e) =>
              (0, l.e)(
                i,
                ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e)
              )[0];
          let d, c, p;
          if (n)
            if (s.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (d = o('[data-swiper-slide-index="'.concat(t, '"]')));
            } else d = o('[data-swiper-slide-index="'.concat(r, '"]'));
          else
            a
              ? ((d = t.filter((e) => e.column === r)[0]),
                (p = t.filter((e) => e.column === r + 1)[0]),
                (c = t.filter((e) => e.column === r - 1)[0]))
              : (d = t[r]);
          d &&
            (a ||
              ((p = (0, l.q)(d, ".".concat(s.slideClass, ", swiper-slide"))[0]),
              s.loop && !p && (p = t[0]),
              (c = (0, l.r)(d, ".".concat(s.slideClass, ", swiper-slide"))[0]),
              s.loop && 0 === !c && (c = t[t.length - 1]))),
            t.forEach((e) => {
              g(e, e === d, s.slideActiveClass),
                g(e, e === p, s.slideNextClass),
                g(e, e === c, s.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: a,
              snapIndex: l,
            } = t;
          let o,
            d = e;
          const c = (e) => {
            let s = e - t.virtual.slidesBefore;
            return (
              s < 0 && (s = t.virtual.slides.length + s),
              s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
              s
            );
          };
          if (
            ("undefined" === typeof d &&
              (d = (function (e) {
                const { slidesGrid: t, params: s } = e,
                  i = e.rtlTranslate ? e.translate : -e.translate;
                let r;
                for (let n = 0; n < t.length; n += 1)
                  "undefined" !== typeof t[n + 1]
                    ? i >= t[n] && i < t[n + 1] - (t[n + 1] - t[n]) / 2
                      ? (r = n)
                      : i >= t[n] && i < t[n + 1] && (r = n + 1)
                    : i >= t[n] && (r = n);
                return (
                  s.normalizeSlideIndex &&
                    (r < 0 || "undefined" === typeof r) &&
                    (r = 0),
                  r
                );
              })(t)),
            i.indexOf(s) >= 0)
          )
            o = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            o = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((o >= i.length && (o = i.length - 1), d === n && !t.params.loop))
            return void (
              o !== l && ((t.snapIndex = o), t.emit("snapIndexChange"))
            );
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = c(d));
          const p = t.grid && r.grid && r.grid.rows > 1;
          let u;
          if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
          else if (p) {
            const e = t.slides.filter((e) => e.column === d)[0];
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
              (u = Math.floor(s / r.grid.rows));
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d;
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: o,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d,
          }),
            t.initialized && b(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
          const s = this,
            i = s.params;
          let r = e.closest(".".concat(i.slideClass, ", swiper-slide"));
          !r &&
            s.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !r &&
                e.matches &&
                e.matches(".".concat(i.slideClass, ", swiper-slide")) &&
                (r = e);
            });
          let n,
            a = !1;
          if (r)
            for (let l = 0; l < s.slides.length; l += 1)
              if (s.slides[l] === r) {
                (a = !0), (n = l);
                break;
              }
          if (!r || !a)
            return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
          (s.clickedSlide = r),
            s.virtual && s.params.virtual.enabled
              ? (s.clickedIndex = parseInt(
                  r.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (s.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== s.clickedIndex &&
              s.clickedIndex !== s.activeIndex &&
              s.slideToClickedSlide();
        },
      };
      var S = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          let n = (0, l.j)(r, e);
          return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
          let l,
            o = 0,
            d = 0;
          s.isHorizontal() ? (o = i ? -e : e) : (d = e),
            r.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? o : d),
            r.cssMode
              ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -o : -d)
              : r.virtualTranslate ||
                (s.isHorizontal()
                  ? (o -= s.cssOverflowAdjustment())
                  : (d -= s.cssOverflowAdjustment()),
                (n.style.transform = "translate3d("
                  .concat(o, "px, ")
                  .concat(d, "px, ")
                  .concat(0, "px)")));
          const c = s.maxTranslate() - s.minTranslate();
          (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
            l !== a && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === i && (i = !0);
          const n = this,
            { params: a, wrapperEl: o } = n;
          if (n.animating && a.preventInteractionOnTransition) return !1;
          const d = n.minTranslate(),
            c = n.maxTranslate();
          let p;
          if (
            ((p = i && e > d ? d : i && e < c ? c : e),
            n.updateProgress(p),
            a.cssMode)
          ) {
            const e = n.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
            else {
              if (!n.support.smoothScroll)
                return (
                  (0, l.t)({
                    swiper: n,
                    targetPosition: -p,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(p),
                s &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionEnd")))
              : (n.setTransition(t),
                n.setTranslate(p),
                s &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionStart")),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.wrapperEl.removeEventListener(
                          "transitionend",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        (n.animating = !1),
                        s && n.emit("transitionEnd"));
                    }),
                  n.wrapperEl.addEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function E(e) {
        let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
        const { activeIndex: n, previousIndex: a } = t;
        let l = i;
        if (
          (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
          t.emit("transition".concat(r)),
          s && n !== a)
        ) {
          if ("reset" === l)
            return void t.emit("slideResetTransition".concat(r));
          t.emit("slideChangeTransition".concat(r)),
            "next" === l
              ? t.emit("slideNextTransition".concat(r))
              : t.emit("slidePrevTransition".concat(r));
        }
      }
      var T = {
        slideTo: function (e, t, s, i, r) {
          void 0 === e && (e = 0),
            void 0 === s && (s = !0),
            "string" === typeof e && (e = parseInt(e, 10));
          const n = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: d,
            slidesGrid: c,
            previousIndex: p,
            activeIndex: u,
            rtlTranslate: f,
            wrapperEl: m,
            enabled: h,
          } = n;
          if (
            (!h && !i && !r) ||
            n.destroyed ||
            (n.animating && o.preventInteractionOnTransition)
          )
            return !1;
          "undefined" === typeof t && (t = n.params.speed);
          const g = Math.min(n.params.slidesPerGroupSkip, a);
          let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
          v >= d.length && (v = d.length - 1);
          const w = -d[v];
          if (o.normalizeSlideIndex)
            for (let l = 0; l < c.length; l += 1) {
              const e = -Math.floor(100 * w),
                t = Math.floor(100 * c[l]),
                s = Math.floor(100 * c[l + 1]);
              "undefined" !== typeof c[l + 1]
                ? e >= t && e < s - (s - t) / 2
                  ? (a = l)
                  : e >= t && e < s && (a = l + 1)
                : e >= t && (a = l);
            }
          if (n.initialized && a !== u) {
            if (
              !n.allowSlideNext &&
              (f
                ? w > n.translate && w > n.minTranslate()
                : w < n.translate && w < n.minTranslate())
            )
              return !1;
            if (
              !n.allowSlidePrev &&
              w > n.translate &&
              w > n.maxTranslate() &&
              (u || 0) !== a
            )
              return !1;
          }
          let b;
          a !== (p || 0) && s && n.emit("beforeSlideChangeStart"),
            n.updateProgress(w),
            (b = a > u ? "next" : a < u ? "prev" : "reset");
          const y = n.virtual && n.params.virtual.enabled;
          if (
            !(y && r) &&
            ((f && -w === n.translate) || (!f && w === n.translate))
          )
            return (
              n.updateActiveIndex(a),
              o.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== o.effect && n.setTranslate(w),
              "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)),
              !1
            );
          if (o.cssMode) {
            const e = n.isHorizontal(),
              s = f ? w : -w;
            if (0 === t)
              y &&
                ((n.wrapperEl.style.scrollSnapType = "none"),
                (n._immediateVirtual = !0)),
                y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                  ? ((n._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      m[e ? "scrollLeft" : "scrollTop"] = s;
                    }))
                  : (m[e ? "scrollLeft" : "scrollTop"] = s),
                y &&
                  requestAnimationFrame(() => {
                    (n.wrapperEl.style.scrollSnapType = ""),
                      (n._immediateVirtual = !1);
                  });
            else {
              if (!n.support.smoothScroll)
                return (
                  (0, l.t)({
                    swiper: n,
                    targetPosition: s,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            n.setTransition(t),
            n.setTranslate(w),
            n.updateActiveIndex(a),
            n.updateSlidesClasses(),
            n.emit("beforeTransitionStart", t, i),
            n.transitionStart(s, b),
            0 === t
              ? n.transitionEnd(s, b)
              : n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(s, b));
                  }),
                n.wrapperEl.addEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, s, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === s && (s = !0),
            "string" === typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const r = this;
          if (r.destroyed) return;
          "undefined" === typeof t && (t = r.params.speed);
          const n = r.grid && r.params.grid && r.params.grid.rows > 1;
          let a = e;
          if (r.params.loop)
            if (r.virtual && r.params.virtual.enabled)
              a += r.virtual.slidesBefore;
            else {
              let e;
              if (n) {
                const t = a * r.params.grid.rows;
                e = r.slides.filter(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                )[0].column;
              } else e = r.getSlideIndexByData(a);
              const t = n
                  ? Math.ceil(r.slides.length / r.params.grid.rows)
                  : r.slides.length,
                { centeredSlides: s } = r.params;
              let l = r.params.slidesPerView;
              "auto" === l
                ? (l = r.slidesPerViewDynamic())
                : ((l = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                  s && l % 2 === 0 && (l += 1));
              let o = t - e < l;
              if (
                (s && (o = o || e < Math.ceil(l / 2)),
                i && s && "auto" !== r.params.slidesPerView && !n && (o = !1),
                o)
              ) {
                const i = s
                  ? e < r.activeIndex
                    ? "prev"
                    : "next"
                  : e - r.activeIndex - 1 < r.params.slidesPerView
                  ? "next"
                  : "prev";
                r.loopFix({
                  direction: i,
                  slideTo: !0,
                  activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                  slideRealIndex: "next" === i ? r.realIndex : void 0,
                });
              }
              if (n) {
                const e = a * r.params.grid.rows;
                a = r.slides.filter(
                  (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                )[0].column;
              } else a = r.getSlideIndexByData(a);
            }
          return (
            requestAnimationFrame(() => {
              r.slideTo(a, t, s, i);
            }),
            r
          );
        },
        slideNext: function (e, t, s) {
          void 0 === t && (t = !0);
          const i = this,
            { enabled: r, params: n, animating: a } = i;
          if (!r || i.destroyed) return i;
          "undefined" === typeof e && (e = i.params.speed);
          let l = n.slidesPerGroup;
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
            d = i.virtual && n.virtual.enabled;
          if (n.loop) {
            if (a && !d && n.loopPreventsSliding) return !1;
            if (
              (i.loopFix({ direction: "next" }),
              (i._clientLeft = i.wrapperEl.clientLeft),
              i.activeIndex === i.slides.length - 1 && n.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  i.slideTo(i.activeIndex + o, e, t, s);
                }),
                !0
              );
          }
          return n.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + o, e, t, s);
        },
        slidePrev: function (e, t, s) {
          void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              snapGrid: n,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: o,
              animating: d,
            } = i;
          if (!o || i.destroyed) return i;
          "undefined" === typeof e && (e = i.params.speed);
          const c = i.virtual && r.virtual.enabled;
          if (r.loop) {
            if (d && !c && r.loopPreventsSliding) return !1;
            i.loopFix({ direction: "prev" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = p(l ? i.translate : -i.translate),
            f = n.map((e) => p(e));
          let m = n[f.indexOf(u) - 1];
          if ("undefined" === typeof m && r.cssMode) {
            let e;
            n.forEach((t, s) => {
              u >= t && (e = s);
            }),
              "undefined" !== typeof e && (m = n[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            ("undefined" !== typeof m &&
              ((h = a.indexOf(m)),
              h < 0 && (h = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, s);
          }
          return r.loop && 0 === i.activeIndex && r.cssMode
            ? (requestAnimationFrame(() => {
                i.slideTo(h, e, t, s);
              }),
              !0)
            : i.slideTo(h, e, t, s);
        },
        slideReset: function (e, t, s) {
          void 0 === t && (t = !0);
          const i = this;
          if (!i.destroyed)
            return (
              "undefined" === typeof e && (e = i.params.speed),
              i.slideTo(i.activeIndex, e, t, s)
            );
        },
        slideToClosest: function (e, t, s, i) {
          void 0 === t && (t = !0), void 0 === i && (i = 0.5);
          const r = this;
          if (r.destroyed) return;
          "undefined" === typeof e && (e = r.params.speed);
          let n = r.activeIndex;
          const a = Math.min(r.params.slidesPerGroupSkip, n),
            l = a + Math.floor((n - a) / r.params.slidesPerGroup),
            o = r.rtlTranslate ? r.translate : -r.translate;
          if (o >= r.snapGrid[l]) {
            const e = r.snapGrid[l];
            o - e > (r.snapGrid[l + 1] - e) * i &&
              (n += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[l - 1];
            o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup);
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, r.slidesGrid.length - 1)),
            r.slideTo(n, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            n = e.clickedIndex;
          const a = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? n < e.loopedSlides - i / 2 ||
                  n > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (n = e.getSlideIndex(
                      (0, l.e)(
                        s,
                        ""
                          .concat(a, '[data-swiper-slide-index="')
                          .concat(r, '"]')
                      )[0]
                    )),
                    (0, l.n)(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n)
                : n > e.slides.length - i
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    (0, l.e)(
                      s,
                      "".concat(a, '[data-swiper-slide-index="').concat(r, '"]')
                    )[0]
                  )),
                  (0, l.n)(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n);
          } else e.slideTo(n);
        },
      };
      var x = {
        loopCreate: function (e) {
          const t = this,
            { params: s, slidesEl: i } = t;
          if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
          const r = () => {
              (0, l.e)(i, ".".concat(s.slideClass, ", swiper-slide")).forEach(
                (e, t) => {
                  e.setAttribute("data-swiper-slide-index", t);
                }
              );
            },
            n = t.grid && s.grid && s.grid.rows > 1,
            a = s.slidesPerGroup * (n ? s.grid.rows : 1),
            o = t.slides.length % a !== 0,
            d = n && t.slides.length % s.grid.rows !== 0,
            c = (e) => {
              for (let i = 0; i < e; i += 1) {
                const e = t.isElement
                  ? (0, l.c)("swiper-slide", [s.slideBlankClass])
                  : (0, l.c)("div", [s.slideClass, s.slideBlankClass]);
                t.slidesEl.append(e);
              }
            };
          if (o) {
            if (s.loopAddBlankSlides) {
              c(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides();
            } else
              (0, l.u)(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            r();
          } else if (d) {
            if (s.loopAddBlankSlides) {
              c(s.grid.rows - (t.slides.length % s.grid.rows)),
                t.recalcSlides(),
                t.updateSlides();
            } else
              (0, l.u)(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            r();
          } else r();
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: s = !0,
            direction: r,
            setTranslate: n,
            activeSlideIndex: a,
            byController: o,
            byMousewheel: d,
          } = void 0 === e ? {} : e;
          const c = this;
          if (!c.params.loop) return;
          c.emit("beforeLoopFix");
          const {
              slides: p,
              allowSlidePrev: u,
              allowSlideNext: f,
              slidesEl: m,
              params: h,
            } = c,
            { centeredSlides: g } = h;
          if (
            ((c.allowSlidePrev = !0),
            (c.allowSlideNext = !0),
            c.virtual && h.virtual.enabled)
          )
            return (
              s &&
                (h.centeredSlides || 0 !== c.snapIndex
                  ? h.centeredSlides && c.snapIndex < h.slidesPerView
                    ? c.slideTo(
                        c.virtual.slides.length + c.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : c.snapIndex === c.snapGrid.length - 1 &&
                      c.slideTo(c.virtual.slidesBefore, 0, !1, !0)
                  : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
              (c.allowSlidePrev = u),
              (c.allowSlideNext = f),
              void c.emit("loopFix")
            );
          let v = h.slidesPerView;
          "auto" === v
            ? (v = c.slidesPerViewDynamic())
            : ((v = Math.ceil(parseFloat(h.slidesPerView, 10))),
              g && v % 2 === 0 && (v += 1));
          const w = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
          let b = w;
          b % w !== 0 && (b += w - (b % w)),
            (b += h.loopAdditionalSlides),
            (c.loopedSlides = b);
          const y = c.grid && h.grid && h.grid.rows > 1;
          p.length < v + b
            ? (0, l.u)(
                "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
              )
            : y &&
              "row" === h.grid.fill &&
              (0, l.u)(
                "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
              );
          const S = [],
            E = [];
          let T = c.activeIndex;
          "undefined" === typeof a
            ? (a = c.getSlideIndex(
                p.filter((e) => e.classList.contains(h.slideActiveClass))[0]
              ))
            : (T = a);
          const x = "next" === r || !r,
            C = "prev" === r || !r;
          let M = 0,
            P = 0;
          const L = y ? Math.ceil(p.length / h.grid.rows) : p.length,
            k =
              (y ? p[a].column : a) +
              (g && "undefined" === typeof n ? -v / 2 + 0.5 : 0);
          if (k < b) {
            M = Math.max(b - k, w);
            for (let e = 0; e < b - k; e += 1) {
              const t = e - Math.floor(e / L) * L;
              if (y) {
                const e = L - t - 1;
                for (let t = p.length - 1; t >= 0; t -= 1)
                  p[t].column === e && S.push(t);
              } else S.push(L - t - 1);
            }
          } else if (k + v > L - b) {
            P = Math.max(k - (L - 2 * b), w);
            for (let e = 0; e < P; e += 1) {
              const t = e - Math.floor(e / L) * L;
              y
                ? p.forEach((e, s) => {
                    e.column === t && E.push(s);
                  })
                : E.push(t);
            }
          }
          if (
            ((c.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              c.__preventObserver__ = !1;
            }),
            C &&
              S.forEach((e) => {
                (p[e].swiperLoopMoveDOM = !0),
                  m.prepend(p[e]),
                  (p[e].swiperLoopMoveDOM = !1);
              }),
            x &&
              E.forEach((e) => {
                (p[e].swiperLoopMoveDOM = !0),
                  m.append(p[e]),
                  (p[e].swiperLoopMoveDOM = !1);
              }),
            c.recalcSlides(),
            "auto" === h.slidesPerView
              ? c.updateSlides()
              : y &&
                ((S.length > 0 && C) || (E.length > 0 && x)) &&
                c.slides.forEach((e, t) => {
                  c.grid.updateSlide(t, e, c.slides);
                }),
            h.watchSlidesProgress && c.updateSlidesOffset(),
            s)
          )
            if (S.length > 0 && C) {
              if ("undefined" === typeof t) {
                const e = c.slidesGrid[T],
                  t = c.slidesGrid[T + M] - e;
                d
                  ? c.setTranslate(c.translate - t)
                  : (c.slideTo(T + Math.ceil(M), 0, !1, !0),
                    n &&
                      ((c.touchEventsData.startTranslate =
                        c.touchEventsData.startTranslate - t),
                      (c.touchEventsData.currentTranslate =
                        c.touchEventsData.currentTranslate - t)));
              } else if (n) {
                const e = y ? S.length / h.grid.rows : S.length;
                c.slideTo(c.activeIndex + e, 0, !1, !0),
                  (c.touchEventsData.currentTranslate = c.translate);
              }
            } else if (E.length > 0 && x)
              if ("undefined" === typeof t) {
                const e = c.slidesGrid[T],
                  t = c.slidesGrid[T - P] - e;
                d
                  ? c.setTranslate(c.translate - t)
                  : (c.slideTo(T - P, 0, !1, !0),
                    n &&
                      ((c.touchEventsData.startTranslate =
                        c.touchEventsData.startTranslate - t),
                      (c.touchEventsData.currentTranslate =
                        c.touchEventsData.currentTranslate - t)));
              } else {
                const e = y ? E.length / h.grid.rows : E.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0);
              }
          if (
            ((c.allowSlidePrev = u),
            (c.allowSlideNext = f),
            c.controller && c.controller.control && !o)
          ) {
            const e = {
              slideRealIndex: t,
              direction: r,
              setTranslate: n,
              activeSlideIndex: a,
              byController: !0,
            };
            Array.isArray(c.controller.control)
              ? c.controller.control.forEach((t) => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix(
                      (0, i.A)(
                        (0, i.A)({}, e),
                        {},
                        {
                          slideTo:
                            t.params.slidesPerView === h.slidesPerView && s,
                        }
                      )
                    );
                })
              : c.controller.control instanceof c.constructor &&
                c.controller.control.params.loop &&
                c.controller.control.loopFix(
                  (0, i.A)(
                    (0, i.A)({}, e),
                    {},
                    {
                      slideTo:
                        c.controller.control.params.slidesPerView ===
                          h.slidesPerView && s,
                    }
                  )
                );
          }
          c.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: s } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const i = [];
          e.slides.forEach((e) => {
            const t =
              "undefined" === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            i[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            i.forEach((e) => {
              s.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      function C(e, t, s) {
        const i = (0, a.a)(),
          { params: r } = e,
          n = r.edgeSwipeDetection,
          l = r.edgeSwipeThreshold;
        return (
          !n ||
          !(s <= l || s >= i.innerWidth - l) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function M(e) {
        const t = this,
          s = (0, a.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const r = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type)
          return void C(t, i, i.targetTouches[0].pageX);
        const { params: n, touches: o, enabled: d } = t;
        if (!d) return;
        if (!n.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === n.touchEventsTarget && !(0, l.v)(c, t.wrapperEl))
          return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        const p = !!n.noSwipingClass && "" !== n.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        p && i.target && i.target.shadowRoot && u && (c = u[0]);
        const f = n.noSwipingSelector
            ? n.noSwipingSelector
            : ".".concat(n.noSwipingClass),
          m = !(!i.target || !i.target.shadowRoot);
        if (
          n.noSwiping &&
          (m
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(s) {
                    if (!s || s === (0, a.g)() || s === (0, a.a)()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode
                      ? i || t(s.getRootNode().host)
                      : null;
                  })(t)
                );
              })(f, c)
            : c.closest(f))
        )
          return void (t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
        (o.currentX = i.pageX), (o.currentY = i.pageY);
        const h = o.currentX,
          g = o.currentY;
        if (!C(t, i, h)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (o.startX = h),
          (o.startY = g),
          (r.touchStartTime = (0, l.d)()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          n.threshold > 0 && (r.allowThresholdMove = !1);
        let v = !0;
        c.matches(r.focusableElements) &&
          ((v = !1), "SELECT" === c.nodeName && (r.isTouched = !1)),
          s.activeElement &&
            s.activeElement.matches(r.focusableElements) &&
            s.activeElement !== c &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !c.matches(r.focusableElements))) &&
            s.activeElement.blur();
        const w = v && t.allowTouchMove && n.touchStartPreventDefault;
        (!n.touchStartForcePreventDefault && !w) ||
          c.isContentEditable ||
          i.preventDefault(),
          n.freeMode &&
            n.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !n.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", i);
      }
      function P(e) {
        const t = (0, a.g)(),
          s = this,
          i = s.touchEventsData,
          { params: r, touches: n, rtlTranslate: o, enabled: d } = s;
        if (!d) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let c,
          p = e;
        if (
          (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)
        ) {
          if (null !== i.touchId) return;
          if (p.pointerId !== i.pointerId) return;
        }
        if ("touchmove" === p.type) {
          if (
            ((c = [...p.changedTouches].filter(
              (e) => e.identifier === i.touchId
            )[0]),
            !c || c.identifier !== i.touchId)
          )
            return;
        } else c = p;
        if (!i.isTouched)
          return void (
            i.startMoving &&
            i.isScrolling &&
            s.emit("touchMoveOpposite", p)
          );
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper)
          return (n.startX = u), void (n.startY = f);
        if (!s.allowTouchMove)
          return (
            p.target.matches(i.focusableElements) || (s.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(n, {
                startX: u,
                startY: f,
                currentX: u,
                currentY: f,
              }),
              (i.touchStartTime = (0, l.d)()))
            )
          );
        if (r.touchReleaseOnEdges && !r.loop)
          if (s.isVertical()) {
            if (
              (f < n.startY && s.translate <= s.maxTranslate()) ||
              (f > n.startY && s.translate >= s.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < n.startX && s.translate <= s.maxTranslate()) ||
            (u > n.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          (t.activeElement &&
            t.activeElement.matches(i.focusableElements) &&
            t.activeElement !== p.target &&
            "mouse" !== p.pointerType &&
            t.activeElement.blur(),
          t.activeElement &&
            p.target === t.activeElement &&
            p.target.matches(i.focusableElements))
        )
          return (i.isMoved = !0), void (s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p),
          (n.previousX = n.currentX),
          (n.previousY = n.currentY),
          (n.currentX = u),
          (n.currentY = f);
        const m = n.currentX - n.startX,
          h = n.currentY - n.startY;
        if (
          s.params.threshold &&
          Math.sqrt(m ** 2 + h ** 2) < s.params.threshold
        )
          return;
        if ("undefined" === typeof i.isScrolling) {
          let e;
          (s.isHorizontal() && n.currentY === n.startY) ||
          (s.isVertical() && n.currentX === n.startX)
            ? (i.isScrolling = !1)
            : m * m + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(m))) / Math.PI),
              (i.isScrolling = s.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && s.emit("touchMoveOpposite", p),
          "undefined" === typeof i.startMoving &&
            ((n.currentX === n.startX && n.currentY === n.startY) ||
              (i.startMoving = !0)),
          i.isScrolling ||
            ("touchmove" === p.type && i.preventTouchMoveFromPointerMove))
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
          !r.cssMode && p.cancelable && p.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? m : h,
          v = s.isHorizontal()
            ? n.currentX - n.previousX
            : n.currentY - n.previousY;
        r.oneWayMovement &&
          ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
          (n.diff = g),
          (g *= r.touchRatio),
          o && ((g = -g), (v = -v));
        const w = s.touchesDirection;
        (s.swipeDirection = g > 0 ? "prev" : "next"),
          (s.touchesDirection = v > 0 ? "prev" : "next");
        const b = s.params.loop && !r.cssMode,
          y =
            ("next" === s.touchesDirection && s.allowSlideNext) ||
            ("prev" === s.touchesDirection && s.allowSlidePrev);
        if (!i.isMoved) {
          if (
            (b && y && s.loopFix({ direction: s.swipeDirection }),
            (i.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            s.wrapperEl.dispatchEvent(e);
          }
          (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", p);
        }
        if (
          (new Date().getTime(),
          i.isMoved &&
            i.allowThresholdMove &&
            w !== s.touchesDirection &&
            b &&
            y &&
            Math.abs(g) >= 1)
        )
          return (
            Object.assign(n, {
              startX: u,
              startY: f,
              currentX: u,
              currentY: f,
              startTranslate: i.currentTranslate,
            }),
            (i.loopSwapReset = !0),
            void (i.startTranslate = i.currentTranslate)
          );
        s.emit("sliderMove", p),
          (i.isMoved = !0),
          (i.currentTranslate = g + i.startTranslate);
        let S = !0,
          E = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (E = 0),
          g > 0
            ? (b &&
                y &&
                i.allowThresholdMove &&
                i.currentTranslate >
                  (r.centeredSlides
                    ? s.minTranslate() -
                      s.slidesSizesGrid[s.activeIndex + 1] -
                      ("auto" !== r.slidesPerView &&
                      s.slides.length - r.slidesPerView >= 2
                        ? s.slidesSizesGrid[s.activeIndex + 1] +
                          s.params.spaceBetween
                        : 0) -
                      s.params.spaceBetween
                    : s.minTranslate()) &&
                s.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              i.currentTranslate > s.minTranslate() &&
                ((S = !1),
                r.resistance &&
                  (i.currentTranslate =
                    s.minTranslate() -
                    1 +
                    (-s.minTranslate() + i.startTranslate + g) ** E)))
            : g < 0 &&
              (b &&
                y &&
                i.allowThresholdMove &&
                i.currentTranslate <
                  (r.centeredSlides
                    ? s.maxTranslate() +
                      s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                      s.params.spaceBetween +
                      ("auto" !== r.slidesPerView &&
                      s.slides.length - r.slidesPerView >= 2
                        ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                          s.params.spaceBetween
                        : 0)
                    : s.maxTranslate()) &&
                s.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    s.slides.length -
                    ("auto" === r.slidesPerView
                      ? s.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(r.slidesPerView, 10))),
                }),
              i.currentTranslate < s.maxTranslate() &&
                ((S = !1),
                r.resistance &&
                  (i.currentTranslate =
                    s.maxTranslate() +
                    1 -
                    (s.maxTranslate() - i.startTranslate - g) ** E))),
          S && (p.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (n.startX = n.currentX),
              (n.startY = n.currentY),
              (i.currentTranslate = i.startTranslate),
              void (n.diff = s.isHorizontal()
                ? n.currentX - n.startX
                : n.currentY - n.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
            r.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          r.freeMode &&
            r.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(i.currentTranslate),
          s.setTranslate(i.currentTranslate));
      }
      function L(e) {
        const t = this,
          s = t.touchEventsData;
        let i,
          r = e;
        r.originalEvent && (r = r.originalEvent);
        if ("touchend" === r.type || "touchcancel" === r.type) {
          if (
            ((i = [...r.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]),
            !i || i.identifier !== s.touchId)
          )
            return;
        } else {
          if (null !== s.touchId) return;
          if (r.pointerId !== s.pointerId) return;
          i = r;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(r.type)
        ) {
          if (
            !(
              ["pointercancel", "contextmenu"].includes(r.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (s.pointerId = null), (s.touchId = null);
        const {
          params: n,
          touches: a,
          rtlTranslate: o,
          slidesGrid: d,
          enabled: c,
        } = t;
        if (!c) return;
        if (!n.simulateTouch && "mouse" === r.pointerType) return;
        if (
          (s.allowTouchCallbacks && t.emit("touchEnd", r),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && n.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        n.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const p = (0, l.d)(),
          u = p - s.touchStartTime;
        if (t.allowClick) {
          const e = r.path || (r.composedPath && r.composedPath());
          t.updateClickedSlide((e && e[0]) || r.target, e),
            t.emit("tap click", r),
            u < 300 &&
              p - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", r);
        }
        if (
          ((s.lastClickTime = (0, l.d)()),
          (0, l.n)(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            (0 === a.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let f;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (f = n.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          n.cssMode)
        )
          return;
        if (n.freeMode && n.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: f });
        const m = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          g = t.slidesSizesGrid[0];
        for (
          let l = 0;
          l < d.length;
          l += l < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          const e = l < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          "undefined" !== typeof d[l + e]
            ? (m || (f >= d[l] && f < d[l + e])) &&
              ((h = l), (g = d[l + e] - d[l]))
            : (m || f >= d[l]) &&
              ((h = l), (g = d[d.length - 1] - d[d.length - 2]));
        }
        let v = null,
          w = null;
        n.rewind &&
          (t.isBeginning
            ? (w =
                n.virtual && n.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (v = 0));
        const b = (f - d[h]) / g,
          y = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (u > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (b >= n.longSwipesRatio
              ? t.slideTo(n.rewind && t.isEnd ? v : h + y)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (b > 1 - n.longSwipesRatio
                ? t.slideTo(h + y)
                : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
                ? t.slideTo(w)
                : t.slideTo(h));
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
            ? r.target === t.navigation.nextEl
              ? t.slideTo(h + y)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y),
              "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h));
        }
      }
      function k() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const l = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function I(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function O() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
          r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function A(e) {
        const t = this;
        v(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function z() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      const _ = (e, t) => {
        const s = (0, a.g)(),
          { params: i, el: r, wrapperEl: n, device: l } = e,
          o = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          c = t;
        r &&
          "string" !== typeof r &&
          (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o,
          }),
          r[d]("touchstart", e.onTouchStart, { passive: !1 }),
          r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
          s[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
          s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
          s[d]("touchend", e.onTouchEnd, { passive: !0 }),
          s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
          s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
          s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
          s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
          s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
          s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
          (i.preventClicks || i.preventClicksPropagation) &&
            r[d]("click", e.onClick, !0),
          i.cssMode && n[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[c](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                k,
                !0
              )
            : e[c]("observerUpdate", k, !0),
          r[d]("load", e.onLoad, { capture: !0 }));
      };
      const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var G = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function N(e, t) {
        return function (s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            r = s[i];
          "object" === typeof r && null !== r
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "navigation" === i &&
                e[i] &&
                e[i].enabled &&
                !e[i].prevEl &&
                !e[i].nextEl &&
                (e[i].auto = !0),
              ["pagination", "scrollbar"].indexOf(i) >= 0 &&
                e[i] &&
                e[i].enabled &&
                !e[i].el &&
                (e[i].auto = !0),
              i in e && "enabled" in r
                ? ("object" !== typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  (0, l.w)(t, s))
                : (0, l.w)(t, s))
            : (0, l.w)(t, s);
        };
      }
      const B = {
          eventsEmitter: m,
          update: y,
          translate: S,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode ||
                ((s.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
                (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              i.cssMode ||
                (i.autoHeight && s.updateAutoHeight(),
                E({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              (s.animating = !1),
                i.cssMode ||
                  (s.setTransition(0),
                  E({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: T,
          loop: x,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (s.style.cursor = "move"),
                (s.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                { params: t } = e;
              (e.onTouchStart = M.bind(e)),
                (e.onTouchMove = P.bind(e)),
                (e.onTouchEnd = L.bind(e)),
                (e.onDocumentTouchStart = z.bind(e)),
                t.cssMode && (e.onScroll = O.bind(e)),
                (e.onClick = I.bind(e)),
                (e.onLoad = A.bind(e)),
                _(e, "on");
            },
            detachEvents: function () {
              _(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: s, params: i, el: r } = e,
                n = i.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const o = (a in n ? n[a] : void 0) || e.originalParams,
                d = D(e, i),
                c = D(e, o),
                p = e.params.grabCursor,
                u = o.grabCursor,
                f = i.enabled;
              d && !c
                ? (r.classList.remove(
                    "".concat(i.containerModifierClass, "grid"),
                    "".concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.classList.add("".concat(i.containerModifierClass, "grid")),
                  ((o.grid.fill && "column" === o.grid.fill) ||
                    (!o.grid.fill && "column" === i.grid.fill)) &&
                    r.classList.add(
                      "".concat(i.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                p && !u ? e.unsetGrabCursor() : !p && u && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if ("undefined" === typeof o[t]) return;
                  const s = i[t] && i[t].enabled,
                    r = o[t] && o[t].enabled;
                  s && !r && e[t].disable(), !s && r && e[t].enable();
                });
              const m = o.direction && o.direction !== i.direction,
                h = i.loop && (o.slidesPerView !== i.slidesPerView || m),
                g = i.loop;
              m && s && e.changeDirection(), (0, l.w)(e.params, o);
              const v = e.params.enabled,
                w = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !v ? e.disable() : !f && v && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", o),
                s &&
                  (h
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && w
                    ? (e.loopCreate(t), e.updateSlides())
                    : g && !w && e.loopDestroy()),
                e.emit("breakpoint", o);
            },
            getBreakpoint: function (e, t, s) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !s))
              )
                return;
              let i = !1;
              const r = (0, a.a)(),
                n = "window" === t ? r.innerHeight : s.clientHeight,
                l = Object.keys(e).map((e) => {
                  if ("string" === typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: n * t, point: e };
                  }
                  return { value: e, point: e };
                });
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let a = 0; a < l.length; a += 1) {
                const { point: e, value: n } = l[a];
                "window" === t
                  ? r.matchMedia("(min-width: ".concat(n, "px)")).matches &&
                    (i = e)
                  : n <= s.clientWidth && (i = e);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: i } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: s, rtl: i, el: r, device: n } = e,
                a = (function (e, t) {
                  const s = [];
                  return (
                    e.forEach((e) => {
                      "object" === typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && s.push(t + i);
                          })
                        : "string" === typeof e && s.push(t + e);
                    }),
                    s
                  );
                })(
                  [
                    "initialized",
                    s.direction,
                    { "free-mode": e.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: i },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                      "grid-column":
                        s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                    },
                    { android: n.android },
                    { ios: n.ios },
                    { "css-mode": s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                    { "watch-progress": s.watchSlidesProgress },
                  ],
                  s.containerModifierClass
                );
              t.push(...a), r.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e &&
                "string" !== typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        F = {};
      class V {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
            i[r] = arguments[r];
          1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
            t || (t = {}),
            (t = (0, l.w)({}, t)),
            e && !t.el && (t.el = e);
          const n = (0, a.g)();
          if (
            t.el &&
            "string" === typeof t.el &&
            n.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              n.querySelectorAll(t.el).forEach((s) => {
                const i = (0, l.w)({}, t, { el: s });
                e.push(new V(i));
              }),
              e
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = p()),
            (o.device = u({ userAgent: t.userAgent })),
            (o.browser = f()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              o.modules.push(...t.modules);
          const d = {};
          o.modules.forEach((e) => {
            e({
              params: t,
              swiper: o,
              extendParams: N(t, d),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const c = (0, l.w)({}, G, d);
          return (
            (o.params = (0, l.w)({}, c, F, t)),
            (o.originalParams = (0, l.w)({}, o.params)),
            (o.passedParams = (0, l.w)({}, t)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach((e) => {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === o.params.direction,
              isVertical: () => "vertical" === o.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: s } = this,
            i = (0, l.e)(t, ".".concat(s.slideClass, ", swiper-slide")),
            r = (0, l.h)(i[0]);
          return (0, l.h)(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = (0, l.e)(e, ".".concat(t.slideClass, ", swiper-slide"));
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
          s.translateTo(r, "undefined" === typeof t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: a,
            activeIndex: l,
          } = this;
          let o = 1;
          if ("number" === typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e,
              t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for (let s = l + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += Math.ceil(i[s].swiperSlideSize)),
                (o += 1),
                t > a && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let d = l + 1; d < i.length; d += 1) {
              (t ? r[d] + n[d] - r[l] < a : r[d] - r[l] < a) && (o += 1);
            }
          else
            for (let d = l - 1; d >= 0; d -= 1) {
              r[l] - r[d] < a && (o += 1);
            }
          return o;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          if (
            (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && v(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            i(), s.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
              e.isEnd &&
              !s.centeredSlides
            ) {
              const t =
                e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.el.classList.remove(
                "".concat(s.params.containerModifierClass).concat(i)
              ),
              s.el.classList.add(
                "".concat(s.params.containerModifierClass).concat(e)
              ),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if (("string" === typeof s && (s = document.querySelector(s)), !s))
            return !1;
          (s.swiper = t),
            s.parentNode &&
              s.parentNode.host &&
              s.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const i = () =>
            ".".concat(
              (t.params.wrapperClass || "").trim().split(" ").join(".")
            );
          let r = (() => {
            if (s && s.shadowRoot && s.shadowRoot.querySelector) {
              return s.shadowRoot.querySelector(i());
            }
            return (0, l.e)(s, i())[0];
          })();
          return (
            !r &&
              t.params.createElements &&
              ((r = (0, l.c)("div", t.params.wrapperClass)),
              s.append(r),
              (0, l.e)(s, ".".concat(t.params.slideClass)).forEach((e) => {
                r.append(e);
              })),
            Object.assign(t, {
              el: s,
              wrapperEl: r,
              slidesEl:
                t.isElement && !s.parentNode.host.slideSlots
                  ? s.parentNode.host
                  : r,
              hostEl: t.isElement ? s.parentNode.host : s,
              mounted: !0,
              rtl:
                "rtl" === s.dir.toLowerCase() ||
                "rtl" === (0, l.p)(s, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === s.dir.toLowerCase() ||
                  "rtl" === (0, l.p)(s, "direction")),
              wrongRTL: "-webkit-box" === (0, l.p)(r, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e) => {
              e.complete
                ? v(t, e)
                : e.addEventListener("load", (e) => {
                    v(t, e.target);
                  });
            }),
            b(t),
            (t.initialized = !0),
            b(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            { params: i, el: r, wrapperEl: n, slides: a } = s;
          return (
            "undefined" === typeof s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                r && "string" !== typeof r && r.removeAttribute("style"),
                n && n.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      i.slideVisibleClass,
                      i.slideFullyVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                (s.el && "string" !== typeof s.el && (s.el.swiper = null),
                (0, l.x)(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, l.w)(F, e);
        }
        static get extendedDefaults() {
          return F;
        }
        static get defaults() {
          return G;
        }
        static installModule(e) {
          V.prototype.__modules__ || (V.prototype.__modules__ = []);
          const t = V.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => V.installModule(e)), V)
            : (V.installModule(e), V);
        }
      }
      Object.keys(B).forEach((e) => {
        Object.keys(B[e]).forEach((t) => {
          V.prototype[t] = B[e][t];
        });
      }),
        V.use([
          function (e) {
            let { swiper: t, on: s, emit: i } = e;
            const r = (0, a.a)();
            let n = null,
              l = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              d = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            s("init", () => {
              t.params.resizeObserver && "undefined" !== typeof r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((n = new ResizeObserver((e) => {
                    l = r.requestAnimationFrame(() => {
                      const { width: s, height: i } = t;
                      let r = s,
                        n = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: s,
                          contentRect: i,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((r = i ? i.width : (s[0] || s).inlineSize),
                          (n = i ? i.height : (s[0] || s).blockSize));
                      }),
                        (r === s && n === i) || o();
                    });
                  })),
                  n.observe(t.el))
                : (r.addEventListener("resize", o),
                  r.addEventListener("orientationchange", d));
            }),
              s("destroy", () => {
                l && r.cancelAnimationFrame(l),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                  r.removeEventListener("resize", o),
                  r.removeEventListener("orientationchange", d);
              });
          },
          function (e) {
            let { swiper: t, extendParams: s, on: i, emit: r } = e;
            const n = [],
              o = (0, a.a)(),
              d = function (e, s) {
                void 0 === s && (s = {});
                const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const s = function () {
                      r("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(s)
                      : o.setTimeout(s, 0);
                  }
                );
                i.observe(e, {
                  attributes:
                    "undefined" === typeof s.attributes || s.attributes,
                  childList:
                    t.isElement ||
                    ("undefined" === typeof s.childList || s).childList,
                  characterData:
                    "undefined" === typeof s.characterData || s.characterData,
                }),
                  n.push(i);
              };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = (0, l.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const j = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function R(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function H(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => s.indexOf(e) < 0)
          .forEach((s) => {
            "undefined" === typeof e[s]
              ? (e[s] = t[s])
              : R(t[s]) && R(e[s]) && Object.keys(t[s]).length > 0
              ? t[s].__swiper__
                ? (e[s] = t[s])
                : H(e[s], t[s])
              : (e[s] = t[s]);
          });
      }
      function q(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function W(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function Y(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function X(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          s = [];
        return (
          t.forEach((e) => {
            s.indexOf(e) < 0 && s.push(e);
          }),
          s.join(" ")
        );
      }
      function U(e) {
        return (
          void 0 === e && (e = ""),
          e
            ? e.includes("swiper-wrapper")
              ? e
              : "swiper-wrapper ".concat(e)
            : "swiper-wrapper"
        );
      }
      const K = ["className", "tag", "wrapperTag", "children", "onSwiper"],
        Z = [
          "tag",
          "children",
          "className",
          "swiper",
          "zoom",
          "lazy",
          "virtualIndex",
          "swiperSlideIndex",
        ];
      function $() {
        return (
          ($ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = arguments[t];
                  for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
                }
                return e;
              }),
          $.apply(this, arguments)
        );
      }
      function J(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function Q(e) {
        const t = [];
        return (
          n.Children.toArray(e).forEach((e) => {
            J(e)
              ? t.push(e)
              : e.props &&
                e.props.children &&
                Q(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function ee(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          n.Children.toArray(e).forEach((e) => {
            if (J(e)) t.push(e);
            else if (e.props && e.props.slot && s[e.props.slot])
              s[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const i = Q(e.props.children);
              i.length > 0
                ? i.forEach((e) => t.push(e))
                : s["container-end"].push(e);
            } else s["container-end"].push(e);
          }),
          { slides: t, slots: s }
        );
      }
      function te(e, t) {
        return "undefined" === typeof window
          ? (0, n.useEffect)(e, t)
          : (0, n.useLayoutEffect)(e, t);
      }
      const se = (0, n.createContext)(null),
        ie = (0, n.createContext)(null),
        re = (0, n.forwardRef)(function (e, t) {
          let s = void 0 === e ? {} : e,
            {
              className: a,
              tag: l = "div",
              wrapperTag: o = "div",
              children: d,
              onSwiper: c,
            } = s,
            p = (0, r.A)(s, K),
            u = !1;
          const [f, m] = (0, n.useState)("swiper"),
            [h, g] = (0, n.useState)(null),
            [v, w] = (0, n.useState)(!1),
            b = (0, n.useRef)(!1),
            y = (0, n.useRef)(null),
            S = (0, n.useRef)(null),
            E = (0, n.useRef)(null),
            T = (0, n.useRef)(null),
            x = (0, n.useRef)(null),
            C = (0, n.useRef)(null),
            M = (0, n.useRef)(null),
            P = (0, n.useRef)(null),
            {
              params: L,
              passedParams: k,
              rest: I,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const s = { on: {} },
                i = {},
                r = {};
              H(s, G), (s._emitClasses = !0), (s.init = !1);
              const n = {},
                a = j.map((e) => e.replace(/_/, "")),
                l = Object.assign({}, e);
              return (
                Object.keys(l).forEach((l) => {
                  "undefined" !== typeof e[l] &&
                    (a.indexOf(l) >= 0
                      ? R(e[l])
                        ? ((s[l] = {}),
                          (r[l] = {}),
                          H(s[l], e[l]),
                          H(r[l], e[l]))
                        : ((s[l] = e[l]), (r[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l]
                      ? t
                        ? (i[
                            "".concat(l[2].toLowerCase()).concat(l.substr(3))
                          ] = e[l])
                        : (s.on[
                            "".concat(l[2].toLowerCase()).concat(l.substr(3))
                          ] = e[l])
                      : (n[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e];
                }),
                { params: s, passedParams: r, rest: n, events: i }
              );
            })(p),
            { slides: A, slots: z } = ee(d),
            _ = () => {
              w(!v);
            };
          Object.assign(L.on, {
            _containerClasses(e, t) {
              m(t);
            },
          });
          const D = () => {
            Object.assign(L.on, O), (u = !0);
            const e = (0, i.A)({}, L);
            if (
              (delete e.wrapperClass,
              (S.current = new V(e)),
              S.current.virtual && S.current.params.virtual.enabled)
            ) {
              S.current.virtual.slides = A;
              const e = {
                cache: !1,
                slides: A,
                renderExternal: g,
                renderExternalUpdate: !1,
              };
              H(S.current.params.virtual, e),
                H(S.current.originalParams.virtual, e);
            }
          };
          y.current || D(), S.current && S.current.on("_beforeBreakpoint", _);
          return (
            (0, n.useEffect)(() => () => {
              S.current && S.current.off("_beforeBreakpoint", _);
            }),
            (0, n.useEffect)(() => {
              !b.current &&
                S.current &&
                (S.current.emitSlidesClasses(), (b.current = !0));
            }),
            te(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  S.current.destroyed && D(),
                  (function (e, t) {
                    let {
                      el: s,
                      nextEl: i,
                      prevEl: r,
                      paginationEl: n,
                      scrollbarEl: a,
                      swiper: l,
                    } = e;
                    q(t) &&
                      i &&
                      r &&
                      ((l.params.navigation.nextEl = i),
                      (l.originalParams.navigation.nextEl = i),
                      (l.params.navigation.prevEl = r),
                      (l.originalParams.navigation.prevEl = r)),
                      W(t) &&
                        n &&
                        ((l.params.pagination.el = n),
                        (l.originalParams.pagination.el = n)),
                      Y(t) &&
                        a &&
                        ((l.params.scrollbar.el = a),
                        (l.originalParams.scrollbar.el = a)),
                      l.init(s);
                  })(
                    {
                      el: y.current,
                      nextEl: x.current,
                      prevEl: C.current,
                      paginationEl: M.current,
                      scrollbarEl: P.current,
                      swiper: S.current,
                    },
                    L
                  ),
                  c && !S.current.destroyed && c(S.current),
                  () => {
                    S.current &&
                      !S.current.destroyed &&
                      S.current.destroy(!0, !1);
                  }
                );
            }, []),
            te(() => {
              !u &&
                O &&
                S.current &&
                Object.keys(O).forEach((e) => {
                  S.current.on(e, O[e]);
                });
              const e = (function (e, t, s, i, r) {
                const n = [];
                if (!t) return n;
                const a = (e) => {
                  n.indexOf(e) < 0 && n.push(e);
                };
                if (s && i) {
                  const e = i.map(r),
                    t = s.map(r);
                  e.join("") !== t.join("") && a("children"),
                    i.length !== s.length && a("children");
                }
                return (
                  j
                    .filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((s) => {
                      if (s in e && s in t)
                        if (R(e[s]) && R(t[s])) {
                          const i = Object.keys(e[s]),
                            r = Object.keys(t[s]);
                          i.length !== r.length
                            ? a(s)
                            : (i.forEach((i) => {
                                e[s][i] !== t[s][i] && a(s);
                              }),
                              r.forEach((i) => {
                                e[s][i] !== t[s][i] && a(s);
                              }));
                        } else e[s] !== t[s] && a(s);
                    }),
                  n
                );
              })(k, E.current, A, T.current, (e) => e.key);
              return (
                (E.current = k),
                (T.current = A),
                e.length &&
                  S.current &&
                  !S.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: s,
                      passedParams: i,
                      changedParams: r,
                      nextEl: n,
                      prevEl: a,
                      scrollbarEl: l,
                      paginationEl: o,
                    } = e;
                    const d = r.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: c,
                        pagination: p,
                        navigation: u,
                        scrollbar: f,
                        virtual: m,
                        thumbs: h,
                      } = t;
                    let g, v, w, b, y, S, E, T;
                    r.includes("thumbs") &&
                      i.thumbs &&
                      i.thumbs.swiper &&
                      !i.thumbs.swiper.destroyed &&
                      c.thumbs &&
                      (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
                      (g = !0),
                      r.includes("controller") &&
                        i.controller &&
                        i.controller.control &&
                        c.controller &&
                        !c.controller.control &&
                        (v = !0),
                      r.includes("pagination") &&
                        i.pagination &&
                        (i.pagination.el || o) &&
                        (c.pagination || !1 === c.pagination) &&
                        p &&
                        !p.el &&
                        (w = !0),
                      r.includes("scrollbar") &&
                        i.scrollbar &&
                        (i.scrollbar.el || l) &&
                        (c.scrollbar || !1 === c.scrollbar) &&
                        f &&
                        !f.el &&
                        (b = !0),
                      r.includes("navigation") &&
                        i.navigation &&
                        (i.navigation.prevEl || a) &&
                        (i.navigation.nextEl || n) &&
                        (c.navigation || !1 === c.navigation) &&
                        u &&
                        !u.prevEl &&
                        !u.nextEl &&
                        (y = !0);
                    const x = (e) => {
                      t[e] &&
                        (t[e].destroy(),
                        "navigation" === e
                          ? (t.isElement &&
                              (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (c[e].prevEl = void 0),
                            (c[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (c[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    r.includes("loop") &&
                      t.isElement &&
                      (c.loop && !i.loop
                        ? (S = !0)
                        : !c.loop && i.loop
                        ? (E = !0)
                        : (T = !0)),
                      d.forEach((e) => {
                        if (R(c[e]) && R(i[e]))
                          Object.assign(c[e], i[e]),
                            ("navigation" !== e &&
                              "pagination" !== e &&
                              "scrollbar" !== e) ||
                              !("enabled" in i[e]) ||
                              i[e].enabled ||
                              x(e);
                        else {
                          const t = i[e];
                          (!0 !== t && !1 !== t) ||
                          ("navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e)
                            ? (c[e] = i[e])
                            : !1 === t && x(e);
                        }
                      }),
                      d.includes("controller") &&
                        !v &&
                        t.controller &&
                        t.controller.control &&
                        c.controller &&
                        c.controller.control &&
                        (t.controller.control = c.controller.control),
                      r.includes("children") && s && m && c.virtual.enabled
                        ? ((m.slides = s), m.update(!0))
                        : r.includes("virtual") &&
                          m &&
                          c.virtual.enabled &&
                          (s && (m.slides = s), m.update(!0)),
                      r.includes("children") && s && c.loop && (T = !0),
                      g && h.init() && h.update(!0);
                    v && (t.controller.control = c.controller.control),
                      w &&
                        (!t.isElement ||
                          (o && "string" !== typeof o) ||
                          ((o = document.createElement("div")),
                          o.classList.add("swiper-pagination"),
                          o.part.add("pagination"),
                          t.el.appendChild(o)),
                        o && (c.pagination.el = o),
                        p.init(),
                        p.render(),
                        p.update()),
                      b &&
                        (!t.isElement ||
                          (l && "string" !== typeof l) ||
                          ((l = document.createElement("div")),
                          l.classList.add("swiper-scrollbar"),
                          l.part.add("scrollbar"),
                          t.el.appendChild(l)),
                        l && (c.scrollbar.el = l),
                        f.init(),
                        f.updateSize(),
                        f.setTranslate()),
                      y &&
                        (t.isElement &&
                          ((n && "string" !== typeof n) ||
                            ((n = document.createElement("div")),
                            n.classList.add("swiper-button-next"),
                            (n.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            n.part.add("button-next"),
                            t.el.appendChild(n)),
                          (a && "string" !== typeof a) ||
                            ((a = document.createElement("div")),
                            a.classList.add("swiper-button-prev"),
                            (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            a.part.add("button-prev"),
                            t.el.appendChild(a))),
                        n && (c.navigation.nextEl = n),
                        a && (c.navigation.prevEl = a),
                        u.init(),
                        u.update()),
                      r.includes("allowSlideNext") &&
                        (t.allowSlideNext = i.allowSlideNext),
                      r.includes("allowSlidePrev") &&
                        (t.allowSlidePrev = i.allowSlidePrev),
                      r.includes("direction") &&
                        t.changeDirection(i.direction, !1),
                      (S || T) && t.loopDestroy(),
                      (E || T) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: S.current,
                    slides: A,
                    passedParams: k,
                    changedParams: e,
                    nextEl: x.current,
                    prevEl: C.current,
                    scrollbarEl: P.current,
                    paginationEl: M.current,
                  }),
                () => {
                  O &&
                    S.current &&
                    Object.keys(O).forEach((e) => {
                      S.current.off(e, O[e]);
                    });
                }
              );
            }),
            te(() => {
              var e;
              !(e = S.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            }, [h]),
            n.createElement(
              l,
              $(
                {
                  ref: y,
                  className: X("".concat(f).concat(a ? " ".concat(a) : "")),
                },
                I
              ),
              n.createElement(
                ie.Provider,
                { value: S.current },
                z["container-start"],
                n.createElement(
                  o,
                  { className: U(L.wrapperClass) },
                  z["wrapper-start"],
                  L.virtual
                    ? (function (e, t, s) {
                        if (!s) return null;
                        const i = (e) => {
                            let s = e;
                            return (
                              e < 0
                                ? (s = t.length + e)
                                : s >= t.length && (s -= t.length),
                              s
                            );
                          },
                          r = e.isHorizontal()
                            ? {
                                [e.rtlTranslate ? "right" : "left"]: "".concat(
                                  s.offset,
                                  "px"
                                ),
                              }
                            : { top: "".concat(s.offset, "px") },
                          { from: a, to: l } = s,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let n = o; n < d; n += 1)
                          n >= a && n <= l && c.push(t[i(n)]);
                        return c.map((t, s) =>
                          n.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key:
                              t.props.virtualIndex ||
                              t.key ||
                              "slide-".concat(s),
                          })
                        );
                      })(S.current, A, h)
                    : A.map((e, t) =>
                        n.cloneElement(e, {
                          swiper: S.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  z["wrapper-end"]
                ),
                q(L) &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("div", {
                      ref: C,
                      className: "swiper-button-prev",
                    }),
                    n.createElement("div", {
                      ref: x,
                      className: "swiper-button-next",
                    })
                  ),
                Y(L) &&
                  n.createElement("div", {
                    ref: P,
                    className: "swiper-scrollbar",
                  }),
                W(L) &&
                  n.createElement("div", {
                    ref: M,
                    className: "swiper-pagination",
                  }),
                z["container-end"]
              )
            )
          );
        });
      re.displayName = "Swiper";
      const ne = (0, n.forwardRef)(function (e, t) {
        let s = void 0 === e ? {} : e,
          {
            tag: i = "div",
            children: a,
            className: l = "",
            swiper: o,
            zoom: d,
            lazy: c,
            virtualIndex: p,
            swiperSlideIndex: u,
          } = s,
          f = (0, r.A)(s, Z);
        const m = (0, n.useRef)(null),
          [h, g] = (0, n.useState)("swiper-slide"),
          [v, w] = (0, n.useState)(!1);
        function b(e, t, s) {
          t === m.current && g(s);
        }
        te(() => {
          if (
            ("undefined" !== typeof u && (m.current.swiperSlideIndex = u),
            t && (t.current = m.current),
            m.current && o)
          ) {
            if (!o.destroyed)
              return (
                o.on("_slideClass", b),
                () => {
                  o && o.off("_slideClass", b);
                }
              );
            "swiper-slide" !== h && g("swiper-slide");
          }
        }),
          te(() => {
            o && m.current && !o.destroyed && g(o.getSlideClasses(m.current));
          }, [o]);
        const y = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          S = () => ("function" === typeof a ? a(y) : a);
        return n.createElement(
          i,
          $(
            {
              ref: m,
              className: X("".concat(h).concat(l ? " ".concat(l) : "")),
              "data-swiper-slide-index": p,
              onLoad: () => {
                w(!0);
              },
            },
            f
          ),
          d &&
            n.createElement(
              se.Provider,
              { value: y },
              n.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof d ? d : void 0,
                },
                S(),
                c &&
                  !v &&
                  n.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !d &&
            n.createElement(
              se.Provider,
              { value: y },
              S(),
              c &&
                !v &&
                n.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      ne.displayName = "SwiperSlide";
    },
  },
]);
//# sourceMappingURL=338.a650c71f.chunk.js.map
