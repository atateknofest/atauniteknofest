import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "teknofest@atauni.edu.tr",
      link: "mailto:teknofest@atauni.edu.tr"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (442) 231 1111",
      link: "tel:+904422311111"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Atatürk Üniversitesi, Mühendislik Fakültesi, Erzurum",
      link: "https://maps.google.com/?q=Atatürk+Üniversitesi+Erzurum"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/atauni_teknofest",
      color: "hover:text-pink-500"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/atauni_teknofest",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/atauni-teknofest",
      color: "hover:text-blue-600"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Mehmet Yılmaz",
      role: "Akademik Danışman",
      department: "Elektrik-Elektronik Mühendisliği"
    },
    {
      name: "Ayşe Demir",
      role: "Ekip Lideri",
      department: "Bilgisayar Mühendisliği - 4. Sınıf"
    },
    {
      name: "Can Özkan",
      role: "Teknik Koordinatör",
      department: "Makine Mühendisliği - 3. Sınıf"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            İletişim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bizimle iletişime geçin ve Teknofest yolculuğuna katılın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <h4 className="font-semibold text-foreground mb-4">
                  Sosyal Medya
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div className="space-y-8">
            <div className="space-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Ekip Yönetimi
              </h3>
              
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <h4 className="font-semibold text-foreground text-lg">
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.department}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Toplantı Saatleri
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Perşembe</span>
                  <span className="font-medium">14:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span className="font-medium">10:00 - 12:00</span>
                </div>
                <p className="text-sm text-primary mt-4">
                  * Toplantılara katılmak için önceden iletişim kurmanız önerilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;