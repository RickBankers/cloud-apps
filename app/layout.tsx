// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Tailwind Dark Theme App',
  description: 'A sample app styled with Tailwind CSS and dark mode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 dark:text-white">{children}</body>
    </html>
  );
}
