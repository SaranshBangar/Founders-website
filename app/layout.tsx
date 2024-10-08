import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
// import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <Sidebar />
        <main className="ml-[60px]">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
