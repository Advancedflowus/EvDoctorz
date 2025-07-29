import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import { UsersRound, Youtube, Wrench, Rocket, ArrowRight, Award } from "lucide-react";

export default function LocationOcala() {
    const { setHeroContent } = useHero();
  
    useEffect(() => {
      setHeroContent({
        title: "About Us",
        subtitle: "Learn More About Us.",
      });
    }, []);
  
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-8 shadow-md rounded-lg">
          <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10 space-y-10">
          <section className="mb-16 bg-gradient-to-r from-btn to-btn/20 rounded-2xl p-8 text-black shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-btn p-3 rounded-full">
                  <UsersRound size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Meet the Founders</h2>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl">
                The Electrified Garage was born from years of experience, a passion for EV innovation, and a collaboration 
                between three unique experts with complementary paths. Together, they're revolutionizing EV service.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-gray-500 font-semibold flex items-center gap-2">
                    <Wrench className="h-5 w-5" /> 50+ Years Combined Experience
                  </div>
                </div>
                <div className="bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-gray-500 font-semibold flex items-center gap-2">
                    <Youtube className="h-5 w-5" /> 1M+ YouTube Followers
                  </div>
                </div>
                <div className="bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-gray-500 font-semibold flex items-center gap-2">
                    <Rocket className="h-5 w-5" /> EV Pioneers
                  </div>
                </div>
              </div>
            </section>
    
            <div className="grid gap-8 md:grid-cols-2">
              {/* Chris Salvo */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-r from-btn to-btn/20 p-6 text-black">
                  <h3 className="text-2xl font-bold">Chris Salvo</h3>
                  <p className="text-gray-700 font-medium flex items-center gap-2 mt-1">
                    <Award className="h-5 w-5" /> Co-Owner • CEO
                  </p>
                </div>
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    {/* Aquí iría una imagen de Chris */}
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                      [Chris Photo]
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    With deep roots in both BMW and Tesla, Chris blends performance knowledge with business strategy.
                    From turning wrenches to leading EV Tuning LLC, his journey led to co-founding The Electrified Garage.
                  </p>
                  <div className="bg-btn p-3 rounded-lg border border-btn/20">
                    <p className="text-sm text-gray-600 font-medium flex items-start gap-2">
                      <span className="text-gray-600">Fun Fact:</span> He's the one who told Rich Benoit he couldn't sell him a Tesla battery. Now they run a business together.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rich Benoit */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-r from-btn to-btn/20 p-6 text-black">
                  <h3 className="text-2xl font-bold">Rich Benoit</h3>
                  <p className="text-gray-700 mt-1 font-medium flex items-center gap-2">
                    <Award className="h-5 w-5" /> Co-Owner • Media
                  </p>
                </div>
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    {/* Aquí iría una imagen de Rich */}
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                      [Rich Photo]
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    You might know Rich from YouTube — "Rich Rebuilds" — where he famously restores Teslas from salvage.
                    He brings massive visibility and innovation to the EV scene.
                  </p>
                  <div className="bg-btn p-3 rounded-lg border border-btn/20">
                    <p className="text-sm text-gray-600 font-medium flex items-start gap-2">
                      <span className="text-gray-600">Impact:</span> His passion for transparency and DIY EV repair has reshaped the EV community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chad Hrencecin - Full width */}
              <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-r from-btn to-btn/20 p-6 text-black">
                  <h3 className="text-2xl font-bold">Chad Hrencecin</h3>
                  <p className="text-gray-700 mt-1 font-medium flex items-center gap-2">
                    <Award className="h-5 w-5" /> Co-Owner • Director of Service
                  </p>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 bg-gray-100 rounded-lg overflow-hidden">
                    {/* Aquí iría una imagen de Chad */}
                    <div className="w-full h-48 md:h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      [Chad Photo]
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 ">
                      From Toyota and BMW to Tesla, Chad's journey spans suspension tuning, metal fabrication, and EV systems.
                      He was factory trained on every Tesla model and even managed Mobile Service Technicians.
                    </p>
                    <div className="bg-btn p-3 gray-600nded-lg border border-btn/20">
                      <p className="text-sm text-gray-600 font-medium flex items-start gap-2">
                        <span className="text-gray-600">Beyond Work:</span> On weekends, he's likely off-roading or flying drones — a true maker at heart.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                      <span>Chad gave Rich his first Tesla ride — sparking it all</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
    
        </div>
      );
  }
