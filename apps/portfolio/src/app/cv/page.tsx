import {
  contact,
  education,
  experience,
  skills,
  interests,
  cvSections,
  aboutMeContent,
} from '../constants/cv-data';
import { projects } from '../constants/projects';
import { getRepos } from '../projects';
import { getRepoName } from '../utils/repository';
import Icon from '../components/icon-comp';

const repos = await getRepos();

export default function CV() {
  return (
    <div className="container mx-auto max-w-[90%] px-4">
      <h1 className="text-center pt-7 pb-2">Curriculum Vitae</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {cvSections.map((section) => (
          <div
            className={`border-2 border-eggshell border-opacity-30 rounded-md p-4 ${
              section === 'About Me' ||
              section === 'Experience' ||
              section === 'Projects'
                ? 'md:col-span-2'
                : ''
            }`}
            key={section}
          >
            <h2 className="pt-3">{section}</h2>

            {section === 'About Me' && (
              <div className="p-2">
                <p>{aboutMeContent}</p>
              </div>
            )}

            {section === 'Education' && (
              <div className="p-2">
                {education.map((edu) => (
                  <div key={edu.title} className="flex-1 mb-4">
                    <h3>{edu.title}</h3>
                    <p>{`${edu.institution} | ${edu.date}`}</p>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section === 'Skills' && (
              <div className="p-2">
                {skills.map((skillCategory) => (
                  <div
                    key={skillCategory.title}
                    className="flex flex-col gap-2 mb-4"
                  >
                    <h3>{skillCategory.title}</h3>
                    <div className="flex flex-wrap gap-2 pb-4">
                      {skillCategory.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'Experience' && (
              <div className="p-2">
                {experience.map((exp) => (
                  <div key={exp.title} className="mb-4">
                    <h3>{exp.title}</h3>
                    <p>{`${exp.company} | ${exp.dateRange}`}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section === 'Projects' && (
              <div className="p-2">
                {projects.map((project) => {
                  const repo = repos.find(
                    (r) => getRepoName(r.name) === project.name
                  );
                  return (
                    <div key={project.id} className="mb-4">
                      {repo && (
                        <h3>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent flex items-center gap-1"
                          >
                            {project.name} →
                          </a>
                        </h3>
                      )}
                      {project.demoLink && (
                        <p className="mt-2">
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent flex items-center gap-1"
                          >
                            Live Demo →
                          </a>
                        </p>
                      )}
                      <p className="mt-2">
                        {project.role} | {project.lastUpdated}
                      </p>
                      <p className="mt-2">
                        Details: {project.cvDescription || project.description}
                      </p>
                      <p className="mt-2">
                        Technologies Used:{' '}
                        {project.technologies.languages.join(', ')}
                        {project.technologies.frameworks &&
                          `, ${project.technologies.frameworks.join(', ')}`}
                        {project.technologies.apis &&
                          `, ${project.technologies.apis.join(', ')}`}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {section === 'Interests' && (
              <div className="p-2">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-accent text-white text-sm px-3 py-2 w-max-fit h-max-fit rounded-full"
                    >
                      {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {section === 'Contact' && (
              <div className="p-4">
                {contact.map((contactItem) => (
                  <div key={contactItem.title} className="mb-3">
                    <h3>{contactItem.title}</h3>
                    <div className="flex flex-col-2">
                      <div className="h-8 gap-1 pb-2 flex items-center text-accent">
                        <Icon icon={<contactItem.icon size={20} />} />
                      </div>

                      {contactItem.title !== 'Phone' ? (
                        <a
                          href={contactItem.link?.toString()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-2"
                        >
                          {contactItem.details}
                        </a>
                      ) : (
                        <p className="pl-2">{contactItem.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
