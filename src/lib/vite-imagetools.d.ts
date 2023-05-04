type Source = {
  src: string;
  w: number;
};

type PictureData = {
  sources: {
    avif: Source[];
    webp: Source[];
  };
  img: Source & { h: number };
};

// https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture

declare module "*&format=avif;webp&as=picture" {
  const out: PictureData;
  export default out;
}
