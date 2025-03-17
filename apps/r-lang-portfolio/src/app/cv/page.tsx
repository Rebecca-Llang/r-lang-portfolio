import { contact, cvInfo, cvSections } from '../constants/cv-info';
import { getRepoName, getRepos } from '../projects';

const repos = await getRepos();

export default function CV() {
  return (
    <div className="container mx-auto max-w-[90%] px-4">
      <h1 className="text-center pt-7 pb-2">Curriculum Vitae</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cvSections.map((section) => (
          <div
            className={`border-2 border-eggshell border-opacity-30 rounded-md p-4 ${
              section.section === 'About Me' ||
              section.section === 'Experience' ||
              section.section === 'Projects'
                ? 'md:col-span-2'
                : ''
            }`}
            key={section.section}
          >
            <h2 className="pt-3">{section.section}</h2>
            {cvInfo
              .filter((info) => info.section === section.section)
              .map((info) => (
                <div className="p-2" key={info.title}>
                  {info.section === 'About Me' && <p>{info.content}</p>}

                  <div className="flex flex-row gap-4">
                    {info.section === 'Education' && (
                      <div className="flex-1">
                        <h3>{info.title}</h3>
                        <p>{`${info.subtitle} | ${info.date}`}</p>
                        <p>{info.content}</p>
                        <p>{info.details}</p>
                      </div>
                    )}

                    {info.section === 'Skills' && (
                      <div key={info.title} className="flex flex-col gap-2">
                        <h3>{info.title}</h3>
                        <div className="flex flex-wrap gap-2 pb-4">
                          {info.content.split(' • ').map((skill, index) => (
                            <span
                              key={index}
                              className="bg-accent text-white text-sm px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {info.section === 'Experience' && (
                    <>
                      <h3>{info.title}</h3>
                      <p
                        key={info.subtitle}
                      >{`${info.subtitle} | ${info.date}`}</p>
                      <p>{info.content}</p>
                      <p>{info.details}</p>
                    </>
                  )}

                  {info.section === 'Projects' && (
                    <>
                      {repos.map(
                        (repo) =>
                          getRepoName(repo.name) === info.title && (
                            <h3 key={info.title}>
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent"
                              >
                                {info.title}
                              </a>
                            </h3>
                          )
                      )}
                      <p className="mt-2">
                        {info.subtitle + '  |  ' + info.date}
                      </p>
                      <p className="mt-2">{'Details:' + ' ' + info.content}</p>
                      <p className="mt-2">{info.details}</p>
                    </>
                  )}

                  {info.section === 'Interests' && (
                    <div className="flex flex-wrap gap-2">
                      {info.content.split(' • ').map((interest, index) => (
                        <span
                          key={index}
                          className="bg-accent text-white text-sm px-3 py-2 w-max-fit h-max-fit rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            {section.section === 'Contact' && (
              <div className="p-4">
                {contact.map((contact) => (
                  <div key={contact.title} className="mb-3">
                    <h3>{contact.title}</h3>
                    <div className="flex flex-col-2">
                      <div className="w-8 h-8 pb-2 flex justify-start items-center text-accent">
                        {contact.icon}
                      </div>

                      {contact.title !== 'Phone' ? (
                        <a
                          href={contact.link.toString()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.details}
                        </a>
                      ) : (
                        <p>{contact.details}</p>
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
