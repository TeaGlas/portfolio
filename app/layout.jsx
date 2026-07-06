export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
