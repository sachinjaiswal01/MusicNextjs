"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
      title: "Learn to Play Instruments",
      description:
        "Master a variety of musical instruments such as guitar, piano, drums, and more. Our courses are tailored for beginners and professionals alike, with step-by-step guidance from experienced instructors. Start your musical journey today!",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Learn to Play Instruments
        </div>
      ),
    },
    {
      title: "Music Theory Basics",
      description:
        "Dive into the fundamentals of music theory. Understand scales, chords, rhythm, and melody to enhance your musical skills. Perfect for those looking to improve their understanding of music composition and performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Music Theory Demo
        </div>
      ),
    },
    {
      title: "Record and Produce Music",
      description:
        "Learn the art of music production with our hands-on courses. From recording techniques to mixing and mastering, gain the skills needed to create professional-grade music tracks. Suitable for aspiring producers and sound engineers.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Record and Produce Music
        </div>
      ),
    },
    {
      title: "Explore Genres and Styles",
      description:
        "Discover the richness of various music genres like classical, jazz, rock, and electronic. Our courses provide an in-depth understanding of each genre, helping you to appreciate and create music in diverse styles.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Explore Genres and Styles
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div className="py-12 md:h-[55rem]">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs