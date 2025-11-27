import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '700'], 
  variable: '--font-sans',
  display: 'swap',
});

const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ['400', '700'], 
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: "Worddee.ai",
  description: "Learn English sentences with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${merriweather.variable} font-sans antialiased bg-[#8da399]`}>
        {children}
      </body>
    </html>
  );
}

// import { Inter, DM_Serif_Display } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ 
//   subsets: ["latin"], 
//   variable: '--font-inter',
//   display: 'swap',
// });

// const serif = DM_Serif_Display({ 
//   weight: ['400'], 
//   subsets: ["latin"], 
//   variable: '--font-serif',
//   display: 'swap',
// });

// export const metadata = {
//   title: "Worddee.ai",
//   description: "Learn English sentences with AI",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       {/* 3. นำตัวแปรฟอนต์มาใส่ที่ body และกำหนดสีพื้นหลัง */}
//       <body className={`${inter.variable} ${serif.variable} font-sans antialiased bg-[#8da399]`}>
//         {/* bg-[#8da399] คือสีเขียวตาม Figma ถ้า Tailwind ทำงาน พื้นหลังต้องเป็นสีนี้ */}
//         {children}
//       </body>
//     </html>
//   );
// }