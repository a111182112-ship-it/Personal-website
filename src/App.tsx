import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Instagram, Youtube, Facebook, Twitter, Linkedin, 
  MapPin, Calendar, BookOpen, Briefcase, Award, Monitor, 
  User, ChevronDown, CheckCircle2, ExternalLink, FileText, 
  Presentation, Cuboid, Quote
} from 'lucide-react';

const personalInfo = {
  name: "陳宣諭",
  enName: "HSUAN YU CHEN",
  traits: "雙魚座 | A型 | 2007-02-28",
  email: "A111182112@nkust.edu.tw",
  intro: "您好，我是陳宣諭，目前就讀大學，個性主動積極，對於學習新事物充滿熱情，樂於與不同人交流合作在挑戰中成長，持續提升自己能力。"
};

const experience = [
  {
    title: "六合小玲飲料店 : 服務業",
    period: "2024-07 ~ 現在",
    tasks: [
      "協助門市日常營運執行，執行標準化作業流程維護顧客體驗",
      "負責POS操作、飲品調製與現場流程管理",
      "負責門市營運執行，包含顧客服務、飲品製作及品質控管，確保出餐效率"
    ]
  }
];

const education = [
  {
    school: "國立高雄科技大學",
    department: "航運技術系 (五專)",
    period: "2022 ~ 現在"
  }
];

const skills = {
  languages: [
    { name: "英文", level: "精通", note: "TOEIC" },
    { name: "中文", level: "精通", note: "" },
    { name: "台語", level: "精通", note: "" }
  ],
  computer: [
    { category: "辦公應用軟體", items: "Microsoft Office : Word、Excel、Powerpoint" },
    { category: "專案應用軟體", items: "Google Workspace : Gmail、Drive、Meet" }
  ]
};

const certifications = [
  "進階滅火 (Advanced Fire Fighting)",
  "基安訓練 (Basic Safety Training)",
  "油貨與化學液體船貨物操作基本訓練 (Basic Training for Oil and Chemical Tanker Cargo Operations)",
  "保全職責 (Designated Security Duties)"
];

const projects = [
  { title: "清明連假旅行規劃 Word", date: "2026/03/09", icon: <FileText className="w-5 h-5" /> },
  { title: "清明連假旅行規劃 簡報", date: "2026/03/09", icon: <Presentation className="w-5 h-5" /> },
  { title: "Gamma 清明連假 PDF", date: "2026/03/23", icon: <FileText className="w-5 h-5" /> },
  { title: "Manus清明連假 PPT", date: "2026/03/23", icon: <Presentation className="w-5 h-5" /> },
  { title: "Notebook LM清明連假 PDF", date: "2026/03/23", icon: <FileText className="w-5 h-5" /> },
  { title: "清明連假 PPT", date: "2026/04/05", icon: <Presentation className="w-5 h-5" /> },
  { title: "3D公仔", date: "2026/04/13", icon: <Cuboid className="w-5 h-5" />, link: "https://studio.tripo3d.ai/3d-model/12705dfd-ecfa-4486-a8fe-9091f9c2e1dd?invite_code=5OKBBA" }
];

const autobiography = [
  "我目前就讀國立高雄科技大學五專四年級從小在一個氣氛很輕鬆的家庭長大，跟家人相處比較像朋友，很多事情都可以直接說出來討論，而不是用責罵的方式解決。也因為這樣，我習慣先聽別人的想法，再慢慢說出自己的意見，遇到問題時，比起衝動反應，我會先想一想再行動。",
  "以前的我其實很愛玩，常常只在意當下開不開心，對未來沒有想太多。但隨著年紀慢慢長大，開始發現時間過得很快，也開始思考自己到底想要什麼樣的生活。這幾年我變得比較會替未來打算，也會提醒自己不要只是過一天算一天，而是要為之後的目標慢慢提升實力。這樣的轉變，讓我覺得自己真的有在長大。",
  "平常我很喜歡跑步，對我來說跑步不只是運動，而是一種讓自己靜下來的方式。有時候心裡很亂，跑一跑反而會想通很多事情除此之外滑板也是我很喜歡的運動之一，雖然常常會跌倒，但每次成功做出動作的時候都會很有成就感。這些興趣讓我學會堅持，也讓我知道很多事情不是一次就能做好。",
  "對未來，我希望能找到一份穩定的工作，讓自己有安全感，也能照顧好家人。等到退休之後，如果有機會，我也想環遊世界，去看看不同地方的生活方式。我覺得努力工作不只是為了賺錢，也是為了讓未來有更多選擇。",
  "我知道自己還在成長的過程中，還有很多不足的地方，但我會慢慢改進，希望在接下來的學習階段，能讓自己變得更成熟、更有方向。"
];

export default function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-stone-200">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-[#FAF9F6]/90 backdrop-blur-md z-50 border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl tracking-wider text-stone-800">HC.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">關於</a>
            <a href="#experience" className="hover:text-stone-900 transition-colors">經歷 & 學歷</a>
            <a href="#skills" className="hover:text-stone-900 transition-colors">技能</a>
            <a href="#projects" className="hover:text-stone-900 transition-colors">作品</a>
            <a href="#autobiography" className="hover:text-stone-900 transition-colors">自傳</a>
          </div>
        </div>
      </nav>

      <main>
        
        {/* Hero Section */}
        <section id="about" className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24"
          >
            <div className="flex-1 space-y-10">
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-stone-400 tracking-[0.2em] text-sm font-medium uppercase font-sans">Portfolio</h2>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 tracking-tight leading-tight">
                  {personalInfo.name} <br/>
                  <span className="text-3xl md:text-5xl text-stone-400 font-light tracking-wide">{personalInfo.enName}</span>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-4 text-stone-500 font-light tracking-wide text-sm font-sans">
                <span className="flex items-center gap-1.5">{personalInfo.traits}</span>
                <span className="hidden sm:block w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-stone-900 transition-colors">
                  <Mail className="w-4 h-4" /> {personalInfo.email}
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-600 leading-relaxed font-light max-w-xl font-sans">
                {personalInfo.intro}
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-4 pt-4">
                {[
                  { icon: <Linkedin className="w-5 h-5"/>, link: "#" },
                  { icon: <Instagram className="w-5 h-5"/>, link: "#" },
                  { icon: <Facebook className="w-5 h-5"/>, link: "#" },
                ].map((social, i) => (
                  <a key={i} href={social.link} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="w-64 h-80 md:w-80 md:h-[28rem] shrink-0 bg-[#EFECE6] rounded-t-full rounded-b-2xl overflow-hidden relative shadow-2xl shadow-stone-900/5 border-8 border-white">
               {/* Image Placeholder */}
               <div className="absolute inset-0 bg-stone-100/50 flex items-center justify-center">
                  <User className="w-24 h-24 text-stone-300" />
               </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24 px-6 bg-white border-y border-stone-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 md:gap-32">
              
              {/* Work Experience */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
                <motion.div variants={fadeUp} className="border-b border-stone-200 pb-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 flex items-center gap-4">
                    <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-stone-300" /> 經歷
                  </h2>
                </motion.div>
                <div className="space-y-12">
                  {experience.map((exp, i) => (
                    <motion.div key={i} variants={fadeUp} className="relative pl-6 sm:pl-8 border-l border-stone-200">
                      <div className="absolute w-2 h-2 bg-stone-400 rounded-full -left-[4.5px] top-2 outline outline-4 outline-white"></div>
                      <span className="text-xs sm:text-sm text-stone-400 tracking-widest uppercase font-medium block mb-2">{exp.period}</span>
                      <h3 className="text-xl font-medium text-stone-800 mb-1">{exp.title.split(':')[0]}</h3>
                      <p className="text-stone-500 font-light mb-4">{exp.title.split(':')[1]}</p>
                      <ul className="space-y-3">
                        {exp.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-3 text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-stone-300 rounded-full shrink-0 mt-2"></span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
                <motion.div variants={fadeUp} className="border-b border-stone-200 pb-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 flex items-center gap-4">
                    <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-stone-300" /> 學歷
                  </h2>
                </motion.div>
                <div className="space-y-12">
                  {education.map((edu, i) => (
                    <motion.div key={i} variants={fadeUp} className="relative pl-6 sm:pl-8 border-l border-stone-200">
                      <div className="absolute w-2 h-2 bg-stone-400 rounded-full -left-[4.5px] top-2 outline outline-4 outline-white"></div>
                      <span className="text-xs sm:text-sm text-stone-400 tracking-widest uppercase font-medium block mb-2">{edu.period}</span>
                      <h3 className="text-xl font-medium text-stone-800 mb-1">{edu.school}</h3>
                      <p className="text-stone-500 font-light">{edu.department}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Skills & Certs */}
        <section id="skills" className="py-24 px-6 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Skills grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-4">專業技能</h2>
                <div className="h-px w-24 bg-stone-300 mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div variants={fadeUp} className="space-y-8">
                  <h3 className="text-stone-400 tracking-widest uppercase text-xs font-semibold mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-stone-300"></span> 語言能力
                  </h3>
                  <div className="space-y-4">
                    {skills.languages.map((lang, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-white rounded-xl border border-stone-200 shadow-sm shadow-stone-900/5">
                        <span className="text-stone-800 font-medium">{lang.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-stone-500">{lang.level}</span>
                          {lang.note && <span className="text-[10px] uppercase tracking-wider bg-stone-100 text-stone-500 px-2 py-1 rounded">{lang.note}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-8">
                  <h3 className="text-stone-400 tracking-widest uppercase text-xs font-semibold mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-stone-300"></span> 電腦技能
                  </h3>
                  <div className="space-y-4">
                    {skills.computer.map((comp, i) => (
                      <div key={i} className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm shadow-stone-900/5">
                        <span className="block text-sm font-medium text-stone-800 mb-2">{comp.category}</span>
                        <span className="text-stone-500 font-light text-sm leading-relaxed">{comp.items}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certs */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="mb-10 text-center">
                <h3 className="text-stone-400 tracking-widest uppercase text-xs font-semibold flex items-center justify-center gap-2">
                  <span className="w-8 h-px bg-stone-300"></span> 專業證照 <span className="w-8 h-px bg-stone-300"></span>
                </h3>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-stone-200 shadow-sm shadow-stone-900/5 p-8 md:p-10 divide-y divide-stone-100">
                {certifications.map((cert, i) => {
                  const match = cert.match(/(.+?)\s*\((.+?)\)/);
                  return (
                    <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 first:pt-0 last:pb-0 group">
                       <span className="font-medium text-stone-800 group-hover:text-stone-900 transition-colors">{match ? match[1] : cert}</span>
                       {match && <span className="text-xs text-stone-400 font-light tracking-wide">{match[2]}</span>}
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 bg-white border-y border-stone-200/50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">作品集</h2>
                  <p className="text-stone-500 font-light tracking-wide">Selected Works & Projects</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, i) => (
                <motion.div key={i} variants={fadeUp} className="group relative bg-[#FAF9F6] border border-stone-200 rounded-2xl p-8 hover:bg-stone-50 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500 flex flex-col h-full cursor-pointer">
                   <div className="mb-8 p-4 bg-white w-max rounded-xl border border-stone-100 shadow-sm text-stone-400 group-hover:text-stone-800 group-hover:scale-110 transition-all duration-300">
                     {project.icon}
                   </div>
                   <div className="mt-auto">
                     <span className="text-[10px] text-stone-400 tracking-widest uppercase font-semibold mb-3 block">{project.date}</span>
                     <h3 className="text-lg md:text-xl font-medium text-stone-900 mb-4 leading-snug">{project.title}</h3>
                     
                     {project.link ? (
                       <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-800 uppercase hover:text-stone-500 transition-colors">
                         View Details <ExternalLink className="w-3.5 h-3.5" />
                       </a>
                     ) : (
                       <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-400">
                         {project.title.includes('PDF') || project.title.includes('Word') ? 'Documentation' : 'Presentation'}
                       </span>
                     )}
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Autobiography */}
        <section id="autobiography" className="py-32 px-6 bg-[#FAF9F6] overflow-hidden">
          <div className="max-w-3xl mx-auto relative">
            <Quote className="absolute -top-12 -left-12 w-32 h-32 text-stone-200/50 -rotate-12" />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative z-10 space-y-12">
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">關於我的故事</h2>
                <div className="w-16 h-1 bg-stone-300 mx-auto"></div>
              </motion.div>
              
              <div className="space-y-8 text-stone-600 font-light leading-[2.2] md:leading-[2.4] text-base md:text-lg">
                {autobiography.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className={i === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:text-stone-900 first-letter:float-left first-letter:mr-4 first-letter:mt-2" : ""}>
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest font-medium">
           <p className="text-stone-500">© 2026 {personalInfo.enName}. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-stone-200 transition-colors">Instagram</a>
              <a href="#" className="hover:text-stone-200 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-stone-200 transition-colors">Email</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
