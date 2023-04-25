type Source = {
  src: string;
  w: number;
};

// https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture

declare module "*&format=avif;webp;&picture" {
  const out: {
    sources: {
      avif: Source[];
      webp: Source[];
    };
    fallback: Source & { h: number };
  };
  export default out;
}
