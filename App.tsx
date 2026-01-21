
import React, { useState } from 'react';
import { 
  Users, GraduationCap, HeartHandshake, Trophy, Accessibility, 
  Search, Bell, Plus, Calendar, PieChart, FileText, Settings,
  Users2, UserCheck, TrendingUp, BookOpen
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import GeminiAssistant from './components/GeminiAssistant';
import { ModuleType } from './types';
import { TEACHERS, STATS, ANNOUNCEMENTS, SCHOOL_NAME, SCHOOL_CODE, MENU_ITEMS } from './constants';

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
      default:
        return (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              {MENU_ITEMS.find(m => m.id === activeModule)?.icon}
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Modul {activeModule}</h2>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">Bahagian ini sedang dalam fasa pembangunan digital. Maklumat lanjut akan dikemaskini dalam masa terdekat.</p>
            <button 
              onClick={() => setActiveModule('DASHBOARD')}
              className="mt-8 text-blue-600 font-semibold hover:underline"
            >
              Kembali ke Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="lg:ml-64 p-4 lg:p-8 pb-24 lg:pb-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-900 leading-tight">
              {MENU_ITEMS.find(m => m.id === activeModule)?.label || 'SiPDS'}
            </h1>
            <p className="text-slate-500 text-sm font-medium">{SCHOOL_NAME} • {SCHOOL_CODE}</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Cari maklumat..." 
                className="bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full md:w-64 transition-all"
              />
            </div>
            <button className="bg-white border border-slate-200 p-2 rounded-xl text-slate-600 hover:bg-slate-50 relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Content */}
        {renderModuleContent()}

        {/* Floating AI Assistant */}
        <GeminiAssistant />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-40">
        {MENU_ITEMS.slice(0, 5).map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveModule(item.id as ModuleType)}
            className={`flex flex-col items-center space-y-1 ${
              activeModule === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.id.slice(0, 4)}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
