
import Image from "next/image";
import logo from "@/public/consultiq-logo.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="ConsultIQ Logo" width={60} height={60} className="rounded-full" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Let AI Handle Your Hustle</h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">Fully automate your DMs, posts, finances, and fan engagement. Built for serious OnlyFans creators ready to scale.</p>
        <a href="#waitlist" className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-100 transition">Join the Waitlist</a>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">🤖 AI Fan Messaging</h3>
            <p>Responds like you — 24/7 engagement your fans won’t know isn’t you.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">⏰ Post Scheduler</h3>
            <p>Stay consistent across platforms without lifting a finger.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📈 Business Suite</h3>
            <p>Auto-invoicing, tax prep, and income tracking — no more spreadsheets.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6" id="pricing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Simple, Fair Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
            {[
              { name: "Solo", range: "<$5K/month", price: "$99/mo" },
              { name: "Creator+", range: "$5K–$15K/month", price: "$249/mo" },
              { name: "Growth Pro", range: "$15K–$30K/month", price: "$499/mo" },
              { name: "Empire", range: "$30K–$75K/month", price: "$999/mo" },
              { name: "VIP Custom", range: "$75K+/month", price: "Custom" },
            ].map(({ name, range, price }) => (
              <div key={name} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="mt-2">{range}</p>
                <p className="text-2xl font-semibold mt-2">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto text-center" id="waitlist">
        <h2 className="text-2xl font-bold mb-6">“This replaced my VA and made me more money in the first week.”</h2>
        <p className="mb-6 text-gray-700">Your fans think it’s you. Only you know it’s AI.</p>
        <form
          action="https://YOUR-MAILCHIMP-URL-HERE" 
          method="post" 
          target="_blank" 
          className="max-w-md mx-auto"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-xl"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            Join the Waitlist
          </button>
        </form>
      </section>

      <footer className="text-center py-10 text-sm text-gray-400">
        © {new Date().getFullYear()} ConsultIQ.ai. All rights reserved.
      </footer>
    </div>
  );
}
