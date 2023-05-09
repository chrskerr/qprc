import type { APIRoute } from "astro";

let callcount = 0;

export const get: APIRoute = () => {
  return {
    body: JSON.stringify({
      message: `This function has been called ${callcount++} times`,
    }),
  };
};
