import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#045c90]">
        Popular Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.slice(0, 8).map((skill) => (
          <div
            key={skill.skillId}
            className="card bg-base-100 shadow-md hover:shadow-xl transition border border-[#045c90]"
          >
            <figure>
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body space-y-3">
              <h3 className="text-lg font-semibold text-[#045c90]">
                {skill.skillName}
              </h3>
              <div className="flex justify-between text-sm">
                <p className="text-[#045c90]">Rating: ⭐ {skill.rating}</p>
                <p className="text-[#f96c1f]">Price: ${skill.price}</p>
              </div>
            </div>
            <div className="px-5 mb-5">
              <Link
                to={`/details/${skill.skillId}`}
                className="block w-full text-center text-sm py-1.5 rounded bg-[#045c90] text-white hover:bg-[#f96c1f] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
