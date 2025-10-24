
import "./styles.css";

export const metadata = {
  title: "FolioFusion - Portfolio Generator",
  description: "Simple portfolio generator built with Next.js",
};

export default function RootLayout({ children }) {
  // This wraps every page in the app
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
