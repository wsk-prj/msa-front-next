import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white p-4 border-b border-neutral-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">wsk0715</Link>
        </div>
      </div>
    </header>
  );
}
