import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'

import Navbar from "@/components/navbar/Navbar";
import Slideshow from "@/components/slideshow/Slideshow";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Slideshow />
        {children}
        
      </body>
    </html>
  );
}
