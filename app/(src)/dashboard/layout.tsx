"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { AppBar } from "../../components/AppBar";
import { Header } from "@/app/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const urlSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [loggedState, setLoggedState] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");
    const isLogged = loggedUser ? JSON.parse(loggedUser).isLoggedIn : false;
    setLoggedState(isLogged);

    if (!isLogged) {
      window.location.href = "/login";
    }
  }, []);

  if (loggedState === null) {
    return null;
  }

  return (
    <>
      <Header />
      <AppBar tagName={urlSegment} />
      <main>{children}</main>
    </>
  );
}
