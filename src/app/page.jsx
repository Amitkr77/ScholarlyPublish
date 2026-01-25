import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gavel,
  Upload,
  BadgeCheck,
  Section,
} from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section
      className="bg-background-light dark:bg-background-dark text-[#101719] dark:text-[#f9fbfb]
"
    >
      <main className="flex flex-col items-center">
        {/* <!-- Hero Section --> */}
        <section className="w-full max-w-7xl px-6 py-10 @container">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 min-h-140 flex items-center justify-center">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
              data-alt="Modern library interior with sunlight through tall windows"
              style={{
                backgroundImage:
                  'linear-linear(rgba(31, 99, 122, 0.4) 0%, rgba(16, 23, 25, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhBcC7RkmWozXQ-5mjha9lfnbz6HRD3YbfsS3HVPj6bkV1cY_HcAV69l_odMWW9BzygVhVQJqvAFPZMXBLpQV1SC06xHNABJJ4-pliD4Xn3gBG-yUiZQa-QT4NWXBXaJJgy0fpWMwsD2cSBrZDz7aMlhKOs8EZJK8YBi1EFjQ01MbWws29kaEhZSpWmFtsM1pwVYO9lQfIdNd7dSxrNe1UGMcxhB6Ir5POfsACX8uNiGxCdSK7NtH8y-Q7WY5WGxheWL4aNpqfopR_")',
              }}
            ></div>
            <div className="relative z-10 flex flex-col gap-8 text-center max-w-3xl px-6">
              <div className="flex flex-col gap-4">
                <span className="text-primary bg-white/90 dark:bg-primary/20 dark:text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest self-center">
                  Established Excellence
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  A Digital Platform for Scholarly Publishing
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                  Empowering researchers with transparent peer review, rigorous
                  standards, and global distribution for maximum academic
                  impact.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cursor-pointer flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                  Get Started
                </button>
                <button className="cursor-pointer flex items-center justify-center rounded-lg h-14 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold hover:bg-white/20 transition-all">
                  Browse Journals
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Trust Indicators --> */}
        <div className="w-full max-w-7xl px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-y border-[#e9eff1] dark:border-[#3a3f47] py-8">
            <div>
              <p className="text-3xl font-black text-primary">500+</p>
              <p className="text-sm font-medium text-[#57818e]">
                Published Articles
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">200k+</p>
              <p className="text-sm font-medium text-[#57818e]">
                Total Citations
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">45+</p>
              <p className="text-sm font-medium text-[#57818e]">
                Partner Institutions
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">12.4</p>
              <p className="text-sm font-medium text-[#57818e]">
                Avg. Impact Factor
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Service Section --> */}
        <section className="w-full max-w-7xl px-6 py-20 flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-[#101719] dark:text-white text-3xl md:text-4xl font-black tracking-tight">
              Our Core Services
            </h2>
            <p className="text-[#57818e] text-lg leading-relaxed">
              Advancing academic excellence through a commitment to scientific
              integrity and modern technological workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Service 1 --> */}
            <div className="group flex flex-col gap-6 rounded-xl border border-[#d3e0e4] dark:border-[#3a3f47] bg-white dark:bg-background-dark p-8 transition-all hover:shadow-xl hover:border-primary/30">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <Upload className="material-symbols-outlined text-3xl!" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Submit Research</h3>
                <p className="text-[#57818e] leading-relaxed">
                  Streamlined manuscript preparation and integrated submission
                  workflow designed for modern authors.
                </p>
              </div>
              <a
                className="mt-auto text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Learn more
                <ArrowRight className="material-symbols-outlined text-sm!" />
              </a>
            </div>
            {/* <!-- Service 2 --> */}
            <div className="group flex flex-col gap-6 rounded-xl border border-[#d3e0e4] dark:border-[#3a3f47] bg-white dark:bg-background-dark p-8 transition-all hover:shadow-xl hover:border-primary/30">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <BadgeCheck className=" material-symbols-outlined !text-sm!" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Peer Review Process</h3>
                <p className="text-[#57818e] leading-relaxed">
                  Robust double-blind peer review management system to ensure
                  complete academic integrity and quality.
                </p>
              </div>
              <a
                className="mt-auto text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Review guidelines
                <ArrowRight className="material-symbols-outlined text-sm!" />
              </a>
            </div>
            {/* <!-- Service 3 --> */}
            <div className="group flex flex-col gap-6 rounded-xl border border-[#d3e0e4] dark:border-[#3a3f47] bg-white dark:bg-background-dark p-8 transition-all hover:shadow-xl hover:border-primary/30">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <Gavel className="material-symbols-outlined text-3xl!" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Ethical Publishing</h3>
                <p className="text-[#57818e] leading-relaxed">
                  Fully committed to COPE compliance and international standards
                  for ethical academic publishing.
                </p>
              </div>
              <a
                className="mt-auto text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Ethics policy
                <ArrowRight className="material-symbols-outlined text-sm!" />
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Featured Journals Section --> */}
        <section className="w-full bg-[#f4f7f8] dark:bg-[#1a1d21] py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex items-end justify-between px-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#101719] dark:text-white text-3xl font-black tracking-tight">
                  Featured Journals
                </h2>
                <p className="text-[#57818e]">
                  Explore our highest-impact publications across diverse fields.
                </p>
              </div>
              <div className="hidden md:flex gap-2">
                <button className="size-10 rounded-full border border-[#d3e0e4] dark:border-[#3a3f47] flex items-center justify-center hover:bg-white dark:hover:bg-primary/20 transition-all">
                  <ChevronLeft className="material-symbols-outlined text-base!" />
                </button>
                <button className="size-10 rounded-full border border-[#d3e0e4] dark:border-[#3a3f47] flex items-center justify-center hover:bg-white dark:hover:bg-primary/20 transition-all">
                  <ChevronRight className="material-symbols-outlined text-base!" />
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar">
              {/* <!-- Journal 1 --> */}
              <div className="snap-start flex flex-col gap-4 min-w-75 group">
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1uZK476yKKwlosORxCuohIBMQH6MwLR8_9oMEM9t12NMAryLjHPJnW3vQuhqZuVh0-LeF_UHO2yGWzGFH-baZdCfBqfOZ115oF0irogtsPK0tSnjPQCNEejt5_gp13IeVaTOoYVZ3fHX6Xp0gTjCu5Ks2L5Bo-m8ucEd-ODLI2VAmfrCr1i7N1G8NgctTT5ihzQdyH59uhFtjT9HMt4d2kWBWI7")',
                    }}
                    data-alt="Scientific journal cover showing abstract microscopic cells"
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-40"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    International Journal of Medicine
                  </h3>
                  <p className="text-sm text-[#57818e] mb-4">
                    ISSN: 1234-5678 • Quarterly
                  </p>
                  <button className="w-full py-3 bg-white dark:bg-[#3a3f47] border border-[#d3e0e4] dark:border-[#4a515a] rounded-lg text-sm font-bold shadow-sm hover:border-primary transition-all">
                    View Journal
                  </button>
                </div>
              </div>
              {/* <!-- Journal 2 --> */}
              <div className="snap-start flex flex-col gap-4 min-w-75 group">
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe0Pd1fXwOUyu4dpyou5CKkDRd3v71ig6nezSt7LQldfN0BqZwg4MjxjKmFzt5RoSKD108TuDqFhgCFYx2Ug40gctV8iO0T1Ex1wnm_v-7wcc7Yet0phrpVsvKQMKVEoRHoHK3aQIuB8XcHOoPhzfBfuU1hupeJkEbrZOmx0q6-KzPqxM-bKqpwNq3I6HcbHNQk6DEYvmpe-BR3rth8rELJiSpwdzF-n34k2CYqVsgXjuDWAL-R4_55LG4NuhYUsBICKqrl2rVwmyw")',
                    }}
                    data-alt="Physics journal cover with blue laser light patterns"
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-40"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Applied Physics Letters
                  </h3>
                  <p className="text-sm text-[#57818e] mb-4">
                    ISSN: 8765-4321 • Monthly
                  </p>
                  <button className="w-full py-3 bg-white dark:bg-[#3a3f47] border border-[#d3e0e4] dark:border-[#4a515a] rounded-lg text-sm font-bold shadow-sm hover:border-primary transition-all">
                    View Journal
                  </button>
                </div>
              </div>
              {/* <!-- Journal 3 --> */}
              <div className="snap-start flex flex-col gap-4 min-w-75 group">
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    data-alt="Humanities journal cover with ancient manuscript textures"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu352DTsdPSCk7YkehQcPP9DtpsyHCnRyHeR89_LALwKEygQ8F45S8pp8ihCrfreLkEL4ct7bYvig7tnViyTWjnGyJTc42zFmCX0yRG5xFjFvYtBrqUyszxTeiG-EPOl4ObGFkoL5xJntdzTOPTpVp-YsRMsR8mHep7TK8NAXoFhuzQoZA07rB57T9jWVUj-j_Ana0u28SeQ1nR22BnXXgZ7C5WyyFWnzLu5jl3_0623OpEQa0rkO--_dqrhQqEgKA1G67NGvoOwlz")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-40"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Social Sciences Review
                  </h3>
                  <p className="text-sm text-[#57818e] mb-4">
                    ISSN: 2345-6789 • Bi-annual
                  </p>
                  <button className="w-full py-3 bg-white dark:bg-[#3a3f47] border border-[#d3e0e4] dark:border-[#4a515a] rounded-lg text-sm font-bold shadow-sm hover:border-primary transition-all">
                    View Journal
                  </button>
                </div>
              </div>
              {/* <!-- Journal 4 --> */}
              <div className="snap-start flex flex-col gap-4 min-w-75 group">
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    data-alt="Engineering journal cover with architectural blueprint details"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV-AH_PkjcEny_5gHlaO0fIIfVSpe1yXcupXBLWqujKiMpwI49M4FHq_VuwfhhnQxt4I939M9NePG3yIsrPJZVeyXauyi50IJXyOzJxo5if9PBy5J9qmsMfEs91dy4tpnAukT-A8rraWNwAs4SUpcMquTSfSiLSzQ2PuOowvUzisIAunzmP5hSROkDwcGiOjbw8H2ibvlBWskytAHgrumv_VrwypQPOUryjFnOyvMTLDNKIDmrVqg--P8A9aW8gpjvDhw02UhwEbtV")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-40"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Engineering Quarterly
                  </h3>
                  <p className="text-sm text-[#57818e] mb-4">
                    ISSN: 9876-5432 • Quarterly
                  </p>
                  <button className="w-full py-3 bg-white dark:bg-[#3a3f47] border border-[#d3e0e4] dark:border-[#4a515a] rounded-lg text-sm font-bold shadow-sm hover:border-primary transition-all">
                    View Journal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call to Action Section --> */}
        {/* <section className="w-full max-w-[1280px] px-6 py-20">
        <div
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-white max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black">Ready to contribute to global knowledge?</h2>
            <p className="text-white/80 text-lg">Join our community of over 50,000 authors and peer reviewers today.
              Start your submission or apply as a reviewer.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-all shadow-xl">Submit
              Your Article</button>
            <button
              className="px-8 py-4 bg-transparent border border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-all">Contact
              Editorial</button>
          </div>
        </div>
      </section> */}
        <section className="w-full max-w-7xl px-6 py-20">
          <div className="bg-primary rounded-4xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            <div className="flex flex-col gap-6 text-white max-w-xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Ready to make your mark in research?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-light">
                Join 50,000+ graduates and mentors. Whether you're ready to
                submit or just looking to learn, your place in our community is
                waiting.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex -space-x-3">
                  <img
                    alt="Scholar"
                    className="size-10 rounded-full border-2 border-primary bg-slate-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSyniU-P3hJFxY9MWr-aaKuKXpwlbhkjJhVw2So93Dz1q8JKMqJgLrOL_-0WQXr5Z5lLM2fqOMHCoUJzAFm7AKopvbcYNb6UAgTukRJUwslHmY9acKCCwSqS9BHX84nJ4q4bS5t9VMQ_Yd3yWSLwdoWkSPXPWjlUTpyA-ZELCh1wzKQ2GRbNY-EWkMjW0Ymomtq5zy0-1i0txunZCfXkzSgtvJJTSh2PFhmeqEDWliEw0vsLOvsUyuOrRU3WOqJE3MyXmtHHwjWkA"
                  />
                  <img
                    alt="Scholar"
                    className="size-10 rounded-full border-2 border-primary bg-slate-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtEBwtloLPPGDcG5GHKHE2Yx4olyFfFmtKrIm-p2G4wxbI1Ank53keOqNFvK9c3tzHyIH4deZLcCBWfEP872wcwfLS9uvSKg7oK0-QiQ4u4GEq7Cq74H_j1q6qonodJwvdc1JIyLd1P16l5HaNfgFbc-57PLu-ts_q9bDBxIfLBgRQFThRaF145_0i6t4r0CCMoGu16iUf7PDzMuhPPe_ljKtlDM_wNkBMjslKJLWLpc1O3IrB5WyM4wLofGiBrGmZq6MWPS8dEhci"
                  />
                  <img
                    alt="Scholar"
                    className="size-10 rounded-full border-2 border-primary bg-slate-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_801JZWD45wBsv861IpC463wmrKM3tnbaK62239GhBNTyyqwLmpculJ9U11qm41tTDSae4XrzkLanjVzYPc3cpcFybBFOtaBfmRDeMh950Hu9ACMWepTfbLzN3cAP-cz4gUt-EU4jujZqejpDi_yGIdOW6OKkIuotsvuwg-TC4biEDoaSH-NxlLFFUe7v0MYN60iA5yqaGS6yOP7CjaPXlT-XVtHCeY7215U0v_asma9qIDoUTt6AHjjdkMGVyGiUQZoM4tkryxbm"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Join 400+ researchers online now
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <button className="px-10 py-5 bg-white text-primary font-extrabold rounded-2xl hover:scale-105 transition-all shadow-xl text-lg">
                Create Free Account
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/40 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all text-lg">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
