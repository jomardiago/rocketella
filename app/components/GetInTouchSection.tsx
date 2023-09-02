export default function GetInTouchSection() {
  return (
    <section className="flex justify-center p-6 bg-neutral-500 text-cotton lg:p-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-2xl text-white text-center lg:text-4xl">Let&apos;s skyrocket your business today!</h2>
        <span className="text-center text-lg lg:text-2xl">
          <p>Got a project? Let&apos;s make it happen!</p>
          <p>Give us the details and we&apos;ll send you a free quote!</p>
        </span>
        <button className="bg-suede text-white rounded-md w-[200px] text-lg font-normal py-2 px-4 lg:py-3 lg:px-6 lg:text-xl">Get in Touch</button>
      </div>
    </section>
  );
}
