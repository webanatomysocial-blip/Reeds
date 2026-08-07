"use client";
import React, { useState, useEffect } from 'react';
import '@/app/(Css)/Header.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import PillButton from './PillButton';
import { scrollToHash } from '../lib/scroll';

const normalize = (path) => (path.length > 1 ? path.replace(/\/$/, '') : path);

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const lenis = useLenis();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Next's client-side routing never fires a pathname change or a native
  // hashchange event when we're already on the target page (e.g. re-clicking
  // "About us", or jumping between two dropdown links on the same page), so
  // ScrollToTop's route-change effect never runs. Handle that case directly.
  const handleNavLinkClick = (e, href) => {
    const [targetPath, targetHash] = href.split('#');
    if (normalize(targetPath || '/') !== normalize(pathname)) return;

    e.preventDefault();
    const hash = targetHash ? `#${targetHash}` : '';
    window.history.pushState(null, '', href.startsWith('/') ? href : `/${href}`);
    scrollToHash(lenis, hash);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownClick = (e, index, href = "#") => {
    handleNavLinkClick(e, href);
    if (window.innerWidth <= 992) {
      if (href === "#" || !href) {
        e.preventDefault();
      }
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Disappear on transition when scrolled away from top 0
      if (window.scrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`header-section ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-pill">
        
        <div className="header-logo">
          <Link href="/">
            <Image src="/assets/header-logo.avif" alt="Rural Development Society" width={512} height={366} priority />
          </Link>
        </div>

        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="header-links">
            <li className={`nav-item-dropdown ${activeDropdown === 'about' ? 'mobile-dropdown-active' : ''}`}>
              <Link href="/about" className="nav-item" onClick={(e) => handleDropdownClick(e, 'about', '/about')}>
                About us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/about#overview" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/about#overview')}>Overview</Link>
                <Link href="/about#who-we-are" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/about#who-we-are')}>Who We Are</Link>
                <Link href="/about#partners" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/about#partners')}>Partners</Link>
              </div>
            </li>
            <li>
              <Link href="/projects" className="nav-item" onClick={(e) => handleNavLinkClick(e, '/projects')}>Projects</Link>
            </li>
            <li className={`nav-item-dropdown ${activeDropdown === 'whatwedo' ? 'mobile-dropdown-active' : ''}`}>
              <Link href="/what-we-do" className="nav-item" onClick={(e) => handleDropdownClick(e, 'whatwedo', '/what-we-do')}>
                What We Do
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/what-we-do#programs" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/what-we-do#programs')}>Programs</Link>
                <Link href="/what-we-do#locations" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/what-we-do#locations')}>Locations</Link>
                <Link href="/blogs" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/blogs')}>Blogs</Link>
                <Link href="/what-we-do#awards" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/what-we-do#awards')}>Awards</Link>
              </div>
            </li>
            <li className={`nav-item-dropdown ${activeDropdown === 'gallery' ? 'mobile-dropdown-active' : ''}`}>
              <Link href="/gallery" className="nav-item" onClick={(e) => handleDropdownClick(e, 'gallery', '/gallery')}>
                Gallery
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/gallery#photos" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/gallery#photos')}>Photos</Link>
                <Link href="/gallery#media" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/gallery#media')}>Media</Link>
                <Link href="/gallery#annual-report" className="dropdown-link" onClick={(e) => handleNavLinkClick(e, '/gallery#annual-report')}>Annual Report</Link>
              </div>
            </li>
            <li>
              <Link href="/contact" className="nav-item-2" onClick={(e) => handleNavLinkClick(e, '/contact')}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <Link href="#" style={{ textDecoration: 'none' }}>
            <PillButton 
              text="Sponsor a School"
              bg="#fca311"
              color="black"
              arrowBg="white"
              arrowColor="black"
              hoverFillColor="white"
              hoverTextColor="black"
            />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
