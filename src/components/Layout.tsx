import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { TableOfContents } from "./TableOfContents";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="ml-64 mr-64 mt-14 px-8 py-6">
        <div className="max-w-[900px] mx-auto">
          <Outlet />
        </div>
      </main>
      <TableOfContents />
    </div>
  );
};
