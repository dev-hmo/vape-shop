"use client";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const btnClass =
    size === "sm"
      ? "w-7 h-7 text-sm"
      : "w-9 h-9 text-base";

  const displayClass = size === "sm" ? "w-8 text-sm" : "w-10 text-base";

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={`${btnClass} rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className={`${displayClass} text-center font-semibold text-white`}
      >
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={`${btnClass} rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
