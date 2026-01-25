// app/signup/page.tsx  (or wherever your page lives)
// Recommended dependencies:
// npm install react-hook-form @hookform/resolvers zod
// Optional (for icons): npm install lucide-react  (or keep material-symbols)

"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ── Validation Schema ────────────────────────────────────────────────
const formSchema = z.object({
  role: z.enum(["Author", "Reviewer", "Editor"], {
    required_error: "Please select your primary role",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .refine(
      (val) =>
        /@(?:[a-z0-9-]+\.)+(?:edu|ac\.|research|university|institute)/i.test(
          val,
        ),
      {
        message:
          "Institutional / academic email preferred (e.g. .edu, .ac.uk, university domain)",
      },
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  affiliation: z.string().min(3, "Affiliation is required"),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the Terms of Service and Privacy Policy",
    }),
  }),
});

// type FormValues = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "Author",
      terms: false,
    },
    mode: "onChange", // real-time validation feedback
  });

  const selectedRole = watch("role");
  const password = watch("password") || "";

  // Password strength calculation (simple)
  const getPasswordStrength = () => {
    if (password.length < 8) return { width: "10%", color: "bg-red-400" };
    if (
      password.length < 12 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    )
      return { width: "40%", color: "bg-orange-400" };
    return { width: "100%", color: "bg-green-500" };
  };

  const strength = getPasswordStrength();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call (replace with fetch / axios / auth library)
      console.log("Submitting signup data:", data);
      await new Promise((r) => setTimeout(r, 1200)); // fake delay

      alert("Account created successfully! (demo)");
      // → redirect('/dashboard') or similar
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <main className="max-w-[1000px] mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        {/* Page Heading */}
        <div className="w-full mb-10 text-center md:text-left">
          <h1 className="text-[#101719] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
            Join our global network of academic excellence.
          </h1>
          <p className="text-[#57818e] dark:text-slate-400 text-lg max-w-2xl">
            Create your account to submit manuscripts, participate in rigorous
            peer reviews, and manage high-impact editorial workflows.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 items-start">
          {/* ── Form ─────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-3/5 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e9eff1] dark:border-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Role Selection */}
              <div className="mb-8">
                <h3 className="text-[#101719] dark:text-white text-xl font-bold mb-4">
                  Select your primary role
                </h3>
                <div className="flex h-12 w-full items-center justify-center rounded-xl bg-[#f0f4f5] dark:bg-slate-900 p-1.5">
                  {["Author", "Reviewer", "Editor"].map((role) => (
                    <label
                      key={role}
                      className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-4 transition-all text-sm font-semibold ${
                        selectedRole === role
                          ? "bg-primary text-white shadow-sm"
                          : "text-[#57818e] dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      {role}
                      <input
                        type="radio"
                        value={role}
                        {...register("role")}
                        className="sr-only" // better a11y than invisible
                      />
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="space-y-6">
                <h3 className="text-[#101719] dark:text-white text-lg font-bold border-b border-[#e9eff1] dark:border-slate-700 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="text-[#101719] dark:text-slate-300 text-sm font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      {...register("fullName")}
                      className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50"
                      placeholder="e.g. Dr. Jane Smith"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[#101719] dark:text-slate-300 text-sm font-semibold flex items-center gap-1"
                    >
                      Institutional Email
                      <span
                        className="material-symbols-outlined text-xs text-primary cursor-help"
                        title="University or Research Lab email preferred"
                      >
                        info
                      </span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50"
                      placeholder="jsmith@university.edu"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="password"
                      className="text-[#101719] dark:text-slate-300 text-sm font-semibold"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50 pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#57818e] dark:text-slate-400"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>

                    {/* Password strength bar */}
                    <div className="mt-2 h-1 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${strength.color}`}
                        style={{ width: strength.width }}
                      />
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="affiliation"
                      className="text-[#101719] dark:text-slate-300 text-sm font-semibold"
                    >
                      Primary Affiliation
                    </label>
                    <input
                      id="affiliation"
                      {...register("affiliation")}
                      className="form-input w-full rounded-lg border-[#d3e0e4] dark:border-slate-600 bg-background-light dark:bg-slate-900 h-12 px-4 text-base placeholder:text-[#57818e]/50"
                      placeholder="e.g. Stanford University"
                    />
                    {errors.affiliation && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.affiliation.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 space-y-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register("terms")}
                      className="mt-1 rounded border-[#d3e0e4] text-primary focus:ring-primary h-5 w-5"
                    />
                    <span className="text-sm text-[#57818e] dark:text-slate-400 leading-tight">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary font-semibold underline underline-offset-2"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-primary font-semibold underline underline-offset-2"
                      >
                        Privacy Policy
                      </a>
                      , including data usage for peer review and editorial
                      matching.
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {errors.terms.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full h-14 rounded-lg text-lg font-bold transition-all shadow-lg shadow-primary/20 ${
                      isSubmitting || !isValid
                        ? "bg-primary/60 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90"
                    } text-white`}
                  >
                    {isSubmitting
                      ? "Creating Account..."
                      : "Create Professional Account"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[#e9eff1] dark:border-slate-700 text-center">
              <p className="text-[#57818e] dark:text-slate-400">
                Already have an account?{" "}
                <a href="#" className="text-primary font-bold">
                  Log in here
                </a>
              </p>
            </div>
          </div>

          {/* Right side supplemental info remains mostly unchanged */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {/* Trust Badge */}
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  verified_user
                </span>
                <h4 className="font-bold text-[#101719] dark:text-white">
                  Institutional Security
                </h4>
              </div>
              <p className="text-sm text-[#57818e] dark:text-slate-400 leading-relaxed mb-4">
                Our platform is COPE-compliant and utilizes encrypted data
                handling for all double-blind peer reviews. Your affiliation
                data is used to prevent conflicts of interest.
              </p>
              <div className="flex flex-wrap gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="h-8 w-20 bg-gray-300 dark:bg-slate-600 rounded flex items-center justify-center text-[10px] font-bold">
                  ORCID
                </div>
                <div className="h-8 w-20 bg-gray-300 dark:bg-slate-600 rounded flex items-center justify-center text-[10px] font-bold">
                  CROSSREF
                </div>
                <div className="h-8 w-20 bg-gray-300 dark:bg-slate-600 rounded flex items-center justify-center text-[10px] font-bold">
                  COPE
                </div>
              </div>
            </div>

            {/* Role Info Card */}
            <div className="bg-white dark:bg-slate-800 border border-[#e9eff1] dark:border-slate-700 rounded-xl p-6">
              <h4 className="font-bold text-[#101719] dark:text-white mb-4">
                Why select a role?
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">
                    check_circle
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#101719] dark:text-slate-200">
                      Authors
                    </p>
                    <p className="text-xs text-[#57818e] dark:text-slate-400">
                      Submit manuscripts and track publication progress.
                    </p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1">
                    check_circle
                  </span>
                  <div>
                    <p class="text-sm font-bold text-[#101719] dark:text-slate-200">
                      Reviewers
                    </p>
                    <p class="text-xs text-[#57818e] dark:text-slate-400">
                      Receive assignments based on research expertise.
                    </p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1">
                    check_circle
                  </span>
                  <div>
                    <p class="text-sm font-bold text-[#101719] dark:text-slate-200">
                      Editors
                    </p>
                    <p class="text-xs text-[#57818e] dark:text-slate-400">
                      Manage journal volumes and coordinate peer reviews.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gradient decoration unchanged */}
            <div className="relative overflow-hidden rounded-xl h-48 bg-gradient-to-br from-primary to-[#2a84a3] p-8 flex flex-col justify-end text-white">
              <div className="absolute top-[-20px] right-[-20px] opacity-20">
                <span className="material-symbols-outlined text-[160px]">
                  auto_stories
                </span>
              </div>
              <p className="text-xl font-black leading-tight">
                Elevating Global <br />
                Research Integrity.
              </p>
              <p className="text-xs mt-2 text-white/80">
                Powering 4,000+ Journals Worldwide
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
