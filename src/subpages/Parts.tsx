import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import {
    Wrench,
    ShoppingBasket,
    Store,
    HelpCircle,
    Hammer,
  } from "lucide-react";
import ejemplo from "../assets/parts.jpg";

export default function Parts() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Factory & Non-Factory Parts",
        subtitle: "",
      });
    }, []);
  
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
                <ShoppingBasket className="text-btn" /> Need Parts? We’ve Got You Covered
            </h2>
            <p className="text-lg">
                Whether you're after <span className="font-semibold text-btn">factory</span> or <span className="font-semibold text-btn">non-factory</span> parts, EV Doctorz can source exactly what you need. We work with vendors like <strong>EcoHitch, Vossen Wheels</strong>, and <strong>EVOffer</strong> to offer a wide range of quality parts.
            </p>
            </section>

            {/* Imagen */}
            <div className="rounded-xl overflow-hidden shadow-lg">
            <img
                src={ejemplo}
                alt="Electric vehicle parts"
                className="w-full h-auto object-cover"
            />
            </div>

            {/* Parts and Installation */}
            <section className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Wrench className="text-btn" /> Parts and Installation
            </h3>
            <p className="text-lg text-gray-700">
                We're flexible with your experience. Whether you need OEM, OPT OEM, or used parts — we can get them for you. Want us to install them professionally? Great. Prefer to install them yourself? That’s fine too. Either way, we’ll give you a fair estimate for parts and labor.
            </p>
            <p className="text-lg text-gray-700">
                Already have parts you got elsewhere? No problem — we’ll install them for you.
            </p>
            </section>

            {/* Factory Parts */}
            <section className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Store className="text-btn" /> Factory Parts
            </h3>
            <p className="text-lg text-gray-700">
                We can acquire nearly any <span className="font-medium text-btn">factory-made part</span> for your Tesla or other EV. Whether you're replacing a worn-out component or repairing damage, we’re ready to help.
            </p>
            </section>

            {/* Non-Factory Parts */}
            <section className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Hammer className="text-btn" /> Non-Factory Parts
            </h3>
            <p className="text-lg text-gray-700">
                Looking for alternatives? We provide <span className="font-medium text-btn">non-factory parts</span> too. Perfect for anyone wanting a more affordable, unique, or upgraded option. If you’re unsure about fitment or compatibility, we’re here to guide you.
            </p>
            </section>

            {/* Llamado a la acción */}
            <section className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <HelpCircle className="text-btn" /> Not Sure What You Need?
            </h3>
            <p className="text-lg text-gray-700">
                Our experienced team can help you find the right factory or non-factory part for your vehicle — and install it too. Let’s make it easy.
            </p>
                <a
                href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-btn hover:bg-btn text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                    Contact Us About Parts
                </button>
              </a>
            </section>
          </div>
    
          <RightPanelCustomization />
        </div>
      );
  }
