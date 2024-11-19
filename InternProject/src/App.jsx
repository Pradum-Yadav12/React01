import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-700">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Healthcare Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-cyan-700 font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <label className="block mb-2 text-cyan-700 font-bold">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <label className="block mb-2 text-cyan-700 font-bold">File Upload</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

