import { define, system } from "@hygraph/cli/define";
import * as shared from "../schema";

// Add a field to a shared model
const models = {
  ...shared.models,
  Destination: {
    ...shared.models.Destination,
    fields: [
      ...shared.models.Destination.fields,
      define.field.singleLine({ apiId: "localTip", displayName: "Local tip" }),
    ],
  },
};

// Add a value to a shared enumeration.
// renamedFrom: null is needed because the shared values already include it.
const enumerations = {
  ...shared.enumerations,
  DestinationType: {
    ...shared.enumerations.DestinationType,
    values: [
      ...shared.enumerations.DestinationType.values,
      { apiId: "ski", displayName: "Ski", renamedFrom: null },
    ],
  },
};

// Replace a field on a shared component
const components = {
  ...shared.components,
  SeoMeta: {
    ...shared.components.SeoMeta,
    fields: shared.components.SeoMeta.fields.map((field) =>
      field.apiId === "title"
        ? define.field.singleLine({ apiId: "title", displayName: "Title", title: true, localized: true, required: true })
        : field
    ),
  },
};

// Add a model only this project needs
const LocalGuide = define.model({
  apiId: "LocalGuide",
  apiIdPlural: "LocalGuides",
  displayName: "Local guide",
  fields: [
    define.field.singleLine({ apiId: "name", displayName: "Name", title: true }),
  ],
});

// Add the locale this market needs
const german = define.locale({ apiId: "de", displayName: "German" });

const environment = define.environment({
  locales: [shared.english, german],
  stages: [system.stage.draft(), system.stage.published()],
  enumerations: Object.values(enumerations),
  components: Object.values(components),
  models: [...Object.values(models), LocalGuide],
});

export default define.target({
  name: "europe",
  project: "<europe-project-id>",
  environment: "master",
  endpoint: "<europe-management-api-endpoint>",
  token: process.env.HYGRAPH_TOKEN_EUROPE ?? "",
  apply: environment,
});
