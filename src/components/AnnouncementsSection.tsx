import { Calendar, Users, Trophy } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Teknofest 2025 Başvuruları Açıldı!",
      date: "2024-12-15",
      type: "Duyuru",
      content: "Teknofest 2025 yarışmaları için başvurular başladı. Ekip üyesi olmak isteyen arkadaşlarımız başvuru formunu doldurabilir.",
      icon: Trophy,
      isImportant: true
    },
    {
      id: 2,
      title: "Yeni Ekip Üyeleri Alımı",
      date: "2024-12-10",
      type: "Ekip",
      content: "Mühendislik fakültesi öğrencileri için yeni ekip üyesi alımları devam ediyor. Uzay teknolojileri alanında çalışmak isteyenler davetli.",
      icon: Users,
      isImportant: false
    },
    {
      id: 3,
      title: "Haftalık Toplantı Duyurusu",
      date: "2024-12-08",
      type: "Etkinlik",
      content: "Bu hafta ki ekip toplantımız Perşembe günü saat 14:00'da Mühendislik Fakültesi konferans salonunda yapılacaktır.",
      icon: Calendar,
      isImportant: false
    },
    {
      id: 4,
      title: "Model Uydu Yarışması Hazırlıkları",
      date: "2024-12-05",
      type: "Proje",
      content: "Model uydu yarışması için hazırlıklarımız devam ediyor. Elektronik ve yazılım ekiplerinin koordineli çalışması gerekiyor.",
      icon: Trophy,
      isImportant: true
    }
  ];

  return (
    <section id="announcements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            Duyurular
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknofest klübümüzden son haberler ve önemli duyurular
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {announcements.map((announcement) => {
            const IconComponent = announcement.icon;
            return (
              <div
                key={announcement.id}
                className={`space-card p-6 transform transition-all duration-300 hover:scale-105 ${
                  announcement.isImportant ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    announcement.isImportant ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        announcement.isImportant 
                          ? 'bg-primary text-white' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {announcement.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(announcement.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </div>

                {announcement.isImportant && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <div className="flex items-center text-primary text-sm font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                      Önemli Duyuru
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;