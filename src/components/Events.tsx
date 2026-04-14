import React, { useState } from 'react';
import { Calendar, MapPin, Users, Plus, ArrowRight } from 'lucide-react';
import { Modal } from './Modal';

export default function Events({ events, onJoin }: { events: any[], onJoin: (id: string) => void }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Événements de nettoyage à venir</h1>
        <p className="text-gray-500 mt-2 text-lg font-medium">Organisés par l'ONG Earth Life Protection & les leaders communautaires</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {events.map(event => {
          const fillPercentage = Math.round((event.volunteers / event.maxVolunteers) * 100);
          const isFull = event.volunteers >= event.maxVolunteers;
          
          return (
            <div key={event.id} className="bg-white rounded-3xl shadow-sm border border-gray-200/60 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="h-36 bg-gradient-to-br from-[#1E3A8A] to-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {event.organizer}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1 leading-relaxed">{event.description}</p>
                
                <div className="space-y-4 mb-8 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center text-gray-700 text-sm font-medium">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm font-medium">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-start text-gray-700 text-sm font-medium pt-2">
                    <Users className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span>{event.volunteers} / {event.maxVolunteers} bénévoles</span>
                        <span className="font-bold text-primary">{fillPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${isFull ? 'bg-green-500' : 'bg-primary'}`}
                          style={{ width: `${fillPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => !isFull && onJoin(event.id)}
                  disabled={isFull}
                  className={`w-full py-3.5 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center ${
                    isFull 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]'
                  }`}
                >
                  {isFull ? 'Événement complet' : 'Rejoindre l\'événement'}
                  {!isFull && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl border border-primary/20 p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <h2 className="text-2xl font-black text-gray-900 mb-3 relative z-10">Êtes-vous une ONG ou un leader communautaire ?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg relative z-10">Organisez votre propre événement de nettoyage, mobilisez des bénévoles et ayez un impact réel sur votre environnement local.</p>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95 relative z-10"
        >
          <Plus className="w-5 h-5 mr-2" />
          Créer un événement
        </button>
      </div>

      {/* Create Event Modal */}
      <Modal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)}
        title="Créer un événement de nettoyage"
      >
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Titre de l'événement</label>
            <input type="text" placeholder="ex: Nettoyage du parc ce week-end" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Heure</label>
              <input type="time" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Emplacement</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Adresse du point de rendez-vous" className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nombre max de bénévoles</label>
            <input type="number" placeholder="ex: 50" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
            <textarea rows={3} placeholder="Que doivent apporter les bénévoles ? Quel est le programme ?" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm resize-none"></textarea>
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
          <button 
            onClick={() => setIsCreateModalOpen(false)}
            className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-sm active:scale-[0.98]"
          >
            Créer l'événement
          </button>
        </div>
      </Modal>
    </div>
  );
}
