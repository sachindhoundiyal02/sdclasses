import { useState } from "react";
import { mathChapters } from "./Class10/Maths/index";

export default function Class10() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeTab, setActiveTab] = useState("formulas");

  const selected = mathChapters.find((c) => c.id === activeChapter);

  // Chapter change karo directly sidebar se
  const handleChapterClick = (id) => {
    setActiveChapter(id);
    setActiveTab("formulas");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-red-700">📘 Class 10th — Maths</h1>
        <p className="text-gray-400 mt-1">CBSE Board | All Chapters</p>
      </div>

      <div className="flex gap-6">

        {/* LEFT — Chapter Sidebar — hamesha dikhega */}
        <div className="w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-red-100 shadow overflow-hidden sticky- top-4">
            <div className="bg-red-700 text-white px-4 py-3 text-sm font-bold tracking-wide">
               📑Chapters
            </div>
            {mathChapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleChapterClick(ch.id)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 border-b border-gray-100 transition text-sm font-medium
                  ${activeChapter === ch.id
                    ? "bg-red-50 text-red-700 border-l-4 border-l-red-600"
                    : "hover:bg-gray-50 text-gray-700"
                  }`}
              >
                <span className="text-lg">{ch.icon}</span>
                <span>{ch.name}</span>
                <span className="ml-auto text-xs text-gray-400">
                  {ch.formulas.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="flex-1">
          {!selected ? (

            // ── Default: All chapters grid ──
            <div>
              {/* <p className="text-gray-400 mb-4 text-sm">
                👈 Select Chapters
              </p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {mathChapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterClick(ch.id)}
                    className="bg-white border border-red-100 rounded-2xl p-5 text-left shadow hover:shadow-md hover:border-red-300 transition group"
                  >
                    <div className="text-3xl mb-2">{ch.icon}</div>
                    <h3 className="font-bold text-gray-800 group-hover:text-red-700 transition">
                      {ch.name}
                    </h3>
                    <p className="text-sm text-red-500 mt-1">
                      {ch.formulas.length} formulas
                    </p>
                  </button>
                ))}
              </div>
            </div>

          ) : (

            // ── Chapter Detail ──
            <div>

              {/* Top bar — back + chapter name + prev/next */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">

                {/* Back Button */}
                <button
                  onClick={() => setActiveChapter(null)}
                  className="flex items-center gap-1 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-100 transition"
                >
                  ← Back
                </button>

                {/* Chapter Name */}
                <h2 className="text-2xl font-bold text-red-700 flex-1">
                  {selected.icon} {selected.name}
                </h2>

                {/* Prev / Next Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const idx = mathChapters.findIndex(c => c.id === activeChapter);
                      if (idx > 0) handleChapterClick(mathChapters[idx - 1].id);
                    }}
                    disabled={mathChapters.findIndex(c => c.id === activeChapter) === 0}
                    className="px-4 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 transition disabled:opacity-30"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => {
                      const idx = mathChapters.findIndex(c => c.id === activeChapter);
                      if (idx < mathChapters.length - 1) handleChapterClick(mathChapters[idx + 1].id);
                    }}
                    disabled={mathChapters.findIndex(c => c.id === activeChapter) === mathChapters.length - 1}
                    className="px-4 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 transition disabled:opacity-30"
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* Tabs — Formulas / Exercises */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("formulas")}
                  className={`pb-2 text-sm font-bold transition ${
                    activeTab === "formulas"
                      ? "border-b-2 border-red-600 text-red-700"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  📐 Formulas ({selected.formulas.length})
                </button>
                <button
                  onClick={() => setActiveTab("exercises")}
                  className={`pb-2 text-sm font-bold transition ${
                    activeTab === "exercises"
                      ? "border-b-2 border-red-600 text-red-700"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  📝 Exercises ({selected.exercises.length})
                </button>
              </div>

              {/* Formulas Tab */}
              {activeTab === "formulas" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selected.formulas.map((f, i) => (
                    <div key={i}
                      className="bg-white border border-red-100 rounded-xl p-5 shadow hover:shadow-md transition">
                      <p className="text-xs text-red-400 font-semibold uppercase tracking-wide mb-1">
                        Formula {i + 1}
                      </p>
                      <h3 className="font-bold text-gray-800 mb-2">{f.name}</h3>
                      <div className="bg-red-50 rounded-lg px-4 py-3 text-center">
                        <p className="text-lg font-bold text-red-700">{f.formula}</p>
                      </div>
                      {f.desc && (
                        <p className="text-xs text-gray-400 mt-2 text-center">{f.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Exercises Tab */}
              {activeTab === "exercises" && (
                <div className="flex flex-col gap-4">
                  {selected.exercises.map((ex, i) => (
                    <div key={i}
                      className="bg-white border border-red-100 rounded-xl p-5 shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-gray-800">{ex.number}</h3>
                        <span className="text-sm text-gray-400">
                          {ex.questions} Questions
                        </span>
                      </div>
                      {ex.videoUrl ? (
                        <iframe
                          src={ex.videoUrl}
                          className="w-full rounded-lg"
                          height="250"
                          allowFullScreen
                        />
                      ) : (
                        <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm">
                          🎥 Video coming soon...
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}