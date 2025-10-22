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
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Popular Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.slice(0, 8).map((skill) => (
          <div
            key={skill.skillId}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <figure>
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{skill.skillName}</h3>
              <p className="text-sm text-gray-500">Rating: ⭐ {skill.rating}</p>
              <p className="text-sm text-gray-500">Price: ${skill.price}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/details/${skill.skillId}`}
                  className="btn btn-sm btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
