import heroRocket from "@/assets/hero-rocket.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold glowing-text">
              Atatürk Üniversitesi Teknofest Kulübü
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Uzay teknolojileri alanında eğitim ve araştırma yapan öğrencilerimize 
              teorik bilgiyi pratiğe dönüştürme fırsatı sunuyoruz.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              className="cosmic-button"
              onClick={() => document.querySelector('#team-application')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ekibe Katıl
            </button>
            <button 
              className="cosmic-button bg-secondary hover:bg-secondary/90"
              onClick={() => document.querySelector('#latest-event')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Etkinliklerimiz
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10 floating-element">
            <img 
              src={heroRocket} 
              alt="Teknofest Rocket Launch" 
              className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent blur-3xl" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full floating-element opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-primary rounded-full floating-element opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full floating-element opacity-80" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default HeroSection;