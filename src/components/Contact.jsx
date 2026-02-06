import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Contact() {
  return (
    <section id="contact" className={`py-20 bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FFF1C1] text-[#B8860B] font-semibold text-sm rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Ready to Get Your Gold Loan?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the fastest, most transparent gold loan service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#ffffff] to-[#ffffff] p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="object-contain h-12"
                  />
                </div>
                <div>
                  <h3
                    className={`${playfair.className} text-xl font-bold text-gray-900`}
                  >
                    THANDAPRA
                  </h3>
                  <p className="text-sm text-gray-800">Gold Loan & Finance</p>
                </div>
              </div>
              <p className="text-gray-800">
                Visit us or call anytime. Our friendly team is ready to help you
                with all your gold loan needs. Open 7 days a week.
              </p>
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              {/* Phone */}
              <a
                href="tel:8714742635"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-[#FFF1C1] text-[#B8860B] rounded-2xl flex items-center justify-center group-hover:bg-[#FDB913] group-hover:text-white transition">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Call Us Anytime
                  </p>
                  <p className="text-xl font-bold text-gray-900 group-hover:text-[#B8860B] transition">
                    +91 8714742635
                  </p>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FFF1C1] text-[#B8860B] rounded-2xl flex items-center justify-center">
                  ⏰
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Working Hours
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Mon – Sun: 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FFF1C1] text-[#B8860B] rounded-2xl flex items-center justify-center">
                  ✔
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Locations</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Kollakadavu | Puthencavu
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="tel:8714742635"
                className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-[#FDB913] hover:bg-[#FFD66B] text-gray-900 font-bold px-8 py-4 rounded-xl transition hover:scale-[1.02] shadow-lg"
              >
                Call Now for Instant Loan
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Contact Thandapra?
              </h3>
              <ul className="space-y-4">
                {[
                  "Loan approval under 30 minutes",
                  "Best interest rates",
                  "Secure insured storage",
                  "No hidden charges",
                  "Friendly professional service",
                  "Flexible repayment options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#FDB913] text-white rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDB913] rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-gray-900">75%</p>
                <p className="text-sm text-gray-800 font-medium">Loan Value</p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-[#FFD66B]">30</p>
                <p className="text-sm text-gray-300 font-medium">
                  Minutes Processing
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gradient-to-r from-[#FFF1C1] to-white rounded-2xl p-6 border border-[#FFD66B]">
              <h4 className="font-bold text-gray-900 mb-1">Have Questions?</h4>
              <p className="text-gray-600 text-sm">
                Our team is happy to guide you through interest rates,
                documentation, and loan terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
