import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(id));
        setSkill(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load skill:", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!skill)
    return (
      <div className="text-center py-10 text-red-500">Skill not found.</div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="font-bold text-2xl text-[#f96c1f]">Course Details</h1>

      <div
        className="p-6 rounded-lg border border-[#f96c1f] bg-base-200"
        style={{ boxShadow: "0 4px 12px #f96c1f" }}
      >
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-[#f96c1f] mb-2">
          {skill.skillName}
        </h2>
        <p className="text-[#045c90] mb-2">
          Provider: {skill.providerName} ({skill.providerEmail})
        </p>
        <p className="text-[#045c90] mb-2">Rating: ⭐ {skill.rating}</p>
        <p className="text-[#f96c1f] mb-2">Price: ${skill.price}</p>
        <p className="text-gray-700 mt-4">{skill.description}</p>
      </div>

      <div
        className="p-6 rounded-lg border border-[#045c90] bg-base-200"
        style={{ boxShadow: "0 4px 12px #045c90" }}
      >
        <h3 className="text-xl font-semibold mb-4 text-[#045c90]">
          Book a Session
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-[#045c90]">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="label text-[#045c90]">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-[#045c90] text-white transition-colors hover:bg-[#f96c1f]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
