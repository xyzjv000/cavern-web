"use client";
import Card from "@/components/Card";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <Card className="w-11/12 sm:w-96 justify-center items-center  m-auto">
      <Image src="/cavern.svg" width={160} height={160} alt="Cavern" />
      <TextField
        label="Email"
        fullWidth
        placeholder="Email Address"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon></EmailOutlinedIcon>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        security="password"
        fullWidth
        placeholder="Password"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon></LockOutlinedIcon>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        className="bg-primary rounded-full"
        fullWidth
        onClick={() => router.push("/home")}
      >
        Login
      </Button>
      <Button
        variant="text"
        className="rounded-full"
        fullWidth
        onClick={() => router.push("/register")}
      >
        Register
      </Button>
    </Card>
  );
}

export default page;
