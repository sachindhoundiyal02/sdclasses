import { Link } from "react-router-dom";
import logo from "../assets/sd assets/sd_Logo.png"; 
import { useState, useEffect, useRef } from "react";


const formulaClasses = [
  // { label: "📔 Class 9th", path: "/pages/Classes/Class-9" }, 
  { label: "📘 Class 10th", path: "/pages/Classes/Class-10" }, 
  // { label: "📗 Class 11th", path: "/pages/Classes/Class-11" }, 
  // { label: "📕 Class 12th", path: "/pages/Classes/Class-12" },
];



export default function Navbar() {
     const [dropdownOpen, setDropdownOpen] = useState(false);

     const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <nav className="bg-white text-red-950 px-8 py-3 flex items-center justify-between sticky top-0 shadow-lg p-4">
      
      {/* LEFT — Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="Site Logo"
          className="w-15 object-contain"
        /> 
      </Link>

      {/* RIGHT — Nav Links */}
      <div className="flex gap-8 text-lg font-semibold items-center">
        <Link to="/" className="hover:text-red-600 transition ">Home</Link>

        {/* <Link to="/formulas" className="hover:text-red-600 transition">Formulas</Link> */}
           {/* Formulas Dropdown */}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-red-600 transition focus:outline-none"
          >
             Formulas
            <svg
              className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-10 left-0 bg-white text-gray-800 rounded-xl shadow-xl w-48 py-2 border border-gray-100">
              {formulaClasses.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/question-papers" className="hover:text-red-600 transition">Question Papers</Link> 
        <Link
          to="/login"
          className="bg-red-600 text-white py-2 rounded-[0.5vw] font-bold hover:bg-sky-100 hover:text-sky-800 transition px-8"
        >
         Login
        </Link>

      </div>

    </nav>
  );
}