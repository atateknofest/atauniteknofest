import { useState } from "react";
import { Star, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SurveySection = () => {
  const { toast } = useToast();
  const [surveyData, setSurveyData] = useState({
    department: "",
    departmentOther: "",
    grade: "",
    gradeOther: "",
    satisfaction: 0,
    interests: [] as string[],
    interestOther: "",
    improvement: "",
    recommendation: 0,
    comments: ""
  });

  const interestOptions = [
    "Roket Teknolojileri",
    "Uydu Sistemleri", 
    "Drone Teknolojileri",
    "Yapay Zeka",
    "Elektronik Tasarım",
    "Yazılım Geliştirme",
    "Makine Tasarımı",
    "Veri Analizi",
    "Diğer",
  ];

  const departments = [
    "Bilgisayar Mühendisliği",
    "Elektrik-Elektronik Mühendisliği",
    "Makine Mühendisliği",
    "Endüstri Mühendisliği",
    "Fizik",
    "Matematik",
    "Diğer",
  ];

  const grades = [
    "Hazırlık",
    "1. Sınıf",
    "2. Sınıf",
    "3. Sınıf",
    "4. Sınıf",
    "Yüksek Lisans",
    "Doktora",
    "Diğer",
  ];

  const handleRatingChange = (field: string, rating: number) => {
    setSurveyData(prev => ({
      ...prev,
      [field]: rating
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setSurveyData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSurveyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (surveyData.satisfaction === 0) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen memnuniyet puanınızı verin.",
        variant: "destructive"
      });
      return;
    }

    const payload = {
      department: surveyData.department === "Diğer" ? surveyData.departmentOther : surveyData.department,
      grade: surveyData.grade === "Diğer" ? surveyData.gradeOther : surveyData.grade,
      interests: surveyData.interests,
      interest_other: surveyData.interests.includes("Diğer") ? surveyData.interestOther : null,
      satisfaction: surveyData.satisfaction,
      improvement: surveyData.improvement,
      recommendation: surveyData.recommendation,
      comments: surveyData.comments,
    };

    const { error } = await supabase
      .from("survey_responses")
      .insert(payload);

    if (error) {
      toast({
        title: "Hata",
        description: "Anket gönderilirken bir sorun oluştu.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Anket Gönderildi!",
      description: "Görüşleriniz için teşekkür ederiz. Yanıtlarınız değerlendirilecektir.",
    });

    // Reset form
    setSurveyData({
      department: "",
      departmentOther: "",
      grade: "",
      gradeOther: "",
      satisfaction: 0,
      interests: [],
      interestOther: "",
      improvement: "",
      recommendation: 0,
      comments: ""
    });
  };

  const StarRating = ({ rating, onRatingChange, label }: { rating: number, onRatingChange: (rating: number) => void, label: string }) => (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">
        {label}
      </label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="transition-colors"
          >
            <Star
              className={`w-8 h-8 ${
                star <= rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-400 hover:text-yellow-400'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-1">
        {rating === 0 ? 'Puanlama yapın' : 
         rating === 1 ? 'Çok Kötü' :
         rating === 2 ? 'Kötü' :
         rating === 3 ? 'Orta' :
         rating === 4 ? 'İyi' : 'Mükemmel'}
      </p>
    </div>
  );

  return (
    <section id="survey" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            Anket
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Görüşleriniz bizim için çok değerli. Klübümüzü nasıl geliştirebileceğimiz konusunda fikirlerinizi paylaşın
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-card p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Satisfaction Rating */}
              <div>
                <StarRating
                  rating={surveyData.satisfaction}
                  onRatingChange={(rating) => handleRatingChange('satisfaction', rating)}
                  label="Teknofest klübümüzden ne kadar memnunsunuz? *"
                />
              </div>

              {/* Department / Grade */}
              <div>
                <label className="text-sm font-medium text-foreground mb-4 block">
                  Bölümünüz / Sınıfınız
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <select
                    name="department"
                    value={surveyData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Bölümünüzü seçin</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <select
                    name="grade"
                    value={surveyData.grade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Sınıfınızı seçin</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                {(surveyData.department === 'Diğer' || surveyData.grade === 'Diğer') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {surveyData.department === 'Diğer' && (
                      <input
                        type="text"
                        name="departmentOther"
                        value={surveyData.departmentOther}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Bölümünüzü belirtin"
                      />
                    )}
                    {surveyData.grade === 'Diğer' && (
                      <input
                        type="text"
                        name="gradeOther"
                        value={surveyData.gradeOther}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Sınıfınızı belirtin"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Interest Areas */}
              <div>
                <label className="text-sm font-medium text-foreground mb-4 block">
                  Hangi teknoloji alanlarıyla ilgileniyorsunuz? (Birden fazla seçebilirsiniz)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border transition-all text-sm ${
                        surveyData.interests.includes(interest)
                          ? 'bg-primary text-white border-primary'
                          : 'bg-background border-border hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        {surveyData.interests.includes(interest) && (
                          <CheckCircle className="w-4 h-4" />
                        )}
                        <span>{interest}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {surveyData.interests.includes('Diğer') && (
                  <input
                    type="text"
                    name="interestOther"
                    value={surveyData.interestOther}
                    onChange={handleInputChange}
                    className="w-full mt-3 px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Diğer teknoloji alanlarını belirtin"
                  />
                )}
              </div>

              {/* Improvement Suggestions */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Klübümüzü geliştirmek için önerileriniz nelerdir?
                </label>
                <textarea
                  name="improvement"
                  value={surveyData.improvement}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                  placeholder="Önerilerinizi, eleştirilerinizi ve isteklerinizi buraya yazabilirsiniz..."
                />
              </div>

              {/* Recommendation Rating */}
              <div>
                <StarRating
                  rating={surveyData.recommendation}
                  onRatingChange={(rating) => handleRatingChange('recommendation', rating)}
                  label="Klübümüzü arkadaşlarınıza ne kadar tavsiye edersiniz?"
                />
              </div>

              {/* Additional Comments */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Eklemek istediğiniz başka bir şey var mı?
                </label>
                <textarea
                  name="comments"
                  value={surveyData.comments}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                  placeholder="Diğer görüş ve önerileriniz..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="cosmic-button inline-flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Anketi Gönder
                </button>
              </div>
            </form>
          </div>

          {/* Survey Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Anket tamamen gizlidir ve verileriniz sadece klübümüzü geliştirmek için kullanılacaktır.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;