import {
    ChevronRight,
    Facebook,
    Instagram,
    Youtube,
    Settings
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { FaTiktok } from "react-icons/fa";
  
  const RightPanelCustomization = () => {
    const customizationOptions = [
      { name: "Performance Upgrades", path: "/services/customization/performance" },
      { name: "Aftermarket Accessories", path: "/services/customization/accesories" },
      { name: "Hardware Retrofits", path: "/services/customization/hardware" },
      { name: "Battery Upgrade", path: "/services/customization/battery" },
      { name: "Tesla Air Drop", path: "/services/customization/tesla" },
      { name: "EV Wheels & Tires", path: "/services/customization/custom-tires-wheels" }
    ];
  
    return (
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl space-y-10 border border-gray-100">
        {/* Sección de Customization */}
        <div>
          <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 font-bitter">CUSTOMIZATION</h3>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {customizationOptions.map((option) => (
              <li key={option.name}>
                <Link
                  to={option.path}
                  className="text-lg font-bitter flex items-center justify-between py-5 px-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {option.name}
                  </span>
                  <ChevronRight className="text-gray-400 group-hover:text-purple-600 transition-transform group-hover:translate-x-3" size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Redes Sociales */}
        <div className="text-center">
          <h4 className="text-lg font-medium text-gray-700 mb-5 font-bitter">FOLLOW US</h4>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.facebook.com/share/19hfH46Awp/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/evdoctorz?igsh=Y25zcjhseGgzMjU%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@evdoctorz?_t=ZT-8yPNz3okvny&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-black hover:text-white transition-colors"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@EVDoctorz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default RightPanelCustomization;