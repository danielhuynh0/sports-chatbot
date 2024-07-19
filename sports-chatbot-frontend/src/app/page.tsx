import Image from "next/image";
import { useState } from 'react';
import { ChatInterface } from './chatbot-interface/chat';
import { Navbar } from './navbar';


export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-2xl md:text-3xl font-bold text-center mb-8">Welcome to the Sports Chatbot, Jonathan!</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-anton text-sm flex flex-col">
            <ChatInterface/>
          </div>
          <div className="flex flex-col mt-4 md:mt-0">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-lg font-bold mb-2">Example</h2>
                <p className="text-sm italic text-black-300">
                Will the Phillies win today?
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-lg font-bold mb-2">Example</h2>
                <p className="text-sm italic text-black-300">
                Will the Philadelphia Eagles cover the spread against the Patriots?
                </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

