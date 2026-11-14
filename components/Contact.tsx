'use client';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner">
        <p className="eyebrow">05 / YOUR NEXT GREAT IDEA</p>
        <h2>Let's make it<br /><span>work beautifully.</span></h2>
        <p>I'm excited to keep learning, contribute to a team, and build useful things for the web.</p>
        <a className="button button-light" href="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-orbit" aria-hidden="true"></div>
      </div>
    </section>
  );
}