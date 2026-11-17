'use client';
import { useEffect, useState } from 'react';
import { experience, profile, skillGroups } from '@/lib/data';

const nav = ['About', 'Skills', 'Experience', 'Contact'];
export default function Portfolio() {
  const [sound, setSound] = useState(false);
  const [active, setActive] = useState('About');
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id[0].toUpperCase() + entry.target.id.slice(1)); }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <div className="progress" />
    <header className="nav"><a className="brand" href="#top">PV<span>.</span></a><nav>{nav.map((item) => <a className={active === item ? 'active' : ''} key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk ↗</a></header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">PORTFOLIO / 2026</p><h1>Building quality<br/><em>through automation.</em></h1><p className="lead">I’m {profile.name}, a {profile.role} focused on reliable, scalable test automation.</p><div className="actions"><a className="button dark" href="#experience">Explore experience ↘</a><a className="button light" href={`mailto:${profile.email}`}>Contact me</a></div><div className="hero-meta"><span>BASED IN {profile.location.toUpperCase()}</span><span>PLAYWRIGHT · JAVASCRIPT · TYPESCRIPT</span></div></div>
        <div className="hero-visual"><div className="ghost">BALAJI</div><video className="hero-video" src="/hero/intro.mp4" autoPlay muted={!sound} loop playsInline preload="metadata"/><button className="sound" aria-label={sound ? 'Mute introduction video' : 'Enable introduction video sound'} onClick={() => setSound(!sound)}>{sound ? 'Ⅱ' : '▶'}</button><span className="video-note">A SHORT INTRODUCTION</span></div>
      </section>
      <section className="section about" id="about"><div className="section-tag">01 — ABOUT</div><div className="about-grid"><div><h2>Thoughtful testing.<br/><em>Reliable releases.</em></h2><p>{profile.summary}</p><p>Experienced across functional, regression, smoke, integration, API, database, ETL validation and cross-browser testing.</p><a className="text-link" href={`mailto:${profile.email}`}>Get in touch ↗</a></div><div className="id-card"><div className="id-top">AUTOMATION ENGINEER <span>PROFILE / 01</span></div><img src="/portrait/character.png" alt="3D character portrait of PV Balaji in a navy suit"/><div className="id-name">{profile.name}</div><div className="id-role">{profile.role}</div><div className="id-rule"/><div className="id-row"><span>LOCATION</span><b>{profile.location}</b></div><div className="id-row"><span>EDUCATION</span><b>{profile.education}</b></div><div className="id-row"><span>GRADUATED</span><b>{profile.graduationYear}</b></div><div className="barcode">|||| ||| || |||| ||| ||</div></div><aside className="quick"><h3>Quick facts</h3><div><span>Experience</span><b>5+ years</b></div><div><span>Speciality</span><b>Playwright automation</b></div><div><span>Languages</span><b>JavaScript · TypeScript · Java</b></div><div><span>Email</span><b>{profile.email}</b></div></aside></div></section>
      <section className="section skills" id="skills"><div className="section-tag">02 — TOOLKIT</div><h2>The tools behind<br/><em>the quality.</em></h2><p className="section-intro">A practical stack for UI, API and data validation across modern applications.</p><div className="skill-groups">{skillGroups.map((group, i) => <article className="skill-card" key={group.name}><div className="skill-index">{String(i + 1).padStart(2, '0')}</div><h3>{group.name}</h3><div className="chips">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>
      <section className="section experience" id="experience"><div className="section-tag">03 — CAREER</div><h2>Experience that<br/><em>builds confidence.</em></h2><div className="timeline">{experience.map((job, i) => <article className="job" key={job.company}><div className="job-year">{String(i + 1).padStart(2, '0')}</div><div><p className="job-date">{job.dates} · {job.location}</p><h3>{job.title}</h3><h4>{job.company}</h4><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
      <section className="section contact" id="contact"><div className="section-tag">04 — CONTACT</div><h2>Let’s build<br/><em>confidence in quality.</em></h2><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} ↗</a><div className="contact-bottom"><a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>{profile.location}</span><a href="#top">Back to top ↑</a></div></section>
    </main><footer>© {new Date().getFullYear()} {profile.name}. Built with care.</footer>
  </>;
}
