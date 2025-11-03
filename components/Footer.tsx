import React from 'react';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './Icons';

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li>
        <a href="#" className="text-white/90 hover:underline text-sm leading-6">{children}</a>
    </li>
);

const Footer = () => {
    const leftLinks = [
        'Customer Service',
        'Purchase terms',
        'My invoices',
        'Right of withdrawal, return and guarantee',
        'Our responsibility',
        'Vacancies',
    ];

    const rightLinks = [
        'Delivery',
        'Shop and pay',
        'Integrity',
        'Cookie settings',
        'Our stores',
        'About us',
    ];

    return (
        <footer className="relative bg-[#5b1233] text-white overflow-hidden">
            {/* decorative large rotated logo on the right */}
            <div className="pointer-events-none absolute -right-20 -top-12 opacity-20 transform rotate-12 text-[220px] leading-none font-extrabold text-[#ff6aa3] select-none">
                jollyroom
            </div>

            <div className="container mx-auto px-6 py-16 lg:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* left: logo + two columns of links (span 7) */}
                    <div className="lg:col-span-7">
                        <div className="flex items-start gap-8">
                            <div className="w-1/3 min-w-[220px]">
                                <div className="text-5xl font-extrabold text-pink-400">jollyroom.</div>
                            </div>

                            <div className="flex-1 grid grid-cols-2 gap-6">
                                <ul className="space-y-4">
                                    {leftLinks.map(l => <FooterLink key={l}>{l}</FooterLink>)}
                                </ul>
                                <ul className="space-y-4">
                                    {rightLinks.map(l => <FooterLink key={l}>{l}</FooterLink>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* right: newsletter card (span 5) */}
                    <div className="lg:col-span-5">
                        <div className="bg-pink-200 text-[#6b1233] rounded-md p-6 shadow-lg max-w-full lg:ml-auto">
                            <h4 className="font-bold text-lg mb-3">Newsletter</h4>
                            <p className="text-sm mb-4">Become a newsletter subscriber and take advantage of exclusive benefits!</p>

                            <form className="flex gap-0 mb-3">
                                <input aria-label="Email" placeholder="Write your email address here..." className="flex-1 px-4 py-3 rounded-l-md border border-pink-300 bg-white text-sm outline-none" />
                                <button type="submit" className="bg-[#c42b6f] text-white px-4 rounded-r-md">→</button>
                            </form>

                            <div className="flex items-start gap-3 text-sm">
                                <input id="news-consent" type="checkbox" className="mt-1" />
                                <label htmlFor="news-consent" className="text-sm">Yes, thank you! I would like to receive newsletters with personal discounts, offers and news and approve the processing of my personal data as below.</label>
                            </div>

                            <p className="mt-3 text-xs text-[#6b1233]/80">Our newsletters use cookies and similar technologies to measure the degree of opening and our customers' interests in our offers, to provide personalized advertisements and content marketing, and for statistical purposes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6 lg:px-32 text-center text-sm text-white/80">
                    <p>At Jollyroom.se you will find a large selection of products for families with children. With us, you shop quickly, easily and always at good prices.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;