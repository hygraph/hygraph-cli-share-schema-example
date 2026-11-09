import { define, system } from "@hygraph/cli/define";

export const english = define.locale({ apiId: "en", displayName: "English", isDefault: true });

const DestinationType = define.enumeration({
  apiId: "DestinationType",
  displayName: "Destination type",
  values: [
    { apiId: "beach", displayName: "Beach" },
    { apiId: "city", displayName: "City" },
    { apiId: "mountains", displayName: "Mountains" },
  ],
});

const SeoMeta = define.component({
  apiId: "SeoMeta",
  apiIdPlural: "SeoMetas",
  displayName: "SEO meta",
  fields: [
    define.field.singleLine({ apiId: "title", displayName: "Title", title: true, localized: true }),
    define.field.singleLine({ apiId: "description", displayName: "Description", localized: true }),
  ],
});

const Destination = define.model({
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

const Offer = define.model({
  apiId: "Offer",
  apiIdPlural: "Offers",
  displayName: "Offer",
  fields: [
    define.field.singleLine({ apiId: "title", displayName: "Title", title: true, localized: true }),
    define.field.referenceOneWay({ apiId: "destination", displayName: "Destination", to: () => Destination }),
    define.field.component({ apiId: "seo", displayName: "SEO", component: () => SeoMeta }),
  ],
});

const Asset = system.model.asset({ fields: [] });
const Query = system.model.query({ fields: [] });

export const enumerations = { DestinationType };
export const components = { SeoMeta };
export const models = { Destination, Offer, Asset, Query };
