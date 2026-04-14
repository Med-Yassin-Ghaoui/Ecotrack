import React from 'react';
import { Trophy, Medal, Award, Target, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Leaderboard({ data }: { data: any[] }) {
  const top3 = data.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-black text-gray-900 flex items-center justify-center tracking-tight">
          <Trophy className="w-8 h-8 text-accent mr-3" /> Classement des bénévoles
        </h1>
        <p className="text-gray-500 mt-2 text-lg font-medium">Les meilleurs héros de l'environnement ce mois-ci</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-12">
          
          {/* Podium */}
          <div className="flex justify-center items-end h-72 gap-2 sm:gap-6 px-4">
            {/* 2nd Place */}
            <div className="flex flex-col items-center w-1/3 relative group">
              <div className="relative mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-full text-white flex items-center justify-center text-xl sm:text-2xl font-bold border-4 border-white shadow-lg", top3[1].color)}>
                  {top3[1].initials}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gray-100 rounded-full p-1.5 border-2 border-white shadow-sm">
                  <Medal className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="font-bold text-gray-900 text-center text-sm sm:text-base">{top3[1].name}</div>
              <div className="text-primary font-bold text-sm">{top3[1].points} pts</div>
              <div className="w-full bg-gradient-to-t from-gray-200 to-gray-50 h-28 rounded-t-2xl mt-5 flex items-start justify-center pt-4 border border-b-0 border-gray-200/60 shadow-inner">
                <span className="text-3xl font-black text-gray-300">2</span>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center w-1/3 relative group z-10">
              <div className="absolute -top-10 text-xl animate-bounce">👑</div>
              <div className="relative mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className={cn("w-20 h-20 sm:w-24 sm:h-24 rounded-full text-white flex items-center justify-center text-2xl sm:text-3xl font-bold border-4 border-white shadow-xl ring-4 ring-yellow-400/20", top3[0].color)}>
                  {top3[0].initials}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-100 rounded-full p-1.5 border-2 border-white shadow-sm">
                  <Medal className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <div className="font-black text-gray-900 text-base sm:text-lg text-center">{top3[0].name}</div>
              <div className="text-accent font-black text-base">{top3[0].points} pts</div>
              <div className="w-full bg-gradient-to-t from-yellow-200 to-yellow-50 h-40 rounded-t-2xl mt-5 flex items-start justify-center pt-4 shadow-inner border border-b-0 border-yellow-200">
                <span className="text-4xl font-black text-yellow-500/50">1</span>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center w-1/3 relative group">
              <div className="relative mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-full text-white flex items-center justify-center text-xl sm:text-2xl font-bold border-4 border-white shadow-lg", top3[2].color)}>
                  {top3[2].initials}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-orange-50 rounded-full p-1.5 border-2 border-white shadow-sm">
                  <Medal className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <div className="font-bold text-gray-900 text-center text-sm sm:text-base">{top3[2].name}</div>
              <div className="text-primary font-bold text-sm">{top3[2].points} pts</div>
              <div className="w-full bg-gradient-to-t from-orange-200/50 to-orange-50 h-20 rounded-t-2xl mt-5 flex items-start justify-center pt-3 border border-b-0 border-orange-200/50 shadow-inner">
                <span className="text-2xl font-black text-orange-300">3</span>
              </div>
            </div>
          </div>

          {/* Full Rankings Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Rang</th>
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Bénévole</th>
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider text-center">Problèmes</th>
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider text-center">Événements</th>
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider text-center">Votes</th>
                    <th className="py-5 px-6 font-bold text-gray-500 text-xs uppercase tracking-wider text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((row, index) => (
                    <tr key={index} className={cn(
                      "hover:bg-gray-50 transition-colors group",
                      row.name.includes('Vous') ? "bg-primary/5 hover:bg-primary/10" : ""
                    )}>
                      <td className="py-4 px-6 text-gray-400 font-bold text-sm">
                        {row.rank <= 3 ? <span className="text-transparent">#{row.rank}</span> : `#${row.rank}`}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className={cn("w-9 h-9 rounded-full text-white flex items-center justify-center text-xs font-bold mr-4 shadow-sm", row.color)}>
                            {row.initials}
                          </div>
                          <span className={cn("font-semibold", row.name.includes('Vous') ? "text-primary font-bold" : "text-gray-900")}>
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600 font-medium">{row.issues}</td>
                      <td className="py-4 px-6 text-center text-gray-600 font-medium">{row.events}</td>
                      <td className="py-4 px-6 text-center text-gray-600 font-medium">{row.upvotes}</td>
                      <td className="py-4 px-6 text-right font-black text-primary">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full -z-10 blur-2xl"></div>
            <h3 className="font-black text-xl text-gray-900 mb-6">Vos statistiques</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Votre rang</div>
                <div className="text-4xl font-black text-gray-900">#7</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-5 text-center border border-primary/10">
                <div className="text-primary/80 text-xs font-bold uppercase tracking-wider mb-2">Total des points</div>
                <div className="text-4xl font-black text-primary">145</div>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Problèmes résolus</span>
                <span className="font-bold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Événements participés</span>
                <span className="font-bold text-gray-900">2</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Votes reçus</span>
                <span className="font-bold text-gray-900">47</span>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-5 flex items-center border border-blue-100/50">
              <div className="bg-blue-100 p-3 rounded-xl mr-4 text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1">Badge obtenu</div>
                <div className="font-bold text-gray-900">Gardien de la Terre 🌲</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="flex items-center mb-5 relative z-10">
              <Target className="w-6 h-6 text-accent mr-3" />
              <h3 className="font-bold text-xl">Défi mensuel</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10">
              Résolvez 5 problèmes ce mois-ci pour obtenir le badge <span className="font-bold text-white">Héros Vert 🌿</span> et 50 points bonus.
            </p>
            
            <div className="mb-3 flex justify-between text-sm font-bold relative z-10">
              <span className="text-gray-400">Progression</span>
              <span className="text-accent">3 / 5</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5 mb-6 relative z-10 overflow-hidden">
              <div className="bg-accent h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            <button className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors flex items-center justify-center relative z-10">
              Trouver des problèmes près de moi <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
