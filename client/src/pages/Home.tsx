import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  FolderKanban,
  BadgeCheck,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
  Microscope,
  Phone,
  Copy,
  Check,
  Code2,
  Globe2,
  Wrench,
  Languages,
} from 'lucide-react';

/**
 * Academic Light Minimalism
 * Warm paper surface, ink navy hierarchy, ochre emphasis, and an editorial left-aligned rhythm.
 * Georgia is used consistently across headings, body copy, labels, and controls for a familiar scholarly tone.
 */

const journalArticles = [
  {
    year: '2026',
    title: 'A Data Efficient Pyramid Vision Transformer for Image Classification',
    venue: 'Discover Artificial Intelligence',
    detail: 'Q1 · IF: 11.29',
    status: 'Published',
  },
  {
    year: '2025',
    title: 'LC-CCT: A Linear Complexity Compact Convolutional Transformer for Retinal Disease Detection in Optical Coherence Tomography Images',
    venue: 'IEEE Access, vol. 13, pp. 204372–204384',
    detail: 'Q1 · IF: 4.2',
    status: 'Published',
    doi: '10.1109/ACCESS.2025.3639223',
  },
  {
    year: '2024',
    title: 'SPT-Swin: A Shifted Patch Tokenization Swin Transformer for Image Classification',
    venue: 'IEEE Access, vol. 12, pp. 117617–117626',
    detail: 'Q1 · IF: 4.2',
    status: 'Published',
    doi: '10.1109/ACCESS.2024.3448304',
  },
  {
    year: '2023',
    title: 'LCDEiT: A Linear Complexity Data-Efficient Image Transformer for MRI Brain Tumor Classification',
    venue: 'IEEE Access, vol. 11, pp. 20337–20350',
    detail: 'Q1 · IF: 4.2',
    status: 'Published',
    doi: '10.1109/ACCESS.2023.3244228',
  },
];

const conferencePapers = [
  { title: 'BrainACGAN: Auxiliary Classifier Generative Adversarial Network for Brain Tumor Images', venue: 'ICISET, IEEE, 2024.', doi: '10.1109/ICISET62123.2024.10939632' },
  { title: 'ChestACGAN: Auxiliary Classifier Generative Adversarial Network for Chest X-ray Images', venue: 'ICISET, IEEE, 2024.', doi: '10.1109/ICISET62123.2024.10941299' },
  { title: 'Hybrid Pooling Based Convolutional Neural Network for Multi-Class Classification of MR Brain Tumor Images', venue: 'ICO2021, Springer, 2022, pp. 75–86.', doi: '10.1007/978-3-030-93247-3_9' },
  { title: 'Application of Hybrid Classifier for Multi-Class Classification of MRI Brain Tumor Images', venue: 'ICEEICT, IEEE, 2021.', doi: '10.1109/iceeict53905.2021.9667829' },
];

const theoryCourses = [
  ['ETE-303', 'Industrial Electronics'],
  ['ICE-3145', 'Microprocessor and Interfacing'],
  ['ICE-1141', 'Computer Fundamentals'],
  ['ICE-3140', 'Simulation and Modeling'],
  ['ICE-2241', 'Signals and Communication Systems'],
];

const sessionalCourses = [
  ['ETE-304', 'Industrial Electronics Sessional'],
  ['ETE-102', 'Electronics-I Sessional'],
  ['ICE-3146', 'Microprocessor and Interfacing Laboratory'],
  ['ICE-412', 'Information Security and Cryptography Laboratory'],
  ['ICE-2242', 'Signals and Communication Systems Laboratory'],
  ['ICE-3242', 'Digital Signal Processing Laboratory'],
  ['0611-121', 'Computer Fundamentals Sessional'],
];

const certificationGroups = [
  {
    year: '2024',
    providers: [{ provider: 'Coursera', items: ['Python Data Structures'] }],
  },
  {
    year: '2021',
    providers: [
      { provider: 'Jovian', items: ['Machine Learning with Python: Zero to GBMs', 'Data Structures and Algorithms in Python', 'Deep Learning with PyTorch: Zero to GANs', 'Data Analysis with Python: Zero to Pandas'] },
      { provider: 'MathWorks', items: ['Deep Learning Onramp', 'Machine Learning Onramp', 'Image Processing Onramp', 'MATLAB Onramp', 'Signal Processing Onramp'] },
      { provider: 'Coursera', items: ['Convolutional Neural Networks'] },
    ],
  },
];

const navigationItems = [
  { label: 'Employment History', href: '#employment-history' },
  { label: 'Academic Background', href: '#academic-background' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects & Certifications', href: '#projects-certifications' },
  { label: 'Teaching Experience', href: '#teaching' },
  { label: 'Skills & Interests', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#employment-history');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailAddress = 'jannatul.ice0076.c@diu.edu.bd';

  const navigateToSection = (href: string) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      toast.success('Email copied to clipboard');
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      toast.error('Could not copy the email. Please select it manually.');
    }
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = window.innerWidth < 1024 ? 112 : 132;
      setShowBackToTop(window.scrollY > 560);
      let current = '#employment-history';
      navigationItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= headerOffset) current = item.href;
      });
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);


    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-primary backdrop-blur-md">
        <nav className="container" aria-label="Primary navigation">
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-5">
            <a href="#top" aria-label="Gazi Jannatul Ferdous portfolio home" className="group flex items-center gap-3 no-underline">
              <span className="flex h-10 w-10 items-center justify-center border border-accent bg-accent text-sm font-semibold tracking-tight text-accent-foreground transition-transform group-hover:-rotate-6">GJF</span>
            </a>
            <div className="hidden items-center gap-7 lg:flex">
              {navigationItems.map((item) => <a key={item.href} href={item.href} onClick={() => navigateToSection(item.href)} aria-current={activeSection === item.href ? 'location' : undefined} className={`nav-link no-underline ${activeSection === item.href ? 'active-nav-link' : ''}`}>{item.label}</a>)}
            </div>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 text-primary transition-colors hover:border-accent hover:text-accent lg:hidden" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {mobileMenuOpen && <div className="border-t border-border py-3 lg:hidden">
            <div className="grid gap-1 pb-2">
              {navigationItems.map((item) => <a key={item.href} href={item.href} onClick={() => navigateToSection(item.href)} aria-current={activeSection === item.href ? 'location' : undefined} className={`nav-link block border-l-2 px-2 py-2.5 text-sm no-underline transition-all ${activeSection === item.href ? 'active-nav-link border-accent bg-accent/10 pl-3 font-semibold' : 'border-transparent'}`}>{item.label}</a>)}
            </div>
          </div>}
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden bg-[#f7f3ea]">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full opacity-[0.16] mix-blend-multiply md:w-[62%]"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663508185167/NKRLFsWh88dW7GULkKmThs/hero-academic-2-cDZ3CksA2mSA9rTxjtY4cV.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3ea]/95 to-[#f7f3ea]/40" />
          <div className="container grid min-h-0 items-start gap-9 pb-2 pt-2 sm:gap-12 sm:pb-3 sm:pt-6 md:pb-4 md:pt-10 lg:pb-5">
            <div className="animate-rise-in max-w-3xl">
              <h1 className="name-level max-w-3xl text-primary">Gazi Jannatul Ferdous</h1>
              <p className="mt-3 max-w-2xl text-sm italic leading-relaxed text-primary sm:mt-4 sm:text-base md:text-lg">Lecturer<br /><span className="text-xs sm:text-sm md:text-base">Department of Information and Communication Engineering</span><br /><span className="text-xs sm:text-sm md:text-base">Daffodil International University, Ashulia, Savar, Dhaka–1216</span></p>
            </div>
          </div>
        </section>

        <section id="field-of-interest" className="section-boundary bg-[#f1ece2] pb-4 pt-2 sm:pb-5 sm:pt-3 md:pb-6 md:pt-4">
          <div className="container"><div className="max-w-2xl"><h2 className="section-heading text-primary">Field of Interest</h2><ul className="mt-3 grid gap-3 text-sm leading-6 text-primary sm:grid-cols-2"><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Medical Image Analysis</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Efficient Deep Learning</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Computer Vision</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Signal Processing</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>IoT Automation</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Industrial Electronics</span></li><li className="flex items-start gap-3"><span className="academic-marker mt-2" aria-hidden="true" /><span>Wireless Communication Systems</span></li></ul></div></div>
        </section>

        <section id="employment-history" className="section-boundary bg-[#f7f3ea] pt-2 pb-4 text-foreground sm:pt-3 sm:pb-5 md:pt-5 md:pb-7">
          <div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <div><h2 className="section-heading text-primary">Employment History</h2></div>
            <div className="employment-timeline">
              <div className="employment-entry"><div className="flex flex-wrap items-baseline justify-between gap-3"><p className="mono-accent text-sm text-accent">2026 — Present</p><span className="border border-accent/40 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-accent">Current</span></div><h3 className="entry-title mt-4 text-primary">Lecturer</h3><p className="mt-2 text-sm leading-6 text-primary">Department of Information and Communication Engineering<br />Daffodil International University, Bangladesh</p></div>
              <div className="employment-entry"><p className="mono-accent text-sm text-accent">2023 — 2025</p><h3 className="entry-title mt-4 text-primary">Lecturer</h3><p className="mt-2 text-sm leading-6 text-primary">Department of Electronics and Telecommunication Engineering<br />Chittagong University of Engineering and Technology, Bangladesh</p></div>
            </div>
          </div>
        </section>

        <section id="academic-background" className="section-boundary bg-[#f1ece2] pt-2 pb-4 sm:pt-3 sm:pb-5 md:pt-5 md:pb-7">
          <div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <div><h2 className="section-heading text-primary">Academic Background</h2></div>
            <div><ul className="space-y-5 text-sm leading-6 text-primary"><li className="academic-entry"><span className="mono-accent mb-2 block text-sm text-accent">2023 — 2025</span><div><strong className="entry-title block text-primary">M.Sc. (Engg.) in Electronics and Telecommunication Engineering</strong><span className="academic-detail">Chittagong University of Engineering and Technology · <span className="academic-result">CGPA 3.75 / 4.00</span></span></div></li><li className="academic-entry"><span className="mono-accent mb-2 block text-sm text-accent">2018 — 2023</span><div><strong className="entry-title block text-primary">B.Sc. (Engg.) in Electronics and Telecommunication Engineering</strong><span className="academic-detail">Chittagong University of Engineering and Technology · <span className="academic-result">CGPA 3.92 / 4.00 · 1st out of 31</span></span></div></li></ul></div>
          </div>
        </section>

        <section id="publications" className="section-boundary bg-[#f7f3ea] pt-2 pb-4 sm:pt-3 sm:pb-5 md:pt-5 md:pb-7">
          <div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <div><h2 className="section-heading text-primary">Publications</h2></div>
            <div>
              <div className="mb-4 flex items-end justify-between border-b border-border pb-4"><h3 className="section-heading text-primary">Journal Articles</h3></div>
              <div className="space-y-4">{journalArticles.map((paper) => <article key={paper.title} className="publication-item"><div className="flex flex-wrap items-center gap-3"><span className="mono-accent text-sm text-accent">{paper.year}</span><span className="publication-status text-[10px] uppercase tracking-[0.15em]">{paper.status}</span></div><h4 className="entry-title mt-3 text-primary">{paper.title}</h4><p className="mt-2 text-sm italic leading-6 text-primary">{paper.venue}</p><div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm leading-6 uppercase tracking-[0.08em] text-accent"><span>{paper.detail}</span>{paper.doi && <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer" className="inline-flex font-semibold tracking-[0.08em] text-accent underline underline-offset-4">DOI: {paper.doi}</a>}</div></article>)}</div>
              <div className="mb-4 mt-8 flex items-end justify-between border-b border-border pb-4"><h3 className="section-heading text-primary">Conference Proceedings</h3></div>
              <div className="space-y-4">{conferencePapers.map((paper) => <article key={paper.title} className="publication-item"><h4 className="entry-title text-primary">{paper.title}</h4><p className="mt-2 text-sm italic leading-6 text-primary">{paper.venue}</p><a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm font-semibold leading-6 tracking-[0.06em] text-accent underline underline-offset-4">DOI: {paper.doi}</a></article>)}</div>
            </div>
          </div>
        </section>

        <section id="projects-certifications" className="section-boundary bg-[#f1ece2] pt-2 pb-4 sm:pt-3 sm:pb-5 md:pt-5 md:pb-7"><div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10"><div><h2 className="section-heading text-primary">Projects & Certifications</h2></div><div className="grid gap-4 lg:grid-cols-2"><div><div className="mb-3 flex items-center gap-3 border-b border-border pb-2"><FolderKanban className="h-5 w-5 text-accent" /><h3 className="section-heading text-primary">Projects</h3></div><div className="space-y-3 py-2"><div><p className="mono-accent text-sm text-accent">2023</p><ul className="mt-2 space-y-2"><li className="list-hover flex gap-3 text-sm leading-6 text-primary"><span className="academic-marker" aria-hidden="true" /><span>Human detection and classroom door lock IoT automation system</span></li></ul></div><div className="border-t border-border/70 pt-3"><p className="mono-accent text-sm text-accent">2022</p><ul className="mt-2 space-y-2"><li className="list-hover flex gap-3 text-sm leading-6 text-primary"><span className="academic-marker" aria-hidden="true" /><span>Low-profile rectangular microstrip patch antenna for 5G wireless communication</span></li><li className="list-hover flex gap-3 text-sm leading-6 text-primary"><span className="academic-marker" aria-hidden="true" /><span>Web page design for an online electronic shopping mall</span></li></ul></div></div></div><div><div className="mb-3 flex items-center gap-3 border-b border-border pb-2"><BadgeCheck className="h-5 w-5 text-accent" /><h3 className="section-heading text-primary">Certifications</h3></div><div className="space-y-2">{certificationGroups.map((group) => <div key={group.year} className="border-b border-border/70 py-2.5"><p className="mono-accent text-sm text-accent">{group.year}</p><div className="mt-2 space-y-3">{group.providers.map((providerGroup) => <div key={`${group.year}-${providerGroup.provider}`}><p className="provider-label">{providerGroup.provider}</p><ul className="mt-2 space-y-2">{providerGroup.items.map((cert) => <li key={`${providerGroup.provider}-${cert}`} className="list-hover flex gap-3 text-sm leading-6 text-primary"><span className="academic-marker" aria-hidden="true" /><span className="text-primary">{cert}</span></li>)}</ul></div>)}</div></div>)}</div></div></div></div></section>

        <section id="teaching" className="section-boundary bg-[#f7f3ea] pt-2 pb-4 sm:pt-3 sm:pb-5 md:pt-5 md:pb-7">
          <div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <div><h2 className="section-heading text-primary">Teaching Experience</h2></div>
            <div>
              <div className="grid gap-6 lg:grid-cols-2"><div><div className="mb-4 flex items-center gap-3 border-b border-border pb-3"><GraduationCap className="h-5 w-5 text-accent" /><h3 className="section-heading text-primary">Theory Courses</h3></div><div className="space-y-1">{theoryCourses.map(([code, name]) => <div key={code} className="list-hover flex items-baseline gap-4 border-b border-border/70 py-2.5"><span className="mono-accent w-20 shrink-0 text-sm text-accent">{code}</span><span className="text-sm text-primary">{name}</span></div>)}</div></div><div><div className="mb-4 flex items-center gap-3 border-b border-border pb-3"><BriefcaseBusiness className="h-5 w-5 text-accent" /><h3 className="section-heading text-primary">Sessional Courses</h3></div><div className="space-y-1">{sessionalCourses.map(([code, name]) => <div key={code} className="list-hover flex items-baseline gap-4 border-b border-border/70 py-2.5"><span className="mono-accent w-20 shrink-0 text-sm text-accent">{code}</span><span className="text-sm text-primary">{name}</span></div>)}</div></div></div>
            </div>
          </div>
        </section>



        <section id="skills" className="section-boundary bg-[#f1ece2] pt-2 pb-3 sm:pt-3 sm:pb-4 md:pt-4 md:pb-6">
          <div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <div><h2 className="section-heading text-primary">Skills & Interests</h2></div>
            <div>
              <div className="mt-1 grid gap-5 lg:grid-cols-1"><div><h3 className="section-heading text-primary">Technical Skills</h3><div className="mt-4 space-y-4 text-sm leading-7 text-primary"><div className="list-hover"><span className="skill-label"><Code2 className="h-3.5 w-3.5 text-accent" />Programming</span><div className="skill-chips mt-2"><span className="skill-chip">Python</span><span className="skill-chip">C</span><span className="skill-chip">C++</span></div></div><div className="list-hover"><span className="skill-label"><Globe2 className="h-3.5 w-3.5 text-accent" />Web Development</span><div className="skill-chips mt-2"><span className="skill-chip">HTML</span><span className="skill-chip">CSS</span><span className="skill-chip">PHP</span><span className="skill-chip">JavaScript</span><span className="skill-chip">MySQL</span></div></div><div className="list-hover"><span className="skill-label"><Wrench className="h-3.5 w-3.5 text-accent" />Tools</span><div className="skill-chips mt-2"><span className="skill-chip">Google Colab</span><span className="skill-chip">MATLAB & Simulink</span><span className="skill-chip">MS Office</span><span className="skill-chip">LaTeX</span></div></div><div className="list-hover skill-language-block"><span className="skill-label"><Languages className="h-3.5 w-3.5 text-accent" />Language Proficiency</span><div className="mt-2"><p className="provider-label mb-2">IELTS</p><div className="flex flex-wrap items-center gap-2"><span className="ielts-badge ielts-overall-badge"><span className="ielts-badge-label">Overall:</span><span>7.0</span></span><span className="ielts-badge"><span className="ielts-badge-label">Reading:</span><span>6.5</span></span><span className="ielts-badge"><span className="ielts-badge-label">Writing:</span><span>7.0</span></span><span className="ielts-badge"><span className="ielts-badge-label">Listening:</span><span>7.5</span></span><span className="ielts-badge"><span className="ielts-badge-label">Speaking:</span><span>7.0</span></span></div></div></div></div></div></div>
            </div>
          </div>
        </section>


        <section id="contact" className="section-boundary bg-[#f7f3ea] pt-2 pb-3 sm:pt-3 sm:pb-4 md:pt-4 md:pb-6"><div className="container grid gap-5 sm:gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10"><div><h2 className="section-heading text-primary">Contact</h2></div><div><div className="contact-details mt-1 grid gap-3 pt-1 sm:grid-cols-2"><div className="space-y-4"><div className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><p className="text-xs uppercase tracking-[0.14em] text-foreground/50">Email</p><div className="mt-1 flex flex-wrap items-center gap-3"><a href={`mailto:${emailAddress}`} className="break-all text-sm font-semibold text-primary underline decoration-accent underline-offset-4">{emailAddress}</a><button type="button" onClick={copyEmail} className="button-lift inline-flex items-center gap-1.5 border border-primary/20 px-2.5 py-1.5 text-xs font-semibold text-primary" aria-label="Copy email address">{emailCopied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5 text-accent" />}{emailCopied ? 'Copied' : 'Copy email'}</button></div></div></div><div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><p className="text-xs uppercase tracking-[0.14em] text-foreground/50">Phone</p><a href="tel:+8801783188423" className="mt-1 inline-block text-sm font-semibold text-primary underline decoration-accent underline-offset-4">+88-01783188423</a></div></div></div><div className="space-y-4"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><p className="text-xs uppercase tracking-[0.14em] text-foreground/50">Location</p><p className="mt-1 text-sm leading-7 text-primary">Department of Information and Communication Engineering<br />Daffodil International University<br />Ashulia, Savar, Dhaka–1216</p></div></div><div className="mt-2 flex flex-wrap gap-4"><a href="https://orcid.org/0000-0001-7487-1915" target="_blank" rel="noreferrer" aria-label="Open ORCID profile in a new tab" className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a6ce39] text-[9px] font-bold leading-none text-white" aria-hidden="true">iD</span><span className="underline decoration-accent underline-offset-4">ORCID</span> <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a><a href="https://scholar.google.com/citations?user=tNKyeGMAAAAJ" target="_blank" rel="noreferrer" aria-label="Open Google Scholar profile in a new tab" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-accent underline-offset-4"><GraduationCap className="h-4 w-4 text-accent" />Google Scholar <ExternalLink className="h-3.5 w-3.5" /></a></div></div></div></div></div></section>

      </main>

      {showBackToTop && <button type="button" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-4 z-40 inline-flex h-11 w-11 items-center justify-center border border-primary/20 bg-background/95 text-primary shadow-[0_10px_30px_rgba(30,47,77,0.14)] backdrop-blur-md transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground sm:bottom-7 sm:right-7"><ArrowUp className="h-4 w-4" /></button>}

      <footer className="border-t border-border bg-[#f1ece2] py-8"><div className="container"><p className="text-xs text-foreground/50">© Gazi Jannatul Ferdous</p></div></footer>
    </div>
  );
}
