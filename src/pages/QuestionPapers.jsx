const papers = [
  { subject: "Mathematics", year: "2024", download: "#" },
  { subject: "Physics", year: "2024", download: "#" },
  { subject: "Chemistry", year: "2023", download: "#" },
  { subject: "Biology", year: "2023", download: "#" },
];

export default function QuestionPapers() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-red-700 mb-6">Question Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {papers.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">{p.subject}</h3>
              <p className="text-sm text-gray-400">Year: {p.year}</p>
            </div>
            <a href={p.download}
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}