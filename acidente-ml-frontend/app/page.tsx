"use client";

import { useState } from "react";
import { ImageUpload } from "../src/components/ImageUpload";
import { PredictButton } from "../src/components/PredictButton";
import { ResultCard } from "../src/components/ResultCard";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [result, setResult] = useState<string | null>(null);

  function handlePredict() {
    if (!image) return;

    setStatus("loading");

    // MOCK de backend (simulação)
    setTimeout(() => {
      const outcomes = ["Baixa severidade", "Média severidade", "Alta severidade"];
      const random = outcomes[Math.floor(Math.random() * outcomes.length)];

      setResult(random);
      setStatus("done");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-semibold text-gray-100">
          Classificador de Acidentes
        </h1>

        <p className="text-center text-sm text-gray-400">
          Envie uma imagem para prever a severidade do acidente.
        </p>

        <ImageUpload onImageSelect={setImage} />

        <PredictButton
          disabled={!image || status === "loading"}
          loading={status === "loading"}
          onClick={handlePredict}
        />

        {status === "done" && result && <ResultCard result={result} />}
      </div>
    </main>
  );
}
