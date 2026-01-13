"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // MOCK de autenticação
    setTimeout(() => {
      if (email === "admin@email.com" && password === "123456") {
        // depois isso vira:
        // await authService.login(email, password)

        router.push("/");
      } else {
        setError("Email ou senha inválidos");
        setLoading(false);
      }
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col gap-6">
        <h1 className="text-center text-2xl font-semibold text-gray-100">
          Entrar
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-sm text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-300">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-sm text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Erro */}
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 w-full py-2 rounded-md text-sm font-medium transition
              ${
                loading
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white"
              }
            `}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
