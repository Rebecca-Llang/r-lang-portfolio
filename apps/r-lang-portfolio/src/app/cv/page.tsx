import { contact, cvInfo, cvSections } from '../constants/cv-info';
import { getRepoName, getRepos } from '../projects';

const repos = await getRepos();

export default function CV() {
  return (
    <div className="container mx-auto max-w-[90%] px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Curriculum Vitae</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cvSections.map((section) => (
          <div
            className={`border-2 border-gray-300 rounded-md p-4 ${
              section.section === 'About Me' ||
              section.section === 'Experience' ||
              section.section === 'Projects'
                ? 'md:col-span-2'
                : ''
            }`}
            key={section.section}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.section}</h2>
            {cvInfo
              .filter((info) => info.section === section.section)
              .map((info) => (
                <div className="p-2" key={info.title}>
                  {info.section === 'About Me' && (
                    <p className="text-gray-700">{info.content}</p>
                  )}

                  <div className="flex flex-row gap-4">
                    {info.section === 'Education' && (
                      <div className="flex-1">
                        <h3 className="text-xl font-medium">{info.title}</h3>
                        <p className="text-gray-600">{`${info.subtitle} | ${info.date}`}</p>
                        <p className="mt-2">{info.content}</p>
                        <p className="mt-1 text-gray-700">{info.details}</p>
                      </div>
                    )}

                    {info.section === 'Skills' && (
                      <div className="flex-1">
                        <h3 className="text-xl font-medium">{info.title}</h3>
                        <p className="mt-2">{info.content}</p>
                      </div>
                    )}
                  </div>

                  {info.section === 'Experience' && (
                    <>
                      <h3 className="text-xl font-medium">{info.title}</h3>
                      <p className="text-gray-600">{`${info.subtitle} | ${info.date}`}</p>
                      <p className="mt-2">{info.content}</p>
                      <p className="mt-1 text-gray-700">{info.details}</p>
                    </>
                  )}

                  {info.section === 'Projects' && (
                    <>
                      {repos.map(
                        (repo) =>
                          getRepoName(repo.name) === info.title && (
                            <h3
                              className="text-xl font-medium"
                              key={info.title}
                            >
                              <a
                                className="text-blue-900 hover:text-blue-800"
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
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
                    <p className="text-gray-700">{info.content}</p>
                  )}
                </div>
              ))}

            {section.section === 'Contact' && (
              <div className="p-4">
                {contact.map((contact) => (
                  <div key={contact.title} className="mb-3">
                    <h3 className="text-xl font-medium">{contact.title}</h3>
                    {contact.title !== 'Phone' ? (
                      <a
                        href={contact.link.toString()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-800"
                      >
                        {contact.details}
                      </a>
                    ) : (
                      <p className="text-gray-700">{contact.details}</p>
                    )}
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
