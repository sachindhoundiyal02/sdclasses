import Formulas from "../../../Formulas/Formulas";

export const someApplicationTrigonometry = {
    id:9,
    name: "Some Application of Trigonometry",
    icon: "📐",
   formulas: [
    {
    name: "Using tangent Ratio",
    formula: "tan θ = Perpendicular / Base",
    desc: "Angle of elevation ya depression ke case me height aur distance ka relation tanθ se nikalte hain."
  },
  {
    name: "Using Sine Ratio",
    formula: "sin θ = Perpendicular / Hypotenuse",
    desc: "Jab hypotenuse diya ho to height nikalne ke liye sinθ use karte hain."
  },
  {
    name: "Using Cosine Ratio",
    formula: "cos θ = Base / Hypotenuse",
    desc: "Base ya distance nikalne ke liye cosθ use hota hai."
  },
  
  {
    name: "Base using Cosine",
    formula: "Base = Hypotenuse × cos θ",
    desc: "Distance ya base nikalne ke liye cosθ use hota hai."
  },
  {
    name: "Angle of Elevation",
    formula: "Angle between horizontal line and line of sight (upwards)",
    desc: "Jab object upar ho to jo angle banta hai use angle of elevation kehte hain."
  },
  {
    name: "Angle of Depression",
    formula: "Angle between horizontal line and line of sight (downwards)",
    desc: "Jab object niche ho to jo angle banta hai use angle of depression kehte hain."
  }
  ],
  exercises: [
    { number: "Exercise 9.2", questions: 4, videoUrl: "https://www.youtube.com/embed/EGKrNzMjuIs" }, 
  ],
};