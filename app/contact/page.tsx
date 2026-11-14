import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Get in touch — Bisma Yaseen',
  description: 'Contact Bisma Yaseen by email or connect on LinkedIn.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="contact-page shell">
          <div className="contact-page-copy">
            <p className="eyebrow"><span className="status-dot"></span> GET IN TOUCH</p>
            <h1>Let&apos;s make<br />something <span>great.</span></h1>
            <p className="contact-page-intro">
              Have a project, opportunity, or just want to say hello? I&apos;d love to hear from you.
            </p>
            <div className="contact-options">
              <a className="contact-option" href="mailto:bismameo10@gmail.com">
                <span className="contact-option-label">EMAIL</span>
                <span className="contact-option-value">bismameo10@gmail.com</span>
                <span className="contact-option-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-option"
                href="https://linkedin.com/in/bisma-yaseen-9360042bb"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-option-label">LINKEDIN</span>
                <span className="contact-option-value">Connect with Bisma</span>
                <span className="contact-option-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
            <Link className="text-link contact-home-link" href="/">
              Back to home <span aria-hidden="true">←</span>
            </Link>
          </div>
          <div className="contact-page-orbit" aria-hidden="true"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
