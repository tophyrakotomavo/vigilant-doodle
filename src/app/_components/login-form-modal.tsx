"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Input } from "@/app/_components/ui/input";
import { useState } from "react";
import { InputPassword } from "./input-password";
import { useSigninForm } from "../_hooks/use-signin-form";
import { Loader } from "lucide-react";

export const LoginFormModal = () => {
  const [open, setOpen] = useState(false);
  const { signinMutation, signingForm } = useSigninForm();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">connexion</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-100 p-0 overflow-hidden">
        {/* Orange corner */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full bg-orange-500 rounded-br-[100%]" />
        </div>

        {/* Purple corner */}
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full bg-purple-700 rounded-tl-[100%]" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="absolute top-4 right-4">
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              STAF
            </DialogTitle>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              signingForm.handleSubmit();
            }}
            className="space-y-6 mt-8"
          >
            <div className="space-y-2">
              <signingForm.Field name="identifier">
                {(field) => (
                  <>
                    <label className="text-sm font-medium text-purple-900">
                      User name
                    </label>
                    <Input
                      className="bg-white border-0 shadow-sm"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="username"
                    />
                  </>
                )}
              </signingForm.Field>
            </div>

            <div className="space-y-2">
              <signingForm.Field name="password">
                {(field) => (
                  <>
                    <label className="text-sm font-medium text-purple-900">
                      Password
                    </label>
                    <InputPassword
                      className="bg-white border-0 shadow-sm"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="*******"
                    />
                  </>
                )}
              </signingForm.Field>
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white px-8"
              >
                {signinMutation.isPending ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Sign in"
                )}
              </Button>
              <Button
                variant="link"
                className="text-gray-600 hover:text-purple-700"
              >
                Lost password
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
