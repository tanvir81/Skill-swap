const testimonials = [
  {
    name: "Christopher-Campbell",
    comment:
      "Booking a session was super easy. The provider was friendly and the skill was legit!",
    image:
      "https://i.ibb.co/WW2CxSKk/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
  },
  {
    name: "Drew-Hays",
    comment:
      "I learned React basics in just one weekend. The platform is smooth and well-designed.",
    image: "https://i.ibb.co/nMdzSBmS/drew-hays-ag-GIKYs4m-Ys-unsplash.jpg",
  },
  {
    name: "Ali-Pazani",
    comment:
      "The provider was professional and the session was interactive. Highly recommend SkillSwap!",
    image: "https://i.ibb.co/whVVV2sm/ali-pazani-9ua-NYCqj-DLw-unsplash.jpg",
  },
  {
    name: "Jeremy-Brady",
    comment:
      "I booked a yoga session and it was amazing. The UI made everything feel effortless.",
    image: "https://i.ibb.co/v40qkSLD/jeremy-brady-B7-X7-R-Q0c-c-unsplash.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#f96c1f]">
        What Learners Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg border border-[#f96c1f] shadow-[0_2px_8px_rgba(249,108,31,0.25)] hover:shadow-[0_4px_12px_rgba(249,108,31,0.3)] hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-[#f96c1f] mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="flex-1">
              <p className="text-gray-700 mb-2">"{t.comment}"</p>
              <hr className="border-t border-[#f96c1f] mb-2" />
              <p className="font-semibold text-[#f96c1f]">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
