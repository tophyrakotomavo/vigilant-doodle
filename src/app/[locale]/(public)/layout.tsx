import { getScopedI18n } from "@/packages/locales/server";
import Link from "next/link";
import Image from "next/image";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getScopedI18n("common");

  return (
    <div className="flex flex-col min-h-screen bg-[#0C001E]">
      <header className="bg-gradient-to-b from-[#1c0c35b3] to-[#0C001E] shadow-sm sticky py-4 top-0 z-10 px-4">
        <div className=" h-fit flex items-center justify-between">
          <Link href="/">
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src="/zanaroot.webp"
              alt="Logo Staf"
            />
          </Link>
        </div>
      </header>
      {children}
      <footer className="mt-24 py-2 text-center text-sm text-white/40 bg-gradient-to-b from-[#1c0c35b3] to-[#0C001E]">
        © 2024 STAF. Tous droits réservés.
      </footer>
    </div>
  );
};

export default PublicLayout;
