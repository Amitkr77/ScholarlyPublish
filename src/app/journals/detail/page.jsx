import React from "react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-[#101719] dark:text-white min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* <!-- Journal Profile Header --> */}
        <section className="bg-white dark:bg-[#2d323a] rounded-xl p-6 border border-[#e9eff1] dark:border-[#3a3f47] mb-8">
          <div className="flex flex-col @[520px]:flex-row gap-8 items-start">
            <div
              className="w-full @[520px]:w-48 aspect-3/4 rounded-lg bg-cover bg-center shadow-md shrink-0"
              data-alt="Scientific journal cover showing abstract quantum visualization"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAv8fcVxw7sFKwUZ_rKBahHXgrKZxVvTtX7XYYBzr2iENJU3tZr8OKsdHEcvichpLf8He3r9Koc9iqKUDSdSYeWxpZrsmuhootNhdgNVy0_aeE8k4y5jbZ4MzXjwJImgEQK7KiQwG2IZssErrnsxYIx6JWD6xt35agOV2eXyf_zyVtT4dXnix9ok_iTrRPFEDQWcTjdiKLX8eIRG2tzVL6R9L9b0ySZXqq8j2YqCe_aIfhtTTTMx3e_KVpDrrW8-OQXbahfO22K3vz3")',
              }}
            ></div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary w-fit mb-2">
                  Open Access
                </span>
                <h1 className="text-[#101719] dark:text-white text-3xl font-extrabold leading-tight tracking-tight">
                  International Journal of Quantum Ethics
                </h1>
                <p className="text-[#57818e] dark:text-gray-400 text-lg font-medium">
                  ISSN: 2045-2322 | Online ISSN: 2045-2323
                </p>
              </div>
              <p className="text-[#57818e] dark:text-gray-300 text-base leading-relaxed max-w-3xl">
                A peer-reviewed, international forum exploring the profound
                intersection of quantum mechanics, information theory, and
                emerging ethical frameworks in the second quantum revolution.
              </p>
              <div className="flex flex-wrap gap-6 items-center py-2">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#57818e] font-bold">
                    Impact Factor
                  </span>
                  <span className="text-2xl font-bold text-primary">4.82</span>
                </div>
                <div className="w-px h-10 bg-[#e9eff1] dark:bg-[#3a3f47]"></div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#57818e] font-bold">
                    H-Index
                  </span>
                  <span className="text-2xl font-bold text-primary">112</span>
                </div>
                <div className="w-px h-10 bg-[#e9eff1] dark:bg-[#3a3f47]"></div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#57818e] font-bold">
                    Citations
                  </span>
                  <span className="text-2xl font-bold text-primary">14.2k</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <button className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-lg hover:shadow-lg transition-all">
                  <span className="material-symbols-outlined text-sm">
                    upload_file
                  </span>
                  Submit Manuscript
                </button>
                <button className="flex items-center gap-2 bg-[#e9eff1] dark:bg-[#3a3f47] text-[#101719] dark:text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#dfe5e7] dark:hover:bg-[#454c57] transition-all">
                  <span className="material-symbols-outlined text-sm">
                    notifications
                  </span>
                  Get Alerts
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Main Layout Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- Left Content: Archive & Issues --> */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* <!-- Secondary Tabs --> */}
            <div className="border-b border-[#e9eff1] dark:border-[#3a3f47]">
              <div className="flex gap-8 px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <a
                  className="border-b-[3px] border-primary text-primary pb-3 font-bold text-sm tracking-wide"
                  href="#"
                >
                  Current Issue
                </a>
                <a
                  className="border-b-[3px] border-transparent text-[#57818e] hover:text-[#101719] dark:hover:text-white pb-3 font-bold text-sm tracking-wide"
                  href="#"
                >
                  Archive
                </a>
                <a
                  className="border-b-[3px] border-transparent text-[#57818e] hover:text-[#101719] dark:hover:text-white pb-3 font-bold text-sm tracking-wide"
                  href="#"
                >
                  Aims &amp; Scope
                </a>
                <a
                  className="border-b-[3px] border-transparent text-[#57818e] hover:text-[#101719] dark:hover:text-white pb-3 font-bold text-sm tracking-wide"
                  href="#"
                >
                  Editorial Board
                </a>
                <a
                  className="border-b-[3px] border-transparent text-[#57818e] hover:text-[#101719] dark:hover:text-white pb-3 font-bold text-sm tracking-wide"
                  href="#"
                >
                  Instructions
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <h2 className="text-2xl font-bold text-[#101719] dark:text-white">
                Volume 14, Issue 4 (October 2023)
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#57818e] font-medium">
                <span className="material-symbols-outlined text-base">
                  calendar_month
                </span>
                Published Oct 12, 2023
              </div>
            </div>
            {/* <!-- Articles List --> */}
            <div className="flex flex-col gap-4">
              {/* <!-- Article Item --> */}
              <article className="p-5 rounded-xl border border-[#e9eff1] dark:border-[#3a3f47] hover:border-primary/30 bg-white dark:bg-[#2d323a] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#57818e]">
                      Research Article
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:underline cursor-pointer">
                      Non-local Moral Responsibility in Quantum Computational
                      Decision Making
                    </h3>
                  </div>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase">
                    Highly Cited
                  </span>
                </div>
                <p className="text-sm text-[#57818e] dark:text-gray-400 font-medium mb-4">
                  Li Wei, Sarah J. Montgomery, Alexei Volkov, &amp; Hans M.
                  Schmidt
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9] dark:border-[#3a3f47]">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#57818e]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        article
                      </span>{" "}
                      PDF (1.4MB)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        data_thresholding
                      </span>
                      Metrics
                    </span>
                    <span className="text-primary/70">
                      DOI: 10.1038/s41586-023-06677-x
                    </span>
                  </div>
                  <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    View Abstract{" "}
                    <span className="material-symbols-outlined text-sm">
                      expand_more
                    </span>
                  </button>
                </div>
              </article>
              {/* <!-- Article Item --> */}
              <article className="p-5 rounded-xl border border-[#e9eff1] dark:border-[#3a3f47] hover:border-primary/30 bg-white dark:bg-[#2d323a] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#57818e]">
                      Review Article
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:underline cursor-pointer">
                      The Observer Effect: A Century of Philosophical
                      Misunderstandings
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#57818e] dark:text-gray-400 font-medium mb-4">
                  Julian Thorne, Elena Petrova
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9] dark:border-[#3a3f47]">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#57818e]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        article
                      </span>{" "}
                      PDF (2.8MB)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        data_thresholding
                      </span>
                      Metrics
                    </span>
                    <span className="text-primary/70">
                      DOI: 10.1038/s41586-023-06552-1
                    </span>
                  </div>
                  <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    View Abstract{" "}
                    <span className="material-symbols-outlined text-sm">
                      expand_more
                    </span>
                  </button>
                </div>
              </article>
              {/* <!-- Article Item --> */}
              <article className="p-5 rounded-xl border border-[#e9eff1] dark:border-[#3a3f47] hover:border-primary/30 bg-white dark:bg-[#2d323a] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#57818e]">
                      Case Study
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:underline cursor-pointer">
                      Ethical Boundaries of Quantum Entanglement in Biomedical
                      Engineering
                    </h3>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">
                    Trending
                  </span>
                </div>
                <p className="text-sm text-[#57818e] dark:text-gray-400 font-medium mb-4">
                  Marta Rodriguez, Thomas Al-Fayed, Sophia Chen
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9] dark:border-[#3a3f47]">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#57818e]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        article
                      </span>{" "}
                      PDF (1.1MB)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        data_thresholding
                      </span>
                      Metrics
                    </span>
                    <span className="text-primary/70">
                      DOI: 10.1038/s41586-023-06412-4
                    </span>
                  </div>
                  <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    View Abstract{" "}
                    <span className="material-symbols-outlined text-sm">
                      expand_more
                    </span>
                  </button>
                </div>
              </article>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  archive
                </span>
                Archive: Previous Volumes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center justify-between p-4 rounded-lg bg-[#e9eff1] dark:bg-[#3a3f47] cursor-pointer hover:bg-[#dfe5e7] transition-colors">
                  <span className="font-bold">Volume 14 (2023)</span>
                  <span className="text-xs font-medium text-[#57818e]">
                    4 Issues
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-[#2d323a] border border-[#e9eff1] dark:border-[#3a3f47] cursor-pointer hover:border-primary/50">
                  <span className="font-bold">Volume 13 (2022)</span>
                  <span className="text-xs font-medium text-[#57818e]">
                    6 Issues
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-[#2d323a] border border-[#e9eff1] dark:border-[#3a3f47] cursor-pointer hover:border-primary/50">
                  <span className="font-bold">Volume 12 (2021)</span>
                  <span className="text-xs font-medium text-[#57818e]">
                    6 Issues
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-[#2d323a] border border-[#e9eff1] dark:border-[#3a3f47] cursor-pointer hover:border-primary/50">
                  <span className="font-bold">Volume 11 (2020)</span>
                  <span className="text-xs font-medium text-[#57818e]">
                    4 Issues
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right Sidebar: Editorial & Actions --> */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* <!-- Editorial Board Widget --> */}
            <div className="bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f47] overflow-hidden">
              <div className="p-5 border-b border-[#e9eff1] dark:border-[#3a3f47] bg-[#f9fbfb] dark:bg-[#26292f]">
                <h4 className="text-lg font-bold text-[#101719] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                  Editorial Leadership
                </h4>
              </div>
              <div className="p-5 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div
                    className="size-14 rounded-lg bg-cover bg-center ring-2 ring-primary/10"
                    data-alt="Portrait of the Editor-in-Chief"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnXa1HnwnvfCusLiy81Oyo-EoVEMwl0z0OK1jbamifJX-5zNeEUfpw2q0J7JHjx18IYGB_8pxvcWYEv-BluD6YasFOQJyT5DzKaOj6M0KQg79vmzWAlsk11FaxT3Isi7-VoByRMBJLUUESzJrIachzY9-ouJ-uJWQy4ravBw9wWrC-MfkOJ9KzdPDPmDusoypXhdyydNiQPqYoLM8gp3NE88tMvIV1u17LWYWqAfIXrEF6es1eh_YLREVlk1gNFvUQRraiNYAOTBuD")',
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest">
                      Editor-in-Chief
                    </span>
                    <h5 className="font-bold text-[#101719] dark:text-white">
                      Dr. Aris Thorne
                    </h5>
                    <p className="text-xs text-[#57818e]">
                      University of Oxford, UK
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-xs font-black uppercase text-[#57818e] tracking-widest">
                    Associate Editors
                  </h6>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-8 rounded-full bg-cover bg-center"
                        data-alt="Associate Editor profile"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaq_H8l-k1Nh3Nje6lIWeTW3OQ3Ng45Ko0CoEIovzWG9BG2tGjXRryGpUtKEE-GKwotIWGyTeJUB5eQ-pBCFe0yO3inrj5qzrFdZ4fr_SnHW0wiEY9ADG27_4ZS0a76gCYJzu4sBj1HxJl9JIhSlh0vAzhiaY8CZXqIOy1_pk1uQNhh1tkZcHHG9iC_kId1OL22ZXbpJr_6fSYwfRP4mw2GFB1LgyrmnTtlwqEZu04uBOf1s38zuMkng0iBgKHHowFnw-UbwAY2RcY")',
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Prof. Jean Marat</p>
                        <p className="text-[10px] text-[#57818e]">
                          Quantum Ethics Lab, Paris
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="size-8 rounded-full bg-cover bg-center"
                        data-alt="Associate Editor profile"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7PDIcPwtAtuLeZfky2LdSAa5mVGGCQFk-pPYQIRJMwnrlww5vuSeaiwGdHyNPHgsABLIKsLWt00DlDHubufTs--c5Y31sGSw99cQ4_g49LPNw28bgpB1r82QJopyR-I_6JZPGUMpsInliDI8uCeugkSg-gaqibN_M2d5IfXxe2jNic8WJErlXwSQhNvhn8RIcg_zsIfa90l_GkyEv0b_MLYjMN2kK1BcWn8igmv_lViPMYnJso92TNg1PyqOzwhrg5RRyOiWX0lQ2")',
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Dr. Kenji Tanaka</p>
                        <p className="text-[10px] text-[#57818e]">
                          University of Tokyo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#e9eff1] dark:bg-[#3a3f47] text-primary font-bold text-sm rounded-lg hover:bg-[#dfe5e7] transition-colors">
                  Full Editorial Board
                </button>
              </div>
            </div>
            {/* <!-- Call to Actions --> */}
            <div className="bg-primary rounded-xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-xl font-bold mb-3 relative z-10">
                Call for Papers
              </h4>
              <p className="text-primary-100/90 text-sm mb-6 leading-relaxed relative z-10">
                Special Issue on{" "}
                <span className="italic font-medium text-white">
                  Quantum Governance &amp; AI Alignment
                </span>
                .
              </p>
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold bg-white/20 p-2 rounded-md">
                  <span className="material-symbols-outlined text-base">
                    event
                  </span>
                  Deadline: Dec 15, 2023
                </div>
                <button className="mt-4 w-full bg-white text-primary font-black py-3 rounded-lg text-sm uppercase tracking-widest hover:bg-[#f9fbfb] transition-colors">
                  Submit Now
                </button>
              </div>
            </div>
            {/* <!-- Metrics Chart (Simplified Representation) --> */}
            <div className="bg-white dark:bg-[#2d323a] rounded-xl border border-[#e9eff1] dark:border-[#3a3f47] p-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#57818e] mb-4">
                Citation Growth
              </h4>
              <div className="h-32 w-full flex items-end gap-1 px-2">
                <div className="w-full bg-primary/20 h-[30%] rounded-t-sm"></div>
                <div className="w-full bg-primary/30 h-[45%] rounded-t-sm"></div>
                <div className="w-full bg-primary/40 h-[40%] rounded-t-sm"></div>
                <div className="w-full bg-primary/60 h-[65%] rounded-t-sm"></div>
                <div className="w-full bg-primary/80 h-[85%] rounded-t-sm"></div>
                <div className="w-full bg-primary h-[95%] rounded-t-sm"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-[#57818e] mt-2 px-1">
                <span>2018</span>
                <span>2019</span>
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
}
