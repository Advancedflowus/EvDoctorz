import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type HeroContent = {
  title: string;
  subtitle: string;
};

type HeroContextType = {
  heroContent: HeroContent;
  setHeroContent: (content: HeroContent) => void;
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [heroContent, setHeroContent] = useState<HeroContent>({
    title: "Next-Level Electric Vehicle Service",
    subtitle: "Personalized attention, honest advice, expert repair, and customization",
  });

  return (
    <HeroContext.Provider value={{ heroContent, setHeroContent }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
};
