import { Wrench, Settings, Users, Star, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanel from "../components/RightPanel";
import { Link } from "react-router-dom";

export default function LocationAmesbury() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "Amesbury, MA",
        subtitle: "",
      });
    }, []);
  
    return (
      <div className="flex flex-col md:flex-row items-start w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-btn mb-4 flex items-center gap-2">
                <Star size={24} /> Trusted EV Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Are you the proud owner of a Tesla or another electric vehicle? You’ve probably realized
                that maintenance for EVs is quite different from regular gas-powered cars. Our technicians
                at <span className="font-semibold text-btn">The Electrified Garage</span> are
                professionally trained and bring over <strong>two decades of cumulative experience</strong>.
                Your EV is in good hands.
              </p>
            </section>
    
            <section className="mb-12 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-black/20 p-2 rounded-full">
                  <Users className="text-btn" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Premium Service Experience</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From your first contact to when you drive away, we ensure you feel 
                <span className="text-btn font-semibold"> informed and confident</span>. 
                Our Tesla Factory Trained team educates and guides every customer through the process.
              </p>
            </section>
    
            {/* Imagen representativa */}
            <div className="mb-12 w-full h-80 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-inner">
              <div className="text-center p-6">
                <div className="text-gray-400 mb-2">
                  <Wrench size={48} className="mx-auto" />
                </div>
                <p className="text-gray-500 italic">Featured image of our Amesbury facility or team</p>
              </div>
            </div>
    
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                  <Settings className="text-btn" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Our Specialized Services</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-btn/20 hover:bg-black/10 transition-colors group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-black/20 p-2 rounded-lg">
                      <Settings className="text-btn" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ">Customization</h3>
                  </div>
                  <p className="text-gray-600">
                    Enhance your EV with premium aftermarket accessories that boost both performance and aesthetics.
                  </p>
                  <Link to="/services/customization" className="mt-3 inline-flex items-center text-btn hover:text-gray-700 font-medium">
                    Explore options <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6 hover:border-btn/20 hover:bg-black/10 transition-colors group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-black/20 p-2 rounded-lg">
                      <Wrench className="text-btn" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ">Maintenance & Repair</h3>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive diagnostics, scheduled maintenance, and expert repairs using OEM-quality parts.
                  </p>
                  <Link to="/services/maintenance-repair" className="mt-3 inline-flex items-center text-btn hover:text-gray-700 font-medium">
                    View services <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
            </section>
    
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                  <Wrench className="text-btn" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Trusted Partners & Vendors</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {['EVOffer', 'Savini Wheels', 'Vossen Wheels', 'EcoHitch', 'Torklift'].map((vendor) => (
                  <div key={vendor} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <div className="h-10 mb-2 flex items-center justify-center text-gray-500">
                      {/* Aquí irían los logos de los proveedores */}
                      {vendor.charAt(0)}
                    </div>
                    <p className="font-medium text-gray-700">{vendor}</p>
                  </div>
                ))}
              </div>
            </section>
    
            <section className="bg-gradient-to-r from-btn to-btn/20 rounded-xl p-8 text-black shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Ready for Exceptional EV Service?</h3>
              <p className="mb-6 text-gray-700">
                Schedule your appointment with The Electrified Garage today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1" 
                  className="bg-white text-black border-[1px] border-black font-semibold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors shadow"
                >
                  Book Online
                </a>
              
              </div>
            </section>
          </div>
    
          <RightPanel />
        </div>
      );
  }