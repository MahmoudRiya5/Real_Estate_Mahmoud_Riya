import Testimonials from "../componant/Testimonials/Testimonials.jsx";
import FAQ from "../componant/FAQ/FAQ";
import Hero from "../componant/Hero/Hero";
import HeroCard from "../componant/HeroCard/HeroCard.jsx";
import "./Home.css";
import OurClientsSay from "../componant/OurClientsSay/OurClientsSay.jsx";
import FeaturedPropertiesSection from "../componant/FeaturedPropertiesSection/FeaturedPropertiesSection.jsx";

const Home = () => {
  const heroCards = [
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/shop.png",
      title: "Find Your Dream Home",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/property-value.png",
      title: "Unlock Property Value",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/buildings.png",
      title: "Effortless Property Management",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/sun.png",
      title: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <>
      <div className="hero-cards-section">
        <Hero
          title="Discover Your Dream Property with Estatein"
          desc="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
          firstButton="learn more"
          secButton="Browse Properties"
          oneImg="/assets/img/Home-Poperty/Container.png"
        />
        <div className="cards-icon">
          {heroCards.map((heroCard) => (
            <HeroCard
              arrowIcon={heroCard.arrowIconLink}
              icon={heroCard.icon}
              title={heroCard.title}
            />
          ))}

  
        </div>
      </div>
      {/* Mahmoud Riya: i stopped the FeaturedPropertiesSection cause Lama will redesign it due to slider issues */}
      <FeaturedPropertiesSection />
      <OurClientsSay />
      <FAQ />
    </>
  );
};

export default Home;
