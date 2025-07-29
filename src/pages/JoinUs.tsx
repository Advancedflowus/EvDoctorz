import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanel from "../components/RightPanel";
import { Mail, Phone, User, FileText, Zap } from "lucide-react";
import owner from "../assets/owner.png";

export default function LocationOcala() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Join Us",
        subtitle: "Share your experience with us.",
      });
    }, []);
  
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
                <Zap className="text-orange-400" /> Join our Team
            </h2>
            <p className="text-gray-700 text-lg">
                Do you have experience with maintaining, repairing, or customizing electric vehicles?  
                <span className="font-semibold text-orange-600"> We want you on our Electrified Garage team! </span>  
                   Please fill out the form below and attach your resume. Let’s electrify the future together.
            </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagen del dueño */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                    src={owner}
                    alt="Chris Salvo - Co-Owner"
                    className="w-full h-full object-cover"
                    />
                </div>

            {/* Formulario */}
                <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
                    <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <User className="w-4 h-4 text-orange-400" /> Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="form-input"
                    />
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <Mail className="w-4 h-4 text-orange-400" /> Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="form-input"
                    />
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <Phone className="w-4 h-4 text-orange-400" /> Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="form-input"
                    />
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <FileText className="w-4 h-4 text-orange-400" /> Resume (PDF)
                    </label>
                    <input
                        type="file"
                        accept=".pdf"
                        className="form-input"
                    />
                    </div>

                    <button
                    type="submit"
                    className="button-inverse shadow-xs"
                    >
                    APPLY NOW
                    </button>
                </form>
            </div>
          </div>
    
          <RightPanel />
        </div>
      );
  }
