const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
}

async function loadProfile() {
	try {
		const res = await fetch('./data/profile.json', { cache: 'no-store' });
		const data = await res.json();
		applyProfile(data);
	} catch (e) {
		// Silent fail, keep defaults
	}
}

function createSocialLink({ label, href, icon }) {
	const a = document.createElement('a');
	a.className = 'social-link';
	a.href = href;
	a.target = '_blank';
	a.rel = 'noopener';
	a.innerHTML = `${icon ?? '↗'} <span>${label}</span>`;
	return a;
}

function applyProfile(p) {
	document.title = `${p.name} — ${p.title}`;
	const name = document.getElementById('name');
	const title = document.getElementById('title');
	const bio = document.getElementById('bio');
	const about = document.getElementById('about-text');
	const social = document.getElementById('social');
	const socialBottom = document.getElementById('social-bottom');
	const primaryLink = document.getElementById('primary-link');
	const secondaryLink = document.getElementById('secondary-link');
	if (name && p.name) name.textContent = p.name;
	if (title && p.title) title.textContent = p.title;
	if (bio && p.lede) bio.textContent = p.lede;
	if (about && p.about) about.textContent = p.about;
	if (primaryLink && p.primaryCta) {
		primaryLink.textContent = p.primaryCta.label;
		primaryLink.href = p.primaryCta.href;
	}
	if (secondaryLink && p.secondaryCta) {
		secondaryLink.textContent = p.secondaryCta.label;
		secondaryLink.href = p.secondaryCta.href;
		secondaryLink.target = p.secondaryCta.href.startsWith('#') ? '_self' : '_blank';
	}
	if (social && Array.isArray(p.social)) {
		p.social.forEach(s => social.appendChild(createSocialLink(s)));
	}
	if (socialBottom && Array.isArray(p.social)) {
		p.social.forEach(s => socialBottom.appendChild(createSocialLink(s)));
	}
	const highlightsGrid = document.getElementById('highlights-grid');
	if (highlightsGrid && Array.isArray(p.highlights)) {
		p.highlights.forEach(h => {
			const t = document.createElement('div');
			t.className = 'tile';
			t.innerHTML = `
				<div class="eyebrow">${h.eyebrow}</div>
				<h3>${h.title}</h3>
				<p>${h.description}</p>
			`;
			highlightsGrid.appendChild(t);
		});
	}
	const workCards = document.getElementById('work-cards');
	if (workCards && Array.isArray(p.work)) {
		p.work.forEach(w => {
			const c = document.createElement('div');
			c.className = 'work-card';
			c.innerHTML = `
				<div class="badge">${w.period}</div>
				<div>
					<h3 style="margin: 0 0 2px 0">${w.name}</h3>
					<p style="margin: 0 0 6px 0; color: #d1d3da">${w.role}</p>
					<p style="margin: 0">${w.summary}</p>
				</div>
			`;
			workCards.appendChild(c);
		});
	}
	const pressList = document.getElementById('press-list');
	if (pressList && Array.isArray(p.press)) {
		p.press.forEach(pr => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = pr.href;
			a.target = '_blank';
			a.rel = 'noopener';
			a.innerHTML = `<span>${pr.title}</span><span style="color:#a9adb8">${pr.source}</span>`;
			li.appendChild(a);
			pressList.appendChild(li);
		});
	}
}

// Subtle reveal on scroll
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.animate(
					[
						{ opacity: 0, transform: 'translateY(6px)' },
						{ opacity: 1, transform: 'translateY(0)' }
					],
					{ duration: 320, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
				);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.1 }
);

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.section, .tile, .work-card').forEach((el) => observer.observe(el));
	loadProfile();
});


