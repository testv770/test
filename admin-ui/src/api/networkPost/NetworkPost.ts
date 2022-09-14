import { User } from "../user/User";

export type NetworkPost = {
  createdAt: Date;
  datePublished: Date | null;
  gif: string | null;
  id: string;
  identityId?: User;
  image: string | null;
  networkType?: "Facebook" | "Instagram" | "TikTok" | "Twitter" | null;
  postId: string | null;
  postText: string | null;
  updatedAt: Date;
  video: string | null;
};
