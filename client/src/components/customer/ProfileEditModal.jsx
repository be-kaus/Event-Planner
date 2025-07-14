import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import api from "../../config/api";
import { toast } from "react-hot-toast";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    photo: "",
    gender: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    district: "",
    representing: "",
  });

  const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setPicture(e.target.files[0]);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("fullName", userdata.fullName);
    formData.append("picture", picture);
    formData.append("phone", userdata.phone);
    formData.append("gender", userdata.gender);
    formData.append("occupation", userdata.occupation);
    formData.append("address", userdata.address);
    formData.append("city", userdata.city);
    formData.append("state", userdata.state);
    formData.append("district", userdata.district);
    formData.append("representing", userdata.representing);

    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
      setUserData(res.data.data);
      onClose();
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (oldData) {
      setUserData(oldData);
    }
  }, [isOpen, oldData]);

  if (!isOpen) return null;
  return (
    <>
      <div className="inset-0 fixed bg-black/70 flex justify-center items-center z-101">
        <div className="border border-[#d6b78f] w-1/2 max-h-[70vh] mt-10 bg-[#fff7ef] rounded-2xl overflow-y-auto shadow-xl">
          {/* Header */}
          <div className="text-xl flex justify-between items-center p-4 border-b-2 sticky top-0 bg-[#fdeada] z-10 border-[#e5c79d] rounded-t-2xl">
            <h1 className="font-bold text-[#7a1d1d]">Edit Profile</h1>
            <button onClick={onClose}>
              <IoIosCloseCircle className="text-3xl text-[#c04a3c] hover:text-[#a03027] transition-colors duration-200" />
            </button>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 p-6">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto">
              <div className="w-48 h-48 rounded-full border-4 border-[#d6b78f] overflow-hidden shadow-md">
                <img
                  src={preview || userdata.photo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-[#a3542d] rounded-full p-2 w-fit absolute bottom-2 right-2 bg-[#f5cbaa] hover:bg-[#ab8668] text-[#5e2c04] hover:text-white transition-colors duration-200">
                <label
                  className="text-2xl cursor-pointer"
                  htmlFor="imageUpload"
                >
                  <FaCamera />
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="imageUpload"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid gap-4 p-5 w-full grid-cols-[30%_70%] justify-items-center items-center text-[#5e2c04]">
              <span className="font-bold text-md">Email:</span>
              <input
                type="text"
                name="email"
                value={userdata.email}
                onChange={handelChange}
                className="p-2 w-full bg-[#fef5ee] text-[#5e2c04] rounded-lg"
                disabled
              />

              <span className="font-bold text-md">Name:</span>
              <input
                type="text"
                name="name"
                value={userdata.name}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">Phone:</span>
              <input
                type="tel"
                name="phone"
                value={userdata.phone}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">Gender:</span>
              <select
                name="gender"
                value={userdata.gender}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              >
                <option value="N/A">N/A</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <span className="font-bold text-md">Occupation:</span>
              <input
                type="text"
                name="occupation"
                value={userdata.occupation}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">Address:</span>
              <input
                type="text"
                name="address"
                value={userdata.address}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">City:</span>
              <input
                type="text"
                name="city"
                value={userdata.city}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">District:</span>
              <input
                type="text"
                name="district"
                value={userdata.district}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              />

              <span className="font-bold text-md">State:</span>
              <select
                name="state"
                value={userdata.state}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              >
                <option value="N/A">N/A</option>
                {indianStates ? (
                  indianStates.map((rajya, i) => (
                    <option value={rajya} key={i}>
                      {rajya}
                    </option>
                  ))
                ) : (
                  <option value={""}>No states available</option>
                )}
              </select>

              <span className="font-bold text-md">Representing:</span>
              <select
                name="representing"
                value={userdata.representing}
                onChange={handelChange}
                className="p-2 border rounded-lg border-[#d6b78f] bg-white w-full"
              >
                <option value="N/A">N/A</option>
                <option value="Bride">Bride side</option>
                <option value="Groom">Groom Side</option>
                <option value="both">Common</option>
              </select>
            </div>

            {/* Save Button */}
            <button
              className="border p-2 rounded-lg flex gap-2 justify-center items-center bg-[#f5cbaa] hover:bg-[#ab8668] text-[#5e2c04] hover:text-white transition-all duration-200 text-lg font-semibold w-1/2 mx-auto"
              onClick={handleEditProfile}
            >
              <IoIosSave />
              {loading ? "Saving Data . . . " : "Save Data"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;
