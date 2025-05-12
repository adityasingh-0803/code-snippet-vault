import React, { useState } from 'react';

export default function SnippetForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [tags, setTags] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !code) return;
    onSave({ title, language, tags: tags.split(','), code });
    setTitle('');
    setLanguage('');
    setTags('');
    setCode('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input className="w-full p-2 border rounded" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Language (e.g., JavaScript)" />
      <input className="w-full p-2 border rounded" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
      <textarea className="w-full p-2 border rounded h-40" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Your code here..." required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Save Snippet</button>
    </form>
  );
}
