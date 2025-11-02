import React from 'react';
import { FacebookIcon, InstagramIcon, YouTubeIcon, VisaIcon, MastercardIcon, PayPalIcon } from './Icons';

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
    <div>
        <h3 className="text-md font-bold text-gray-800 mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map(link => (
                <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-pink-500 text-sm transition-colors">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const customerServiceLinks = ["Help & Contact", "Shipping & Delivery", "Returns & Exchanges", "FAQ", "Price Guarantee"];
    const aboutLinks = ["About Us", "Sustainability", "Our Brands", "Careers", "Press"];
    const infoLinks = ["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Guides"];

    return (
        <footer className="bg-gray-100 text-gray-700 border-t">
            <div className="container mx-auto px-6 py-12 lg:px-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FooterColumn title="Customer Service" links={customerServiceLinks} />
                    <FooterColumn title="About Jollyroom" links={aboutLinks} />
                    <FooterColumn title="Information" links={infoLinks} />
                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors"><FacebookIcon /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors"><InstagramIcon /></a>
                            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-600 transition-colors"><YouTubeIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-4">
                <div className="container mx-auto px-6 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Jollyroom Clone by Ashijeet. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;