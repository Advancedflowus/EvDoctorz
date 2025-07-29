import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import {
  BadgePlus,
  Car,
  Sparkles,
  Wrench,
  SlidersHorizontal,
  Monitor,
  Handshake,
} from "lucide-react";
import ejemplo from "../assets/accesories.png";

export default function Accesories() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Aftermarket Accessories",
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
              <BadgePlus className="text-btn" /> Style. Comfort. Performance.
            </h2>
            <p className="text-lg">
              Your EV should be as unique as you are. At{" "}
              <span className="font-semibold text-btn">EV Doctorz</span>, we offer a curated selection of premium aftermarket accessories that combine function, flair, and forward-thinking tech — all tailored for today’s electric vehicles.
            </p>
          </div>

          {/* Mejores accesorios */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="text-btn" /> The Best for Every Model
            </h3>
            <p className="text-lg text-gray-700">
              We go beyond factory options with top-tier aftermarket solutions you won’t find at the dealership. Our accessories are built for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-lg text-gray-700">
              <li>Tesla Model 3</li>
              <li>Tesla Model S</li>
              <li>Tesla Model X</li>
            </ul>
          </div>

          {/* Imagen ilustrativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="Tesla Accessories"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Performance */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <SlidersHorizontal className="text-btn" /> Performance Upgrades
            </h3>
            <p className="text-lg text-gray-700">
              From advanced braking systems to suspension tuning and battery-enhancing mods, our accessories are engineered to make your EV more responsive and exciting to drive.
            </p>
          </div>

          {/* Appearance */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Sparkles className="text-btn" /> Make It Look Even Better
            </h3>
            <p className="text-lg text-gray-700">
              Stand out on the road with appearance upgrades that redefine style. From LED accents to bold wheels and custom interiors — we make modern look better.
            </p>
          </div>

          {/* Más ejemplos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Monitor className="text-btn" /> Examples of What We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Swivel/tilt screen installation for Model 3/Y</li>
              <li>Power frunk or trunk install</li>
              <li>Custom steering wheels (including YOKE style)</li>
              <li>Trailer hitch installation (e.g., Stealth hitch)</li>
              <li>Exterior lighting installations</li>
              <li>Wheels and tire packages</li>
              <li>Wheel spacers and hub rings</li>
              <li>Upgraded sound systems</li>
              <li>12V lithium-ion batteries</li>
              <li>Front lip spoilers, rear spoilers, and accent trim installation</li>
            </ul>
          </div>

          {/* Socios comerciales */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Handshake className="text-btn" /> Exclusive Partner Pricing
            </h3>
            <p className="text-lg text-gray-700">
              Thanks to our trusted commercial partners, we’re able to offer the best accessories at unbeatable prices. We pass those savings directly to you — so you get more value for your investment.
            </p>
          </div>

          {/* Llamado a la acción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Car className="text-btn" /> Let’s Upgrade Your Ride
            </h3>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Contact Us for Accessories
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
