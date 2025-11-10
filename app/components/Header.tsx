"use client";

import Avatar from "@mui/material/Avatar";

import { clearUser } from "@/app/localStorage/localStorage";
import { Mark } from "./Mark";

export const Header = () => {
  const logout = () => {
    clearUser();
    window.location.href = "/login";
  };
  return (
    <div>
      <Mark />
      <div className="flex gap-5 justify-end p-3">
        <Avatar
          alt="Authorized by Simba"
          src="/img/dashboard/header1.png"
        ></Avatar>
        <div onClick={logout}>
          <Avatar
            alt="Authorized by Simba"
            src="/img/dashboard/header2.jpg"
          ></Avatar>
        </div>
      </div>
    </div>
  );
};
