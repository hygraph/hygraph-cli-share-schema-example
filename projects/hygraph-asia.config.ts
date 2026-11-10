import { define, system } from "@hygraph/cli/define";
import * as shared from "../schema";

// Leave the Offer model out
const { Offer, ...sharedModels } = shared.models;

// Leave the bestSeason field out of Destination
const models = {
  ...sharedModels,
  Destination: {
    ...sharedModels.Destination,
    fields: sharedModels.Destination.fields.filter((field) => field.apiId !== "bestSeason"),
  },
};

// Add the locale this market needs
const japanese = define.locale({ apiId: "jp", displayName: "Japanese" });

const environment = define.environment({
  locales: [shared.english, japanese],
  stages: [system.stage.draft(), system.stage.published()],
  enumerations: Object.values(shared.enumerations),
  components: Object.values(shared.components),
  models: Object.values(models),
});

export default define.target({
  name: "asia",
  project: "<asia-project-id>",
  environment: "master",
  endpoint: "<asia-management-api-endpoint>",
  token: process.env.HYGRAPH_TOKEN_ASIA ?? "",
  apply: environment,
});
