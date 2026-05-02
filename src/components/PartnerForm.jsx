import React, { useState } from "react";
import { services } from "../data/services";
import Swal from "sweetalert2";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    phone: "",
    location: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  //   console.log(services);

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";

    return newErrors;
  };

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyTSdeUr7PQsdPd5tNCxXd_ZltGe6GTaUOBt3xdHRLnDobwIKG_QkzOPiHQyND_aCyZ/exec";

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    const formDataObj = new FormData(e.target);
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formDataObj,
      });

      const data = await res.json();
      console.log("Success:", data);

      // ✅ Clear form properly
      setFormData({
        name: "",
        service: "",
        phone: "",
        location: "",
        description: "",
      });

      Swal.fire({
        title: "Submitted!",
        text: "Your details have been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#7c3aed", // matches your purple theme
      });
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-xl font-semibold text-purple-900">
          Register Your Service
        </h2>

        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-purple-100 rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Service Type (Plumber, Electrician, etc.)"
            className="w-full border border-purple-100 rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-purple-100 rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border border-purple-100 rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about your service"
          className="w-full border border-purple-100 rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white transition ${
            loading
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800"
          }`}
        >
          {loading ? "Submitting..." : "Submit Details"}
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
