'use strict';

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themePreference = window.matchMedia('(prefers-color-scheme: dark)');
let userTheme;
try { userTheme = localStorage.getItem('aishwarya-theme'); } catch { /* Storage is optional. */ }
function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#18221c' : '#f5f5ef';
}
setTheme(userTheme === 'dark' || userTheme === 'light' ? userTheme : themePreference.matches ? 'dark' : 'light');
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  userTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(userTheme);
  try { localStorage.setItem('aishwarya-theme', userTheme); } catch { /* No persistence required. */ }
});
themePreference.addEventListener('change', e => { if (!userTheme) setTheme(e.matches ? 'dark' : 'light'); });

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.hidden = false;
function closeMenu(returnFocus = false) {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav.hidden) closeMenu(true); });
window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

const projects = {
  portfolio: {
    title: 'AI-Assisted Developer Portfolio',
    lead: 'A recent achievement in AI-assisted development: collaborating with an AI coding assistant to turn a clear creative brief and real career evidence into the portfolio you are browsing.',
    stack: ['AI-assisted development', 'HTML', 'CSS', 'JavaScript', 'Responsive design', 'Accessibility'],
    sections: [
      ['The brief I shaped', 'Defined the target audience, software and full-stack role focus, muted visual direction, and required features. Supplied my résumé and professional context, then requested iterative branding and content refinements.'],
      ['The AI-assisted implementation', ['The AI coding assistant generated the HTML, CSS, and JavaScript, translating the brief into a dependency-free website.', 'The site includes filterable project case studies, a recruiter summary, résumé downloads, contact links, and light/dark themes.', 'The implementation includes semantic content, keyboard-operable dialogs, focus handling, reduced-motion support, and responsive layouts.']],
      ['Validation and iteration', 'The AI-assisted workflow included browser checks for project filtering, case-study dialogs, keyboard navigation, mobile reflow, and résumé asset delivery. Content was checked against the supplied résumé to keep impact statements evidence-based.'],
      ['The outcome', 'A working portfolio and a portable website package, ready for static hosting. This demonstrates practical use of an AI coding assistant to translate requirements into a usable web artifact.']
    ],
    note: 'Built with an AI coding assistant in September 2026. AI assistance was used to create the website; the site itself does not run an AI model or require an AI API.',
    source: 'https://github.com/aishwaryaghat/Aishwarya-Ghatapanadi-Portfolio'
  },
  copilot: {
    title: 'AI Payments Operations Copilot',
    lead: 'Bringing payment-operations knowledge and controlled analytics into a copilot designed around grounded answers, access controls, and traceability.',
    stack: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'RAG'],
    sections: [
      ['The problem', 'Payment-operations questions can span runbooks, exceptions, cut-off times, and reconciliation data. The project brings grounded answers and controlled analytics into one copilot.'],
      ['What I built', ['Cited retrieval-augmented responses for payment-operations runbook questions.', 'Controlled analytics over synthetic payment, exception, cut-off, and reconciliation data.', 'A backend stack using Spring Boot, FastAPI, and PostgreSQL.']],
      ['Engineering decisions', ['JWT and role-based access control to govern access.', 'PII masking and prompt-injection guardrails.', 'Approved, parameterized, read-only SQL templates instead of unrestricted database operations.', 'Audit trails for traceability.']],
      ['How I evaluated it', 'Created a 64-case evaluation suite covering retrieval, analytics, and safety regression testing—making evaluation part of the engineering process.']
    ],
    note: 'AI-assisted personal project using synthetic data, independent of my work at Oracle. The diagram presents the project’s key architectural components.',
    source: 'https://github.com/aishwaryaghat/AI-Payments-Operations-Copilot'
  },
  mun: {
    title: 'MUN — Multi-University Notes',
    lead: 'A collaborative full-stack project focused on making lecture notes accessible through a student-oriented web experience.',
    stack: ['MongoDB', 'Express', 'EJS', 'Node.js'],
    sections: [
      ['The purpose', 'Build a lecture-note platform designed around students and a straightforward learning experience.'],
      ['My contribution', ['Collaborated on the platform’s design and development.', 'Contributed to a student-oriented full-stack learning experience.']],
      ['What this demonstrates', 'Collaborative problem-solving and translating a student need into a full-stack web experience. The published repository uses Express, MongoDB, and EJS templates.']
    ],
    note: 'Collaborative full-stack project. The linked repository snapshot uses EJS templates. The illustration is a concept preview; explore the source code for implementation details.',
    source: 'https://github.com/aishwaryaghat/Multi-University-Notes'
  },
  meal: {
    title: 'MealConnect',
    lead: 'A mobile application designed to connect food donors with authenticated NGOs and make contribution workflows easier to follow.',
    stack: ['Flutter', 'Dart', 'Firebase', 'MongoDB'],
    sections: [
      ['The purpose', 'Support the connection between food donors and NGOs through an application with clear coordination steps.'],
      ['What I built', ['A mobile application connecting donors with authenticated NGOs.', 'Pickup scheduling to support donation coordination.', 'Contribution tracking so users can follow their participation.']],
      ['What this demonstrates', 'Cross-platform application development, user-oriented workflow design, and connecting interface functionality with a data-backed application.']
    ],
    note: 'Mobile application project. The phone illustration is a concept preview; explore the linked repository for the implementation.',
    source: 'https://github.com/Deeksha-03/meal_connect_final'
  },
  fracture: {
    title: 'Bone Fracture Detection',
    lead: 'A machine-learning project applying a ResNet-50 convolutional model to binary fracture classification.',
    stack: ['Machine learning', 'Deep learning', 'ResNet-50', 'Sigmoid activation'],
    sections: [
      ['The approach', 'Developed a binary fracture-detection solution for medical imagery described in my résumé as X-rays, CT scans, and MRIs.'],
      ['My contribution', 'Implemented the solution using a ResNet-50 convolutional model with sigmoid activation for binary classification.'],
      ['What this demonstrates', 'Hands-on exposure to applying deep learning to an image-classification problem and working with a convolutional model.']
    ],
    note: 'Learning/research project, not a clinically validated diagnostic tool.'
  },
  scraping: {
    title: 'Web Scraping with Python',
    lead: 'Project-based experience using Python to extract and process website data.',
    stack: ['Python', 'Web scraping', 'Data processing'],
    sections: [
      ['The work', 'Used Python in a web-scraping project to extract and process data from websites.'],
      ['What this demonstrates', 'Practical scripting, data extraction, and data-handling experience. This work supports my broader interest in Python backend development and automation.'],
      ['Learning context', 'My Python practice also includes FastAPI in the AI Payments Operations Copilot project and 40 completed days of a 100 Days of Python programme.']
    ],
    note: 'Project-based Python experience, complementing my backend development and continued programming practice.'
  }
};

const filterBar = document.querySelector('.project-filters');
document.querySelector('[data-project-count]').textContent = String(document.querySelectorAll('.project[data-category]').length);
filterBar.hidden = false;
filterBar.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
  filterBar.querySelectorAll('button').forEach(other => {
    const selected = other === button;
    other.classList.toggle('active', selected);
    other.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  document.querySelectorAll('.project[data-category]').forEach(card => {
    const visible = button.dataset.filter === 'all' || card.dataset.category.split(' ').includes(button.dataset.filter);
    card.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
}));

const projectDialog = document.querySelector('#project-dialog');
const recruiterDialog = document.querySelector('#recruiter-dialog');
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}
if (typeof projectDialog.showModal === 'function') {
  document.querySelectorAll('.case-button').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      const content = document.querySelector('#dialog-content');
      content.replaceChildren();
      const title = element('h2', project.title);
      title.id = 'dialog-title';
      content.append(title, element('p', project.lead, 'dialog-lead'));
      const tags = element('div', null, 'tags');
      project.stack.forEach(name => tags.append(element('span', name)));
      content.append(tags);
      project.sections.forEach(([heading, body]) => {
        const section = element('section', null, 'dialog-section');
        section.append(element('h3', heading));
        if (Array.isArray(body)) {
          const list = element('ul');
          body.forEach(item => list.append(element('li', item)));
          section.append(list);
        } else section.append(element('p', body));
        content.append(section);
      });
      content.append(element('p', project.note, 'dialog-note'));
      if (project.source) {
        const actions = element('div', null, 'dialog-actions');
        const link = element('a', 'Explore source code ↗', 'button primary');
        link.href = project.source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Explore ${project.title} source code (opens in new tab)`);
        actions.append(link);
        content.append(actions);
      }
      openDialog(projectDialog);
    });
  });
  const recruiterButton = document.querySelector('.recruiter-button');
  recruiterButton.hidden = false;
  recruiterButton.addEventListener('click', () => openDialog(recruiterDialog));
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open', 'printing-summary');
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
document.querySelector('.print-summary').addEventListener('click', () => {
  document.body.classList.add('printing-summary');
  window.print();
});
window.addEventListener('afterprint', () => document.body.classList.remove('printing-summary'));

const copyButton = document.querySelector('#copy-email');
let toastTimer;
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const toast = document.querySelector('#toast');
    try {
      await navigator.clipboard.writeText('aishwaryaghatapanadi@gmail.com');
      toast.textContent = 'Email address copied.';
    } catch {
      toast.textContent = 'Copy unavailable. You can select the email address or use “Say hello”.';
    }
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4500);
  });
}

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
