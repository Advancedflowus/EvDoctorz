import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelConversion from "../components/RightPanel";
import {
  Wrench,
  Settings,
  ShieldCheck,
  Truck,
  MonitorSmartphone,
} from "lucide-react";
import ejemplo from "../assets/account.png";

export default function CommercialAccount() {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Commercial Account",
      subtitle: "",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start w-full bg-white p-8 shadow-md rounded-lg">
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
        <section className="space-y-6">
          {/* Título principal */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
              <Wrench className="text-btn" />
              Full-Service Support for Commercial Accounts
            </h2>
            <p className="text-gray-700 text-lg">
              We work with commercial partners across the U.S. to deliver top-tier EV solutions — from sourcing parts to reprogramming autopilot systems. Whether you're a dealership, wholesaler, or EV-focused business, we’ve got your back.
            </p>
          </div>

          {/* Imagen decorativa */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={ejemplo}
              alt="Commercial EV Service"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Servicios destacados */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Settings className="text-btn" />
              What We Offer for Commercial Clients
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>
                Nationwide access to +new & used+ OEM parts — from painted body components to advanced EV hardware.
              </li>
              <li>
                <strong>ADAS and Autopilot Reprogramming</strong> for all supported vehicles.
              </li>
              <li>
                Located near major auctions — get a second opinion during the arbitration window.
              </li>
              <li>
                Remote diagnostics available with quick turnaround via partner integrations.
              </li>
              <li>
                Full <strong>body panel swaps, collision repair, and repainting</strong> available.
              </li>
              <li>
                We handle both EV and gas vehicle repairs — over 15 years of experience in combustion + 10 in EV/hybrids.
              </li>
              <li>
                <strong>PSI and CERT</strong> certified processes for peace of mind.
              </li>
            </ul>
          </div>

          {/* Diagnóstico y Logística */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <MonitorSmartphone className="text-btn" />
              Remote Diagnostics & Fast Turnaround
            </h3>
            <p className="text-lg text-gray-700">
              Our remote diagnostic tools allow us to evaluate vehicles quickly and accurately — helping you make informed decisions without delay. Through strategic partnerships, we maintain fast turnaround times without compromising quality.
            </p>
          </div>

          {/* Entrega y Soporte */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Truck className="text-btn" />
              Delivery & Post-Service Logistics
            </h3>
            <p className="text-lg text-gray-700">
              Once your vehicle is completed, we coordinate delivery right to your door — saving you time and streamlining operations.
            </p>
          </div>

          {/* Cierre */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <ShieldCheck className="text-btn" />
              Your Trusted EV Partner
            </h3>
            <p className="text-lg text-gray-700">
              Whether you're managing one vehicle or an entire fleet, <span className="text-btn font-semibold">EV Doctorz</span> is your one-stop shop for high-quality electric and hybrid solutions.
              Contact us today and discover how we can help grow your business with reliable and cost-effective EV support.
            </p>
            <a
              href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-transparent hover:bg-btnh text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                Contact Our Commercial Team
              </button>
            </a>
          </div>
        </section>
      </div>

      <RightPanelConversion />
    </div>
  );
}
