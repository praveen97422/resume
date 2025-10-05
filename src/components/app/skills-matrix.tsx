import { Badge } from '@/components/ui/badge';

interface SkillsMatrixProps {
  skills: string[];
}

export function SkillsMatrix({ skills }: SkillsMatrixProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold tracking-tight">Technical Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="default" className="text-sm px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
