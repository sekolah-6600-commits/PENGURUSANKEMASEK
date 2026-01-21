
export type ModuleType = 'PENTADBIRAN' | 'KURIKULUM' | 'HEM' | 'KOKURIKULUM' | 'PPKI' | 'DASHBOARD';

export interface Student {
  id: string;
  name: string;
  className: string;
  gender: 'L' | 'P';
}

export interface Teacher {
  id: string;
  name: string;
  position: string;
  department: string;
}

export interface DisciplineRecord {
  id: string;
  studentName: string;
  class: string;
  type: 'Kesalahan' | 'Nilai Terpuji';
  category: string;
  date: string;
  points: number;
}

export interface ActivityReport {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface StudentStats {
  total: number;
  male: number;
  female: number;
  attendanceToday: number;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: ModuleType;
  content: string;
}
