const steps = [
  {
    emoji: "🔍",
    title: "Browse Skills",
    description:
      "Explore a wide range of skills offered by verified providers.",
  },
  {
    emoji: "📄",
    title: "View Details",
    description: "Check ratings, prices, and available slots before booking.",
  },
  {
    emoji: "📝",
    title: "Book a Session",
    description: "Fill out a simple form to reserve your spot instantly.",
  },
  {
    emoji: "🚀",
    title: "Learn & Grow",
    description: "Join the session, learn something new, and leave a review.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#045c90]">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-[#045c90] shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <h3 className="text-xl text-[#045c90] font-semibold mb-2 flex items-center gap-2">
              <span>{step.emoji}</span> {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
