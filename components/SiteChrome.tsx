"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Mail, Menu, MessageCircle, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="BrightBytes Solutions home">
        <Image
          className="brand-logo"
          src="/brightbytes-logo.png"
          alt="BrightBytes Solutions — Smart Systems. Real Growth."
          width={667}
          height={227}
          priority
        />
      </Link>
      <nav
        className={menuOpen ? "nav-links nav-open" : "nav-links"}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="button button-small"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s talk
        </Link>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-branding">
          <Link className="brand" href="/" aria-label="BrightBytes Solutions home">
            <Image
              className="brand-logo"
              src="/brightbytes-logo.png"
              alt="BrightBytes Solutions — Smart Systems. Real Growth."
              width={667}
              height={227}
            />
          </Link>
          <p>Smart systems. Real growth.</p>
        </div>
        <div className="footer-contact-list">
          <a
            className="footer-contact-link"
            href="mailto:bright.bytesolution@gmail.com"
          >
            <Mail size={17} />
            <span>bright.bytesolution@gmail.com</span>
          </a>
          <a
            className="footer-contact-link"
            href="https://wa.me/254713510790"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            <span>0713 510 790 <small>WhatsApp</small></span>
          </a>
          <a
            className="footer-contact-link"
            href="https://www.brightbytes.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <Globe2 size={17} />
            <span>www.brightbytes.co.ke</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BrightBytes Solutions</span>
        <span>Nairobi, Kenya</span>
      </div>
    </footer>
  );
}
