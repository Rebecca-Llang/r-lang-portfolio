import Image from 'next/image';
import rebeccaPhoto from '../assets/RebeccaLang.png';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 gap-8">
      <Image
        src={rebeccaPhoto}
        alt="Photo of Rebecca Lang"
        width={350}
        priority={true}
        className="flex-shrink-0 max-w-[350px] max-h-[400px] w-full h-auto rounded-full shadow-xl border-4 border-white/20 object-cover"
        data-testid="rebecca-photo"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-inconsolata text-primary">Haere Mai!</h1>
        <h2 className="text-7xl font-inconsolata text-third font-bold">
          Rebecca Lang
        </h2>
        <p className="text-xl font-roboto-mono text-accent font-medium">
          Software Development Portfolio
        </p>
        <p className="text-lg text-textGray leading-relaxed max-w-md">
          Exploring technology and building user-friendly and efficient web
          applications.
        </p>
      </div>
    </div>
  );
}
