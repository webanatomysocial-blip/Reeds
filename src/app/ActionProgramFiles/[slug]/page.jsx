import React from 'react';

export function generateStaticParams() {
  return [
    { slug: 'community-awareness' },
    { slug: 'monitoring-evaluation' },
    { slug: 'wash-projects' },
  ];
}

// This is a dummy file that catches all dynamic routes under ActionProgramFiles
export default function ActionProgramDummyPage({ params }) {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Dummy File Preview</h1>
      <p style={{ color: '#666', marginTop: '20px' }}>
        You clicked on: <strong>{params.slug}</strong>
      </p>
      <div style={{ 
        marginTop: '40px', 
        padding: '40px', 
        border: '2px dashed #ccc', 
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '40px auto'
      }}>
        This is an empty placeholder file for now. 
        You can replace this with your actual page content later.
      </div>
    </div>
  );
}
