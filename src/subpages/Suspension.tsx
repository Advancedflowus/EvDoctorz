import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import {
  Car,
  MoveVertical,
  ShieldCheck,
  Wrench,
  AlertCircle,
  Volume2,
  HelpCircle,
  BellRing
} from "lucide-react";
import suspensionImage from "../assets/suspension.png";

export default function Suspension() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Suspension",
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
              <Car className="text-btn" /> Suspension Repair for Electric Vehicles
            </h2>
            <p className="text-lg text-gray-700">
              Electric vehicles are heavier than traditional cars due to their battery packs. This added weight increases the strain on suspension components and often causes excessive negative camber — where the top of the tire leans inward — leading to uneven tire wear and reduced contact with the road.
            </p>
          </div>

          {/* Problemas de desgaste de neumáticos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <MoveVertical className="text-btn" /> Tire Wear Problems
            </h3>
            <p className="text-lg text-gray-700">
              Uneven camber causes your tires, especially the inner edges, to wear out much faster. Left unchecked, this can result in frequent and expensive tire replacements.
            </p>
          </div>

          {/* Importancia de la reparación */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <ShieldCheck className="text-btn" /> The Importance of Suspension Repair
            </h3>
            <p className="text-lg text-gray-700">
              By repairing or adjusting your EV’s suspension system, we restore proper alignment and camber balance. This helps your tires last longer, reduces wear, and improves road contact.
            </p>
          </div>

          {/* Beneficio: conducción suave */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Enjoy a Smoother Ride
            </h3>
            <p className="text-lg text-gray-700">
              A worn suspension leads to bumpy, unstable driving. With proper repair, your EV will feel more balanced, more stable, and much more comfortable on every trip.
            </p>
          </div>

          {/* Beneficio: cabina silenciosa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Volume2 className="text-btn" /> A Quieter Cabin Experience
            </h3>
            <p className="text-lg text-gray-700">
              Suspension health also impacts your cabin. A repaired system means fewer vibrations and road noise — so you enjoy a quieter, more peaceful ride.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={suspensionImage}
              alt="Suspension Maintenance"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Ruidos extraños */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <BellRing className="text-btn" /> Strange Noises?
            </h3>
            <p className="text-lg text-gray-700">
              Clicking, clunking, or creaking sounds when driving or turning are often early signs of suspension damage. These noises can indicate worn bushings, control arms, or ball joints that need attention.
            </p>
          </div>

          {/* Riesgos de no reparar a tiempo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <AlertCircle className="text-btn" /> Avoid Bigger Repairs
            </h3>
            <p className="text-lg text-gray-700">
              Delaying suspension service can lead to misalignment, steering issues, uneven braking, and stress on other vital systems. Early repair prevents costly problems later.
            </p>
          </div>

          {/* Por qué importa más en EVs */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HelpCircle className="text-btn" /> Why It Matters More for EVs
            </h3>
            <p className="text-lg text-gray-700">
              EVs rely on a properly functioning suspension more than ever — it helps distribute weight evenly, maintain handling, and protect other vehicle systems from unnecessary stress.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> Schedule Your Suspension Repair
            </h3>
            <p className="text-lg text-gray-700">
              Book your appointment today and let our EV experts restore comfort, control, and safety to every drive.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Book Your Suspension Service Today
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelMaintenance />
    </div>
  );
}
