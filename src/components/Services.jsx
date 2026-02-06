import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: (
        <div className="w-10 h-10 flex items-center justify-center font-extrabold text-2xl">
          ₹
        </div>
      ),
      title: "Gold Loan",
      description:
        "Get instant cash against your gold jewelry with competitive interest rates and flexible repayment options.",
      features: [
        "Instant disbursement",
        "Flexible tenure",
        "Low interest rates",
      ],
    },

    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Emergency Gold Loan",
      description: "Urgent funds processed within hours, even on weekends.",
      features: ["Same-day approval", "Minimal documents", "Fast payout"],
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Short-Term Loans",
      description:
        "Flexible gold loans for short periods starting from 7 days.",
      features: ["7–90 day tenure", "No prepayment penalty", "Lower interest"],
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Long-Term Loans",
      description: "Stable long-term gold loans with EMI repayment options.",
      features: ["Up to 24 months", "EMI facility", "Best rates"],
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Loan Renewal",
      description:
        "Renew your existing gold loan easily with continued benefits.",
      features: ["Easy renewal", "Rate negotiation", "Loyalty benefits"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FFF1C1] text-[#B8860B] font-semibold text-sm rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Comprehensive Gold Loan Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency funds to business growth, we offer gold loans
            tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFF1C1] to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">
                <div className="w-16 h-16 bg-[#FFF1C1] text-[#B8860B] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FDB913] group-hover:text-white transition">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="text-[#FDB913] font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] hover:bg-[#FFD66B] text-gray-900 font-bold px-8 py-4 rounded-full transition hover:scale-105 shadow-lg"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </section>
  );
}
