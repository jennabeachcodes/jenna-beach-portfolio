import type { VercelRequest, VercelResponse } from '@vercel/node';

const REPOS = ['AccessibleMedicationReminder', 'NotesApp', 'TaskTracker'];
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
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`GitHub API ${response.status} for ${repo}: ${errorBody}`);
        }

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
    console.error('GitHub API error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch GitHub data',
      detail: error instanceof Error ? error.message : String(error)
    });
  }
}