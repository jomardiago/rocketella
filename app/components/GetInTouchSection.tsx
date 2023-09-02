export default function GetInTouchSection() {
  return (
    <section className="flex justify-center p-6 bg-neutral-500 text-cotton">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-2xl text-white text-center">Let&apos;s skyrocket your business today!</h2>
        <span className="text-center text-lg">
          <p>Got a project? Let&apos;s make it happen!</p>
          <p>Give us the details and we&apos; send you a free quote!</p>
        </span>
        <button className="bg-suede text-white rounded-md w-[200px] text-lg font-normal py-2 px-4 lg:py-3 lg:px-6">Get in Touch</button>
      </div>
    </section>
  );
}
