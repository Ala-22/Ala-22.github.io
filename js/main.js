/* =============== الحالة =============== */
let LANG = localStorage.getItem('site-lang') || 'en';
let C = CONTENT[LANG];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

/* =============== أدوات مساعدة =============== */
function tag(id, txt) { const el = document.getElementById(id); if (el) el.textContent = txt; }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

/* =============== العرض =============== */
function render() {
  C = CONTENT[LANG];
  const html = document.documentElement;
  html.lang = C.lang;
  html.dir = C.dir;
  document.title = LANG === 'ar'
    ? 'الآاء محسن الرجوي | متخصصة في الأمن السيبراني'
    : 'Alaa Al-Rajawi | Cybersecurity Specialist';

  /* الشريط العلوي */
  $('#logoText').innerHTML = `${esc(C.logo[0])} <b>${esc(C.logo[1])}</b>`;
  tag('logoMark', C.logoMark);
  $('#navLinks').innerHTML = C.nav.map(([id, t]) =>
    `<a href="#${id}">${esc(t)}</a>`).join('');

  /* الهيرو */
  tag('heroPill', C.hero.pill);
  $('#heroTitle').innerHTML = C.hero.title;
  $('#heroDesc').textContent = C.hero.desc;
  $('#heroActions').innerHTML =
    `<a href="#projects" class="btn btn-primary">${esc(C.hero.btn1)}</a>
     <a href="#contact" class="btn btn-ghost">${esc(C.hero.btn2)}</a>`;
  tag('badge1', C.hero.badges[0]);
  tag('badge2', C.hero.badges[1]);
  tag('badge3', C.hero.badges[2]);
  $('#stats').innerHTML = C.hero.stats.map(([n, l]) =>
    `<div class="stat"><b data-count="${n}">0</b><span>${esc(l)}</span></div>`).join('');

  /* نبذة عني */
  tag('aboutTag', C.about.tag);
  tag('aboutTitle', C.about.title);
  $('#aboutText').innerHTML = C.about.text.map(p => `<p>${p}</p>`).join('');
  $('#aboutFacts').innerHTML = C.about.facts.map(([k, v]) =>
    `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('');
  $('#aboutCta').innerHTML =
    `<a href="${C.cv}" class="btn btn-primary" download>${esc(C.about.cta)}</a>`;
  tag('termBody', C.about.terminal.join('\n'));

  /* المهارات */
  tag('skillsTag', C.skills.tag);
  tag('skillsTitle', C.skills.title);
  tag('skillsSub', C.skills.sub);
  $('#skillsGrid').innerHTML = C.skills.cards.map(([ico, t, d, tg]) => `
    <div class="skill-card reveal">
      <div class="skill-ico">${ico}</div>
      <h3>${esc(t)}</h3><p>${esc(d)}</p>
      <div class="tags">${tg.map(x => `<span>${esc(x)}</span>`).join('')}</div>
    </div>`).join('');
  $('#bars').innerHTML = C.skills.bars.map(([n, v]) => `
    <div class="bar-row"><span>${esc(n)}</span>
      <div class="bar"><i style="--v:${v}%"></i></div></div>`).join('');

  /* الشهادات */
  tag('certsTag', C.certs.tag);
  tag('certsTitle', C.certs.title);
  tag('certsSub', C.certs.sub);
  $('#certsGrid').innerHTML = C.certs.list.map(([issuer, title, desc, year, url]) => `
    <article class="card reveal">
      <div class="card-badge">${esc(issuer)}</div>
      <h3>${esc(title)}</h3><p>${esc(desc)}</p>
      <div class="card-foot"><span>${esc(year)}</span>
        <a href="${url}" class="link" target="_blank" rel="noopener">${esc(C.certs.link)} ↗</a>
      </div>
    </article>`).join('');

  /* المشاريع */
  tag('projectsTag', C.projects.tag);
  tag('projectsTitle', C.projects.title);
  tag('projectsSub', C.projects.sub);
  $('#projectsList').innerHTML = C.projects.list.map(([cat, title, desc, tg, links, url], i) => `
    <article class="project reveal">
      <div class="project-visual v${(i % 4) + 1}"><span>0${i + 1}</span></div>
      <div class="project-info">
        <div class="project-cat">${esc(cat)}</div>
        <h3>${esc(title)}</h3><p>${esc(desc)}</p>
        <div class="tags">${tg.map(x => `<span>${esc(x)}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${url}" class="link" target="_blank" rel="noopener">${esc(links[0])} ↗</a>
          <a href="${url}" class="link" target="_blank" rel="noopener">${esc(links[1])} ↗</a>
        </div>
      </div>
    </article>`).join('');

  /* الخبرات */
  tag('expTag', C.experience.tag);
  tag('expTitle', C.experience.title);
  $('#timeline').innerHTML = C.experience.list.map(([date, role, org, desc, tg]) => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-body">
        <div class="tl-date">${esc(date)}</div>
        <h3>${esc(role)}</h3><h4>${esc(org)}</h4>
        <p>${esc(desc)}</p>
        <div class="tags">${tg.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  /* التواصل */
  tag('contactTag', C.contact.tag);
  tag('contactTitle', C.contact.title);
  tag('contactSub', C.contact.sub);
  $('#contactList').innerHTML = C.contact.links.map(([ico, label, val, url]) => `
    <a class="contact-item reveal" href="${url}" target="_blank" rel="noopener">
      <span class="ci-ico">${ico}</span>
      <span><b>${esc(label)}</b><small>${esc(val)}</small></span>
    </a>`).join('');

  tag('lblName', C.contact.form.name);
  tag('lblMail', C.contact.form.mail);
  tag('lblMsg', C.contact.form.msg);
  tag('sendBtn', C.contact.form.send);
  $('#formNote').textContent = '';

  /* الفوتر */
  tag('copy', C.footer.copy.replace('{year}', new Date().getFullYear()));
  tag('made', C.footer.made);
  tag('langLabel', LANG === 'ar' ? 'EN' : 'AR');

  startTyping();
  initReveals();
  initCounters();
  initBars();
}

/* =============== تأثير الكتابة =============== */
let typeTimer = null;
function startTyping() {
  clearInterval(typeTimer);
  const words = C.hero.typed;
  const el = $('#typed');
  let w = 0, c = 0, del = false;
  const step = () => {
    const word = words[w];
    el.textContent = del ? word.slice(0, --c) : word.slice(0, ++c);
    let speed = del ? 45 : 95;
    if (!del && c === word.length) { speed = 1900; del = true; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; speed = 350; }
    typeTimer = setTimeout(step, speed);
  };
  step();
}

/* =============== ظهور العناصر =============== */
let revealIO;
function initReveals() {
  if (revealIO) revealIO.disconnect();
  revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 70);
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  $$('.reveal').forEach(el => {
    if (!el.classList.contains('in')) revealIO.observe(el);
  });
}

/* =============== العدّادات =============== */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count;
      let n = 0;
      const step = () => {
        n += Math.max(1, Math.ceil(end / 35));
        if (n >= end) { el.textContent = end + '+'; return; }
        el.textContent = n;
        requestAnimationFrame(step);
      };
      step();
      io.unobserve(el);
    });
  }, { threshold: .5 });
  $$('[data-count]').forEach(el => io.observe(el));
}

/* =============== أشرطة المهارات =============== */
function initBars() {
  const bars = $('#bars');
  if (!bars) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.bar').forEach((b, i) =>
        setTimeout(() => b.classList.add('on'), i * 180));
      io.unobserve(e.target);
    });
  }, { threshold: .3 });
  io.observe(bars);
}

/* =============== تبديل اللغة =============== */
$('#langBtn').addEventListener('click', () => {
  LANG = LANG === 'en' ? 'ar' : 'en';
  localStorage.setItem('site-lang', LANG);
  render();
  window.scrollTo({ top: window.scrollY, behavior: 'instant' });
});

/* =============== القائمة والتنقل =============== */
const navbar = $('#navbar'), navToggle = $('#navToggle'), navLinks = $('#navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  $('#toTop').classList.toggle('show', window.scrollY > 500);

  const pos = window.scrollY + 140;
  $$('section[id]').forEach(s => {
    const link = navLinks.querySelector(`a[href="#${s.id}"]`);
    if (link) link.classList.toggle('active', pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight);
  });
});

/* =============== نموذج التواصل =============== */
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const n = $('#cname').value.trim(), m = $('#cmail').value.trim(), g = $('#cmsg').value.trim();
  const note = $('#formNote');
  if (!n || !m || !g) { note.textContent = C.contact.form.err; return; }
  note.textContent = C.contact.form.ok;
  const to = C.contact.links[0][3].replace('mailto:', '');
  window.location.href = `mailto:${to}?subject=${encodeURIComponent('Message from ' + n)}&body=${encodeURIComponent(g + '\n\n— ' + n + ' | ' + m)}`;
});

/* =============== البدء =============== */
render();
