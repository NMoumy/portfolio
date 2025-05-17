"use client";
import React, { useState } from "react";

const formFields = [
  { name: "name", label: "Nom (Entreprise)", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Sujet", type: "text" },
  { name: "message", label: "Message", type: "textarea" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    // Ici tu peux appeler emailjs, fetch API, etc.
  };

  return (
    <form onSubmit={handleSubmit} className="glassmorphic p-6 rounded-xl w-5/6 sm:w-2/3 lg:w-1/3">
      {formFields.map((field) => (
        <div key={field.name} className="mb-2">
          <label htmlFor={field.name} className="text-white font-semibold mb-1 block">
            {field.label} :
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={5}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-background focus:outline-none"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-background focus:outline-none"
            />
          )}
        </div>
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className=" text-white px-6 py-2 rounded-md font-semibold transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
