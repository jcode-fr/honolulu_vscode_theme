import fs from "fs";
import path from "path";
import { CONFIG } from "../theme/config";
import { FLAME_APP_STUDIO_THEME } from "../theme/theme";

export function generateTheme(): void {
  try {
    fs.writeFileSync(
      path.join(__dirname, `${CONFIG.themePath}/${CONFIG.extentionFileName}`),
      JSON.stringify(FLAME_APP_STUDIO_THEME)
    );

    console.log(`${CONFIG.name} generated !`);
  } catch (error) {
    console.error(error);
  }
}
