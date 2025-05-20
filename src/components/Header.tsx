import { FC } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
