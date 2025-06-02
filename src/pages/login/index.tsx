import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                이메일
              </label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요"/>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">
                비밀번호
              </label>
              <Input id="password" type="password" placeholder="비밀번호를 입력하세요"/>
            </div>
            <Button type="submit" className="mt-2 w-full">
              로그인
            </Button>
            <Link href="/register" className="text-center text-sm hover:underline cursor-default" tabIndex={-1} aria-disabled="true">회원가입</Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
