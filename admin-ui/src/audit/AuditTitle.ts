import { Audit as TAudit } from "../api/audit/Audit";

export const AUDIT_TITLE_FIELD = "userName";

export const AuditTitle = (record: TAudit): string => {
  return record.userName || record.id;
};
