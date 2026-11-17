import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'PV Balaji — QA Automation Engineer', description: 'Portfolio of PV Balaji, QA Automation Test Engineer specializing in Playwright, JavaScript and TypeScript.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
