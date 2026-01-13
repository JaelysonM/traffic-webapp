'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // MOCK de autenticação
    setTimeout(() => {
      if (email === 'admin@email.com' && password === '123456') {
        router.push('/');
      } else {
        setError('Email ou senha inválidos');
        setLoading(false);
      }
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Entrar</h1>
          <p className="text-gray-500">Acesse sua conta para continuar</p>
        </header>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600 mb-1.5">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
              loading
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <footer className="mt-16 text-center">
          <p className="text-xs text-gray-400">Trabalho Final — PROBEST</p>
        </footer>
      </div>
    </main>
  );
}
