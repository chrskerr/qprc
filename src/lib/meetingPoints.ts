import alexHotel from "../images/meetingPoints/alex-hotel.png?w=200;400;800;1600&format=avif;webp&as=picture";
import alexSurfClub from "../images/meetingPoints/alex-surf-club.png?w=200;400;800;1600&format=avif;webp&as=picture";

export type MeetingPoint = {
  googleUrl: string;
  appleUrl: string;
  location: string;
  image: PictureData;
};

export const meetingPoints: Record<string, MeetingPoint> = {
  "alex-surf-club": {
    googleUrl: "https://goo.gl/maps/aVbKhasF9ewbjdcM8",
    appleUrl:
      "https://maps.apple.com/?address=167%20Alexandra%20Pde,%20Alexandra%20Headland%20QLD%204572,%20Australia&auid=11155189744450364328&ll=-26.669116,153.107494&lsp=9902&q=Alex%20Surf%20Club.",
    location:
      "Alex Surf Club, 167 Alexandra Parade, Alexandra Headland QLD 4572",
    image: alexSurfClub,
  },
  "alex-hotel": {
    googleUrl: "https://goo.gl/maps/XD3f1fEGqxemgtXF6",
    appleUrl:
      "https://maps.apple.com/?address=98%20Alexandra%20Pde,%20Alexandra%20Headland%20QLD%204572,%20Australia&auid=2239366138665645170&ll=-26.663732,153.104705&lsp=9902&q=Alexandra%20Headlands%20Hotel",
    location:
      "Alexandra Headlands Hotel, 98 Alexandra Pde, Alexandra Headland QLD 4572",
    image: alexHotel,
  },
};
