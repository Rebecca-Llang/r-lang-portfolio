import Image from 'next/image';
import rebeccaPhoto from '../assets/RebeccaLang.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center p-8 gap-8">
      <Image
        src={rebeccaPhoto}
        alt="Photo of Rebecca Lang"
        width={500}
        height={500}
        priority={true}
        className="flex-shrink-0 max-w-[400px] w-full h-auto"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Haere Mai!</h1>
        <h2 className="text-7xl font-bold">Rebecca Lang</h2>
        <p>Software Development Portfolio</p>
        <p>
          Exploring technology and building user-friendly and efficient web
          applications.
        </p>
      </div>
    </div>
  );
}
