import { useState, useEffect } from 'react';

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  issues: number;
  updatedAt: string;
  url: string;
}

export function useGitHubData() {
  const [data, setData] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/github')
      .then(res => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}