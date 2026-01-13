interface ResultCardProps {
  result: string;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="mt-2 rounded-md border border-gray-600 bg-gray-700 p-4 text-center">
      <p className="text-sm text-gray-300">Resultado da previsão:</p>
      <p className="mt-1 text-lg font-semibold text-gray-100">{result}</p>
    </div>
  );
}
