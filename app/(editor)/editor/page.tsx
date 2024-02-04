"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const EditorPage = () => {

  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    content: "",
  });

  const {data: session, status} = useSession()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://dece-neuz-server.onrender.com/news",
        {
          Title: formData.title,
          Content: formData.content,
          ShortDescription: formData.shortDescription,
          User: session?.user.UserName
        }
      );
      // JSON.parse(response.data)
      if(response.status == 200)
      {
        console.log("Post added")
        router.push("/")
      }
    }
    catch(error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <Input
          type="text"
          placeholder="Short Description"
          value={formData.shortDescription}
          onChange={handleChange}
          name="shortDescription"
        />
        <Input
          type="text"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          name="content"
        />
        <Button
          className="w-full max-w-80 rounded bg-orange-500 px-8 py-2 text-sm hover:bg-orange-600"
          type="submit"
        >
          Publish
        </Button>
      </form>
    </div>
  );
};

export default EditorPage;
