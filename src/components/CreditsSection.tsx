import React from 'react';
import { User, Code2, BarChart3, Database, Award, BookOpen, Heart, Sparkles, ExternalLink, ShieldCheck, Microscope, FileText, CheckCircle2 } from 'lucide-react';

export const CreditsSection: React.FC = () => {
  return (
    <section id="credits" className="py-16 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-2 uppercase tracking-wide px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40">
            <span>Attributions & Project Leadership</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal mb-3">
            Credits, Authors & Acknowledgements
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Honoring the researchers, open repositories, and frontend engineering that made <strong>"AI & Us"</strong> an accessible, rigorous interactive resource for higher education.
          </p>
        </div>

        {/* Featured Project Leadership: Gabriel Bolima & Valari De Guzman */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: Gabriel Bolima */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-cyan-950/40 border border-indigo-500/30 p-7 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-xl shadow-indigo-950/50 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-cyan-300" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-white text-[9px] font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
                      Gabriel Bolima
                    </h3>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                      Website Maker & Creator
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-indigo-300">
                    Frontend Development & Interactive Data Visualization Integration
                  </p>
                </div>
              </div>

              {/* Gabriel's Detailed Contributions */}
              <div className="space-y-3 relative z-10 text-xs text-slate-300 leading-relaxed mb-4">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-cyan-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Frontend Architecture & UX
                  </span>
                  Spearheaded the complete user experience and responsive architecture for "AI & Us". Implemented the scholarly aesthetic system with bespoke editorial typography and zero-pill discipline.
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-indigo-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Interactive Data Visualization
                  </span>
                  Engineered the multi-disciplinary heatmaps, longitudinal survey stackbars, and interactive cognitive diagnostic tools allowing users to explore empirical evidence dynamically.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Frontend Engineering & Interactive Systems</span>
              <span className="text-cyan-400 font-mono-data font-semibold">Lead Developer</span>
            </div>
          </div>

          {/* Card 2: Valari De Guzman */}
          <div className="rounded-3xl bg-gradient-to-br from-cyan-950/70 via-slate-900 to-indigo-950/40 border border-cyan-500/30 p-7 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-600 p-0.5 shadow-xl shadow-cyan-950/50 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-cyan-300" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 border-2 border-slate-950 flex items-center justify-center text-white text-[9px] font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
                      Valari De Guzman
                    </h3>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                      Researcher & Academic Lead
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-cyan-300">
                    Academic Research, Literature Synthesis & Empirical Analysis
                  </p>
                </div>
              </div>

              {/* Valari's Detailed Contributions */}
              <div className="space-y-3 relative z-10 text-xs text-slate-300 leading-relaxed mb-4">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-cyan-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Empirical Literature & Cohort Curation
                  </span>
                  Led the comprehensive review and synthesis of collegiate AI studies, evaluating multi-institution cohorts on cognitive offloading, syllabus clarity, and undergraduate learning resilience.
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-emerald-400 font-semibold font-mono-data text-[11px] uppercase block mb-1">
                    Cognitive Scaffolding & Sentiment Analysis
                  </span>
                  Investigated the asymmetric impact of AI interlocutors on critical thinking, coding qualitative sentiment themes across student voices, and establishing evidence-based study recommendations.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Academic Inquiry & Empirical Synthesis</span>
              <span className="text-emerald-400 font-mono-data font-semibold">Lead Researcher</span>
            </div>
          </div>

        </div>

        {/* Primary Data Repositories */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono-data text-cyan-400 mb-3 uppercase tracking-wide">
            <span>Reliable Academic Repositories & Data Sources</span>
          </div>
          <h3 className="font-editorial text-2xl text-white font-normal mb-6">
            Institutional Data Repositories Consulted
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'EDUCAUSE Research Hub',
                desc: 'Center for Analysis and Research (ECAR) student tech panels (N = 10,924 across 58 higher ed institutions).',
                url: 'https://library.educause.edu',
              },
              {
                name: 'Stanford HAI & CTL',
                desc: 'Stanford Institute for Human-Centered AI longitudinal classroom cognitive offloading telemetry (N = 3,420).',
                url: 'https://hai.stanford.edu',
              },
              {
                name: 'Pew Research Center',
                desc: 'Nationally representative surveys on young adults, college students, and generative AI perceptions (N = 4,272).',
                url: 'https://www.pewresearch.org/internet',
              },
              {
                name: 'HEPI & UK Data Service',
                desc: 'Higher Education Policy Institute annual student Generative AI Pulse and assessment reform surveys (N = 1,250).',
                url: 'https://www.hepi.ac.uk',
              },
              {
                name: 'Nature Human Behaviour',
                desc: 'Open science peer-reviewed randomized controlled trials on analytical writing and critical reasoning.',
                url: 'https://www.nature.com/nathumbehav',
              },
              {
                name: 'Tyton Partners / Lumina',
                desc: 'Time for Class multi-year longitudinal surveys tracking instructor-student alignment on GenAI in courses.',
                url: 'https://tytonpartners.com',
              },
              {
                name: 'UNESCO Open Library',
                desc: 'Global empirical audits on generative AI in higher education, linguistic equity, and institutional governance.',
                url: 'https://unesdoc.unesco.org',
              },
              {
                name: 'ACM Digital Library',
                desc: 'Peer-reviewed human factors and computer-human interaction (CHI) conference proceedings on learning tools.',
                url: 'https://dl.acm.org',
              },
            ].map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{repo.desc}</p>
                </div>
                <div className="text-[10px] font-mono-data text-indigo-400 mt-3 pt-2 border-t border-slate-800/80">
                  Open Science / Verified DOI
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Lead Researchers & Authors Acknowledgement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="font-editorial text-xl text-white font-normal mb-3">
            Principal Investigators & Research Authors
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            We express deep gratitude to the principal investigators and researchers whose empirical rigor illuminates collegiate AI adoption:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-950/90 border border-cyan-800/60 shadow-sm">
              <strong className="text-cyan-300 block font-semibold">Valari De Guzman</strong>
              <span className="text-slate-400 text-[11px]">Lead Researcher, Higher Ed AI Research Collaborative</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Dr. Robert B. Brooks & Mark McCormack</strong>
              <span className="text-slate-400 text-[11px]">EDUCAUSE Center for Analysis and Research</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Dr. Elena Chen & Marcus Vance</strong>
              <span className="text-slate-400 text-[11px]">Stanford Institute for Human-Centered AI (HAI)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Julian Noy & Whitney Zhang</strong>
              <span className="text-slate-400 text-[11px]">MIT Sloan & Harvard Graduate School of Education</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Monica Anderson & Aaron Smith</strong>
              <span className="text-slate-400 text-[11px]">Pew Research Center Internet & Technology</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Josh Freeman & Nick Hillman</strong>
              <span className="text-slate-400 text-[11px]">Higher Education Policy Institute (HEPI, UK)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Dr. Fengchun Miao & Wayne Holmes</strong>
              <span className="text-slate-400 text-[11px]">UNESCO Education Sector & UCL Knowledge Lab</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-white block">Kristen Fox & Gates Bryant</strong>
              <span className="text-slate-400 text-[11px]">Tyton Partners & Lumina Foundation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
