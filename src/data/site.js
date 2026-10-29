import portrait from '../assets/shots/portrait.webp'
import cvFile from '../assets/Imran-Hossain-CV.pdf'

export const profile = {
  name: 'Md Imran Hossain',
  role: 'Full stack web developer',
  specialism: 'WordPress · Shopify · Magento',
  location: 'Dhaka, Bangladesh',
  email: 'mihasan4191@gmail.com',
  phone: '+880 1632 320355',
  phoneHref: '+8801632320355',
  github: 'https://github.com/Imran4191',
  linkedin: 'https://linkedin.com/in/md-imran-hossain-079584111',
  portrait,
  cv: cvFile,
  available: true,
  headline: ['I build and run the sites', 'other businesses sell from.'],
  standfirst:
    'Five years and fifty-odd projects: e-commerce platforms, custom WordPress themes and plugins, AI voice systems and the servers underneath all of it. Based in Dhaka, working with teams in London and across Bangladesh.',
}

export const stats = [
  { value: '5+', label: 'Years in production' },
  { value: '50+', label: 'Projects delivered' },
  { value: '6+', label: 'E-commerce builds' },
  { value: '6+', label: 'Custom plugins built' },
]

export const pillars = [
  {
    title: 'Build',
    body: 'Custom WordPress and Shopify themes written from static prototypes, not assembled from page builders. PHP, Liquid, JavaScript, MySQL.',
  },
  {
    title: 'Sell',
    body: 'WooCommerce, Magento and Shopify storefronts with real checkout work — gateways, subscriptions, pre-orders, multi-currency, B2B pricing.',
  },
  {
    title: 'Automate',
    body: 'Plugins that move data between systems: REST APIs, scored quizzes, email platforms, Google Sheets, accounting software and AI voice agents.',
  },
  {
    title: 'Operate',
    body: 'Hosting, DNS, SSL, migrations, firewall rules and backups. The site goes live and stays live without a separate sysadmin.',
  },
]

export const capabilities = [
  {
    title: 'Servers & hosting operations',
    body: 'Provisioning new sites on Hostinger, pointing domains, configuring DNS records, issuing SSL, and running full migrations between hosts with no downtime window.',
    items: ['Hostinger hPanel', 'DNS & domain setup', 'SSL certificates', 'Site migration', 'Staging to live', 'Backups'],
  },
  {
    title: 'Security hardening',
    body: 'Locking a site down after launch: firewall rules, IP blocking for abusive traffic, login hardening, file permissions and access control.',
    items: ['Firewall rules', 'IP blocking', 'Login hardening', 'Access control', 'Malware cleanup'],
  },
  {
    title: 'AI voice agents',
    body: 'Designing, scripting, training and deploying inbound and outbound voice agents, then wiring them into the website so calls and leads share one pipeline.',
    items: ['CallFluent', 'ElevenLabs', 'Agent scripting', 'Inbound & outbound flows', 'Webhook integration'],
  },
  {
    title: 'Funnels & quizzes',
    body: 'Landing pages and scored quizzes that qualify a visitor before anyone picks up the phone, connected to email automation and CRM.',
    items: ['Convertri', 'Quizify', 'UpViral', 'KickoffLabs', 'WordPress funnels', 'Acumbamail'],
  },
  {
    title: 'Directories at scale',
    body: 'Listing sites that are populated from data rather than typed in by hand, with geo-hierarchical URLs built for local search.',
    items: ['Directorist', 'Location taxonomies', 'Apify scraping', 'WP All Import', 'Geo URL silos'],
  },
  {
    title: 'AEO & GEO-ready builds',
    body: 'Structuring pages so AI search and answer engines can read and cite them: schema markup, clean semantic HTML, answer-shaped content and consistent business data.',
    items: ['Schema.org markup', 'Semantic HTML', 'Technical SEO audits', 'NAP consistency', 'Answer-shaped content'],
  },
]

export const experience = [
  {
    company: 'DotCom Valley',
    location: 'Dhaka, Bangladesh',
    role: 'Full stack web developer',
    period: 'Oct 2025 — present',
    current: true,
    body: 'Building and running WordPress and Shopify sites end to end, from the theme code down to the DNS record.',
    achievements: [
      'Custom WordPress themes converted from static prototypes for energy, petroleum, maritime, dental and oral-care brands.',
      'Plugin development: scored quiz engines, pre-order systems, call widgets and lead pipelines on PSR-4 codebases.',
      'Trained and integrated AI voice agents using CallFluent and ElevenLabs, wired into WordPress through a server-side proxy.',
      'Hosting operations on Hostinger — new site provisioning, domain and DNS setup, SSL, and full migrations.',
      'Site security: firewall configuration, IP blocking and access hardening.',
      'Funnels and scored quizzes built in Convertri, Quizify, UpViral, KickoffLabs and WordPress.',
      'Directory builds and AEO/GEO technical work so pages can be surfaced and cited by AI search.',
      'Code review, debugging and performance work across client sites.',
    ],
  },
  {
    company: 'BW IP Holdings Ltd',
    location: 'London, UK — remote',
    role: 'Full stack web developer',
    period: 'Jan 2021 — Nov 2025',
    body: 'Four years and nine months on a group of e-commerce brands and the internal systems around them.',
    achievements: [
      'Built and managed three multi-store e-commerce sites across WordPress and Magento.',
      'Developed custom WordPress plugins and Magento modules for payments, shipping and HR.',
      'Integrated third-party shipping and payment APIs into checkout and order fulfilment.',
      'Created and maintained child themes for brand consistency and safe updates.',
      'Performance tuning and UI work across the group.',
    ],
  },
]

export const education = {
  degree: 'BSc in Computer Science & Engineering',
  school: 'Bangladesh University',
  period: '2015 — 2019',
  result: 'CGPA 3.86 / 4.00',
  certification: 'BASIS Web App Development — PHP',
}

export const stack = [
  {
    group: 'Languages',
    items: ['PHP', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'Liquid', 'SQL'],
  },
  {
    group: 'Frameworks & libraries',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    group: 'Platforms & CMS',
    items: ['WordPress', 'WooCommerce', 'Shopify', 'Magento', 'Directorist'],
  },
  {
    group: 'Data',
    items: ['MySQL', 'MongoDB', 'WP All Import', 'Google Sheets API'],
  },
  {
    group: 'Integrations',
    items: ['REST APIs', 'Payment gateways', 'Shipping APIs', 'Xero', 'Acumbamail', 'CallFluent', 'ElevenLabs'],
  },
  {
    group: 'Infrastructure',
    items: ['Hostinger', 'AWS', 'Docker', 'CI/CD', 'DNS & SSL', 'Firewalls', 'Git'],
  },
  {
    group: 'Ways of working',
    items: ['Agile', 'Jira', 'ClickUp', 'Trello', 'Code review'],
  },
]
