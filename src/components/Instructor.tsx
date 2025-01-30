"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Guitar Instructor",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Music Producer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Vocal Coach",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Piano Instructor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Drum Instructor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "DJ & Sound Engineer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

function Instructor() {
    return (
        <div className="md:h-[55rem] flex items-center justify-center overflow-hidden">
            {/* Ensure BackgroundBeamsWithCollision is functional */}
            <BackgroundBeamsWithCollision className="md:h-[55rem]  max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center  dark:text-white font-sans mb-8">
                    Meet Our Instructors{" "}
                    <p className="text-base md:text-lg text-white text-center mb-4">
                        Discover the talented professionals who will guide your musical journey
                    </p>
                </h2>

                <div className="mt-10 flex flex-row items-center justify-center w-full">
                    {people.length > 0 ? <AnimatedTooltip items={people} /> : <p className="text-white">No instructors found</p>}
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}

export default Instructor;