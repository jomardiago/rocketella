import localFont from 'next/font/local';
import Image from 'next/image';

const josefinsansSemiBold = localFont({ src: '../../public/fonts/JosefinSans-SemiBold.ttf' });

export default function BrandingSection() {
  return (
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
  );
}
