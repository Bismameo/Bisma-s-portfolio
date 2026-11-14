'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const sectionLink = (section: string) => pathname === '/' ? `#${section}` : `/#${section}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href={pathname === '/' ? '#home' : '/'} aria-label="Bisma Yaseen, home">
          BY<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={toggleMenu}
        >
          <span className="sr-only">{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`} id="nav-links">
          <Link href={sectionLink('about')} onClick={closeMenu}>About</Link>
          <Link href={sectionLink('work')} onClick={closeMenu}>Projects</Link>
          <Link href={sectionLink('skills')} onClick={closeMenu}>Skills</Link>
          <Link className="nav-contact" href="/contact" onClick={closeMenu}>
            Let's talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}