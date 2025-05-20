import { FC, PropsWithChildren } from "react";

interface MainProps {
  className?: string;
}

export const Main: FC<PropsWithChildren<MainProps>> = ({
  children,
  className,
}) => {
  return (
    <main className={`flex-1 overflow-x-hidden ${className || ""}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
};
