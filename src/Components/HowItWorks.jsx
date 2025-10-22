const steps = [
  {
    title: "1. Browse Skills",
    description:
      "Explore a wide range of skills offered by verified providers.",
  },
  {
    title: "2. View Details",
    description: "Check ratings, prices, and available slots before booking.",
  },
  {
    title: "3. Book a Session",
    description: "Fill out a simple form to reserve your spot instantly.",
  },
  {
    title: "4. Learn & Grow",
    description: "Join the session, learn something new, and leave a review.",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
