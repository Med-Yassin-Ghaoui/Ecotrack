import React from 'react';
import { MapPin, MessageCircle, ArrowUp, Share, MoreHorizontal, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { useOutletContext } from 'react-router-dom';

export default function HomeFeed({ reports, onUpvote, onClaim }: { reports: any[], onUpvote: (id: string) => void, onClaim: (id: string) => void }) {
  const { openReportModal } = useOutletContext<{ openReportModal: () => void }>();

  // Mock users for the feed to match the design
  const mockUsers = [
    { name: 'Bailey', avatar: 'https://i.pravatar.cc/150?img=47', action: 'Reported', emoji: '💙' },
    { name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=43', action: 'Resolved', emoji: '🌱' },
    { name: 'Omar', avatar: 'https://i.pravatar.cc/150?img=11', action: 'Commented on', emoji: '🌲' },
    { name: 'Lina', avatar: 'https://i.pravatar.cc/150?img=5', action: 'Reported', emoji: '🌍' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 md:py-8">
      
      {/* Top Status Card */}
      <div className="bg-[#FDFBF7] rounded-[2rem] p-6 md:p-8 mb-10 shadow-sm border border-[#F2EFEA] relative overflow-hidden">
        <h2 className="text-3xl font-heading text-gray-900 mb-5 tracking-tight">Did you clean today?</h2>
        
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#3972F0] text-white flex items-center justify-center font-bold text-sm shadow-sm">⚡</div>
          <div className="w-8 h-8 rounded-full bg-[#3972F0] text-white flex items-center justify-center font-bold text-sm shadow-sm">⚡</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-white flex items-center justify-center font-bold text-sm">T</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-white flex items-center justify-center font-bold text-sm">W</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-white flex items-center justify-center font-bold text-sm relative">
            T
            <span className="absolute -bottom-2.5 w-1.5 h-1.5 bg-[#3972F0] rounded-full"></span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-white flex items-center justify-center font-bold text-sm">F</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-white flex items-center justify-center font-bold text-sm">S</div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="bg-[#3972F0] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#2563EB] transition-colors shadow-sm active:scale-95">
            I cleaned today
          </button>
          <button className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-sm transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative Image Placeholder */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-24 h-32 bg-gray-900 rounded-xl shadow-lg hidden sm:flex items-center justify-center overflow-hidden border-4 border-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3972F0] to-[#1E3A8A] opacity-80"></div>
          <span className="text-4xl relative z-10">🌍</span>
        </div>
      </div>

      {/* Feed List */}
      <div className="space-y-12">
        {reports.map((report, index) => {
          const user = report.isAnonymous 
            ? { name: 'Anonymous', avatar: 'https://ui-avatars.com/api/?name=Anonymous&background=f3f4f6&color=9ca3af', action: 'Reported', emoji: '🕵️' }
            : mockUsers[index % mockUsers.length];

          return (
            <div key={report.id} className="group">
              <div className="text-gray-500 italic text-[15px] mb-4 font-heading">
                Because you live near {report.location}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-3 object-cover shadow-sm" />
                  <div>
                    <div className="flex items-center">
                      <span className="font-heading text-xl font-bold text-gray-900 mr-2">{user.name}</span>
                      <span className="text-xl mr-2">{user.emoji}</span>
                      <span className="text-gray-400 text-[15px]">{report.timeAgo}</span>
                    </div>
                    <div className="text-gray-600 text-[15px]">
                      {user.action} <span className="text-blue-600 font-medium">{report.category}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <MoreHorizontal className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-2 mb-2">
                <h4 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">{report.title}</h4>
                
                {report.image && (
                  <div className="mb-4 rounded-2xl overflow-hidden border border-gray-200">
                    <img src={report.image} alt="Report evidence" className="w-full h-auto object-cover max-h-[400px]" />
                  </div>
                )}

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {report.description}
                </p>
                
                <div className="flex items-center space-x-3 text-sm font-medium text-gray-500">
                  <span className="flex items-center bg-gray-100 px-2.5 py-1 rounded-lg text-gray-700">
                    <span className="mr-1.5 text-base">{report.categoryIcon}</span> {report.category}
                  </span>
                  <span className={cn(
                    "px-2.5 py-1 rounded-lg",
                    report.status === 'Open' ? 'bg-red-50 text-red-700' :
                    report.status === 'In Progress' ? 'bg-orange-50 text-orange-700' :
                    'bg-green-50 text-green-700'
                  )}>
                    {report.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5 px-2">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => onUpvote(report.id)} 
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors group/btn"
                  >
                    <ArrowUp className="w-7 h-7 mr-2 group-hover/btn:text-orange-500 transition-colors" strokeWidth={2.5} />
                    <span className="font-medium text-lg">{report.upvotes}</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-blue-500 transition-colors group/btn">
                    <MessageCircle className="w-7 h-7 mr-2 group-hover/btn:fill-blue-500 transition-colors" />
                    <span className="font-medium text-lg">{report.comments}</span>
                  </button>
                </div>
                <button className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Share className="w-7 h-7" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

