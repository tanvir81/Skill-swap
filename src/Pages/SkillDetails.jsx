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
    <div className="max-w-5xl mx-auto px-4 mt-30 py-10 space-y-10">
      <h1 className="font-bold text-3xl text-[#f96c1f] mb-6 text-center">
        Course Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg border border-[#f96c1f] bg-base-200 shadow-lg">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-122 object-cover rounded-lg"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-semibold text-[#045c90]">Title</td>
                <td>{skill.skillName}</td>
              </tr>
              <tr>
                <td className="font-semibold text-[#045c90]">Provider</td>
                <td>
                  {skill.providerName} ({skill.providerEmail})
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[#045c90]">Category</td>
                <td>{skill.category}</td>
              </tr>
              <tr>
                <td className="font-semibold text-[#045c90]">Rating</td>
                <td>⭐ {skill.rating}</td>
              </tr>
              <tr>
                <td className="font-semibold text-[#045c90]">Price</td>
                <td className="text-green-500 text-lg">${skill.price}</td>
              </tr>
              <tr>
                <td className="font-semibold text-[#045c90]">
                  Slots Available
                </td>
                <td>{skill.slotsAvailable}</td>
              </tr>
              {skill.duration && (
                <tr>
                  <td className="font-semibold text-[#045c90]">Duration</td>
                  <td>{skill.duration}</td>
                </tr>
              )}
              {skill.level && (
                <tr>
                  <td className="font-semibold text-[#045c90]">Level</td>
                  <td>{skill.level}</td>
                </tr>
              )}
              {skill.location && (
                <tr>
                  <td className="font-semibold text-[#045c90]">Location</td>
                  <td>{skill.location}</td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="mt-4 text-gray-700">
            {skill.fullDescription || skill.description}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="p-6 rounded-lg border border-[#045c90] bg-base-200 shadow-lg">
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
