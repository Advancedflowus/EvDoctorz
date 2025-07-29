import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import ejemplo from "../assets/battery.png";
import {
  BatteryCharging,
  TrendingUp,
  ShieldCheck,
  HelpCircle,
  Info,
} from "lucide-react";

export default function BatteryUpgrade() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Battery Upgrade",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
            <BatteryCharging className="text-btn" /> Go Further with a Battery Upgrade
          </h2>
          <p className="text-lg">
            Battery capacity, measured in <strong>kilowatt-hours (kWh)</strong>, directly impacts how far your EV can take you. If you're driving an older Tesla Model S, X, or any earlier EV model, chances are your range doesn’t match today’s standards. That’s where we come in.
          </p>
        </section>

        {/* Imagen */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={ejemplo}
            alt="Battery Upgrade"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Qué hacemos */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="text-btn" /> Power You Can Rely On
          </h3>
          <p className="text-lg text-gray-700">
            At <span className="font-semibold text-btn">EV Doctorz</span>, we specialize in expert battery upgrades that bring your EV up to speed — literally. From diagnosis to full replacement, we deliver seamless upgrades that maximize both performance and longevity, so you can drive with confidence.
          </p>
        </section>

        {/* Beneficios */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <TrendingUp className="text-btn" /> Why Upgrade Your Battery?
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Spend more time driving and less time plugged in</li>
            <li>Restore range and power in aging battery packs</li>
            <li>Gain peace of mind for long-distance travel</li>
            <li>Boost resale value with a revitalized power system</li>
          </ul>
        </section>

        {/* ¿Vale la pena? */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Info className="text-btn" /> Is a Battery Upgrade Right for You?
          </h3>
          <p className="text-lg text-gray-700">
            Every EV is different — and every driver’s needs are too. If you’re noticing reduced range or simply want the assurance of a fresh power system, a battery upgrade is a smart investment. Not sure what’s best? Our team is here to guide you with honest, expert advice.
          </p>
        </section>

        {/* CTA */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <HelpCircle className="text-btn" /> Let’s Recharge Your EV Life
          </h3>
          <p className="text-lg text-gray-700">
            From daily commutes to cross-country trips, we’ll make sure your EV is powered for the journey. Reach out today and let’s talk about upgrading your battery — the right way.
          </p>
          <a
            href="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
              Contact Us About Battery Upgrades
            </button>
          </a>
        </section>
      </div>

      <RightPanelCustomization />
    </div>
  );
}
