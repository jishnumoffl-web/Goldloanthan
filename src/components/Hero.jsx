import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#FDB913] overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/30">
            <span className="text-sm font-bold text-gray-900">
              Trusted Since 1989
            </span>
          </div>

          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-extrabold text-black mt-8 tracking-wide`}
          >
            Instant Gold Loans
            <span className="block mt-2">You Can Trust</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0">
            Hassle-free gold loans with best interest rates.
            <span className="font-semibold"> Sherlyn Group</span> serving trust
            for over 35 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#calculator"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Apply Now
            </Link>
            <a
              href="tel:8714742635"
              className="bg-white text-black px-8 py-4 rounded-full font-bold border-2 border-black hover:scale-105 transition"
            >
              Call 8714 742 635
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-3xl font-bold">35+</p>
              <p className="text-sm font-semibold">Years Trust</p>
            </div>
            <div className="border-x border-black/20">
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-sm font-semibold">Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm font-semibold">Secure</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[380px]  lg:w-[550px]  rounded-3xl overflow-hidden ">
            <img
              src="/images/hero.webp" // 👉 place image in /public
              alt="Gold Loan Services"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path d="M0 120L1440 0V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
