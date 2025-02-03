import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

function Page() {
  return (
    <div className="w-full h-screen relative bg-gray-900 text-white">
      
      {/* Contact Header Section */}
      <div className="w-full h-screen relative flex justify-center items-center">
        <div className="relative shadow px-4 h-auto overflow-hidden rounded-2xl mt-70 justify-center items-center">
          <Link href={"#"}>
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
              Contact Us
            </h1>
          </Link>
          <p className="font-normal text-base text-slate-400 mb-4 relative z-50 text-center">
            We&apos;re here to help with any questions about our courses, programs, or events.
            Reach out and let us know how we can assist you in your musical journey.
          </p>

          {/* Contact Form Section */}
          <div className="h-[300px] bg-gray-900 text-white flex justify-center items-center">
            <div className="rounded-lg w-2/3">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full font-normal mt-1 px-4 py-5 bg-black text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email address"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full mt-1 px-4 py-5 bg-black text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Meteor effect */}
      <Meteors number={20} />
    </div>
  );
}

export default Page;
