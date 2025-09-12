"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [544],
  {
    7662: (e, i, a) => {
      a.r(i), a.d(i, { default: () => p });
      a(5043);
      var s = a(3366),
        t = a(3720),
        n = a(579);
      const r = (e) => {
          let { heading: i, description: a, index: r, image: c } = e;
          return (0, n.jsxs)("div", {
            className: "techStackCard",
            children: [
              (0, n.jsx)("div", { className: "index", children: r }),
              c,
              (0, n.jsxs)("div", {
                className: "techStackCardParagraph",
                children: [
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)(s.A, { size: "23px", heading: i }),
                  }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)(t.A, { size: "16px", paragraph: a }),
                  }),
                ],
              }),
            ],
          });
        },
        c = a.p + "static/media/lock-2.ac2939d63c545eebc706.mp4",
        o = a.p + "static/media/frost.14c9208d75859a367a59.mp4",
        d = a.p + "static/media/lock.ba9faf5f8446c11c20a1.mp4",
        l = a.p + "static/media/ZKF.c5cef43e234e53831835.mp4",
        p = () => {
          const e = [
            {
              heading: "FROST",
              description:
                "Xythum leverages FROST to facilitate efficient and Secure Multi-Party Computation (SMPC), enabling seamless interchain communication and supporting infinite scalability across decentralized networks.",
              image: (0, n.jsx)("video", {
                loading: "lazy",
                preload: "auto",
                width: "100%",
                height: "auto",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                children: (0, n.jsx)("source", { src: o, type: "video/mp4" }),
              }),
            },
            {
              heading: "Fully Homomorphic Encryption (FHE)",
              description:
                "FHE ensures that sensitive data remains encrypted even during processing. This layer of encryption protects user privacy and guards against potential threats during cross-chain transactions.",
              image: (0, n.jsx)("video", {
                loading: "lazy",
                preload: "auto",
                width: "100%",
                height: "auto",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                children: (0, n.jsx)("source", { src: d, type: "video/mp4" }),
              }),
            },
            {
              heading: "Trusted Execution Environments (TEE)",
              description:
                "TEE, backed by Intel SGX, establishes a secure hardware enclave for sensitive computations. For Xythum, this ensures critical operations and data remain protected, even if external systems are compromised.",
              image: (0, n.jsx)("video", {
                loading: "lazy",
                preload: "auto",
                width: "100%",
                height: "auto",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                children: (0, n.jsx)("source", { src: c, type: "video/mp4" }),
              }),
            },
            {
              heading: "ZK Functionality",
              description:
                "Ensures secure, private verification by confirming transactions without exposing sensitive details. This enables trustless, confidential asset transfers across chains, maintaining privacy and integrity throughout cross-chain interactions.",
              image: (0, n.jsx)("video", {
                loading: "lazy",
                preload: "auto",
                width: "100%",
                height: "auto",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                children: (0, n.jsx)("source", { src: l, type: "video/mp4" }),
              }),
            },
          ];
          return (0, n.jsxs)("div", {
            className: "tech_stack",
            children: [
              (0, n.jsx)("div", {
                className: "center headingGap",
                children: (0, n.jsx)(s.A, { heading: "Tech Stack" }),
              }),
              (0, n.jsx)("div", {
                className: "techItems",
                children:
                  null === e || void 0 === e
                    ? void 0
                    : e.map((e, i) =>
                        (0, n.jsx)(
                          r,
                          {
                            heading: e.heading,
                            description: e.description,
                            image: e.image,
                          },
                          i
                        )
                      ),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=544.2fab0684.chunk.js.map
