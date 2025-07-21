import { getBlocks } from "@/src/services/notionServices";
import React from "react";
import { NotionRenderer } from "./renderer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await getBlocks(id);
  //   console.log("data", data);

  return (
    <div className="mt-20 p-10">
      <NotionRenderer blocks={data.results} />
    </div>
  );
}
