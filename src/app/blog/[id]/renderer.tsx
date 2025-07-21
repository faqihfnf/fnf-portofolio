"use client";

import { Render, NotionBlock } from "@9gustin/react-notion-render";
import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export const NotionRenderer = ({ blocks }: { blocks: unknown[] }) => {
  const pageBlocks = blocks as NotionBlock[];
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <Render
      blocks={pageBlocks}
      blockComponentsMapper={{
        heading_1: (value) => {
          return <h1 className="text-4xl font-bold text-indigo-600">{value.block.content?.text[0].plain_text}</h1>;
        },
        heading_2: (value) => {
          return <h2 className="text-3xl font-bold text-indigo-600">{value.block.content?.text[0].plain_text}</h2>;
        },
        heading_3: (value) => {
          return <h3 className="text-2xl font-bold text-indigo-600">{value.block.content?.text[0].plain_text}</h3>;
        },
        paragraph: (value) => {
          return <p className="text-md">{value.block.content?.text[0].plain_text}</p>;
        },
        image: (value) => {
          return <img src={value.block.content?.external?.url ?? value.block.content?.file?.url} alt="Image" className="w-1/2 h-1/2 rounded-lg border-2" />;
        },

        code: (value) => {
          const codeString = value.block.content?.text?.map((t) => t.plain_text).join("") ?? "";
          return (
            <CopyBlock
              text={codeString}
              language="typescript"
              theme={dracula}
              showLineNumbers={false}
              customStyle={{
                marginTop: "12px",
                overflow: "auto",
                lineHeight: "-10px",
                borderRadius: "8px",
                padding: "12px",
                fontFamily: "JetBrains Mono, monospace",
              }}
              codeBlock
            />
          );
        },
      }}
    />
  );
};
