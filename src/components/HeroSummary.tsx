import React from 'react';
import { KEY_AGGREGATE_STATS } from '../data/researchData';
import { TrendingUp, Clock, AlertTriangle, BookCheck, ShieldAlert, Cpu, ArrowRight, BarChart3, Users } from 'lucide-react';

interface HeroSummaryProps {
  onNavigateTab: (tab: string) => void;
}

export const HeroSummary: React.FC<HeroSummaryProps> = ({ onNavigateTab }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/80">
      {/* Background ambient academic subtle grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950/0 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Academic Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-3 tracking-wide uppercase">
          <span>Higher Education Longitudinal Synthesis</span>
          <span className="text-slate-600">·</span>
          <span>Aggregated 2023–2026 Cohorts</span>
          <span className="text-slate-600">·</span>
          <span>N = 36,000+</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] mb-5">
            The Impact of Artificial Intelligence on <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-white font-normal">College Students' Learning</span> and Academic Performance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
            A comprehensive, data-driven synthesis examining real-world empirical studies from EDUCAUSE, Stanford HAI, HEPI, Pew Research, and Nature. Exploring the shift from speculative debate to measurable outcomes across academic achievement, cognitive retention, honor codes, and disciplinary disparities.
          </p>
        </div>

        {/* Aggregate KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Undergrad Adoption</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-editorial text-3xl font-bold text-white mb-1">
              {KEY_AGGREGATE_STATS.nationalAdoptionRate}
            </div>
            <div className="text-[11px] text-slate-400">
              Active weekly use in coursework <span className="text-emerald-400 font-mono-data">(+57% since 2023)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Weekly Time Saved</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="font-editorial text-3xl font-bold text-white mb-1">
              {KEY_AGGREGATE_STATS.avgHoursSavedPerWeek}
            </div>
            <div className="text-[11px] text-slate-400">
              Reallocated to deep reading, coding, or lab study
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Formative Grade Lift</span>
              <BookCheck className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="font-editorial text-3xl font-bold text-white mb-1">
              {KEY_AGGREGATE_STATS.gpaEnhancementDelta}
            </div>
            <div className="text-[11px] text-slate-400">
              On assisted labs, writing outlines & drafts
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-rose-900/60 transition-all">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Over-Reliance Risk</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="font-editorial text-3xl font-bold text-amber-300 mb-1">
              {KEY_AGGREGATE_STATS.unassistedRetentionPenalty}
            </div>
            <div className="text-[11px] text-slate-400">
              Retention loss on unassisted exams if passive
            </div>
          </div>

        </div>

        {/* 3 Core Empirical Tensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/80 flex items-center justify-center border border-indigo-700/50">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
              <h2 className="text-base font-semibold text-white">The Scaffolding Paradox</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Controlled trials at Stanford and MIT demonstrate that when students use AI as a Socratic interlocutor, conceptual mastery rises by 22%. Conversely, uncritical automated copying results in significant cognitive offloading and test anxiety.
            </p>
            <button
              onClick={() => onNavigateTab('heatmap')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>Explore Disciplinary Heatmaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 flex items-center justify-center border border-cyan-700/50">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
              </div>
              <h2 className="text-base font-semibold text-white">Policy Vacuum vs. Fear</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Pew and EDUCAUSE data indicate that 64% of college students fear false accusations from flawed heuristic AI detectors. Syllabi explicit guidelines increased from 14% in 2023 to 78% in 2026, yet evaluation ambiguity persists.
            </p>
            <button
              onClick={() => onNavigateTab('sentiment')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>Read Qualitative Sentiments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 flex items-center justify-center border border-emerald-700/50">
                <Users className="w-4 h-4 text-emerald-400" />
              </div>
              <h2 className="text-base font-semibold text-white">The Digital Equity Divide</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              34% of students subscribe to premium reasoning models ($20+/mo), yielding distinct advantages in complex citation verification and mathematical accuracy, whereas free tiers exhibit greater factual drift and context limits.
            </p>
            <button
              onClick={() => onNavigateTab('surveys')}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>View Tool & Survey Data</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
