import "./globals.css";

export const metadata = {
  title: "Thandapra Gold Loan & Finance | Trusted Since 1989",
  description:
    "Instant Gold Loans with best interest rates. Trusted Gold Loan & Finance company since 1989.",
  keywords:
    "Gold Loan, Thandapra Gold Loan, Gold Finance Kerala, Instant Gold Loan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FDB913] text-black antialiased">
        {children}
      </body>
    </html>
  );
}
