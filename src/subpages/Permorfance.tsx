import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import {
  GaugeCircle,
  Wrench,
  Zap,
  Layers3,
  Rocket,
} from "lucide-react";
import ejemplo from "../assets/performance.png";

export default function Performance() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Performance Upgrades",
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
              <Rocket className="text-btn" /> Take Your EV to the Next Level
            </h2>
            <p className="text-lg">
              Electric vehicles are already lightning fast — but for those who crave *even more*, <span className="font-semibold text-btn">EV Doctorz</span> offers the ultimate performance upgrades. From Teslas to other leading EVs, we’ll help you extract every ounce of power, control, and thrill.
            </p>
          </div>

          {/* ¿Por qué elegirnos? */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Why Upgrade With Us?
            </h3>
            <p className="text-lg text-gray-700">
              Our team brings decades of EV experience to the table — especially with Tesla platforms. Whether you have a build in mind or want expert recommendations, we’ll guide you through a custom solution that balances performance, reliability, and style.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="Tesla Performance Upgrades"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Qué ofrecemos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GaugeCircle className="text-btn" /> Performance Packages Available
            </h3>
            <p className="text-lg text-gray-700">
              Whether you're looking for aggressive track performance or smooth, enhanced street driving, we offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Horsepower upgrades for Teslas and other EVs</li>
              <li>Improved throttle response & rapid acceleration kits</li>
              <li>Drift Mode modules for performance handling</li>
              <li>
                Suspension tuning: lowering springs, coil-overs, adjustable control arms, sway bars
              </li>
              <li>
                Brake kits: slotted/drilled rotors, high-performance pads, stainless-steel lines
              </li>
              <li>
                Wheel/Tire packages — OEM and aftermarket — designed for ultimate grip and traction
              </li>
              <li>
                Bigger and better tires to maximize your EV’s power-to-ground delivery
              </li>
            </ul>
          </div>

          {/* Personalización */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Layers3 className="text-btn" /> Built for YOU
            </h3>
            <p className="text-lg text-gray-700">
              Your upgrade path is entirely yours. We specialize in personalized builds — combining mechanical performance with aesthetic enhancements to create an EV that stands out in every way.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Zap className="text-btn" /> Ready to Feel the Difference?
            </h3>
            <p className="text-lg text-gray-700">
              Don't just drive electric — drive *electrified*. Let us turn your EV into a performance machine with the expertise and parts it deserves.
            </p>
            <a
              href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Schedule Performance Upgrade
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
