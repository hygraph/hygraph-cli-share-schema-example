// The shared schema. Each project config imports from this file.
import { SeoMeta } from "./components/seo-meta";
import { DestinationType } from "./enumerations/destination-type";
import { Destination } from "./models/destination";
import { Offer } from "./models/offer";
import { Asset, Query } from "./models/system";

export { english } from "./locales";

export const enumerations = { DestinationType };
export const components = { SeoMeta };
export const models = { Destination, Offer, Asset, Query };
