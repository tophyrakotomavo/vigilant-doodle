import { Footer } from "@/app/_components/footer";
import { Button } from "@/app/_components/ui/button";
import { Label } from "@/app/_components/ui/label";
import { getScopedI18n } from "@/packages/locales/server";
import { Menu } from "lucide-react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getScopedI18n("common");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <Label className="text-2xl font-bold text-muted-foreground">
            STAF
          </Label>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      {children}
      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default PublicLayout;
