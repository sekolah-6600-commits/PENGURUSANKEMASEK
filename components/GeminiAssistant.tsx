
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, X, MessageSquare } from 'lucide-react';
import { getSmartResponse } from '../services/geminiService';
import { TEACHERS, STATS } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Salam! Saya Bantuan Pintar SiPDS SK Kemasek. Bagaimana saya boleh bantu anda hari ini?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const context = `Sekolah: SK Kemasek. Guru: ${TEACHERS.length}. Murid: ${STATS.total}. Kehadiran: ${STATS.attendanceToday}%.`;
    
    try {
      const response = await getSmartResponse(userMsg, context);
      setMessages(prev => [...prev, { role: 'bot', text: response || 'Maaf, saya tidak dapat memproses permintaan tersebut.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sistem AI sedang sibuk. Sila cuba sebentar lagi.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-[400px] h-[550px] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-blue-600 p-5 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-xl">
                <Sparkles className="w-5 h-5 text-blue-100" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Asisten Pintar SiPDS</h3>
                <p className="text-[10px] text-blue-200 font-medium">Sentiasa sedia membantu</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-blue-500 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  <div className="flex items-center space-x-2 mb-2 opacity-50 text-[10px] uppercase font-bold tracking-wider">
                    {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    <span>{m.role === 'user' ? 'Anda' : 'AI Assistant'}</span>
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 shadow-sm flex space-x-2 items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya soalan mengenai SK Kemasek..."
                className="flex-1 bg-transparent border-none px-4 py-2 text-sm outline-none placeholder:text-slate-400"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-30 shadow-lg shadow-blue-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 flex items-center space-x-3 group overflow-hidden"
        >
          <div className="relative">
             <MessageSquare className="w-6 h-6" />
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 border-2 border-blue-600 rounded-full"></div>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm whitespace-nowrap">
            Bantuan Pintar
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
