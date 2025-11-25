import Hero from "../components/Hero";
import LocationsSection from "../components/LocationsSection";
import HighlightsSection from "../components/HighlightsSection";
import CallToActionSection from "../components/CallToActionSection";
import IdeaSection from "../components/IdeaSection";
import NewLocations from "../components/NewLocations";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="hidden">
        <LocationsSection />
      </div>
      <NewLocations />
      <HighlightsSection />
      <CallToActionSection />
      <IdeaSection />
      <Footer />
    </>
  );
}
