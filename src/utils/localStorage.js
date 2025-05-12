const KEY = 'code_snippets';

export const saveSnippet = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const getSnippets = () => {
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : [];
};
