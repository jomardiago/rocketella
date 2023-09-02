import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="contained py-6 text-base">
      <div className="flex flex-col gap-4 md:items-center">
        <Image src="/Icon-Logo-Black.png" alt="Rocketella icon" width={200} height={200} quality={100} />
        <h2 className="text-2xl font-semibold">We are Rocketella Studios</h2>
      </div>
      <div className="flex flex-col gap-4 justify-between md:flex-row md:mt-6">
        <div>
          <p>Mobile No.: 0977-247-4203</p>
          <p>Email: ibetdiagoramos@yahoo.com</p>
          <p className="hidden md:block">&copy; 2023 Rocketella Studios. All Rights Reserved</p>
        </div>
        <div>
          <p>
            We&apos;re a bit social. Follow us!{' '}
            <span className="flex mt-2">
              <Image src="/facebook.png" alt="Facebook logo" width={40} height={40} quality={100} />
              <Image src="/ig.png" alt="Instagram logo" width={40} height={40} quality={100} />
              <Image src="/linkedin.png" alt="Linkedin logo" width={40} height={40} quality={100} />
            </span>
          </p>
          <p className="mt-4 md:hidden">&copy; 2023 Rocketella Studios. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
