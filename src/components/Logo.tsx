export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        {/* Brown/orange sun/roof shape above "ue" */}
        <svg
          className="absolute -top-1 left-8 h-3 w-8"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C8 10 12 10 16 10C20 10 24 10 32 16V0H0V16Z"
            fill="#CD853F"
          />
        </svg>
        
        {/* Main text "Blueportel" */}
        <span className="text-2xl font-bold text-[#1E3A8A]">Blueportel</span>
        
        {/* Wavy blue lines below "portel" */}
        <div className="ml-2 mt-0.5 flex gap-0.5">
          <svg
            className="h-1 w-8"
            viewBox="0 0 32 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C4 0 8 4 12 2C16 0 20 4 24 2C28 0 32 4 32 2"
              stroke="#1E3A8A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <svg
            className="h-1 w-6"
            viewBox="0 0 24 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C3 0 6 4 9 2C12 0 15 4 18 2C21 0 24 4 24 2"
              stroke="#1E3A8A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

