import { Link } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";
import bgImage from "../assets/teslaImage.jpg";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const services = [
  {
    title: "MAINTENANCE & REPAIR",
    image: service1,
    link: "/services/maintenance-repair",
  },
  {
    title: "CUSTOMIZATION",
    image: service2,
    link: "/services/customization",
  },
  {
    title: "COMERCIAL ACCOUNT",
    image: service3,
    link: "/services/vehicleconversion",
  },
];

const AboutUsSection: React.FC = () => {

  const { aboutRef } = useScroll();

  return (
    <section ref={aboutRef} className="relative w-full overflow-hidden text-white py-20">
      {/* Imagen de fondo compartida */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 z-0 bg-black bg-opacity-60 backdrop-blur-md" />

      {/* Contenido sobre el fondo */}
      <div className="relative z-10 space-y-32">
        {/* ABOUT US SECTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="inline-block text-sm md:text-base font-semibold text-primary tracking-wider uppercase mb-2">
                Who we are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-bitter">
                About <span className="text-primary">Us</span>
              </h2>
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-white/90 italic border-l-4 border-primary pl-4 py-1">
              "We're a name you can trust!"
            </blockquote>

            <div className="space-y-6 max-w-3xl text-justify">
              <p className="text-white/90 leading-relaxed md:leading-loose font-bitter">
              At EV Doctorz, we live and breathe electric vehicles. With over a decade of hands-on experience in EV diagnostics and repairs, our skilled team specializes in everything from sophisticated software solutions to meticulous hardware maintenance. We're more than just mechanics—we're passionate EV enthusiasts dedicated to keeping your excitement for electric driving alive. Our mission is simple: to provide exceptional care that keeps your vehicle performing smoothly, efficiently, and reliably. Trust us to keep your electric thrill thriving and your wheels confidently on the road.
              </p>
            </div>
          </div>
        </div>

        {/* OUR SERVICES SECTION sobre fondo compartido */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-gradient-to-br from-gray-300 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header con fondo acentuado */}
            <div className="bg-primary/10 py-12 px-6 md:px-12 text-center border-b border-white/10">
              <div className="max-w-4xl mx-auto space-y-6">
                <span className="inline-block text-sm md:text-base font-semibold text-primary tracking-wider uppercase">
                  What We Offer
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-bitter">
                  OUR <span className="text-primary">SERVICES</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
                <p className="text-xl md:text-2xl text-white/90 italic font-medium max-w-3xl mx-auto font-bitter">
                  "Your EV, Our Expertise"
                </p>
                <p className="text-lg text-white/90 max-w-4xl mx-auto font-bitter">
                  At EV Doctorz, we specialize in everything battery, with precise repairs and exceptionally quick turnaround times. Our experienced technicians deliver outstanding service to both individual and commercial clients, ensuring your car stays on the road with minimal downtime.
                </p>
              </div>
            </div>

            {/* Grid de servicios mejorado */}
            <div className="px-6 md:px-12 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="group relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Imagen con efecto overlay */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>
                    
                    {/* Contenido de la tarjeta */}
                    <Link
                      to={service.link}
                      className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 hover:bg-black/10"
                    >
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                        <h3 className="text-2xl font-bold text-white mb-2 font-bitter">{service.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* CTA adicional al final */}
              <div className="mt-16 text-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black hover:bg-white transition-colors duration-300"
                >
                  View All Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;