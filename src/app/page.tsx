import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Devang</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves building products and collaborating to
         develop <Highlight>impactful solutions</Highlight> that can help 
        millions of people.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>software engineer</Highlight> graduating from the University of Virginia. I&apos;m currently 
        a teaching assistant for <Highlight>Computer Systems and Organizations 1</Highlight> 
        (Covering Computer Architecture and low-level coding in x86-64 ISA and C) and{" "}
        <Highlight>Software Development Essentials</Highlight> (Covering the design, testing, and development of 
          full-stack applications using Java and MySQL).
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
