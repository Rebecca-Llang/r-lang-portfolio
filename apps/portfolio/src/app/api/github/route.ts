import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-app',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const userResponse = await fetch(
      'https://api.github.com/users/Rebecca-Llang',
      { headers }
    );

    if (!userResponse.ok) {
      throw new Error('Failed to fetch GitHub user data');
    }

    const userData = await userResponse.json();

    const reposResponse = await fetch(
      'https://api.github.com/users/Rebecca-Llang/repos?sort=updated&per_page=6',
      { headers }
    );

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const reposData = await reposResponse.json();

    return NextResponse.json(
      {
        user: userData,
        repositories: reposData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
