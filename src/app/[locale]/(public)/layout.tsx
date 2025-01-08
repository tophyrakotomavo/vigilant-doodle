import { Footer } from "@/app/_components/footer";
import { LoginFormModal } from "@/app/_components/login-form-modal";
import { Label } from "@/app/_components/ui/label";
import { getScopedI18n } from "@/packages/locales/server";
import { Circle } from "lucide-react";
import Link from "next/link";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getScopedI18n("common");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white rounded-lg shadow-sm sticky py-4 top-0 z-10 px-4">
        <div className=" h-fit flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Circle className="h-8 w-8 text-muted" />
            <Label className="text-2xl font-bold text-muted cursor-pointer">
              STAF
            </Label>
          </Link>
          <LoginFormModal />
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
