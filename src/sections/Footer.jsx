import React from "react";

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-4 border-t border-black-300">
            <div className="container mx-auto flex justify-between items-center flex-wrap gap-5">
                {/* Legal Links */}
                <div className="text-white-500 flex gap-2">
                    <a href="/terms" className="hover:text-white transition-colors">
                        Terms and conditions
                    </a>
                    <span>|</span>
                    <a href="/privacy" className="hover:text-white transition-colors">
                        Privacy policy
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-white-500">
                    <p>Copyright {new Date().getFullYear()} all rights reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;