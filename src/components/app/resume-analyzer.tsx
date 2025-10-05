'use client';

import { useState } from 'react';
import { extractSkillsFromResume, type ExtractSkillsFromResumeOutput } from '@/ai/flows/resume-skills-extractor';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, UploadCloud } from 'lucide-react';

interface ResumeAnalyzerProps {
  onAnalysisComplete: (data: ExtractSkillsFromResumeOutput) => void;
}

const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export function ResumeAnalyzer({ onAnalysisComplete }: ResumeAnalyzerProps) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setLoading(true);
      try {
        const resumeDataUri = await fileToDataUri(file);
        const result = await extractSkillsFromResume({ resumeDataUri });
        onAnalysisComplete(result);
        toast({
          title: 'Analysis Complete',
          description: 'Your resume has been analyzed and the portfolio updated.',
        });
      } catch (error) {
        console.error('Resume analysis failed:', error);
        toast({
          variant: 'destructive',
          title: 'Analysis Failed',
          description: 'Could not analyze the resume. Please try a different file.',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Analyzer</CardTitle>
        <CardDescription>
          Upload your resume (PDF or image) to automatically populate your skills, experience, and certifications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted p-8 text-center">
          <UploadCloud className="h-12 w-12 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {fileName ? `Selected: ${fileName}` : 'Drag & drop or click to upload'}
          </p>
          <Button asChild variant="outline" disabled={loading}>
            <label htmlFor="resume-upload" className="cursor-pointer">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Choose File'
              )}
            </label>
          </Button>
          <Input 
            id="resume-upload" 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            disabled={loading}
          />
        </div>
      </CardContent>
    </Card>
  );
}
