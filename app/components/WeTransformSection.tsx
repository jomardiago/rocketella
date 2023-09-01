import Image from 'next/image';

export default function WeTransformSection() {
  return (
    <section className="pt-6 h-[500px] border-b-[1px] border-black bg-white md:pt-12 lg:h-[700px] lg:pt-10">
      <div className="flex justify-between items-center mx-auto gap-16 px-4 md:px-14 md:w-[80%] lg:px-16 lg:w-[90%]">
        <div className="hidden flex-1 relative lg:block">
          <Image
            src="/working-office.jpg"
            alt="Employees working on an office"
            width={300}
            height={500}
            quality={100}
            className="lg:block"
          />
          <Image
            src="/holding-tablet.jpg"
            alt="A man holding a tablet"
            width={300}
            height={500}
            quality={100}
            className="hidden lg:block lg:absolute lg:left-16 lg:-bottom-16"
          />
        </div>
        <div className="font-light flex-1 flex flex-col text-lg gap-4 md:text-xl md:gap-8 lg:text-2xl lg:gap-6">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">We transform brands into an experience.</h2>
          <p>
            Rocketella Studios is a premier marketing and creative agency in the Philippines that handcrafts unique
            digital experience for modern businesses of various types and sizes.
          </p>
          <p>
            Our core areas of focus include branding, visual marketing, content creation, and marketing consultancy.
          </p>
          <p>
            We have an in-house team of sharply creative artists, writers, and brand strategists who have all the nuts
            and bolts to make business stand out and make brands matter.
          </p>
        </div>
      </div>
    </section>
  );
}
