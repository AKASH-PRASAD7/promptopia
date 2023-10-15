"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { Router } from "next/router";

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await res.json();

      setPrompts(data);
    };
    if (session?.user.id) {
      fetchPrompts();
    }
  }, []);
  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };
  const handleDelete = async (prompt) => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete the prompt "${prompt.prompt}"?`
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });
        const filterPrompts = prompts.filter((p) => p._id !== prompt._id);
        setPrompts(filterPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page!"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  );
};

export default MyProfile;
