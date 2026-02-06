import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Gold Loan",
    "Emergency Loan",
    "Short-Term Loan",
    "Long-Term Loan",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-4 mb-6">
              <div>
                <img
                  src="/images/logo.webp"
                  alt=""
                  className="h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">THANDAPRA</h3>
                <p className="text-[#FFD66B] text-sm font-medium">
                  Gold Loan & Finance
                </p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              A trusted venture of Sherlyn Group, serving customers with
              transparent and secure gold loan services since 1989.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#FDB913]/10 text-[#FFD66B] px-4 py-2 rounded-full border border-[#FDB913]/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">Trusted Since 1989</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD66B] transition flex items-center gap-2"
                  >
                    <span>›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-[#FFD66B] transition flex items-center gap-2"
                  >
                    <span>›</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <a href="tel:8714742635" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#FDB913] text-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500">Call for Instant Loan</p>
                <p className="text-xl font-bold group-hover:text-[#FFD66B] transition">
                  +91 8714742635
                </p>
              </div>
            </a>
            <div className="text-center sm:text-right">
              <p className="text-gray-500 text-sm">Sherlyn Group</p>
              <p className="text-gray-400 text-sm">Open 7 days • 9 AM – 7 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-sm">
            © {currentYear} Thandapra Gold Loan & Finance. All rights reserved.
          </p>
          {/* <p className="text-gray-600 text-sm">
            A venture of{" "}
            <span className="text-[#FFD66B] font-semibold">Sherlyn Group</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
