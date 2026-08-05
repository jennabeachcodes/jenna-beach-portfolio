import type { VercelRequest, VercelResponse } from '@vercel/node';

const REPOS = ['accessiblemedrx', 'notesapp', 'tasktracker'];
const USERNAME = 'jennabeachcodes';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const results = await Promise.all(
      REPOS.map(async repo => {
        const response = await fetch(
          `https://api.github.com/repos/${USERNAME}/${repo}`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28',
            },
          }
        );
        if (!response.ok) throw new Error(`Failed to fetch ${repo}`);
        const data = await response.json() as any;
        return {
          name: data.name,
          description: data.description,
          language: data.language,
          stars: data.stargazers_count,
          issues: data.open_issues_count,
          updatedAt: data.updated_at,
          url: data.html_url,
        };
      })
    );
    res.setHeader('Cache-Control', 's-maxage=3600');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}