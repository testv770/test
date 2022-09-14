import { FileView as TFileView } from "../api/fileView/FileView";

export const FILEVIEW_TITLE_FIELD = "id";

export const FileViewTitle = (record: TFileView): string => {
  return record.id || record.id;
};
