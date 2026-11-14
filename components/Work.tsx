'use client';

const projects = [
  {
    id: 'veyron',
    title: "Veyron — Men's Clothing",
    description: 'A refined storefront concept with responsive layouts and reusable components.',
    tags: ['Next.js', 'React', 'CSS'],
    url: 'https://next-js-veyron-men-s-cloth.vercel.app',
    visualClass: 'visual-veyron',
    visualContent: (
      <>
        <span className="visual-index">01 — E-COMMERCE</span>
        <span className="veyron-word">VEYRON<span> / STUDIO</span></span>
        <span className="visual-caption">MODERN MENSWEAR · EST. 2025</span>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
    isLarge: true,
  },
  {
    id: 'flowtask',
    title: 'FlowTask — Todo App',
    description: 'A simple task manager with CRUD features and persistent local storage.',
    tags: ['JavaScript', 'Local storage'],
    url: 'https://flowwtask.netlify.app',
    visualClass: 'visual-flow',
    visualContent: (
      <>
        <span className="visual-index">02 — PRODUCTIVITY</span>
        <div className="flow-window">
          <div className="window-top"><span></span><span></span><span></span><b>flowtask</b></div>
          <div className="flow-body">
            <span className="flow-kicker">MONDAY, 9 JUNE</span>
            <strong>Make room<br />for what matters.</strong>
            <span className="flow-task"><i>✓</i> Plan the week <small>DONE</small></span>
            <span className="flow-task"><i></i> Ship something good <small>2:00 PM</small></span>
          </div>
        </div>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'planet-defense',
    title: 'Planet Defense',
    description: 'A browser-based space game with movement, enemies, collisions, and scoring.',
    tags: ['JavaScript', 'Game logic'],
    url: 'https://planetdefensegame.netlify.app',
    visualClass: 'visual-planet',
    visualContent: (
      <>
        <span className="visual-index">03 — INTERACTIVE</span>
        <div className="space-scene">
          <span className="star star-a"></span><span className="star star-b"></span><span className="star star-c"></span>
          <span className="planet"></span>
          <span className="space-ship">▲</span>
          <span className="laser"></span>
          <span className="enemy">✦</span>
        </div>
        <span className="space-title">PLANET<br /><b>DEFENSE</b></span>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'nexus',
    title: 'Nexus — Business Landing Page',
    description: 'A modern business site with responsive sections, smooth navigation, and motion.',
    tags: ['Bootstrap', 'JavaScript', 'CSS'],
    url: 'https://delicate-hamster-7e29a0.netlify.app',
    visualClass: 'visual-nexus',
    visualContent: (
      <>
        <span className="visual-index">04 — BRAND & WEB</span>
        <div className="nexus-orb"></div>
        <span className="nexus-name">nexus<span>®</span></span>
        <span className="nexus-copy">Ideas into<br />what's next.</span>
        <span className="nexus-cta">LET'S BUILD SOMETHING ↗</span>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
    isLarge: true,
  },
  {
    id: 'zenith',
    title: 'Zenith — Landing Page',
    description: 'A crisp, responsive page with semantic markup and considered interactions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://musical-kringle-67fa1c.netlify.app',
    visualClass: 'visual-zenith',
    visualContent: (
      <>
        <span className="visual-index">05 — LANDING PAGE</span>
        <div className="zenith-sun"></div>
        <span className="zenith-type">Find your<br /><i>higher</i> ground.</span>
        <span className="zenith-bottom">ZENITH / YOUR NEXT CHAPTER</span>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'expressbook',
    title: 'Expressbook',
    description: 'A book-focused React application built with reusable UI components.',
    tags: ['React', 'JavaScript', 'Vercel'],
    url: 'https://react-book-project-flame.vercel.app',
    visualClass: 'visual-expressbook',
    visualContent: (
      <>
        <span className="visual-index">06 — REACT APP</span>
        <div className="book-stack">
          <span className="book book-back"></span>
          <span className="book book-mid"></span>
          <span className="book book-front"><i>EXPRESS<br />YOURSELF.</i><b>EXPRESSBOOK</b></span>
        </div>
        <span className="book-caption">A GOOD BOOK TAKES YOU SOMEWHERE.</span>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'fitness-tracker',
    title: 'CodeAlpha Fitness Tracker',
    description: 'A fitness tracking application with workout logging, progress tracking, and goal management.',
    tags: ['React', 'JavaScript', 'Vercel'],
    url: 'https://codealpha-fitnesstrackerapp.vercel.app',
    visualClass: 'visual-fitness',
    visualContent: (
      <>
        <span className="visual-index">07 — FITNESS APP</span>
        <div className="fitness-visual">
          <div className="fitness-card">
            <span className="fitness-icon">💪</span>
            <span className="fitness-title">FITNESS<br /><b>TRACKER</b></span>
            <span className="fitness-subtitle">Track. Train. Transform.</span>
          </div>
        </div>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'language-learning',
    title: 'Language Learning App',
    description: 'An interactive application for practicing and building language skills.',
    tags: ['React', 'JavaScript', 'Vercel'],
    url: 'https://codealpha-languagelearningapp-ls1d.vercel.app',
    visualClass: 'visual-language',
    visualContent: (
      <>
        <span className="visual-index">08 — LEARNING APP</span>
        <div className="language-visual">
          <div className="language-card">
            <span className="language-kicker">DAILY PRACTICE · LESSON 04</span>
            <strong>Hola<span>.</span></strong>
            <span className="language-translation">Hello <i>·</i> Spanish</span>
            <div className="language-progress"><span></span></div>
            <span className="language-progress-label">YOUR NEXT WORD IS ONE STEP AWAY</span>
          </div>
          <span className="language-bubble">Aa</span>
          <span className="language-spark">✳</span>
        </div>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'flashcard-app',
    title: 'Flashcard App',
    description: 'A flashcard application for reviewing concepts and reinforcing learning.',
    tags: ['React', 'JavaScript', 'Vercel'],
    url: 'https://codealpha-flashcardapp.vercel.app',
    visualClass: 'visual-flashcards',
    visualContent: (
      <>
        <span className="visual-index">09 — STUDY APP</span>
        <div className="flashcards-visual">
          <div className="flashcard-back"></div>
          <div className="flashcard">
            <span className="flashcard-category">QUICK REVIEW · 03 / 12</span>
            <strong>What does<br />CSS stand for?</strong>
            <span className="flashcard-hint">TAP TO REVEAL ANSWER <i>↗</i></span>
          </div>
          <span className="flashcards-count">01 <i>/</i> 12</span>
        </div>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
  {
    id: 'random-quote-generator',
    title: 'Random Quote Generator',
    description: 'A quote generator that presents a fresh thought with each interaction.',
    tags: ['JavaScript', 'CSS', 'Vercel'],
    url: 'https://code-alpha-randomquotegenentor.vercel.app',
    visualClass: 'visual-quotes',
    visualContent: (
      <>
        <span className="visual-index">10 — QUOTE GENERATOR</span>
        <div className="quotes-visual">
          <span className="quote-mark">“</span>
          <blockquote>Small steps every day lead to big changes.</blockquote>
          <span className="quote-author">A NOTE TO KEEP GOING</span>
          <span className="quote-refresh">↻ <i>NEW QUOTE</i></span>
        </div>
        <span className="visual-arrow" aria-hidden="true">↗</span>
      </>
    ),
  },
];

export default function Work() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="shell">
        <div className="section-topline">
          <p className="eyebrow section-index">02 / SELECTED WORK</p>
          <p className="section-aside">A few things I've brought to life <span>↘</span></p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card ${project.isLarge ? 'project-large' : ''}`}>
              <a
                className={`project-visual ${project.visualClass}`}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
              >
                {project.visualContent}
              </a>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}