interface NewBranchButtonProps {
  onClick: () => void;
}

export function NewBranchButton({ onClick }: NewBranchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 left-5 flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg border-3 border-white bg-white/20 shadow-[0_0_9.4px_0_#00D4FF] backdrop-blur-[15px] hover:bg-white/50 hover:shadow-[0_0_10px_2px_#00D4FF] transition-all duration-1000 group animate-bounce"
    >
      <svg
        className="w-[50px] h-[50px]"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 25H37.5M25 37.5V12.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold text-white">Hampiditra Sampana</span>
    </button>
  );
}
