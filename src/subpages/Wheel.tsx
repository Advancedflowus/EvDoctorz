import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import { Zap } from "lucide-react";
import highVoltageImg from "../assets/voltage.png";

export default function HighVoltageRepair() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "High Voltage and Drive Unit Repair",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-6 text-gray-800">
          {/* Título llamativo */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
              <Zap className="text-btn" /> Powering Your EV Forward
            </h2>
            <p className="text-lg text-gray-700">
              We handle high voltage and drive unit repairs with precision and care.
            </p>
            <p className="text-lg text-gray-700">
              From battery power issues to motor performance, we bring your EV back to peak condition.
            </p>
            <p className="text-lg text-gray-700">
              Our expert team ensures fast, reliable service for the most critical components.
            </p>
            <p className="text-lg text-gray-700">
              Stay powered, stay moving — we’ve got your electric drive covered.
            </p>
          </div>

          {/* Imagen decorativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={highVoltageImg}
              alt="High Voltage and Drive Unit Repair"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Request High Voltage Service
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
