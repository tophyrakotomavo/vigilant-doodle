import { getScopedI18n } from "@/packages/locales/server";
import { Header } from "@/app/_components/header";

const HomePage = async () => {
  const t = await getScopedI18n("home");

  return (
    <main className="flex-grow">
      <Header />
    </main>
  );
};

export default HomePage;
