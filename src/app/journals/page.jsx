import React from "react";

export default function page() {
  return (
    <section>
      <main class="flex-1 max-w-300 mx-auto w-full px-6 py-10">
        {/* <!-- Headline Section --> */}
        <div class="text-center mb-12">
          <h1 class="text-[#101719] dark:text-white text-4xl font-bold tracking-tight mb-4">
            Explore our collection of world-class journals
          </h1>
          <p class="text-[#57818e] dark:text-[#a0b0b5] text-lg max-w-2xl mx-auto">
            Access over 5,000 peer-reviewed journals across all major
            disciplines and scientific communities.
          </p>
        </div>
        {/* <!-- Search and Filter Bar --> */}
        <div class="bg-white dark:bg-[#2d323a] p-2 rounded-xl shadow-sm border border-[#e9eff1] dark:border-[#3a3f4a] mb-8">
          <div class="flex flex-col md:flex-row gap-2">
            <div class="flex-1 relative">
              <div class="absolute inset-y-0 left-3 flex items-center text-[#57818e]">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input
                class="w-full h-12 pl-10 pr-4 bg-[#f9fbfb] dark:bg-background-dark border-none rounded-lg text-base focus:ring-2 focus:ring-primary/50"
                placeholder="Search by title, ISSN, or keyword..."
              />
            </div>
            <button class="bg-primary text-white px-8 h-12 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">filter_list</span>
              Search
            </button>
          </div>
        </div>
        {/* <!-- Discipline Chips --> */}
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary text-white px-5 text-sm font-semibold">
            All Disciplines
          </button>
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#e9eff1] dark:bg-[#3a3f4a] px-5 text-sm font-medium hover:bg-[#dde5e8] transition-colors">
            Medicine{" "}
            <span class="material-symbols-outlined text-sm!">expand_more</span>
          </button>
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#e9eff1] dark:bg-[#3a3f4a] px-5 text-sm font-medium hover:bg-[#dde5e8] transition-colors">
            Engineering{" "}
            <span class="material-symbols-outlined text-sm!">expand_more</span>
          </button>
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#e9eff1] dark:bg-[#3a3f4a] px-5 text-sm font-medium hover:bg-[#dde5e8] transition-colors">
            Social Sciences{" "}
            <span class="material-symbols-outlined text-sm!">expand_more</span>
          </button>
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#e9eff1] dark:bg-[#3a3f4a] px-5 text-sm font-medium hover:bg-[#dde5e8] transition-colors">
            Life Sciences{" "}
            <span class="material-symbols-outlined text-sm!">expand_more</span>
          </button>
          <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#e9eff1] dark:bg-[#3a3f4a] px-5 text-sm font-medium hover:bg-[#dde5e8] transition-colors">
            Arts &amp; Humanities{" "}
            <span class="material-symbols-outlined text-sm!">expand_more</span>
          </button>
        </div>
        {/* <!-- Grid Header --> */}
        <div class="flex justify-between items-center mb-6">
          <p class="text-sm font-medium text-[#57818e]">
            Showing 1,248 journals
          </p>
          <div class="flex items-center gap-2">
            <span class="text-sm text-[#57818e]">Sort by:</span>
            <select class="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer text-primary">
              <option>Relevance</option>
              <option>Impact Factor</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        {/* <!-- Journal Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Journal Card 1 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined text-7xl! text-primary">
                  menu_book
                </span>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/80 dark:bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary dark:text-white">
                  Q1 Journal
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Journal of Clinical Medicine
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined text-base!">
                  science
                </span>
                <span>Discipline: Medicine</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined text-base!">tag</span>
                <span>ISSN: 2044-5318</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">4.242</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Journal Card 2 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-[#57818e]/10 to-[#57818e]/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined text-7xl! text-[#57818e]">
                  precision_manufacturing
                </span>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/80 dark:bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary dark:text-white">
                  Monthly
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Advanced Engineering Quarterly
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined text-base!">
                  settings
                </span>
                <span>Discipline: Engineering</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined text-base!">tag</span>
                <span>ISSN: 1932-6203</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">3.189</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Journal Card 3 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded!-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined text-7xl! text-primary">
                  groups
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Sociological Review
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined !text-base!">public</span>
                <span>Discipline: Social Sciences</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined !text-base!">tag</span>
                <span>ISSN: 0038-0385</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">2.910</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1]dark:bg-[#!3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined !text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Journal Card 4 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-[#57818e]/10 to-[#57818e]/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined !text-7xl! text-[#57818e]">
                  biotech
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Biological Sciences Today
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined text-base!">
                  genetics
                </span>
                <span>Discipline: Life Sciences</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined text-base!">tag</span>
                <span>ISSN: 1471-2105</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">5.560</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Journal Card 5 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined text-7xl! text-primary">
                  history_edu
                </span>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/80 dark:bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary dark:text-white">
                  Gold Open Access
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Modern Humanities
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined text-base!">
                  palette
                </span>
                <span>Discipline: Arts &amp; Humanities</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined text-base!">tag</span>
                <span>ISSN: 1754-9469</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">1.842</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Journal Card 6 --> */}
          <div class="group flex flex-col bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f4a] overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div class="w-full h-40 bg-linear-to-br from-[#57818e]/10 to-[#57818e]/5 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <span class="material-symbols-outlined text-7xl! text-[#57818e]">
                  atm
                </span>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-[#101719] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                Global Physics Archive
              </h3>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-1">
                <span class="material-symbols-outlined text-base!">
                  fluorescent
                </span>
                <span>Discipline: Physical Sciences</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#57818e] dark:text-[#a0b0b5] mb-6">
                <span class="material-symbols-outlined text-base!">tag</span>
                <span>ISSN: 0034-4885</span>
              </div>
              <div class="mt-auto pt-4 border-t border-[#f0f3f4] dark:border-[#3a3f4a] flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-bold text-[#57818e]">
                    Impact
                  </span>
                  <span class="text-sm font-bold text-primary">7.892</span>
                </div>
                <button class="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f4a] text-primary dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Explore{" "}
                  <span class="material-symbols-outlined text-sm!">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pagination --> */}
        <div class="mt-12 flex justify-center items-center gap-2">
          <button class="flex size-10 items-center justify-center rounded-lg border border-[#e9eff1] dark:border-[#3a3f4a] hover:bg-primary hover:text-white transition-colors">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button class="flex size-10 items-center justify-center rounded-lg bg-primary text-white font-bold">
            1
          </button>
          <button class="flex size-10 items-center justify-center rounded-lg border border-[#e9eff1] dark:border-[#3a3f4a] hover:bg-primary hover:text-white transition-colors">
            2
          </button>
          <button class="flex size-10 items-center justify-center rounded-lg border border-[#e9eff1] dark:border-[#3a3f4a] hover:bg-primary hover:text-white transition-colors">
            3
          </button>
          <span class="px-2 text-[#57818e]">...</span>
          <button class="flex size-10 items-center justify-center rounded-lg border border-[#e9eff1] dark:border-[#3a3f4a] hover:bg-primary hover:text-white transition-colors">
            42
          </button>
          <button class="flex size-10 items-center justify-center rounded-lg border border-[#e9eff1] dark:border-[#3a3f4a] hover:bg-primary hover:text-white transition-colors">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </section>
  );
}
