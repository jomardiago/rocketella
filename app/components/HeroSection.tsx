import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const josefinsansBold = localFont({ src: '../../public/fonts/JosefinSans-Bold.ttf' });

export default function HeroSection() {
  return (
    <section className="contained relative">
      <div className="pt-4 flex w-full justify-between items-center">
        <div className="w-[80%] flex gap-3 items-center">
          <h1 className="text-lg font-semibold">
            <Image src="/Icon-Logo-Black.png" alt="Rocketella" width={30} height={30} quality={100} />
          </h1>
          <span className="flex w-full items-center bg-smoke p-2 rounded-md gap-2">
            <i className="fa-solid fa-magnifying-glass text-white rotate-90 text-sm -mt-1"></i>
            <input
              type="text"
              placeholder="Search in inspiration"
              className="w-full text-white bg-transparent outline-none placeholder:italic placeholder:text-white text-sm focus:placeholder:opacity-0"
            />
          </span>
        </div>
        <div className="flex gap-6">
          <span>
            <i className="fa-regular fa-bookmark text-lg"></i>
          </span>
          <span>
            <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
          </span>
        </div>
      </div>

      <nav className="w-[70%] mx-auto pt-16 flex justify-between">
        <Link href="/" className="underline underline-offset-2">
          Home
        </Link>
        <Link href="/">About Us</Link>
        <Link href="/">Sample Works</Link>
        <Link href="/">Submit an Artwork</Link>
        <Link href="/">Contact Us</Link>
      </nav>

      <div className="mx-auto text-center pt-16 flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src="/Icon-Logo-Black.png" alt="Rocketella" width={250} height={250} />
        </div>
        <p className="text-3xl font-extralight">We are Rocketella Studios.</p>
        <p className={`${josefinsansBold.className} text-4xl`}>
          Delivering beyond limitless creativity, by all means possible.
        </p>
      </div>

      <div className="pt-24 flex justify-center gap-28">
        <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px]">Talk to an Expert</button>
        <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px]">See our Work</button>
      </div>

      <Image
        src="/Icon-Logo-Black.png"
        alt="Rocketella"
        width={700}
        height={700}
        quality={100}
        className="absolute bottom-0 opacity-5 -z-10"
      />
    </section>
  );
}
