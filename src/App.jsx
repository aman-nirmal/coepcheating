import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Pause, Play, Sparkles } from 'lucide-react';

const TARGET_URL = 'https://mpasm.netlify.app/';

export default function App() {
  const [countdown, setCountdown] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (countdown <= 0) {
      window.location.replace(TARGET_URL);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, isPaused]);

  return (
    <main className="redirect-container" role="main">
      <div className="icon-badge">
        <Sparkles size={32} aria-hidden="true" />
      </div>

      <h1 className="title">Redirecting to MPASM</h1>
      <p className="subtitle">
        You are being redirected to the MPASM portal at <strong>mpasm.netlify.app</strong>
      </p>

      <div className="destination-box" title={TARGET_URL}>
        <ExternalLink size={15} style={{ flexShrink: 0 }} aria-hidden="true" />
        <span>https://mpasm.netlify.app/</span>
      </div>

      <a 
        id="direct-notice-link"
        href={TARGET_URL} 
        className="btn-redirect"
        rel="noopener noreferrer"
      >
        <span>Proceed to mpasm.netlify.app</span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>

      <div className="countdown-bar">
        {!isPaused ? (
          <>
            <div className="spinner" aria-hidden="true"></div>
            <span>Redirecting in <strong>{countdown}s</strong>...</span>
            <button 
              onClick={() => setIsPaused(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                marginLeft: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
              title="Pause auto redirect"
              aria-label="Pause auto redirect"
            >
              <Pause size={13} />
            </button>
          </>
        ) : (
          <>
            <span>Auto-redirect paused.</span>
            <button 
              onClick={() => setIsPaused(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#60a5fa',
                cursor: 'pointer',
                marginLeft: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}
              title="Resume auto redirect"
              aria-label="Resume auto redirect"
            >
              <Play size={13} />
              <span>Resume</span>
            </button>
          </>
        )}
      </div>
    </main>
  );
}
