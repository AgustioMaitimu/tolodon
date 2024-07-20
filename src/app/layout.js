import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Agustio | Personal Portfolio</title>
      <body className="flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
