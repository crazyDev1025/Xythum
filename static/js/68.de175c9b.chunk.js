"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [68],
  {
    7195: (e, i, s) => {
      s.r(i), s.d(i, { default: () => p });
      var l = s(5043),
        a = s(3366),
        t = s(579);
      const n = (e) => {
          let { closePopup: i } = e;
          return (0, t.jsx)("div", {
            className: "popupEmail",
            children: (0, t.jsxs)("div", {
              className: "popup_inner",
              children: [
                (0, t.jsxs)("form", {
                  action: "",
                  children: [
                    (0, t.jsx)("input", {
                      type: "text",
                      placeholder: "Enter Your Email",
                    }),
                    (0, t.jsx)("button", {
                      className: "popBtn",
                      children: "Submit",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "closeEmail",
                  onClick: i,
                  children: "X",
                }),
              ],
            }),
          });
        },
        o = (e) => {
          let { title: i = "Join Waitlist", marginTop: s = "0" } = e;
          const [a, o] = (0, l.useState)(!1),
            d = () => {
              o(!a);
            };
          return (0, t.jsxs)("div", {
            style: { marginTop: s },
            className: "joinWaitlist",
            children: [
              (0, t.jsx)("button", {
                onClick: () => d(),
                className: "joinWaitlistButton",
                children: i,
              }),
              a
                ? (0, t.jsx)(n, { text: "Title", closePopup: () => d() })
                : null,
            ],
          });
        },
        d = s.p + "static/media/join-list.a6936878bfe9bfd55e07.mp4",
        c = s.p + "static/media/Mailing-mobile.206f1986db0bc21454e6.mp4",
        p = () =>
          (0, t.jsx)("div", {
            className: "mailingContainer gap ",
            children: (0, t.jsxs)("div", {
              className: "mailing containerWidth",
              children: [
                (0, t.jsx)("div", {
                  className: "leptop",
                  children: (0, t.jsx)("video", {
                    loading: "lazy",
                    preload: "auto",
                    width: "100%",
                    height: "100%",
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    children: (0, t.jsx)("source", {
                      src: d,
                      type: "video/mp4",
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "mobile",
                  children: (0, t.jsx)("video", {
                    loading: "lazy",
                    preload: "auto",
                    width: "100%",
                    height: "100%",
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    children: (0, t.jsx)("source", {
                      src: c,
                      type: "video/mp4",
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "maling_text",
                  children: [
                    (0, t.jsx)(a.A, {
                      size: "32px",
                      heading:
                        "Stay in the loop for everything you need to know",
                    }),
                    (0, t.jsx)(o, { marginTop: "50px" }),
                  ],
                }),
              ],
            }),
          });
    },
  },
]);
//# sourceMappingURL=68.de175c9b.chunk.js.map
