import Link from 'next/link';
import { contactDetails } from '@/lib/data';
import { Mail, Phone, Linkedin, Network } from 'lucide-react';

export function ContactSection() {
  return (
    <footer id="contact" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center items-center mb-4">
           <Network className="h-8 w-8 text-primary" />
           <span className="ml-2 text-xl font-bold">Portfolio</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          I'm currently open to new opportunities. Feel free to reach out via email, phone, or connect with me on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <Link href={`mailto:${contactDetails.email}`} className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span>{contactDetails.email}</span>
          </Link>
          <Link href={`tel:+91${contactDetails.phone}`} className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
            <span>{contactDetails.phone}</span>
          </Link>
          <Link href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Praveen Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
