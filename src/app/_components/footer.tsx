import Link from "next/link";
import { Facebook, Mail, Phone } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/_components/ui/navigation-menu";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-purple-950 to-purple-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">STAF</div>
            <nav className="space-y-2">
              <Link href="/a-propos" className="block hover:text-purple-200">
                a propos
              </Link>
              <Link href="/contact" className="block hover:text-purple-200">
                contact
              </Link>
              <Link
                href="/mentions-legales"
                className="block hover:text-purple-200"
              >
                Mentions légales
              </Link>
            </nav>
          </div>

          {/* Formation Section */}
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-900">
                    Formation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-purple-950">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/formation/informatique"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Informatique
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/formation/langue"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Langue
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/formation/autres"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Autres
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Tetikasa Section */}
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-900">
                    Tetikasa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-purple-950">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/tetikasa/projet-fanilo"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Projet Fanilo
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Sports et loisirs Section */}
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-900">
                    Sports et loisirs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-purple-950">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/sports/football"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Football
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/sports/basketball"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Basketball
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/sports/autres"
                            className="block p-2 hover:bg-purple-900 rounded-md"
                          >
                            Autres
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-purple-200"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-purple-200"
          >
            <Mail className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-purple-200"
          >
            <Phone className="h-5 w-5" />
          </Button>
        </div>

        <Separator className="my-8 bg-purple-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-purple-200">
          © 2024 STAF. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
