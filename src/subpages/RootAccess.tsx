import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanelCustomization from "../components/RightPanelCustomization";
import ejemplo from "../assets/root.jpeg";
import {
    LockOpen,
    Terminal,
    ShieldAlert,
    Unlock,
    BatteryCharging,
    Stethoscope,
    HelpCircle,
  } from "lucide-react";

export default function RootAccess() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Root Access",
        subtitle: "",
      });
    }, []);
  
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-btn flex items-center gap-2">
                <Unlock className="text-btn" /> Unlock Your Tesla’s Full Potential
            </h2>
            <p className="text-lg">
                Ready to go beyond the factory settings? With <span className="font-semibold text-btn">root access</span>, you'll open the door to features previously out of reach. Our technicians have years of hands-on Tesla experience, so your vehicle is in expert care.
            </p>
            </section>

            {/* Imagen */}
            <div className="rounded-xl overflow-hidden shadow-lg">
            <img
                src={ejemplo}
                alt="Tesla Root Access"
                className="w-full h-auto object-cover"
            />
            </div>

            {/* ¿Qué es Root Access? */}
            <section className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Terminal className="text-btn" /> What is Root Access?
            </h3>
            <p className="text-lg text-gray-700">
                Root access gives you control over the core operating system of your Tesla — similar to jailbreaking a phone. It allows access to locked software and features that remain dormant on most EVs.
            </p>
            </section>

            {/* Qué se puede desbloquear */}
            <section className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <LockOpen className="text-btn" /> What Root Access Can Unlock
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                <BatteryCharging className="text-btn w-6 h-6" />
                Convert a Model S 40kWh battery to 60kWh.
                </li>
                <li className="flex items-start gap-2">
                <Stethoscope className="text-btn w-6 h-6" />
                Unlock deeper diagnostic capabilities when issues arise.
                </li>
            </ul>
            </section>

            {/* ¿Deberías obtener Root Access? */}
            <section className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <ShieldAlert className="text-btn" /> Should You Gain Root Access?
            </h3>
            <p className="text-lg text-gray-700">
                Root access isn’t for everyone. It provides enhanced customization and control, but there are potential security concerns. If you’re unsure whether it’s right for you, <span className="font-medium text-btn">reach out</span> — we’re happy to help you make an informed choice.
            </p>
            </section>

            {/* Llamado a la acción */}
            <section className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                <HelpCircle className="text-btn" /> Want to Learn More?
            </h3>
            <p className="text-lg text-gray-700">
                Unlock the next level of performance and control with root access. Our experienced team is ready to help.
            </p>
                <a
                href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-btn hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
                    Contact Us About Root Access
                </button>
              </a>
            </section>
          </div>
    
          <RightPanelCustomization />
        </div>
      );
  }
