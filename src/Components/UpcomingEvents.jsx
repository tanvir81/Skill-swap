import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Live Event On Web Development",
      date: "Dec 10, 2025",
      description:
        "Learn HTML, CSS, and JavaScript basics in this beginner-friendly workshop.",
      image: "https://i.ibb.co/39pxWpXr/2151948231.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing WorkShop",
      date: "Dec 15, 2025",
      description: "Learn SEO, social media, and ads.",
      image: "https://i.ibb.co/SDVXL7WX/2150208260.jpg",
    },
    {
      id: 3,
      title: "Workshop onBasic Drawing Skills",
      date: "Dec 20, 2025",
      description: "Learn pencil sketching and shading.",
      image: "https://i.ibb.co/60nMwDH3/18128.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#045c90]">
        Upcoming Events & Workshops
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-row items-stretch border border-[#045c90]/30 rounded-lg shadow bg-base-100 overflow-hidden"
          >
            <div className="w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-200"></div>

            <div className="w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-[#045c90] mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-1">📅 {event.date}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
