# Share a schema across projects with the Hygraph CLI

This example keeps one shared Hygraph schema in the `schema` folder and applies it to three projects, one per market. Each project uses the shared schema in a different way.

```text
hygraph.config.ts            Lists the three project configs
projects/
  hygraph-americas.config.ts
  hygraph-europe.config.ts
  hygraph-asia.config.ts
schema/
  index.ts                   Exports the shared schema
  locales.ts
  components/
    seo-meta.ts
  enumerations/
    destination-type.ts
  models/
    destination.ts
    offer.ts
    system.ts                Asset and Query
```

| File or folder | What it does |
| --- | --- |
| `schema/` | The shared schema, one file per model, component, and enumeration: the `Destination` and `Offer` models, the `SeoMeta` component, the `DestinationType` enumeration, and the English locale. `schema/index.ts` exports it for the project configs. |
| `projects/hygraph-americas.config.ts` | Travel Americas uses the whole shared schema |
| `projects/hygraph-europe.config.ts` | Travel Europe changes the shared schema. It adds a field, an enumeration value, a model, and the German locale, and replaces a field |
| `projects/hygraph-asia.config.ts` | Travel Asia leaves out the `Offer` model and the `bestSeason` field, and adds the Japanese locale |
| `hygraph.config.ts` | Lists the three project configs, so `plan` and `apply` run on all of them |
| `.env.example` | The token variable each project config reads |

To add a model to the shared schema, add a file in `schema/models/`, and add the model to `models` in `schema/index.ts`. A model that isn't in that list isn't part of the schema.

The tutorial keeps the shared schema in a single `schema.ts` file. This repository splits it into folders, the way a larger project would. The schema is the same. For a step-by-step walkthrough, see [Tutorial: Share a schema across projects with the Hygraph CLI](https://hygraph.com/docs/developer-guides/schema-as-code/hygraph-cli/tutorial-share-schema-across-projects-cli).

## Requirements

- Node.js 22 or later
- `@hygraph/cli` 0.0.13 or later
- Three Hygraph projects with English as the default locale. Use new projects. If a project already has a schema, its plan deletes everything its config doesn't include, with its content.

## Set up

1. Install the dependencies:

    ```bash
    npm install
    ```

2. In each project, go to **Project Settings > Access > Permanent Auth Tokens**, click **Generate CLI PAT**, and copy the token.
3. In each config in `projects/`, replace `<...-project-id>` and `<...-management-api-endpoint>` with the project's values. Find them in **Project Settings > General > Project** and **Project Settings > Access > Endpoints > Management API**.
4. Copy `.env.example` to `.env`, and add each project's token. The CLI doesn't read `.env` files, so load it into your terminal before you run the CLI:

    ```bash
    set -a; source .env; set +a
    ```

## Plan and apply

See what would change in each project:

```bash
npx hygraph plan
```

Review each plan before you apply. Then apply the changes to all three projects:

```bash
npx hygraph apply
```

To run one project only, pass its target, such as `npx hygraph plan --target europe`.
