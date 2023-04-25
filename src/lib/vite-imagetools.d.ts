type Source = {
  src: string;
  w: number;
  h?: number;
};

// https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture

declare module "*&format=avif;webp;&picture" {
  const out: {
    sources: {
      avif: Source[];
      webp: Source[];
    };
    fallback: Source;
  };
  export default out;
}
