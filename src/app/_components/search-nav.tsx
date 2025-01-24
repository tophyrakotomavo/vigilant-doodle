"use client";

import { useState } from "react";
import type { SearchProps } from "@/app/types/index";
import { SearchIcon, X } from "lucide-react";

export function SearchNav({ onSearch }: SearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm, category);
  };

  return (
    <nav className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-[60px] h-[60px] rounded-full border border-white bg-white/20 shadow-[0_0_6.2px_0_rgba(0,212,255,0.75)] hover:rounded-lg hover:border-[3px] hover:bg-white/50 hover:shadow-[0_0_10px_2px_#00D4FF] transition-all duration-500 flex items-center justify-center"
        >
          <SearchIcon className="w-[24px] h-[24px]" />
        </button>
      ) : (
        <div className="flex items-center gap-4 pr-4 h-[60px] rounded-full border border-white bg-white/20 shadow-[0_0_16.6px_0_rgba(0,212,255,0.75)] backdrop-blur-md">
          <input
            type="search"
            placeholder="Hitady"
            className="w-[300px] h-[60px] rounded-full bg-white/20 shadow-md px-5 text-white placeholder:text-white/90 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="relative group">
            <select
              className="bg-white/20 cursor-pointer rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled className="text-black">
                Fiangonana/Sampana/Daty
              </option>
              <option value="sampana" className="text-black">
                Sampana
              </option>
              <option value="fiangonana" className="text-black">
                Fiangonana
              </option>
              <option value="daty" className="text-black">
                Daty
              </option>
            </select>
          </div>

          <button onClick={handleSearch}>
            <SearchIcon className="w-[24px] h-[24px]" />
          </button>

          <button onClick={() => setIsExpanded(false)}>
            <X className="w-[24px] h-[24px]" />
          </button>
        </div>
      )}
    </nav>
  );
}
