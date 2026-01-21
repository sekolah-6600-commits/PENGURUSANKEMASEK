
import React from 'react';
import { MENU_ITEMS, SCHOOL_NAME } from '../constants';
import { ModuleType } from '../types';

interface SidebarProps {
  activeModule: ModuleType;
  setActiveModule: (module: ModuleType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 hidden lg:flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <div>
            <h1 className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">SiPDS</h1>
            <p className="text-sm font-bold text-slate-800 leading-tight">SK Kemasek</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id as ModuleType)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeModule === item.id
                ? `${item.color} text-white shadow-lg`
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="bg-slate-50 p-4 rounded-xl">
          <p className="text-xs text-slate-500 mb-1">Log masuk sebagai:</p>
          <p className="text-sm font-semibold text-slate-800">Pentadbir Sekolah</p>
          <button className="text-xs text-blue-600 mt-2 hover:underline">Log Keluar</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
