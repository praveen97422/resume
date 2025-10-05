import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('w-full py-12 md:py-24 lg:py-24', className)}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
