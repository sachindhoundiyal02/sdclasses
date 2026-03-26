 
export const statistics ={
id: 14,
name: "Statistics",
icon: "📊",
  formulas: [
     {
    name: "Mean (Direct Method)",
    formula: "Mean (x̄) = Σfᵢxᵢ / Σfᵢ",
    desc: "Is method me har class ka midpoint (xᵢ) aur frequency (fᵢ) ka use karke mean nikala jata hai."
  },
  {
    name: "Mean (Assumed Mean Method)",
    formula: "x̄ = a + (Σfᵢdₓ / Σfᵢ)",
    desc: "Yahan a = assumed mean aur dₓ = xᵢ − a hota hai."
  },
  {
    name: "Mean (Step Deviation Method)",
    formula: "x̄ = a + (Σfᵢdᵢ / Σfᵢ) × h",
    desc: "Yahan dᵢ = (xᵢ − a)/h aur h = class width hota hai."
  },
  {
    name: "Median (Grouped Data)",
    formula: "Median = L + [(N/2 − cf) / f] × h",
    desc: "L = median class lower boundary, cf = cumulative frequency before median class, f = frequency, h = class width."
  },
  {
    name: "Mode (Grouped Data)",
    formula: "Mode = L + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h",
    desc: "L = modal class lower boundary, f₁ = modal class frequency, f₀ = preceding class frequency, f₂ = succeeding class frequency."
  },
  {        
    name: "Empirical Relation",
    formula: "Mode = 3 × Median − 2 × Mean",
    desc: "Ye relation mean, median aur mode ke beech approximate relation batata hai."
  },
  {
    name: "Class Mark (Midpoint)",
    formula: "xᵢ = (Upper Limit + Lower Limit) / 2",
    desc: "Class interval ka midpoint nikalne ke liye use hota hai."
  },
  {
    name: "Cumulative Frequency",
    formula: "cf = f₁ + f₂ + f₃ + ...",
    desc: "Cumulative frequency frequencies ka running total hota hai."
  }
  ],
  exercises: [
    { number: "Find Mean by Discrete Series", questions: 1, videoUrl: "https://youtube.com/embed/T2Yeup1s2Ok" },
    { number: "Find Mean by Continuous Series", questions: 2, videoUrl: "https://youtube.com/embed/4UKcBYLSUIs" },
  ],
};