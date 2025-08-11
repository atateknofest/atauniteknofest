const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">Hakkında</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atatürk Üniversitesi Teknofest Kulübü; roket, uydu, drone ve yapay zeka gibi
            ileri teknoloji alanlarında öğrenci projeleri geliştirir, yarışmalara katılır
            ve yeni üyelerine pratik deneyim kazandırır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Vizyonumuz</h3>
            <p className="text-muted-foreground">Üniversitemizi ulusal ve uluslararası teknoloji yarışmalarında
            başarıyla temsil eden, yenilikçi ve üretken bir öğrenci topluluğu olmak.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Misyonumuz</h3>
            <p className="text-muted-foreground">Öğrencilere disiplinler arası çalışma ortamı sunmak,
            teorik bilgiyi pratiğe dönüştürmek ve takım kültürünü güçlendirmek.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Çalışma Alanlarımız</h3>
            <p className="text-muted-foreground">Roket teknolojileri, model uydu, elektronik ve gömülü sistemler,
            yazılım geliştirme, yapay zeka ve veri analizi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
