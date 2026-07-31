"use client";
import React, { useState, useEffect } from 'react';
import '@/app/(Css)/Header.css';
import Link from 'next/link';
import PillButton from './PillButton';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownClick = (e, index, href = "#") => {
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
            <img src="/assets/header-logo.avif" alt="Rural Development Society" />
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
                <Link href="#" className="dropdown-link">Overview</Link>
                <Link href="#" className="dropdown-link">Who We Are</Link>
                <Link href="#" className="dropdown-link">Partners</Link>
              </div>
            </li>
            <li>
              <Link href="/projects" className="nav-item">Projects</Link>
            </li>
            <li className={`nav-item-dropdown ${activeDropdown === 'whatwedo' ? 'mobile-dropdown-active' : ''}`}>
              <Link href="/what-we-do" className="nav-item" onClick={(e) => handleDropdownClick(e, 'whatwedo', '/what-we-do')}>
                What We Do
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="#" className="dropdown-link">Initiatives</Link>
                <Link href="#" className="dropdown-link">Impact</Link>
              </div>
            </li>
            <li className={`nav-item-dropdown ${activeDropdown === 'gallery' ? 'mobile-dropdown-active' : ''}`}>
              <Link href="/gallery" className="nav-item" onClick={(e) => handleDropdownClick(e, 'gallery', '/gallery')}>
                Gallery
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="#" className="dropdown-link">Photos</Link>
                <Link href="#" className="dropdown-link">Videos</Link>
              </div>
            </li>
            <li>
              <Link href="/contact" className="nav-item-2">Contact</Link>
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
