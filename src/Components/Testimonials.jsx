const testimonials = [
  {
    name: "Ayesha Rahman",
    comment:
      "Booking a session was super easy. The provider was friendly and the skill was legit!",
    image: "https://i.postimg.cc/3x3QzSGq/profile1.png",
  },
  {
    name: "Tanvir Khan",
    comment:
      "I learned React basics in just one weekend. The platform is smooth and well-designed.",
    image: "https://i.postimg.cc/3x3QzSGq/profile2.png",
  },
  {
    name: "Rafiul Islam",
    comment:
      "The provider was professional and the session was interactive. Highly recommend SkillSwap!",
    image: "https://i.postimg.cc/3x3QzSGq/profile3.png",
  },
  {
    name: "Nusrat Jahan",
    comment:
      "I booked a yoga session and it was amazing. The UI made everything feel effortless.",
    image: "https://i.postimg.cc/3x3QzSGq/profile4.png",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        What Learners Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex items-center bg-base-200 p-4 rounded-lg shadow-sm"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
            />
            <div>
              <p className="text-gray-700 mb-1">"{t.comment}"</p>
              <p className="font-semibold text-primary">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
