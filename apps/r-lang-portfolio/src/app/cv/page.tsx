import { contact, cvInfo, cvSections } from '../constants/cv-info';

export default function CV() {
  return (
    <div>
      <h1>CV</h1>
      {cvSections.map((section) => (
        <div key={section.section}>
          <h2>{section.section}</h2>
          {cvInfo
            .filter((info) => info.section === section.section)
            .map((info) => {
              return (
                <div key={info.title}>
                  {info.section === 'About Me' && (
                    <>
                      <p>{info.content}</p>
                    </>
                  )}
                  {info.section === 'Education' && (
                    <>
                      <h3>{info.title}</h3>
                      <p>{info.date}</p>
                      <p>{info.subtitle}</p>
                      <p>{info.content}</p>
                      <p>{info.details}</p>
                    </>
                  )}
                  {info.section === 'Experience' && (
                    <>
                      <h3>{info.title}</h3>
                      <p>{info.date}</p>
                      <p>{info.subtitle}</p>
                      <p>{info.content}</p>
                      <p>{info.details}</p>
                    </>
                  )}
                  {info.section === 'Skills' && (
                    <>
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </>
                  )}
                  {info.section === 'Interests' && (
                    <>
                      <p>{info.content}</p>
                    </>
                  )}
                  {info.section === 'Projects' && (
                    <>
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </>
                  )}
                </div>
              );
            })}
          {section.section === 'Contact' && (
            <div>
              {contact.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
