'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot"></span> FRONTEND DEVELOPER · KARACHI, PK
        </p>
        <h1>
          Building thoughtful<br />
          web experiences<span className="accent">.</span>
        </h1>
        <p className="hero-intro">
          Hi, I'm <strong>Bisma Yaseen</strong> — a web development graduate who loves turning
          ideas into responsive, user-friendly websites.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <Link className="text-link" href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-meta">
          <span>Currently growing as a frontend developer</span>
          <span className="meta-line"></span>
          <span>Open to opportunities</span>
        </div>
      </div>
      <div className="hero-art">
        <Image
          className="hero-profile"
          src="/profile-picture.png"
          alt="Bisma Yaseen"
          width={768}
          height={768}
          priority
        />
      </div>
      <a className="scroll-cue" href="#about">
        <span></span> SCROLL TO EXPLORE
      </a>
    </section>
  );
}