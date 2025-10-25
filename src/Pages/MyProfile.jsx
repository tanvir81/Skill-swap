import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL: photo });
      toast.success("Profile updated!");
      setEditing(false);
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const isUnchanged = name === user?.displayName && photo === user?.photoURL;

  return (
    <div className="min-h-[95vh] flex items-center justify-center px-4 mt-5 mb-5">
      <div
        className="w-full max-w-md bg-base-200 rounded-3xl border border-[#045c90] shadow-lg p-10 space-y-6"
        style={{ boxShadow: "0 8px 24px #045c90" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#045c90]">
          My Profile
        </h2>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-40 h-40 border border-[#045c90] overflow-hidden rounded-xl">
            <img
              src={photo || "https://i.postimg.cc/3x3QzSGq/profile.png"}
              alt="Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://i.postimg.cc/3x3QzSGq/profile.png";
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-[#045c90]">{name}</h3>
          <p className="text-sm font-medium text-gray-600">{user?.email}</p>
        </div>

        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="btn w-full bg-[#045c90] text-white hover:bg-[#034b75]"
          >
            Update Profile
          </button>
        )}

        {editing && (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="label text-[#045c90]">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label text-[#045c90]">Photo URL</label>
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
              className="btn w-full bg-[#f96c1f] text-white hover:bg-[#e05b1a]"
              disabled={loading || isUnchanged}
            >
              {loading ? "Updating..." : "Update"}
            </button>
            {!loading && isUnchanged && (
              <p className="text-green-500 text-sm text-center">
                Profile is up to date ✅
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
