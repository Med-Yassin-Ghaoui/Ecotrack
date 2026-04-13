import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Modal } from './Modal';
import { MapPin, Image as ImageIcon, Home, Map as MapIcon, Calendar, Trophy, LayoutDashboard, Plus, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export function Layout() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowBottomNav(false);
      } else {
        setShowBottomNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/map', icon: MapIcon, label: 'Map' },
    { to: '/events', icon: Calendar, label: 'Events' },
    { to: '/leaderboard', icon: Trophy, label: 'Rank' },
    { to: '/donate', icon: Heart, label: 'Donate' },
    { to: '/dashboard', icon: LayoutDashboard, label: 'NGO' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#F8F9FA] pb-24 md:pb-0">
      <Navbar onOpenReport={() => setIsReportModalOpen(true)} />
      
      <main className="flex-1 relative">
        <Outlet context={{ openReportModal: () => setIsReportModalOpen(true) }} />
      </main>

      <footer className="hidden md:block bg-[#1B4332] text-white py-10 mt-auto border-t border-[#143224]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-black text-xl mb-2 flex items-center justify-center md:justify-start">
              <Logo className="w-6 h-6 mr-2" /> EcoTrack Community
            </div>
            <p className="text-primary-100/80 text-sm max-w-sm">
              Open-source software built in partnership with Earth Life Protection 🌲. Making our environment cleaner, together.
            </p>
          </div>
          <div className="flex space-x-8 text-sm font-medium text-primary-100/80">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Button */}
      <div 
        className={cn(
          "md:hidden fixed right-4 z-40 transition-all duration-300 ease-in-out",
          showBottomNav ? "bottom-24" : "bottom-6"
        )}
      >
        <button 
          onClick={() => setIsReportModalOpen(true)}
          className="flex items-center justify-center px-5 py-3.5 bg-[#4A5D23] text-white font-bold rounded-full shadow-lg hover:bg-[#3b4a1c] active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5 mr-2" />
          Report
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div 
        className={cn(
          "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 transition-transform duration-300 ease-in-out pb-safe",
          showBottomNav ? "translate-y-0" : "translate-y-full"
        )}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex justify-around items-center h-16 px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className="flex flex-col items-center justify-center w-full h-full space-y-1"
              >
                <Icon className={cn("w-6 h-6 transition-colors", isActive ? "text-primary fill-primary/20" : "text-gray-400")} />
                <span className={cn("text-[10px] font-medium transition-colors", isActive ? "text-primary font-bold" : "text-gray-500")}>
                  {link.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Global Report Modal */}
      <Modal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)}
        title="Report Pollution"
      >
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Title</label>
            <input type="text" placeholder="e.g., Plastic waste in the park" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm bg-white appearance-none">
              <option>Park Waste</option>
              <option>Street Waste</option>
              <option>Forest Debris</option>
              <option>Illegal Dumping</option>
              <option>Air Pollution</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
            <textarea rows={3} placeholder="Describe the issue..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm resize-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Photo Evidence</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-primary/50 transition-colors cursor-pointer bg-gray-50/50">
              <ImageIcon className="w-8 h-8 mb-3 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Drag & drop or click to upload</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search location or drop pin..." className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
          <button 
            onClick={() => setIsReportModalOpen(false)}
            className="w-full py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-sm active:scale-[0.98]"
          >
            Submit Report
          </button>
        </div>
      </Modal>
    </div>
  );
}
