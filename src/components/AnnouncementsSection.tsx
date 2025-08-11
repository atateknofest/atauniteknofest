import { Link } from "react-router-dom";
import { announcements } from "@/data/announcements";

const AnnouncementsSection = () => {

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
              <Link
                to={`/duyurular/${announcement.id}`}
                key={announcement.id}
                className="block"
              >
                <div
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;