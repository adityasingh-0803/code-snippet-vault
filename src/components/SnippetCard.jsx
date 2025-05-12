import React from 'react';

export default function SnippetCard({ snippet }) {
  return (
    <div className="border rounded p-4 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">{snippet.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{snippet.language}</p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-2 mt-2 rounded text-sm overflow-auto">
        <code>{snippet.code}</code>
      </pre>
      <div className="mt-2 flex flex-wrap gap-2">
        {snippet.tags.map((tag, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs dark:bg-blue-800 dark:text-blue-200">#{tag.trim()}</span>
        ))}
      </div>
    </div>
  );
}
