import Image from 'next/image';

export default function WeTransformSection() {
  return (
    <section className="pt-16 border-b-[1px] border-black h-[650px] bg-white">
      <div className="flex justify-between items-center px-16 w-[70%] mx-auto gap-16">
        <div className="flex-1 relative">
          <Image
            src="/working-office.jpg"
            alt="Employees working on an office"
            width={300}
            height={500}
            quality={100}
          />
          <Image
            src="/holding-tablet.jpg"
            alt="A man holding a tablet"
            width={300}
            height={500}
            quality={100}
            className="absolute left-16 -bottom-16"
          />
        </div>
        <div className="font-light flex-1 text-xl flex gap-6 flex-col">
          <h2 className="text-2xl font-bold">We transform brands into an experience.</h2>
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
