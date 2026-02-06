export default function About() {
  const stats = [
    { value: "35+", label: "Years of Trust" },
    { value: "50,000+", label: "Happy Customers" },
    { value: "₹100Cr+", label: "Loans Disbursed" },
    { value: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT VISUAL */}
          <div className="relative">
            <div className="relative  rounded-3xl p-8 sm:p-12">
              <div>
                <img src="/images/logo.webp" alt="" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-[#FDB913]">35+</p>
                <p className="text-sm text-gray-300">Years of Excellence</p>
              </div>

              {/* Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[#B8860B]/40 rounded-full" />
              <div className="absolute bottom-12 left-8 w-4 h-4 bg-[#B8860B]/40 rounded-full" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#FFF1C1] text-[#B8860B] font-semibold text-sm rounded-full mb-4">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Building Trust Since 1989
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">
                  Thandapra Gold Loan & Finance
                </strong>{" "}
                , a proud venture of{" "}
                <strong className="text-gray-900">Sherlyn Group</strong>, has
                been a trusted financial partner for over three decades.
              </p>
              <p>
                Founded in 1989, our mission has always been simple — to offer
                secure, transparent, and accessible gold loan services.
              </p>
              <p>
                With more than 50,000 happy customers, we believe in long-term
                relationships, not short-term transactions.
              </p>
            </div>

            {/* VALUES */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Trust & Security",
                "Customer First",
                "Transparency",
                "Quick Service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF1C1] text-[#B8860B] rounded-xl flex items-center justify-center">
                    ✔
                  </div>
                  <span className="font-semibold text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="mt-20 bg-gradient-to-r from-[#FDB913] via-[#FFD66B] to-[#FDB913] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-gray-800 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
