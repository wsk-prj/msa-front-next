import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-200 py-6 flex flex-col items-center justify-center mt-auto">
      <nav className="flex gap-6 mb-2">
        <Link href="#" className="text-sm hover:underline cursor-default" tabIndex={-1} aria-disabled="true">About</Link>
        <Link href="#" className="text-sm hover:underline cursor-default" tabIndex={-1} aria-disabled="true">Contact</Link>
        <Link href="#" className="text-sm hover:underline cursor-default" tabIndex={-1} aria-disabled="true">Privacy</Link>
      </nav>
      <span className="text-xs text-neutral-400">© {new Date().getFullYear()} wsk0715. All rights reserved.</span>
    </footer>
  );
}
