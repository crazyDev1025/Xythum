"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [518],
  {
    7326: (e, n, l) => {
      l.r(n), l.d(n, { default: () => m });
      l(5043);
      const a = l.p + "static/media/xythum-whitepaper.16a75cff20e38b83b11f.pdf";
      var i = l(1116),
        s = l(2134),
        t = l(3156),
        r = l(184),
        o = l(579);
      const c = [
          {
            title: "",
            links: [
              { name: "", linkUrl: a, newPage: "_blank" },
              {
                name: "",
                linkUrl: "",
                newPage: "_blank",
              },
              {
                name: "",
                linkUrl: "",
                newPage: "_blank",
              },
              {
                name: "",
                linkUrl: "",
                newPage: "_blank",
              },
            ],
          },
          {
            title: "",
            links: [
              { name: "", linkUrl: "", newPage: "" },
              { name: "", linkUrl: "", newPage: "" },
              { name: "", linkUrl: "", newPage: "" },
            ],
          },
          {
            title: "Partner",
            links: [
              {
                name: "Dextools",
                linkUrl: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                newPage: "_blank",
              },
              { name: "Dexscreener", linkUrl: "https://dexscreener.com/ethereum/0xcomingsoon", newPage: "_blank" },
              { name: "Uniswap", linkUrl: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon", newPage: "_blank" },
            ],
          },
          {
            title: "Community",
            links: [
              {
                icon: (0, o.jsx)(t.TCj, {}),
                url: "https://x.com/xythum_ai",
                newpage: "_blank",
              },
              {
                icon: (0, o.jsx)(r.hFS, {}),
                url: "https://t.me/xythum_ai",
                newpage: "_blank",
              }
            ],
          },
        ],
        m = () =>
          (0, o.jsxs)("div", {
            className: "footer",
            children: [
              (0, o.jsxs)("div", {
                className: "footerUpperSection",
                children: [
                  (0, o.jsx)("div", {
                    className: "footer1stSection",
                    children: (0, o.jsx)(i.A, { width: "78px", style: {} }),
                  }),
                  (0, o.jsx)("div", {
                    className: "footer2ndSection",
                    children: c.map((e, n) =>
                      (0, o.jsxs)(
                        "div",
                        {
                          className: "footer-box",
                          children: [
                            (0, o.jsx)("div", {
                              className: "boldHeading",
                              children: e.title,
                            }),
                            "Community" === e.title
                              ? (0, o.jsx)("div", {
                                  className: "communityIcons",
                                  children: e.links.map((e, n) =>
                                    (0, o.jsx)(
                                      "a",
                                      {
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "iconLink",
                                        children: e.icon,
                                      },
                                      n
                                    )
                                  ),
                                })
                              : e.links.map((n, l) =>
                                  (0, o.jsx)(
                                    s.N_,
                                    {
                                      target: n.newPage,
                                      tabIndex: e.links.newpage,
                                      to: n.linkUrl,
                                      className: "sectionLink",
                                      children: n.name,
                                    },
                                    l
                                  )
                                ),
                          ],
                        },
                        n
                      )
                    ),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "botttomFooter",
                children: "\xa92025 Xythum AI",
              }),
            ],
          });
    },
  },
]);
//# sourceMappingURL=518.6a01f15d.chunk.js.map
