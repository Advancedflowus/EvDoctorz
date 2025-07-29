import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import ejemplo from "../assets/hardware.png";
import {
  Wrench,
  Cpu,
  BatteryCharging,
  Zap,
  Info,
  Settings,
  HelpCircle,
  MonitorSmartphone,
} from "lucide-react";

export default function Hardware() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Hardware Retrofits",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
            <Wrench className="text-btn" /> Upgrade Your EV with Smart Hardware Retrofitting
          </h2>
          <p className="text-lg">
            Maximize your EV's potential with advanced hardware upgrades designed to enhance charging, performance, and usability. At <span className="font-semibold text-btn">EV Doctorz</span>, our certified technicians bring years of hands-on Tesla and EV experience to every retrofit.
          </p>
        </section>

        {/* Imagen ilustrativa */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={ejemplo}
            alt="Hardware Retrofit"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ¿Qué es un retrofit? */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Cpu className="text-btn" /> What Are Hardware Retrofits?
          </h3>
          <p className="text-lg text-gray-700">
            Hardware retrofitting means adding or replacing components in your EV to unlock new capabilities. Whether it’s boosting charging speeds or modernizing your interface, retrofits allow you to stay ahead of the curve without buying a new vehicle.
          </p>
        </section>

        {/* Servicios disponibles */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Settings className="text-btn" /> What We Offer
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <BatteryCharging className="text-btn w-6 h-6 mt-1" />
              <span className="text-md">
                Install a <strong>dual onboard charger</strong> for twice the home charging speed.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-btn w-6 h-6 mt-1" />
              <span className="text-md">
                Upgrade your system from a <strong>48-amp</strong> charger to a <strong>72-amp</strong> model for faster, more efficient charging.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MonitorSmartphone className="text-btn w-6 h-6 mt-1" />
              <span className="text-md">
                <strong>Modernize your display</strong> by upgrading to the latest touchscreen models with improved responsiveness and resolution.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Info className="text-btn w-6 h-6" />
              <span className="text-md">
                Unsure what’s right for your EV? Our team will help you explore the best retrofit options based on your model and goals.
              </span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <HelpCircle className="text-btn" /> Let’s Build a Smarter EV
          </h3>
          <p className="text-lg text-gray-700">
            Whether you're looking to charge faster, modernize your dashboard, or simply future-proof your EV — <span className="text-btn font-semibold">EV Doctorz</span> has you covered. Let’s turn your vision into reality.
          </p>
          <a
            href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
              Contact Us About Hardware Retrofits
            </button>
          </a>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
