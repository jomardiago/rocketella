import Image from 'next/image';
import localFont from 'next/font/local';

const josefinsansBold = localFont({ src: '../../public/fonts/JosefinSans-Bold.ttf' });
const josefinsansLight = localFont({ src: '../../public/fonts/JosefinSans-Light.ttf' });

export default function MeetTheFounder() {
  return (
    <section className="contained py-16">
      <div className="flex justify-between items-center px-16 w-[80%] mx-auto gap-16">
        <div className="flex-1 relative">
          <Image
            src="/Icon-Logo-Black.png"
            alt="Rocketella black logo"
            width={1000}
            height={1000}
            quality={100}
            className="h-[450px] w-[450px] opacity-10"
          />
          <Image
            src="/founder.jpg"
            alt="Rocketella black logo"
            width={1000}
            height={1000}
            quality={100}
            className="rounded-full h-[350px] w-[350px] object-cover object-bottom absolute top-12"
          />
        </div>
        <div className={`${josefinsansLight.className} flex-1 text-xl flex gap-6 flex-col`}>
          <h2 className={`${josefinsansBold.className} text-2xl`}>MEET THE FOUNDER</h2>
          <p>
            Hello, Rocketeers! I'm Yvette Ramos, the founder of this extraordinary marketing and creatives agency. With
            over 12 years of experience in the marketing industry, I have witnessed the power of effective marketing
            strategies and their ability to transform businesses. My journey has been shaped by a solid marketing and
            communications background, allowing me to navigate various industries, catering to both B2B and B2C markets.
          </p>
        </div>
      </div>
    </section>
  );
}
