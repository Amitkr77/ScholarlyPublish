import React from "react";

export default function page() {
  return (
    <section classNameName="bg-background-light dark:bg-background-dark text-[#101719] dark:text-slate-200 min-h-screen">
      <main className="max-w-250 mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <div className="w-full mb-10 text-center md:text-left">
          <h1 className="text-[#101719] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
            Welcome back, Scholar.
          </h1>
          <p className="text-[#57818e] dark:text-slate-400 text-lg max-w-2xl">
            Access your dashboard to continue your research journey, manage
            submissions, and contribute to the global academic community.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-3/5 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e9eff1] dark:border-slate-700">
            <div className="mb-8">
              <h3 className="text-[#101719] dark:text-white text-xl font-bold mb-2">
                Log In
              </h3>
              <p className="text-sm text-[#57818e] dark:text-slate-400">
                Please enter your institutional credentials.
              </p>
            </div>
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[#101719] dark:text-slate-300 text-sm font-semibold flex items-center gap-1">
                    Institutional Email
                    <span
                      className="material-symbols-outlined text-xs text-primary cursor-help"
                      title="Use the email associated with your institution"
                    >
                      info
                    </span>
                  </span>
                  <input
                    className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50"
                    placeholder="jsmith@university.edu"
                    required=""
                    type="email"
                  />
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#101719] dark:text-slate-300 text-sm font-semibold">
                      Password
                    </span>
                    <a
                      className="text-xs font-bold text-primary hover:underline"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50"
                    placeholder="••••••••"
                    required=""
                    type="password"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="rounded border-[#d3e0e4] text-primary focus:ring-primary h-5 w-5"
                    type="checkbox"
                  />
                  <span className="text-sm text-[#57818e] dark:text-slate-400">
                    Keep me logged in on this device
                  </span>
                </label>
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-lg text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Log In to Dashboard
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-[#e9eff1] dark:border-slate-700 text-center">
              <p className="text-[#57818e] dark:text-slate-400">
                New to ScholarPublish?{" "}
                <a className="text-primary font-bold" href="#">
                  Create an account
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  school
                </span>
                <h4 className="font-bold text-[#101719] dark:text-white">
                  Welcome Back
                </h4>
              </div>
              <p className="text-sm text-[#57818e] dark:text-slate-400 leading-relaxed">
                Return to your peer review assignments, pending submissions, and
                editorial duties. Your workspace is synchronized across all
                devices for a seamless publishing experience.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-[#e9eff1] dark:border-slate-700 rounded-xl p-6">
              <h4 className="font-bold text-[#101719] dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  security
                </span>
                System Security
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">
                    check_circle
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#101719] dark:text-slate-200">
                      End-to-End Encryption
                    </p>
                    <p className="text-xs text-[#57818e] dark:text-slate-400">
                      Your manuscripts and peer reviews are protected by AES-256
                      encryption.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">
                    check_circle
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#101719] dark:text-slate-200">
                      Two-Factor Authentication
                    </p>
                    <p className="text-xs text-[#57818e] dark:text-slate-400">
                      Enable 2FA in your profile settings for an extra layer of
                      account protection.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 bg-linear-to-br from-primary to-[#2a84a3] p-8 flex flex-col justify-end text-white">
              <div className="absolute -top-5 -right-5 opacity-20">
                <span className="material-symbols-outlined text-[160px]">
                  shield
                </span>
              </div>
              <p className="text-xl font-black leading-tight">
                Secure Research <br />
                Ecosystem.
              </p>
              <p className="text-xs mt-2 text-white/80">
                Trusted by the world's leading research institutions
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
