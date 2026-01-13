interface PredictButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export function PredictButton({
  onClick,
  loading,
  disabled,
}: PredictButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-md text-sm font-medium transition
        ${
          disabled
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 text-white"
        }
      `}
    >
      {loading ? "Analisando imagem..." : "Prever severidade"}
    </button>
  );
}
