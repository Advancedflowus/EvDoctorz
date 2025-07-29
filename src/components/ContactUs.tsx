import { PhoneIcon, EnvelopeIcon, MapPinIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

const ContactUs = () => {
  const { contactRef } = useScroll();
  
  return (
    <section ref={contactRef} className="bg-gradient-to-b from-white to-gray-500 py-20 px-4 md:px-8" id="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm md:text-base font-semibold text-primary tracking-wider uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-bitter mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-bitter">
            We're here to help with all your electric vehicle needs
          </p>
        </div>

        {/* Contenedor de información + mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-1">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 font-bitter">INFORMATION</h3>
            </div>

            <div className="space-y-5">
              <a 
                href="https://www.google.com/maps/place/553+LF+Roper+Pkwy,+Ocoee+Fl+34761" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start group hover:text-red-700 transition-colors duration-200 cursor-pointer no-underline"
              >
                <MapPinIcon className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0 group-hover:text-red-700" />
                <div>
                  <p className="font-medium text-gray-700 font-bitter group-hover:text-red-700">Address</p>
                  <p className="text-gray-600 transition-colors font-bitter group-hover:text-red-700">
                    553 LF Roper Pkwy, Ocoee Fl 34761
                  </p>
                </div>
              </a>


              <a 
                href="tel:+16893332287" 
                className="flex items-start group hover:text-green-700 transition-colors duration-200 cursor-pointer no-underline"
              >
                <PhoneIcon className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0 group-hover:text-green-700" />
                <div>
                  <p className="font-medium text-gray-700 font-bitter group-hover:text-green-700">Phone</p>
                  <p className="text-gray-600 transition-colors font-bitter group-hover:text-green-700">
                    (689) 333-2287
                  </p>
                </div>
              </a>


              <a 
                href="mailto:evdoctorz@gmail.com" 
                className="flex items-start group hover:text-blue-800 transition-colors duration-200 cursor-pointer no-underline"
              >
                <EnvelopeIcon className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0 group-hover:text-blue-800" />
                <div>
                  <p className="font-medium text-gray-700 font-bitter group-hover:text-blue-800">Email</p>
                  <p className="text-gray-600 transition-colors font-bitter group-hover:text-blue-800">
                    evdoctorz@gmail.com
                  </p>
                </div>
              </a>


              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700 font-bitter">Hours</p>
                  <p className="text-gray-600 font-bitter">Walk In:</p>
                  <p className="text-gray-600 font-bitter">Wednesday - Sunday: 9am - 5pm</p>
                  <p className="text-gray-600 font-bitter">Appointment Only:</p>
                  <p className="text-gray-600 font-bitter">Monday and Tuesday</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
                  className="inline-flex button-inverse"
                >
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  REQUEST A SERVICE
                </Link>
              </div>
            </div>
          </div>

          {/* Mapa - ahora a la derecha */}
          <div className="lg:col-span-2 h-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <iframe
                title="Ocoee Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.059617214283!2d-81.5407922844749!3d28.565276393757224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77f1b4cd72571%3A0x94d44a7aefc9f03f!2s553%20LF%20Roper%20Pkwy%2C%20Ocoee%2C%20FL%2034761%2C%20USA!5e0!3m2!1sen!2sus!4v1721900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;