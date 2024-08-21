"use client";
import Card from "@/components/Card";
import Websites from "@/components/Websites";
import { Typography } from "@mui/material";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const { data: session, status } = useSession();
  const [items, setItems] = React.useState([]);
  const router = useRouter();
  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/getSites?userId=${session.user.id}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    if (status == "authenticated") {
      fetchItems();
    }
    if (status === 'unauthenticated') {
      router.push('/login');
    }

  }, [status]);
  return (
    <Card className="bg-white w-full justify-start">
      <Typography variant="p" className="text-primary font-semibold">
        Your saved passwords
      </Typography>
      {items.map((item, index) => {
        return (
          <Websites
            icon={item.icon}
            name={item.siteName}
            count={item.accounts.length}
            length={items.length}
            index={index}
            data={item.accounts}
            key={`account-icon-${index}`}
          />
        );
      })}
      {items.length == 0 && (
        <center>
          <Image src="/empty.svg" width={400} height={400} alt="Empty" className="p-8"/>
          <p className="text-center antialiased text-gray-400 text-sm">
            It looks like you don’t have any accounts saved yet. Why not create
            a new one to get started?
          </p>
        </center>
      )}
    </Card>
  );
};

export default page;
