import { BiCodeAlt } from "react-icons/bi"; 
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"; 
import { CiFacebook } from "react-icons/ci"; 
import { FiLinkedin } from "react-icons/fi"; 
import { BsWhatsapp, BsTelephone } from "react-icons/bs"; 
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import React from "react";

export default function Contact({ NavBarOuvert }) {
  // État local pour inputs contrôlés
  const [formData, setFormData] = React.useState({
    nom: "",
    email: "",
    message: ""
  });

  // Handler input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Envoi du formulaire
  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      access_key: "c9836232-f4a2-491b-b65d-55d8e6383360",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      const json = await res.json();

      if (json.success) {
        Swal.fire({
          title: "Message envoyé avec succès",
          text: "Tu auras une réponse de la part de Kevin sous peu.",
          icon: "success"
        });
        // Reset formulaire
        setFormData({ nom: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi.");
      }
    } catch (error) {
      Swal.fire({
        title: "Oups, erreur !",
        text: "Une galère est survenue, réessaie plus tard.",
        icon: "error"
      });
    }
  };

  return (
    <div
      id="Contact"
      className={`flex items-center justify-center w-full h-full lg:mb-32 mb-96 lg:h-screen pb-96 lg:p-0 ${
        NavBarOuvert ? "blur-sm lg:blur-none" : ""
      }`}
    >
      <div className="w-full lg:h-[80%] h-screen p-2 mt-20 flex justify-between items-center gap-5 flex-col lg:flex-row">
        {/* Informations */}
        <div className="w-full h-screen border border-white lg:h-full bg-stone-900 lg:ml-20">
          <div className="p-3 text-2xl font-extrabold tracking-wider text-center text-white border-b">
            Informations
          </div>
          <div className="w-full h-screen lg:h-[90.9%] mt-1 flex flex-col lg:flex-row">
            {/* Côté gauche */}
            <div className="flex flex-col items-center justify-center w-full h-screen space-y-5 text-xl font-bold text-white border-r border-white lg:h-full">
              <div className="flex items-center p-3 cursor-not-allowed hover:bg-stone-700 rounded-xl hover:outline outline-1 outline-stone-300 outline-offset-4">
                <BsTelephone className="absolute mr-3 left-5 lg:static" /> : 0389423351
              </div>
              <a
                href="https://wa.me/0389423351"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 text-white no-underline cursor-pointer hover:bg-stone-700 rounded-xl hover:outline outline-1 outline-stone-300 outline-offset-4"
              >
                <BsWhatsapp className="absolute mr-3 left-5 lg:static" /> : 0389423351
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-niavo-39a541286/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 text-white no-underline cursor-pointer hover:bg-stone-700 rounded-xl hover:outline outline-1 outline-stone-300 outline-offset-4"
              >
                <FiLinkedin className="absolute mr-3 left-5 lg:static" /> : Niavo Kevin
              </a>
              <a
                href="https://web.facebook.com/niavo.kevin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 text-white no-underline cursor-pointer hover:bg-stone-700 rounded-xl hover:outline outline-1 outline-stone-300 outline-offset-4"
              >
                <CiFacebook className="absolute mr-3 left-5 lg:static" /> : Niavo Kevin
              </a>
              <a
                href="mailto:niavo.kevin9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 text-white no-underline cursor-pointer hover:bg-stone-700 rounded-xl hover:outline outline-1 outline-stone-300 outline-offset-4"
              >
                <AiOutlineMail className="absolute mr-3 left-5 lg:static" /> : niavo.kevin9@gmail.com
              </a>
            </div>

            {/* Côté droite */}
            <div className="flex flex-col items-center justify-center w-full h-screen space-y-5 text-xl font-bold text-white border-t border-white lg:h-full lg:border-none">
              <div className="flex flex-col items-center justify-center w-full space-y-5 text-xl font-bold text-white border-white h-1/2">
                <div className="flex items-center justify-center">
                  <AiOutlineUser className="absolute mr-3 left-5 lg:static" /> MAMINIRINA Niavo Kevin
                </div>
                <div className="flex items-center justify-center">
                  <BiCodeAlt className="absolute mr-3 left-5 lg:static" /> Développeur fullstack JS Junior
                </div>
                <div className="flex items-center justify-center">
                  <FaMapMarkerAlt className="absolute mr-3 left-5 lg:static" /> Itaosy Antananarivo Madagascar
                </div>
              </div>

              {/* Map */}
              <div className="flex flex-col items-center justify-center w-full space-y-5 text-xl font-bold text-white border-white h-1/2">
                <div className="w-full h-full bg-white border-2 border-white">
                  <iframe
                    title="Location de Niavo Kevin"
                    width="100%"
                    height="100%"
                    className="object-cover border-2 border-white w-full h-full shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=-18.90038,47.47462&z=18&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="w-full h-screen pb-5 mt-20 border lg:h-full lg:w-1/2 lg:mr-20 lg:mt-0 lg:pb-0">
          <div className="p-3 text-2xl font-extrabold tracking-wider text-center text-white border-b border-white">
            Contactez-moi
          </div>

          <form
            className="w-full h-[90%] mt-1 p-2 flex flex-col space-y-3 justify-center"
            onSubmit={onSubmit}
          >
            <label htmlFor="nom" className="text-lg font-bold text-white">
              Nom
            </label>
            <motion.input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              title="Entrez votre nom"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.5 }}
              placeholder="Veuillez entrer votre nom"
              className="p-2 transition-all duration-300 border border-white outline-none default:bg-transparent rounded-2xl outline-1 focus:outline-white outline-offset-1 focus:bg-stone-900 focus:text-white"
              required
            />

            <label htmlFor="email" className="text-lg font-bold text-white">
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              title="Entrez votre Email"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.5 }}
              placeholder="Veuillez entrer votre Email"
              className="p-2 transition-all duration-300 border border-white outline-none rounded-2xl outline-1 focus:outline-white outline-offset-1 focus:bg-stone-900 focus:text-white"
              required
            />

            <label htmlFor="message" className="text-lg font-bold text-white">
              Message
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              title="Entrez votre message"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.5 }}
              placeholder="Veuillez entrer votre message"
              className="p-2 border border-white outline-none rounded-2xl outline-1 focus:outline-white outline-offset-1 h-[20vh] resize-none focus:bg-stone-900 transition-all duration-300 focus:text-white"
              required
            />

            <div className="w-full h-[10vh] flex items-end">
              <motion.input
                type="submit"
                value="Envoyer"
                className="w-full p-3 text-lg font-bold text-white border border-stone-500 rounded-2xl bg-stone-900 hover:bg-stone-700 hover:border-stone-900"
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.5 }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
