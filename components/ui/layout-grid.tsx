"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Card {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: React.ReactNode;
  nonExpandable?: boolean;
}

interface LayoutGridProps {
  cards: Card[];
}

export const LayoutGrid = ({ cards }: LayoutGridProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [lastSelected, setLastSelected] = useState<number | null>(null);

  const handleClick = (id: number) => {
    // Don't expand if card is marked as non-expandable
    if (cards.find(card => card.id === id)?.nonExpandable) {
      return;
    }

    setLastSelected(selected);
    setSelected(selected === id ? null : id);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card.id)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-[80vh] w-full md:w-[80vw] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected === card.id && <SelectedCard selected={card} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected !== null ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected !== null ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className={cn(
        "absolute inset-0 h-full w-full transition duration-200"
      )}
    >
      {card.thumbnail}
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-start rounded-lg shadow-2xl relative z-[60] overflow-y-auto">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-80 z-10 backdrop-blur-sm"
      />
      <motion.div
        layoutId={`content-${selected.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative p-8 z-[70] min-h-full w-full"
      >
        <div className="max-w-4xl mx-auto">
          {selected.content}
        </div>
      </motion.div>
    </div>
  );
};
