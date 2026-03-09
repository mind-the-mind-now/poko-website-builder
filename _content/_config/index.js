import {
  NODE_ENV,
  SRC_DIR_FROM_WORKING_DIR,
  WORKING_DIR_ABSOLUTE,
  CONTENT_PATH_PREFIX,
  CONTENT_DIR,
  PROD_URL,
  DISPLAY_URL,
  CMS_AUTH_URL,
  CMS_REPO,
  CMS_BACKEND,
  CMS_BRANCH,
} from "../../env.config.js";

const { people, spreadPageSetup } = await import(
  `../${SRC_DIR_FROM_WORKING_DIR}/config-11ty/plugins/cms-config/index.js`
);

export const collections = [
  {
    ...people,
    ...spreadPageSetup("committee"),
  },
  {
    ...people,
    ...spreadPageSetup("founders"),
  },
];

export const singletons = [];
