"use client";
import { createClient } from "@/lib/supabase/browser";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
  user,
} from "@nextui-org/react";
import Link from "next/link";
import { navigate } from "@/app/actions";
const Users = () => {
  interface UserMetadata {
    avatar_url: string;
    email: string;

    name: string;
  }
  const [userMetadata, setUserMetadata] = useState<UserMetadata>({
    avatar_url: "",
    email: "",
    name: "",
  });
  const supabase = createClient();

  useEffect(() => {
    const trythis = async () => {
      const { data } = await supabase.auth.getSession();

      console.log("====================================");
      if (data.session?.user) {
        // const { data: profile, error } = await supabase.from('profile').select('*').eq("id",data.session?.user.id ).single()
        const { data: projects } = await supabase
          .from("projects")
          .select("*")
          .eq("author_id", data.session?.user.id);

        console.log("====================================");
        console.log(projects);
        console.log("====================================");
        console.log(data.session?.user);
      } else {
        console.log("fuck");
      }
    };
    trythis();
  }, []);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        console.log("====================================");

        if (user && user.user_metadata) {
          // Assuming 'user.user_metadata' contains the fields that match the 'UserMetadata' structure
          setUserMetadata({
            avatar_url: user.user_metadata.avatar_url || "",
            email: user.user_metadata.email || "",
            name: user.user_metadata.name || "",
          });
        }
        console.log("====================================");
        console.log(user);
        console.log("====================================");
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching user data:", error);
      }
    };

    // Call the async function
    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    setUserMetadata({
      avatar_url: "",
      email: "",
      name: "",
    });
    navigate();
  };

  return (
    <>
      {userMetadata.name ? (
        <Popover showArrow placement="bottom">
          <PopoverTrigger>
            <User
              as="button"
              name={userMetadata.name}
              description={userMetadata.email}
              className="transition-transform text-black"
              avatarProps={{
                src: `${userMetadata.avatar_url}`,
              }}
            />
          </PopoverTrigger>
          <PopoverContent className="p-1">
            <Button
              onClick={logout}
              className=" text-gray-600 bg-transparent font-bold"
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button className=" text-white bg-blue-400 font-bold">
          <Link href="/auth">Login</Link>
        </Button>
      )}
    </>
  );
};

export default Users;
