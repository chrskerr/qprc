import type { APIRoute } from "astro";

import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 });

export const get: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.has("c")) {
    cache.set("test", (Number(cache.get("test")) || 0) + 10);

    return {
      body: JSON.stringify({
        message: "Added 10!",
      }),
    };
  }

  return {
    body: JSON.stringify({
      message: cache.get("test"),
    }),
  };
};
