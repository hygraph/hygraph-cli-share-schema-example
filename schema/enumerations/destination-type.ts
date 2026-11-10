import { define } from "@hygraph/cli/define";

export const DestinationType = define.enumeration({
  apiId: "DestinationType",
  displayName: "Destination type",
  values: [
    { apiId: "beach", displayName: "Beach" },
    { apiId: "city", displayName: "City" },
    { apiId: "mountains", displayName: "Mountains" },
  ],
});
