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
import FileUpload from "./FileUpload";

export default function Hero() {
  const { isLoaded, userId, isSignedIn } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full space-y-6">
      <UserButton afterSignOutUrl="/" />
      <div className="text-6xl font-bold">chatwithpdf</div>
      {/* {!isSignedIn && ( */}
      <Link href="/sign-in" passHref>
        <Button className="m-2">Get Started</Button>
      </Link>
      <FileUpload />
      {/* )} */}
    </main>
  );
}
