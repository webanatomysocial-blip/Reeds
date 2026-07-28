"use client";
import React from 'react';
import '@/app/(Css)/Footer.css';
import Link from 'next/link';
import PillButton from './PillButton';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Gallery</Link></li>
            <li><Link href="#">Programs</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Other Links</h4>
          <ul className="footer-links">
            <li><Link href="#">Blogs</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Error 404</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-links">
            <li><a href="#" target="_blank">YouTube</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">X/Twitter</a></li>
            <li><a href="#" target="_blank">Facebook</a></li>
          </ul>
        </div>

        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Contact us</h4>
          <div className="footer-contact-info">
            <p className="footer-address">
              C-206,Vijaya Hills, 11-4-646, AC Guards,<br/>
              Hyderabad, Telangana India - 500004
            </p>
            <div className="footer-contact-row">
              <a href="mailto:info@reeds.in" className="footer-contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@reeds.in
              </a>
              <a href="tel:+919505051989" className="footer-contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 9505051989
              </a>
            </div>
          </div>
          <Link href="#" style={{textDecoration: 'none'}}>
            <PillButton 
              text="Contact us"
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

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src="/assets/reeds.avif" alt="Rural Development Society" className="footer-logo" />
          <p className="footer-cert">ISO Certified under 9001:2015.</p>
        </div>

        <div className="footer-bottom-center">
          <span className="designed-by-text">Designed by</span>
          <a href="https://webanatomy.in" target="_blank" rel="noopener noreferrer" className="wa-link">
            <img src="/assets/WA.avif" alt="Web Anatomy" className="wa-logo" />
            <span className="wa-text">Web Anatomy</span>
          </a>
        </div>

        <div className="footer-bottom-right">
          <p className="copyright-text">2026 © REED's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
