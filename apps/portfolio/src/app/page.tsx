import Image from 'next/image';
import rebeccaPhoto from '../assets/RebeccaLang.png';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 gap-6 sm:gap-8">
      <Image
        src={rebeccaPhoto}
        alt="Photo of Rebecca Lang"
        width={350}
        priority={true}
        className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[350px] xl:h-[350px] rounded-full shadow-xl border-4 border-white/20 object-cover"
        data-testid="rebecca-photo"
      />
      <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inconsolata text-primary">
          Haere Mai!
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inconsolata text-third font-bold">
          Rebecca Lang
        </h2>
        <p className="text-lg sm:text-xl font-roboto-mono text-accent font-medium">
          Software Development Portfolio
        </p>
        <p className="text-base sm:text-lg text-textGray leading-relaxed max-w-md mx-auto lg:mx-0">
          Exploring technology and building user-friendly and efficient web
          applications.
        </p>
      </div>
    </div>
  );
}
