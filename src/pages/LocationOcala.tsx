import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanel from "../components/RightPanel";
import { Wrench, Settings, ShieldCheck, Users } from "lucide-react";

export default function LocationOcala() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Ocala, FL",
        subtitle: "",
      });
    }, []);
  
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <ShieldCheck size={24} /> Dedicated EV Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Electric vehicles require <span className="font-semibold text-orange-500">specialized care</span> that most general mechanics can’t provide.
                At <strong>The Electrified Garage in Ocala, FL</strong>, our technicians are fully trained and focused on EVs —
                especially Teslas — ensuring you get the best service and results in the region.
              </p>
            </section>
    
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <Users size={24} /> The Best Service Around
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We know how much your EV means to you — and we treat it the same way we treat our own. With over <strong>24 years of combined Tesla Factory Trained Experience</strong>,
                our technicians go beyond standard procedures to offer a <span className="text-orange-500 font-medium">personalized experience</span> tailored to your needs.
              </p>
            </section>
    
            {/* Placeholder de imagen */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 italic">
              Image Placeholder — Add photo of Ocala team, garage, or EVs here
            </div>
    
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <Settings size={24} /> What We Offer
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800">Protection</h3>
                  <p className="text-gray-600 text-sm">
                    Our extended warranty product, <strong>Electrified Care</strong>, ensures your car is still covered after the factory warranty ends.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800">Customization</h3>
                  <p className="text-gray-600 text-sm">
                    From suspension upgrades to battery enhancements and wheels — personalize your EV with us.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800">Maintenance & Repair</h3>
                  <p className="text-gray-600 text-sm">
                    Whether it's alignment, electrical diagnosis, or regular servicing, we've got you covered.
                  </p>
                </div>
              </div>
            </section>
    
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <Wrench size={24} /> Our Vendors
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>EcoHitch</li>
                <li>Torklift</li>
                <li>Vossen Wheels</li>
                <li>Savini Wheels</li>
                <li>EVOffer</li>
              </ul>
            </section>
    
            <section className="bg-orange-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Looking for an EV Repair Shop in Ocala, FL?</h3>
              <p className="text-gray-800">
                Look no further. <strong>The Electrified Garage</strong> is ready to help with maintenance, upgrades,
                and even electric vehicle conversions.{" "}
                <a target="_blank" href="/contact" className="text-orange-500 font-semibold hover:underline">
                  Contact us today to get started.
                </a>
              </p>
            </section>
          </div>
    
          <RightPanel />
        </div>
      );
  }
