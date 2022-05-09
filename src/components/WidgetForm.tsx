import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    img: {
      src: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    img: {
      src: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                type="button"
                key={key}
                onClick={() => setFeedbackType(key as FeedbackTypes)}
              >
                <img src={value.img.src} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello world!</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          RocketSeat
        </a>
      </footer>
    </div>
  );
}
