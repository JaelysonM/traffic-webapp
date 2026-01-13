import { AccidentProcessResult } from '@/service/api/types';

interface ResultCardProps {
  result: AccidentProcessResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const getSeverityLabel = (className?: string) => {
    if (className === 'severe') return 'Alta severidade';
    if (className === 'moderate') return 'Média severidade';
    if (className === 'not_accident') return 'Sem acidente';
    return 'Desconhecido';
  };

  const getSeverityColor = (className?: string) => {
    if (className === 'severe') return 'text-red-600 bg-red-50 border-red-200';
    if (className === 'moderate') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (className === 'not_accident') return 'text-green-600 bg-green-50 border-green-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <div className={`rounded-lg border p-6 text-center ${getSeverityColor(result.details?.class)}`}>
      <p className="text-xs uppercase tracking-wide opacity-70 mb-1">Resultado</p>
      <p className="text-xl font-semibold mb-2">{getSeverityLabel(result.details?.class)}</p>
      {typeof result.details?.confidence === 'number' && (
        <p className="text-sm text-gray-500 mb-2">
          Confiança: {(result.details.confidence * 100).toFixed(2)}%
        </p>
      )}
      {result.details?.probabilities && (
        <div className="mt-2 text-xs text-left">
          <div>Probabilidades:</div>
          <div className="mt-1">
            <span className="block">
              Alta: {((result.details?.probabilities?.severe ?? 0) * 100).toFixed(2)}%
            </span>
            <span className="block">
              Média: {((result.details?.probabilities?.moderate ?? 0) * 100).toFixed(2)}%
            </span>
            <span className="block">
              Sem acidente: {((result.details?.probabilities?.not_accident ?? 0) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      )}
      {result.message && <p className="text-xs text-gray-400 mt-4">{result.message}</p>}
    </div>
  );
}
