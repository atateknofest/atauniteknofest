import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import TeamApplicationSection from "@/components/TeamApplicationSection";
import LatestEventSection from "@/components/LatestEventSection";
import ContactSection from "@/components/ContactSection";
import SurveySection from "@/components/SurveySection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <LatestEventSection />
        <ImageGallery />
        <AnnouncementsSection />
        <TeamApplicationSection />
        <ContactSection />
        <SurveySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
