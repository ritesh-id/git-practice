'use client';

import Link from 'next/link';
import './dashboard.css'; // We'll create this next
import { useEffect } from 'react';

export default function DashboardPage() {
  useEffect(() => {
    console.log('Dashboard mounted');
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <Link href="dashboard/overview">Overview</Link>
          <Link href="dashboard/reports">Reports</Link>
          <Link href="dashboard/setting">Setting</Link>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <div className="card-grid">
          <div className="card">📊 Metric 1</div>
          <div className="card">📈 Metric 2</div>
        </div>
      </main>
    </div>
  );
}