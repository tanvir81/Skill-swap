import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL: photo });
      toast.success("Profile updated!");
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        My Profile
      </h2>
      <div className="flex flex-col items-center mb-6">
        <img
          src={photo || "https://i.postimg.cc/3x3QzSGq/profile.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
        />
        <p className="mt-2 font-semibold">{user?.email}</p>
      </div>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
