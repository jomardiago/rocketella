import Image from 'next/image';

export default function BrandingSection() {
  return (
    <section className="mt-16 border border-y-1 border-y-black relative">
      <Image
        src="/creative-people.jpg"
        alt="Creative people working and laughing"
        width={1000}
        height={1000}
        className="w-full object-cover opacity-30 h-[500px] lg:h-[700px]"
        quality={100}
      ></Image>
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <p className="w-full text-center text-xl md:text-2xl lg:text-3xl lg:w-[650px]">
          A ONE-STOP MARKETING AND CREATIVE AGENCY <span className="block">THAT PRODUCES TOP NOTCH</span>{' '}
          <span className="block">BRANDING SOLUTIONS FOR BUSINESSES,</span>
          <span className="text-2xl font-semibold md:text-3xl lg:text-4xl">BIG AND SMALL</span>
        </p>
      </div>
    </section>
  );
}
