"use client";
import { Button } from "@/components/ui/button";
import {
  RedirectToSignIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { isLoaded, userId, isSignedIn } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <div className="text-6xl font-bold">chatwithpdf</div>
      {/* {!isSignedIn && ( */}
      <Link href="/sign-in" passHref>
        <Button className="m-2">Get Started</Button>
      </Link>
      {/* )} */}
    </main>
  );
}
