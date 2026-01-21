
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
