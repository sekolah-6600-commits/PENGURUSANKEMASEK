
import React, { useState } from 'react';
import { 
  Users, GraduationCap, HeartHandshake, Trophy, Accessibility, 
  Search, Bell, Plus, Calendar, PieChart, FileText, Settings,
  Users2, UserCheck, TrendingUp, BookOpen, Star, Medal, Flag,
  Database, Utensils, ClipboardList, ShieldAlert, MessageCircle, 
  Camera, ChevronRight, LogIn, LogOut, CheckCircle2, AlertCircle,
  Cpu, Rocket, Globe, Zap, Battery, Save, RefreshCw
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, PieChart as RechartsPieChart, Pie } from 'recharts';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import GeminiAssistant from './components/GeminiAssistant';
import { ModuleType, AttendanceRecord } from './types';
import { 
  TEACHERS, STATS, ANNOUNCEMENTS, SCHOOL_NAME, SCHOOL_CODE, MENU_ITEMS, 
  KOKO_ACTIVITIES, KOKO_AWARDS, DISCIPLINE_DATA, RMT_STUDENTS, 
  COUNSELING_SESSIONS, STUDENT_ACTIVITIES, STUDENT_ANALYSIS_YEARS,
  HEM_CLASSES, HEM_STUDENTS
} from './constants';

const attendanceData = [
  { name: 'Isnin', rate: 97.2 },
  { name: 'Selasa', rate: 96.5 },
  { name: 'Rabu', rate: 98.1 },
  { name: 'Khamis', rate: 95.8 },
  { name: 'Jumaat', rate: 94.2 },
];

const performanceData = [
  { subject: 'BM', marks: 82 },
  { subject: 'BI', marks: 76 },
  { subject: 'MT', marks: 68 },
  { subject: 'SN', marks: 74 },
  { subject: 'PI', marks: 88 },
];

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('DASHBOARD');
  const [activeHemTab, setActiveHemTab] = useState<string>('OVERVIEW');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, AttendanceRecord>>({});
  const [isSaving, setIsSaving] = useState(false);

  const toggleAttendance = (studentId: string, status: 'Hadir' | 'Tidak Hadir') => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: { studentId, status }
    }));
  };

  const handleSaveAttendance = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Kehadiran telah berjaya direkodkan.');
    }, 1500);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Jumlah Murid" value={STATS.total} icon={<Users className="w-6 h-6" />} colorClass="bg-blue-600" trend="+2.5% bln lepas" />
        <StatsCard title="Kehadiran Hari Ini" value={`${STATS.attendanceToday}%`} icon={<UserCheck className="w-6 h-6" />} colorClass="bg-emerald-600" />
        <StatsCard title="Jumlah Guru" value={TEACHERS.length} icon={<Users2 className="w-6 h-6" />} colorClass="bg-purple-600" />
        <StatsCard title="Pencapaian Koko" value="8 EMAS" icon={<Trophy className="w-6 h-6" />} colorClass="bg-amber-600" trend="MSSD 2024" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 text-lg">Statistik Kehadiran Mingguan</h3>
            <select className="bg-slate-100 border-none rounded-lg text-sm px-3 py-1 outline-none">
              <option>Minggu Ini</option>
              <option>Minggu Lepas</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} domain={[90, 100]} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.rate > 96 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-6">Pengumuman Terkini</h3>
          <div className="space-y-4">
            {ANNOUNCEMENTS.map((ann) => (
              <div key={ann.id} className="group cursor-pointer">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg mt-1 group-hover:scale-110 transition-transform ${
                    MENU_ITEMS.find(m => m.id === ann.category)?.color || 'bg-slate-200'
                  } bg-opacity-10 text-xs font-bold`}>
                    {ann.category.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">{ann.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{ann.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
            Lihat Semua Notifikasi
          </button>
        </div>
      </div>
    </div>
  );

  const renderHemContent = () => {
    const hemMenu = [
      { id: 'ANALYSIS', label: 'Pengkalan Data', icon: <Database className="w-5 h-5" />, desc: 'Analisis Tahun 1-6' },
      { id: 'ATTENDANCE', label: 'Kehadiran', icon: <UserCheck className="w-5 h-5" />, desc: 'Rekod Kehadiran Murid' },
      { id: 'RMT', label: 'RMT', icon: <Utensils className="w-5 h-5" />, desc: 'Makan Tambahan' },
      { id: 'CONTROL', label: 'Kawalan Kelas', icon: <LogIn className="w-5 h-5" />, desc: 'Keluar/Masuk Kelas' },
      { id: 'DUTY', label: 'Laporan Harian', icon: <ClipboardList className="w-5 h-5" />, desc: 'Guru Bertugas' },
      { id: 'DISCIPLINE', label: 'Disiplin', icon: <ShieldAlert className="w-5 h-5" />, desc: 'Salah Laku/Puji' },
      { id: 'COUNSELING', label: 'Kaunseling', icon: <MessageCircle className="w-5 h-5" />, desc: 'Unit Bimbingan' },
      { id: 'ACTIVITY', label: 'Aktiviti HEM', icon: <Camera className="w-5 h-5" />, desc: 'Gambar & Laporan' },
    ];

    if (activeHemTab === 'OVERVIEW') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hemMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveHemTab(item.id)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-200 hover:shadow-md transition-all text-left group"
            >
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800">{item.label}</h3>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              <div className="mt-4 flex items-center text-rose-600 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Akses Modul</span>
                <ChevronRight className="w-3 h-3 ml-1" />
              </div>
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <button 
          onClick={() => { setActiveHemTab('OVERVIEW'); setSelectedClass(null); }}
          className="flex items-center text-sm font-semibold text-slate-500 hover:text-rose-600 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
          Kembali ke Menu HEM
        </button>

        {activeHemTab === 'ATTENDANCE' && (
          <div className="space-y-6">
            {!selectedClass ? (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-rose-600" />
                  Pilih Kelas Untuk Rekod Kehadiran
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {HEM_CLASSES.map(cls => {
                    const classIcons: Record<string, React.ReactNode> = {
                      '1 PIXEL': <Cpu className="w-6 h-6" />,
                      '1 DRONE': <Rocket className="w-6 h-6" />,
                      '1 CYBER': <Globe className="w-6 h-6" />,
                      '1 TECHNO': <Zap className="w-6 h-6" />,
                      '1 TESLA': <Battery className="w-6 h-6" />,
                    };
                    return (
                      <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-300 hover:bg-rose-50 transition-all flex items-center space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                          {classIcons[cls] || <Users className="w-6 h-6" />}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-slate-800 text-lg">{cls}</p>
                          <p className="text-xs text-slate-500">Rekod Kehadiran Harian</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setSelectedClass(null)}
                      className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">Senarai Kehadiran: {selectedClass}</h3>
                      <p className="text-sm text-slate-500">{new Date().toLocaleDateString('ms-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setAttendanceRecords({})}
                      className="flex items-center space-x-2 text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors bg-slate-50 px-4 py-2 rounded-xl"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Set Semula</span>
                    </button>
                    <button 
                      onClick={handleSaveAttendance}
                      disabled={isSaving}
                      className="bg-emerald-600 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-50"
                    >
                      {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      <span>{isSaving ? 'Menyimpan...' : 'Simpan Kehadiran'}</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                        <th className="pb-4 w-12">Bil</th>
                        <th className="pb-4">Nama Murid</th>
                        <th className="pb-4 text-center">Jantina</th>
                        <th className="pb-4 text-center">Status Kehadiran</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {HEM_STUDENTS.filter(s => s.className === selectedClass).map((student, index) => {
                        const record = attendanceRecords[student.id];
                        return (
                          <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                            <td className="py-4 text-sm text-slate-400">{index + 1}</td>
                            <td className="py-4">
                              <p className="font-bold text-slate-800 text-sm group-hover:text-rose-600 transition-colors uppercase">{student.name}</p>
                              <p className="text-[10px] text-slate-400 font-medium">ID: {student.id}</p>
                            </td>
                            <td className="py-4 text-center">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${student.gender === 'L' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                                {student.gender}
                              </span>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center justify-center space-x-2">
                                <button
                                  onClick={() => toggleAttendance(student.id, 'Hadir')}
                                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                                    record?.status === 'Hadir' 
                                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-md' 
                                      : 'bg-white border-slate-200 text-slate-400 hover:border-emerald-300 hover:text-emerald-600'
                                  }`}
                                >
                                  Hadir
                                </button>
                                <button
                                  onClick={() => toggleAttendance(student.id, 'Tidak Hadir')}
                                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                                    record?.status === 'Tidak Hadir' 
                                      ? 'bg-rose-500 border-rose-500 text-white shadow-md' 
                                      : 'bg-white border-slate-200 text-slate-400 hover:border-rose-300 hover:text-rose-600'
                                  }`}
                                >
                                  Tidak Hadir
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeHemTab === 'ANALYSIS' && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Analisis Bilangan Murid Mengikut Tahun</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={STUDENT_ANALYSIS_YEARS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#e11d48" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeHemTab === 'DISCIPLINE' && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Rekod Disiplin (SSDM)</h3>
              <button className="bg-rose-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-rose-700 transition-colors">
                Rekod Kes Baru
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="pb-4">Murid</th>
                    <th className="pb-4">Kelas</th>
                    <th className="pb-4">Kategori</th>
                    <th className="pb-4 text-center">Mata</th>
                    <th className="pb-4 text-right">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {DISCIPLINE_DATA.map((rec) => (
                    <tr key={rec.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4">
                        <span className="font-bold text-slate-800 text-sm">{rec.studentName}</span>
                        <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${
                          rec.type === 'Nilai Terpuji' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {rec.type}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-slate-600">{rec.class}</td>
                      <td className="py-4 text-sm text-slate-600">{rec.category}</td>
                      <td className="py-4 text-center font-bold text-sm">
                        <span className={rec.points > 0 ? 'text-emerald-600' : 'text-rose-600'}>
                          {rec.points > 0 ? '+' : ''}{rec.points}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600"><Settings className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeHemTab === 'RMT' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Kehadiran RMT Hari Ini</h3>
              <div className="space-y-3">
                {RMT_STUDENTS.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-transparent hover:border-rose-100 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${s.status === 'Hadir' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                        {s.status === 'Hadir' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{s.name}</p>
                        <p className="text-xs text-slate-500">{s.class}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                      s.status === 'Hadir' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-rose-600 p-8 rounded-2xl shadow-lg text-white">
              <Utensils className="w-10 h-10 mb-4 opacity-50" />
              <h4 className="text-xl font-bold mb-2">Menu Hari Ini</h4>
              <p className="text-rose-100 text-sm mb-6">Rabu, 22 Mei 2024</p>
              <div className="bg-rose-500 bg-opacity-30 p-4 rounded-xl border border-rose-400 border-opacity-30">
                <p className="font-bold text-lg">Nasi Ayam + Buah Oren</p>
                <p className="text-sm text-rose-100 mt-1">Susu Kotak Coklat</p>
              </div>
              <button className="w-full mt-6 py-3 bg-white text-rose-600 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors">
                Sahkan Laporan RMT
              </button>
            </div>
          </div>
        )}

        {activeHemTab === 'ACTIVITY' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDENT_ACTIVITIES.map(activity => (
              <div key={activity.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group">
                <div className="h-48 relative">
                  <img src={activity.imageUrl} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-rose-600 shadow-sm">
                    {activity.date}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{activity.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{activity.description}</p>
                  <button className="text-rose-600 text-xs font-bold flex items-center hover:underline">
                    Baca Laporan Penuh <ChevronRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {(['CONTROL', 'DUTY', 'COUNSELING'].includes(activeHemTab)) && (
          <div className="bg-white p-12 rounded-2xl text-center border border-slate-100">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-600">
               {hemMenu.find(i => i.id === activeHemTab)?.icon}
             </div>
             <h3 className="text-xl font-bold text-slate-800">Sistem {hemMenu.find(i => i.id === activeHemTab)?.label}</h3>
             <p className="text-slate-500 mt-2">Fungsi ini sedang dalam proses penyelarasan data. Sila kembali semula nanti.</p>
          </div>
        )}
      </div>
    );
  };

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'DASHBOARD':
        return renderDashboard();
      case 'PENTADBIRAN':
        return (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Direktori Guru & Staf</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm hover:bg-blue-700 transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Tambah Guru</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-4 text-slate-500 font-medium text-sm">Nama</th>
                      <th className="pb-4 text-slate-500 font-medium text-sm">Jawatan</th>
                      <th className="pb-4 text-slate-500 font-medium text-sm">Unit/Jabatan</th>
                      <th className="pb-4 text-slate-500 font-medium text-sm text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {TEACHERS.map((teacher) => (
                      <tr key={teacher.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 font-semibold text-slate-800">{teacher.name}</td>
                        <td className="py-4 text-slate-600 text-sm">{teacher.position}</td>
                        <td className="py-4 text-slate-600 text-sm">{teacher.department}</td>
                        <td className="py-4 text-right">
                          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                            Aktif
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'KURIKULUM':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <TrendingUp className="text-emerald-600 w-5 h-5" />
                <span>Pencapaian Akademik (Gred Purata Mata Pelajaran)</span>
              </h3>
              <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip contentStyle={{borderRadius: '12px'}} />
                    <Line type="monotone" dataKey="marks" stroke="#10b981" strokeWidth={3} dot={{r: 6, fill: '#10b981'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="font-bold text-lg mb-2">Pautan Pantas Kurikulum</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors group border border-transparent hover:border-emerald-100">
                  <FileText className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-800 text-sm">e-RPH</p>
                  <p className="text-xs text-slate-500">Rekod Pengajaran Harian</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors group border border-transparent hover:border-emerald-100">
                  <BookOpen className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-800 text-sm">PBD</p>
                  <p className="text-xs text-slate-500">Pelaporan Bilik Darjah</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors group border border-transparent hover:border-emerald-100">
                  <Calendar className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-800 text-sm">Jadual Waktu</p>
                  <p className="text-xs text-slate-500">Semakan Kelas & Guru</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 cursor-pointer transition-colors group border border-transparent hover:border-emerald-100">
                  <Settings className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-800 text-sm">SAPS</p>
                  <p className="text-xs text-slate-500">Sistem Analisis Peperiksaan</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'HEM':
        return renderHemContent();
      case 'KOKURIKULUM':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard title="Jumlah Kelab" value="24 Unit" icon={<Star className="w-6 h-6" />} colorClass="bg-amber-600" />
              <StatsCard title="Kemenangan" value="3 Pingat" icon={<Flag className="w-6 h-6" />} colorClass="bg-amber-600" trend="Peringkat Kebangsaan" />
              <StatsCard title="Penglibatan" value="98.5%" icon={<Users className="w-6 h-6" />} colorClass="bg-amber-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Penyertaan Aktiviti</h3>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <th className="pb-3">Murid</th>
                        <th className="pb-3">Unit/Kelab</th>
                        <th className="pb-3 text-center">Kehadiran</th>
                        <th className="pb-3 text-right">Tindakan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {KOKO_ACTIVITIES.map((act) => (
                        <tr key={act.id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4">
                            <p className="text-sm font-bold text-slate-800">{act.studentName}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{act.position}</p>
                          </td>
                          <td className="py-4 text-sm text-slate-600">{act.clubName}</td>
                          <td className="py-4 text-center">
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden max-w-[60px] mx-auto">
                              <div 
                                className={`h-full ${act.attendanceRate >= 90 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                style={{ width: `${act.attendanceRate}%` }}
                              ></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 mt-1 block">{act.attendanceRate}%</span>
                          </td>
                          <td className="py-4 text-right">
                            <button className="text-slate-400 hover:text-blue-600 p-1">
                              <Settings className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Pengiktirafan & Pencapaian</h3>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {KOKO_AWARDS.map((award) => (
                    <div key={award.id} className="p-4 bg-slate-50 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50 transition-all flex items-start justify-between group">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                          <Medal className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{award.achievement}</p>
                          <p className="text-xs text-slate-600 mt-0.5">{award.studentName}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                              award.level === 'Kebangsaan' ? 'bg-indigo-100 text-indigo-700' :
                              award.level === 'Negeri' ? 'bg-amber-100 text-amber-700' :
                              'bg-slate-200 text-slate-700'
                            }`}>
                              Peringkat {award.level}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">{award.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              {MENU_ITEMS.find(m => m.id === activeModule)?.icon}
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Modul {activeModule}</h2>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">Bahagian ini sedang dalam fasa pembangunan digital.</p>
            <button onClick={() => setActiveModule('DASHBOARD')} className="mt-8 text-blue-600 font-semibold hover:underline">Kembali ke Dashboard</button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeModule={activeModule} setActiveModule={(mod) => { setActiveModule(mod); setActiveHemTab('OVERVIEW'); setSelectedClass(null); }} />
      
      <main className="lg:ml-64 p-4 lg:p-8 pb-24 lg:pb-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-900 leading-tight">
              {activeModule === 'HEM' && activeHemTab !== 'OVERVIEW' 
                ? (selectedClass ? `${selectedClass} - Kehadiran` : `${activeHemTab} - Hal Ehwal Murid`) 
                : MENU_ITEMS.find(m => m.id === activeModule)?.label || 'SiPDS'}
            </h1>
            <p className="text-slate-500 text-sm font-medium">{SCHOOL_NAME} • {SCHOOL_CODE}</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input type="text" placeholder="Cari maklumat..." className="bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64 transition-all" />
            </div>
            <button className="bg-white border border-slate-200 p-2 rounded-xl text-slate-600 hover:bg-slate-50 relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {renderModuleContent()}
        <GeminiAssistant />
      </main>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-40">
        {MENU_ITEMS.slice(0, 5).map((item) => (
          <button key={item.id} onClick={() => { setActiveModule(item.id as ModuleType); setActiveHemTab('OVERVIEW'); setSelectedClass(null); }} className={`flex flex-col items-center space-y-1 ${activeModule === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.id.slice(0, 4)}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
