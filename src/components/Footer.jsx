import { Link } from "react-router-dom"; 

export default function FootBar() { 

  return (
    <>
    {/* ───── FOOTER ───── */}
      <footer className="bg-red-900 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">
                SD Classes</h3>
            <p className="text-white text-sm">
              Empowering students with the right resources to achieve academic excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-red-200 text-sm">
              <li><Link to="/" className="hover:text-yellow-300 text-white">Home</Link></li>
              <li><Link to="/formulas" className="hover:text-yellow-300 text-white">Formulas</Link></li>
              <li><Link to="/question-papers" className="hover:text-yellow-300 text-white">Question Papers</Link></li>
              <li><Link to="/login" className="hover:text-yellow-300 text-white">Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>dhoundiyalsachin792@gmail.com</li>
              <li>+91 8750586535</li>
              <li>
                <button
                  onClick={() => openWhatsApp("Hello! EduSite ke baare mein jaankari chahiye.")}
                  className="mt-2 bg-white hover:bg-green-600 text-red-900 hover:text-white py-2 px-4 rounded-full text-sm font-bold transition">
                   Chat on WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white text-sm mt-8 border-t border-red-900 pt-6">
          © 2026 SD Classes. All rights reserved.
        </div>
      </footer>
      </>
  );
}