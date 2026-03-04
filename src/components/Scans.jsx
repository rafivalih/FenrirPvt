import { 
  ChevronRight, RotateCcw, Search, Zap, 
  TestTube, CheckCircle, ClipboardList, 
  ChevronDown, X 
} from "lucide-react";
import SideBar from "./SideBar";

export default function Scans() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-[#0f172a]">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-gray-100 flex flex-col bg-white sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-2 mb-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#12c4b2]">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>
          <span className="text-xl font-bold lowercase tracking-tighter">aps</span>
        </div>
        <SideBar />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Scan</span> <ChevronRight size={14} />
            <span className="hover:text-[#12c4b2] cursor-pointer">Private Assets</span>
            <ChevronRight size={14} />
            <span className="text-[#12c4b2] font-medium">New Scan</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-semibold border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              Export Report
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all">
              Stop Scan
            </button>
          </div>
        </header>

        <div className="p-8 space-y-6">
          {/* 1. PROGRESS STEPPER CARD */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="relative flex items-center justify-between px-16 mb-12">
              <div className="absolute top-6 left-0 h-[2px] w-full bg-gray-100 -z-0"></div>
              <Step icon={<Search size={18}/>} label="Spidering" active />
              <Step icon={<Zap size={18}/>} label="Mapping" />
              <Step icon={<TestTube size={18}/>} label="Testing" />
              <Step icon={<CheckCircle size={18}/>} label="Validating" />
              <Step icon={<ClipboardList size={18}/>} label="Reporting" />

              {/* Progress Circle (Left side) */}
              <div className="absolute -left-4 top-0 flex flex-col items-center">
                <div className="relative h-16 w-16 flex items-center justify-center rounded-full border-[6px] border-gray-100">
                  <span className="text-lg font-black">0%</span>
                  <div className="absolute inset-0 border-[6px] border-[#0f172a] rounded-full border-t-transparent border-l-transparent border-r-transparent -rotate-45"></div>
                </div>
                <span className="text-[8px] font-bold text-gray-400 mt-1 uppercase">In Progress</span>
              </div>
            </div>

            {/* Scan Metadata */}
            <div className="grid grid-cols-6 gap-4 pt-6 border-t border-gray-50">
              <MetaStat label="Scan Type" value="Grey Box" />
              <MetaStat label="Targets" value="google.com" isBold />
              <MetaStat label="Started At" value="Nov 22, 09:00AM" />
              <MetaStat label="Credentials" value="2 Active" />
              <MetaStat label="Files" value="Control.pdf" />
              <MetaStat label="Checklists" value="40/350" highlight />
            </div>
          </div>

          {/* 2. LIVE SCAN CONSOLE */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-lg flex flex-col h-[600px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#12c4b2] animate-pulse"></div>
                  <span className="text-sm font-bold">Live Scan Console</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-[10px] text-gray-400 font-bold">
                  <RotateCcw size={12} /> Running...
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <ChevronDown size={18} className="cursor-pointer" />
                <X size={18} className="cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Activity Log (Terminal) */}
              <div className="flex-1 p-8 overflow-y-auto font-mono text-[13px] leading-relaxed text-gray-600 border-r border-gray-50">
                <p className="mb-4"><span className="text-gray-300 mr-3">[09:00:00]</span> I'll begin a systematic penetration test on <span className="text-[#12c4b2] font-bold underline">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.</p>
                <p className="mb-4"><span className="text-gray-300 mr-3">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.</p>
                <div className="pl-6 border-l-2 border-gray-100 mb-4 opacity-70">
                   <p className="text-xs">| - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)</p>
                   <p className="text-xs">Let me probe the web server on target first to understand its structure.</p>
                </div>
                <p className="mb-4"><span className="text-gray-300 mr-3">[09:03:00]</span> Great! I found a login page. I can see a useful comment: <span className="text-[#12c4b2] font-bold italic">"TODO: Delete the testing account (test:test)"</span>.</p>
              </div>

              {/* Findings Sidebar */}
              <div className="w-80 bg-gray-50/30 p-6 overflow-y-auto space-y-4">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Finding Log</h3>
                <FindingCard severity="Critical" title="SQL Injection in Auth" path="/api/users/profile" time="10:45:23" />
                <FindingCard severity="High" title="Unauthorized Metadata Access" path="/api/auth/login" time="10:45:23" />
                <FindingCard severity="Medium" title="Rate Limiting Bypass" path="/api/search" time="10:45:23" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// HELPER COMPONENTS
function Step({ icon, label, active }) {
  return (
    <div className="flex flex-col items-center gap-2 relative z-10">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${active ? 'bg-[#12c4b2] border-[#e7f9f7] text-white' : 'bg-white border-gray-100 text-gray-300'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-tight ${active ? 'text-[#12c4b2]' : 'text-gray-300'}`}>{label}</span>
    </div>
  );
}

function MetaStat({ label, value, isBold, highlight }) {
  return (
    <div className="flex flex-col border-r border-gray-100 last:border-none px-2">
      <span className="text-[10px] font-bold text-gray-400 uppercase mb-1">{label}</span>
      <span className={`text-sm ${isBold ? 'font-black' : 'font-bold'} ${highlight ? 'text-[#12c4b2]' : 'text-slate-800'}`}>{value}</span>
    </div>
  );
}

function FindingCard({ severity, title, path, time }) {
  const colors = { Critical: 'bg-red-500', High: 'bg-orange-500', Medium: 'bg-yellow-500' };
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className={`${colors[severity]} text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase`}>{severity}</span>
        <span className="text-[9px] text-gray-300 font-mono">{time}</span>
      </div>
      <p className="text-xs font-black leading-tight mb-1">{title}</p>
      <p className="text-[10px] text-[#12c4b2] font-mono truncate">{path}</p>
    </div>
  );
}