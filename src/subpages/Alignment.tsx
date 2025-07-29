import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import {
  MoveRight,
  HelpCircle,
  Settings2,
  Sparkles,
  Wrench,
  Compass,
  AlertTriangle,
  CheckCircle,
  ShieldCheck
} from "lucide-react";
import alignmentImage from "../assets/aligment.png";

export default function Alignment() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Wheel Alignment",
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
              <AlertTriangle className="text-btn" /> Pulling to One Side?
            </h2>
            <p className="text-lg text-gray-700">
              If your steering wheel vibrates, your car drifts to one side, or your tires are wearing unevenly, it’s a clear sign your wheels are out of alignment.
            </p>
          </div>

          {/* ¿Qué es una alineación 4 ruedas? */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Compass className="text-btn" /> What Is a 4-Wheel Alignment?
            </h3>
            <p className="text-lg text-gray-700">
              A 4-wheel alignment adjusts all the angles of your wheels to match factory specifications, improving handling and control.
            </p>
          </div>

          {/* Por qué es importante */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HelpCircle className="text-btn" /> Why It Matters
            </h3>
            <p className="text-lg text-gray-700">
              Misaligned wheels can affect your vehicle’s stability, increase fuel consumption, and wear down your tires much faster.
            </p>
          </div>

          {/* Beneficios específicos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Sparkles className="text-btn" /> Sharper Steering
            </h3>
            <p className="text-lg text-gray-700">
              Proper alignment restores smooth steering and keeps your wheel centered, improving your driving comfort and control.
            </p>

            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Tire Savings
            </h3>
            <p className="text-lg text-gray-700">
              Avoid early tire replacement. Alignment helps your tires wear evenly and last longer, saving you hundreds of dollars.
            </p>

            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <ShieldCheck className="text-btn" /> Safety First
            </h3>
            <p className="text-lg text-gray-700">
              Accurate alignment improves your car’s response during braking or emergency turns, keeping you safer on the road.
            </p>
          </div>

          {/* Imagen representativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={alignmentImage}
              alt="Wheel Alignment"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Causas comunes */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Settings2 className="text-btn" /> Common Causes of Misalignment
            </h3>
            <p className="text-lg text-gray-700">
              Potholes, curb hits, minor collisions, or regular wear over time can throw off your alignment.
            </p>
          </div>

          {/* Frecuencia recomendada */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <MoveRight className="text-btn" /> How Often Should You Align?
            </h3>
            <p className="text-lg text-gray-700">
              It’s recommended every 6 to 12 months, after hitting something hard, or when installing new tires.
            </p>
          </div>

          {/* Precisión en ambas ruedas */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="text-btn" /> Front and Rear Precision
            </h3>
            <p className="text-lg text-gray-700">
              4-wheel alignment adjusts both front and rear wheels — perfect for vehicles with independent suspension systems.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Ready for a Smoother Ride?
            </h3>
            <p className="text-lg text-gray-700">
              Let our experts align your EV for better control, longer tire life, and a safer experience on the road.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Request Wheel Alignment 
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
