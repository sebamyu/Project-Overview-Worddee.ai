import Link from 'next/link';
import { UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    // แก้ไขตรงนี้: เพิ่ม w-full และ border-b ให้เห็นชัดๆ
    <nav className="w-full bg-white border-b border-slate-200 py-4 px-8 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="font-bold text-2xl text-slate-900 tracking-tight font-sans">
        worddee.ai
      </Link>
      
      {/* Menu Middle */}
      <div className="flex gap-8 md:gap-12 text-base md:text-lg font-medium text-[#1E90FF]"> 
        <Link href="/dashboard" className="hover:text-blue-800 transition-colors">
          My Progress
        </Link>
        <Link href="/word-of-the-day" className="hover:text-blue-800 transition-colors">
          Word of the Day
        </Link>
      </div>

      {/* User Icon */}
      <div className="text-[#1E90FF] hover:text-blue-800 cursor-pointer transition-colors">
        <UserCircle className="w-9 h-9" />
      </div>
    </nav>
  );
}