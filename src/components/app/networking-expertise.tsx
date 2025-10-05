import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface NetworkingExpertiseProps {
  certifications: string[];
  experience: string | null;
}

export function NetworkingExpertise({ certifications, experience }: NetworkingExpertiseProps) {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h2 className="text-3xl font-headline font-bold sm:text-4xl">About Me</h2>
        <p className="text-muted-foreground mt-2 md:text-xl/relaxed">
          My expertise lies at the intersection of network engineering and modern web development.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Networking & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            With a CCNP certification, I possess a deep understanding of enterprise-level networking protocols, security implementations, and infrastructure management.
          </p>
          <div className="space-y-2">
             <h3 className="font-semibold">Certifications</h3>
             <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-base">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {experience && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Experience Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{experience}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
