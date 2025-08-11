import { Calendar, Users, Trophy } from "lucide-react";

export type Announcement = {
  id: number;
  title: string;
  date: string;
  type: string;
  content: string;
  icon: typeof Trophy | typeof Users | typeof Calendar;
  isImportant: boolean;
};

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Teknofest 2025 Başvuruları Açıldı!",
    date: "2024-12-15",
    type: "Duyuru",
    content:
      "Teknofest 2025 yarışmaları için başvurular başladı. Ekip üyesi olmak isteyen arkadaşlarımız başvuru formunu doldurabilir.",
    icon: Trophy,
    isImportant: true,
  },
  {
    id: 2,
    title: "Yeni Ekip Üyeleri Alımı",
    date: "2024-12-10",
    type: "Ekip",
    content:
      "Mühendislik fakültesi öğrencileri için yeni ekip üyesi alımları devam ediyor. Uzay teknolojileri alanında çalışmak isteyenler davetli.",
    icon: Users,
    isImportant: false,
  },
  {
    id: 3,
    title: "Haftalık Toplantı Duyurusu",
    date: "2024-12-08",
    type: "Etkinlik",
    content:
      "Bu hafta ki ekip toplantımız Perşembe günü saat 14:00'da Mühendislik Fakültesi konferans salonunda yapılacaktır.",
    icon: Calendar,
    isImportant: false,
  },
  {
    id: 4,
    title: "Model Uydu Yarışması Hazırlıkları",
    date: "2024-12-05",
    type: "Proje",
    content:
      "Model uydu yarışması için hazırlıklarımız devam ediyor. Elektronik ve yazılım ekiplerinin koordineli çalışması gerekiyor.",
    icon: Trophy,
    isImportant: true,
  },
];
