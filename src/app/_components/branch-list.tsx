"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Calendar, ChevronDown, Phone, Mail } from "lucide-react";

interface BranchListProps {
  searchQuery: string;
  searchCategory: string;
}

interface Branch {
  id: string;
  name: string;
  church: string;
  contact: string;
  email: string;
  availableDates: string[];
}

export function BranchList({ searchQuery, searchCategory }: BranchListProps) {
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);
  const [showDates, setShowDates] = useState<string | null>(null);

  // Mock data - in a real app, this would come from your API
  const branches: Branch[] = [
    {
      id: "1",
      name: "Sampana Tanora",
      church: "FPVM Antananarivo",
      contact: "+261 34 00 000 00",
      email: "sampana.tanora@fpvm.mg",
      availableDates: ["2025-02-03", "2025-03-04", "2025-04-10", "2025-06-22"],
    },
  ];

  const filteredBranches = branches.filter((branch) => {
    if (!searchQuery) return true;

    const searchLower = searchQuery.toLowerCase();
    switch (searchCategory) {
      case "sampana":
        return branch.name.toLowerCase().includes(searchLower);
      case "fiangonana":
        return branch.church.toLowerCase().includes(searchLower);
      case "daty":
        return branch.availableDates.some((date) => date.includes(searchLower));
      default:
        return (
          branch.name.toLowerCase().includes(searchLower) ||
          branch.church.toLowerCase().includes(searchLower)
        );
    }
  });

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <div className="flex justify-between mb-4 px-4 border-b border-white/50 pb-2">
        <span className="text-white/50 font-['Life_Savers'] text-xl font-bold">
          Sampana
        </span>
        <span className="text-white/50 font-['Life_Savers'] text-xl font-bold">
          Fiangonana
        </span>
      </div>

      <div className="space-y-4">
        {filteredBranches.map((branch) => (
          <Card key={branch.id} className="bg-white/5 border-none text-white">
            <CardContent className="p-0">
              <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() =>
                  setExpandedBranch(
                    expandedBranch === branch.id ? null : branch.id
                  )
                }
              >
                <span>{branch.name}</span>
                <span>{branch.church}</span>
              </div>

              {expandedBranch === branch.id && (
                <div className="px-6 py-4 bg-white/5">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{branch.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{branch.email}</span>
                    </div>
                  </div>

                  <div>
                    <button
                      className="text-white/80 hover:text-white hover:underline flex items-center gap-2"
                      onClick={() =>
                        setShowDates(showDates === branch.id ? null : branch.id)
                      }
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Fotoana Malalaka</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${showDates === branch.id ? "rotate-180" : ""}`}
                      />
                    </button>

                    {showDates === branch.id && (
                      <Table className="mt-4">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-white">2025</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            {branch.availableDates.map((date) => (
                              <TableCell key={date} className="text-white">
                                {new Date(date).toLocaleDateString("fr-FR", {
                                  month: "long",
                                  day: "numeric",
                                })}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableBody>
                      </Table>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
