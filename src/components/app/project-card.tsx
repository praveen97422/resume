import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    link: string;
    image?: {
      id: string;
      imageUrl: string;
      imageHint: string;
    };
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      {project.image && (
         <div className="aspect-video overflow-hidden relative">
            <Image
              src={project.image.imageUrl}
              alt={project.name}
              fill
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
              data-ai-hint={project.image.imageHint}
            />
          </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
