import { define } from "@hygraph/cli/define";
import { SeoMeta } from "../components/seo-meta";
import { Destination } from "./destination";

export const Offer = define.model({
  apiId: "Offer",
  apiIdPlural: "Offers",
  displayName: "Offer",
  fields: [
    define.field.singleLine({ apiId: "title", displayName: "Title", title: true, localized: true }),
    define.field.referenceOneWay({ apiId: "destination", displayName: "Destination", to: () => Destination }),
    define.field.component({ apiId: "seo", displayName: "SEO", component: () => SeoMeta }),
  ],
});
