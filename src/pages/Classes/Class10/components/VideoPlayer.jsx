// // // src/pages/Classes/Class10/components/VideoPlayer.jsx

// // export default function VideoPlayer({ exercise }) {
// //   return (
// //     <div className="bg-white border border-red-100 rounded-xl p-5 shadow">
// //       <div className="flex justify-between items-center mb-3">
// //         <h3 className="font-bold text-gray-800">{exercise.number}</h3>
// //         <span className="text-sm text-gray-400">{exercise.questions} Questions</span>
// //       </div>

// //       {exercise.videoUrl ? (
// //         <iframe
// //           src={exercise.videoUrl}
// //           className="w-full rounded-lg"
// //           height="250"
// //           allowFullScreen
// //         />
// //       ) : (
// //         <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm">
// //           🎥 Video coming soon...
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// export default function VideoPlayer({ exercise }) {
//   return (
//     <div className="bg-white border border-red-100 rounded-xl p-5 shadow">
//       <div className="flex justify-between items-center mb-3">
//         <h3 className="font-bold text-gray-800">{exercise.number}</h3>
//         <span className="text-sm text-gray-400">{exercise.questions} Questions</span>
//       </div>

//       {exercise.videoUrl ? (
//         <iframe
//           src={exercise.videoUrl}   
//           className="w-full rounded-lg"
//           height="280"
//           allowFullScreen
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
//         />
//       ) : (
//         <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm">
//           🎥 Video coming soon...
//         </div>
//       )}
//     </div>
//   );
// }