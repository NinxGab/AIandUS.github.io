import React, { useState } from 'react';
import { SURVEY_TRENDS, TASK_BREAKDOWN, AI_TOOL_SHARES } from '../data/researchData';
import { TaskBreakdownItem } from '../types';
import { BarChart3, PieChart, TrendingUp, CheckCircle2, AlertOctagon, HelpCircle, ArrowUpRight, Cpu } from 'lucide-react';

export const SurveyTracker: React.FC = () => {
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<string>('All');
  const [selectedTrendYear, setSelectedTrendYear] = useState<string>('2025');

  const taskCategories = ['All', 'Writing & Language', 'Problem Solving & Code', 'Research & Synthesis', 'Studying & Revision'];

  const filteredTasks = TASK_BREAKDOWN.filter((t) =>
    selectedTaskCategory === 'All' ? true : t.category === selectedTaskCategory
  );

  const activeTrend = SURVEY_TRENDS.find((s) => s.year === selectedTrendYear) || SURVEY_TRENDS[2];

  return (
    <section id="surveys" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>National Longitudinal Datasets</span>
              <span className="text-slate-600">·</span>
              <span>EDUCAUSE, Pew & HEPI</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Empirical Survey Visualizations & Task Analysis
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Quantitative telemetry examining how college students embed AI into their day-to-day academic workflow, tool preferences, and reported efficacy.
            </p>
          </div>
        </div>

        {/* Top 2 Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Chart 1: Longitudinal Adoption Shift */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-editorial text-xl text-white font-normal">Frequency of Academic AI Use</h3>
                  <p className="text-xs text-slate-400">Shift from rare trial to daily academic integration</p>
                </div>
                {/* Year Toggle */}
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono-data">
                  {SURVEY_TRENDS.map((st) => (
                    <button
                      key={st.year}
                      onClick={() => setSelectedTrendYear(st.year)}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        selectedTrendYear === st.year
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {st.year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stacked Percentage Bar */}
              <div className="mb-6">
                <div className="text-xs text-slate-400 mb-2 flex items-center justify-between">
                  <span>Usage Distribution in {activeTrend.year}</span>
                  <span className="font-mono-data text-slate-300">Avg {activeTrend.avgHoursSavedWeekly} hrs saved/wk</span>
                </div>
                
                {/* Visual Stacked Bar */}
                <div className="w-full h-8 rounded-xl overflow-hidden flex bg-slate-950 border border-slate-800">
                  <div
                    style={{ width: `${activeTrend.dailyUsers}%` }}
                    className="bg-indigo-500 h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
                    title={`Daily Users: ${activeTrend.dailyUsers}%`}
                  >
                    {activeTrend.dailyUsers > 10 ? `${activeTrend.dailyUsers}%` : ''}
                  </div>
                  <div
                    style={{ width: `${activeTrend.weeklyUsers}%` }}
                    className="bg-cyan-500 h-full flex items-center justify-center text-[11px] font-bold text-slate-950 transition-all duration-500"
                    title={`Weekly Users: ${activeTrend.weeklyUsers}%`}
                  >
                    {activeTrend.weeklyUsers > 10 ? `${activeTrend.weeklyUsers}%` : ''}
                  </div>
                  <div
                    style={{ width: `${activeTrend.occasionalUsers}%` }}
                    className="bg-slate-700 h-full flex items-center justify-center text-[11px] font-medium text-slate-200 transition-all duration-500"
                    title={`Occasional Users: ${activeTrend.occasionalUsers}%`}
                  >
                    {activeTrend.occasionalUsers > 8 ? `${activeTrend.occasionalUsers}%` : ''}
                  </div>
                  <div
                    style={{ width: `${activeTrend.nonUsers}%` }}
                    className="bg-slate-800 h-full flex items-center justify-center text-[11px] text-slate-400 transition-all duration-500"
                    title={`Non-Users: ${activeTrend.nonUsers}%`}
                  >
                    {activeTrend.nonUsers > 8 ? `${activeTrend.nonUsers}%` : ''}
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-indigo-500 inline-block" />
                    <span className="text-slate-300">Daily: <strong className="font-mono-data">{activeTrend.dailyUsers}%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-cyan-500 inline-block" />
                    <span className="text-slate-300">Weekly: <strong className="font-mono-data">{activeTrend.weeklyUsers}%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-slate-700 inline-block" />
                    <span className="text-slate-300">Occasional: <strong className="font-mono-data">{activeTrend.occasionalUsers}%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-slate-800 inline-block" />
                    <span className="text-slate-300">Non-Users: <strong className="font-mono-data">{activeTrend.nonUsers}%</strong></span>
                  </div>
                </div>
              </div>

              {/* Multi-Year Timeline Sparkbars */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono-data text-slate-400 uppercase tracking-wider block mb-2">
                  4-Year Adoption Growth Progression
                </span>
                {SURVEY_TRENDS.map((item) => {
                  const combinedActive = item.dailyUsers + item.weeklyUsers;
                  return (
                    <div key={item.year} className="flex items-center gap-3 text-xs">
                      <span className="w-12 font-mono-data text-slate-400">{item.year}</span>
                      <div className="flex-1 h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                        <div
                          style={{ width: `${combinedActive}%` }}
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.year === selectedTrendYear
                              ? 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                              : 'bg-slate-600'
                          }`}
                        />
                      </div>
                      <span className="w-14 text-right font-mono-data text-slate-300 font-semibold">
                        {combinedActive}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Source: Aggregated EDUCAUSE & HEPI annual panels</span>
              <span className="text-cyan-400 font-mono-data">N = 10,924</span>
            </div>
          </div>

          {/* Chart 2: Popular AI Model & Platform Share */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-editorial text-xl text-white font-normal">Collegiate Model Ecosystem Share</h3>
                  <p className="text-xs text-slate-400">Regular student use across specialized academic platforms</p>
                </div>
                <Cpu className="w-5 h-5 text-indigo-400" />
              </div>

              <div className="space-y-3.5 mb-6">
                {AI_TOOL_SHARES.map((tool) => (
                  <div key={tool.name} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{tool.name}</span>
                        <span className="text-slate-400 text-[11px]">({tool.category})</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono-data">
                        <span className="text-emerald-400 text-[11px] font-semibold">{tool.trend}</span>
                        <span className="text-white font-bold">{tool.share}%</span>
                      </div>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${tool.share}%` }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1.5 flex items-center justify-between">
                      <span>Primary Academic Use: {tool.primaryUse}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Multiple selections allowed across concurrent tools</span>
              <span className="text-cyan-400 font-mono-data">Pew Research / Tyton 2025</span>
            </div>
          </div>

        </div>

        {/* Task Breakdown & Efficacy Evaluation */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-editorial text-2xl text-white font-normal">
                Academic Task Breakdown & Efficacy Ratings
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Which specific academic tasks deliver the highest learning utility vs. faculty concern
              </p>
            </div>

            {/* Category Segmented Control */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
              {taskCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTaskCategory(cat)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    selectedTaskCategory === cat
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-800/50'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Task Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTasks.map((t) => {
              const concernBadge = {
                Low: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/50',
                Moderate: 'text-amber-400 bg-amber-950/80 border-amber-800/50',
                High: 'text-rose-400 bg-rose-950/80 border-rose-800/50',
              }[t.academicConcernLevel];

              return (
                <div
                  key={t.task}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-slate-200 leading-snug">
                        {t.task}
                      </span>
                      <span
                        className={`text-[10px] font-mono-data px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${concernBadge}`}
                      >
                        {t.academicConcernLevel} Faculty Concern
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 mb-3">
                      Category: <span className="text-slate-300 font-medium">{t.category}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-400">Student Adoption Rate</span>
                      <span className="font-mono-data font-bold text-white">{t.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-2">
                      <div
                        style={{ width: `${t.percentage}%` }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                      <span>Perceived Learning Utility:</span>
                      <span className="font-mono-data font-semibold text-cyan-300">{t.impactScore} / 10</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
