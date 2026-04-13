import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bell, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export function Navbar({ onOpenReport }: { onOpenReport: () => void }) {
  const navLinks = [
    { to: '/', label: 'Home Feed' },
    { to: '/map', label: 'Map View' },
    { to: '/events', label: 'Events' },
    { to: '/leaderboard', label: 'Leaderboard' },
    { to: '/donate', label: 'Donate' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="font-black text-xl tracking-tight text-primary">EcoTrack</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  "px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm",
                  isActive 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-gray-500 hover:text-primary transition-colors relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <button 
              onClick={onOpenReport}
              className="hidden md:flex items-center px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl hover:bg-accent/90 transition-all shadow-sm hover:shadow active:scale-95"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Report Pollution
            </button>
            
            {/* Mobile Profile Avatar (Placeholder) */}
            <div className="md:hidden w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=32" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
