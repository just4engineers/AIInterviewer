'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image
        src={'/flogo.svg'}
        width={350}
        height={300}
        alt='logo'
        className='ml-5'
      />
      <ul class="hidden md:flex gap-6">
        <li class="hover:text-primary hover:font-bold transition-all cursor-pointer">
          <a href="http://127.0.0.1:8000/how-it-works">How it Works?</a>
        </li>
        <li class="hover:text-primary hover:font-bold transition-all cursor-pointer">
          <a href="http://127.0.0.1:8000/">Resume Parser</a>
        </li>
        <li class="hover:text-primary hover:font-bold transition-all cursor-pointer">
          <a href="http://localhost:5173/">Quiz</a>
        </li>
        <li class="hover:text-primary hover:font-bold transition-all cursor-pointer">
          <a href="http://localhost:3000/dashboard">Interview Dashboard</a>
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
