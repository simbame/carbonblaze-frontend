"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import * as React from "react";

import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import { ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Button, Tooltip } from "@mui/material";
import { PopperProps } from "@mui/material";

import fire_smallest from "../../../../public/img/smallestFire.svg";
import fire_small from "../../../../public/img/fire_small.svg";
import fire_big from "../../../../public/img/fire_big.svg";
import { register } from "@/app/services/api";
import { Mark } from "@/app/components/Mark";
import theme from "../../theme";

export default function LoginLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const user = await register(name, email, password);
      console.log(user);

      router.push("/login");
    } catch (error) {
      console.error("Register failed:", error);
      alert("Register failed. Please check your credentials.");
    }
  };

  const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]+$/;

  const isValidEmail = (email: string) => {
    return emailRegexp.test(email);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirm = () => setShowConfirm((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const popperProps: Partial<PopperProps> = {
    sx: {
      '&[data-popper-placement*="bottom-end"] .MuiTooltip-arrow': {
        // Example: Adjust arrow's horizontal position when placement is 'bottom'
        left: "calc(50% - 50px)", // Shift arrow slightly left of center
      },
    },
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [-86, 5], // [skidding, distance] - adjust these values
          },
        },
      ],
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="items-center h-full flex">
        <div className="w-1/3 flex flex-col justify-center items-center gap-5 text-center expand-item px-5 min-w-[370px]">
          <div className="w-[352px] flex flex-col gap-10">
            <p className="text-3xl font-bold">
              Welcome!
              <br />
              Sign Up to continue
            </p>
            <div>
              <div className="flex flex-col gap-5">
                <div className="w-full">
                  <TextField
                    id="outlined-disabled"
                    label="Enter your username"
                    sx={{ width: "100%" }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full">
                  <TextField
                    id="outlined-disabled"
                    label="Enter your email address"
                    sx={{ width: "100%" }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {!isValidEmail(email) && (
                    <h6 className="text-red-600 text-left">
                      This email is not available.
                    </h6>
                  )}
                </div>
                <div className="w-full">
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword
                                ? "hide the password"
                                : "display the password"
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full">
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showConfirm ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showConfirm
                                ? "hide the password"
                                : "display the password"
                            }
                            onClick={handleClickShowConfirm}
                            onMouseDown={handleMouseDownConfirm}
                            onMouseUp={handleMouseUpConfirm}
                            edge="end"
                          >
                            {showConfirm ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full flex justify-end">
                  <a href="#" className="underline">
                    Forgot password?
                  </a>
                </div>
                <div className="w-full">
                  {isValidEmail(email) &&
                    password &&
                    name &&
                    confirmPassword &&
                    password === confirmPassword && (
                      <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        type="submit"
                        onClick={handleRegister}
                      >
                        Sign Up
                      </Button>
                    )}
                  {(!isValidEmail(email) ||
                    !password ||
                    !name ||
                    !confirmPassword ||
                    password !== confirmPassword) && (
                    <Tooltip
                      title="Please enter your email ID and password to Sign in"
                      placement="bottom-end"
                      arrow
                      PopperProps={popperProps}
                    >
                      <span>
                        <Button
                          variant="contained"
                          sx={{ width: "100%" }}
                          type="submit"
                          disabled
                        >
                          Sign Up
                        </Button>
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-2/3 bg-color-made m-3 rounded-lg hide-item h-17/18">
          <div className="absolute right-0 bottom-0">
            <Image
              src={fire_big}
              width={400}
              height={300}
              alt="Picture of the author"
              className="hide-item"
            />
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src={fire_small}
              width={200}
              height={140}
              alt="Picture of the author"
              className="hide-item"
            />
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src={fire_smallest}
              width={135}
              height={80}
              alt="Authorized by simba"
            />
          </div>
          <div className="absolute flex flex-col gap-10 left-20 top-34 w-90 min-w-[556px]">
            <div className="font-bold text-white text-6xl leading-20 ">
              <p>Support</p>
              <p> Greener Economy</p>
            </div>
            <p className="text-white text-2xl">
              A Carbon Credit is an allowance for a company holding the credit
              to emit carbon emissions or greenhouse gasses.
            </p>
          </div>
        </div>
        <Mark />
      </div>
    </ThemeProvider>
  );
}
