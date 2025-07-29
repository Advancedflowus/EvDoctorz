import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import {
  CircleDashed,
  RefreshCcw,
  MoveVertical,
  ShieldCheck,
  Settings,
  Zap,
  Gauge,
  Wrench
} from "lucide-react";
import tiresImage from "../assets/tires.png";

export default function TiresBalanceMounting() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "New Tires, Balance and Mounting",
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
              <CircleDashed className="text-btn" /> Fresh Tires, Fresh Performance
            </h2>
            <p className="text-lg text-gray-700">
              Installing new tires is one of the best ways to improve your vehicle’s safety, handling, and overall driving experience. Whether you're replacing worn-out tires or upgrading for better performance, <span className="font-semibold text-btn">proper installation is key</span>.
            </p>
          </div>

          {/* Montaje de precisión */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Settings className="text-btn" /> Precision Mounting Matters
            </h3>
            <p className="text-lg text-gray-700">
              Mounting isn’t just putting a tire on a rim — it’s about ensuring a perfect seal, correct rotation direction, and proper alignment with your vehicle’s specifications.
            </p>
          </div>

          {/* Por qué es importante el balanceo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <MoveVertical className="text-btn" /> Why Balancing Is Essential
            </h3>
            <p className="text-lg text-gray-700">
              Every tire and wheel has slight weight variations. Balancing corrects these imperfections by distributing weight evenly across the wheel, eliminating vibrations and uneven tread wear.
            </p>
          </div>

          {/* Beneficios */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <ShieldCheck className="text-btn" /> Smoother, Safer Ride
            </h3>
            <p className="text-lg text-gray-700">
              Properly mounted and balanced tires result in a smoother ride, improved fuel efficiency, and better control at all speeds.
            </p>
          </div>

          {/* Protección del vehículo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Zap className="text-btn" /> Protect Your Investment
            </h3>
            <p className="text-lg text-gray-700">
              Skipping the balancing step can shorten tire life, damage suspension components, and create unnecessary stress on your steering system.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={tiresImage}
              alt="Tire mounting and balancing"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Cuándo balancear */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Gauge className="text-btn" /> When to Balance
            </h3>
            <p className="text-lg text-gray-700">
              Every time you install new tires, you should balance them. You should also consider rebalancing if you feel vibrations at high speeds or notice uneven wear.
            </p>
          </div>

          {/* Servicio completo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <RefreshCcw className="text-btn" /> Complete Service in One Visit
            </h3>
            <p className="text-lg text-gray-700">
              We offer full-service tire mounting and balancing using advanced equipment to ensure your tires perform their best from day one.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Schedule Your Tire Service
            </h3>
            <p className="text-lg text-gray-700">
              Ready for a smoother, safer ride? Let our technicians handle your new tires with precision.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Book Tire Mounting & Balancing
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
