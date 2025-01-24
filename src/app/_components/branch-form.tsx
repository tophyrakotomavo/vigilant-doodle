"use client";

import { useState } from "react";
import * as z from "zod";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Checkbox } from "@/app/_components/ui/checkbox";
import type { BranchFormData } from "@/app/types";
import { useForm } from "@tanstack/react-form";

const formSchema = z.object({
  sampana: z.string().min(1, "Required"),
  category: z.string().min(1, "Required"),
  fiangonana: z.string().min(1, "Required"),
  mlv: z.number().min(0),
  synoda: z.string().min(1, "Required"),
  dateCreated: z.string().min(1, "Required"),
  isConsecrated: z.boolean(),
  dateConsecrated: z.string().optional(),
  memberCount: z.number().min(0),
  officeCount: z.number().min(0),
  president: z.object({
    name: z.string().min(1, "Required"),
    phone: z.string().optional(),
    email: z.string().email().optional(),
  }),
  vicePresident: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
  }),
});

interface BranchFormProps {
  onSubmit: (data: BranchFormData) => void;
  onClose: () => void;
}

export function BranchForm({ onSubmit, onClose }: BranchFormProps) {
  const [step, setStep] = useState(1);
  const form = useForm<BranchFormData>({});

  const handleSubmit = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <Card className="w-[450px] bg-white/40 border-3 border-white">
        <CardHeader>
          <CardTitle>
            {step === 4
              ? "For creating a new branch, please, log in"
              : "Fampidirana Sampana"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={() => handleSubmit()}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sampana">Sampana</Label>
                  <Input
                    id="sampana"
                    className="bg-transparent border-b border-black"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sampana/Sampan'asa ao anatin'ny" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="choral">Choral</SelectItem>
                      <SelectItem value="afafi">AFAFI</SelectItem>
                      <SelectItem value="fefi">FEFI</SelectItem>
                      {/* Add other categories */}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fiangonana">Fiangonana</Label>
                  <Input
                    id="fiangonana"
                    className="bg-transparent border-b border-black"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dateCreated">Daty niforonana</Label>
                  <Input
                    type="date"
                    id="dateCreated"
                    className="bg-transparent border-b border-black"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="isConsecrated" />
                  <Label htmlFor="isConsecrated">Efa voatokana</Label>
                </div>

                <div>
                  <Label htmlFor="dateConsecrated">Daty nanokanana</Label>
                  <Input
                    type="date"
                    id="dateConsecrated"
                    className="bg-transparent border-b border-black"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="presidentName">Filoha</Label>
                  <Input
                    id="presidentName"
                    className="bg-transparent border-b border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="presidentPhone">Laharana Finday</Label>
                    <Input
                      id="presidentPhone"
                      className="bg-transparent border-b border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="presidentEmail">E-mail</Label>
                    <Input
                      id="presidentEmail"
                      type="email"
                      className="bg-transparent border-b border-black"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Account</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-transparent border-b border-black"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    className="bg-transparent border-b border-black"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <span className="text-sm text-white/60">Dingana {step}/4</span>
              <div className="space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={step === 1 ? onClose : () => setStep(step - 1)}
                >
                  {step === 1 ? "Hiverina" : "Previous"}
                </Button>
                <Button type="submit">
                  {step === 4 ? "Hampiditra" : "Next"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
