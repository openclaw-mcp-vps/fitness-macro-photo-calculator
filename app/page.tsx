export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          AI-Powered Macro Tracking
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Calculate macros from{" "}
          <span className="text-[#58a6ff]">food photos</span>{" "}
          instantly
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-xl mb-10">
          Snap a photo of any meal and get accurate calories, protein, carbs, and fat in seconds. No more manual logging.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["📸 Photo Recognition", "🔥 Calorie Tracking", "💪 Protein & Macros", "📊 Meal History", "⚡ Instant Results"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">Everything you need to hit your fitness goals.</p>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm w-full shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-white">Pro Plan</span>
            <span className="text-xs bg-[#58a6ff]/20 text-[#58a6ff] px-2 py-1 rounded-full font-semibold">Most Popular</span>
          </div>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-5xl font-extrabold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited meal photo scans",
              "Calories, protein, carbs & fat",
              "Full meal history & trends",
              "Daily & weekly macro summaries",
              "Priority AI processing"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How accurate is the macro estimation?",
              a: "Our AI model is trained on millions of food images and achieves over 90% accuracy for common meals. Results may vary for complex or mixed dishes."
            },
            {
              q: "What types of food can it recognize?",
              a: "MacroSnap recognizes thousands of foods including restaurant meals, home-cooked dishes, packaged foods, fruits, vegetables, and more."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, absolutely. You can cancel your subscription at any time from your account dashboard with no questions asked and no cancellation fees."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-[#8b949e] text-sm border-t border-[#30363d]">
        © {new Date().getFullYear()} MacroSnap. All rights reserved.
      </footer>
    </main>
  );
}
