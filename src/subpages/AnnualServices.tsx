import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import { ClipboardList, Settings } from "lucide-react";
import ejemplo from "../assets/annual.png";

export default function AnnualServices() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Annual Services",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-10 text-gray-800">
          {/* Introducción */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
              <ClipboardList className="text-btn" /> Annual Service for EVs
            </h2>
            <p className="text-lg text-gray-700">
              If you already work with us, we will let you know when your car needs maintenance so you can keep driving it. If you don't work with us, what are you waiting for?
            </p>
          </div>

          {/* Importancia del servicio anual */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Settings className="text-btn" /> The Importance of Annual Service
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Multi-point inspection to detect wear and prevent costly damage.</li>
              <li>Lubrication and cleaning of mechanical brakes for emergency performance.</li>
              <li>Brake fluid replacement to maintain hydraulic efficiency.</li>
              <li>Transmission fluid servicing for drive units.</li>
              <li>Replacement of cabin filters, wiper blades, and key fob batteries.</li>
              <li>Complete HVAC system check for both passenger and battery comfort.</li>
            </ul>
          </div>

          {/* Imagen decorativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="Annual Service"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* CTA */}
          <div>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Book Your Annual Service
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
