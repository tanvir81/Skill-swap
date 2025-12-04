import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // use react-router-dom

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to load items:", err));
  }, []);

  // Filter logic
  const filteredItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  // Sorting logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.skillName.localeCompare(b.skillName);
    } else {
      return b.skillName.localeCompare(a.skillName);
    }
  });

  const displayedItems = showAll ? sortedItems : sortedItems.slice(0, 8);

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  return (
    <div className="w-full max-w-[1800px] mx-auto mt-40 px-4 py-10 flex flex-col md:flex-row gap-8">
      <aside className="w-full mt-15 md:w-[250px] flex-shrink-0 space-y-6">
        {/* Sort Order */}
        <div className="p-4 rounded-lg border border-[#045c90]  shadow">
          <h3 className="text-lg font-semibold text-[#045c90] mb-3">
            Sort Items
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder("asc")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                sortOrder === "asc"
                  ? "bg-[#045c90] text-white"
                  : "bg-white border border-[#045c90] text-[#045c90] hover:bg-[#f96c1f] hover:text-white"
              }`}
            >
              Ascending
            </button>
            <button
              onClick={() => setSortOrder("desc")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                sortOrder === "desc"
                  ? "bg-[#045c90] text-white"
                  : "bg-white border border-[#045c90] text-[#045c90] hover:bg-[#f96c1f] hover:text-white"
              }`}
            >
              Descending
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="p-4 rounded-lg border border-[#045c90]  shadow">
          <h3 className="text-lg font-semibold text-[#045c90] mb-3">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#045c90] text-white"
                    : "bg-white border border-[#045c90] text-[#045c90] hover:bg-[#f96c1f] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#045c90]">
          All Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.skillId}
              className="card bg-base-100 shadow-md hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Image */}
              <figure>
                <img
                  src={item.image}
                  alt={item.skillName}
                  className="h-48 w-full object-cover"
                />
              </figure>

              {/* Body */}
              <div className="card-body flex-grow space-y-3">
                <h3 className="text-lg font-semibold text-[#045c90]">
                  {item.skillName}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description || "No description available."}
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5 mt-auto">
                <Link
                  to={`/details/${item.skillId}`}
                  className="block w-full text-center text-sm py-1.5 rounded bg-[#045c90] text-white hover:bg-[#f96c1f] transition-colors"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {!showAll && sortedItems.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 rounded bg-[#045c90] text-white font-medium hover:bg-[#f96c1f] transition-colors"
            >
              Show All
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AllItems;
