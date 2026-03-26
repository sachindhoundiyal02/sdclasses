export const polynomials = {
  id: 2,
  name: "Polynomials",
  icon: "📈",
  formulas: [
    // ── Basic Zeroes ──
    {
      name: "Sum of Zeroes (Quadratic)",
      formula: "α + β = -b/a",
      desc: "ax² + bx + c",
    },
    {
      name: "Product of Zeroes (Quadratic)",
      formula: "α × β = c/a",
      desc: "ax² + bx + c",
    },
    {
      name: "Polynomial from Given Zeroes",
      formula: "x² - (sum of zeroes)x + (product of zeroes)",
      desc: "Agar zeroes α aur β diye ho to polynomial is form se banaya ja sakta hai.",
    },
    {
      name: "Sum of Zeroes (Cubic)",
      formula: "α + β + γ = -b/a",
      desc: "ax³ + bx² + cx + d",
    },
    {
      name: "Product of Zeroes (Cubic)",
      formula: "αβγ = -d/a",
      desc: "ax³ + bx² + cx + d",
    },
    {
      name: "Sum of Products (Cubic)",
      formula: "αβ + βγ + γα = c/a",
      desc: "ax³ + bx² + cx + d",
    },

    // ── Algebraic Identities ──
    {
      name: "(a+b)²",
      formula: "(a+b)² = a² + b² + 2ab",
      desc: "",
    },
    {
      name: "(a-b)²",
      formula: "(a-b)² = a² + b² - 2ab",
      desc: "",
    },
    {
      name: "(a+b)(a-b)",
      formula: "(a+b)(a-b) = a² - b²",
      desc: "",
    },
    {
      name: "(x+a)(x+b)",
      formula: "(x+a)(x+b) = x² + (a+b)x + ab",
      desc: "",
    },
    {
      name: "(x+a)(x-b)",
      formula: "(x+a)(x-b) = x² + (a-b)x - ab",
      desc: "",
    },
    {
      name: "(x-a)(x+b)",
      formula: "(x-a)(x+b) = x² + (b-a)x - ab",
      desc: "",
    },
    {
      name: "(x-a)(x-b)",
      formula: "(x-a)(x-b) = x² - (a+b)x + ab",
      desc: "",
    },
    {
      name: "(a+b)³",
      formula: "(a+b)³ = a³ + b³ + 3ab(a+b)",
      desc: "",
    },
    {
      name: "(a-b)³",
      formula: "(a-b)³ = a³ - b³ - 3ab(a-b)",
      desc: "",
    },
    {
      name: "(x+y+z)²",
      formula: "(x+y+z)² = x² + y² + z² + 2xy + 2yz + 2xz",
      desc: "",
    },
    {
      name: "(x+y-z)²",
      formula: "(x+y-z)² = x² + y² + z² + 2xy - 2yz - 2xz",
      desc: "",
    },
    {
      name: "(x-y+z)²",
      formula: "(x-y+z)² = x² + y² + z² - 2xy - 2yz + 2xz",
      desc: "",
    },
    {
      name: "(x-y-z)²",
      formula: "(x-y-z)² = x² + y² + z² - 2xy + 2yz - 2xz",
      desc: "",
    },
    {
      name: "x³+y³+z³-3xyz",
      formula: "x³+y³+z³-3xyz = (x+y+z)(x²+y²+z²-xy-yz-xz)",
      desc: "",
    },
    {
      name: "x²+y²",
      formula: "x²+y² = ½[(x+y)² + (x-y)²]",
      desc: "",
    },
    {
      name: "(x+a)(x+b)(x+c)",
      formula: "(x+a)(x+b)(x+c) = x³ + (a+b+c)x² + (ab+bc+ca)x + abc",
      desc: "",
    },
    {
      name: "x³+y³",
      formula: "x³+y³ = (x+y)(x²-xy+y²)",
      desc: "",
    },
    {
      name: "x³-y³",
      formula: "x³-y³ = (x-y)(x²+xy+y²)",
      desc: "",
    },
    {
      name: "x²+y²+z²-xy-yz-zx",
      formula: "x²+y²+z²-xy-yz-zx = ½[(x-y)²+(y-z)²+(z-x)²]",
      desc: "",
    },
  ],
  exercises: [
    { number: "Basic Factorisation", questions: 1, videoUrl: "https://youtube.com/embed/Wvt7A-bMJ2Y" },
    { number: "Exercise 2.2", questions: 2, videoUrl: "" },
  ],
};