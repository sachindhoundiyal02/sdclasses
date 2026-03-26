export const arithmeticProgressions = {
  id: 5,
  name: "Arithmetic Progression",
  icon: "🔁",
  formulas: [
    {
      name: "nth Term",
      formula: "aₙ = a + (n-1)d",
      desc: "a = first term, d = common difference",
    },
    {
      name: "Sum of n Terms",
      formula: "Sₙ = n/2 [2a + (n-1)d]",
      desc: "First term aur common difference se",
    },
    {
      name: "Sum (first & last)",
      formula: "Sₙ = n/2 (a + l)",
      desc: "l = last term",
    },
    {
      name: "Common Difference",
      formula: "d = aₙ - aₙ₋₁",
      desc: "Consecutive terms ka difference",
    },
  ],
  exercises: [
    {
      number: "Exercise 5.1",
      questions: 1,
      videoUrl: "https://www.youtube.com/embed/EGKrNzMjuIs",
    }, 
  ],
};
