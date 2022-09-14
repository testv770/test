import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NetworkPostCreateInput = {
  datePublished?: Date | null;
  gif?: string | null;
  identityId: UserWhereUniqueInput;
  image?: string | null;
  networkType?: "Facebook" | "Instagram" | "TikTok" | "Twitter" | null;
  postId?: string | null;
  postText?: string | null;
  video?: string | null;
};
