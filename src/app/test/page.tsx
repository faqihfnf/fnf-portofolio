import { getData } from "@/src/services/notionServices";
import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const revalidate = 0;

export default async function TestPage() {
  const { results } = await getData();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Blog</h1>
      <div>
        {(results as PageObjectResponse[]).map((result) => {
          const titleProp = result.properties.Name;
          const title = titleProp.type === "title" && titleProp.title.length > 0 ? titleProp.title[0].plain_text : "Untitled";

          return (
            <Link href={`/blog/${result.id}`} key={result.id}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
