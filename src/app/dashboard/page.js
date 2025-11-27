"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Flame, Clock, ChevronDown, UserCircle } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// ลงทะเบียน Component ของกราฟ
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  // ข้อมูลจำลอง (Mock Data) - ในอนาคตจะดึงจาก Backend
  const stats = {
    streak: 1,
    hours: 10,
    minutes: 0,
    scores: [6.0, 6.5, 6.0, 7.0, 7.5, 7.0, 8.0] // คะแนนย้อนหลัง
  };

  // ตั้งค่าข้อมูลกราฟ
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Band Score',
        data: stats.scores,
        fill: true, // ระบายสีใต้กราฟ
        backgroundColor: 'rgba(255, 255, 255, 0)', // สีพื้นหลังจางๆ (ในแบบดูเหมือนไม่มี)
        borderColor: '#1E3A34', // สีเส้นกราฟ (เขียวเข้ม)
        tension: 0.4, // ความโค้งมนของเส้น
        pointBackgroundColor: '#1E3A34',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  // ตั้งค่าหน้าตากราฟ
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // ซ่อนชื่อกราฟด้านบน
      tooltip: {
        backgroundColor: '#1E3A34',
        titleFont: { family: 'var(--font-serif)' },
        bodyFont: { family: 'var(--font-sans)' },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
      }
    },
    scales: {
      y: {
        min: 0,
        max: 9, // IELTS เต็ม 9
        ticks: { display: false }, // ซ่อนตัวเลขแกน Y (ตามดีไซน์ดูคลีนๆ)
        grid: { display: false },  // ซ่อนตารางแนวนอน
        border: { display: false } // ซ่อนเส้นแกน
      },
      x: {
        grid: { display: false }, // ซ่อนตารางแนวตั้ง
        border: { display: false },
        ticks: {
             font: { size: 10, family: 'var(--font-sans)' },
             color: '#94a3b8'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        
        {/* Header Section */}
        <header className="mb-10">
            <h1 className="text-4xl font-serif text-[#1E3A34] font-bold mb-8">
            &lt;name&gt;’s learner dashboard
            </h1>

            <h2 className="text-2xl font-serif text-[#1E3A34] font-bold mb-4">
            Your missions today
            </h2>

            {/* Mission Banner */}
            <div className="bg-[#F2F4F3] rounded-xl p-4 text-slate-700 font-medium text-sm md:text-base">
            Well done! You’ve completed all your missions.
            </div>
        </header>

        {/* Overview Section */}
        <section>
            <h2 className="text-2xl font-serif text-[#1E3A34] font-bold mb-6">
            Overview
            </h2>

            {/* Consistency Card */}
            <div className="border border-slate-200 rounded-[1.5rem] p-8 mb-8 bg-white shadow-sm">
                <h3 className="font-serif text-[#1E3A34] font-bold text-lg mb-8">Learning consistency</h3>
                
                <div className="flex justify-around items-center">
                    {/* Streak */}
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <Flame className="w-8 h-8 text-[#84CC16] fill-[#84CC16]" /> {/* สีเขียวมะนาว */}
                            <span className="text-4xl font-bold text-slate-800 font-serif">{stats.streak}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-light uppercase tracking-wide mt-2">Day streak</p>
                    </div>

                    {/* Divider เส้นคั่น */}
                    <div className="h-16 w-px bg-slate-200"></div>

                    {/* Hours */}
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-8 h-8 text-[#60A5FA] fill-[#60A5FA] text-opacity-80" /> {/* สีฟ้า */}
                            <span className="text-4xl font-bold text-slate-800 font-serif">{stats.hours}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-light uppercase tracking-wide mt-2">[Hours / Minutes] learned</p>
                    </div>
                </div>
            </div>

            {/* Graph Card */}
            <div className="border border-slate-200 rounded-[1.5rem] p-8 bg-white shadow-sm">
                
                {/* Graph Header Controls */}
                <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-6 items-center">
                        <button className="flex items-center gap-2 font-bold text-[#1E3A34] text-sm hover:opacity-70">
                            IELTS speaking test <ChevronDown className="w-4 h-4" />
                        </button>
                        <button className="flex items-center gap-2 text-slate-500 text-sm hover:text-[#1E3A34]">
                            All parts <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <a href="#" className="text-[#3B82F6] text-xs underline hover:text-blue-700">View scoring criteria</a>
                </div>

                {/* Legend Labels */}
                <div className="flex justify-between text-xs font-bold text-slate-800 mb-6 px-2 font-serif">
                   <span>Latest band scores</span>
                   <span>Progress</span>
                </div>

                {/* Chart Area */}
                <div className="h-64 w-full mb-10">
                    <Line data={data} options={options} />
                </div>

                {/* Action Button */}
                <div className="text-center">
                    <button className="bg-[#1E3A34] text-white px-12 py-3 rounded-full font-serif font-bold hover:opacity-90 transition-opacity shadow-md text-lg">
                        Take the test
                    </button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}