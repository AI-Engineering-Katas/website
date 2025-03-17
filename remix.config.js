import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes, {
      ignoredRouteFiles: ["**/.*"]
    });
  },
  // GitHub Pages serves from /<repository-name>
  publicPath: "/website/",
  serverBuildTarget: "static",
  assetsBuildDirectory: "public/build",
  serverModuleFormat: "esm",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  // This is the key addition - it ensures assets are loaded from the correct path
  baseUrl: "https://ai-engineering-katas.github.io/website"
};