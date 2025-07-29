import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import {
  Thermometer,
  Snowflake,
  AlertTriangle,
  Wrench,
  Droplets,
  ShieldCheck,
  Wind
} from "lucide-react";
import ejemplo from "../assets/hvac.png";

export default function HVAC() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Heat & Air Conditioning",
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
              <Thermometer className="text-btn" /> Stay Comfortable Year-Round
            </h2>
            <p className="text-lg text-gray-700">
              Your vehicle’s climate control system is essential — not just for comfort, but also for safety and visibility. Whether it's freezing outside or sweltering hot, you rely on your A/C and heater to work flawlessly.
            </p>
          </div>

          {/* Problemas con el aire acondicionado */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Snowflake className="text-btn" /> A/C Not Cooling Like It Used To?
            </h3>
            <p className="text-lg text-gray-700">
              Low refrigerant levels or undetected leaks can severely reduce your A/C’s performance. If your cabin takes too long to cool or the air isn’t cold enough, it’s time for a system check.
            </p>
          </div>

          {/* Recarga y restauración */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Recharge and Restore
            </h3>
            <p className="text-lg text-gray-700">
              Our A/C recharging service restores refrigerant to the proper level, helping your system deliver cold air quickly and consistently.
            </p>
          </div>

          {/* Detección de fugas */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Droplets className="text-btn" /> Leak Detection and Repair
            </h3>
            <p className="text-lg text-gray-700">
              We go beyond just adding refrigerant. Our technicians test for leaks using advanced diagnostic tools to pinpoint any weak spots in hoses, fittings, or the compressor system.
            </p>
          </div>

          {/* Protección del sistema */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <ShieldCheck className="text-btn" /> Protect Your System
            </h3>
            <p className="text-lg text-gray-700">
              Ignoring small leaks can lead to major damage over time. Catching them early helps you avoid expensive repairs and keeps your system running efficiently.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="Heat and Air Conditioning Service"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Inspección completa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <AlertTriangle className="text-btn" /> Full Heating and Cooling Inspection
            </h3>
            <p className="text-lg text-gray-700">
              We inspect the full HVAC system — including blower motors, cabin filters, and thermostats — to ensure your vehicle is ready for any season.
            </p>
          </div>

          {/* Servicio rápido y confiable */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wind className="text-btn" /> Fast, Reliable Climate Control Service
            </h3>
            <p className="text-lg text-gray-700">
              With quick diagnostics and expert service, we’ll have your vehicle comfortable again in no time.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Thermometer className="text-btn" /> Book Your HVAC Service Today
            </h3>
            <p className="text-lg text-gray-700">
              Don’t wait for the temperature to become unbearable — schedule your HVAC checkup now and drive in comfort all year long.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Book Your HVAC Service Today
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
