import { Rocket, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">TEKNOFEST</h3>
                <p className="text-sm text-muted-foreground">Atatürk Üniversitesi</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Uzay teknolojileri alanında eğitim, araştırma ve geliştirme yapan 
              öğrenci topluluğumuzla geleceği şekillendiriyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Hızlı Erişim</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.querySelector('#team-application')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Ekip Başvuru
              </button>
              <button
                onClick={() => document.querySelector('#latest-event')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Son Etkinlik
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                İletişim
              </button>
              <button
                onClick={() => document.querySelector('#survey')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Anket
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">İletişim</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>teknofest@atauni.edu.tr</p>
              <p>+90 (442) 231 1111</p>
              <p>Atatürk Üniversitesi</p>
              <p>Mühendislik Fakültesi, Erzurum</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Atatürk Üniversitesi Teknofest Klübü. 
            <span className="mx-2 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> 
            </span>
            Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;