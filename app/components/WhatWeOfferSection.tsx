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
        className="hidden w-full object-cover opacity-70 object-top lg:block"
      />
      <div className="p-6 h-full text-lg md:w-[80%] md:mx-auto lg:absolute lg:top-0 lg:left-16">
        <div className="md:block text-center lg:hidden">
          <h2 className="text-3xl font-bold">What we offer</h2>
          <p className="font-light mt-2">
            Rocketella Studios offers a wide array of marketing and creative services done with passion and dedication
            to satisfy customer demands and brand requirements.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center h-full md:flex-row">
          <div className="flex-1 flex flex-col gap-4 text-center lg:gap-16">
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold lg:text-4xl">What we offer</h2>
              <p className="font-light mt-2 lg:text-2xl">
                Rocketella Studios offers a wide array of marketing and creative services done with passion and
                dedication to satisfy customer demands and brand requirements.
              </p>
            </div>

            <div>
              <h2 className="font-bold lg:text-2xl">Branding</h2>
              <button className="bg-neutral-500 text-white rounded-md w-[200px] font-normal text-base py-2 px-4 lg:py-3 lg:px-6 lg:text-lg">
                Learn More
              </button>
            </div>

            <div>
              <h2 className="font-bold lg:text-2xl">Digital Marketing Management</h2>
              <button className="bg-neutral-500 text-white rounded-md w-[200px] font-normal text-base py-2 px-4 lg:py-3 lg:px-6 lg:text-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-end mt-4">
            <div className="flex flex-col gap-4 text-center lg:gap-16">
              <div>
                <h2 className="font-bold lg:text-2xl">Strategy Consultation</h2>
                <button className="bg-neutral-500 text-white rounded-md w-[200px] py-2 px-4 lg:py-3 lg:px-6 lg:text-lg">
                  Learn More
                </button>
              </div>
              <div>
                <h2 className="font-bold lg:text-2xl">Content Creation</h2>
                <button className="bg-neutral-500 text-white rounded-md w-[200px] py-2 px-4 lg:py-3 lg:px-6 lg:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
