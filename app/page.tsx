import Image from 'next/image';

import Header from './components/Header';
import HeaderAction from './components/HeaderAction';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import localFont from 'next/font/local';

const josefinsansSemiBold = localFont({ src: '../public/fonts/JosefinSans-SemiBold.ttf' });

export default function Home() {
  return (
    <main>
      <section className="contained relative">
        <Header />
        <Navbar />
        <Hero />
        <HeaderAction />
        <Image
          src="/Icon-Logo-Black.png"
          alt="Rocketella"
          width={700}
          height={700}
          quality={100}
          className="absolute bottom-0 opacity-5 -z-10"
        />
      </section>

      <section className="mt-16 border border-y-1 border-y-black relative">
        <Image
          src="/creative-people.jpg"
          alt="Creative people"
          width={1000}
          height={1000}
          className="w-full h-[700px] object-cover opacity-40"
          quality={100}
        ></Image>
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <p className="w-[650px] text-center text-2xl">
            A ONE-STOP MARKETING AND CREATIVE AGENCY <span className="block">THAT PRODUCES TOP NOTCH</span>{' '}
            <span className="block">BRANDING SOLUTIONS FOR BUSINESSES,</span>
            <span className={`${josefinsansSemiBold.className} text-3xl`}>BIG AND SMALL</span>
          </p>
        </div>
      </section>
    </main>
  );
}
