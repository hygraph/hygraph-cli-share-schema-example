import { define } from "@hygraph/cli/define";
import { SeoMeta } from "../components/seo-meta";
import { DestinationType } from "../enumerations/destination-type";

export const Destination = define.model({
  apiId: "Destination",
  apiIdPlural: "Destinations",
  displayName: "Destination",
  fields: [
    define.field.singleLine({ apiId: "name", displayName: "Name", title: true }),
    define.field.singleLine({ apiId: "bestSeason", displayName: "Best season" }),
    define.field.enumeration({ apiId: "type", displayName: "Type", enumeration: DestinationType }),
    define.field.component({ apiId: "seo", displayName: "SEO", component: () => SeoMeta }),
  ],
});
