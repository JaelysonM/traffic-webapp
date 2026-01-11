import { ImageUpload } from "../src/components/ImageUpload";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">
          Classificador de Acidentes de Trânsito
        </h1>

        <p className="text-sm text-gray-600 text-center">
          Envie uma imagem para prever a severidade do acidente.
        </p>

        <ImageUpload />

      </div>
    </main>
  );
}
