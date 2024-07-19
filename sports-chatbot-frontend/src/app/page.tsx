import Image from "next/image";
import { useState } from 'react';
import { ChatInterface } from './chatbot-interface/chat';
import { Navbar } from './navbar';


export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-anton text-sm flex flex-col">
          <p className="text-3xl font-bold text-center mb-8">Welcome to the Sports Chatbot, Jonathan!</p>
          <ChatInterface/>
        </div>
      </main>
    </>
  );
}

