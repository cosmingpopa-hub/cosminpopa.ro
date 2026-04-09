import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Medical Research Toolkit',
  description: 'Unified search across PubMed, Google Scholar, Semantic Scholar and Consensus. Built by Dr. Cosmin G. Popa for medical students.',
};

export default function ToolkitPage() {
  redirect('/toolkit.html');
}
