export const coordinateGeometry = {
  id: 7,
  name: "Coordinate Geometry",
  icon: "📍",
  formulas: [
   {
    name: "Distance Formula",
    formula: "d = √[(x₂ − x₁)² + (y₂ − y₁)²]",
    desc: "Do points (x₁, y₁) aur (x₂, y₂) ke beech ki distance nikalne ke liye use hota hai."
  },
  {
    name: "Section Formula (Internal Division)",
    formula: "(x, y) = [(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)]",
    desc: "Jab point line segment ko internally m:n ratio me divide karta hai."
  },
  {
    name: "Section Formula (External Division)",
    formula: "(x, y) = [(mx₂ − nx₁)/(m−n), (my₂ − ny₁)/(m−n)]",
    desc: "Jab point line segment ko externally m:n ratio me divide karta hai."
  },
  {
    name: "Midpoint Formula",
    formula: "(x, y) = [(x₁ + x₂)/2, (y₁ + y₂)/2]",
    desc: "Do points ke beech ka midpoint nikalne ke liye use hota hai."
  },
  {
    name: "Area of Triangle",
    formula: "Area = 1/2 [x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)]",
    desc: "Teen points se bane triangle ka area nikalne ke liye use hota hai."
  },
  {
    name: "Collinearity Condition",
    formula: "Area = 0",
    desc: "Agar teen points ka area 0 aaye to wo ek hi line par lie karte hain (collinear)."
  }
  ],
  exercises: [
    {
      number: "Exercise 1.1",
      questions: 4,
      videoUrl: "https://www.youtube.com/embed/jaDVQP5I15I",
    },
    { number: "Exercise 1.2", questions: 7, videoUrl: "" },
  ],
};
 