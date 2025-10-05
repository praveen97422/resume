import { ProjectCard } from './project-card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ProjectShowcaseProps {
  projects: {
    name: string;
    description: string;
    link: string;
    image?: ImagePlaceholder;
  }[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my web development work. Each project showcases my ability to deliver functional and user-friendly applications.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
