// Projects are rendered in array order. The number on each card comes from this
// order, so to re-rank the portfolio you only move items in this file.
//
// Ordering logic:
//   1-6   Flagship. Breadth plus depth — the builds to be judged on.
//   7-13  Supporting client sites.
//   14-16 Systems and plugins with no public URL.

export const categories = [
  'All work',
  'AI & automation',
  'E-commerce',
  'Directory & SEO',
  'Corporate',
  'Systems & plugins',
]

export const projects = [
  {
    name: 'VOXFARO',
    domain: 'voxfaro.com',
    url: 'https://voxfaro.com/',
    category: 'AI & automation',
    kind: 'AI voice platform',
    year: '2025–26',
    summary:
      'An AI voice platform for HVAC contractors. A white-labelled call control panel sits at cp.voxfaro.com, and two custom WordPress plugins feed it leads from the marketing site.',
    bullets: [
      'Built and trained inbound and outbound voice agents in CallFluent, with ElevenLabs voices and HVAC-specific scripting.',
      'voxfaro-call-widget — a floating click-to-call widget on a PSR-4 codebase, with a server-side API proxy, rate limiting and bot detection.',
      'voxfaro-audit-request — a scored intake form that syncs to Acumbamail, sends a warm client email and a full admin brief, and exposes a CSV dashboard.',
      'Converted roughly 40 static HTML pages into WordPress and added a revenue recovery calculator.',
    ],
    tech: ['WordPress', 'PHP 8', 'CallFluent', 'ElevenLabs', 'REST API', 'Acumbamail'],
    tint: { bg: '#0C1F2B', fg: '#DCEDEF', accent: '#35C3C9' },
  },
  {
    name: 'SayCheese',
    domain: 'getsaycheese.com',
    url: 'https://getsaycheese.com/',
    category: 'E-commerce',
    kind: 'Shopify DTC brand',
    year: '2024–26',
    summary:
      'A teeth-whitening brand with two product lines, running on a custom Shopify theme with a separate WordPress funnel subdomain for campaigns.',
    bullets: [
      'Custom theme on Dawn OS 2.0 — bespoke Liquid sections and a scoped CSS system across the whole storefront.',
      'Product pages with a sticky gallery, shade picker, before-and-after slider, kit annotator and sticky cart bar.',
      'Subscriptions through Appstle and volume pricing through DealEasy.',
      'A 13-question Quizify funnel that routes shoppers to the right product line, plus UpViral contest and lead-magnet pages on the funnel subdomain.',
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'WordPress', 'Quizify', 'UpViral'],
    tint: { bg: '#2E8986', fg: '#F2FBFA', accent: '#56479D' },
  },
  {
    name: 'Functional Self',
    domain: 'functionalself.co.uk',
    url: 'https://functionalself.co.uk',
    category: 'E-commerce',
    kind: 'Multi-store WooCommerce',
    year: '2021–25',
    summary:
      'One of three multi-store e-commerce platforms built and maintained for BW IP Holdings in London.',
    bullets: [
      'Custom child theme kept in step with the parent across years of updates.',
      'Third-party payment and shipping APIs integrated into checkout and fulfilment.',
      'Ongoing performance tuning and UI work.',
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'API integration'],
    tint: { bg: '#24382C', fg: '#EDF2EE', accent: '#8FBF6E' },
  },
  {
    name: 'SmileMerit',
    domain: 'smilemerit.com',
    url: 'https://smilemerit.com/',
    category: 'Directory & SEO',
    kind: 'Provider directory',
    year: '2025–26',
    summary:
      'A US teeth-whitening provider directory with state and city filtering, built to be populated from scraped data rather than by hand.',
    bullets: [
      'Moved the data model off a custom post type and onto Directorist’s native location taxonomy, so state and city filtering drives clean URLs.',
      'Full-width search hero with an overlapping search card, a shortcode footer built from live taxonomy terms, and a fixed off-canvas mobile menu.',
      'Provider pipeline: Apify Google Maps scrape into CSV, then WP All Import.',
      'Privacy, terms and disclaimer pages written and built.',
    ],
    tech: ['WordPress', 'Directorist', 'Elementor', 'Apify', 'WP All Import'],
    tint: { bg: '#123B6B', fg: '#E8F0FB', accent: '#5BA8F5' },
  },
  {
    name: 'Rosita Real Foods',
    domain: 'rositarealfoods.co.uk',
    url: 'https://rositarealfoods.co.uk',
    category: 'E-commerce',
    kind: 'WooCommerce store',
    year: '2021–25',
    summary:
      'A storefront for a natural food brand, with custom plugin work and payment gateway integration.',
    bullets: [
      'Custom plugins for store-specific behaviour not covered by WooCommerce.',
      'Gateway integration and checkout work.',
      'Theme customisation for brand consistency across the group.',
    ],
    tech: ['WordPress', 'WooCommerce', 'Custom plugins', 'Payment gateway'],
    tint: { bg: '#2E3A1F', fg: '#F1F3E8', accent: '#C9A227' },
  },
  {
    name: 'GrowSilk',
    domain: 'growsilk.com',
    url: 'https://growsilk.com/',
    category: 'Directory & SEO',
    kind: 'Agency site + assessment tool',
    year: '2025–26',
    summary:
      'A dental growth agency site built around a six-stage framework, with a scored assessment tool and a full technical SEO rebuild underneath it.',
    bullets: [
      'Growth Score quiz plugin — REST API, custom database table, 34-point scoring across five stages, HMAC-signed result links and scored result emails.',
      'SEO, AEO and GEO remediation: 154 HTML validation errors cleared, schema markup added, broken links repaired and NAP details made consistent.',
      'Homepage and inner page builds, with all CSS consolidated into a single stylesheet.',
    ],
    tech: ['WordPress', 'PHP', 'REST API', 'Schema.org', 'Acumbamail'],
    tint: { bg: '#143A2E', fg: '#E7F2EC', accent: '#58C49A' },
  },
  {
    name: 'Dr. Smilo',
    domain: 'drsmilo.com',
    url: 'https://drsmilo.com/',
    category: 'E-commerce',
    kind: 'WooCommerce store',
    year: '2025–26',
    summary:
      'A complete WooCommerce theme built from a static prototype for a Bangladesh oral-care brand, now in its ninth minor release.',
    bullets: [
      'Custom theme with a three-category shop taxonomy, redesigned cart, checkout field rules and WooCommerce template overrides.',
      'A standalone pre-order and coming-soon plugin that enforces availability server-side rather than in the browser.',
      'BDT currency handling with SSLCommerz, bKash, Nagad, Rocket, card and cash on delivery.',
      'Theme restructured from a flat folder into inc/, template-parts/ and woocommerce/, with a test suite over the core paths.',
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'SSLCommerz', 'Custom plugin'],
    tint: { bg: '#06272D', fg: '#F4EEE2', accent: '#D7B66A' },
  },
  {
    name: 'EXPONENT NRG',
    domain: 'exponentnrg.com',
    url: 'https://exponentnrg.com/',
    category: 'Corporate',
    kind: 'Energy & EPC corporate site',
    year: '2025–26',
    summary:
      'A custom WordPress theme for a Bangladesh energy, infrastructure and EPC company, converted from hand-built static prototypes.',
    bullets: [
      'Seven service areas — renewables, oil and gas, storage, infrastructure, street lighting, design and engineering, EPC — consolidated under one section with simplified navigation.',
      'Full-width image hero rebuilt to carry only the headline, supporting line and two calls to action.',
      'The client’s brand and colour guide applied across the live theme as a contained colour-only change.',
    ],
    tech: ['WordPress', 'PHP', 'Custom theme'],
    tint: { bg: '#0F2A4A', fg: '#E6EEF7', accent: '#F0A32E' },
  },
  {
    name: 'EXPONENT PETRO',
    domain: 'exponentpetro.com',
    url: 'https://exponentpetro.com/',
    category: 'Corporate',
    kind: 'Petroleum & engineering site',
    year: '2026',
    summary:
      'Sister brand to EXPONENT NRG — a 22-page petroleum and engineering site in dark navy and copper.',
    bullets: [
      'Static design package converted into a full custom WordPress theme.',
      'Hero rebuilt as a full-width background image to match the NRG site, with the surplus elements stripped out.',
      'Section rhythm and vertical spacing reworked from the original design.',
    ],
    tech: ['WordPress', 'PHP', 'Custom theme'],
    tint: { bg: '#131E33', fg: '#EDE6DC', accent: '#C9733A' },
  },
  {
    name: 'MAA GROUP',
    domain: 'maagroup.bd',
    url: 'https://maagroup.bd/',
    category: 'Corporate',
    kind: 'Maritime & logistics group',
    year: '2026',
    summary:
      'The group site for a maritime and logistics company founded in 1984, covering four operating companies and six port locations.',
    bullets: [
      'Custom WordPress theme with company, portfolio, client, office and blog sections.',
      'A dedicated page for each operating company: shipping lines, trading and cargo handling, survey and consultancy, and tourism.',
      'Office pages for Khulna, Chattogram, Mongla and Dhaka.',
    ],
    tech: ['WordPress', 'PHP', 'Custom theme'],
    tint: { bg: '#0B2F3A', fg: '#E3F0F2', accent: '#58B3C4' },
  },
  {
    name: 'GBC Wellness',
    domain: 'gbcwellness.eu',
    url: 'https://gbcwellness.eu',
    category: 'E-commerce',
    kind: 'B2B storefront',
    year: '2021–25',
    summary: 'A B2B wellness storefront with bulk ordering and inventory handling.',
    bullets: [
      'Bulk ordering flow for trade customers.',
      'Inventory handling across a wide catalogue.',
      'Shared brand system with the rest of the group.',
    ],
    tech: ['WordPress', 'WooCommerce', 'B2B features', 'Bulk ordering'],
    tint: { bg: '#1F3340', fg: '#E9F1F5', accent: '#6FC3D9' },
  },
  {
    name: 'Covervox',
    domain: 'covervox.com',
    url: 'https://covervox.com/',
    category: 'Corporate',
    kind: 'Service business site',
    year: '2023–25',
    summary: 'A service business site with a custom booking flow and a CRM handoff.',
    bullets: [
      'Custom booking system built into the theme.',
      'CRM integration so enquiries land where the sales team works.',
    ],
    tech: ['WordPress', 'Custom development', 'Booking system', 'CRM integration'],
    tint: { bg: '#2A2440', fg: '#EDEAF6', accent: '#9B8AF0' },
  },
  {
    name: 'Saleque Sufi',
    domain: 'salequesufi.com',
    url: 'https://salequesufi.com/',
    category: 'Corporate',
    kind: 'Consultant portfolio',
    year: '2025–26',
    summary:
      'A portfolio site for an energy consultant and columnist, rebuilt from duplicated static HTML into something he can actually maintain.',
    bullets: [
      'Header and footer extracted into PHP partials, so a nav change is made once instead of nine times.',
      'Diagnosed why Hostinger would not execute PHP inside .html files and moved every page to .php rather than fighting .htaccess.',
      'Leadership insights section with embedded video interviews.',
      'Converted to a WordPress theme so a non-technical client can publish posts himself.',
    ],
    tech: ['PHP', 'WordPress', 'Hostinger'],
    tint: { bg: '#1C2B33', fg: '#E9EEF1', accent: '#9FBFD0' },
  },
  {
    name: 'Vox Lead Engine',
    domain: 'WordPress plugin',
    url: null,
    category: 'AI & automation',
    kind: 'Lead capture & AI calling pipeline',
    year: '2025–26',
    summary:
      'A WordPress plugin that takes a form submission all the way to an AI phone call and back, without anyone touching a spreadsheet.',
    bullets: [
      'Pipeline: form → database → Acumbamail → Google Sheets → CallFluent → webhook return → email notification.',
      'PSR-4 architecture with Action Scheduler for background jobs and a repository pattern over storage.',
      '36 PHP files verified against PHP 8.3.',
    ],
    tech: ['WordPress', 'PHP 8.3', 'Action Scheduler', 'CallFluent', 'Google Sheets API'],
    tint: { bg: '#161E2E', fg: '#E6EAF2', accent: '#7FA7F0' },
  },
  {
    name: 'BWIP HR System',
    domain: 'Internal system',
    url: 'https://github.com/Imran4191/Hr-Project',
    category: 'Systems & plugins',
    kind: 'HR & payroll application',
    year: '2022–25',
    summary:
      'A contractor and employee management system used internally at BW IP Holdings.',
    bullets: [
      'Payroll, leave tracking and time tracking in one application.',
      'Role-based dashboards so contractors, staff and admins each see their own view.',
      'Built and maintained alongside the group e-commerce work.',
    ],
    tech: ['PHP', 'MySQL', 'Role-based access', 'Custom development'],
    tint: { bg: '#252B33', fg: '#EBEEF1', accent: '#7FD1AE' },
  },
  {
    name: 'Woo Xero Connect',
    domain: 'WordPress plugin',
    url: null,
    category: 'Systems & plugins',
    kind: 'Accounting integration',
    year: '2023',
    summary:
      'A plugin that connects WooCommerce to Xero so invoices and tax records are created without manual entry.',
    bullets: [
      'Automated invoice creation from WooCommerce orders.',
      'Tax synchronisation between store and accounts.',
      'Built for a multi-store group, so it had to handle more than one shop.',
    ],
    tech: ['WordPress', 'PHP', 'Xero API', 'REST API'],
    tint: { bg: '#1E3330', fg: '#E7F0EE', accent: '#4FD1C5' },
  },
]
