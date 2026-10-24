import React, { useState } from 'react';
import { SENTIMENT_QUOTES } from '../data/researchData';
import { SentimentQuote } from '../types';
import { MessageSquareQuote, CheckCircle, ShieldAlert, Sparkles, Scale, GraduationCap, ThumbsUp, AlertTriangle } from 'lucide-react';

export const SentimentAnalysis: React.FC = () => {
  const [selectedSentiment, setSelectedSentiment] = useState<'all' | 'positive' | 'ambivalent' | 'concerned'>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const themes = [
    'All',
    'Productivity & Efficiency',
    'Socratic Learning & Tutoring',
    'Cognitive Atrophy & Retention',
    'Assessment & Honor Codes',
    'Equity & Access Gap',
  ];

  const filteredQuotes = SENTIMENT_QUOTES.filter((q) => {
    const matchesSentiment = selectedSentiment === 'all' ? true : q.sentiment === selectedSentiment;
    const matchesTheme = selectedTheme === 'All' ? true : q.theme === selectedTheme;
    return matchesSentiment && matchesTheme;
  });

  return (
    <section id="sentiment" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Qualitative Student & Faculty Voices</span>
              <span className="text-slate-600">·</span>
              <span>Thematic Coding & Corpus Extraction</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Qualitative Sentiment & Lived Academic Experiences
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Beyond numeric survey questions, qualitative responses unveil nuanced tensions: pedagogical breakthroughs, detector trauma, algorithmic cognitive crutches, and access divides.
            </p>
          </div>
        </div>

        {/* Sentiment Overview Distribution Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div 
            onClick={() => setSelectedSentiment('positive')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedSentiment === 'positive'
                ? 'bg-emerald-950/70 border-emerald-500 shadow-md shadow-emerald-950/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ThumbsUp className="w-3.5 h-3.5" />
                Empowering & Constructive
              </span>
              <span className="font-mono-data font-bold text-white text-base">54%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              24/7 personal tutoring, demystifying STEM concepts, leveling the playing field for non-native English speakers.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSentiment('ambivalent')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedSentiment === 'ambivalent'
                ? 'bg-amber-950/70 border-amber-500 shadow-md shadow-amber-950/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Ambivalent & Nuanced
              </span>
              <span className="font-mono-data font-bold text-white text-base">31%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              High speed gains balanced with subtle cognitive atrophy, loss of friction in early drafting, and exam readiness concerns.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSentiment('concerned')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedSentiment === 'concerned'
                ? 'bg-rose-950/70 border-rose-500 shadow-md shadow-rose-950/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Critical & Anxious
              </span>
              <span className="font-mono-data font-bold text-white text-base">15%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              False positive detector accusations, premium tier inequality, and syllabus ambiguities leading to severe anxiety.
            </p>
          </div>

        </div>

        {/* Filter Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Filter Sentiment:</span>
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              {(['all', 'positive', 'ambivalent', 'concerned'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSentiment(s)}
                  className={`px-2.5 py-1 rounded capitalize transition-colors ${
                    selectedSentiment === s
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Thematic Pillar:</span>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quotes Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredQuotes.map((q) => {
            const sentimentBorder = {
              positive: 'border-l-4 border-l-emerald-500',
              ambivalent: 'border-l-4 border-l-amber-500',
              concerned: 'border-l-4 border-l-rose-500',
            }[q.sentiment];

            const sentimentTag = {
              positive: 'text-emerald-400',
              ambivalent: 'text-amber-400',
              concerned: 'text-rose-400',
            }[q.sentiment];

            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl bg-slate-900/90 border border-slate-800/90 ${sentimentBorder} hover:border-slate-700 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 text-slate-400">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      {q.role}
                    </span>
                    <span className="font-mono-data text-[11px] text-slate-400">
                      {q.discipline} · {q.year}
                    </span>
                  </div>

                  <blockquote className="font-serif italic text-sm text-slate-200 leading-relaxed mb-4">
                    "{q.quote}"
                  </blockquote>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold capitalize text-[11px] ${sentimentTag}`}>
                      ● {q.sentiment}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400 text-[11px]">{q.theme}</span>
                  </div>
                  <span className="text-[10px] font-mono-data text-slate-400">
                    {q.institutionType}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faculty vs Student Perspective Comparison Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800 p-6">
          <h3 className="font-editorial text-xl text-white font-normal mb-1">
            Faculty vs. Student Divergence on Generative AI Bounds
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Comparative analysis derived from the Tyton Partners 2025 dual-panel institutional survey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-slate-200 block mb-2">1. Use for Homework Brainstorming</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Students view as ethical:</span>
                  <span className="font-mono-data text-emerald-400 font-bold">89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Instructors permit in syllabi:</span>
                  <span className="font-mono-data text-amber-400 font-bold">58%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-slate-200 block mb-2">2. Reliability of AI Detection Tools</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Students trust detector accuracy:</span>
                  <span className="font-mono-data text-rose-400 font-bold">14%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Instructors rely on detector scores:</span>
                  <span className="font-mono-data text-cyan-400 font-bold">47%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-slate-200 block mb-2">3. Assessment Transformation Priority</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Students favor oral / live defense:</span>
                  <span className="font-mono-data text-cyan-400 font-bold">76%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Institutions actively restructuring:</span>
                  <span className="font-mono-data text-emerald-400 font-bold">39%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
