import "./globals.css";

export const metadata = {
  title: "Real Estate Deal Evaluator",
  description:
    "Instant real estate deal analysis for agents, investors, lenders, brokers, and teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
