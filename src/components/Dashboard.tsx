import React, { useState } from 'react';
import { FileText, Users, AlertTriangle, CheckCircle, ArrowUp, ArrowDown, Download, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { ReportViewerModal } from './ReportViewerModal';

export default function Dashboard() {
  const [isReportViewerOpen, setIsReportViewerOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Impact Dashboard & Report Generator</h1>
          <p className="text-gray-500 mt-2 text-lg font-medium">Fish Life Protection NGO Access</p>
        </div>
        <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold flex items-center border border-primary/20 shadow-sm">
          <CheckCircle className="w-5 h-5 mr-2" /> NGO Access Verified
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex items-center text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUp className="w-4 h-4 mr-1" /> 12%
            </div>
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1 tracking-tight">142</div>
          <div className="text-gray-500 font-medium">Total Issues Reported</div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-green-50 p-3.5 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="flex items-center text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUp className="w-4 h-4 mr-1" /> 8%
            </div>
          </div>
          <div className="flex items-baseline mb-1">
            <div className="text-4xl font-black text-gray-900 mr-3 tracking-tight">89</div>
            <div className="text-sm font-bold text-green-600 bg-green-100 px-2.5 py-1 rounded-lg">62%</div>
          </div>
          <div className="text-gray-500 font-medium">Issues Resolved</div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-purple-50 p-3.5 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex items-center text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUp className="w-4 h-4 mr-1" /> 24%
            </div>
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1 tracking-tight">234</div>
          <div className="text-gray-500 font-medium">Volunteers Mobilized</div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-orange-50 p-3.5 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex items-center text-red-500 text-sm font-bold bg-red-50 px-2 py-1 rounded-lg">
              <ArrowDown className="w-4 h-4 mr-1" /> 3%
            </div>
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1 tracking-tight">34</div>
          <div className="text-gray-500 font-medium">Events Organized</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Bar Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/60">
          <h3 className="font-black text-xl text-gray-900 mb-8">Monthly Issues Reported vs Resolved</h3>
          <div className="h-64 flex items-end justify-between gap-3">
            {[
              { month: 'Jan', rep: 40, res: 20 },
              { month: 'Feb', rep: 60, res: 35 },
              { month: 'Mar', rep: 55, res: 45 },
              { month: 'Apr', rep: 80, res: 50 },
              { month: 'May', rep: 70, res: 65 },
              { month: 'Jun', rep: 90, res: 80 },
            ].map((data, i) => (
              <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group">
                <div className="flex w-full justify-center gap-1.5 items-end h-[calc(100%-2.5rem)]">
                  <div className="w-1/2 max-w-[24px] bg-gray-200 rounded-t-md group-hover:bg-gray-300 transition-colors relative" style={{ height: `${data.rep}%` }}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{data.rep}</div>
                  </div>
                  <div className="w-1/2 max-w-[24px] bg-primary rounded-t-md group-hover:bg-primary/80 transition-colors relative" style={{ height: `${data.res}%` }}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{data.res}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-3 font-bold">{data.month}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-8 text-sm font-bold text-gray-600">
            <div className="flex items-center"><div className="w-4 h-4 bg-gray-200 rounded-md mr-2.5"></div> Reported</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-primary rounded-md mr-2.5"></div> Resolved</div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/60 flex flex-col">
          <h3 className="font-black text-xl text-gray-900 mb-8">Issues by Category</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-56 h-56 rounded-full shadow-inner" style={{
              background: 'conic-gradient(#3b82f6 0% 35%, #10b981 35% 60%, #f59e0b 60% 80%, #ef4444 80% 95%, #8b5cf6 95% 100%)'
            }}>
              <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center flex-col shadow-sm">
                <span className="text-4xl font-black text-gray-900 tracking-tight">142</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Total</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8 text-sm font-bold text-gray-600">
            <div className="flex items-center"><div className="w-4 h-4 bg-blue-500 rounded-md mr-3"></div> Park Waste (35%)</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-emerald-500 rounded-md mr-3"></div> Street Waste (25%)</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-amber-500 rounded-md mr-3"></div> Illegal Dumping (20%)</div>
            <div className="flex items-center"><div className="w-4 h-4 bg-red-500 rounded-md mr-3"></div> River Contam. (15%)</div>
            <div className="flex items-center col-span-2 justify-center"><div className="w-4 h-4 bg-purple-500 rounded-md mr-3"></div> Air Pollution (5%)</div>
          </div>
        </div>
      </div>

      {/* Report Generator */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl font-black text-gray-900 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-primary" /> Generate Donor Report
          </h2>
        </div>
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Date Range</label>
              <div className="flex items-center space-x-4">
                <input type="date" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none shadow-sm transition-all font-medium text-gray-700" defaultValue="2025-04-01" />
                <span className="text-gray-400 font-bold">to</span>
                <input type="date" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none shadow-sm transition-all font-medium text-gray-700" defaultValue="2025-06-30" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Include Sections</label>
              <div className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                {['Issue Statistics', 'Volunteer Activity', 'Events Summary', 'Category Breakdown', 'Impact Photos'].map((section, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-colors cursor-pointer" defaultChecked />
                      <CheckCircle className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={4} />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 font-semibold transition-colors">{section}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Report Format</label>
              <div className="flex space-x-4">
                <label className="flex-1 flex items-center justify-center px-4 py-3.5 border-2 border-primary bg-primary/5 text-primary rounded-xl cursor-pointer font-bold transition-colors">
                  <input type="radio" name="format" className="sr-only" defaultChecked />
                  PDF Document
                </label>
                <label className="flex-1 flex items-center justify-center px-4 py-3.5 border-2 border-gray-200 text-gray-500 rounded-xl cursor-pointer font-bold hover:bg-gray-50 hover:text-gray-700 transition-colors">
                  <input type="radio" name="format" className="sr-only" />
                  HTML Link
                </label>
              </div>
            </div>

            <button 
              onClick={() => setIsReportViewerOpen(true)}
              className="w-full py-4 bg-[#1e3a8a] text-white font-bold rounded-xl hover:bg-[#1e3a8a]/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center text-lg"
            >
              <Download className="w-5 h-5 mr-2" /> Generate Report
            </button>
          </div>

          {/* Preview */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">Document Preview</label>
            <div className="w-full aspect-[1/1.4] bg-white rounded-2xl border border-gray-200 p-8 shadow-sm relative overflow-hidden flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>
              
              {/* Document Header */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xl border border-primary/20">
                  🌲
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact Report</div>
                  <div className="text-sm font-black text-gray-900">Q2 2025</div>
                </div>
              </div>
              
              <div className="w-3/4 h-6 bg-gray-200 rounded-md mb-4 relative z-10 group-hover:bg-gray-300 transition-colors"></div>
              <div className="w-1/2 h-4 bg-gray-100 rounded-md mb-10 relative z-10 group-hover:bg-gray-200 transition-colors"></div>
              
              <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors"></div>
                <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors"></div>
              </div>
              
              <div className="w-full h-40 bg-gray-50 rounded-xl mb-6 border border-gray-100 flex items-center justify-center text-gray-300 relative z-10 group-hover:border-gray-200 transition-colors">
                <ImageIcon className="w-10 h-10 opacity-50" />
              </div>
              
              <div className="space-y-3 mt-auto relative z-10">
                <div className="w-full h-2.5 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors"></div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors"></div>
                <div className="w-2/3 h-2.5 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ReportViewerModal 
        isOpen={isReportViewerOpen} 
        onClose={() => setIsReportViewerOpen(false)} 
      />
    </div>
  );
}
