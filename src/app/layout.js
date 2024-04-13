import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Recipe App",
  description: "Recipe App created using Next.js and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 text-gray-800">{children}</body>
    </html>
  );
}
