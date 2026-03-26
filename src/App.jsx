import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FootBar from "./components/Footer";
import Home from "./pages/Home";
import QuestionPapers from "./pages/QuestionPapers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Formulas from "./pages/Formulas/Formulas";

// import Class9 from "./pages/Classes/Class9";
import Class10 from "./pages/Classes/Class10";
// import Class11 from "./pages/Classes/Class11";
// import Class12 from "./pages/Classes/Class12";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/sdclasses" element={<Home />} />
            <Route path="/formulas" element={<Formulas />} />
            <Route path="/question-papers" element={<QuestionPapers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/pages/Classes/class-9" element={<Class9 />} /> */}
            <Route path="/pages/Classes/class-10" element={<Class10 />} />
            {/* <Route path="/pages/Classes/class-11" element={<Class11 />} />
            <Route path="/pages/Classes/Class-12" element={<Class12 />} /> */}
          </Routes>
        </main>

        <FootBar />
      </div>
    </BrowserRouter>
  );
}
