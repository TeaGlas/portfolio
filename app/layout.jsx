export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
