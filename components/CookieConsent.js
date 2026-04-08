'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState('ro');

  const text = {
    ro: {
      msg: 'Acest site folose\u0219te cookies pentru analiz\u0103 (Google Analytics). Datele sunt anonimizate conform GDPR.',
      accept: 'Accept',
      decline: 'Refuz',
      policy: 'Politic\u0103 cookies',
    },
    en: {
      msg: 'This site uses cookies for analytics (Google Analytics). Data is anonymized in compliance with GDPR.',
      accept: 'Accept',
      decline: 'Decline',
      policy: 'Cookie policy',
    },
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
    const htmlLang = document.documentElement.lang;
    if (htmlLang === 'en') setLang('en');
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem('cookie-consent', choice);
    setVisible(false);
    window.dispatchEvent(new Event('cookie-consent-change'));
  };

  if (!visible) return null;

  const t = text[lang];

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      backgroundColor: 'var(--fg)', color: '#fff',
      padding: '1rem 1.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '1rem', flexWrap: 'wrap',
      fontSize: '0.85rem', fontFamily: 'var(--fb)',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
    }}>
      <p style={{ maxWidth: 500, lineHeight: 1.5, margin: 0 }}>
        {t.msg}{' '}
        <a href="/privacy" style={{ color: 'var(--accl)', textDecoration: 'underline' }}>{t.policy}</a>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => handleChoice('accepted')} style={{
          padding: '0.4rem 1rem', borderRadius: 3, border: 'none',
          backgroundColor: 'var(--acc)', color: '#fff', cursor: 'pointer',
          fontFamily: 'var(--fm)', fontSize: '0.8rem', fontWeight: 500,
        }}>{t.accept}</button>
        <button onClick={() => handleChoice('declined')} style={{
          padding: '0.4rem 1rem', borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'transparent',
          color: '#fff', cursor: 'pointer',
          fontFamily: 'var(--fm)', fontSize: '0.8rem',
        }}>{t.decline}</button>
      </div>
    </div>
  );
}
