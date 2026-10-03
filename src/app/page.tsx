import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Facts } from "@/components/sections/facts";
import { FeaturedResearch } from "@/components/sections/featured-research";
import { Papers } from "@/components/sections/papers";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Toolkit } from "@/components/sections/toolkit";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Facts />
        <FeaturedResearch />
        <Papers />
        <Projects />
        <Experience />
        <Toolkit />
        <About />
      </main>
      <Contact />
    </div>
  );
}
