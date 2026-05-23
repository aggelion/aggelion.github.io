/* global React, ReactDOM */
const {
  useState,
  useRef,
  useEffect
} = React;
const V3_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#9AE99A",
  "ctaCopy": "Send"
} /*EDITMODE-END*/;
const ACCENTS = {
  '#9AE99A': {
    hex: '#9AE99A',
    glow: 'rgba(154,233,154,0.25)',
    soft: 'rgba(154,233,154,0.10)',
    strong: 'rgba(154,233,154,0.18)',
    sub: 'rgba(154,233,154,0.08)'
  },
  '#6AE0FF': {
    hex: '#6AE0FF',
    glow: 'rgba(106,224,255,0.25)',
    soft: 'rgba(106,224,255,0.10)',
    strong: 'rgba(106,224,255,0.18)',
    sub: 'rgba(106,224,255,0.08)'
  },
  '#FFC857': {
    hex: '#FFC857',
    glow: 'rgba(255,200,87,0.25)',
    soft: 'rgba(255,200,87,0.10)',
    strong: 'rgba(255,200,87,0.18)',
    sub: 'rgba(255,200,87,0.08)'
  },
  '#B47BFF': {
    hex: '#B47BFF',
    glow: 'rgba(180,123,255,0.25)',
    soft: 'rgba(180,123,255,0.10)',
    strong: 'rgba(180,123,255,0.18)',
    sub: 'rgba(180,123,255,0.08)'
  }
};

/* ---------- Mark ---------- */
function Mark({
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 28L16 4L28 28L16 20L4 28Z",
    stroke: "var(--accent)",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "14",
    r: "2",
    fill: "var(--accent)"
  }));
}

/* ---------- Top ---------- */
function Topbar({
  onCTA
}) {
  const goto = id => e => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 40,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container topbar-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: goto('top'),
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(Mark, null)), "Aggelion"), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#why",
    onClick: goto('why')
  }, "Why"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    onClick: goto('how')
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#cases",
    onClick: goto('cases')
  }, "Cases")), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCTA
  }, "Get in touch ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}

/* ---------- Hero ---------- */
function Hero({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "You have an unusual technical problem.", /*#__PURE__*/React.createElement("br", null), "We know how to solve it \u2014 because ", /*#__PURE__*/React.createElement("span", {
    className: "acc"
  }, "someone already published the answer.")), /*#__PURE__*/React.createElement("p", {
    className: "tag"
  }, "Architecture and specifications grounded in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-2)'
    }
  }, "peer-reviewed science"), " \u2014 for teams solving problems outside their expertise."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCTA
  }, "Get in touch ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#how",
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById('how');
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 40,
        behavior: 'smooth'
      });
    }
  }, "See how it works"))), /*#__PURE__*/React.createElement(HeroVis, null))));
}
function HeroVis() {
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-vis"
  }, /*#__PURE__*/React.createElement("span", {
    className: "corner tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner tr"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner bl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "corner br"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vis-head"
  }, /*#__PURE__*/React.createElement("span", null, "synthesis_a18f2c"), /*#__PURE__*/React.createElement("span", {
    className: "live"
  }, "live")), /*#__PURE__*/React.createElement("div", {
    className: "agent"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "agent-glyph"
  }, "\u03B1"), /*#__PURE__*/React.createElement("div", {
    className: "agent-lbl"
  }, "Methodology synthesis"), /*#__PURE__*/React.createElement("div", {
    className: "agent-sub"
  }, "47 peer-reviewed papers ranked \xB7 3 critic-revisions \xB7 14m elapsed"))), /*#__PURE__*/React.createElement("div", {
    className: "vis-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "240k"), "corpus"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "14m"), "per spec"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "3 / 3"), "critics passed")));
}

/* ---------- Social proof strip ---------- */
function SocialProof() {
  return /*#__PURE__*/React.createElement("section", {
    className: "social-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container social-strip-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "social-strip-label"
  }, "Currently in production with"), /*#__PURE__*/React.createElement("div", {
    className: "social-strip-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "real-estate tokenization"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "DeFi risk scoring"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "retrieval systems"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "L2 consensus design"))));
}

/* ---------- Why (numbered cards) ---------- */
function Why() {
  const cards = [{
    n: '01',
    title: 'The solution to your technical problem exists in academic literature. But peer-reviewed papers don\'t come with implementation guides.',
    vis: /*#__PURE__*/React.createElement(WhyVis01, null)
  }, {
    n: '02',
    title: 'Your team knows how to build. But this problem sits in a domain — tokenization, risk modeling, distributed consensus — where getting it wrong isn\'t obvious until production.',
    vis: /*#__PURE__*/React.createElement(WhyVis02, null)
  }, {
    n: '03',
    title: 'You\'ve made the architecture call. But without someone who\'s read the literature, you can\'t know if it\'s defensible.',
    vis: /*#__PURE__*/React.createElement(WhyVis03, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Why Aggelion"), /*#__PURE__*/React.createElement("h2", null, "Three reasons teams call us before they ", /*#__PURE__*/React.createElement("span", {
    className: "acc"
  }, "reinvent something"), "."), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acc",
    style: {
      fontSize: '1.18em',
      fontWeight: 600
    }
  }, "92%"), " of unusual engineering problems have a peer-reviewed answer. Finding it, adapting it to your constraints, and turning it into architecture your team can ship \u2014 that's the hard part. That's what we do.")), /*#__PURE__*/React.createElement("div", {
    className: "num-grid"
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    className: "num-card",
    key: c.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, c.n), /*#__PURE__*/React.createElement("div", {
    className: "vis"
  }, c.vis), /*#__PURE__*/React.createElement("p", {
    className: "num-card-body"
  }, c.title))))));
}

/* 01 · stack of papers, top one has an [→] missing piece */
function WhyVis01() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 140",
    xmlns: "http://www.w3.org/2000/svg",
    className: "why-svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "lines01",
    width: "100",
    height: "6",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "3",
    x2: "80",
    y2: "3",
    stroke: "var(--ink-mute)",
    strokeWidth: "1",
    opacity: "0.5"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(40, 18) rotate(-4)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "80",
    height: "100",
    fill: "var(--bg-2)",
    stroke: "var(--line-strong)",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "64",
    height: "80",
    fill: "url(#lines01)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "40",
    height: "3",
    fill: "var(--ink-mute)",
    opacity: "0.7"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(58, 22) rotate(2)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "80",
    height: "100",
    fill: "var(--bg-2)",
    stroke: "var(--line-strong)",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "64",
    height: "80",
    fill: "url(#lines01)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "34",
    height: "3",
    fill: "var(--ink-mute)",
    opacity: "0.7"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(78, 24)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "80",
    height: "100",
    fill: "var(--bg-2)",
    stroke: "var(--accent)",
    strokeWidth: "1.5",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "36",
    height: "3",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "20",
    width: "64",
    height: "2",
    fill: "var(--ink-mute)",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "26",
    width: "58",
    height: "2",
    fill: "var(--ink-mute)",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "32",
    width: "62",
    height: "2",
    fill: "var(--ink-mute)",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "42",
    width: "64",
    height: "20",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1",
    strokeDasharray: "3,3",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "40",
    y: "56",
    fontFamily: "JetBrains Mono",
    fontSize: "11",
    fill: "var(--accent)",
    textAnchor: "middle"
  }, "?? impl"), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "68",
    width: "58",
    height: "2",
    fill: "var(--ink-mute)",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "74",
    width: "64",
    height: "2",
    fill: "var(--ink-mute)",
    opacity: "0.5"
  })));
}

/* 02 · iceberg — visible expertise on top, hidden domain depth below */
function WhyVis02() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 140",
    xmlns: "http://www.w3.org/2000/svg",
    className: "why-svg"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "48",
    x2: "200",
    y2: "48",
    stroke: "var(--accent)",
    strokeWidth: "1",
    strokeDasharray: "4,4",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: "44",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    fill: "var(--accent)",
    letterSpacing: "1"
  }, "YOUR EXPERTISE"), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: "60",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    fill: "var(--ink-mute)",
    letterSpacing: "1"
  }, "DOMAIN DEPTH"), /*#__PURE__*/React.createElement("path", {
    d: "M 90 20 L 130 48 L 70 48 Z",
    fill: "var(--accent)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70 48 L 130 48 L 168 132 L 32 132 Z",
    fill: "var(--accent)",
    opacity: "0.18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70 48 L 130 48 L 168 132 L 32 132 Z",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("g", {
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    fill: "var(--ink)",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("text", {
    x: "42",
    y: "78"
  }, "tokenomics"), /*#__PURE__*/React.createElement("text", {
    x: "98",
    y: "92"
  }, "risk model"), /*#__PURE__*/React.createElement("text", {
    x: "58",
    y: "108"
  }, "consensus"), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "124"
  }, "attack surface")));
}

/* 03 · architecture node + missing citation supports */
function WhyVis03() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 140",
    xmlns: "http://www.w3.org/2000/svg",
    className: "why-svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "76",
    y: "56",
    width: "48",
    height: "28",
    fill: "var(--bg-2)",
    stroke: "var(--accent)",
    strokeWidth: "1.5",
    rx: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "73",
    fontFamily: "JetBrains Mono",
    fontSize: "10",
    fill: "var(--accent)",
    textAnchor: "middle",
    letterSpacing: "1"
  }, "ARCH.v1"), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "56",
    x2: "40",
    y2: "20",
    stroke: "var(--accent)",
    strokeWidth: "1",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "56",
    x2: "160",
    y2: "22",
    stroke: "var(--accent)",
    strokeWidth: "1",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "84",
    x2: "36",
    y2: "116",
    stroke: "var(--ink-mute)",
    strokeWidth: "1",
    strokeDasharray: "3,3",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "84",
    x2: "164",
    y2: "118",
    stroke: "var(--ink-mute)",
    strokeWidth: "1",
    strokeDasharray: "3,3",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "20",
    r: "5",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "22",
    y: "14",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    fill: "var(--ink-mute)"
  }, "[a]"), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "22",
    r: "5",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "14",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    fill: "var(--ink-mute)"
  }, "[b]"), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "116",
    r: "6",
    fill: "var(--bg)",
    stroke: "var(--ink-mute)",
    strokeWidth: "1",
    strokeDasharray: "2,2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "36",
    y: "120",
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    fill: "var(--ink-mute)",
    textAnchor: "middle"
  }, "?"), /*#__PURE__*/React.createElement("circle", {
    cx: "164",
    cy: "118",
    r: "6",
    fill: "var(--bg)",
    stroke: "var(--ink-mute)",
    strokeWidth: "1",
    strokeDasharray: "2,2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "164",
    y: "122",
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    fill: "var(--ink-mute)",
    textAnchor: "middle"
  }, "?"));
}

/* ---------- How it works (3 packages) ---------- */
const PACKAGES = [{
  n: '01',
  name: 'Spec',
  body: 'Describe what you\'re building. We find what science already knows about it and deliver a specification your team can act on.',
  artifact: ['spec.md', 'formulas + edge cases', 'peer-reviewed citations', 'reviewed by domain expert']
}, {
  n: '02',
  name: 'Architecture',
  body: 'No clear problem yet? We dig into your business, map the constraints, and design the full solution — from data model to protocol to edge cases.',
  artifact: ['architecture.md', 'data model', 'protocol design', 'threat model']
}, {
  n: '03',
  name: 'Architecture + Oversight',
  body: 'Same as above, plus we stay through launch. We check that what your team built matches what was designed — technically, architecturally, and safely.',
  artifact: ['launch audit', 'spec ↔ code parity', 'safety review', 'go / no-go memo']
}];
function HowItWorks() {
  const [active, setActive] = useState(0);
  const p = PACKAGES[active];
  return /*#__PURE__*/React.createElement("section", {
    className: "how-section",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "You bring the problem. ", /*#__PURE__*/React.createElement("span", {
    className: "acc"
  }, "We bring the answer.")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Three packages, one method. AI-tooling does the literature work, a domain expert validates every output. There is always a human in the loop.")), /*#__PURE__*/React.createElement("div", {
    className: "pkg-tabs"
  }, PACKAGES.map((pk, i) => /*#__PURE__*/React.createElement("button", {
    key: pk.n,
    className: `pkg-tab ${i === active ? 'active' : ''}`,
    onClick: () => setActive(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pkg-n"
  }, pk.n), /*#__PURE__*/React.createElement("span", {
    className: "pkg-name"
  }, pk.name)))), /*#__PURE__*/React.createElement("div", {
    className: "pkg-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pkg-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pkg-stage"
  }, "Package ", p.n, " of 03"), /*#__PURE__*/React.createElement("h3", {
    className: "pkg-title"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "pkg-text"
  }, p.body), /*#__PURE__*/React.createElement("div", {
    className: "pkg-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#book",
    onClick: e => {
      e.preventDefault();
      document.getElementById('book')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "Start with ", p.name, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "pkg-artifact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pkg-artifact-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, "Deliverable"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "artifact_", p.n.toLowerCase())), /*#__PURE__*/React.createElement("ul", {
    className: "pkg-artifact-list"
  }, p.artifact.map((a, i) => /*#__PURE__*/React.createElement("li", {
    key: a
  }, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, "\u2713"), " ", a))), /*#__PURE__*/React.createElement("div", {
    className: "pkg-artifact-foot"
  }, p.n === '01' && /*#__PURE__*/React.createElement(React.Fragment, null, "Validated by domain expert \xB7 cited to source"), p.n === '02' && /*#__PURE__*/React.createElement(React.Fragment, null, "End-to-end design \xB7 ready for implementation"), p.n === '03' && /*#__PURE__*/React.createElement(React.Fragment, null, "You launch with confidence \u2014 or you don't launch"))))));
}

/* ---------- Cases (placeholder) ---------- */
function Cases() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Cases"), /*#__PURE__*/React.createElement("h2", null, "Built quietly. Cited carefully."), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "We work under NDA more often than not. As clients clear the publication of anonymized case studies, they will land here.")), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, [{
    domain: 'Real estate · tokenization',
    task: 'Valuation methodology for fractional, illiquid assets',
    status: 'In production'
  }, {
    domain: 'DeFi · risk scoring',
    task: 'Counterparty risk model under thin-liquidity regimes',
    status: 'In production'
  }, {
    domain: 'L2 · consensus',
    task: 'Validator-set design with formal liveness guarantees',
    status: 'Coming soon'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-domain"
  }, c.domain), /*#__PURE__*/React.createElement("div", {
    className: "case-task"
  }, c.task), /*#__PURE__*/React.createElement("div", {
    className: "case-footer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-status"
  }, c.status), /*#__PURE__*/React.createElement("span", {
    className: "case-redacted"
  }, "case study redacted")))))));
}

/* ---------- CTA form ---------- */
function CTAForm({
  ctaCopy,
  ctaRef
}) {
  const [problem, setProblem] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  function submit(e) {
    e.preventDefault();
    const errs = {};
    if (!problem.trim() || problem.trim().length < 20) errs.problem = 'A sentence or two helps us match you to the right paper.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Use a valid work email.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    fetch('https://formspree.io/f/xjgzrozo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        problem: problem,
        _subject: 'Aggelion · new inquiry'
      })
    }).then(r => {
      setSubmitting(false);
      if (r.ok) setDone(true);else setErrors({
        submit: 'Something went wrong. Email us at expert@aggelion.ai instead.'
      });
    }).catch(() => {
      setSubmitting(false);
      setErrors({
        submit: 'Network error. Email us at expert@aggelion.ai instead.'
      });
    });
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "final",
    ref: ctaRef,
    id: "book"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "final-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", null, "What's the problem you're trying to solve?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Describe it in plain language. We'll send you what the research says \u2014 no commitment, no sales call.")), done ? /*#__PURE__*/React.createElement("div", {
    className: "final-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check-big"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "We're on it."), /*#__PURE__*/React.createElement("p", null, "You'll receive a preview of what the literature says in your inbox within one business day \u2014 plus a PDF and a calendar link if you'd like to talk to an expert. No newsletter. No follow-ups beyond that thread."), /*#__PURE__*/React.createElement("div", {
    className: "ref"
  }, "REF \xB7 ", Math.random().toString(36).slice(2, 10).toUpperCase())) : /*#__PURE__*/React.createElement("form", {
    className: "final-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: `form-row ${errors.problem ? 'err' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Your problem"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    value: problem,
    onChange: e => {
      setProblem(e.target.value);
      if (errors.problem) setErrors({
        ...errors,
        problem: undefined
      });
    },
    placeholder: "e.g. We need a valuation methodology for tokenized Dubai real estate that respects mortgage encumbrances and currency hedging. Bonus: defensible to a sceptical regulator."
  }), errors.problem && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.problem), /*#__PURE__*/React.createElement("div", {
    className: "form-hint"
  }, "A few sentences is enough. We'll figure out the rest.")), /*#__PURE__*/React.createElement("div", {
    className: "form-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: `form-row email-row ${errors.email ? 'err' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (errors.email) setErrors({
        ...errors,
        email: undefined
      });
    },
    placeholder: "you@company.com"
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.email)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg",
    disabled: submitting
  }, submitting ? 'Sending…' : ctaCopy, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), errors.submit && /*#__PURE__*/React.createElement("p", {
    className: "err-msg",
    style: {
      textAlign: 'center',
      marginTop: 12
    }
  }, errors.submit), /*#__PURE__*/React.createElement("p", {
    className: "form-disclaimer"
  }, "We read every submission ourselves. You'll hear back from a person, not a sequence."))));
}

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container row"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Aggelion Labs \xB7 All rights reserved"), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#cases"
  }, "Cases"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:expert@aggelion.ai"
  }, "expert@aggelion.ai"))));
}

/* ---------- App ---------- */
function App() {
  const t = V3_DEFAULTS;
  const ctaRef = useRef(null);
  useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS['#9AE99A'];
    const root = document.documentElement;
    root.style.setProperty('--accent', a.hex);
    root.style.setProperty('--accent-glow', a.glow);
    root.style.setProperty('--accent-soft', a.soft);
    root.style.setProperty('--line-strong', a.strong);
    root.style.setProperty('--line', a.sub);
  }, [t.accent]);
  const onCTA = () => {
    const el = ctaRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 40;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    onCTA: onCTA
  }), /*#__PURE__*/React.createElement(Hero, {
    onCTA: onCTA
  }), /*#__PURE__*/React.createElement(SocialProof, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(CTAForm, {
    ctaCopy: t.ctaCopy,
    ctaRef: ctaRef
  }), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));