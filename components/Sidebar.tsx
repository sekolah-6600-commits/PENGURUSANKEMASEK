
import React from 'react';
import { MENU_ITEMS } from '../constants';
import { ModuleType } from '../types';

interface SidebarProps {
  activeModule: ModuleType;
  setActiveModule: (module: ModuleType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 hidden lg:flex flex-col z-30">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
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
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeModule === item.id
                ? `${item.color} text-white shadow-lg shadow-blue-100`
                : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            <div className={`transition-transform duration-200 ${activeModule === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
              {item.icon}
            </div>
            <span className="font-semibold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Status Sistem</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-bold text-slate-700">Dalam Talian</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
