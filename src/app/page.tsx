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
import { SkillSuggester } from '@/components/app/skill-suggester';
import { ContactSection } from '@/components/app/contact-section';

export default function Home() {
  const [currentSkills, setCurrentSkills] = useState<string[]>(initialSkills);
  const [experience] = useState<string | null>(null);
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
        <Section id="tools">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Portfolio Tools</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Leverage GenAI to enhance and analyze portfolio content.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 max-w-2xl mx-auto">
            <SkillSuggester />
          </div>
        </Section>
        <Separator />
        <ContactSection />
      </main>
    </div>
  );
}
