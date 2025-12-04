import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CORE ATHLETE - Athletic Training & Performance",
  description:
    "Creating. Opportunities. Realigning. Expectations. Elite athletic training programs for all sports and skill levels.",
  keywords:
    "athletic training, sports performance, strength training, core athlete, fitness coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
