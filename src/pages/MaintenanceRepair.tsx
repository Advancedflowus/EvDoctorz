import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelMaintenance from "../components/RightPanelMaintenance";
import { Wrench, Info, Settings } from "lucide-react";
import ejemplo from "../assets/service1.png";

export default function LocationOcala() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Maintenance & Repair",
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
                <Wrench className="text-btn" /> Expert Maintenance & Repair
                </h2>
                <p className="text-gray-700 text-lg flex gap-2">
                <Info className="text-btn mt-1" />
                EV Doctorz offers numerous types of maintenance and repair services. Whether you’re having an issue with your battery, or you just need to come in for routine service, we have you covered.
                </p>
                <p className="text-gray-700 text-lg flex gap-2">
                <Settings size={20} className="text-btn mt-1" />
                Any questions or concerns? Please let us know! We go out of our way to make sure every customer’s experience is the best it can be.
                </p>
            </div>

            {/* Imagen decorativa */}
            <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                src={ejemplo}
                alt="Maintenance Service"
                className="w-full h-auto object-cover"
                />
            </div>
            </section>
          </div>
    
          <RightPanelMaintenance />
        </div>
      );
  }
