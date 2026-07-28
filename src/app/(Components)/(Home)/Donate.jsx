"use client";
import React from 'react';
import '@/app/(Css)/(Home)/Donate.css';

const Donate = () => {
    return (
        <section className="donate-section">
            <div className="donate-container">
                <div className="donate-left">
                    <span className="donate-eyebrow eyebrow-text-white" style={{color: '#f7a000'}}>DONATE TODAY</span>
                    <h2 className="head-text-white">Your gift becomes a village's turning point.</h2>
                    <p className="donate-description" style={{paddingTop:"20px"}}>
                        Your support empowers rural livelihoods, strengthen local institutions, and creates opportunities that allow communities to thrive with dignity, pride and purpose.
                    </p>
                    
                    <div className="donate-bullets">
                        <div className="donate-bullet">
                            <span className="bullet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </span>
                            <p>For Indian Donors: All contributions to REEDS qualify for tax deduction under Section 80G of the Income Tax Act, 1961.</p>
                        </div>
                        <div className="donate-bullet">
                            <span className="bullet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </span>
                            <p>For U.S. Donors: Donations made through our trusted channel partners–CAF America and myriad usa (registered U.S. public charities under Section 501(c)(3))–are eligible for U.S. income tax deduction to the extent permitted by by U.S. law.</p>
                        </div>
                    </div>
                </div>

                <div className="donate-right">
                    <div className="donate-form-card">
                        <h3 className="form-title">Donation Information</h3>
                        <form className="donate-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>First Name*</label>
                                <input type="text" placeholder="Jane" />
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input type="email" placeholder="Careon@framer.com" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="+91 8772 62627" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select a Cause*</label>
                                    <div className="select-wrapper">
                                        <select defaultValue="Education">
                                            <option value="Education">Education</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Emergency Relief">Emergency Relief</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Donation Amount*</label>
                                    <input type="text" placeholder="Enter your amount" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea placeholder="Message..." rows="4"></textarea>
                            </div>

                            <button type="button" className="donate-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Donate;