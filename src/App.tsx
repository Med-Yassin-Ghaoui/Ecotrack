import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomeFeed from './components/HomeFeed';
import MapView from './components/MapView';
import Events from './components/Events';
import Leaderboard from './components/Leaderboard';
import Dashboard from './components/Dashboard';
import Donations from './components/Donations';
import { initialReports, initialEvents, leaderboardData } from './data';

export default function App() {
  const [reports, setReports] = useState(initialReports);
  const [events, setEvents] = useState(initialEvents);

  const handleUpvote = (id: string) => {
    setReports(reports.map(r => r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r));
  };

  const handleClaim = (id: string) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: 'In Progress' } : r));
  };

  const handleAddReport = (newReport: any) => {
    setReports([newReport, ...reports]);
  };

  const handleJoinEvent = (id: string) => {
    setEvents(events.map(e => e.id === id ? { ...e, volunteers: Math.min(e.volunteers + 1, e.maxVolunteers) } : e));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout onAddReport={handleAddReport} />}>
        <Route index element={<HomeFeed reports={reports} onUpvote={handleUpvote} onClaim={handleClaim} />} />
        <Route path="map" element={<MapView reports={reports} events={events} />} />
        <Route path="events" element={<Events events={events} onJoin={handleJoinEvent} />} />
        <Route path="leaderboard" element={<Leaderboard data={leaderboardData} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="donate" element={<Donations />} />
      </Route>
    </Routes>
  );
}

