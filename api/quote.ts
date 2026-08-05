import type { VercelRequest, VercelResponse } from '@vercel/node';

const localQuotes = [
  { text: 'The ultimate aim of all creative activity is building.', author: 'Walter Gropius' },
  { text: 'Color is a power which directly influences the soul.', author: 'Wassily Kandinsky' },
  { text: 'Form ever follows function.', author: 'Louis Sullivan' },
  { text: 'Less is more.', author: 'Ludwig Mies van der Rohe' },
  { text: 'Art is not what you see, but what you make others see.', author: 'Paul Klee' },
  { text: 'Everything is design. Everything.', author: 'Paul Rand' },
  { text: 'The details are not the details. They make the design.', author: 'Charles Eames' },
  { text: 'Art does not reproduce what we see. It makes us see.', author: 'Paul Klee' },
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    if (!response.ok) throw new Error('ZenQuotes failed');

    const data = await response.json();
    const quote = data[0];

    res.status(200).json({
      text: quote.q,
      author: quote.a,
      source: 'zenquotes',
    });
  } catch {
    const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    res.status(200).json({
      text: random.text,
      author: random.author,
      source: 'local',
    });
  }
}