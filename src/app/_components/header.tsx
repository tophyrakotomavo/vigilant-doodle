export const Header = () => {
  return (
    <header className="relative pt-20 pb-10 text-center">
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 780"
        fill="none"
      >
        <g filter="url(#filter0_d_4_2)">
          <path
            d="M-337.5 267.25C-337.5 28.2488 -143.751 -165.5 95.25 -165.5H1282.75C1466.52 -165.5 1615.5 -16.5228 1615.5 167.25V239.275C1615.5 383.269 1498.77 500 1354.77 500C1305.91 500 1258.03 513.732 1216.59 539.631L1157.03 576.857C1031.96 655.023 879.001 674.688 738.23 630.697L640 600L541.77 569.303C400.999 525.312 248.037 544.977 122.97 623.143L63.787 660.133C22.1025 686.186 -26.0644 700 -75.2207 700C-220.074 700 -337.5 582.574 -337.5 437.721V267.25Z"
            fill="url(#paint0_linear_4_2)"
            className="stroke-white stroke-2"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_4_2"
            x1="639"
            y1="-165.5"
            x2="639"
            y2="700"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00AEFF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#006999" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="text-[128px] font-black tracking-[34.56px] text-white/60 [text-shadow:0_0_10px_#00D4FF,0_0_20px_#00D4FF,0_0_50px_#00D4FF] [-webkit-text-stroke:3px_white]">
        STAF
      </h1>
      <h2 className="text-4xl font-normal tracking-[1.2px] text-[#0C001E] [-webkit-text-stroke:1px_white] font-limelight">
        Fiangonana Protestanta Vaovao eto Madagasikara
      </h2>
    </header>
  );
};
