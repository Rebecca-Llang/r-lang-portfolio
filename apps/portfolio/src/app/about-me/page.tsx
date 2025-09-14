import { aboutMe } from '../constants/about-me';
import { Video } from '../components/video-comp';
import { projects } from '../constants/projects';
import Image from 'next/image';
import Shelby from '../../assets/Shelby.png';
import tieke from '../../assets/tīeke.png';

export default function AboutMe() {
  return (
    <main className="mt-12 p-16">
      <div className="relative pl-16">
        <Image
          src={tieke}
          alt="Photo of Tieke/Saddleback Bird, Zealandia"
          width={300}
          height={300}
          priority={true}
          className="float-left w-40 h-40 sm:w-42 sm:h-42 md:w-48 md:h-48 rounded-full shadow-xl object-cover border-4 border-white/20 mr-6 mb-4"
          data-testid="tieke-photo"
        />
        <div className="flex items-start pt-12 sm:pt-14 md:pt-16 mb-4">
          <h1>About Me</h1>
        </div>
        <div className="space-y-6">
          {aboutMe.intro.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="clear-both"></div>
      </div>

      <div className="p-16">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Project Highlight</h2>
          <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
            <div className="lg:w-1/3 lg:min-w-80">
              <div className="mb-6">
                <a
                  href="/projects#donate-mate"
                  className="text-accent hover:underline text-lg font-semibold block mb-3"
                >
                  DonateMate
                </a>
                <p className="text-base leading-relaxed mb-4">
                  {
                    projects.find((project) => project.name === 'DonateMate')
                      ?.description
                  }
                </p>
                <div className="space-y-2">
                  <a
                    href={`https://github.com/rebeccalang/${
                      projects.find((project) => project.name === 'DonateMate')
                        ?.githubRepo
                    }`}
                    className="text-accent hover:underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository →
                  </a>
                  <a
                    href="https://donatemate.pushed.nz"
                    className="text-accent hover:underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Have a play yourself →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="rounded-lg shadow-xl border-4 border-white/20 overflow-hidden">
                <Video />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Image
          src={Shelby}
          alt="Photo of Shelby The Cat"
          width={500}
          height={500}
          priority={true}
          className="mx-auto rounded-full shadow-xl object-cover max-w-xs border-4 border-white/20"
          data-testid="shelby-photo"
        />
        <p className="mt-4 text-sm italic">Meet Shelby, my coding companion</p>
      </div>
    </main>
  );
}
