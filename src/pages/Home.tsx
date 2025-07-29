import AboutUs from "../components/AboutUsSection";
import { useEffect } from "react";
import { useHero } from "../context/HeroContext";
import { useScroll } from "../context/ScrollContext";
import { useLocation } from "react-router-dom";

const Home = () => {
    const { setHeroContent } = useHero();
    const { scrollToAbout } = useScroll();
    const location = useLocation();

    useEffect(() => {
        setHeroContent({
        title: "Your Home for Everything EV",
        subtitle: "Personalized attention, honest advice, expert repair, and customization",
        });
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo === "about") {
          scrollToAbout();
        }
      }, [location.state]);
    
    return (
        <div>
            <AboutUs />
        </div>
    );
};

export default Home;