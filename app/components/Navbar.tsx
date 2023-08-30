import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-[70%] mx-auto pt-16 flex justify-between">
      <Link href="/" className="underline underline-offset-2">
        Home
      </Link>
      <Link href="/">About Us</Link>
      <Link href="/">Sample Works</Link>
      <Link href="/">Submit an Artwork</Link>
      <Link href="/">Contact Us</Link>
    </nav>
  );
}
