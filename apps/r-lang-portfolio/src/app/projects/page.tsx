async function getRepos() {
  const res = await fetch('https://api.github.com/users/Rebecca-Llang/repos', {
    next: { revalidate: 172800 },
  });
  const data = await res.json();
  const filteredRepos = data.filter((repo) => repo.private === false);
  return filteredRepos;
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <div>
      <h1>Projects</h1>
      <h2>My Github Projects</h2>

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description || 'No description available.'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
