export default function Skills() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="shell skills-grid">
        <div>
          <p className="eyebrow section-index">03 / MY TOOLKIT</p>
          <h2 className="section-heading">The tools behind<br /><span>the experience.</span></h2>
        </div>
        <div className="skills-content">
          <div className="skill-group">
            <h3>FRONTEND DEVELOPMENT</h3>
            <div className="skill-list">
              <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>TypeScript</span>
              <span>React.js</span><span>Next.js</span><span>Bootstrap</span><span>Responsive design</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>TOOLS & PRODUCTIVITY</h3>
            <div className="skill-list">
              <span>Microsoft Word</span><span>Microsoft Excel</span><span>PowerPoint</span>
              <span>GitHub</span><span>Vercel</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>HOW I WORK</h3>
            <div className="skill-list">
              <span>Problem solving</span><span>Attention to detail</span><span>Continuous learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}