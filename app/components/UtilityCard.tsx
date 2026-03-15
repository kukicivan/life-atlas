'use client';

import CopyButton from './CopyButton';

interface UtilityCardProps {
  title: string;
  description: string;
  command: string;
  sourceUrl: string;
  prerequisites?: string;
  readmeUrl?: string;
}

export default function UtilityCard({ title, description, command, sourceUrl, prerequisites, readmeUrl }: UtilityCardProps) {
  return (
    <div className="glow-card tool-card">
      <h3 className="glow-text-green" style={{ textShadow: 'none' }}>{title}</h3>
      <p style={{ margin: '1rem 0', fontSize: '0.9rem', opacity: 0.8, minHeight: '3em' }}>{description}</p>
      
      {prerequisites && (
        <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.5rem' }}>
          Requires: {prerequisites}
        </p>
      )}

      <div className="code-command">
        <code style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>{command}</code>
        <CopyButton text={command} />
      </div>

      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a 
          href={sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="source-link"
        >
          view source
        </a>
        {readmeUrl && (
          <a 
            href={readmeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="source-link"
          >
            readme
          </a>
        )}
      </div>
    </div>
  );
}
