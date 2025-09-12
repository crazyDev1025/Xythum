"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [79],
  {
    8821: (a, s, e) => {
      e.r(s), e.d(s, { default: () => h });
      e(5043);
      const i = e.p + "static/media/Group91(1).3a4d98a58a6b62146f55.webp",
        r = e.p + "static/media/blogcard.02279b065c7641863603.webp",
        n = e.p + "static/media/active-slide-1.a2b82ebab7489e00eeab.webp";
      var c = e(3366),
        l = e(3720),
        t = e(579);
      const d = (a) => {
        let { heading: s, paragraph: e, nums: i } = a;
        return (0, t.jsxs)("div", {
          className: "roadmapSmallCard",
          children: [
            (0, t.jsx)("p", { className: "item", children: i }),
            (0, t.jsxs)("div", {
              className: "headingAndParagraph",
              children: [
                (0, t.jsx)(c.A, { heading: s, size: "32px" }),
                (0, t.jsx)(l.A, { paragraph: e, size: "16px" }),
              ],
            }),
            (0, t.jsx)("img", {
              className: "blogBackgroundImage",
              src: r,
              alt: "xythum ",
            }),
            (0, t.jsx)("img", {
              className: "blogBackgroundImage activeBgImg",
              src: n,
              alt: "xythum ",
            }),
          ],
        });
      };
      var m = e(4975),
        p = e(229),
        o = (e(4014), e(5084), e(50));
      const x = () => {
        const a = [
          {
            heading: "Phase 1",
            paragraph:
              "Focus on bridging native Bitcoin assets & all L1 to EVM chains,  <br/> Public Mainnet",
          },
          {
            heading: "Phase 2",
            paragraph:
              "Aggregation of all EVM L2s,  Bitcoin Layer 2's and forks",
          },
          {
            heading: "Phase 3",
            paragraph: "Dark Pool Integration,  <br/>  Chain Abstraction",
          },
          { heading: "Phase 4", paragraph: "Aggregation as a Service" },
          {
            heading: "Phase 5",
            paragraph:
              "Blockchain specific message and context sharing across multiple chains, Wallet development",
          },
        ];
        return (0, t.jsx)("div", {
          className: "roadmapContainer",
          children: (0, t.jsxs)("div", {
            className: "roadmapElements",
            children: [
              (0, t.jsx)("img", {
                className: "bgGreen swiper-button-next",
                src: i,
                alt: "xythum ",
              }),
              (0, t.jsxs)(m.RC, {
                spaceBetween: 15,
                loop: !0,
                centeredSlides: !0,
                slidesPerView: 3,
                navigation: { prevEl: ".prev-slide", nextEl: ".next-slide" },
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                breakpoints: {
                  0: { slidesPerView: 1, spaceBetween: 15 },
                  768: { slidesPerView: 1, spaceBetween: 15 },
                  1110: { slidesPerView: 3, spaceBetween: 15 },
                },
                speed: 500,
                modules: [o.Ij, o.Vx, o.dK],
                className: "roadmapSlider",
                children: [
                  a
                    ? a.map((a, s) =>
                        (0, t.jsx)(
                          m.qr,
                          {
                            children: (0, t.jsx)(d, {
                              heading: a.heading,
                              paragraph: (0, p.Ay)(a.paragraph),
                            }),
                          },
                          s
                        )
                      )
                    : "",
                  (0, t.jsx)("span", { className: "next-slide roadmap-prev" }),
                ],
              }),
            ],
          }),
        });
      };
      var g = e(8534);
      const h = () =>
        (0, t.jsxs)("div", {
          className: "roadmap gap",
          children: [
            (0, t.jsx)("div", {
              className: "center headingGap",
              children: (0, t.jsx)(g.A, {
                heading: "Roadmap",
                paragraph:
                  "Xythum is committed to driving the future of DeFi with an ambitious roadmap that focuses on expanding cross-chain capabilities, implementing privacy features, and scaling up liquidity solutions. Our vision is to create a secure, seamless, and interoperable DeFi ecosystem accessible to everyone.",
              }),
            }),
            (0, t.jsx)(x, {}),
            (0, t.jsxs)("div", {
              className: "roadMapBottomImage",
              children: [
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("i", { className: "rain" }),
                (0, t.jsx)("span", { id: "faqs" }),
              ],
            }),
          ],
        });
    },
  },
]);
//# sourceMappingURL=79.bdbc910d.chunk.js.map
