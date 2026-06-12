"use client"

import React, { useState, useEffect } from 'react'

const nav = [
  { id: 1, name: 'Home',    path: '/' },
  { id: 2, name: 'About',   path: '#about' },
  { id: 3, name: 'Skill',   path: '#skill' },
  { id: 4, name: 'Project', path: '#project' },
  { id: 5, name: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('Home')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 flex justify-center pt-5 transition-all duration-300`}>
      {/* Desktop pill */}
      <div className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-2xl border transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'border-white/8 bg-white/5 backdrop-blur-md'
      }`}>
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.path}
            onClick={() => setActive(item.name)}
            className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              active === item.name
                ? 'text-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {active === item.name && (
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 border border-white/10" />
            )}
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full px-6">
        <span className="text-white font-bold text-base tracking-tight">
          Nares<span style={{ background: 'linear-gradient(to right,#3BF686,#4CA9FF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>wara</span>
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-4 flex flex-col gap-1 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={() => { setActive(item.name); setOpen(false) }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                active === item.name
                  ? 'bg-gradient-to-r from-[#3BF686]/15 to-[#4CA9FF]/15 text-white border border-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar