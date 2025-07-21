import { notion } from "../lib/notion";
import { redis } from "../lib/redis";

export const revalidate = 0;

// export async function getData() {
//   const data = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID as string,
//   });
//   console.log(JSON.stringify(data, null, 2)); // 👈 lihat isi semua
//   return data;
// }

export async function getData() {
  const cachedData = await redis.get("blog");

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  await redis.set("blog", JSON.stringify(data));

  return data;
}

export async function getBlocks(pageId: string) {
  const cachedData = await redis.get(`blog:${pageId}`);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const data = await notion.blocks.children.list({
    block_id: pageId,
  });

  await redis.set(`blog:${pageId}`, JSON.stringify(data));

  return data;
}
