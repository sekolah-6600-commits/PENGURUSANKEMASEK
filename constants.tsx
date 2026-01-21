
import React from 'react';
import { LayoutDashboard, Users, GraduationCap, HeartHandshake, Trophy, Accessibility } from 'lucide-react';
import { Teacher, Announcement, StudentStats } from './types';

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

export const MENU_ITEMS = [
  { id: 'DASHBOARD', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, color: 'bg-blue-600' },
  { id: 'PENTADBIRAN', label: 'Pentadbiran', icon: <Users className="w-5 h-5" />, color: 'bg-indigo-600' },
  { id: 'KURIKULUM', label: 'Kurikulum', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-emerald-600' },
  { id: 'HEM', label: 'Hal Ehwal Murid', icon: <HeartHandshake className="w-5 h-5" />, color: 'bg-rose-600' },
  { id: 'KOKURIKULUM', label: 'Kokurikulum', icon: <Trophy className="w-5 h-5" />, color: 'bg-amber-600' },
  { id: 'PPKI', label: 'Pendidikan Khas', icon: <Accessibility className="w-5 h-5" />, color: 'bg-purple-600' },
];
