import { Contact } from '../models/cv';

// Helper function to render contact links appropriately
export function renderContactLink(contactItem: Contact) {
  const { title, details, link } = contactItem;

  if (title === 'LinkedIn' || title === 'Github') {
    return (
      <a
        href={link?.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-2"
      >
        {details}
      </a>
    );
  }

  if (title === 'Email') {
    return (
      <a href={`mailto:${details}`} className="pl-2">
        {details}
      </a>
    );
  }

  if (link) {
    return (
      <a href={link.toString()} className="pl-2">
        {details}
      </a>
    );
  }

  return <span className="pl-2">{details}</span>;
}
