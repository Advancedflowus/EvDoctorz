import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import RightPanel from "../components/RightPanel";
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Settings, Zap, CheckCircle, ArrowRight, Briefcase } from "lucide-react";

const services = [
  {
    title: "Maintenance & Repair",
    description: "Expert care to keep your EV performing at its best with factory-trained technicians.",
    image: service1,
    link: "/services/maintenance-repair",
    icon: <Wrench className="text-btn" size={24} />,
    features: [
      "Annual maintenance checks",
      "Battery diagnostics",
      "Brake system service",
      "Electrical repairs"
    ]
  },
  {
    title: "Customization",
    description: "Personalize your EV with premium upgrades that enhance performance and style.",
    image: service2,
    link: "/services/customization",
    icon: <Settings className="text-btn" size={24} />,
    features: [
      "Performance upgrades",
      "Aesthetic enhancements",
      "Wheel and tire packages",
      "Interior modifications"
    ]
  },
  {
    title: "Commercial Account",
    description: "Streamlined EV fleet support for businesses with prioritized service and exclusive benefits.",
    image: service3,
    link: "/services/comercial-account",
    icon: <Briefcase className="text-btn" size={24} />,
    features: [
      "Fleet maintenance programs",
      "Dedicated account manager",
      "Priority scheduling",
      "Volume-based service discounts"
    ]
  }  
];

const Services: React.FC = () => {
  const { setHeroContent } = useHero();

  useEffect(() => {
    setHeroContent({
      title: "Our Services",
      subtitle: "Explore our amazing services and locations.",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start w-full bg-white p-8 shadow-md rounded-lg">
      {/* Sección de texto a la izquierda */}
      <div className="flex-1 pr-0 md:pr-20 mb-6 md:mb-0 p-2 md:p-10">
          <section className="bg-transparent rounded-2xl p-8 text-btn">
            <div className="max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive EV Care Solutions
              </h2>
              <p className="text-lg text-black leading-relaxed">
                At EV Doctorz, we combine <span className="text-btn font-semibold">factory expertise</span> with 
                <span className="text-btn font-semibold"> aftermarket innovation</span> to deliver unparalleled service for your electric vehicle.
              </p>
            </div>
          </section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Wrench className="text-blue-500" />, text: "Certified Technicians" },
              { icon: <CheckCircle className="text-green-500" />, text: "OEM Standards" },
              { icon: <Zap className="text-yellow-500" />, text: "Performance Focus" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <p className="font-medium text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="grid gap-8 md:grid-cols-3 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-5 py-2.5 bg-transparent border border-black text-black font-medium rounded-lg hover:border-transparent hover:bg-btn hover:text-white transition-colors"
                  >
                    Explore Service
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <section className="mt-16 bg-gradient-to-r from-btn to-btn/20 rounded-2xl p-8 text-black shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your EV Experience?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Schedule your appointment today and experience EV Doctorz difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
                  target="_blank"
                  className="bg-white text-black border-[1px] border-black font-semibold px-8 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors shadow"
                >
                  Book Online Now
                </Link>
              </div>
            </div>
          </section>
      </div>

      {/* Panel lateral derecho */}
      <RightPanel />
    </div>
  );
};

export default Services;