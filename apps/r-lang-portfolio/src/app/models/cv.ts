export type CVinfo = {
  section: string;
  title: string;
  date: string | number;
  subtitle: string;
  content: string;
  details?: string;
};

export type Contact = {
  section: string;
  title: string;
  details: string | number;
  icon?: string;
  link?: string;
};

export type CVsections = {
  section: string;
};
