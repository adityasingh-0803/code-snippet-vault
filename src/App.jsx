import React, { useEffect, useState } from 'react';
import SnippetForm from './components/SnippetForm';
import SnippetCard from './components/SnippetCard';
import ThemeToggle from './components/ThemeToggle';
import { saveSnippet, getSnippets } from './utils/localStorage';

export default function App() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    setSnippets(getSnippets());
  }, []);

  const handleSave = (snippet) => {
    const updated = [...snippets, snippet];
    setSnippets(updated);
    saveSnippet(updated);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Code Snippet Vault</h1>
        <ThemeToggle />
      </div>
      <SnippetForm onSave={handleSave} />
      <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {snippets.map((snip, index) => (
          <SnippetCard key={index} snippet={snip} />
        ))}
      </div>
    </div>
  );
}
