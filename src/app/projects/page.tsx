'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, startTransition } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ProjectsPage() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.title = 'Projects | Meridianix';
    const saved = localStorage.getItem('theme') || 'dark';
    startTransition(() => setTheme(saved));
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)] px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/img/pfp.jpg" alt="Meridianix" width={32} height={32} className="rounded-full object-cover aspect-square" />
            <span className="text-lg font-medium text-[var(--header-text)]">Meridianix</span>
          </Link>
          <nav className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-1 cursor-pointer text-[var(--icon-color)] hover:text-[var(--foreground)] transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-base text-[var(--header-text)] hover:text-[var(--foreground)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" className="flex-shrink-0">
                <rect x="5" y="2" width="6" height="2" fill="#6b6b75" />
                <rect x="4" y="4" width="8" height="2" fill="#6b6b75" />
                <rect x="3" y="6" width="2" height="2" fill="#6b6b75" />
                <rect x="11" y="6" width="2" height="2" fill="#6b6b75" />
                <rect x="5" y="6" width="6" height="2" fill="#f97316" />
                <rect x="6" y="6" width="2" height="2" fill="#fff" className="ninja-eye" />
                <rect x="10" y="6" width="1" height="2" fill="#fff" className="ninja-eye" />
                <rect x="4" y="8" width="8" height="2" fill="#6b6b75" />
                <rect x="5" y="10" width="6" height="2" fill="#6b6b75" />
                <rect x="4" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-left" />
                <rect x="10" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-right" />
              </svg>
              Projects
            </Link>
          </nav>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[340px_1fr]">
        {/* Left Sidebar - Desktop only */}
        <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto border-r border-[var(--border)] bg-[var(--background)]">
          <div className="p-6 pl-12 xl:pl-20">
            {/* Branding */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/img/pfp.jpg" alt="Meridianix" width={32} height={32} className="rounded-full object-cover aspect-square" />
                <span className="text-xl font-medium text-[var(--header-text)]">Meridianix</span>
              </Link>
              <button
                onClick={toggleTheme}
                className="relative group p-2 rounded-md cursor-pointer text-[var(--desktop-icon)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)] transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </span>
              </button>
            </div>

            <div className="border-t border-[var(--border)] pt-6 pb-6 border-b">
              <p className="text-[16px] text-[var(--header-text)] mb-2 px-3">About Me</p>
              <p className="text-[15px] text-[var(--foreground)] px-3 leading-relaxed">
                I&apos;m <a href="https://twitter.com/meridianix" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Meridianix</a>, software engineer and open-source creator. This is where I tinker and ship in public.
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1 pt-6">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-3 py-2 text-[var(--foreground)] bg-[var(--card-bg)] rounded-md transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 16 16" className="flex-shrink-0">
                  <rect x="5" y="2" width="6" height="2" fill="#6b6b75" />
                  <rect x="4" y="4" width="8" height="2" fill="#6b6b75" />
                  <rect x="3" y="6" width="2" height="2" fill="#6b6b75" />
                  <rect x="11" y="6" width="2" height="2" fill="#6b6b75" />
                  <rect x="5" y="6" width="6" height="2" fill="#f97316" />
                  <rect x="6" y="6" width="2" height="2" fill="#fff" className="ninja-eye" />
                  <rect x="10" y="6" width="1" height="2" fill="#fff" className="ninja-eye" />
                  <rect x="4" y="8" width="8" height="2" fill="#6b6b75" />
                  <rect x="5" y="10" width="6" height="2" fill="#6b6b75" />
                  <rect x="4" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-left" />
                  <rect x="10" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-right" />
                </svg>
                Projects
              </Link>
            </nav>

            {/* Reach Me */}
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <p className="text-[16px] text-[var(--header-text)] mb-2 px-3">Reach Me</p>
              <nav className="space-y-1">
                <a
                  href="https://twitter.com/meridianix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-[var(--sidebar-link)] hover:text-[var(--sidebar-link-hover)] hover:bg-[var(--card-bg)] rounded-md transition-all"
                >
                  Twitter
                </a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-h-screen bg-[var(--background)]">
          {/* Hero */}
          <div className="relative py-8 lg:pt-12 lg:pb-8 px-6 lg:pl-20 lg:pr-12 bg-[var(--background)]">
            <div className="relative animate-slide-up">
              <div className="flex items-center gap-4 mb-4">
                <svg width="48" height="48" viewBox="0 0 16 16" className="flex-shrink-0">
                  <rect x="5" y="2" width="6" height="2" fill="#6b6b75" />
                  <rect x="4" y="4" width="8" height="2" fill="#6b6b75" />
                  <rect x="3" y="6" width="2" height="2" fill="#6b6b75" />
                  <rect x="11" y="6" width="2" height="2" fill="#6b6b75" />
                  <rect x="5" y="6" width="6" height="2" fill="#f97316" />
                  <rect x="6" y="6" width="2" height="2" fill="#fff" className="ninja-eye" />
                  <rect x="10" y="6" width="1" height="2" fill="#fff" className="ninja-eye" />
                  <rect x="4" y="8" width="8" height="2" fill="#6b6b75" />
                  <rect x="5" y="10" width="6" height="2" fill="#6b6b75" />
                  <rect x="4" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-left" />
                  <rect x="10" y="12" width="2" height="2" fill="#6b6b75" className="ninja-leg-right" />
                </svg>
                <h1 className="text-3xl lg:text-5xl font-medium tracking-tight text-[var(--header-text)]">
                  Projects
                </h1>
              </div>
              <p className="text-xl lg:text-[19px] text-[var(--foreground)] leading-relaxed">Open-source projects I&apos;ve built. Mostly programming in English now.</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:py-6 lg:pl-20 lg:pr-12">
            <div className="max-w-3xl">
              {/* Project Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-5 animate-fade-in transition-colors duration-200 hover:border-[var(--accent-subtle)]">
                  <h3 className="text-[17px] mt-1 mb-2">
                    <a href="https://github.com/meridianix/clawdbot-session-pruner" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium hover:underline">
                      Clawdbot Session Pruner
                    </a>
                  </h3>
                  <p className="text-[15px] text-[var(--card-text)] leading-relaxed mb-3">
                    Trims bloated JSONL session files for Claude Code.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">Python</span>
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">OpenClaw</span>
                    <a href="https://github.com/meridianix/clawdbot-session-pruner" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded hover:border-[var(--accent-subtle)]">Source</a>
                  </div>
                </div>

                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-5 animate-fade-in transition-colors duration-200 hover:border-[var(--accent-subtle)]">
                  <h3 className="text-[17px] mt-1 mb-2">
                    <a href="https://github.com/meridianix/moltbot-preflight" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium hover:underline">
                      Moltbot Preflight
                    </a>
                  </h3>
                  <p className="text-[15px] text-[var(--card-text)] leading-relaxed mb-3">
                    Security scanner for Moltbot configs.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">Python</span>
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">OpenClaw</span>
                    <a href="https://github.com/meridianix/moltbot-preflight" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded hover:border-[var(--accent-subtle)]">Source</a>
                  </div>
                </div>

                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-5 animate-fade-in transition-colors duration-200 hover:border-[var(--accent-subtle)]">
                  <h3 className="text-[17px] mt-1 mb-2">
                    <a href="https://github.com/meridianix/moltbot-spend-guard" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium hover:underline">
                      Moltbot Spend Guard
                    </a>
                  </h3>
                  <p className="text-[15px] text-[var(--card-text)] leading-relaxed mb-3">
                    Tracks and caps Moltbot spending in real-time.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">TypeScript</span>
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">OpenClaw</span>
                    <a href="https://github.com/meridianix/moltbot-spend-guard" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded hover:border-[var(--accent-subtle)]">Source</a>
                  </div>
                </div>

                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-5 animate-fade-in transition-colors duration-200 hover:border-[var(--accent-subtle)]">
                  <h3 className="text-[17px] mt-1 mb-2">
                    <a href="https://github.com/meridianix/meridianix.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium hover:underline">
                      meridianix.io
                    </a>
                  </h3>
                  <p className="text-[15px] text-[var(--card-text)] leading-relaxed mb-3">
                    Source code for this website.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded">TypeScript</span>
                    <a href="https://github.com/meridianix/meridianix.io" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 text-[14px] bg-transparent border border-[#3a3a3a] text-[var(--header-text)] rounded hover:border-[var(--accent-subtle)]">Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
