"use client";
import Card from "@/components/Card";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect if user is authenticated
      router.push("/home");
    }
  }, [status, router]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.log(result.error);
      setError(result.error);
    } else if (result?.ok) {
      router.push("/home");
    }
  };

  return (
    <Card className="w-11/12 sm:w-96 justify-center items-center  m-auto">
      <Image src="/cavern.svg" width={160} height={160} alt="Cavern" />
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center m-auto gap-4"
      >
        <TextField
          label="Email"
          fullWidth
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          required
          type="email"
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
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon></LockOutlinedIcon>
              </InputAdornment>
            ),
          }}
        />
        <p className={error != "" ? "text-red-700 text-xs" : "hidden"}>
          {error}
        </p>
        <Button
          variant="contained"
          className="bg-primary"
          sx={{ borderRadius: 999 }}
          fullWidth
          type="submit"
          disabled={isLoading}
        >
          Login
        </Button>
        <Button variant="text" className="rounded-full" fullWidth type="submit">
          Register
        </Button>
      </form>
    </Card>
  );
}

export default page;
