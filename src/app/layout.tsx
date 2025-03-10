import { Header } from '@/components';
import './globals.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='relative py-6'>
        <Header />
        <div className='min-h-screen pt-40'>
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
