import { useEffect, useState } from 'react'

const profile = {
  name: 'Thummala Srinath',
  email: 'srinaththummala783@gmail.com',
  phone: '+918688741265',
  linkedin: 'https://www.linkedin.com/in/srinath-thummala-b5659a280',
  github: 'https://github.com/Srinath52004',
}

const chat = [
  { from: 'you', text: 'Who am I talking to?' },
  { from: 'bot', text: 'Srinath, a Python full stack developer who builds web apps, REST APIs and database-driven software.' },
  { from: 'you', text: 'What does he work with?' },
  { from: 'bot', text: 'Python, Django, React, JavaScript and SQL, with MongoDB and MySQL behind them.' },
  { from: 'you', text: 'Can I see something he built?' },
  { from: 'bot', text: 'Yes. He built an AI chatbot, so you are talking to a cousin of it right now. Scroll down.' },
]

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['Django', 'React'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Tools', items: ['Git', 'Postman', 'VS Code'] },
]

const project = {
  title: 'AI Chatbot',
  stack: ['Python', 'Django', 'React', 'JavaScript', 'HTML', 'CSS'],
  points: [
    ['Real-time answers', 'An AI-powered chatbot built with Python and Django that replies to user questions as they ask.'],
    ['Responsive interface', 'A clean chat screen built with HTML, CSS, JavaScript and React that works on any screen size.'],
    ['Backend and data', 'Backend APIs and a database store each user conversation and the application data.'],
    ['Modular design', 'A modular structure that keeps the app easy to scale, easy to use and quick to handle requests.'],
  ],
}

const education = [
  { school: 'Rajeevgandhi Memorial College of Engineering', level: 'B.Tech', when: 'Mar 2022 – May 2026', score: 'CGPA 7.56' },
  { school: 'Sri Chaitanya Junior College', level: 'Intermediate', when: 'Mar 2020 – Mar 2022', score: '83.6%' },
  { school: 'Nehrunikethan E.M High School', level: 'S.S.C', when: 'Jun 2016 – Mar 2020', score: '78.3%' },
]

function ChatHero() {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(chat.length); return }
    if (shown >= chat.length) return
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 700 : 1300)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="chat" role="log" aria-label="Introduction conversation">
      {chat.slice(0, shown).map((m, i) => (
        <div key={i} className={`bubble ${m.from}`}>{m.text}</div>
      ))}
      {shown < chat.length && (
        <div className={`bubble ${chat[shown].from} typing`} aria-hidden="true"><i /><i /><i /></div>
      )}
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top site-nav">
        <div className="container">
          <a className="navbar-brand brand" href="#top">TS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="nav">
            <ul className="navbar-nav gap-md-3">
              {['skills', 'project', 'education', 'contact'].map((s) => (
                <li className="nav-item" key={s}><a className="nav-link text-capitalize" href={`#${s}`}>{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="hero-role">Python Full Stack Developer</p>
              <h1 className="hero-name">Thummala<br />Srinath</h1>
              <p className="lead hero-copy">
                I build web applications, RESTful APIs and database-driven solutions with Python, Django and React.
                Always learning, and focused on shipping quality software.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a className="btn btn-accent btn-lg" href="#project">See my project</a>
                <a className="btn btn-outline-ink btn-lg" href={`mailto:${profile.email}`}>Email me</a>
              </div>
            </div>
            <div className="col-lg-6"><ChatHero /></div>
          </div>
        </div>
      </header>

      <Section id="skills" title="Skills">
        <p className="section-lead">Strong foundations in OOP, database management, CRUD operations and problem solving.</p>
        <div className="row g-4">
          {skills.map((s) => (
            <div className="col-sm-6 col-lg-3" key={s.group}>
              <h3 className="skill-group">{s.group}</h3>
              <div className="d-flex flex-wrap gap-2">
                {s.items.map((i) => <span className="chip" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="project" title="Project">
        <div className="project">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="project-title">{project.title}</h3>
              <p className="text-muted">Python and Django backend with a React front end.</p>
              <div className="d-flex flex-wrap gap-2">
                {project.stack.map((s) => <span className="chip chip-dark" key={s}>{s}</span>)}
              </div>
              <a className="btn btn-accent mt-4" href={profile.github} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {project.points.map(([h, p]) => (
                  <div className="col-md-6" key={h}>
                    <h4 className="point-title">{h}</h4>
                    <p className="mb-0">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education">
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.school}>
              <span className="tl-when">{e.when}</span>
              <h3 className="tl-school">{e.school}</h3>
              <p className="mb-0">{e.level} · <strong>{e.score}</strong></p>
            </li>
          ))}
        </ol>
        <p className="mt-4 mb-0"><strong>Languages:</strong> English, Telugu, Hindi</p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="section-lead">Open to opportunities as a Python full stack developer. The quickest way to reach me is email.</p>
        <div className="row g-3">
          {[
            ['Email', profile.email, `mailto:${profile.email}`],
            ['Phone', profile.phone, `tel:${profile.phone}`],
            ['LinkedIn', 'srinath-thummala', profile.linkedin],
            ['GitHub', 'Srinath52004', profile.github],
          ].map(([label, text, href]) => (
            <div className="col-sm-6 col-lg-3" key={label}>
              <a className="contact-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span>{label}</span>
                <strong>{text}</strong>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <footer className="py-4 text-center small text-muted">© {new Date().getFullYear()} Thummala Srinath</footer>
    </>
  )
}
