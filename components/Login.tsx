"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className='bg-[#11A37F] flex h-screen flex-col items-center justify-center text-center'>
      <Image
        src='https://iili.io/HNGVmZu.png'
        width={300}
        height={300}
        alt='logo'
      />
      <button
        onClick={() => signIn("google")}
        className='text-white font-bold text-3xl animate-pulse '>
        Sign In
      </button>
      <p className='text-white text-sm mt-10'>Just For Educational Purpose</p>
    </div>
  );
}

export default Login;
