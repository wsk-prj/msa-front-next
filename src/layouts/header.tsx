import Link from "next/link";
import { Button } from "../components/ui/button";
import { LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white p-4 border-b border-neutral-300">
      <div className="flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">wsk0715</Link>
        </div>

        {/* 로그인 버튼 */}
        <div className="flex items-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/login" className="flex items-center gap-1">
              <LogIn className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
