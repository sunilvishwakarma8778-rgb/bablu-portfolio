import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zlnjjz9",
        "template_s4ef9j8",
        form.current,
        "Q5AiZyU7T1kkpYX0h"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Premium 3D Contact Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16"
      >
        <ContactIcon
          href="mailto:bablu13100@gmail.com?subject=Contact from Portfolio"
          gradient="from-purple-600 to-pink-500"
          shadow="shadow-purple-500/40"
          icon={<HiOutlineMail />}
          label="Email Me"
        />

        <ContactIcon
          href="tel:+916393267067"
          gradient="from-green-500 to-emerald-600"
          shadow="shadow-green-500/40"
          icon={<HiOutlinePhone />}
          label="Call Me"
        />

        <ContactIcon
          href="https://wa.me/916393267067"
          gradient="from-green-600 to-lime-500"
          shadow="shadow-green-600/40"
          icon={<FaWhatsapp />}
          label="WhatsApp"
        />

        <ContactIcon
          href="https://www.linkedin.com/in/bablu-vishwakarma-3a6586b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          gradient="from-blue-600 to-sky-500"
          shadow="shadow-blue-500/40"
          icon={<FaLinkedinIn />}
          label="LinkedIn"
        />
      </motion.div>

      {/* 🧠 Mini Mind Game */}
      <MindGame />
    </section>
  );
};

/* 🔥 REUSABLE 3D CONTACT ICON COMPONENT */
const ContactIcon = ({ href, gradient, shadow, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex flex-col items-center gap-3"
    initial={{ y: 0 }}
    animate={{ y: [-6, 6, -6] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* 🔮 3D Animated Glow */}
    <motion.div
      className="absolute w-24 h-24 rounded-full blur-2xl opacity-60"
      animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "linear-gradient(135deg, rgba(168,85,247,0.8), rgba(236,72,153,0.8))",
      }}
    />

    {/* 🔮 Floating Blob */}
    <motion.div
      className="absolute w-20 h-20 rounded-full blur-2xl opacity-40"
      animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "linear-gradient(135deg, rgba(34,197,94,0.7), rgba(14,165,233,0.7))",
      }}
    />

    {/* 🔥 Icon Card */}
    <div
      className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient}
      flex items-center justify-center text-white text-4xl shadow-2xl ${shadow}
      hover:scale-110 transition-transform duration-300`}
    >
      {icon}
    </div>

    <span className="relative z-10 text-sm text-gray-300 font-medium">
      {label}
    </span>
  </motion.a>
);

/* 🧠 MINI MIND GAME: MEMORY MATCH */
const MindGame = () => {
  const emojis = ["🧠", "🎯", "⚡", "🔥", "🚀", "🎮", "💡", "👾"];

  const createDeck = () => {
    return [...emojis, ...emojis]
      .map((value) => ({
        value,
        id: crypto.randomUUID(),
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(createDeck());
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);

  const resetGame = () => {
    setCards(createDeck());
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
    setMoves(0);
    setMatchedCount(0);
  };

  const handlePick = (card) => {
    if (disabled) return;
    if (card.matched) return;
    if (firstPick?.id === card.id) return;

    if (!firstPick) {
      setFirstPick(card);
      return;
    }

    setSecondPick(card);
    setMoves((m) => m + 1);
  };

  useEffect(() => {
    if (!firstPick || !secondPick) return;

    setDisabled(true);

    if (firstPick.value === secondPick.value) {
      setCards((prev) =>
        prev.map((c) =>
          c.value === firstPick.value ? { ...c, matched: true } : c
        )
      );

      setMatchedCount((x) => x + 1);

      setTimeout(() => {
        setFirstPick(null);
        setSecondPick(null);
        setDisabled(false);
      }, 400);
    } else {
      setTimeout(() => {
        setFirstPick(null);
        setSecondPick(null);
        setDisabled(false);
      }, 700);
    }
  }, [firstPick, secondPick]);

  const isFlipped = (card) =>
    card.matched || card.id === firstPick?.id || card.id === secondPick?.id;

  const isWin = matchedCount === emojis.length;

  return (
    <div className="w-full max-w-3xl mt-10">
      <div className="bg-[#0b0b12] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div>
            <h3 className="text-white text-xl font-bold">🧠 Mini Mind Game</h3>
            <p className="text-gray-400 text-sm">
              Match all pairs to win. (Just for fun 😄)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-300 text-sm">
              Moves: <b className="text-white">{moves}</b>
            </span>

            <button
              onClick={resetGame}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition"
            >
              Restart
            </button>
          </div>
        </div>

        {isWin && (
          <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="text-green-300 font-semibold">
              🎉 You won! Great memory 😄
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handlePick(card)}
              className={`h-16 sm:h-20 rounded-2xl border border-white/10
              flex items-center justify-center text-2xl sm:text-3xl
              transition-all duration-200
              ${isFlipped(card) ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}
            >
              {isFlipped(card) ? card.value : "❓"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
