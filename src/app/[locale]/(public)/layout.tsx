import { Footer } from "@/app/_components/footer";
import { LoginFormModal } from "@/app/_components/login-form-modal";
import { Label } from "@/app/_components/ui/label";
import { getScopedI18n } from "@/packages/locales/server";
import { Circle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getScopedI18n("common");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white rounded-lg shadow-sm sticky py-4 top-0 z-10 px-4">
        <div className=" h-fit flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image width={50} height={50} className="rounded-full" src="/LOGO-FPVM.webp" alt="Logo Staf" />
          </Link>
          <LoginFormModal />
      
        </div>
      </header>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="157"
        viewBox="0 0 1280 157"
        fill="none"
      >
        <path
          d="M0 156.552H1280V84.6733C782.636 -27.588 502.408 -28.859 0 84.6733V156.552Z"
          fill="#190039"
          // fill-opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default PublicLayout;
