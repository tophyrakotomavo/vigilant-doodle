"use client";

import { useState } from "react";
import { SearchNav } from "@/app/_components/search-nav";
import { Header } from "@/app/_components/header";
import { BranchList } from "@/app/_components/branch-list";
import { NewBranchButton } from "@/app/_components/nav-branch-button";
import { BranchForm } from "@/app/_components/branch-form";
import type { BranchFormData } from "@/app/types/index";

export default function ChurchManagement() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSearchCategory(category);
  };

  const handleSubmitBranch = async (data: BranchFormData) => {
    // Here you would typically send this to your API
    console.log("Submitting branch data:", data);
    setIsFormOpen(false);
  };

  return (
    <div className="h-screen bg-[#0C001E] text-white">
      <SearchNav onSearch={handleSearch} />
      <Header />

      <div className="container mx-auto px-4">
        <BranchList searchQuery={searchQuery} searchCategory={searchCategory} />
      </div>

      <NewBranchButton onClick={() => setIsFormOpen(true)} />

      {isFormOpen && (
        <BranchForm
          onSubmit={handleSubmitBranch}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
