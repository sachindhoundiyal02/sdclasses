// export default function FormulaCard({ formula, index }) {
//   return (
//     <div className="bg-white border border-red-100 rounded-xl p-5 shadow hover:shadow-md transition">

//       <p className="text-xs text-red-400 font-semibold uppercase tracking-wide mb-1">
//         Formula {index + 1}
//       </p>

//       <h3 className="font-bold text-gray-800 mb-3">{formula.name}</h3>

//       {/* Image hai to image, nahi to text */}
//       {formula.image ? (
//         <div className="bg-red-50 rounded-lg p-3 flex justify-center">
//           <img
//             src={formula.image}
//             alt={formula.name}
//             className="max-h-32 object-contain"
//           />
//         </div>
//       ) : (
//         <div className="bg-red-50 rounded-lg px-4 py-3 text-center">
//           <p className="text-lg font-bold text-red-700">{formula.formula}</p>
//         </div>
//       )}

//       {formula.desc && (
//         <p className="text-xs text-gray-400 mt-2 text-center">{formula.desc}</p>
//       )}

//     </div>
//   );
// }