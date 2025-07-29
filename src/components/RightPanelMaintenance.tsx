import {
    ChevronRight,
    Facebook,
    Instagram,
    Youtube,
    Wrench
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { FaTiktok } from "react-icons/fa";
  
  const RightPanelMaintenance = () => {
    const services = [
      { name: "Annual Services", path: "/services/maintenance-repair/annual-services" },
      { name: "High Voltage and Drive Unit Repair", path: "/services/maintenance-repair/voltage" },
      { name: "Wheel Alignment", path: "/services/maintenance-repair/alignment" },
      { name: "Suspension", path: "/services/maintenance-repair/suspension" },
      { name: "New Tires, Balance and Mounting", path: "/services/maintenance-repair/tires" },
      { name: "Heat & Air Conditioning", path: "/services/maintenance-repair/hvac" },
      { name: "OEM Body Part Replacement", path: "/services/maintenance-repair/replacement" },
      
    ];
  
    return (
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl space-y-10 border border-gray-100">
        {/* Sección de Mantenimiento */}
        <div>
          <div className="flex items-center mb-6">
              <Wrench className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 font-bitter">MAINTENANCE & REPAIR</h3>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  to={service.path}
                  className="text-lg font-bitter flex items-center justify-between py-5 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {service.name}
                  </span>
                  <ChevronRight className="text-gray-400 group-hover:text-green-600 transition-transform group-hover:translate-x-3" size={20} />
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
  
  export default RightPanelMaintenance;