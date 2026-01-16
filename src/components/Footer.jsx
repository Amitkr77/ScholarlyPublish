import React from 'react'

export default function Footer() {
  return (
   <footer className="w-full border-t border-[#e9eff1] dark:border-[#3a3f47] pt-20 pb-10 px-6">
        <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewbox="0 0 48 48">
                                <path
                                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z">
                                </path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-extrabold tracking-tight">ScholarlyPublish</h2>
                    </div>
                    <p className="text-[#57818e] text-sm leading-relaxed">A global leader in independent academic
                        publishing, providing platforms for groundbreaking research across all disciplines.</p>
                    <div className="flex gap-4">
                        <a className="size-8 rounded-full border border-[#d3e0e4] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                            href="#">
                            <i className="material-symbols-outlined !text-sm">share</i>
                        </a>
                        <a className="size-8 rounded-full border border-[#d3e0e4] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                            href="#">
                            <i className="material-symbols-outlined !text-sm">alternate_email</i>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-[#57818e]">Platform</h4>
                    <ul className="flex flex-col gap-3 text-sm font-medium">
                        <li><a className="hover:text-primary transition-colors" href="#">Journals List</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Submission Portal</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Reviewer Guidelines</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Impact Factors</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-[#57818e]">Resources</h4>
                    <ul className="flex flex-col gap-3 text-sm font-medium">
                        <li><a className="hover:text-primary transition-colors" href="#">Open Access Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Publication Ethics</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Author Services</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Institutional Access</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-[#57818e]">Newsletter</h4>
                    <p className="text-sm text-[#57818e]">Stay updated with the latest calls for papers.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            className="h-10 px-3 rounded-lg border-[#d3e0e4] dark:border-[#3a3f47] dark:bg-background-dark text-sm outline-none focus:border-primary"
                            placeholder="Your academic email" type="email" />
                        <button
                            className="h-10 bg-primary text-white text-xs font-bold rounded-lg uppercase">Subscribe</button>
                    </div>
                </div>
            </div>
            <div
                className="border-t border-[#e9eff1] dark:border-[#3a3f47] pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xs text-[#57818e]">© 2025 ScholarlyPublish Platform. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a className="text-xs text-[#57818e] hover:text-primary" href="#">Privacy Policy</a>
                    <a className="text-xs text-[#57818e] hover:text-primary" href="#">Terms of Service</a>
                    <p className="text-xs font-bold text-[#101719] dark:text-[#f9fbfb]">Developed by Alomonx Technology Pvt.
                        Ltd.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
