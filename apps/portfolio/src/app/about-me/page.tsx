import { aboutMe } from '../constants/about-me';

export default function AboutMe() {
  return (
    <main>
      <h1>About Me</h1>
      <div>
        <p>{aboutMe.intro}</p>
      </div>
    </main>
  );
}
