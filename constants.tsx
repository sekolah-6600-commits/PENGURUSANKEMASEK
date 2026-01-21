
import React from 'react';
import { LayoutDashboard, Users, GraduationCap, HeartHandshake, Trophy, Accessibility } from 'lucide-react';
import { Teacher, Announcement, StudentStats, CoCurriculumActivity, CoCurriculumAward, DisciplineRecord, RMTStudent, DailyDutyReport, CounselingSession, StudentActivity, Student } from './types';

export const SCHOOL_NAME = "Sekolah Kebangsaan Kemasek";
export const SCHOOL_CODE = "TBA2033";

export const TEACHERS: Teacher[] = [
  { id: '1', name: 'Zainuddin bin Ahmad', position: 'Guru Besar', department: 'Pentadbiran' },
  { id: '2', name: 'Fatimah binti Idris', position: 'PK Pentadbiran', department: 'Pentadbiran' },
  { id: '3', name: 'Rahim bin Kassim', position: 'PK HEM', department: 'HEM' },
  { id: '4', name: 'Noraini binti Hassan', position: 'PK Kokurikulum', department: 'Kokurikulum' },
  { id: '5', name: 'Mohd Razali bin Ali', position: 'Ketua Panitia BM', department: 'Kurikulum' },
  { id: '6', name: 'Siti Sarah binti Abu', position: 'Penyelaras PPKI', department: 'Pendidikan Khas' },
];

export const HEM_CLASSES = ['1 PIXEL', '1 DRONE', '1 CYBER', '1 TECHNO', '1 TESLA'];

export const HEM_STUDENTS: Student[] = [
  // 1 PIXEL
  { id: 'P01', name: 'ABDUL QAYYUM BIN AZIZ', className: '1 PIXEL', gender: 'L' },
  { id: 'P02', name: 'AISYAH HUMAIRA BINTI ZAKI', className: '1 PIXEL', gender: 'P' },
  { id: 'P03', name: 'DANIEL AIMAN BIN ROSLI', className: '1 PIXEL', gender: 'L' },
  // 1 DRONE
  { id: 'D01', name: 'FARIS IRFAN BIN KAMAL', className: '1 DRONE', gender: 'L' },
  { id: 'D02', name: 'HIDAYAH BINTI BAKHTIAR', className: '1 DRONE', gender: 'P' },
  // 1 CYBER
  { id: 'C01', name: 'IZDIHAR BIN SYAHMI', className: '1 CYBER', gender: 'L' },
  { id: 'C02', name: 'JASMINE BINTI JOHARI', className: '1 CYBER', gender: 'P' },
  // 1 TECHNO
  { id: 'T01', name: 'KHAIRUL ANUAR BIN MANAF', className: '1 TECHNO', gender: 'L' },
  { id: 'T02', name: 'LUTFIAH BINTI LUKMAN', className: '1 TECHNO', gender: 'P' },
  // 1 TESLA
  { id: 'TS01', name: 'MUHAMMAD RAFIQI BIN ZAIDI', className: '1 TESLA', gender: 'L' },
  { id: 'TS02', name: 'NUR ALYA BATRISYIA', className: '1 TESLA', gender: 'P' },
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'Mesyuarat Guru Bil 3/2024', date: '2024-05-20', category: 'PENTADBIRAN', content: 'Semua guru diminta hadir ke bilik mesyuarat utama pada jam 2 petang.' },
  { id: '2', title: 'Hari Sukan Tahunan SK Kemasek', date: '2024-06-12', category: 'KOKURIKULUM', content: 'Persiapan akhir padang akan dilakukan pada hari Khamis ini.' },
  { id: '3', title: 'Program Motivasi Murid Tahun 6', date: '2024-05-25', category: 'KURIKULUM', content: 'Slot bersama pakar motivasi jemputan dari IPT.' },
];

export const STATS: StudentStats = {
  total: 850,
  male: 430,
  female: 420,
  attendanceToday: 96.5,
};

export const KOKO_ACTIVITIES: CoCurriculumActivity[] = [
  { id: '1', studentName: 'Ahmad bin Bakri', clubName: 'Kelab Robotik', position: 'Pengerusi', attendanceRate: 100 },
  { id: '2', studentName: 'Siti Nurhaliza', clubName: 'Persatuan Bahasa Melayu', position: 'Setiausaha', attendanceRate: 95 },
  { id: '3', studentName: 'Chong Wei Feng', clubName: 'Kelab Badminton', position: 'Ahli Aktif', attendanceRate: 88 },
  { id: '4', studentName: 'Nurul Izzah', clubName: 'Kadet Remaja Sekolah', position: 'Bendahari', attendanceRate: 92 },
];

export const KOKO_AWARDS: CoCurriculumAward[] = [
  { id: '1', studentName: 'Ahmad bin Bakri', achievement: 'Johan Pertandingan Robotik', level: 'Negeri', date: '2024-03-15' },
  { id: '2', studentName: 'Siti Nurhaliza', achievement: 'Anugerah Nilam Emas', level: 'Daerah', date: '2024-04-02' },
  { id: '3', studentName: 'Zulhelmi bin Musa', achievement: 'Naib Johan Merentas Desa', level: 'Kebangsaan', date: '2024-02-20' },
];

export const DISCIPLINE_DATA: DisciplineRecord[] = [
  { id: '1', studentName: 'Muhammad Ali', class: '6 Gemilang', type: 'Nilai Terpuji', category: 'Membantu Guru', date: '2024-05-18', points: 10 },
  { id: '2', studentName: 'Tan Ah Kow', class: '5 Cemerlang', type: 'Kesalahan', category: 'Lewat ke Sekolah', date: '2024-05-19', points: -5 },
  { id: '3', studentName: 'Siti Aminah', class: '4 Bijak', type: 'Nilai Terpuji', category: 'Sikap Berdikari', date: '2024-05-19', points: 15 },
];

export const RMT_STUDENTS: RMTStudent[] = [
  { id: '1', name: 'Zul bin Ramli', class: '1 Arif', status: 'Hadir' },
  { id: '2', name: 'Mei Ling', class: '2 Bakti', status: 'Hadir' },
  { id: '3', name: 'Ramasamy', class: '3 Cerdas', status: 'Tidak Hadir', remarks: 'Sakit' },
];

export const COUNSELING_SESSIONS: CounselingSession[] = [
  { id: '1', studentName: 'Ahmad Faiz', date: '2024-05-21', sessionType: 'Individu', status: 'Selesai' },
  { id: '2', studentName: 'Nurul Huda', date: '2024-05-22', sessionType: 'Akademik', status: 'Temujanji' },
];

export const STUDENT_ACTIVITIES: StudentActivity[] = [
  { id: '1', title: 'Kem Kepimpinan Pengawas', date: '2024-04-10', description: 'Program tahunan bagi melahirkan pemimpin sekolah yang berwibawa.', imageUrl: 'https://images.unsplash.com/photo-1523240715632-d984bb4b9156?w=400&h=250&fit=crop' },
  { id: '2', title: 'Gotong Royong Perdana', date: '2024-05-05', description: 'Aktiviti membersihkan kawasan sekolah bersama komuniti setempat.', imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop' },
];

export const MENU_ITEMS = [
  { id: 'DASHBOARD', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, color: 'bg-blue-600' },
  { id: 'PENTADBIRAN', label: 'Pentadbiran', icon: <Users className="w-5 h-5" />, color: 'bg-indigo-600' },
  { id: 'KURIKULUM', label: 'Kurikulum', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-emerald-600' },
  { id: 'HEM', label: 'Hal Ehwal Murid', icon: <HeartHandshake className="w-5 h-5" />, color: 'bg-rose-600' },
  { id: 'KOKURIKULUM', label: 'Kokurikulum', icon: <Trophy className="w-5 h-5" />, color: 'bg-amber-600' },
  { id: 'PPKI', label: 'Pendidikan Khas', icon: <Accessibility className="w-5 h-5" />, color: 'bg-purple-600' },
];

export const STUDENT_ANALYSIS_YEARS = [
  { year: 'Tahun 1', count: 142 },
  { year: 'Tahun 2', count: 138 },
  { year: 'Tahun 3', count: 145 },
  { year: 'Tahun 4', count: 139 },
  { year: 'Tahun 5', count: 144 },
  { year: 'Tahun 6', count: 142 },
];
