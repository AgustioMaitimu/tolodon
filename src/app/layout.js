import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
