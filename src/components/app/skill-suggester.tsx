'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { suggestSkills } from '@/ai/flows/project-skill-suggestion';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Badge } from '../ui/badge';

const formSchema = z.object({
  projectDescription: z.string().min(20, 'Please provide a more detailed description.'),
});

export function SkillSuggester() {
  const [loading, setLoading] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSuggestedSkills([]);
    try {
      const result = await suggestSkills(values);
      setSuggestedSkills(result.suggestedSkills);
    } catch (error) {
      console.error('Skill suggestion failed:', error);
      toast({
        variant: 'destructive',
        title: 'Suggestion Failed',
        description: 'Could not generate skill suggestions. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Skill Suggester</CardTitle>
        <CardDescription>
          Enter a project description to get AI-powered suggestions for relevant skills to highlight.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Built a full-stack e-commerce platform with a React-based frontend and a Node.js backend...'"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Suggest Skills
            </Button>
          </form>
        </Form>
        {suggestedSkills.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Suggested Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, index) => (
                <Badge key={index} variant="accent">{skill}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
