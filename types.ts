
export type ModuleType = 'PENTADBIRAN' | 'KURIKULUM' | 'HEM' | 'KOKURIKULUM' | 'PPKI' | 'DASHBOARD';

export interface Teacher {
  id: string;
  name: string;
  position: string;
  department: string;
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

export interface CoCurriculumActivity {
  id: string;
  studentName: string;
  clubName: string;
  position: string;
  attendanceRate: number;
}

export interface CoCurriculumAward {
  id: string;
  studentName: string;
  achievement: string;
  level: 'Sekolah' | 'Daerah' | 'Negeri' | 'Kebangsaan' | 'Antarabangsa';
  date: string;
}

// HEM Interfaces
export interface Student {
  id: string;
  name: string;
  className: string;
  gender: 'L' | 'P';
}

export interface AttendanceRecord {
  studentId: string;
  status: 'Hadir' | 'Tidak Hadir' | 'Sebab';
  remarks?: string;
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

export interface RMTStudent {
  id: string;
  name: string;
  class: string;
  status: 'Hadir' | 'Tidak Hadir';
  remarks?: string;
}

export interface DailyDutyReport {
  id: string;
  teacherName: string;
  date: string;
  incidentSummary: string;
  cleanlinessRating: number;
  securityRating: number;
}

export interface CounselingSession {
  id: string;
  studentName: string;
  date: string;
  sessionType: 'Individu' | 'Kelompok' | 'Kerjaya' | 'Akademik';
  status: 'Selesai' | 'Temujanji';
}

export interface StudentActivity {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}
