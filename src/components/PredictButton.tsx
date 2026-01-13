interface PredictButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export function PredictButton({ onClick, loading, disabled }: PredictButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-gray-900 text-white hover:bg-gray-800'
      }`}
    >
      {loading ? 'Analisando...' : 'Analisar imagem'}
    </button>
  );
}
