import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const LatestEventSection = () => {
  const latestEvent = {
    title: "Model Uydu Yarışması Finali",
    date: "2024-12-20",
    time: "09:00 - 17:00",
    location: "Atatürk Üniversitesi Teknoloji Merkezi",
    description: "Teknofest 2025 kapsamında düzenlenen Model Uydu Yarışması'nın final etabı. Ekibimizin geliştirdiği uydu modeli yarışmaya katılacak.",
    participants: 12,
    status: "Yaklaşan Etkinlik",
    highlights: [
      "Uydu tasarımı sunumu",
      "Test sonuçları değerlendirmesi", 
      "Jüri değerlendirmesi",
      "Ödül töreni"
    ]
  };

  const pastEvents = [
    {
      title: "Roket Teknolojileri Semineri",
      date: "2024-11-15",
      location: "Konferans Salonu",
      result: "120 katılımcı"
    },
    {
      title: "Teknofest 2024 Katılımı",
      date: "2024-09-20",
      location: "İstanbul",
      result: "İkincilik Ödülü"
    },
    {
      title: "Ekip Tanışma Toplantısı",
      date: "2024-09-01", 
      location: "Mühendislik Fakültesi",
      result: "25 yeni üye"
    }
  ];

  return (
    <section id="latest-event" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            Son Etkinlik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Güncel etkinliklerimiz ve geçmiş başarılarımız
          </p>
        </div>

        {/* Main Event */}
        <div className="mb-16">
          <div className="space-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                {latestEvent.status}
              </span>
              <div className="flex items-center text-muted-foreground">
                <Users className="w-4 h-4 mr-2" />
                {latestEvent.participants} Katılımcı
              </div>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-4">
              {latestEvent.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>{new Date(latestEvent.date).toLocaleDateString('tr-TR')} - {latestEvent.time}</span>
                </div>
                <div className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>{latestEvent.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Program Highlights:</h4>
                <ul className="space-y-2">
                  {latestEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {latestEvent.description}
            </p>

            <div className="text-center">
              <button className="cosmic-button">
                Etkinlik Detayları
              </button>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Geçmiş Etkinlikler
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="space-card p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {event.title}
                </h4>
                
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(event.date).toLocaleDateString('tr-TR')}
                </div>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {event.location}
                </div>
                
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium inline-block">
                  {event.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEventSection;