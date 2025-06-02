import ContactForm from '.';

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-[10vh]">
      <h1 className="pt-4">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
