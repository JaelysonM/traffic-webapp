'use client';

const mockData = [
  {
    id: 1,
    imageUrl: '/accident.jpeg',
    result: 'Alta severidade',
    confidence: 0.92,
    createdAt: '2025-01-10',
  },
  {
    id: 2,
    imageUrl: '/accident.jpeg',
    result: 'Média severidade',
    confidence: 0.74,
    createdAt: '2025-01-09',
  },
  {
    id: 3,
    imageUrl: '/accident.jpeg',
    result: 'Baixa severidade',
    confidence: 0.88,
    createdAt: '2025-01-08',
  },
];

function ResultBadge({ result }: { result: string }) {
  const getColor = (res: string) => {
    if (res.includes('Alta')) return 'text-red-600 bg-red-50';
    if (res.includes('Média')) return 'text-yellow-600 bg-yellow-50';
    if (res.includes('Baixa')) return 'text-green-600 bg-green-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColor(result)}`}>
      {result}
    </span>
  );
}

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Histórico</h1>
          <p className="text-gray-500">Análises realizadas anteriormente</p>
        </header>

        <div className="space-y-4">
          {mockData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt="Imagem analisada"
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex-1">
                <ResultBadge result={item.result} />
                <p className="text-sm text-gray-500 mt-2">
                  Confiança: {(item.confidence * 100).toFixed(0)}%
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-400">{item.createdAt}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-xs text-gray-400">Trabalho Final — PROBEST</p>
        </footer>
      </div>
    </main>
  );
}
