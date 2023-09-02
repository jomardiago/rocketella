import Image from 'next/image';

export default function MeetTheFounderSection() {
  return (
    <section className="contained py-6 lg:px-32">
      <div className="flex flex-col justify-between items-center mx-auto gap-16 lg:flex-row">
        <div className="flex-1 relative">
          <Image
            src="/Icon-Logo-Black.png"
            alt="Rocketella black logo"
            width={1000}
            height={1000}
            quality={100}
            className="h-[300px] w-[300px] opacity-10 lg:h-[450px] lg:w-[450px]"
          />
          <Image
            src="/founder.jpg"
            alt="Rocketella black logo"
            width={1000}
            height={1000}
            quality={100}
            className="rounded-full h-[250px] w-[250px] object-cover object-bottom absolute top-12 left-4 lg:w-[350px] lg:h-[350px]"
          />
        </div>
        <div className="flex-1 text-lg flex gap-6 flex-col font-light md:text-xl">
          <h2 className="text-xl font-bold md:text-2xl">MEET THE FOUNDER</h2>
          <p>
            Hello, Rocketeers! I&apos;m Yvette Ramos, the founder of this extraordinary marketing and creatives agency.
            With over 12 years of experience in the marketing industry, I have witnessed the power of effective
            marketing strategies and their ability to transform businesses. My journey has been shaped by a solid
            marketing and communications background, allowing me to navigate various industries, catering to both B2B
            and B2C markets.
          </p>
          <button className="bg-neutral-500 text-white rounded-md w-[200px] font-normal text-base py-2 px-4 lg:py-3 lg:px-6 self-center">Read More...</button>
        </div>
      </div>
    </section>
  );
}
