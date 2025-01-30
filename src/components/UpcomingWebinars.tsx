"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
 
 function UpcomingWebinars() {
   return (
     <div className='p-12 md:h-[55rem] bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'> Enhance Your Musical Journey</p>
            </div>

            <div className="max-w-9xl mx-auto px-8">
      <HoverEffect items={projects.map(webinar =>({
        title:webinar.title,
        description:webinar.description,
        link:webinar.link
      }))} />
    </div>

            <div className='mt-10 flex justify-center'>
              <Link href={"/"}
              className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-200 transition duration-200'>
                View All Webinars
              </Link>
            </div>
        </div>
     </div>
   )
 }
 
 export const projects = [
  {
    title: "Music Production Masterclass",
    description:
      "Learn the fundamentals of music production with industry experts. Covers DAWs, mixing, and mastering techniques.",
    link: "https://musicmasterclass.com",
  },
  {
    title: "Live Concert Streaming 101",
    description:
      "A webinar on how to set up, promote, and stream live music performances professionally.",
    link: "https://liveconcertstreaming.com",
  },
  {
    title: "The Future of AI in Music",
    description:
      "Discover how AI is revolutionizing music composition, production, and sound design.",
    link: "https://aimusicfuture.com",
  },
  {
    title: "Building a Career in the Music Industry",
    description:
      "Learn strategies from music professionals on how to navigate and succeed in the industry.",
    link: "https://musiccareerwebinar.com",
  },
  {
    title: "Songwriting & Lyricism Workshop",
    description:
      "A deep dive into songwriting techniques, storytelling, and lyric-writing best practices.",
    link: "https://songwritingworkshop.com",
  },
  {
    title: "Music Marketing & Branding",
    description:
      "An essential webinar on how to market your music, build a brand, and grow a fanbase.",
    link: "https://musicmarketinghub.com",
  },
];


 export default UpcomingWebinars