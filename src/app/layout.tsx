import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Classificador de Acidentes | PROBEST',
  description:
    'Sistema de classificação de severidade de acidentes de trânsito usando Machine Learning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={geist.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
