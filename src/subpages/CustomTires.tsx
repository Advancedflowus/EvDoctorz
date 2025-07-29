import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import {
  CircleDashed,
  Car,
  Gauge,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import ejemplo from "../assets/wheels-tires.png";

export default function WheelsTires() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Wheels & Tires",
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
              <CircleDashed className="text-btn" /> Elevate Your EV with Wheels & Tires
            </h2>
            <p className="text-lg">
              Your wheels and tires are more than just a necessity — they define the style, performance, and personality of your EV. At <span className="font-semibold text-btn">EV Doctorz</span>, we offer expertly matched wheel and tire packages designed specifically for electric vehicles like Tesla, Rivian, BMW i-series, and more.
            </p>
          </div>

          {/* Beneficios */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Gauge className="text-btn" /> Why Upgrade Your Wheels and Tires?
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Enhance handling, grip, and braking response</li>
              <li>Improve energy efficiency and range with EV-specific tires</li>
              <li>Customize your look with bold or sleek wheel designs</li>
              <li>Unlock better traction for seasonal or performance needs</li>
            </ul>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="EV Wheels and Tires"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Nuestro enfoque */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Sparkles className="text-btn" /> Our EV-Focused Approach
            </h3>
            <p className="text-lg text-gray-700">
              EVs have unique requirements — from weight distribution to torque delivery. Our team ensures your new setup is properly rated and balanced to support your vehicle’s performance and safety.
            </p>
            <p className="text-lg text-gray-700">
              Whether you’re looking for forged alloys, sport packages, or rugged all-terrain tires for your Rivian, we’ve got you covered.
            </p>
          </div>

          {/* Marcas y alianzas */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Car className="text-btn" /> Access to Top Brands at Great Prices
            </h3>
            <p className="text-lg text-gray-700">
              Thanks to our commercial partnerships, we offer premium wheels and tires — including OEM and aftermarket — at highly competitive prices. Get the look and performance you want without breaking the bank.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HelpCircle className="text-btn" /> Let’s Roll
            </h3>
            <p className="text-lg text-gray-700">
              Ready to take your EV’s performance and appearance to the next level? Let our experts help you pick the perfect set. Reach out today and schedule your wheels & tires consultation.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Book a Wheels & Tires Upgrade
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
