"use client";
import React, { useState, useEffect } from "react";

const formFields = [
  { name: "name", label: "Nom (Entreprise)", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Sujet", type: "text" },
  { name: "message", label: "Message", type: "textarea" },
];

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT!;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
  <div className="relative flex flex-col items-center w-10/11 sm:w-2/3 lg:w-1/3">
    {/* PopUp notification*/}
    {status === "success" && (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
        Merci, votre message a été envoyé !
      </div>
    )}
    {status === "error" && (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-50">
        Erreur lors de l&apos;envoi. Veuillez réessayer.
      </div>
    )}

    <form onSubmit={handleSubmit} className="glassmorphic p-6 rounded-xl w-full">
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
              className="w-full mt-1 p-2 rounded bg-background focus:outline-none resize-none"
              required
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-background focus:outline-none"
              required
            />
          )}
        </div>
      ))}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-white px-6 py-2 rounded-md font-semibold transition-colors disabled:opacity-50 hover:text-secondary"
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>
      </div>
    </form>
  </div>


  );
};

export default ContactForm;
