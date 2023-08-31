import Image from 'next/image';

export default function WhatWeOfferSection() {
  return (
    <section className="relative">
      <Image
        src="/digital-nomad.jpg"
        alt="A girl smiling and holding a tablet"
        width={1000}
        height={1000}
        quality={100}
        className="w-full object-cover opacity-70 object-top"
      />
      <div className="absolute top-0 p-36 h-full text-2xl">
        <div className="flex justify-between items-center h-full">
          <div className="flex-1 flex flex-col gap-32">
            <div>
              <h2 className="text-3xl font-bold">What we offer</h2>
              <p className="font-light mt-2">
                Rocketella Studios offers a wide array of marketing and creative services done with passion and
                dedication to satisfy customer demands and brand requirements.
              </p>
            </div>

            <div>
              <h2 className="font-bold">Branding</h2>
              <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px] mt-2">Learn More</button>
            </div>

            <div>
              <h2 className="font-bold">Digital Marketing Management</h2>
              <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px] mt-2">Learn More</button>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="flex flex-col gap-40">
              <div>
                <h2 className="font-bold">Strategy Consultation</h2>
                <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px] mt-2">Learn More</button>
              </div>
              <div>
                <h2 className="font-bold">Content Creation</h2>
                <button className="bg-neutral-500 text-white py-3 px-6 rounded-md w-[200px] mt-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
