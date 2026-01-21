
import React from 'react';
import { LayoutDashboard, Users, GraduationCap, HeartHandshake, Trophy, Accessibility } from 'lucide-react';
import { Teacher, Announcement, StudentStats, Student, DisciplineRecord, ActivityReport } from './types';

export const SCHOOL_NAME = "Sekolah Kebangsaan Kemasek";
export const SCHOOL_CODE = "TBA2033";

export const HEM_CLASSES = ['1 PIXEL', '1 DRONE', '1 CYBER', '1 TECHNO', '1 TESLA'];

export const HEM_STUDENTS: Student[] = [
  { id: 'S001', name: 'AHMAD ZAFRAN BIN AZLAN', className: '1 PIXEL', gender: 'L' },
  { id: 'S002', name: 'NUR AISYAH HUMAIRA', className: '1 PIXEL', gender: 'P' },
  { id: 'S003', name: 'MUHAMMAD AMMAR', className: '1 DRONE', gender: 'L' },
  { id: 'S004', name: 'SITI NURHALIZA BINTI BAKRI', className: '1 DRONE', gender: 'P' },
  { id: 'S005', name: 'CHONG WEI FENG', className: '1 CYBER', gender: 'L' },
  { id: 'S006', name: 'JASMINE KAUR', className: '1 CYBER', gender: 'P' },
  { id: 'S007', name: 'MUHAMMAD RAFIQ', className: '1 TECHNO', gender: 'L' },
  { id: 'S008', name: 'NURUL IZZAH', className: '1 TECHNO', gender: 'P' },
  { id: 'S009', name: 'ZULKEFLI BIN AHMAD', className: '1 TESLA', gender: 'L' },
  { id: 'S010', name: 'NUR ALYA BATRISYIA', className: '1 TESLA', gender: 'P' },
];

export const DISCIPLINE_RECORDS: DisciplineRecord[] = [
  { id: 'D1', studentName: 'AHMAD ZAFRAN', class: '1 PIXEL', type: 'Nilai Terpuji', category: 'Membantu Guru', date: '2024-05-20', points: 10 },
  { id: 'D2', studentName: 'MUHAMMAD AMMAR', class: '1 DRONE', type: 'Kesalahan', category: 'Lewat ke Sekolah', date: '2024-05-21', points: -5 },
];

export const ACTIVITY_REPORTS: ActivityReport[] = [
  { id: 'A1', title: 'Kem Kepimpinan Pengawas', date: '2024-04-12', description: 'Program tahunan untuk melatih jati diri pemimpin sekolah.', imageUrl: 'https://images.unsplash.com/photo-1523240715632-d984bb4b9156?auto=format&fit=crop&q=80&w=400' },
  { id: 'A2', title: 'Sambutan Hari Raya', date: '2024-05-02', description: 'Majlis ramah mesra warga SK Kemasek bersempena Aidilfitri.', imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400' },
];

export const TEACHERS: Teacher[] = [
  { id: '1', name: 'Zainuddin bin Ahmad', position: 'Guru Besar', department: 'Pentadbiran' },
  { id: '2', name: 'Fatimah binti Idris', position: 'PK Pentadbiran', department: 'Pentadbiran' },
  { id: '3', name: 'Rahim bin Kassim', position: 'PK HEM', department: 'HEM' },
  { id: '4', name: 'Noraini binti Hassan', position: 'PK Kokurikulum', department: 'Kokurikulum' },
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'Mesyuarat Guru Bil 3/2024', date: '2024-05-20', category: 'PENTADBIRAN', content: 'Semua guru diminta hadir ke bilik mesyuarat utama.' },
  { id: '2', title: 'Hari Sukan Tahunan', date: '2024-06-12', category: 'KOKURIKULUM', content: 'Persiapan akhir padang akan dilakukan hari ini.' },
];

export const STATS: StudentStats = {
  total: 850,
  male: 430,
  female: 420,
  attendanceToday: 96.5,
};

export const MENU_ITEMS = [
  { id: 'DASHBOARD', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, color: 'bg-blue-600' },
  { id: 'PENTADBIRAN', label: 'Pentadbiran', icon: <Users className="w-5 h-5" />, color: 'bg-indigo-600' },
  { id: 'KURIKULUM', label: 'Kurikulum', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-emerald-600' },
  { id: 'HEM', label: 'Hal Ehwal Murid', icon: <HeartHandshake className="w-5 h-5" />, color: 'bg-rose-600' },
  { id: 'KOKURIKULUM', label: 'Kokurikulum', icon: <Trophy className="w-5 h-5" />, color: 'bg-amber-600' },
  { id: 'PPKI', label: 'Pendidikan Khas', icon: <Accessibility className="w-5 h-5" />, color: 'bg-purple-600' },
];
