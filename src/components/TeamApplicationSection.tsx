import { useState } from "react";
import { Send, User, Mail, Phone, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TeamApplicationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    grade: "",
    experience: "",
    motivation: ""
  });

  const departments = [
    "Bilgisayar Mühendisliği",
    "Elektrik-Elektronik Mühendisliği",
    "Makine Mühendisliği",
    "Endüstri Mühendisliği",
    "Fizik",
    "Matematik",
    "Diğer"
  ];

  const grades = ["1. Sınıf", "2. Sınıf", "3. Sınıf", "4. Sınıf", "Yüksek Lisans", "Doktora"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.department || !formData.motivation) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be sent to a backend
    console.log("Form data:", formData);
    
    toast({
      title: "Başvuru Gönderildi!",
      description: "Başvurunuz başarıyla alındı. En kısa sürede size dönüş yapacağız.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      grade: "",
      experience: "",
      motivation: ""
    });
  };

  return (
    <section id="team-application" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            Ekip Başvuru
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknofest yolculuğuna katılmak ve uzay teknolojileri alanında projeler geliştirmek için başvurun
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Adınızı ve soyadınızı girin"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="example@atauni.edu.tr"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="0 (555) 123 45 67"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Bölüm *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Bölümünüzü seçin</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* Grade */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Sınıf
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Sınıfınızı seçin</option>
                    {grades.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Deneyim Alanları
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Örn: Elektronik, Yazılım, Makine Tasarımı"
                  />
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Motivasyon Mektubu *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                  placeholder="Neden Teknofest ekibimizde yer almak istiyorsunuz? Projelerimize nasıl katkı sağlayabilirsiniz?"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="cosmic-button inline-flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Başvuruyu Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamApplicationSection;