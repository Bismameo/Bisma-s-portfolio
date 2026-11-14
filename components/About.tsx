export default function About() {
  return (
    <section className="intro-section section-pad" id="about">
      <div className="shell intro-grid">
        <p className="eyebrow section-index">01 / A LITTLE ABOUT ME</p>
        <div>
          <h2 className="section-heading">
            Curious by nature.<br /><span>Developer by choice.</span>
          </h2>
          <p className="intro-text">
            I'm an aspiring frontend developer focused on creating clean interfaces that feel
            intuitive on every screen. I enjoy learning by building — from playful JavaScript
            games to polished React and Next.js experiences — and bring a detail-oriented,
            collaborative mindset to every project.
          </p>
          <a
            className="text-link dark-link"
            href="https://github.com/Bismameo"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-note">
          <span className="note-mark">"</span>
          <p>Good design makes the next step feel natural.</p>
          <span className="note-caption">A PRINCIPLE I BUILD BY</span>
        </div>
      </div>
    </section>
  );
}