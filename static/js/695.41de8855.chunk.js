"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [695],
  {
    5746: (e, a, i) => {
      i.r(a), i.d(a, { default: () => u });
      var s = i(5043),
        n = i(3366),
        t = i(3720);
      const o = i.p + "static/media/our-solution.45d315ea6bbf4b48f5ce.mp4",
        r = i.p + "static/media/main-root.7d7df923350918728c18.mp4",
        l = i.p + "static/media/Group 94 (1).a37ffa5a6c41ad599e3c.webp";
      var d = i(8534),
        c = i(4975),
        h = (i(4014), i(5084), i(50)),
        p = i(579);
      const u = () => {
        const e = [
            {
              heading: "Speed",
              paragraph:
                "Xythum leverages sharding, FROST & multiprocessing to complete transaction under 15 seconds.",
            },
            {
              heading: "Cost-Efficiency",
              paragraph:
                "FROST allows Xythum to achieve a minimal 64-byte witness size for cross-chain communication, drastically reducing on-chain gas fee. Additionally, Xythum offers market-leading fees averaging just 0.075%, 50\u201370% lower than its peers.",
            },
            {
              heading: "Robust Security",
              paragraph:
                "With a combination of FHE (Fully Homomorphic Encryption) and ZK (Zero-Knowledge), Xythum ensures order details remain encrypted and private throughout the process, safeguarding sensitive information from all parties, including Xythum node operators.",
            },
            {
              heading: "Omnichain",
              paragraph:
                "Bitcoin, Lightning Network, Layer 1 & Layer 2 solutions, and EVM-compatible chains for broad integration.",
            },
          ],
          [, a] = (0, s.useState)(null),
          [i, u] = (0, s.useState)("vertical");
        return (
          (0, s.useEffect)(() => {
            const e = () => {
              u(window.innerWidth <= 850 ? "horizontal" : "vertical");
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, p.jsxs)("div", {
            className: "challange gap",
            children: [
              (0, p.jsx)(d.A, {
                heading: "Solving DeFi\u2019s Legacy Challenges",
                paragraph:
                  "DeFi is loaded with potential, but it has its challenges\u2014slow transactions, high fees, and vulnerabilities to exploit. Xythum addresses these challenges with a powerful mix of speed, privacy, and advanced security, making cross-chain transactions efficient and reliable.",
              }),
              (0, p.jsx)("div", {
                className: "OurSolutions",
                children: (0, p.jsx)(n.A, { heading: "Our Solutions" }),
              }),
              (0, p.jsxs)("div", {
                className: "challangeCard",
                children: [
                  (0, p.jsx)("div", {
                    className: "chall-video illustrativeImage",
                    children: (0, p.jsx)("video", {
                      loading: "lazy",
                      preload: "auto",
                      width: "100%",
                      height: "auto",
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      children: (0, p.jsx)("source", {
                        src: o,
                        type: "video/mp4",
                      }),
                    }),
                  }),
                  (0, p.jsxs)("div", {
                    className: "solutionsList",
                    children: [
                      (0, p.jsx)("div", {
                        className: "solutionQuestion",
                        children: (0, p.jsxs)(p.Fragment, {
                          children: [
                            (0, p.jsx)(c.RC, {
                              direction: i,
                              spaceBetween: 30,
                              loop: !0,
                              centeredSlides: !0,
                              slidesPerView: "horizontal" === i ? 1 : 3,
                              breakpoints: {
                                0: { slidesPerView: 1, spaceBetween: 15 },
                                850: { slidesPerView: 3, spaceBetween: 30 },
                              },
                              autoplay: {
                                delay: 2500,
                                disableOnInteraction: !1,
                              },
                              speed: 500,
                              modules: [h.Ij, h.dK, h.WO],
                              className: "",
                              children: e.map((e, a) =>
                                (0, p.jsx)(
                                  c.qr,
                                  {
                                    className: " "
                                      .concat(
                                        "Robust Security" === e.heading
                                          ? "solution-pad-bottom"
                                          : "",
                                        " "
                                      )
                                      .concat(
                                        "Omnichain" === e.heading
                                          ? "solution-pad-top"
                                          : ""
                                      ),
                                    children: (0, p.jsxs)("div", {
                                      className: "solutionCard ",
                                      children: [
                                        (0, p.jsx)(n.A, {
                                          size: "28px",
                                          heading: e.heading,
                                        }),
                                        (0, p.jsx)(t.A, {
                                          size: "15px",
                                          paragraph: e.paragraph,
                                        }),
                                      ],
                                    }),
                                  },
                                  a
                                )
                              ),
                            }),
                            (0, p.jsx)(c.RC, {
                              onSwiper: a,
                              direction: i,
                              spaceBetween: 45,
                              loop: !0,
                              centeredSlides: !0,
                              slidesPerView: 3,
                              speed: 500,
                              autoplay: {
                                delay: 2500,
                                disableOnInteraction: !1,
                              },
                              breakpoints: {
                                0: { slidesPerView: 3, spaceBetween: 0 },
                                850: { slidesPerView: 3, spaceBetween: 45 },
                              },
                              modules: [h.WO, h.Ij],
                              className: "swiper-thumb-num",
                              children: e.map((e, a) =>
                                (0, p.jsx)(
                                  c.qr,
                                  {
                                    children: (0, p.jsx)("h1", {
                                      children: a + 1,
                                    }),
                                  },
                                  a
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, p.jsx)("div", {
                        children: (0, p.jsx)("img", {
                          src: l,
                          alt: "Solution Illustration",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, p.jsx)("div", {
                className: "power",
                children: (0, p.jsx)("video", {
                  loading: "lazy",
                  preload: "auto",
                  width: "50%",
                  height: "auto",
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  children: (0, p.jsx)("source", { src: r, type: "video/mp4" }),
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=695.41de8855.chunk.js.map
