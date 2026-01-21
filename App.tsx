
import React, { useState } from 'react';
import { 
  Users, GraduationCap, HeartHandshake, Trophy, Accessibility, 
  Search, Bell, Plus, Calendar, PieChart, FileText, Settings,
  Users2, UserCheck, TrendingUp, BookOpen, Database, Utensils,
  LogIn, ClipboardList, ShieldAlert, MessageCircle, Camera,
  ChevronLeft, ChevronRight, Save, Trash2, CheckCircle2, XCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import GeminiAssistant from './components/GeminiAssistant';
import { ModuleType } from './types';
import { 
  TEACHERS, STATS, ANNOUNCEMENTS, SCHOOL_NAME, 
  SCHOOL_CODE, MENU_ITEMS, HEM_CLASSES, HEM_STUDENTS,
  DISCIPLINE_RECORDS, ACTIVITY_REPORTS
} from './constants';

const studentAnalysisData = [
  { year: 'Tahun 1', count: 142 },
  { year: 'Tahun 2', count: 138 },
  { year: 'Tahun 3', count: 145 },
  { year: 'Tahun 4', count: 139 },
  { year: 'Tahun 5', count: 144 },
  { year: 'Tahun 6', count: 142 },
];

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('DASHBOARD');
  const [activeHemTab, setActiveHemTab] = useState<string>('MENU');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  const handleAttendanceChange = (studentId: string) => {
    setAttendance(prev => ({ ...prev, [studentId]: !prev[studentId] }));
  };

  const renderHemDashboard = () => {
    const hemButtons = [
      { id: 'DB', label: 'Pengkalan Data', icon: <Database />, desc: 'Analisis Murid T1-T6' },
      { id: 'ATT', label: 'Kehadiran Murid', icon: <UserCheck />, desc: 'Rekod Kehadiran Kelas' },
      { id: 'RMT', label: 'RMT', icon: <Utensils />, desc: 'Rancangan Makanan Tambahan' },
      { id: 'CTL', label: 'Kawalan Kelas', icon: <LogIn />, desc: 'Log Keluar/Masuk' },
      { id: 'REP', label: 'Laporan Harian', icon: <ClipboardList />, desc: 'Guru Bertugas' },
      { id: 'DIS', label: 'Disiplin', icon: <ShieldAlert />, desc: 'Rekod Merit/Demerit' },
      { id: 'COU', label: 'Unit Kaunseling', icon: <MessageCircle />, desc: 'Bimbingan & Kerjaya' },
      { id: 'ACT', label: 'Aktiviti Murid', icon: <Camera />, desc: 'Gambar & Laporan' },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {hemButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveHemTab(btn.id)}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-50 transition-all text-left group"
          >
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {btn.icon}
            </div>
            <h3 className="font-bold text-slate-800 text-sm">{btn.label}</h3>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{btn.desc}</p>
          </button>
        ))}
      </div>
    );
  };

  const renderHemSubContent = () => {
    switch (activeHemTab) {
      case 'DB':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">Analisis Murid SK Kemasek (T1-T6)</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }} />
                  <Bar dataKey="count" fill="#e11d48" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case 'ATT':
        if (!selectedClass) {
          return (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-black text-slate-800 tracking-tight">Pilih Kelas (Tahun 1)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {HEM_CLASSES.map(cls => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-rose-500 hover:shadow-lg hover:shadow-rose-50 transition-all text-center group"
                  >
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
                       <Users className="w-5 h-5" />
                    </div>
                    <p className="font-black text-lg text-slate-800">{cls}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Kehadiran Harian</p>
                  </button>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <button onClick={() => setSelectedClass(null)} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">{selectedClass}</h3>
                  <p className="text-xs text-slate-400 font-medium">Rekod Kehadiran: {new Date().toLocaleDateString('ms-MY')}</p>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-2.5 rounded-2xl text-sm font-bold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all">
                <Save className="w-4 h-4" />
                <span>Simpan Rekod</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="pb-4 px-2">Nama Murid</th>
                    <th className="pb-4 text-center">Jantina</th>
                    <th className="pb-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {HEM_STUDENTS.filter(s => s.className === selectedClass).map(student => (
                    <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-4 px-2 font-bold text-slate-700 text-sm group-hover:text-rose-600 transition-colors">{student.name}</td>
                      <td className="py-4 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${student.gender === 'L' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                          {student.gender}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button 
                          onClick={() => handleAttendanceChange(student.id)}
                          className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all border ${
                            attendance[student.id] 
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100' 
                            : 'bg-white border-slate-200 text-slate-400 hover:border-emerald-200'
                          }`}
                        >
                          {attendance[student.id] ? 'Hadir' : 'Rekod'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'DIS':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-800 tracking-tight">Rekod Disiplin (SSDM)</h3>
              <button className="bg-rose-600 text-white px-4 py-2 rounded-2xl text-xs font-black shadow-lg shadow-rose-100 hover:bg-rose-700 transition-all">+ TAMBAH REKOD</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="pb-4">Nama</th>
                    <th className="pb-4">Kelas</th>
                    <th className="pb-4">Jenis</th>
                    <th className="pb-4 text-right">Mata</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {DISCIPLINE_RECORDS.map(rec => (
                    <tr key={rec.id} className="hover:bg-slate-50/50">
                      <td className="py-4 font-bold text-sm">{rec.studentName}</td>
                      <td className="py-4 text-xs text-slate-500 font-medium">{rec.class}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-black ${rec.type === 'Nilai Terpuji' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {rec.type}
                        </span>
                      </td>
                      <td className={`py-4 text-right font-black text-sm ${rec.points > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {rec.points > 0 ? '+' : ''}{rec.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-16 text-center rounded-3xl border border-slate-100 animate-fade-in">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400">
               <HeartHandshake className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Modul Pintar HEM</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto text-sm leading-relaxed font-medium">Kami sedang menyelaraskan pangkalan data untuk bahagian ini. Harap sabar menunggu kemaskini seterusnya.</p>
            <button onClick={() => setActiveHemTab('MENU')} className="mt-8 px-8 py-3 bg-rose-50 text-rose-600 rounded-2xl font-black text-xs tracking-widest hover:bg-rose-100 transition-colors">
              KEMBALI KE MENU HEM
            </button>
          </div>
        );
    }
  };

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'DASHBOARD':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard title="Jumlah Murid" value={STATS.total} icon={<Users className="w-6 h-6" />} colorClass="bg-blue-600" trend="+2.5% bln lepas" />
              <StatsCard title="Kehadiran Hari Ini" value={`${STATS.attendanceToday}%`} icon={<UserCheck className="w-6 h-6" />} colorClass="bg-emerald-600" />
              <StatsCard title="Jumlah Guru" value={TEACHERS.length} icon={<Users2 className="w-6 h-6" />} colorClass="bg-purple-600" />
              <StatsCard title="Pencapaian Koko" value="8 EMAS" icon={<Trophy className="w-6 h-6" />} colorClass="bg-amber-600" trend="MSSD 2024" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-black text-slate-800 text-xl tracking-tight mb-6">Misi & Visi Digital</h3>
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 leading-relaxed text-slate-700 text-sm font-medium">
                  Mewujudkan ekosistem pengurusan digital yang cekap, telus, dan berinovasi untuk seluruh warga SK Kemasek selari dengan transformasi pendidikan negara. Kami komited dalam pendigitalan data untuk kemudahan guru dan ibu bapa.
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-black text-slate-800 text-xl tracking-tight mb-6">Pengumuman</h3>
                <div className="space-y-4">
                  {ANNOUNCEMENTS.map(ann => (
                    <div key={ann.id} className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">{ann.category}</span>
                        <span className="text-[10px] text-slate-400 font-bold">{ann.date}</span>
                      </div>
                      <p className="font-bold text-slate-800 text-sm">{ann.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'HEM':
        return (
          <div className="space-y-8">
            <div className="flex items-center space-x-4 animate-fade-in">
              {activeHemTab !== 'MENU' && (
                <button 
                  onClick={() => { setActiveHemTab('MENU'); setSelectedClass(null); }}
                  className="p-2 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-400 transition-all shadow-sm"
                >
                  <ChevronLeft />
                </button>
              )}
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                {activeHemTab === 'MENU' ? 'Hal Ehwal Murid' : `HEM / ${activeHemTab}`}
              </h2>
            </div>
            {activeHemTab === 'MENU' ? renderHemDashboard() : renderHemSubContent()}
          </div>
        );
      default:
        return (
          <div className="bg-white p-20 rounded-3xl shadow-sm border border-slate-100 text-center animate-fade-in">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
              {MENU_ITEMS.find(m => m.id === activeModule)?.icon}
            </div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Modul {activeModule}</h2>
            <p className="text-slate-500 mt-4 max-w-md mx-auto font-medium leading-relaxed">Pembangunan sistem untuk modul ini sedang giat dijalankan bagi memastikan kualiti terbaik untuk pengguna.</p>
            <button onClick={() => setActiveModule('DASHBOARD')} className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-xs tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
              KEMBALI KE DASHBOARD
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Sidebar activeModule={activeModule} setActiveModule={(mod) => { setActiveModule(mod); setActiveHemTab('MENU'); }} />
      
      <main className="lg:ml-64 p-4 lg:p-12 pb-32 lg:pb-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-none tracking-tighter">SiPDS SK Kemasek</h1>
            <div className="flex items-center space-x-2 mt-2">
               <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{SCHOOL_CODE}</span>
               <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{SCHOOL_NAME}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input type="text" placeholder="Cari data guru, murid..." className="bg-white border border-slate-200 rounded-2xl pl-12 pr-6 py-3 text-sm focus:ring-2 focus:ring-blue-100 border-none shadow-sm outline-none w-full md:w-80 transition-all placeholder:text-slate-300 font-medium" />
            </div>
            <button className="bg-white border-none p-3.5 rounded-2xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 relative transition-all shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {renderModuleContent()}
        </div>
        
        <GeminiAssistant />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-white/50 px-8 py-4 rounded-[2.5rem] flex justify-between items-center z-40 shadow-2xl shadow-slate-200">
        {MENU_ITEMS.slice(0, 5).map((item) => (
          <button 
            key={item.id}
            onClick={() => { setActiveModule(item.id as ModuleType); setActiveHemTab('MENU'); }}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ${activeModule === item.id ? 'text-blue-600 scale-110' : 'text-slate-300'}`}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
