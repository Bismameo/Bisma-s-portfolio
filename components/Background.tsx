export default function Background() {
  return (
    <section className="background-section section-pad" id="background">
      <div className="shell background-grid">
        <div>
          <p className="eyebrow section-index">04 / THE BACKGROUND</p>
          <h2 className="section-heading">A foundation<br /><span>for what's next.</span></h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-date">2025 — PRESENT</span>
            <div>
              <h3>Frontend Web Developer</h3>
              <p>Building responsive web applications and strengthening my skills in modern frontend development.</p>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">EDUCATION</span>
            <div>
              <h3>Bachelor of Commerce (B.Com)</h3>
              <p>University of Karachi</p>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">EDUCATION</span>
            <div>
              <h3>Intermediate — Commerce</h3>
              <p>Private Board</p>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">EDUCATION</span>
            <div>
              <h3>Matriculation — Science</h3>
              <p>Government Girls Secondary School</p>
            </div>
          </article>
        </div>
      </div>
      <div className="shell certification-row">
        <p className="eyebrow">CERTIFICATIONS</p>
        <div className="cert-list">
          <span>Certificate in Information Technology</span>
          <span>English Language Course · Infotics Institute</span>
          <span>Certificate in Digital Marketing</span>
        </div>
        <p className="eyebrow language-note">LANGUAGES <span>English · Course completed</span></p>
      </div>
    </section>
  );
}