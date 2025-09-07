import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Website",
  description: "4 Page Website in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
