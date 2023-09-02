import Image from 'next/image';

export default function BenefitsSection() {
  const items = [
    {
      id: 'savings',
      imageSrc: '/savings.png',
      imageAlt: 'A bag with a dollar icon',
      title: 'Savings (lots of it!)',
      content: `Having an in-house creative and marketing team will require you to provide monthly compensation and
    benefits, invest in equipments, rent for office spaces, and in some cases, offer transportation allowances.
    With Rocketella Studios, you'll only get to pay for the service you'd like to acquire which is
    less costly than maintaining your own employees. And when we say less cost and expenses, this means more
    savings!`,
    },
    {
      id: 'fresherPerspective',
      imageSrc: '/fresher-perspective.png',
      imageAlt: 'A pen icon',
      title: 'Fresher perspective!',
      content: `Your Rocketella team is exposed to various marketing and design styles that match most creative needs. 
      And since part of our work is to develop your own, you can always guarantee that your campaigns will always have a fresh and 
      innovative approach!`,
    },
    {
      id: 'highlySkilledProfessionals',
      imageSrc: '/proffesionals.png',
      imageAlt: 'A group of people icon',
      title: 'Highly skilled professionals',
      content: `Our team consists of young, fun, and creative geniuses that have mastered all the whats and the hows when it comes to 
        creating campaigns. With us, you can always guarantee that your brand's message is conveyed effectively.`,
    },
    {
      id: 'personalizedStrategies',
      imageSrc: '/personalized-strategies.png',
      imageAlt: 'A light bulb icon',
      title: 'Personalized strategies',
      content: `We don't believe in having a one-size-fits-all approach. We treat our clients individually and design a unique strategy based on 
      our client's needs and objectives.`,
    },
    {
      id: 'fastTurnaroundTime',
      imageSrc: '/fast-turnaround.png',
      imageAlt: 'A rocket icon',
      title: 'Fast turnaround time',
      content: `Our clients rely on us for rapid response and lightning fast turnaround times. Tardiness has no room for us so rest assured 
        that we will always deliver every project on time, or even ahead of schedule.`,
    },
  ];

  return (
    <section>
      <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
        {items.map((item) => (
          <div key={item.id} className="border border-neutral-500 text-center text-lg px-4 py-6 bg-white md:px-16 lg:basis-1/3 lg:h-[500px]">
            <div className="flex justify-center">
              <Image src={item.imageSrc} alt={item.imageAlt} width={50} height={50} quality={100} className="w-[40px] h-[40px] lg:h-[55px] lg:w-[55px]" />
            </div>
            <h2 className="text-xl font-bold lg:text-2xl">{item.title}</h2>
            <p className="pt-4 text-lg font-light lg:text-xl">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
