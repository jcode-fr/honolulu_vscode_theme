import packageJson from "../../package.json";
import { Config } from "../types";

const { icon, contributes, displayName } = packageJson;

export const CONFIG: Config = {
  name: displayName,
  extentionFileName: contributes.themes[0].path,
  icon,
  type: "dark",
  semanticHighlighting: true,
  themePath: "../../../",
};
