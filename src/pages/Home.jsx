import { Link } from "react-router-dom";

const features = [
  {
    icon: "📐",
    title: "Formulas Library",
    desc: "Access well-structured and exam-focused formulas for Mathematics, Physics, and Chemistry — all in one place.",
  },
  {
    icon: "📄",
    title: "Question Papers",
    desc: "Practice with real exam papers to understand patterns and boost confidence.",
  },
  {
    icon: "⚡",
    title: "Fast & Easy",
    desc: "Find topics instantly and revise efficiently with a clean and distraction-free interface.",
  },
  // { icon: "📱", title: "Mobile Friendly", desc: "Fully optimized for seamless learning on mobile devices." },
];

// const subjects = [
//   { icon: "➕", name: "Mathematics", topics: "50+ Formulas" },
//   { icon: "⚛", name: "Physics", topics: "40+ Formulas" },
//   { icon: "🧪", name: "Chemistry", topics: "35+ Formulas" },
//   { icon: "🧬", name: "Biology", topics: "30+ Formulas" },
//   { icon: "💻", name: "Computer Science", topics: "20+ Formulas" },
//   { icon: "📊", name: "Statistics", topics: "25+ Formulas" },
// ];

const stats = [
  { number: "500+", label: "Formulas Available" },
  { number: "200+", label: "Question Papers" },
  { number: "10k+", label: "Active Students" },
  { number: "10+", label: "Subjects Covered" },
];

// const batches = [
//   { name: "Class 10 Maths", date: "1 April 2026", seats: "10 Seats Remaining", msg: "Join via WhatsApp" },
//   { name: "Class 11 Physics", date: "5 April 2026", seats: "12 Seats Left", msg: "Join via WhatsApp" },
//   { name: "Class 12 Math", date: "10 April 2026", seats: "10 Seats Left", msg: "Join via WhatsApp" },
// ];

const batches = [
  {
    name: "Class 10 Maths",
    date: "10 April",
    seats: "Only 5 seats left",
    teacherKey: "maths",
    msg: "I want to enroll in Class 10 Maths batch",
  },
  {
    name: "Class 10 Science",
    date: "12 April",
    seats: "Only 3 seats left",
    teacherKey: "science",
    msg: "I want to enroll in Class 10 Science batch",
  },
  {
    name: "Class 12 Mathematics",
    date: "12 April",
    seats: "Only 3 seats left",
    teacherKey: "maths",
    msg: "I want to enroll in Class 12 Mathematics batch",
  },
    {
    name: "Class 12 Physics/Chemistry",
    date: "12 April",
    seats: "Only 3 seats left",
    teacherKey: "science",
    msg: "I want to enroll in Class 12 Physics/Chemistry batch",
  },
     {
    name: "Spoken English",
    date: "12 April",
    seats: "Only 3 seats left",
    teacherKey: "english",
    msg: "I want to enroll in Spoken English batch",
  },
      {
    name: "Computer Science",
    date: "12 April",
    seats: "Only 3 seats left",
    teacherKey: "computer",
    msg: "I want to enroll in Computer Science batch",
  },
];

 

const TEACHERS = {
  maths: {
    name: "Sachin Sir",
    number: "8750586535",
  },
  science: {
    name: "Junaid Sir",
    number: "8130539577",
  },
  english: {
    name: "Praveen Sir",
    number: "9582774387",
  },
    computer: {
    name: "Sachin Sir",
    number: "8750586535",
  },
};
 

export default function Home() {
 
  const openWhatsApp = (number, msg) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };


return (
  <div className="font-sans text-gray-800">
    {/* ───── HERO SECTION ───── */}
    <section className="bg-linear-to-bl from-red-900 via-red-800 to-red-800  text-white py-24 px-6 text-center">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">SD Classes</h1>
      <p className="text-xl text-white max-w-5xl mx-auto mb-8">
        Master Concepts. Score Higher. Achieve More. Join thousands of students
        preparing smarter with structured formulas, previous year papers, and
        expert-designed study resources — all in one place.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          to="/formulas"
          className="bg-white text-red-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-red-900 transition"
        >
          Explore Formulas
        </Link>
        <Link
          to="/question-papers"
          className="bg-transparent border-2 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-red-700 transition"
        >
          View Question Papers
        </Link>
      </div>
    </section>

    {/* ───── STATS SECTION ───── */}
    <section className="bg-red-50 py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl py-8 shadow">
            <div className="text-4xl font-extrabold text-red-700">
              {s.number}
            </div>
            <div className="text-gray-500 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* ───── FEATURES SECTION ───── */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-2">
          Why Choose SD Classes?
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Everything you need to excel in your exams — in one powerful platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-blue-50 border border-red-100 rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg text-red-700 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── SUBJECTS SECTION ───── */}
    {/* <section className="py-16 px-6 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-2">
            Subjects Available
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Explore formulas across multiple subjects
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {subjects.map((s, i) => (
              <Link to="/formulas" key={i}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow hover:shadow-md hover:border-red-300 border border-transparent transition">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <div className="font-bold text-gray-800">{s.name}</div>
                  <div className="text-sm text-red-500">{s.topics}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

    {/* ───── UPCOMING BATCHES SECTION ───── */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-2">
          🗓 Upcoming Batches
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Limited seats available — secure your spot before it fills up!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {batches.map((b, i) => {
            const teacher = TEACHERS[b.teacherKey]; // 👈 get correct teacher

            return (
              <div
                key={i}
                className="bg-red-50 border border-blue-100 rounded-2xl p-6 flex flex-col gap-3 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-red-700">{b.name}</h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  📅 <span>Starting: {b.date}</span>
                </div>

                <div className="flex items-center gap-2 text-red-500 text-sm font-semibold">
                  🔥 <span>{b.seats}</span>
                </div>

                <button
                  onClick={() =>
                    openWhatsApp(
                      teacher.number,
                      `Hello ${teacher.name}, ${b.msg}`,
                    )
                  }
                  className="mt-2 bg-green-800 hover:bg-green-600 text-white py-2 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.851L.057 23.985l6.305-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.359-.214-3.723.976.998-3.648-.235-.374A9.818 9.818 0 1112 21.818z" />
                  </svg>
                  Enroll Now on WhatsApp
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);
}