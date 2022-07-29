import { defineConfig } from "tvyw";

export default defineConfig({
  repoType: "monoRepo",
  root: false,
  framework: "vanilla",
  packageName: "@inbeg-m3/theme",
  workspaceType: "package",
  deploy: true,
});
