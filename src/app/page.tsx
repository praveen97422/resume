'use client';

import { useState } from 'react';
import { Header } from '@/components/app/header';
import { HeroSection } from '@/components/app/hero-section';
import { ProjectShowcase } from '@/components/app/project-showcase';
import { SkillsMatrix } from '@/components/app/skills-matrix';
import { initialSkills, projects } from '@/lib/data';
import { Section } from '@/components/app/section';
import { NetworkingExpertise } from '@/components/app/networking-expertise';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/app/contact-section';

export default function Home() {
  const [currentSkills, setCurrentSkills] = useState<string[]>(initialSkills);
  const [experience] = useState<string>(
    'Gained hands-on experience as a Web Development Intern at TekSolvent, developing and optimizing the frontend of an HRMS project using React. Also served as a Content Marketing Intern at IgniPC, creating detailed blog posts on PC hardware and interacting with users to provide tailored solutions for PC building.'
  );
  const [certifications] = useState<string[]>(['CCNP']);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Section id="about">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <NetworkingExpertise certifications={certifications} experience={experience} />
            <SkillsMatrix skills={currentSkills} />
          </div>
        </Section>
        <Section id="projects" className="bg-card">
          <ProjectShowcase projects={projects} />
        </Section>
        <Separator />
        <ContactSection />
      </main>
    </div>
  );
}
