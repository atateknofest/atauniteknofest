import { useParams, Link } from "react-router-dom";
import { announcements } from "@/data/announcements";

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcementId = Number(id);
  const announcement = announcements.find((a) => a.id === announcementId);

  if (!announcement) {
    return (
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold text-foreground mb-4">Duyuru bulunamadı</h1>
        <Link to="/" className="text-primary underline">Ana sayfaya dön</Link>
      </main>
    );
  }

  const Icon = announcement.icon;

  return (
    <main className="min-h-screen pt-24">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-card p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
                {announcement.type}
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(announcement.date).toLocaleDateString('tr-TR')}
              </span>
            </div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-primary mr-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                {announcement.title}
              </h1>
            </div>

            <article className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {announcement.content}
              </p>
            </article>

            <div className="mt-8">
              <Link to="/" className="cosmic-button">Geri Dön</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnnouncementDetail;
