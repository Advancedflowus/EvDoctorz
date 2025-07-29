import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import { Wrench, Info } from "lucide-react";
import customImage from "../assets/service2.png";

export default function LocationOcala() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Customization",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-6">
          {/* Texto descriptivo */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
              <Wrench className="text-btn" /> Advised Customization
            </h2>
            <p className="text-gray-700 text-lg flex gap-2">
              <Info className="text-btn mt-1" />
              Looking to enhance your EV’s look or performance? We offer a variety of options beyond factory standards — including third-party aftermarket accessories.
            </p>
            <p className="text-gray-700 text-lg">
              Let us take care of your EV with our partners for interior and exterior customizations.
            </p>
          </div>

          {/* Imagen decorativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={customImage}
              alt="Customization Example"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
