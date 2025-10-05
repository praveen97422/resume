import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactDetails } from '@/lib/data';
import { Download, Mail, Linkedin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-bold sm:text-5xl md:text-6xl lg:text-7xl/none">
              Praveen Raj R
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A CCNP certified Network Engineer with a passion for building secure, scalable web solutions. Bridging the gap between robust infrastructure and elegant user experiences.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button asChild>
              <Link href={`mailto:${contactDetails.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
                 <Linkedin className="mr-2 h-4 w-4" />
                 LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
