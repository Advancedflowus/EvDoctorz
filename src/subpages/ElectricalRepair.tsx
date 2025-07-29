import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import {
  Car,
  Settings,
  Wrench,
  CheckCircle
} from "lucide-react";
import ejemplo from "../assets/oem.png"; 

export default function OEMBodyPartReplacement() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "OEM Body Part Replacement",
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
              <Car className="text-btn" /> Restore Your EV’s Look Without Repainting
            </h2>
            <p className="text-lg text-gray-700">
              Looking to restore your EV’s appearance without the hassle of repainting? We source color-matched, OEM body parts from trusted salvage yards across the U.S.
            </p>
            <p className="text-lg text-gray-700">
              Whether it's <span className="font-semibold text-btn">doors, mirrors, fenders, hoods, or trunks</span> — we find clean, factory-painted replacements that bring your vehicle back to like-new condition.
            </p>
          </div>

          {/* Beneficios: ahorro y eficiencia */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Save Time and Money
            </h3>
            <p className="text-lg text-gray-700">
              Avoid costly insurance claims and long wait times. Let us locate the exact parts your EV needs and handle the installation efficiently.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="OEM Body Part Replacement"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Servicios adicionales */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="text-btn" /> More Than Just Body Parts
            </h3>
            <p className="text-lg text-gray-700">
              Need more? We also work with trusted third-party service partners offering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Paintless dent removal</li>
              <li>Professional detailing</li>
              <li>Window tinting</li>
              <li>Rim repair</li>
            </ul>
            <p className="text-lg text-gray-700">
              All in one smooth and coordinated process to restore your EV’s look.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Settings className="text-btn" /> Schedule Your OEM Part Consultation
            </h3>
            <p className="text-lg text-gray-700">
              Let us help you bring your EV back to life — fast, affordably, and without the need for costly repainting.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Request OEM Replacement Quote
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
