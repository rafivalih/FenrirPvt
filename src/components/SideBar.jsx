import { 
  LayoutDashboard, FolderOpen, Calendar, 
  Bell, Settings, Info, FileBarChart, ChevronRight 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SideBar(){
  
  // Refined NavItem to take isActive from NavLink
  const NavItem = ({ icon, label, active = false, hasAlert = false }) => (
    <div className={`relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active 
        ? "bg-[#e7f9f7] text-[#12c4b2] font-bold" 
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    }`}>
      {/* Container for icon + potential alert dot */}
      <div className="relative flex items-center justify-center">
        {icon}
        {hasAlert && (
          <span className="absolute -bottom-0.5 -left-0.5 w-[7px] h-[7px] bg-orange-500 rounded-full border border-white"></span>
        )}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col justify-between h-full py-6 bg-white border-r border-gray-100">
      <main>
        <nav className="flex-1 px-4 space-y-1">
          
          {/* Dashboard Link */}
          <NavLink to="/DashBoard" className="block no-underline">
            {({ isActive }) => (
              <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={isActive} />
            )}
          </NavLink>

          <NavItem icon={<FolderOpen size={20}/>} label="Projects" />

          {/* Scans Link with Orange Alert Dot */}
          <NavLink to="/Scans" className="block no-underline">
            {({ isActive }) => (
              <NavItem 
                icon={<FileBarChart size={20}/>} 
                label="Scans" 
                active={isActive} 
                hasAlert={true} 
              />
            )}
          </NavLink>

          <NavItem icon={<Calendar size={20}/>} label="Schedule" />
          
          <div className="pt-10 pb-4 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">System</div>
          
          {/* Notifications Link with Orange Alert Dot */}
          <NavItem icon={<Bell size={20}/>} label="Notifications" hasAlert={true} />
          
          <NavItem icon={<Settings size={20}/>} label="Settings" />
          <NavItem icon={<Info size={20}/>} label="Support" />
        </nav>
      </main>

      <footer className="px-4 border-t border-gray-50 pt-4">
        <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors group">
          <div className="h-10 w-10 rounded-full bg-[#ffd666] flex items-center justify-center text-xl shadow-inner transition-transform group-hover:scale-105">
            👨‍💻
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[10px] text-gray-400 truncate">admin@edu.com</p>
            <p className="text-sm font-bold truncate text-slate-800">Security Lead</p>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </div>
      </footer>
    </div>
  );
}