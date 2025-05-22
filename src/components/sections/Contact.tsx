import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    description: "moumyndiaye@outlook.com",
    link: "mailto:moumyndiaye@outlook.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    description: "Moumy Ndiaye",
    link: "https://www.linkedin.com/in/moumy-ndiaye-31988b290/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    description: "NMoumy",
    link: "https://github.com/NMoumy",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="no-max-h min-h-screen flex flex-col items-center">
      <div>
        <h2 className="section-title">
          Me <span className="text-accent">contacter</span>
        </h2>
      </div>

      <div className="flex flex-1 mt-15 lg:flex-row flex-col-reverse justify-end lg:justify-center lg:items-start items-center p-4 gap-10 pb-10">
        {/* Formulaire */}
        <ContactForm />

        {/* Informations */}
        <div className="bg-primary p-6 rounded-xl shadow-md w-10/11 sm:w-2/3 lg:w-1/3 gap-3 flex flex-col">
          <h3 className="text-xl">
            Disponible pour des offres professionnels <br /> et de projets web !
          </h3>
          <p className="">
            N&apos;hésitez pas à me contacter pour discuter d&apos;une opportunité de stage, d&apos;un emploi ou
            d&apos;un projet freelance. Je réponds rapidement et avec plaisir !
          </p>
          <ul className="space-y-4 text-md">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-accent">{item.icon}</span>
                <span className="text-gray-300">
                  <strong>{item.label} : </strong>
                  <a href={item.link} target="_blank" className="hover:underline text-white">
                    {item.description}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
