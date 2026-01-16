import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e9eff1] dark:border-[#3a3f47] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg
              fill="currentColor"
              viewbox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">
            ScholarlyPublish
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Journals
          </a>
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Ethics
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#e9eff1] dark:bg-[#3a3f47] text-[#101719] dark:text-[#f9fbfb] text-sm font-bold transition-all hover:bg-[#d3e0e4]">
            Login
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-md hover:bg-[#164a5c] transition-all">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
