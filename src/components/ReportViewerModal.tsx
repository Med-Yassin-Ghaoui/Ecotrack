import React, { useState, useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

interface ReportViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportViewerModal({ isOpen, onClose }: ReportViewerModalProps) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [step, setStep] = useState(0);

  const steps = [
    "Gathering environmental data...",
    "Compiling volunteer statistics...",
    "Generating impact charts...",
    "Formatting document...",
    "Finalizing report..."
  ];

  useEffect(() => {
    if (isOpen) {
      setIsGenerating(true);
      setStep(0);
      
      const interval = setInterval(() => {
        setStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => setIsGenerating(false), 800);
            return prev;
          }
          return prev + 1;
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={!isGenerating ? onClose : undefined}
      ></div>
      
      <div className={cn(
        "relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden transition-all duration-500",
        isGenerating ? "scale-95 opacity-0 animate-in fade-in zoom-in duration-300 max-w-md" : "scale-100 opacity-100"
      )}>
        {isGenerating ? (
          <div className="p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-[#afcdff]/30 rounded-full flex items-center justify-center mb-6 relative">
              <Loader2 className="w-10 h-10 text-[#3972f0] animate-spin" />
              <div className="absolute inset-0 border-4 border-[#3972f0]/20 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Generating Report</h3>
            <p className="text-[#3972f0] font-medium h-6">{steps[step]}</p>
            
            <div className="w-full bg-gray-100 rounded-full h-2 mt-8 overflow-hidden">
              <div 
                className="bg-[#3972f0] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-gray-700">PA-RPT-2025-Q2.pdf</span>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors" title="Print">
                  <Printer className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors" title="Download PDF">
                  <Download className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <button onClick={onClose} className="p-2 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Container */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-100/50">
              {/* The "Paper" */}
              <div className="bg-white max-w-[800px] mx-auto shadow-sm border border-gray-200 min-h-[1056px] p-10 sm:p-14 relative overflow-hidden">
                
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#afcdff] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
                
                {/* Header Banner */}
                <div className="bg-[#1e3a8a] rounded-2xl p-8 mb-10 relative overflow-hidden flex items-center justify-between shadow-lg">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#3972f0] rounded-full blur-2xl opacity-50 translate-x-1/4 -translate-y-1/4"></div>
                  
                  <div className="flex items-center relative z-10">
                    <Logo className="w-12 h-12 mr-4 text-white" />
                    <div>
                      <h1 className="text-3xl font-black text-white tracking-tight">PlanetAct</h1>
                      <p className="text-[#afcdff] text-sm font-medium">Organisation Non Gouvernementale — Protection de l'Environnement</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 bg-[#3972f0] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-inner border border-[#afcdff]/20 flex items-center">
                    Généré par EcoTrack
                    <Logo className="w-4 h-4 ml-2 opacity-80" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] mb-3 tracking-tight">
                    RAPPORT D'IMPACT ENVIRONNEMENTAL
                  </h2>
                  <p className="text-gray-500 font-medium text-lg">
                    Deuxième Trimestre 2025 • Janvier — Juin 2025
                  </p>
                </div>

                {/* Meta Table */}
                <div className="w-full border border-[#afcdff]/40 rounded-xl overflow-hidden mb-12 shadow-sm">
                  <div className="grid grid-cols-4 bg-[#f0f5ff] border-b border-[#afcdff]/40">
                    <div className="p-3 text-xs font-bold text-[#3972f0] uppercase tracking-wider">Date de génération</div>
                    <div className="p-3 text-xs font-bold text-[#3972f0] uppercase tracking-wider">Période couverte</div>
                    <div className="p-3 text-xs font-bold text-[#3972f0] uppercase tracking-wider">Généré par</div>
                    <div className="p-3 text-xs font-bold text-[#3972f0] uppercase tracking-wider">Statut</div>
                  </div>
                  <div className="grid grid-cols-4 bg-white">
                    <div className="p-4 text-sm font-medium text-gray-700">13 Avril 2026</div>
                    <div className="p-4 text-sm font-medium text-gray-700">1 Jan – 30 Jun 2025</div>
                    <div className="p-4 text-sm font-medium text-gray-700">EcoTrack Community</div>
                    <div className="p-4 text-sm font-bold text-green-600 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1.5" /> Validé
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <div className="mb-10">
                  <div className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg inline-flex items-center font-bold mb-6 shadow-sm">
                    <span className="text-[#afcdff] mr-3">01</span> — RÉSUMÉ EXÉCUTIF
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Au cours du deuxième trimestre 2025, PlanetAct a mobilisé <strong className="text-gray-900">234 bénévoles actifs</strong> via la plateforme EcoTrack Community, permettant de traiter <strong className="text-gray-900">89 signalements environnementaux</strong> sur les 142 reçus — soit un taux de résolution record de <strong className="text-[#3972f0]">62,7%</strong>, en hausse de <strong className="text-green-600">+18%</strong> par rapport au trimestre précédent.
                    </p>
                    <p>
                      PlanetAct a organisé <strong className="text-gray-900">34 événements terrain</strong> — nettoyages urbains, collectes de déchets, marches de sensibilisation — rassemblant en moyenne <strong className="text-gray-900">47 participants par événement</strong>. La plateforme a réduit le temps de coordination administrative de <strong className="text-[#3972f0]">plus de 70%</strong> par rapport aux méthodes manuelles antérieures.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg inline-flex items-center font-bold mb-6 shadow-sm">
                    <span className="text-[#afcdff] mr-3">02</span> — INDICATEURS CLÉS DE PERFORMANCE
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div className="border-l-4 border-[#3972f0] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-r-xl p-5">
                      <div className="text-4xl font-black text-[#1e3a8a] mb-1">142</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Signalements Reçus</div>
                      <div className="text-sm font-bold text-[#3972f0]">↑ 23% vs T1 2025</div>
                    </div>
                    <div className="border-l-4 border-[#3972f0] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-r-xl p-5">
                      <div className="text-4xl font-black text-[#1e3a8a] mb-1">89</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Problèmes Résolus</div>
                      <div className="text-sm font-bold text-[#3972f0]">↑ 18% vs T1 2025</div>
                    </div>
                    <div className="border-l-4 border-[#3972f0] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-r-xl p-5">
                      <div className="text-4xl font-black text-[#1e3a8a] mb-1">234</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Bénévoles Mobilisés</div>
                      <div className="text-sm font-bold text-[#3972f0]">↑ 31% vs T1 2025</div>
                    </div>
                    <div className="border-l-4 border-[#3972f0] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-r-xl p-5">
                      <div className="text-4xl font-black text-[#1e3a8a] mb-1">34</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Événements Organisés</div>
                      <div className="text-sm font-bold text-[#3972f0]">↑ 8% vs T1 2025</div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <div className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg inline-flex items-center font-bold mb-6 shadow-sm">
                    <span className="text-[#afcdff] mr-3">03</span> — ANALYSE DE L'ACTIVITÉ
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-[#1e3a8a] mb-6">Activité mensuelle — Signalements vs Résolutions</h4>
                    
                    {/* Fake Chart */}
                    <div className="h-64 flex items-end justify-between px-4 pb-8 border-b border-gray-200 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-x-0 top-0 border-t border-gray-100"></div>
                      <div className="absolute inset-x-0 top-1/4 border-t border-gray-100"></div>
                      <div className="absolute inset-x-0 top-2/4 border-t border-gray-100"></div>
                      <div className="absolute inset-x-0 top-3/4 border-t border-gray-100"></div>
                      
                      {/* Legend */}
                      <div className="absolute -top-8 left-0 flex space-x-6">
                        <div className="flex items-center text-xs text-gray-500"><div className="w-3 h-3 bg-[#3972f0] mr-2"></div> Signalements reçus</div>
                        <div className="flex items-center text-xs text-gray-500"><div className="w-3 h-3 bg-[#afcdff] mr-2"></div> Problèmes résolus</div>
                      </div>

                      {/* Bars */}
                      {[
                        { month: 'Jan', received: 18, resolved: 11 },
                        { month: 'Fév', received: 22, resolved: 14 },
                        { month: 'Mar', received: 28, resolved: 19 },
                        { month: 'Avr', received: 31, resolved: 22 },
                        { month: 'Mai', received: 35, resolved: 24 },
                        { month: 'Jun', received: 8, resolved: 5 },
                      ].map((data, i) => (
                        <div key={i} className="flex flex-col items-center relative z-10 w-12">
                          <div className="flex items-end space-x-1 h-48 w-full justify-center">
                            <div className="w-4 bg-[#3972f0] rounded-t-sm relative group" style={{ height: `${(data.received / 40) * 100}%` }}>
                              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-600">{data.received}</span>
                            </div>
                            <div className="w-4 bg-[#afcdff] rounded-t-sm relative group" style={{ height: `${(data.resolved / 40) * 100}%` }}>
                              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-600">{data.resolved}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 mt-3">{data.month}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">* Juin 2025 : mois en cours — données partielles</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 left-10 right-10 flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <span>EcoTrack Community Platform • Rapport généré automatiquement le 13 Avril 2026</span>
                  <span>Page 1</span>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
