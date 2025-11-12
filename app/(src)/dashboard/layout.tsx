"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { AppBar } from "../../components/AppBar";
import { Header } from "@/app/components/Header";
import { dashboard } from "@/app/services/api";
import { getUser } from "@/app/localStorage/localStorage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const urlSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

  const user = getUser();
  const token = user?.token;

  React.useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await dashboard(token);
        console.log(data);
        const isLogged = data.islogged;
        if (!isLogged && mounted) {
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("You cannot open dashboard:", error);
        alert("You are not signed in. Please sign in.");
        if (mounted) {
          window.location.href = "/login";
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [token]);

  return (
    <>
      <Header />
      <AppBar tagName={urlSegment} />
      <main>{children}</main>
    </>
  );
}
