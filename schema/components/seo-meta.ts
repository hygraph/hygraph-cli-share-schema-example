import { define } from "@hygraph/cli/define";

export const SeoMeta = define.component({
  apiId: "SeoMeta",
  apiIdPlural: "SeoMetas",
  displayName: "SEO meta",
  fields: [
    define.field.singleLine({ apiId: "title", displayName: "Title", title: true, localized: true }),
    define.field.singleLine({ apiId: "description", displayName: "Description", localized: true }),
  ],
});
