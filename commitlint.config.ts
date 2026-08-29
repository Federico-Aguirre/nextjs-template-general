import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message) =>
      message.startsWith("chore: bump") ||
      message.startsWith("Updating") ||
      message.includes("chore(deps)"),
  ],
};

export default Configuration;
