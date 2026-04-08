import './globals.css';
import { CookieConsent } from '@/components/CookieConsent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

// ── IMPORTANT: Pune aici Google Analytics ID-ul t\u0103u ──
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAFAF8',
};

export const metadata = {
  metadataBase: new URL('https://cosminpopa.ro'),
  title: {
    default: 'Cosmin-Gabriel Popa \u2014 Anatomy & Embryology \u2014 UMF Ia\u0219i',
    template: '%s | Cosmin-Gabriel Popa',
  },
  description: 'Senior Lecturer at the Department of Anatomy and Embryology, UMF Gr. T. Popa Ia\u0219i. Applied anatomy researcher, medical educator, and digital health builder. Teaching since 2014.',
  keywords: ['anatomy', 'embryology', 'medical education', 'UMF Iasi', 'Cosmin Popa', 'anatomie', 'embriologie', 'educatie medicala', 'NASCORA', 'teratology'],
  authors: [{ name: 'Cosmin-Gabriel Popa', url: 'https://cosminpopa.ro' }],
  creator: 'Cosmin-Gabriel Popa',
  publisher: 'Cosmin-Gabriel Popa',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    alternateLocale: 'en_US',
    url: 'https://cosminpopa.ro',
    siteName: 'Cosmin-Gabriel Popa',
    title: 'Cosmin-Gabriel Popa \u2014 Anatomy & Embryology',
    description: 'Senior Lecturer at UMF Gr. T. Popa Ia\u0219i. Applied anatomy, digital medical education, NASCORA platform.',
  },
  twitter: {
    card: 'summary',
    title: 'Cosmin-Gabriel Popa \u2014 Anatomy & Embryology',
    description: 'Senior Lecturer at UMF Gr. T. Popa Ia\u0219i. Applied anatomy, digital medical education.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cosminpopa.ro',
  },
  verification: {
    // google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
};

// ── Schema.org Structured Data for SEO + AGEO ──
function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cosmin-Gabriel Popa',
    givenName: 'Cosmin-Gabriel',
    familyName: 'Popa',
    jobTitle: '\u0218ef de Lucr\u0103ri (Senior Lecturer)',
    url: 'https://cosminpopa.ro',
    sameAs: [
      'https://orcid.org/0000-0002-7124-3179',
      'https://linkedin.com/in/cosmin-gabriel-popa',
    ],
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'Universitatea de Medicin\u0103 \u0219i Farmacie Gr. T. Popa Ia\u0219i',
      url: 'https://www.umfiasi.ro',
      department: {
        '@type': 'Organization',
        name: 'Disciplina de Anatomie \u0219i Embriologie',
      },
    },
    knowsAbout: ['Human Anatomy', 'Embryology', 'Medical Education', 'Digital Health', 'Applied Anatomy', 'Teratology Prevention'],
    email: 'cosmin.g.popa@gmail.com',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'UMF Gr. T. Popa Ia\u0219i' },
      { '@type': 'CollegeOrUniversity', name: 'Universitatea Al. I. Cuza Ia\u0219i' },
    ],
    award: 'IADS Peter Swiss Excellence Award',
    description: 'Senior Lecturer in Anatomy and Embryology at UMF Gr. T. Popa Ia\u0219i since 2014. Dual formation in medicine and history. Builder of digital health and education tools including NASCORA teratology prevention platform.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cosmin-Gabriel Popa \u2014 Academic Website',
    url: 'https://cosminpopa.ro',
    inLanguage: ['ro', 'en'],
    author: { '@type': 'Person', name: 'Cosmin-Gabriel Popa' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GoogleAnalytics gaId={GA_ID} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
