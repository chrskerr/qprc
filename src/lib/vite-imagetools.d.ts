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

declare module "*?w=256;512;768;1024;2048&format=avif;webp&as=picture" {
  const out: PictureData;
  export default out;
}
