import ContactForm from '.';

export default function ContactMe() {
  return (
    <div className="flex flex-col mx-2 items-center justify-start min-h-screen mt-[10vh]">
      <h1 className="pb-2">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
