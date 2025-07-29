import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import {
  ArrowDownNarrowWide,
  SlidersHorizontal,
  Zap,
  HelpCircle,
} from "lucide-react";
import suspensionImg from "../assets/tesla.png"; 

export default function SuspensionLowering() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Air Suspension Lowering on Tesla",
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
              <ArrowDownNarrowWide className="text-btn" /> Lower Your Tesla, Elevate the Look
            </h2>
            <p className="text-lg">
              Whether you're looking to fine-tune your ride height for a sportier aesthetic or want better performance and handling, <span className="font-semibold text-btn">EV Doctorz</span> offers professional air suspension lowering with precision link installation for Tesla models equipped with adaptive air systems.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={suspensionImg}
              alt="Lowered Tesla Suspension"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Beneficios */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <SlidersHorizontal className="text-btn" /> Why Lower Your Tesla?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Enhance your EV’s road presence with a sleek, aggressive stance</li>
              <li>Reduce drag for improved range at highway speeds</li>
              <li>Lower center of gravity for better cornering and stability</li>
              <li>Full adjustability using custom links for your preferred height</li>
              <li>No permanent changes — OEM components remain intact</li>
            </ul>
          </div>

          {/* Nuestro proceso */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Zap className="text-btn" /> Our Process
            </h3>
            <p className="text-lg text-gray-700">
              Our certified technicians install custom links designed to interface with your Tesla’s air suspension system. You’ll be able to enjoy a factory ride with a custom look — all while maintaining functionality and safety.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HelpCircle className="text-btn" /> Ready to Drop It Low?
            </h3>
            <p className="text-lg text-gray-700">
              Get the perfect stance without compromising comfort. Reach out to <span className="font-semibold text-btn">EV Doctorz</span> to schedule your suspension lowering service today.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Request Suspension Quote
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
