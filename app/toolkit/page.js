export const metadata = {
  title: 'Medical Research Toolkit',
  description: 'Unified search across PubMed, Google Scholar, Semantic Scholar and Consensus. Built by Dr. Cosmin G. Popa for medical students.',
};

export default function ToolkitPage() {
  return (
    <main>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '1rem 1.5rem' }}>
        <a href="/" style={{ fontFamily: 'var(--fm)', fontSize: '0.85rem', color: 'var(--acc)', textDecoration: 'none' }}>&larr; cosminpopa.ro</a>
      </div>
      <iframe
        src="/toolkit.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          border: 'none',
        }}
        title="Medical Research Toolkit"
      />
    </main>
  );
}
