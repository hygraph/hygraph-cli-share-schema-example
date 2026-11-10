import { define, system } from "@hygraph/cli/define";
import { components, english, enumerations, models } from "../schema";

const environment = define.environment({
  locales: [english],
  stages: [system.stage.draft(), system.stage.published()],
  enumerations: Object.values(enumerations),
  components: Object.values(components),
  models: Object.values(models),
});

export default define.target({
  name: "americas",
  project: "<americas-project-id>",
  environment: "master",
  endpoint: "<americas-management-api-endpoint>",
  token: process.env.HYGRAPH_TOKEN_AMERICAS ?? "",
  apply: environment,
});
