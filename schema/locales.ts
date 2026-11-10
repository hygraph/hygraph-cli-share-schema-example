import { define } from "@hygraph/cli/define";

// The default locale. Every project needs the same one.
export const english = define.locale({ apiId: "en", displayName: "English", isDefault: true });
