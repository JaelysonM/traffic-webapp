interface ResultCardProps {
  result: string;
}

export function ResultCard({ result }: ResultCardProps) {
  const getSeverityColor = (severity: string) => {
    if (severity.includes('Baixa')) return 'text-green-600 bg-green-50 border-green-200';
    if (severity.includes('Média')) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (severity.includes('Alta')) return 'text-red-600 bg-red-50 border-red-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <div className={`rounded-lg border p-6 text-center ${getSeverityColor(result)}`}>
      <p className="text-xs uppercase tracking-wide opacity-70 mb-1">Resultado</p>
      <p className="text-xl font-semibold">{result}</p>
    </div>
  );
}
