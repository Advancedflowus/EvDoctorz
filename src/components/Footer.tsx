import footerImage from "../assets/teslaFooter.jpg"
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTiktok,
  } from "react-icons/fa";
import logo from "../assets/logoMecanica.png";
import FooterCredits from "../components/FooterCredits";

export default function Footer() {
    return (
      <>
        <footer className="relative text-white">
        {/* Fondo con imagen y blur */}
        <div className="absolute inset-0 bg-cover bg-center blur-sm brightness-50 z-0" style={{ backgroundImage: `url(${footerImage})` }}></div>
        
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Secciones principal */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Izquierda */}
            <div>
            <div className="mb-4">
                <a href="/">
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </a>
            </div>
              <p className="text-gray-300 text-sm font-bitter">
                EV Doctorz is your one-stop shop for EV upgrades, repairs, and diagnostics. With years of experience and trusted commercial partnerships, we deliver expert service, fast turnaround, and customized solutions for electric and hybrid vehicles.
              </p>
            </div>
            
            <div></div>
  
            {/* Centro */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-bitter">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white text-gray-300 transition font-bitter">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white text-gray-300 transition font-bitter">
                    Services
                  </Link>
                </li>
              </ul>
              <h4 className="text-lg font-semibold mt-2 mb-4 font-bitter">Contact</h4>
              <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:evdoctorz@gmail.com" 
                      className="flex items-start group hover:text-blue-800 transition-colors duration-200 cursor-pointer no-underline"
                    >
                      <div>
                        <p className="hover:text-white text-gray-300 transition font-bitter">
                          evdoctorz@gmail.com
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+16893332287" 
                      className="flex items-start group hover:text-blue-800 transition-colors duration-200 cursor-pointer no-underline"
                    >
                      <div>
                        <p className="hover:text-white text-gray-300 transition font-bitter">
                          (689) 333-2287
                        </p>
                      </div>
                    </a>
                  </li>
              </ul>
            </div>
            
  
          </div>
  
          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://www.facebook.com/share/19hfH46Awp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.tiktok.com/@evdoctorz?_t=ZT-8yPNz3okvny&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.instagram.com/evdoctorz?igsh=Y25zcjhseGgzMjU%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@EVDoctorz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaYoutube size={20} />
            </a>
          </div>
  
          {/* Línea separadora */}
          <div className="w-full my-6">
            <hr className="border-gray-600" />
          </div>
  
          {/* Links finales */}
          <div className="mt-4">
            <FooterCredits text="Powered By" />
          </div>

        </div>
      </footer>
      </>
    );
  }