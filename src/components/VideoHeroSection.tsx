import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import videoExample from "../assets/ejemploCars.mp4"
import { useNavigate, useLocation } from "react-router-dom";
import maintenanceVideo from "../assets/maintenance.mp4";
import customizationVideo from "../assets/customization.mp4";
import commercialVideo from "../assets/commercial.mp4";
import { useHero } from "../context/HeroContext";
import { useScroll } from "../context/ScrollContext";
import logo from "../assets/logoMecanica.png";

const navItems = [
  { 
    title: 'ABOUT US', 
    submenu: [],
    path: '/our-team' 
  },
  { 
    title: 'SERVICES', 
    submenu: [],
    path: '/services' 
  },
  { 
    title: 'CONTACT US', 
    submenu: [],
    path: '/contact-us' 
  },
];

const VARIANTS = {
  top: {
      open: {
          rotate: ["0deg", "0deg", "45deg"],
          top: ["35%", "50%", "50%"],
      },
      closed: {
          rotate: ["45deg", "0deg", "0deg"],
          top: ["50%", "50%", "35%"],
      },
  },
  middle: {
      open: {
          rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
          rotate: ["-45deg", "0deg", "0deg"],
      },
  },
  bottom: {
      open: {
          rotate: ["0deg", "0deg", "45deg"],
          bottom: ["35%", "50%", "50%"],
          left: "50%",
      },
      closed: {
          rotate: ["45deg", "0deg", "0deg"],
          bottom: ["50%", "50%", "35%"],
          left: 'calc(50% + 6px)',
      },
  },
};

interface FlyoutLinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  FlyoutContent?: React.FC;
  onClick?: () => void;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  to,
  FlyoutContent,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent !== undefined && open;

  const commonClasses =
    "relative inline-block group text-white font-bitter font-semibold text-base transition-all duration-300 ease-out";

  const linkContent = (
    <>
      {children}
      <span
        className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </>
  );

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      {onClick ? (
        <a
          href={href || "#"}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          className={commonClasses}
        >
          {linkContent}
        </a>
      ) : (
        <Link to={to || href || "#"} className={commonClasses}>
          {linkContent}
        </Link>
      )}

      <AnimatePresence>
        {showFlyout && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black border-[3px] border-orange-500"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedHamburgerButton = ({ isActive, toggle }: { isActive: boolean, toggle: () => void }) => {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <motion.button
        initial={false}
        animate={isActive ? 'open' : 'closed'}
        onClick={toggle}
        className="relative h-12 w-12 rounded-full bg-transparent transition-colors hover:bg-white/20 md:hidden"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-white"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{ x: '-50%', y: '50%', bottom: '35%', left: '50%' }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default function VideoHeroSection() {
  const { scrollToContact } = useScroll();
  const { scrollToAbout } = useScroll();
  const navigate = useNavigate();
  const { heroContent } = useHero();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();

  const getVideoForPath = (path: string): string => {
    if (path.startsWith("/services/maintenance-repair")) return maintenanceVideo;
    if (path.startsWith("/services/customization")) return customizationVideo;
    if (path.startsWith("/services/comercial-account")) return commercialVideo;
    return videoExample;
  };

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      scrollToAbout();
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
  };

const selectedVideo = getVideoForPath(location.pathname);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.play();
      };

      video.addEventListener('ended', handleEnded);
      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        key={selectedVideo}
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={selectedVideo} type="video/mp4" />
        Ypur browser does not support the video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 text-white relative bg-black/30 backdrop-blur-md shadow-md">
          {/* Hamburger en mobile */}
          <AnimatedHamburgerButton isActive={isMenuOpen} toggle={() => setIsMenuOpen(prev => !prev)} />
          
          {/* Logo centrado en mobile, izquierda en desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-110">
              <img src={logo} alt="Logo" className="h-12 md:h-16" />
            </Link>
          </div>

          <ul className="hidden md:flex justify-center space-x-8 text-white">
            <FlyoutLink href="#" onClick={handleAboutClick}>
              ABOUT US
            </FlyoutLink>
            <FlyoutLink to="/services">
              SERVICES
            </FlyoutLink>
            <FlyoutLink href="#" onClick={scrollToContact}>
              CONTACT US
            </FlyoutLink>
          </ul>
        

          {/* Botón a la derecha (oculto en mobile) */}
          <Link
            to="https://app.shopmonkey.cloud/public/quote-request/c09a013d-877c-42e9-b9b8-8df879aaa4cd?noExternalScripts=1"
            target="_blank"
            className="hidden md:inline-block w-fit font-bitter rounded-md border-[1px] bg-transparent px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors duration-300 border-btn hover:bg-btnh hover:border-black hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            GET A QUOTE
          </Link>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden w-full bg-black/20 backdrop-blur-md shadow-md px-6 pb-4 text-white space-y-2 font-bitter text-center"
            >
              {navItems.map((item, index) => {
                const hasSubmenu = item.submenu.length > 0;
                const isOpen = activeDropdown === item.title;
                const isLast = index === navItems.length - 1;

                return (
                  <div
                    key={item.title}
                    className={`py-4 ${!isLast ? "border-b border-gris" : ""}`}
                  >
                    {hasSubmenu ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(isOpen ? null : item.title)
                        }
                        className="w-full font-semibold font-bitter text-sm"
                      >
                        {item.title}
                      </button>
                    ) : item.title === "CONTACT US" ? (
                      <button
                        onClick={() => {
                          setIsMenuOpen(false); 
                          setTimeout(() => {
                            const contactSection = document.getElementById("contact-section");
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 150);
                        }}
                        className="w-full font-semibold font-bitter text-md block"
                      >
                        {item.title}
                      </button>
                    ) : item.title === "ABOUT US" ? (
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          setTimeout(() => {
                            handleAboutClick();
                          }, 150);
                        }}
                        className="w-full font-semibold font-bitter text-md block"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.path ?? "/"}
                        className="w-full font-semibold font-bitter text-md block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link
                to="https://app.shopmonkey.io/quote-request/e89e08158684fc96d01b24b2959533d3?noExternalScripts=1"
                target="_blank"
                className="inline-block w-full font-bitter rounded-md border-[1px] bg-black px-6 py-3 text-md font-semibold text-white shadow-xs transition-colors duration-300 border-btn hover:bg-btnh hover:border-black hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 text-center"
              >
                GET A QUOTE
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero */}
        <div className="flex flex-1 items-center justify-center text-center text-white px-4 md:mt-80">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 font-bitter leading-tight">{heroContent.title}</h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 font-bitter text-white">{heroContent.subtitle}</p>
            <Link
              to="#"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-4 font-bitter text-md font-semibold text-primary hover:text-accent transition-colors duration-300"
            >
              CONTACT US TODAY
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white group-hover:border-btn transition-colors duration-300 overflow-hidden">
                <span className="absolute inset-0 rounded-full animate-border-fill opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>

                <span className="text-white group-hover:text-accent text-xl z-10 transition-colors duration-300">{'>'}</span>
              </span>
            </Link>

          </motion.div>
        </div>
      </div>
    </div>
  );
}