"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "@/components/Highlight";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about/hiroshi_yoshida_temple.jpg",
    "/images/about/hike.jpg",
    "/images/about/rolls.jpg",
    "/images/about/horse.jpg",
    // "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          I&apos;m a <Highlight>full-stack developer</Highlight> that loves building products and collaborating to
          develop <Highlight>impactful solutions</Highlight> that can help people.
        </Paragraph>
        <Paragraph className=" mt-4">
          After graduating in December last year, I&apos;m working as a <Highlight>Software Engineering Intern</Highlight>
          at CargoLabs, a Charlottesville-based start-up that provides a streamlined platform for
          trucker insurance. My internship runs from January of this year until June, and so far it
          has been an amazing experience.
        </Paragraph>
        <Paragraph className="mt-4">
          Working in a start-up means that I have grown comfortable with not being afraid to take on
          <Highlight>responsiblity</Highlight> to introduce and build new features from the ground-up as the company expands.
          Along with improving my soft-skills, the <Highlight>fast-paced environment</Highlight> has meant that I have gained
          hands-on experience with technologies I did not have the opportunity to work with at UVa.
          Just one example, is that I have become much more experienced in building and maintaining
          cloud environments as CargoLabs leverages AWS for its backend through services like S3,
          Lambda, Cognito, Secrets Manager, etc.
        </Paragraph>
        <Paragraph className="mt-4">
          Outside of work, I love travelling, baking, and getting outside as often as I can.
        </Paragraph>
      </div>
    </div>
  );
}
