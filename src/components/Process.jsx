export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Bring Your Gold",
      description:
        "Visit our branch with your gold jewelry, coins, or bars. We accept all forms of gold ornaments.",
      icon: (
        <div className="w-10 h-10 relative">
          <img
            src="/images/cash.webp"
            alt="Gold Bar"
            className="object-contain"
          />
        </div>
      ),
    },
    {
      number: "02",
      title: "Instant Valuation",
      description:
        "Our experts assess your gold using certified equipment and provide transparent valuation in minutes.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 7h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Immediate Cash",
      description:
        "Get instant loan disbursement via cash or bank transfer. No delays, no waiting period.",
      icon: (
        <div className="w-10 h-10 relative">
          <img
            src="/images/bar.webp"
            alt="Gold Bar"
            className="object-contain"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FDB913]/20 text-[#FFD66B] font-semibold text-sm rounded-full mb-4 border border-[#FDB913]/30">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get Your Loan in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From gold evaluation to instant cash disbursement with no waiting.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <article key={step.number} className="relative">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#FDB913] to-transparent" />
              )}

              <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#FDB913]/60 transition group">
                {/* Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FDB913] text-gray-900 font-bold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#FDB913]/10 text-[#FFD66B] rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:bg-[#FDB913]/20 transition">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-[#FDB913]/10 border border-[#FDB913]/30 rounded-full px-6 py-3">
            <svg
              className="w-6 h-6 text-[#FFD66B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-[#FFD66B] font-semibold">
              Quick and seamless gold loan process
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
