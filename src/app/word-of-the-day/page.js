"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Play } from 'lucide-react';

export default function WordOfTheDay() {
  const [wordData, setWordData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      setWordData({
          "word": "Runway",
          "meaning": "a strip of hard ground along which aircraft take off and land",
          "part_of_speech": "Noun",
          "example": "The jet braked hard as its wheels touched the runway."
      });
      setResult(null);
      setUserInput("");
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setTimeout(() => {
        setResult({
            score: 8.5,
            level: "Beginner",
            suggestion: "Try using adjectives to expand your sentence.",
            corrected_sentence: "The runway is crucial for airport operations."
        });
        setLoading(false);
    }, 1000);
  };

  if (!wordData) return <div className="text-center mt-20 text-white font-serif">Loading word...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#8da399]">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4">
        {/* --- Card Container หลัก (สีขาว) --- */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-[900px] shadow-xl relative">
          
          {!result ? (
            <>
              <div className="mb-8">
                  <h1 className="text-4xl font-serif font-bold text-[#1E3A34] mb-2">Word of the day</h1>
                  <p className="text-slate-500 font-light">Practice writing a meaningful sentence using today's word.</p>
              </div>

              {/* Flex Container: รูปภาพ + กล่องข้อความ */}
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
                
                {/* 🖼️ รูปภาพ: ขนาด 240px x 240px (w-60 h-60) มุมโค้งมน */}
                <div className="w-full md:w-60 md:h-60 shrink-0 bg-slate-200 rounded-[1.5rem] overflow-hidden shadow-sm">
                   <img 
                     src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                     alt="Word context" 
                     className="w-full h-full object-cover" 
                   />
                </div>

                {/* กล่องข้อความด้านขวา */}
                <div className="flex-1 border border-slate-200 rounded-[1.5rem] p-6 relative bg-white">
                  
                  {/* Badge: Level Beginner (เกยขอบบน) */}
                  <span className="absolute -top-4 right-6 bg-[#F9E8B8] text-[#1E3A34] px-5 py-1 rounded-full text-sm font-serif font-bold shadow-sm z-10">
                    Level Beginner
                  </span>
                  
                  {/* Header: Play Icon + Word */}
                  <div className="flex items-center gap-3 mb-2 mt-1">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 hover:bg-slate-50 text-[#1E3A34]">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                    </button>
                    <h2 className="text-4xl font-serif font-bold text-[#1E3A34]">{wordData.word}</h2>
                  </div>
                  
                  {/* Part of speech */}
                  <p className="text-slate-500 text-sm mb-3 italic font-sans">
                    {wordData.part_of_speech} <span className="text-slate-400">[{wordData.word.toLowerCase()}-way]</span>
                  </p>
                  
                  {/* Meaning */}
                  <div className="text-slate-700 text-sm leading-relaxed mb-4">
                    <span className="font-bold text-[#1E3A34]">Meaning: </span> 
                    {wordData.meaning}
                  </div>
                  
                  {/* Example Sentence */}
                  <div className="text-slate-500 text-xs italic">
                    “{wordData.example.replace("runway", "runway")}” 
                    {/* (หมายเหตุ: ใน React ถ้าจะทำขีดเส้นใต้เฉพาะคำ ต้องใช้ dangerouslySetInnerHTML หรือ split string แต่นี่ทำแบบง่ายไปก่อนครับ) */}
                    <span className="sr-only">The jet braked hard as its wheels touched the <span className="underline">runway</span>.</span>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <input
                type="text"
                className="w-full border border-slate-200 rounded-xl px-4 py-4 text-base text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#1E3A34] focus:border-[#1E3A34] mb-8 font-light placeholder:text-slate-400"
                placeholder="The plane runway is under construction."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button 
                  onClick={fetchWord}
                  className="px-8 py-3 rounded-full border border-slate-300 text-[#1E3A34] font-serif font-bold hover:bg-slate-50 transition-all text-lg">
                  Do it later
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-10 py-3 rounded-full bg-[#1E3A34] text-white font-serif font-bold hover:opacity-90 disabled:opacity-50 shadow-md transition-all text-lg">
                  {loading ? 'Checking...' : 'Submit'}
                </button>
              </div>
            </>
          ) : (
            <div className="animate-fade-in">
               {/* (ส่วนแสดงผลลัพธ์ คงไว้เหมือนเดิม หรือจะให้แก้ด้วยบอกได้ครับ) */}
               <h2 className="text-3xl font-serif text-center text-[#1E3A34] mb-6">Challenge completed</h2>
               {/* ... code ส่วน Result ... */}
                <div className="text-center">
                    <button 
                        onClick={() => { setResult(null); setUserInput(""); fetchWord(); }}
                        className="px-8 py-2 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 font-medium">
                        Try another word
                    </button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}