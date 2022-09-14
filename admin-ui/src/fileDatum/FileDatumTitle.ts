import { FileDatum as TFileDatum } from "../api/fileDatum/FileDatum";

export const FILEDATUM_TITLE_FIELD = "title";

export const FileDatumTitle = (record: TFileDatum): string => {
  return record.title || record.id;
};
