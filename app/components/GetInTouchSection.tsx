export default function GetInTouchSection() {
  return (
    <section className="flex justify-center py-20 bg-neutral-500 text-cotton">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-3xl text-white">Let's skyrocket your business today!</h2>
        <span className="text-center text-xl">
          <p>Got a project? Let's make it happen!</p>
          <p>Give us the details and we&apos; send you a free quote!</p>
        </span>
        <button className="bg-suede text-white py-3 px-6 rounded-md w-[200px] text-lg">Get in Touch</button>
      </div>
    </section>
  );
}
