'use client';

import Link from 'next/link';
import { Network, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center" passHref>
        <div className="flex items-center gap-2 cursor-pointer">
          <Network className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">Network Weaver</span>
        </div>
      </Link>
      <nav className="ml-auto hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
      <div className="ml-4 md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link href="#" className="flex items-center gap-2" passHref>
                 <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsSheetOpen(false)}>
                    <Network className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Network Weaver</span>
                 </div>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className='absolute bottom-4 right-4'>
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
