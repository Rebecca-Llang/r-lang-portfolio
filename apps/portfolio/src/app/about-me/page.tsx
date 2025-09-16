import { aboutMe } from '../constants/about-me';
import { Video } from '../components/video-comp';
import { projects } from '../constants/projects';
import Image from 'next/image';
import Shelby from '../../assets/Shelby.png';
import tieke from '../../assets/tīeke.png';
import { interests, skills } from '../constants/cv-data';

export default function AboutMe() {
  return (
    <main className="bg-white p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
      <div className="relative pb-8 md:pb-16">
        <Image
          src={tieke}
          alt="Photo of Tieke/Saddleback Bird, Zealandia"
          width={300}
          height={300}
          priority={true}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-xl object-cover border-4 border-white/20 float-left mr-4 md:mr-6 mb-4"
          data-testid="tieke-photo"
        />
        <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-14 mb-4">About Me</h1>
        <div className="space-y-4 px-2 md:space-y-6">
          {aboutMe.intro.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="clear-both"></div>
      </div>

      <div className="pb-8 md:pb-14">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-4xl mx-auto px-4">
          <h2 className="pr-2 text-lg md:text-xl font-bold flex items-center">
            Interests
          </h2>
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="p-2 px-3 md:px-4 bg-eggshell text-textGray rounded-lg text-center hover:shadow-md transition-shadow text-sm md:text-base"
            >
              {interest.name}
            </div>
          ))}
        </div>
      </div>

      <div className="pb-8 pl-6 pr-4 mb-16 border-2 border-primary border-opacity-10 rounded-md bg-background md:pb-16">
        <h2 className="text-xl mt-6 md:mt-8 md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
          Project Highlight
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12 lg:items-start">
          <div className="w-full lg:w-1/3 lg:min-w-80 mb-6 lg:mb-0">
            <a
              href="/projects#donate-mate"
              className="text-accent hover:underline text-lg md:text-xl font-semibold block mb-3 text-center lg:text-left"
            >
              DonateMate
            </a>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-center lg:text-left">
              {
                projects.find((project) => project.name === 'DonateMate')
                  ?.description
              }
            </p>
            <div className="space-y-2 text-center lg:text-left">
              <a
                href={`https://github.com/Rebecca-Llang/${
                  projects.find((project) => project.name === 'DonateMate')
                    ?.githubRepo
                }`}
                className="text-accent hover:underline block text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository →
              </a>
              <a
                href="https://donatemate.pushed.nz"
                className="text-accent hover:underline block text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
              <a
                href="/projects"
                className="text-accent hover:underline block text-sm md:text-base"
              >
                View Projects →
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="rounded-lg shadow-xl border-4 border-white/20 overflow-hidden">
              <Video />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
            <Image
              src={Shelby}
              alt="Photo of Shelby The Cat"
              width={400}
              height={400}
              priority={true}
              className="rounded-full shadow-xl object-cover w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-4 border-white/20"
              data-testid="shelby-photo"
            />
            <p className="mt-4 text-sm md:text-base italic text-center">
              Meet Shelby, my coding companion
            </p>
          </div>

          <div className="flex flex-col items-center md:w-1/2 lg:w-2/3">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center items-center max-w-4xl px-4">
              <h2 className="pr-2 mt-2 text-lg md:text-xl font-bold flex items-center">
                <a href="/cv" className="text-secondary hover:underline">
                  Core Skills:
                </a>
              </h2>
              {skills
                .find((skill) => skill.title === 'Soft Skills')
                ?.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-eggshell text-textGray px-3 m-1 md:px-4 py-2 rounded-full hover:shadow-md transition-shadow text-sm md:text-base"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            <div className="mt-6 flex justify-center">
              <h2 className="text-lg mt-1 md:text-xl font-bold flex items-center">
                <a href="/cv#skills" className="text-secondary hover:underline">
                  Technical Skills →
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
