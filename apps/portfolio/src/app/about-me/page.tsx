import { aboutMe } from '../constants/about-me';
import { Video } from '../components/video-comp';
import { projects } from '../constants/projects';
import Image from 'next/image';
import Shelby from '../assets/Shelby.png';
import tieke from '../assets/tieke.png';

export default function AboutMe() {
  return (
    <main>
      <div>
        <h1>About Me</h1>

        <p>{aboutMe.intro}</p>
        <Image
          src={Shelby}
          alt="Shelby The Cat"
          width={100}
          height={100}
          priority={true}
          className="w-10 h-10"
        />
      </div>
      <div>
        <Image
          src={tieke}
          alt="Tieke/Saddleback Bird"
          width={100}
          height={100}
          priority={true}
          className="w-10 h-10"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Project Highlight</h2>
        <div className="mb-4">
          <a
            href="/projects#donate-mate"
            className="text-accent hover:underline text-lg font-semibold"
          >
            DonateMate
          </a>
          <p>
            {
              projects.find((project) => project.name === 'DonateMate')
                ?.description
            }
          </p>
        </div>
        <div className="mb-6">
          <Video />
        </div>
        <div>
          <a
            href="https://donatemate.pushed.nz"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Have a play yourself →
          </a>
        </div>
      </div>
    </main>
  );
}
