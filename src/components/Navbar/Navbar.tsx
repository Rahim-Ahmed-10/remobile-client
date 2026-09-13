'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  LogIn, 
  UserPlus, 
  User, 
  LayoutDashboard, 
  LogOut,
  ChevronDown,
  Home as HomeIcon,
  Smartphone,
  Info,
  PhoneCall
} from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Browse Phones', href: '/browse', icon: Smartphone },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  return (
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Premium RM Monogram & Brand Logo */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-xl shadow-blue-500/25 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-slate-950/90 backdrop-blur-xl rounded-[15px] flex items-center justify-center overflow-hidden relative">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20 opacity-60"></div>
                
                {/* RM Text with Live Indicator */}
                <div className="relative flex items-center gap-0.5">
                  <span className="text-base font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-blue-400 drop-shadow-sm">
                    RM
                  </span>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400"></div>
                </div>

              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                Re<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">Mobile</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase mt-1">
                Verified Phones
              </span>
            </div>
          </Link>

          {/* Floating Pill Navigation (Desktop) */}
          <div className="hidden md:flex items-center bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/50 dark:border-slate-700/50'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 ml-0.5"></span>}
                </Link>
              );
            })}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            )}

            {/* Authenticated User Menu (Desktop Only) */}
            {isLoggedIn ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all bg-slate-50 dark:bg-slate-900"
                >
                  <img
                    src="https://github.com/Rahim-Ahmed-10.png"
                    alt="Rahim Ahmed Profile"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/30 flex-shrink-0"
                  />
                  <span className="hidden lg:inline text-xs font-semibold text-slate-700 dark:text-slate-200 pr-1">
                    Rahim
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 mr-1" />
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50">
                    <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Mohammad Rahim Miah</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">rahim.dev@example.com</p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                    >
                      <LayoutDashboard className="w-4 h-4 text-blue-500" />
                      <span>Dashboard</span>
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                    >
                      <User className="w-4 h-4 text-emerald-500" />
                      <span>My Profile</span>
                    </Link>

                    <div className="border-t border-slate-100 dark:border-slate-800/80 mt-1 pt-1">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2.5 rounded-full transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Log In</span>
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setProfileDropdownOpen(false);
              }}
              className="md:hidden p-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-2xl transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          
          {/* Mobile User Profile Section (Top of Menu) */}
          {isLoggedIn && (
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center gap-3 border border-slate-200/60 dark:border-slate-800/60">
              <img
                src="https://github.com/Rahim-Ahmed-10.png"
                alt="Mohammad Rahim Miah"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/30 flex-shrink-0"
              />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Mohammad Rahim Miah</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">rahim.dev@example.com</p>
              </div>
            </div>
          )}

          {/* Navigation Links with Icons */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span>{link.name}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>}
                </Link>
              );
            })}
          </div>

          {/* Mobile User Options & Logout */}
          {isLoggedIn ? (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                <LayoutDashboard className="w-4 h-4 text-blue-500" />
                <span>Dashboard</span>
              </Link>

              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                <User className="w-4 h-4 text-emerald-500" />
                <span>My Profile</span>
              </Link>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 py-3 rounded-xl"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;