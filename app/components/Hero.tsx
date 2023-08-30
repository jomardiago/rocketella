import Image from 'next/image';
import localFont from 'next/font/local';

const josefinsansBold = localFont({ src: '../../public/fonts/JosefinSans-Bold.ttf' });

export default function Hero() {
  return (
    <div className="mx-auto text-center pt-16 flex flex-col gap-4">
      <div className="flex justify-center">
        <Image src="/Icon-Logo-Black.png" alt="Rocketella" width={250} height={250} />
      </div>
      <p className="text-3xl font-extralight">We are Rocketella Studios.</p>
      <p className={`${josefinsansBold.className} text-4xl`}>
        Delivering beyond limitless creativity, by all means possible.
      </p>
    </div>
  );
}
