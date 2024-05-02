"use client";
import Card from "@/components/Card";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter();
  return (
    <Card className="w-11/12 justify-center items-center sm:w-96 m-auto">
      <Image src="/cavern.svg" width={160} height={160} alt="Cavern" />
      <TextField
        label="Name"
        fullWidth
        type="text"
        placeholder="Name"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxOutlinedIcon></AccountBoxOutlinedIcon>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        fullWidth
        type="email"
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
        type="password"
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
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        placeholder="Confirm Password"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon></LockOutlinedIcon>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" className="bg-primary rounded-full" fullWidth type="submit">
        Register
      </Button>
      <Button variant="text"  className="rounded-full"  fullWidth onClick={()=> router.push('/login')}>Login</Button>
    </Card>
  );
}

export default page;
