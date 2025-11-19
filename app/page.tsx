"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <>
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>Rasheed Iskilu - Senior Full Stack Developer</h1>
        <p>
          Senior Full Stack Developer with 4+ years of experience in healthcare and fintech. 
          Expert in React.js, Next.js, TypeScript, .NET Core, and React Native development. 
          Specialized in building scalable, HIPAA-compliant EHR systems serving 10,000+ daily users.
        </p>
        <p>
          Skills: React, Next.js, TypeScript, JavaScript, Node.js, .NET Core, React Native, 
          GraphQL, PostgreSQL, AWS, Docker, CI/CD, Healthcare Software, EHR Systems, 
          Frontend Architecture, Full Stack Development
        </p>
        <p>
          Location: Lagos, Nigeria | Email: rasheediskilu.dev@gmail.com | 
          Phone: +234 91 35042 447
        </p>
      </div>

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-8xl w-full">
          <FloatingNav navItems={navItems} />
          
          <section id="hero" aria-label="Introduction">
            <Hero />
          </section>
          
          <section id="about" aria-label="About Me">
            <Grid />
          </section>
          
          <section id="projects" aria-label="Recent Projects">
            <RecentProjects />
          </section>
          
          <section id="testimonials" aria-label="Client Testimonials">
            <Clients />
          </section>
          
          <section id="experience" aria-label="Work Experience">
            <Experience />
          </section>
          
          <section id="approach" aria-label="My Approach">
            <Approach />
          </section>
          
          <footer id="contact" aria-label="Contact Information">
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
