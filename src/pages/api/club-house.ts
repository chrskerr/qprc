import type { APIRoute } from "astro";

let callcount = 0;

export const get: APIRoute = () => {
  return {
    body: JSON.stringify({
      message: `This function has been called ${callcount++} times`,
    }),
  };
};

export const post: APIRoute = () => {
  callcount += 10;

  return {
    body: JSON.stringify({
      message: "This was a POST!",
    }),
  };
};
