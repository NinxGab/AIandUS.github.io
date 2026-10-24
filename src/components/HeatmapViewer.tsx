import React, { useState } from 'react';
import { HEATMAP_DATA } from '../data/researchData';
import { Discipline, StudyYear, HeatmapCell } from '../types';
import { Info, HelpCircle, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HeatmapViewerProps {
  selectedDisciplineFilter: string;
  setSelectedDisciplineFilter: (d: string) => void;
  selectedYearFilter: string;
  setSelectedYearFilter: (y: string) => void;
}

type MetricMode = 'adoptionRate' | 'perceivedGradeGain' | 'cognitiveRelianceIndex' | 'policyClarityRating';

export const HeatmapViewer: React.FC<HeatmapViewerProps> = ({
  selectedDisciplineFilter,
  setSelectedDisciplineFilter,
  selectedYearFilter,
  setSelectedYearFilter,
}) => {
  const [metricMode, setMetricMode] = useState<MetricMode>('adoptionRate');
  const [selectedCell, setSelectedCell] = useState<HeatmapCell | null>(
    HEATMAP_DATA.find((c) => c.discipline === 'Computer Science & Engineering' && c.year === '2025') || null
  );

  const years: StudyYear[] = ['2023', '2024', '2025', '2026'];
  const disciplines: Discipline[] = [
    'Computer Science & Engineering',
    'Humanities & Social Sciences',
    'Business & Economics',
    'Biological & Health Sciences',
    'Physical & Mathematical Sciences',
    'Arts & Architecture',
  ];

  const metricMeta = {
    adoptionRate: {
      label: 'Adoption Rate',
      unit: '%',
      min: 20,
      max: 100,
      description: 'Percentage of college students reporting active weekly generative AI usage for academic tasks.',
      colorScale: (val: number) => {
        // From quiet slate-800 to intense cyan-500
        if (val < 30) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 50) return 'bg-indigo-950/70 text-indigo-200 border-indigo-900/60';
        if (val < 70) return 'bg-indigo-800/80 text-white border-indigo-700/80';
        if (val < 85) return 'bg-cyan-800/90 text-cyan-50 border-cyan-600';
        return 'bg-gradient-to-br from-cyan-600 to-indigo-600 text-white border-cyan-400 font-bold';
      },
    },
    perceivedGradeGain: {
      label: 'Perceived Grade Gain',
      unit: '%',
      min: 25,
      max: 100,
      description: 'Percentage of students reporting measurable grade enhancement on assisted coursework.',
      colorScale: (val: number) => {
        if (val < 35) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 55) return 'bg-blue-950/70 text-blue-200 border-blue-900/60';
        if (val < 70) return 'bg-blue-800/80 text-white border-blue-700/80';
        if (val < 80) return 'bg-emerald-800/90 text-emerald-50 border-emerald-600';
        return 'bg-gradient-to-br from-emerald-600 to-teal-500 text-white border-emerald-400 font-bold';
      },
    },
    cognitiveRelianceIndex: {
      label: 'Cognitive Reliance Index',
      unit: '/10',
      min: 1,
      max: 10,
      description: 'Scale of cognitive offloading reported by instructors and diagnostic tests (higher indicates heavier reliance).',
      colorScale: (val: number) => {
        if (val < 4) return 'bg-slate-900 text-slate-400 border-slate-800';
        if (val < 5.5) return 'bg-amber-950/60 text-amber-200 border-amber-900/50';
        if (val < 7.0) return 'bg-amber-800/80 text-amber-50 border-amber-700';
        if (val < 8.0) return 'bg-orange-800/90 text-orange-50 border-orange-600';
        return 'bg-gradient-to-br from-rose-700 to-amber-700 text-white border-rose-400 font-bold';
      },
    },
    policyClarityRating: {
      label: 'Syllabus Policy Clarity',
      unit: '%',
      min: 10,
      max: 100,
      description: 'Percentage of courses in discipline providing unambiguous, written guidelines on AI authorization.',
      colorScale: (val: number) => {
        if (val < 25) return 'bg-slate-900 text-rose-300/80 border-slate-800';
        if (val < 45) return 'bg-slate-800/80 text-slate-300 border-slate-700';
        if (val < 70) return 'bg-teal-950/80 text-teal-200 border-teal-800';
        if (val < 80) return 'bg-teal-800/90 text-white border-teal-600';
        return 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white border-teal-400 font-bold';
      },
    },
  };

  const currentMeta = metricMeta[metricMode];

  const filteredDisciplines = disciplines.filter((d) =>
    selectedDisciplineFilter === 'all' ? true : d === selectedDisciplineFilter
  );

  const filteredYears = years.filter((y) =>
    selectedYearFilter === 'all' ? true : y === selectedYearFilter
  );

  return (
    <section id="heatmap" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Empirical Cross-Analysis</span>
              <span className="text-slate-600">·</span>
              <span>Discipline × Academic Year</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Disciplinary Adoption & Impact Heatmap
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Track how AI integration evolved from an ad-hoc novelty in 2023 to institutional standard practice in 2026 across major fields of study.
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            {(Object.keys(metricMeta) as MetricMode[]).map((key) => {
              const isSelected = metricMode === key;
              return (
                <button
                  key={key}
                  onClick={() => setMetricMode(key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {metricMeta[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Refine Heatmap:</span>

            {/* Discipline Dropdown */}
            <select
              value={selectedDisciplineFilter}
              onChange={(e) => setSelectedDisciplineFilter(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Disciplines (6 Major Fields)</option>
              {disciplines.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {/* Study Year Dropdown */}
            <select
              value={selectedYearFilter}
              onChange={(e) => setSelectedYearFilter(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Study Years (2023–2026)</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  Academic Year {y}
                </option>
              ))}
            </select>

            {(selectedDisciplineFilter !== 'all' || selectedYearFilter !== 'all') && (
              <button
                onClick={() => {
                  setSelectedDisciplineFilter('all');
                  setSelectedYearFilter('all');
                }}
                className="text-xs text-cyan-400 hover:underline ml-1"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Metric Description Helper */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden sm:inline">{currentMeta.description}</span>
          </div>
        </div>

        {/* Heatmap Grid & Inspection Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* The Heatmap Matrix */}
          <div className="lg:col-span-8 overflow-x-auto rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl">
            <div className="min-w-[540px]">
              {/* Column Headers (Years) */}
              <div className="grid grid-cols-5 gap-2 mb-3 pb-2 border-b border-slate-800 text-xs font-mono-data text-slate-400">
                <div className="col-span-1 text-slate-400 font-semibold uppercase tracking-wider">Discipline</div>
                {years.map((yr) => (
                  <div
                    key={yr}
                    className={`text-center font-semibold py-1 rounded transition-colors ${
                      selectedYearFilter === yr
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                        : selectedYearFilter === 'all'
                        ? 'text-slate-300'
                        : 'text-slate-600'
                    }`}
                  >
                    {yr} Cohort
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="space-y-2.5">
                {disciplines.map((disc) => {
                  const isRowFiltered =
                    selectedDisciplineFilter !== 'all' && selectedDisciplineFilter !== disc;

                  return (
                    <div
                      key={disc}
                      className={`grid grid-cols-5 gap-2 items-center transition-opacity ${
                        isRowFiltered ? 'opacity-30 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      {/* Row Label */}
                      <div className="col-span-1 text-xs font-medium text-slate-300 pr-2 truncate" title={disc}>
                        {disc.replace(' & Engineering', '').replace(' & Social Sciences', '').replace(' & Health Sciences', '')}
                      </div>

                      {/* Cells */}
                      {years.map((yr) => {
                        const cell = HEATMAP_DATA.find(
                          (c) => c.discipline === disc && c.year === yr
                        );
                        if (!cell) return <div key={yr} className="h-14 rounded-lg bg-slate-900" />;

                        const rawValue = cell[metricMode];
                        const isSelected =
                          selectedCell?.discipline === cell.discipline &&
                          selectedCell?.year === cell.year;
                        const isYearFilteredOut =
                          selectedYearFilter !== 'all' && selectedYearFilter !== yr;

                        return (
                          <button
                            key={yr}
                            onClick={() => setSelectedCell(cell)}
                            disabled={isYearFilteredOut}
                            className={`h-14 rounded-lg border transition-all duration-150 flex flex-col items-center justify-center p-1.5 cursor-pointer text-center relative group ${
                              currentMeta.colorScale(rawValue)
                            } ${
                              isSelected
                                ? 'ring-2 ring-cyan-400 scale-[1.04] z-10 shadow-lg'
                                : 'hover:scale-[1.02] hover:z-5'
                            } ${isYearFilteredOut ? 'opacity-25 pointer-events-none' : ''}`}
                          >
                            <span className="font-mono-data text-sm font-bold">
                              {rawValue}
                              <span className="text-[10px] font-normal opacity-80">{currentMeta.unit}</span>
                            </span>
                            <span className="text-[10px] text-slate-300/80 truncate max-w-full px-1">
                              N={cell.sampleCount}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Heatmap Legend */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span>Intensity Scale:</span>
                  <div className="flex items-center gap-1 font-mono-data text-[10px]">
                    <span className="w-5 h-3.5 rounded bg-slate-900 border border-slate-800 inline-block" />
                    <span>Low</span>
                    <span className="w-5 h-3.5 rounded bg-indigo-950 border border-indigo-900 inline-block ml-1" />
                    <span className="w-5 h-3.5 rounded bg-indigo-800 border border-indigo-700 inline-block" />
                    <span className="w-5 h-3.5 rounded bg-cyan-700 border border-cyan-500 inline-block" />
                    <span className="w-5 h-3.5 rounded bg-cyan-500 border border-cyan-300 inline-block" />
                    <span className="ml-1">High</span>
                  </div>
                </div>
                <div className="text-slate-400 italic text-[11px]">
                  Click any cell to inspect empirical breakdown & qualitative notes.
                </div>
              </div>
            </div>
          </div>

          {/* Cell Inspector Drawer */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-xl">
            {selectedCell ? (
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="text-xs font-mono-data text-cyan-400 uppercase tracking-wider">
                    Cell Inspection Detail
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono-data">
                    {selectedCell.year} Cohort
                  </span>
                </div>

                <h3 className="font-editorial text-xl text-white font-normal mb-1">
                  {selectedCell.discipline}
                </h3>
                <div className="text-xs text-slate-400 mb-6">
                  Empirical Sample: <span className="text-slate-200 font-semibold font-mono-data">{selectedCell.sampleCount.toLocaleString()}</span> university respondents
                </div>

                {/* 4 Stat Badges for this cell */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Adoption Rate</span>
                    <span className="text-lg font-bold font-mono-data text-white">
                      {selectedCell.adoptionRate}%
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Perceived Grade Gain</span>
                    <span className="text-lg font-bold font-mono-data text-emerald-400">
                      {selectedCell.perceivedGradeGain}%
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Cognitive Reliance</span>
                    <span className="text-lg font-bold font-mono-data text-amber-300">
                      {selectedCell.cognitiveRelianceIndex} / 10
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Syllabus Clarity</span>
                    <span className="text-lg font-bold font-mono-data text-cyan-300">
                      {selectedCell.policyClarityRating}%
                    </span>
                  </div>
                </div>

                {/* Top Task */}
                <div className="mb-6 p-3.5 rounded-xl bg-slate-950/90 border border-indigo-900/40">
                  <span className="text-[11px] font-mono-data uppercase text-indigo-400 block mb-1">
                    Primary Academic Use Case
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    "{selectedCell.topTask}"
                  </p>
                </div>

                {/* Academic Context Commentary */}
                <div className="space-y-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                  <p>
                    <strong className="text-slate-300">Trend Synthesis:</strong> In {selectedCell.year}, {selectedCell.discipline.toLowerCase()} exhibited an adoption rate of {selectedCell.adoptionRate}%. The cognitive reliance score of {selectedCell.cognitiveRelianceIndex}/10 reflects the extent to which undergraduates offload conceptual syntax or structural drafting onto LLM assistants.
                  </p>
                  <p>
                    <strong className="text-slate-300">Policy Maturity:</strong> {selectedCell.policyClarityRating}% of institutional syllabi in this domain provided explicit boundaries, indicating {selectedCell.policyClarityRating > 70 ? 'mature institutional accommodation' : 'substantial ambiguity and honor-code friction'}.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400">
                <Layers className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-xs">Select any cell in the heatmap matrix to view detailed disciplinary telemetry.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
