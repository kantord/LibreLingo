import { Button } from '@/components/ui/button';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LibreLingo',
  description: 'LibreLingo is an open source language-learning platform',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-23">

      <Button>Hello</Button>

    </main>
  );
}
