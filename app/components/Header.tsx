import Image from 'next/image';

export default function Header() {
  return (
    <div className="pt-4 flex w-full justify-between items-center">
      <div className="w-[80%] flex gap-3 items-center">
        <h1 className="text-lg font-semibold">
          <Image src="/Icon-Logo-Black.png" alt="Rocketella" width={30} height={30} quality={100} />
        </h1>
        <span className="flex w-full items-center bg-smoke p-2 rounded-md gap-2">
          <i className="fa-solid fa-magnifying-glass text-white rotate-90 text-sm -mt-1"></i>
          <input
            type="text"
            placeholder="Search in inspiration"
            className="w-full text-white bg-transparent outline-none placeholder:italic placeholder:text-white text-sm focus:placeholder:opacity-0"
          />
        </span>
      </div>
      <div className="flex gap-6">
        <span>
          <i className="fa-regular fa-bookmark text-lg"></i>
        </span>
        <span>
          <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
        </span>
      </div>
    </div>
  );
}
