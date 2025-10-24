import { useEffect, useState } from "react";

const TopRatedProviders = () => {
  const [topSkills, setTopSkills] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => b.rating - a.rating);
        const topFour = sorted.slice(0, 4);
        setTopSkills(topFour);
      })
      .catch((err) => console.error("Failed to load top skills:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#f96c1f]">
        Top Rated Providers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topSkills.map((skill) => (
          <div
            key={skill.skillId}
            className="card bg-base-100 shadow-md hover:shadow-xl transition border border-[#f96c1f]"
          >
            <figure>
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold text-[#f96c1f]">
                {skill.skillName}
              </h3>
              <p className="text-[16px] text-[#045c90]">
                By: {skill.providerName}
              </p>
              <p className="text-sm text-[#045c90]">
                Rating: ⭐ {skill.rating}
              </p>
              <p className="text-sm text-[#f96c1f]">Price: ${skill.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
