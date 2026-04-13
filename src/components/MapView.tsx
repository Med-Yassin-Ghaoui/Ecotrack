import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Filter, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Custom icons using Tailwind classes
const createCustomIcon = (colorClass: string) => {
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `<div class="w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center marker-animated ${colorClass}">
            <div class="w-2 h-2 bg-white rounded-full"></div>
           </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const icons = {
  open: createCustomIcon('bg-red-500'),
  progress: createCustomIcon('bg-orange-500'),
  resolved: createCustomIcon('bg-green-500'),
  event: createCustomIcon('bg-blue-500'),
};

export default function MapView({ reports, events }: { reports: any[], events: any[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Map reports and events to a unified marker format
  const markers = [
    ...reports.map(r => ({
      id: `report-${r.id}`,
      lat: r.lat,
      lng: r.lng,
      title: r.title,
      status: r.status,
      type: r.status === 'Open' ? 'open' : r.status === 'In Progress' ? 'progress' : 'resolved',
      category: 'issue'
    })),
    ...events.map(e => ({
      id: `event-${e.id}`,
      lat: e.lat,
      lng: e.lng,
      title: e.title,
      status: 'Upcoming Event',
      type: 'event',
      category: 'event'
    }))
  ];

  const filteredMarkers = markers.filter(m => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Issues' && m.category === 'issue') return true;
    if (activeFilter === 'Events' && m.category === 'event') return true;
    if (activeFilter === 'Resolved' && m.type === 'resolved') return true;
    return false;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-primary" /> Interactive Map
          </h1>
          <p className="text-gray-500 text-sm mt-1">Explore environmental issues and events across Tunisia.</p>
        </div>
        
        <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 p-1">
          {['All', 'Issues', 'Events', 'Resolved'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                activeFilter === filter 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 rounded-2xl shadow-sm overflow-hidden border border-gray-200 relative z-0">
        <MapContainer 
          center={[36.8065, 10.1815]} // Center on Tunis
          zoom={8} 
          className="w-full h-full"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          
          {filteredMarkers.map(marker => (
            <Marker 
              key={marker.id} 
              position={[marker.lat, marker.lng]}
              icon={icons[marker.type as keyof typeof icons]}
            >
              <Popup className="custom-popup">
                <div className="p-1 min-w-[200px]">
                  <div className="text-[10px] font-bold mb-1.5 text-gray-400 uppercase tracking-wider">{marker.status}</div>
                  <div className="font-bold text-gray-900 mb-3 text-sm leading-snug">{marker.title}</div>
                  <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-900 text-xs font-bold rounded-lg transition-colors flex items-center justify-center border border-gray-200">
                    View Details <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend Overlay */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/80 z-[1000]">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Map Legend</h4>
          <div className="space-y-2.5 text-sm font-medium text-gray-700">
            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-3 shadow-sm"></div> Open Issue</div>
            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-orange-500 mr-3 shadow-sm"></div> In Progress</div>
            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-3 shadow-sm"></div> Resolved</div>
            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-blue-500 mr-3 shadow-sm"></div> Upcoming Event</div>
          </div>
        </div>
      </div>
    </div>
  );
}

