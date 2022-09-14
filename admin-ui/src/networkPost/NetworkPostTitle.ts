import { NetworkPost as TNetworkPost } from "../api/networkPost/NetworkPost";

export const NETWORKPOST_TITLE_FIELD = "gif";

export const NetworkPostTitle = (record: TNetworkPost): string => {
  return record.gif || record.id;
};
