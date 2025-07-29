import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanel from "../components/RightPanel";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Locations() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Our Locations",
      subtitle: "Explore our amazing services and locations.",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10">
        <div className="flex flex-col gap-6">
          <p className="text-gray-700 text-lg leading-relaxed font-bitter">
            Our professional electric vehicle services are available at three different locations, all
            adhering to the best standards to provide maintenance and repairs worthy of your satisfaction.
            View our individual location pages to learn more about the Electrified Garage near you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Amesbury */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <Link to="/locations/amesbury">
                <h3 className="text-xl font-semibold text-orange-500 mb-4 hover:underline transition">
                  Amesbury
                </h3>
              </Link>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition">
                <FaPhoneAlt className="text-sm" />
                <a href="tel:6036650020" className="hover:underline"> (603) 665-0020 </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition mt-2">
                <FaEnvelope className="text-sm" />
                <a href="mailto:info@electrifiedgarage.com" className="hover:underline">
                  info@electrifiedgarage.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition mt-2">
                <FaMapMarkerAlt className="text-sm" />
                <Link to="/locations/amesbury" className="hover:underline">
                  72 Elm Street, Amesbury MA 01913
                </Link>
              </div>
            </div>

            {/* Ocala */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <Link to="/locations/ocala">
                <h3 className="text-xl font-semibold text-orange-500 mb-4 hover:underline transition">
                  Ocala
                </h3>
              </Link>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition">
                <FaPhoneAlt className="text-sm" />
                <a href="tel:3523549006" className="hover:underline"> (352) 354-9006 </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition mt-2">
                <FaEnvelope className="text-sm" />
                <a href="mailto:ocala@electrifiedgarage.com" className="hover:underline">
                  ocala@electrifiedgarage.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition mt-2">
                <FaMapMarkerAlt className="text-sm" />
                <Link to="/locations/ocala" className="hover:underline">
                  1829 NW 10th St, Ocala, FL, 34475
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightPanel />
    </div>
  );
}