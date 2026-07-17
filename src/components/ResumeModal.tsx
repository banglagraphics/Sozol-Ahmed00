import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, MapPin, Phone, Mail, Linkedin, Award, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { cvTranslations } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [lang, setLang] = useState<string>('en');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const cv = cvTranslations[lang] || cvTranslations['en'];
  const isRtl = lang === 'ar' || lang === 'ur';

  // Get appropriate font family class name
  const getFontClass = () => {
    if (lang === 'bn') return 'font-bangla';
    if (lang === 'ar') return 'font-arabic';
    if (lang === 'ur') return 'font-urdu';
    return 'font-sans';
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
    >
      {/* Print styles injected dynamically to support multiple languages and clean formats */}
      <style>{`
        @media print {
          /* Hide all non-resume page elements completely */
          body * {
            visibility: hidden;
            background: white !important;
            color: black !important;
          }
          /* Show only the targeted print area */
          #printable-resume-area, #printable-resume-area * {
            visibility: visible;
          }
          #printable-resume-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            max-width: 100% !important;
            box-shadow: none !important;
            padding: 20mm !important;
            margin: 0 !important;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          /* Ensure crisp contrast for ink printing */
          .print-text-dark {
            color: #000000 !important;
          }
          .print-text-muted {
            color: #374151 !important;
          }
          .print-border-dark {
            border-color: #111827 !important;
          }
          .print-bg-light {
            background-color: #f9fafb !important;
          }
          /* Clean page breaks */
          .page-break-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Modal Card wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative w-full max-w-5xl bg-neutral-900 border border-white/10 shadow-2xl flex flex-col my-8 cursor-none overflow-hidden max-h-[92vh]"
      >
        {/* Top Control Bar (Hidden during printing) */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 bg-neutral-950 border-b border-white/5 gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gold" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-white uppercase font-bold">
              Multi-Language CV Engine
            </span>
          </div>

          {/* Language Selector row */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/80 p-1 border border-white/5">
            {Object.keys(cvTranslations).map((key) => {
              const active = lang === key;
              return (
                <button
                  key={key}
                  onClick={() => setLang(key)}
                  className={`px-3 py-1.5 text-xs font-medium cursor-none clickable transition-all duration-300 ${
                    active
                      ? 'bg-gold text-black font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cvTranslations[key].languageName}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Print Action */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gold hover:bg-gold-hover text-black text-[10px] font-mono tracking-widest uppercase font-semibold flex items-center gap-2 transition-all duration-300 cursor-none clickable active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-2 border border-white/10 hover:border-white/20 text-white hover:text-gold transition-colors duration-300 cursor-none clickable"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Sheet - localized typography & direction */}
        <div 
          className="overflow-y-auto p-4 sm:p-8 md:p-12 bg-neutral-900 flex-grow"
          style={{ scrollbarWidth: 'thin' }}
        >
          <div
            id="printable-resume-area"
            dir={isRtl ? 'rtl' : 'ltr'}
            className={`max-w-4xl mx-auto bg-neutral-950 p-4 sm:p-10 md:p-14 border border-white/5 text-white print-text-dark print-bg-light print-border-dark flex flex-col gap-8 sm:gap-10 ${getFontClass()} ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          >
            {/* CV HEADER - Name, Title, and dynamic alignment */}
            <div className={`flex flex-col md:flex-row justify-between gap-6 pb-8 border-b border-white/10 print-border-dark ${
              isRtl ? 'md:flex-row-reverse' : ''
            }`}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-gold no-print animate-pulse" />
                  <span className="font-mono text-[9px] tracking-widest text-gold uppercase font-bold">
                    Grand Hyatt Doha — 5-Star Ambassador
                  </span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white print-text-dark">
                  {cv.name}
                </h1>
                <p className="font-mono text-xs text-gold font-semibold tracking-[0.25em] uppercase mt-2.5">
                  {cv.title}
                </p>
                <p className="text-muted text-sm font-light mt-4 max-w-xl print-text-muted leading-relaxed">
                  {cv.summary}
                </p>
              </div>

              {/* Direct Contacts Info */}
              <div className={`flex flex-col gap-2.5 font-sans text-xs text-muted print-text-muted shrink-0 ${
                isRtl ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className={`flex items-center gap-2 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{cv.contactLabels.location}</span>
                </div>
                <div className={`flex items-center gap-2 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span dir="ltr">+974 50634607</span>
                </div>
                <div className={`flex items-center gap-2 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>sozolahmed91@gmail.com</span>
                </div>
                <div className={`flex items-center gap-2 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                  <Linkedin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="truncate max-w-[200px]" dir="ltr">linkedin.com/in/sozol-ahmed-115171215</span>
                </div>
              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 font-bold print-text-dark">
                {lang === 'bn' ? 'ক্যারিয়ার অবজেক্টিভ' : lang === 'ar' ? 'الهدف المهني' : lang === 'ur' ? 'پیشہ ورانہ مقصد' : lang === 'fr' ? 'Objectif de Carrière' : 'Career Objective'}
              </h2>
              <p className="text-neutral-200 text-sm print-text-muted font-light leading-relaxed">
                {cv.objective}
              </p>
            </div>

            {/* EXPERIENCE SECTION */}
            <div className="page-break-avoid">
              <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-6 font-bold print-text-dark">
                {cv.journey.sectionTitle}
              </h2>
              <div className={`relative pl-6 border-l border-gold/30 print-border-dark ${isRtl ? 'pl-0 pr-6 border-l-0 border-r border-gold/30' : ''}`}>
                <div className={`absolute w-2.5 h-2.5 rounded-full bg-gold ${isRtl ? 'right-[-5px]' : 'left-[-5px]'} top-2`} />
                <div className={`flex flex-col md:flex-row justify-between gap-2 mb-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                  <div>
                    <h3 className="font-serif text-xl text-white font-medium print-text-dark">
                      {cv.journey.role}
                    </h3>
                    <p className="text-muted text-sm font-semibold print-text-muted mt-0.5">
                      {cv.journey.company} — <span className="font-light">{cv.contactLabels.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-gold/5 border border-gold/20 text-gold print-text-dark shrink-0 h-fit">
                    {cv.journey.period}
                  </span>
                </div>
                
                {/* Job responsibilities list */}
                <ul className="space-y-4 mt-6 text-sm text-neutral-300 print-text-muted font-light list-none">
                  {cv.journey.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed flex gap-3">
                      <span className="text-gold mt-1.5 shrink-0">•</span>
                      <div>
                        <strong className="text-white print-text-dark font-medium">{resp.title}:</strong>{' '}
                        <span className="text-neutral-300 print-text-muted">{resp.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* KEY CREDENTIALS & ACHIEVEMENTS */}
            <div className="page-break-avoid">
              <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-5 font-bold print-text-dark">
                {cv.achievementsSection.sectionTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cv.achievementsSection.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-neutral-900/50 border border-white/5 print-bg-light print-border-dark flex gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-200 print-text-muted font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS MATRIX & EDUCATION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 page-break-avoid">
              {/* Skills Card */}
              <div>
                <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-5 font-bold print-text-dark">
                  {cv.skillsSection.sectionTitle}
                </h2>
                <div className="space-y-4">
                  {cv.skillsSection.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-white print-text-dark flex items-center gap-2">
                        <span className="text-gold">•</span> {skill.title}
                      </span>
                      <p className="text-[11px] text-muted print-text-muted font-light pl-3.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Language Card */}
              <div className="flex flex-col gap-8">
                {/* Education section */}
                <div>
                  <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-5 font-bold print-text-dark">
                    {cv.educationSection.sectionTitle}
                  </h2>
                  <div className="text-sm text-neutral-300 print-text-muted font-light">
                    <h4 className="font-semibold text-white print-text-dark mb-0.5">
                      {cv.educationSection.degree}
                    </h4>
                    <p className="text-xs text-gold font-mono mb-1">
                      {cv.educationSection.equivalence}
                    </p>
                    <p className="text-xs text-neutral-400 print-text-muted">
                      {cv.educationSection.school}
                    </p>
                    <p className="text-[11px] text-muted print-text-muted mt-1">
                      {cv.educationSection.period}
                    </p>
                  </div>
                </div>

                {/* Linguistic capacity */}
                <div>
                  <h2 className="font-serif text-sm tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-4 font-bold print-text-dark">
                    {cv.additionalLanguagesLabel}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {lang === 'bn' ? (
                      <>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">বাংলা (মাতৃভাষা)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">ইংরেজি (উন্নত / পেশাদার)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">হিন্দি (কথোপকথনযোগ্য)</span>
                      </>
                    ) : lang === 'ar' ? (
                      <>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">البنغالية (اللغة الأم)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">الإنجليزية (متقدم / محترف)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">الهندية (محادثة عملية)</span>
                      </>
                    ) : lang === 'ur' ? (
                      <>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">بنگالی (مادری زبان)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">انگریزی (پیشہ ورانہ مہارت)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">ہندی (عام بول چال)</span>
                      </>
                    ) : lang === 'fr' ? (
                      <>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">Bengali (Langue maternelle)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">Anglais (Avancé / Professionnel)</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">Hindi (Conversationnel)</span>
                      </>
                    ) : (
                      <>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">Bengali (Native) - 100%</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">English (Advanced / Professional) - 85%</span>
                        <span className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-200 print-text-dark print-bg-light print-border-dark">Hindi (Advanced / Conversational) - 80%</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* INTERESTS */}
            <div className="page-break-avoid">
              <h2 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-1.5 mb-4 font-bold print-text-dark">
                {cv.interestsSection.sectionTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                {cv.interestsSection.items.map((interest, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-neutral-900 border border-white/5 text-xs text-neutral-200 font-light print-text-dark print-bg-light print-border-dark"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* REFERENCES STATEMENT */}
            <div className="pt-8 border-t border-white/10 print-border-dark text-center flex flex-col items-center justify-center gap-2 page-break-avoid">
              <div className="flex items-center gap-2 text-xs text-muted print-text-muted justify-center">
                <Star className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="font-medium">{cv.referencesLabel}</span>
              </div>
              <p className="text-muted text-[11px] font-light max-w-lg print-text-muted leading-relaxed">
                {cv.referencesText}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
